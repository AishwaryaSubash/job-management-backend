import {
  Controller,
  Get,
  Post,
  Body,
  // Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { JobsService } from './jobs.service';
import { CreateJobDto } from './dto/create-job.dto';
// import { UpdateJobDto } from './dto/update-job.dto';

@Controller('jobs')
export class JobsController {
  constructor(private readonly jobsService: JobsService) {}

  @Post()
  create(@Body() createJobDto: CreateJobDto) {
    return this.jobsService.create(createJobDto);
  }

  @Get()
  async findAll(
    @Query('search') search?: string,
    @Query('location') location?: string,
    @Query('jobType') jobType?: string,
    @Query('salaryMin') salaryMin?: string,
    @Query('salaryMax') salaryMax?: string,
  ) {
    return this.jobsService.findAll({
      search,
      location,
      jobType,
      salaryMin: salaryMin ? Number(salaryMin) : undefined,
      salaryMax: salaryMax ? Number(salaryMax) : undefined,
    });
  }

  // @Get()
  // findAll() {
  //   return this.jobsService.findAll();
  // }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.jobsService.findOne(+id);
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateJobDto: UpdateJobDto) {
  //   return this.jobsService.update(+id, updateJobDto);
  // }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.jobsService.remove(+id);
  }
}
