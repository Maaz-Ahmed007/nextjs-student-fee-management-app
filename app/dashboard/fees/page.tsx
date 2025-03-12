import Link from "next/link";
import { PlusCircle, Search } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function FeesPage() {
	// Mock data for fee records
	const feeRecords = [
		{
			id: "1",
			studentName: "John Doe",
			regNumber: "S2023-1001",
			department: "Computer Science",
			feeType: "Semester Fee",
			amount: 2500,
			dueDate: "2023-01-15",
			paidAmount: 2500,
			paidDate: "2023-01-10",
			status: "paid",
		},
		{
			id: "2",
			studentName: "Jane Smith",
			regNumber: "S2023-1002",
			department: "Electrical Engineering",
			feeType: "Library Fee",
			amount: 500,
			dueDate: "2023-01-15",
			paidAmount: 500,
			paidDate: "2023-01-12",
			status: "paid",
		},
		{
			id: "3",
			studentName: "Michael Johnson",
			regNumber: "S2023-1003",
			department: "Business Administration",
			feeType: "Semester Fee",
			amount: 2500,
			dueDate: "2023-01-15",
			paidAmount: 2500,
			paidDate: "2023-01-14",
			status: "paid",
		},
		{
			id: "4",
			studentName: "Emily Williams",
			regNumber: "S2023-1004",
			department: "Computer Science",
			feeType: "Semester Fee",
			amount: 2500,
			dueDate: "2023-01-15",
			paidAmount: 0,
			paidDate: null,
			status: "unpaid",
		},
		{
			id: "5",
			studentName: "David Brown",
			regNumber: "S2023-1005",
			department: "Mechanical Engineering",
			feeType: "Library Fee",
			amount: 500,
			dueDate: "2023-01-15",
			paidAmount: 0,
			paidDate: null,
			status: "unpaid",
		},
		{
			id: "6",
			studentName: "Sarah Miller",
			regNumber: "S2023-1006",
			department: "Social Sciences",
			feeType: "Semester Fee",
			amount: 2500,
			dueDate: "2023-01-15",
			paidAmount: 1250,
			paidDate: "2023-01-10",
			status: "partial",
		},
		{
			id: "7",
			studentName: "James Wilson",
			regNumber: "S2023-1007",
			department: "Computer Science",
			feeType: "Admission Fee",
			amount: 5000,
			dueDate: "2023-01-05",
			paidAmount: 5000,
			paidDate: "2023-01-03",
			status: "paid",
		},
		{
			id: "8",
			studentName: "Jennifer Taylor",
			regNumber: "S2023-1008",
			department: "Electrical Engineering",
			feeType: "Semester Fee",
			amount: 2500,
			dueDate: "2023-01-15",
			paidAmount: 0,
			paidDate: null,
			status: "unpaid",
		},
		{
			id: "9",
			studentName: "Robert Anderson",
			regNumber: "S2023-1009",
			department: "Business Administration",
			feeType: "Library Fee",
			amount: 500,
			dueDate: "2023-01-15",
			paidAmount: 500,
			paidDate: "2023-01-08",
			status: "paid",
		},
		{
			id: "10",
			studentName: "Lisa Thomas",
			regNumber: "S2023-1010",
			department: "Mechanical Engineering",
			feeType: "Semester Fee",
			amount: 2500,
			dueDate: "2023-01-15",
			paidAmount: 1250,
			paidDate: "2023-01-12",
			status: "partial",
		},
	];

	// Mock data for fee types
	const feeTypes = [
		{
			id: "1",
			name: "Semester Fee",
			defaultAmount: 2500,
			isRecurring: true,
			recurringPeriod: "semester",
			department: "All Departments",
		},
		{
			id: "2",
			name: "Library Fee",
			defaultAmount: 500,
			isRecurring: true,
			recurringPeriod: "semester",
			department: "All Departments",
		},
		{
			id: "3",
			name: "Admission Fee",
			defaultAmount: 5000,
			isRecurring: false,
			recurringPeriod: "one-time",
			department: "All Departments",
		},
		{
			id: "4",
			name: "Lab Fee",
			defaultAmount: 1000,
			isRecurring: true,
			recurringPeriod: "semester",
			department: "Computer Science",
		},
		{
			id: "5",
			name: "Lab Fee",
			defaultAmount: 1200,
			isRecurring: true,
			recurringPeriod: "semester",
			department: "Electrical Engineering",
		},
	];

	return (
		<div className="flex flex-col gap-6">
			<div className="flex items-center justify-between">
				<h1 className="text-2xl font-bold">Fee Management</h1>
				<Button className="gap-2 bg-blue-500 hover:bg-blue-600" asChild>
					<Link href="/dashboard/fees/record">
						<PlusCircle className="h-4 w-4" />
						<span>Record Payment</span>
					</Link>
				</Button>
			</div>

			<Tabs defaultValue="payments">
				<TabsList className="grid w-full grid-cols-2 md:w-[400px]">
					<TabsTrigger value="payments">Fee Payments</TabsTrigger>
					<TabsTrigger value="types">Fee Types</TabsTrigger>
				</TabsList>

				<TabsContent value="payments" className="pt-4">
					<Card>
						<CardHeader>
							<CardTitle>Fee Payments</CardTitle>
							<CardDescription>
								View and manage all fee payments in the system.
							</CardDescription>
						</CardHeader>
						<CardContent className="w-full">
							<div className="flex flex-col gap-6 w-full">
								<div className="flex flex-col gap-4 md:flex-row md:items-center">
									<div className="flex items-center gap-2 flex-1">
										<Search className="h-4 w-4 text-muted-foreground" />
										<Input
											placeholder="Search by student name or registration number..."
											className="flex-1"
										/>
									</div>
									<div className="flex flex-col gap-2 md:flex-row md:items-center">
										<Select defaultValue="all-departments">
											<SelectTrigger className="w-full md:w-[180px]">
												<SelectValue placeholder="Department" />
											</SelectTrigger>
											<SelectContent>
												<SelectItem value="all-departments">
													All Departments
												</SelectItem>
												<SelectItem value="computer-science">
													Computer Science
												</SelectItem>
												<SelectItem value="electrical-engineering">
													Electrical Engineering
												</SelectItem>
												<SelectItem value="business-administration">
													Business Administration
												</SelectItem>
												<SelectItem value="mechanical-engineering">
													Mechanical Engineering
												</SelectItem>
												<SelectItem value="social-sciences">
													Social Sciences
												</SelectItem>
											</SelectContent>
										</Select>
										<Select defaultValue="all-status">
											<SelectTrigger className="w-full md:w-[180px]">
												<SelectValue placeholder="Status" />
											</SelectTrigger>
											<SelectContent>
												<SelectItem value="all-status">
													All Status
												</SelectItem>
												<SelectItem value="paid">
													Paid
												</SelectItem>
												<SelectItem value="unpaid">
													Unpaid
												</SelectItem>
												<SelectItem value="partial">
													Partial
												</SelectItem>
											</SelectContent>
										</Select>
									</div>
								</div>

								<div className="rounded-md border">
									<Table>
										<TableHeader>
											<TableRow>
												<TableHead>Student</TableHead>
												<TableHead>Fee Type</TableHead>
												<TableHead>Amount</TableHead>
												<TableHead>Due Date</TableHead>
												<TableHead>
													Paid Amount
												</TableHead>
												<TableHead>Status</TableHead>
												<TableHead className="text-right">
													Actions
												</TableHead>
											</TableRow>
										</TableHeader>
										<TableBody>
											{feeRecords.map((record) => (
												<TableRow key={record.id}>
													<TableCell>
														<div>
															<p className="font-medium">
																{
																	record.studentName
																}
															</p>
															<p className="text-xs text-muted-foreground">
																{
																	record.regNumber
																}
															</p>
														</div>
													</TableCell>
													<TableCell>
														{record.feeType}
													</TableCell>
													<TableCell>
														$
														{record.amount.toLocaleString()}
													</TableCell>
													<TableCell>
														{record.dueDate}
													</TableCell>
													<TableCell>
														$
														{record.paidAmount.toLocaleString()}
													</TableCell>
													<TableCell>
														<div className="flex items-center">
															<div
																className={`h-2 w-2 rounded-full ${
																	record.status ===
																	"paid"
																		? "bg-green-500"
																		: record.status ===
																		  "partial"
																		? "bg-yellow-500"
																		: "bg-red-500"
																} mr-2`}
															/>
															<span className="capitalize">
																{record.status}
															</span>
														</div>
													</TableCell>
													<TableCell className="text-right">
														<Button
															variant="ghost"
															size="sm"
															asChild>
															<Link
																href={`/dashboard/fees/${record.id}`}>
																View
															</Link>
														</Button>
													</TableCell>
												</TableRow>
											))}
										</TableBody>
									</Table>
								</div>

								<div className="flex items-center justify-between">
									<div className="text-sm text-muted-foreground">
										Showing <strong>1</strong> to{" "}
										<strong>10</strong> of{" "}
										<strong>50</strong> results
									</div>
									<div className="flex items-center gap-2">
										<Button
											variant="outline"
											size="sm"
											disabled>
											Previous
										</Button>
										<Button variant="outline" size="sm">
											Next
										</Button>
									</div>
								</div>
							</div>
						</CardContent>
					</Card>
				</TabsContent>

				<TabsContent value="types" className="pt-4">
					<Card>
						<CardHeader className="flex flex-row items-center justify-between">
							<div>
								<CardTitle>Fee Types</CardTitle>
								<CardDescription>
									Manage fee types and their default amounts.
								</CardDescription>
							</div>
							<Button
								className="gap-2 bg-blue-500 hover:bg-blue-600"
								asChild>
								<Link href="/dashboard/fees/types/new">
									<PlusCircle className="h-4 w-4" />
									<span>Add Fee Type</span>
								</Link>
							</Button>
						</CardHeader>
						<CardContent>
							<div className="rounded-md border">
								<Table>
									<TableHeader>
										<TableRow>
											<TableHead>Name</TableHead>
											<TableHead>
												Default Amount
											</TableHead>
											<TableHead>Recurring</TableHead>
											<TableHead>Period</TableHead>
											<TableHead>Department</TableHead>
											<TableHead className="text-right">
												Actions
											</TableHead>
										</TableRow>
									</TableHeader>
									<TableBody>
										{feeTypes.map((feeType) => (
											<TableRow key={feeType.id}>
												<TableCell className="font-medium">
													{feeType.name}
												</TableCell>
												<TableCell>
													$
													{feeType.defaultAmount.toLocaleString()}
												</TableCell>
												<TableCell>
													{feeType.isRecurring
														? "Yes"
														: "No"}
												</TableCell>
												<TableCell className="capitalize">
													{feeType.recurringPeriod}
												</TableCell>
												<TableCell>
													{feeType.department}
												</TableCell>
												<TableCell className="text-right">
													<Button
														variant="ghost"
														size="sm"
														asChild>
														<Link
															href={`/dashboard/fees/types/${feeType.id}`}>
															Edit
														</Link>
													</Button>
												</TableCell>
											</TableRow>
										))}
									</TableBody>
								</Table>
							</div>
						</CardContent>
					</Card>
				</TabsContent>
			</Tabs>
		</div>
	);
}
