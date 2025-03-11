# Student Fee Management System

![Next.js](https://img.shields.io/badge/Next.js-15-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.0-38bdf8)

A comprehensive, open-source fee management solution designed specifically for educational institutions. This system helps accountants efficiently track, manage, and report on student fees with a clean, intuitive interface.

## Purpose

Managing student fees manually can be error-prone and time-consuming. This system aims to:

-   Simplify the process of recording and tracking fee payments
-   Provide clear visibility into outstanding dues
-   Generate comprehensive reports for financial planning
-   Organize students by departments and academic sessions
-   Reduce administrative overhead for educational institutions

## Features

### Student Management

-   **Comprehensive Student Records**: Store complete student information including personal details, contact information, and enrollment data
-   **Department & Session Organization**: Group students by department and academic session (e.g., 2018-2022)
-   **Bulk Operations**: Perform actions on multiple students simultaneously
-   **Advanced Filtering**: Quickly find students based on various criteria

### Fee Management

-   **Fee Structure Definition**: Set up different fee types with customizable amounts
-   **Payment Tracking**: Record full and partial payments with receipt generation
-   **Due Calculation**: Automatically calculate remaining balances
-   **Payment History**: View complete payment history for each student

### Reporting & Analytics

-   **Financial Overview**: Get a snapshot of fee collection status
-   **Outstanding Dues Reports**: Identify students with pending payments
-   **Department-wise Analysis**: Compare fee collection across departments
-   **Session-based Reports**: Track fee collection by academic sessions
-   **Exportable Data**: Export reports to CSV/Excel for further analysis

### User Interface

-   **Intuitive Dashboard**: Get key insights at a glance
-   **Responsive Design**: Works seamlessly on desktop and tablet devices
-   **Data Tables**: Sort, filter, and paginate through student records
-   **Form Validation**: Prevent errors with comprehensive input validation

## Tech Stack

-   **Framework**: [Next.js 14](https://nextjs.org/) with App Router
-   **Language**: [TypeScript](https://www.typescriptlang.org/)
-   **Styling**: [Tailwind CSS](https://tailwindcss.com/) with [shadcn/ui](https://ui.shadcn.com/)
-   **State Management**: React Context API + Server Components
-   **Backend**: Next.js Server Actions (no separate API needed)
-   **Validation**: [Zod](https://github.com/colinhacks/zod) for type-safe schemas
-   **Database**: Your choice (Prisma ORM supported)
-   **Charts**: [Recharts](https://recharts.org/) for data visualization

## Data Models

### Student

-   ID (unique identifier)
-   Registration Number
-   Name (First, Last)
-   Contact Information (Email, Phone)
-   Department (reference)
-   Session/Batch (reference)
-   Enrollment Date
-   Status (active/graduated/etc.)

### Fee Record

-   Student ID (reference)
-   Fee Type (reference)
-   Total Amount
-   Due Date
-   Paid Amount
-   Payment Date
-   Payment Method
-   Receipt Number
-   Remarks

### Department

-   Name
-   Code
-   Description

### Session/Batch

-   Name (e.g., "Batch 2018-2022")
-   Start Year
-   End Year
-   Status (active/completed)

### Fee Type

-   Name (e.g., "Semester Fee", "Admission Fee")
-   Description
-   Default Amount
-   Is Recurring
-   Recurring Period (semester/annual/one-time)

## Getting Started

### Prerequisites

-   Node.js 18.0 or later
-   npm or yarn
-   Database (PostgreSQL recommended, but flexible)

### Installation

1. Clone the repository

    ```bash
    git clone https://github.com/Maaz-Ahmed007/nextjs-student-fee-management-app
    cd nextjs-student-fee-management-app
    ```

2. Install dependencies

    ```bash
    npm install
    ```

3. Set up environment variables

````

cp .env.example .env.local

```plaintext
Then edit `.env.local` with your database credentials and other configuration.

4. Run database migrations
````

npx prisma migrate dev

```plaintext

5. Start the development server
```

npm run dev

# or

yarn dev

```plaintext

6. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```

/app # Next.js App Router
/dashboard # Dashboard page
/students # Student management pages
/departments # Department management pages
/sessions # Session management pages
/fees # Fee management pages
/reports # Report generation pages
/components # Reusable UI components
/ui # shadcn/ui components
/students # Student-related components
/fees # Fee-related components
/reports # Report-related components
/dashboard # Dashboard components
/lib # Utility functions and shared logic
/actions # Server actions
/validations # Zod schemas
/utils # Helper functions
/prisma # Database schema and migrations
/public # Static assets

````plaintext

## Implementation Details

### Server Actions

This project uses Next.js Server Actions for all data operations, eliminating the need for a separate API layer. Here's how it works:

```typescript
// Example server action for adding a new student
'use server'

import { z } from 'zod'
import { db } from '@/lib/db'
import { revalidatePath } from 'next/cache'

const studentSchema = z.object({
  registrationNumber: z.string().min(1, "Registration number is required"),
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address"),
  departmentId: z.string().min(1, "Department is required"),
  sessionId: z.string().min(1, "Session is required"),
  // ... other fields
})

export async function addStudent(formData: FormData) {
  const validatedFields = studentSchema.safeParse({
    registrationNumber: formData.get('registrationNumber'),
    firstName: formData.get('firstName'),
    lastName: formData.get('lastName'),
    email: formData.get('email'),
    departmentId: formData.get('departmentId'),
    sessionId: formData.get('sessionId'),
    // ... other fields
  })

  if (!validatedFields.success) {
    return { error: validatedFields.error.flatten().fieldErrors }
  }

  try {
    await db.student.create({
      data: validatedFields.data,
    })

    revalidatePath('/students')
    return { success: true }
  } catch (error) {
    return { error: 'Failed to create student' }
  }
}
````

### Data Validation

All data is validated using Zod schemas to ensure type safety and data integrity:

```typescript
// Example Zod schema for fee payment
export const feePaymentSchema = z.object({
	studentId: z.string().min(1, "Student is required"),
	feeTypeId: z.string().min(1, "Fee type is required"),
	amount: z.coerce.number().positive("Amount must be positive"),
	paymentDate: z.date(),
	paymentMethod: z.enum(["cash", "bank", "online", "other"]),
	receiptNumber: z.string().optional(),
	remarks: z.string().optional(),
});
```

### UI Components

The system uses shadcn/ui components for a consistent and accessible user interface:

```typescriptreact
// Example student list component
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { getStudents } from "@/lib/actions/student-actions"

export default async function StudentList() {
  const students = await getStudents()

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Students</h2>
        <Button asChild>
          <Link href="/students/new">Add Student</Link>
        </Button>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Reg. Number</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Department</TableHead>
            <TableHead>Session</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {students.map((student) => (
            <TableRow key={student.id}>
              <TableCell>{student.registrationNumber}</TableCell>
              <TableCell>{student.firstName} {student.lastName}</TableCell>
              <TableCell>{student.department.name}</TableCell>
              <TableCell>{student.session.name}</TableCell>
              <TableCell>
                <Button variant="ghost" asChild>
                  <Link href={`/students/${student.id}`}>View</Link>
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
```

## Key Features Implementation

### Dashboard

The dashboard provides a quick overview of:

-   Total students by department
-   Fee collection statistics
-   Recent payments
-   Students with outstanding dues

### Student Management

The student management module allows:

-   Adding new students with comprehensive details
-   Viewing and editing student information
-   Filtering students by department, session, and status
-   Bulk operations like promoting students to the next semester

### Fee Management

The fee management module enables:

-   Setting up fee structures for different departments and sessions
-   Recording payments with various payment methods
-   Generating receipts for payments
-   Tracking outstanding dues

### Reporting

The reporting module provides:

-   Fee collection reports by date range
-   Department-wise collection reports
-   Outstanding dues reports
-   Student payment history reports

## Database Schema

The database schema is defined using Prisma and includes:

```plaintext
// Example Prisma schema
model Student {
  id                String      @id @default(cuid())
  registrationNumber String     @unique
  firstName         String
  lastName          String
  email             String      @unique
  phone             String?
  address           String?
  departmentId      String
  department        Department  @relation(fields: [departmentId], references: [id])
  sessionId         String
  session           Session     @relation(fields: [sessionId], references: [id])
  enrollmentDate    DateTime
  status            String      @default("active")
  feeRecords        FeeRecord[]
  createdAt         DateTime    @default(now())
  updatedAt         DateTime    @updatedAt
}

model Department {
  id          String    @id @default(cuid())
  name        String    @unique
  code        String    @unique
  description String?
  students    Student[]
  feeTypes    FeeType[]
  createdAt   DateTime  @default(now())
  updatedAt   DateTime  @updatedAt
}

model Session {
  id        String    @id @default(cuid())
  name      String    @unique
  startYear Int
  endYear   Int
  status    String    @default("active")
  students  Student[]
  createdAt DateTime  @default(now())
  updatedAt DateTime  @updatedAt
}

model FeeType {
  id              String      @id @default(cuid())
  name            String
  description     String?
  defaultAmount   Float
  isRecurring     Boolean     @default(false)
  recurringPeriod String?
  departmentId    String?
  department      Department? @relation(fields: [departmentId], references: [id])
  feeRecords      FeeRecord[]
  createdAt       DateTime    @default(now())
  updatedAt       DateTime    @updatedAt
}

model FeeRecord {
  id            String    @id @default(cuid())
  studentId     String
  student       Student   @relation(fields: [studentId], references: [id])
  feeTypeId     String
  feeType       FeeType   @relation(fields: [feeTypeId], references: [id])
  totalAmount   Float
  dueDate       DateTime
  paidAmount    Float     @default(0)
  paidDate      DateTime?
  paymentMethod String?
  receiptNumber String?
  remarks       String?
  createdAt     DateTime  @default(now())
  updatedAt     DateTime  @updatedAt
}
```

## Future Enhancements

-   Export data to PDF/Excel
-   Email notifications for due payments
-   Fee receipt printing
-   SMS notifications
-   Dark mode support
-   Mobile app version

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

Please ensure your code follows the project's coding standards and includes appropriate tests.

## Contact

If you have any questions or suggestions, please open an issue or contact the maintainer at:

-   GitHub: [@yourusername](https://github.com/yourusername)
-   Email: [your.email@example.com](mailto:your.email@example.com)

```plaintext

This README is now:

1. Simpler and more straightforward
2. Uses only standard markdown that renders properly on GitHub
3. Removes all license references
4. Provides complete information about the project
5. Includes detailed sections on features, implementation, and database schema
6. Avoids HTML tags that might not render correctly
7. Focuses on the core details of the project

Is there anything specific you'd like me to add or modify in this README?
```
