import { Injectable } from '@nestjs/common';
import { CreateJobDto } from './dto/create-job.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { JobType } from '@prisma/client';

@Injectable()
export class JobsService {
  constructor(private readonly prismaService: PrismaService) {}
  async create(createJobDto: CreateJobDto) {
    const companyName = createJobDto.companyName;
    const company = await this.prismaService.companies.upsert({
      where: {
        name: companyName,
      },
      update: {},
      create: {
        name: companyName as string,
      },
      select: {
        id: true,
      },
    });
    createJobDto.companyId = company.id;
    delete createJobDto.companyName;
    const job = await this.prismaService.jobs.create({
      data: createJobDto,
    });
    return job;
  }

  async findAll(filters: {
    search?: string;
    location?: string;
    jobType?: string;
    salaryMin?: number;
    salaryMax?: number;
  }) {
    const { search, location, jobType, salaryMin, salaryMax } = filters;
    const jobTypeFilter: { type?: JobType } = {};
    if (jobType && Object.values(JobType).includes(jobType as JobType)) {
      jobTypeFilter.type = jobType as JobType;
    }
    const jobs = await this.prismaService.jobs.findMany({
      select: {
        company: {
          select: {
            id: true,
            name: true,
            logo: true,
          },
        },
        description: true,
        location: true,
        id: true,
        requirements: true,
        responsibilities: true,
        title: true,
        deadline: true,
        minSalary: true,
        maxSalary: true,
        type: true,
        updatedAt: true,
      },
      where: {
        AND: [
          search
            ? {
                OR: [
                  { title: { contains: search, mode: 'insensitive' } },
                  { description: { contains: search, mode: 'insensitive' } },
                ],
              }
            : {},
          location
            ? { location: { contains: location, mode: 'insensitive' } }
            : {},
          jobTypeFilter,
          salaryMin !== undefined ? { maxSalary: { gte: salaryMin } } : {},
          salaryMax !== undefined ? { minSalary: { lte: salaryMax } } : {},
        ],
      },
      orderBy: { updatedAt: 'desc' },
    });
    return jobs;
  }

  findOne(id: number) {
    return `This action returns a #${id} job`;
  }

  remove(id: number) {
    return `This action removes a #${id} job`;
  }

  // update(id: number, updateJobDto: UpdateJobDto) {
  //   return `This action updates a #${id} job`;
  // }
}
