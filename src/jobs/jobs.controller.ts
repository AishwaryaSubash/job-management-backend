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
  findAll(@Query('q') search?: string) {
    return this.jobsService.findAll(search);
  }

  // @Get()
  // findAll(
  //   @Query('title') title?: string,
  //   @Query('type') type?: string,
  //   @Query('location') location?: string,
  //   @Query('minSalary') minSalary?: string,
  //   @Query('maxSalary') maxSalary?: string,
  // ) {
  //   return this.jobsService.findAll({
  //     title,
  //     type,
  //     location,
  //     minSalary: minSalary ? Number(minSalary) : undefined,
  //     maxSalary: maxSalary ? Number(maxSalary) : undefined,
  //   });
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
