
---

## **Backend – README.md**
```md
# Job Management Admin Interface – Backend

This is the **backend** for the Job Management Admin Interface built with **NestJS**, **PostgreSQL**, and **Prisma ORM**.  
It provides REST API endpoints for managing job postings.

---

## 🚀 Features
- **NestJS** framework with **TypeScript**.
- **PostgreSQL** database.
- **Prisma ORM** for database queries and migrations.
- **Jobs Module**:
  - **Endpoints**:
    - `POST /jobs` – Create a job posting.
    - `GET /jobs` – Fetch all jobs (supports filters).
    - `GET /jobs/:id` – Get job details.
    - *(Optional)* Update/Delete job endpoints.
  - **Job Model Fields**:
    - Job Title
    - Company Name
    - Location
    - Job Type
    - Salary Range
    - Job Description
    - Requirements
    - Responsibilities
    - Application Deadline
- **Filtering**:
  - Supports filtering by:
    - Job Title
    - Location
    - Job Type
    - Salary Range
- **Error Handling**:
  - Uses NestJS exception filters.
  - Handles Prisma errors like `P1017` (server connection issues).

---

## 📦 Installation
```bash
# Clone repository
git clone https://github.com/AishwaryaSubash/job-management-backend.git
cd job-management-backend

# Install dependencies
npm install
