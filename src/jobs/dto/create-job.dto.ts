import { JobType } from '@prisma/client';
import {
  IsNotEmpty,
  IsString,
  MinLength,
  IsEmpty,
  IsNumber,
} from 'class-validator';

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

  @IsNumber()
  @IsNotEmpty()
  minSalary: number;

  @IsNumber()
  @IsNotEmpty()
  maxSalary: number;

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
