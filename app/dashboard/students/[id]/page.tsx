import Link from "next/link";
import { ArrowLeft, Edit, Trash, Wallet } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";

export default function StudentDetailsPage({
	params,
}: {
	params: { id: string };
}) {
	// Mock student data
	const student = {
		id: params.id,
		regNumber: `S2023-${1000 + Number.parseInt(params.id)}`,
		firstName: "John",
		lastName: "Doe",
		email: "john.doe@example.com",
		phone: "+1234567890",
		address: "123 University Avenue, College Town",
		city: "College Town",
		state: "State",
		department: "Computer Science",
		session: "2020-2024",
		enrollmentDate: "2020-09-01",
		status: "active",
		gender: "Male",
		dateOfBirth: "2002-05-15",
	};

	// Mock fee records
	const feeRecords = [
		{
			id: "1",
			feeType: "Semester Fee",
			amount: 2500,
			dueDate: "2023-01-15",
			paidAmount: 2500,
			paidDate: "2023-01-10",
			status: "paid",
		},
		{
			id: "2",
			feeType: "Library Fee",
			amount: 500,
			dueDate: "2023-01-15",
			paidAmount: 500,
			paidDate: "2023-01-10",
			status: "paid",
		},
		{
			id: "3",
			feeType: "Semester Fee",
			amount: 2500,
			dueDate: "2023-06-15",
			paidAmount: 2500,
			paidDate: "2023-06-12",
			status: "paid",
		},
		{
			id: "4",
			feeType: "Library Fee",
			amount: 500,
			dueDate: "2023-06-15",
			paidAmount: 500,
			paidDate: "2023-06-12",
			status: "paid",
		},
		{
			id: "5",
			feeType: "Semester Fee",
			amount: 2500,
			dueDate: "2024-01-15",
			paidAmount: 0,
			paidDate: null,
			status: "unpaid",
		},
	];

	return (
		<div className="flex flex-col gap-6">
			<div className="flex items-center gap-4">
				<Button variant="ghost" size="icon" asChild>
					<Link href="/dashboard/students">
						<ArrowLeft className="h-4 w-4" />
					</Link>
				</Button>
				<div className="flex-1">
					<h1 className="text-2xl font-bold">
						{student.firstName} {student.lastName}
					</h1>
					<p className="text-sm text-muted-foreground">
						{student.regNumber} • {student.department}
					</p>
				</div>
				<div className="flex items-center gap-2">
					<Button variant="outline" className="gap-2" asChild>
						<Link href={`/dashboard/students/${student.id}/edit`}>
							<Edit className="h-4 w-4" />
							<span>Edit</span>
						</Link>
					</Button>
					<Button variant="destructive" className="gap-2">
						<Trash className="h-4 w-4" />
						<span>Delete</span>
					</Button>
					<Button className="gap-2 bg-blue-500 hover:bg-blue-600">
						<Wallet className="h-4 w-4" />
						<span>Record Payment</span>
					</Button>
				</div>
			</div>

			<div className="grid gap-6 md:grid-cols-3">
				<Card className="md:col-span-2">
					<CardHeader>
						<CardTitle>Student Details</CardTitle>
						<CardDescription>
							Personal and academic information for{" "}
							{student.firstName} {student.lastName}
						</CardDescription>
					</CardHeader>
					<CardContent>
						<Tabs defaultValue="personal">
							<TabsList className="grid w-full grid-cols-3">
								<TabsTrigger value="personal">
									Personal
								</TabsTrigger>
								<TabsTrigger value="academic">
									Academic
								</TabsTrigger>
								<TabsTrigger value="contact">
									Contact
								</TabsTrigger>
							</TabsList>
							<TabsContent value="personal" className="pt-4">
								<div className="grid grid-cols-2 gap-4">
									<div>
										<p className="text-sm font-medium text-muted-foreground">
											Full Name
										</p>
										<p>
											{student.firstName}{" "}
											{student.lastName}
										</p>
									</div>
									<div>
										<p className="text-sm font-medium text-muted-foreground">
											Registration Number
										</p>
										<p>{student.regNumber}</p>
									</div>
									<div>
										<p className="text-sm font-medium text-muted-foreground">
											Gender
										</p>
										<p>{student.gender}</p>
									</div>
									<div>
										<p className="text-sm font-medium text-muted-foreground">
											Date of Birth
										</p>
										<p>{student.dateOfBirth}</p>
									</div>
								</div>
							</TabsContent>
							<TabsContent value="academic" className="pt-4">
								<div className="grid grid-cols-2 gap-4">
									<div>
										<p className="text-sm font-medium text-muted-foreground">
											Department
										</p>
										<p>{student.department}</p>
									</div>
									<div>
										<p className="text-sm font-medium text-muted-foreground">
											Session
										</p>
										<p>{student.session}</p>
									</div>
									<div>
										<p className="text-sm font-medium text-muted-foreground">
											Enrollment Date
										</p>
										<p>{student.enrollmentDate}</p>
									</div>
									<div>
										<p className="text-sm font-medium text-muted-foreground">
											Status
										</p>
										<div className="flex items-center">
											<div className="h-2 w-2 rounded-full bg-green-500 mr-2" />
											<span className="capitalize">
												{student.status}
											</span>
										</div>
									</div>
								</div>
							</TabsContent>
							<TabsContent value="contact" className="pt-4">
								<div className="grid grid-cols-2 gap-4">
									<div>
										<p className="text-sm font-medium text-muted-foreground">
											Email
										</p>
										<p>{student.email}</p>
									</div>
									<div>
										<p className="text-sm font-medium text-muted-foreground">
											Phone
										</p>
										<p>{student.phone}</p>
									</div>
									<div className="col-span-2">
										<p className="text-sm font-medium text-muted-foreground">
											Address
										</p>
										<p>{student.address}</p>
									</div>
									<div>
										<p className="text-sm font-medium text-muted-foreground">
											City
										</p>
										<p>{student.city}</p>
									</div>
									<div>
										<p className="text-sm font-medium text-muted-foreground">
											State/Province
										</p>
										<p>{student.state}</p>
									</div>
								</div>
							</TabsContent>
						</Tabs>
					</CardContent>
				</Card>

				<Card>
					<CardHeader>
						<CardTitle>Fee Summary</CardTitle>
						<CardDescription>
							Overview of fee payments and dues
						</CardDescription>
					</CardHeader>
					<CardContent>
						<div className="space-y-4">
							<div>
								<p className="text-sm font-medium text-muted-foreground">
									Total Fees
								</p>
								<p className="text-2xl font-bold">
									$
									{feeRecords
										.reduce(
											(sum, record) =>
												sum + record.amount,
											0
										)
										.toLocaleString()}
								</p>
							</div>
							<div>
								<p className="text-sm font-medium text-muted-foreground">
									Paid Amount
								</p>
								<p className="text-2xl font-bold text-green-600 dark:text-green-400">
									$
									{feeRecords
										.reduce(
											(sum, record) =>
												sum + record.paidAmount,
											0
										)
										.toLocaleString()}
								</p>
							</div>
							<div>
								<p className="text-sm font-medium text-muted-foreground">
									Outstanding Dues
								</p>
								<p className="text-2xl font-bold text-red-600 dark:text-red-400">
									$
									{(
										feeRecords.reduce(
											(sum, record) =>
												sum + record.amount,
											0
										) -
										feeRecords.reduce(
											(sum, record) =>
												sum + record.paidAmount,
											0
										)
									).toLocaleString()}
								</p>
							</div>
							<div className="pt-2">
								<Button className="w-full gap-2 bg-blue-500 hover:bg-blue-600">
									<Wallet className="h-4 w-4" />
									<span>Record New Payment</span>
								</Button>
							</div>
						</div>
					</CardContent>
				</Card>
			</div>

			<Card>
				<CardHeader>
					<CardTitle>Fee Records</CardTitle>
					<CardDescription>
						Complete history of fee payments and outstanding dues
					</CardDescription>
				</CardHeader>
				<CardContent>
					<div className="rounded-md border">
						<Table>
							<TableHeader>
								<TableRow>
									<TableHead>Fee Type</TableHead>
									<TableHead>Amount</TableHead>
									<TableHead>Due Date</TableHead>
									<TableHead>Paid Amount</TableHead>
									<TableHead>Paid Date</TableHead>
									<TableHead>Status</TableHead>
									<TableHead className="text-right">
										Actions
									</TableHead>
								</TableRow>
							</TableHeader>
							<TableBody>
								{feeRecords.map((record) => (
									<TableRow key={record.id}>
										<TableCell className="font-medium">
											{record.feeType}
										</TableCell>
										<TableCell>
											${record.amount.toLocaleString()}
										</TableCell>
										<TableCell>{record.dueDate}</TableCell>
										<TableCell>
											$
											{record.paidAmount.toLocaleString()}
										</TableCell>
										<TableCell>
											{record.paidDate || "-"}
										</TableCell>
										<TableCell>
											<div className="flex items-center">
												<div
													className={`h-2 w-2 rounded-full ${
														record.status === "paid"
															? "bg-green-500"
															: "bg-red-500"
													} mr-2`}
												/>
												<span className="capitalize">
													{record.status}
												</span>
											</div>
										</TableCell>
										<TableCell className="text-right">
											{record.status === "unpaid" ? (
												<Button
													variant="ghost"
													size="sm">
													Pay Now
												</Button>
											) : (
												<Button
													variant="ghost"
													size="sm">
													View Receipt
												</Button>
											)}
										</TableCell>
									</TableRow>
								))}
							</TableBody>
						</Table>
					</div>
				</CardContent>
			</Card>
		</div>
	);
}
