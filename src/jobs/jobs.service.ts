import { Injectable } from '@nestjs/common';
import { CreateJobDto } from './dto/create-job.dto';
// import { UpdateJobDto } from './dto/update-job.dto';
import { PrismaService } from 'src/prisma/prisma.service';
// import { formatSalaryRange } from 'src/lib/salaryConversion';

@Injectable()
export class JobsService {
  constructor(private readonly prismaService: PrismaService) {}
  async create(createJobDto: CreateJobDto) {
    const companyName = createJobDto.companyName;
    // const {
    //   salary,
    //   minSalary,
    //   maxSalary,
    // }: { salary: string; minSalary: number; maxSalary: number } =
    //   formatSalaryRange(createJobDto.salaryRange);
    // createJobDto.salaryRange = salary;
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

  //OLDEST
  async findAll() {
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
    });
    return jobs;
  }

  // async findAll(search?: string) {
  //   const jobs = await this.prismaService.jobs.findMany({
  //     select: {
  //       company: {
  //         select: {
  //           id: true,
  //           name: true,
  //           logo: true,
  //         },
  //       },
  //       description: true,
  //       location: true,
  //       id: true,
  //       requirements: true,
  //       responsibilities: true,
  //       title: true,
  //       deadline: true,
  //       salaryRange: true,
  //       type: true,
  //       updatedAt: true,
  //     },
  //     where: search
  //       ? {
  //         AND: [
  //           { title: { search } },
  //           { description: { search } },
  //           { location: { search } },
  //         ],
  //       }
  //       : {},
  //   });
  //   return jobs;
  // }

  findOne(id: number) {
    return `This action returns a #${id} job`;
  }

  // async findAll(filters: {
  //   title?: string;
  //   type?: string;
  //   location?: string;
  //   minSalary?: number;
  //   maxSalary?: number;
  // }) {
  //   const { title, type, location, minSalary, maxSalary } = filters;

  //   const jobs = await this.prismaService.jobs.findMany({
  //     select: {
  //       company: {
  //         select: {
  //           id: true,
  //           name: true,
  //           logo: true,
  //         },
  //       },
  //       description: true,
  //       location: true,
  //       id: true,
  //       requirements: true,
  //       responsibilities: true,
  //       title: true,
  //       deadline: true,
  //       salaryRange: true,
  //       type: true,
  //       updatedAt: true,
  //     },
  //     orderBy: {
  //       updatedAt: 'desc',
  //     },
  //     where: {
  //       AND: {
  //         salaryRange: {
  //           gte: minSalary,
  //           lte: maxSalary,
  //         },
  //         location: location,
  //         jobType: type,
  //         title: title,
  //       },
  //     },
  //   });
  //   return jobs;
  // }

  // update(id: number, updateJobDto: UpdateJobDto) {
  //   return `This action updates a #${id} job`;
  // }

  remove(id: number) {
    return `This action removes a #${id} job`;
  }
}
