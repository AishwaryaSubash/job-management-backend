import { IsNotEmpty, IsString, MinLength, IsEmpty } from 'class-validator';
import { JobType } from 'generated/prisma';

export class CreateJobDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(2)
  title: string;

  @IsString()
  @IsNotEmpty()
  companyName?: string;

  @IsString()
  @IsNotEmpty()
  location: string;

  @IsString()
  @IsNotEmpty()
  type: JobType;

  @IsString()
  @IsNotEmpty()
  salaryRange: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsString()
  @IsNotEmpty()
  requirements: string;

  @IsString()
  @IsNotEmpty()
  responsibilities: string;

  @IsString()
  @IsNotEmpty()
  deadline: string;

  @IsEmpty()
  companyId: string;
}
