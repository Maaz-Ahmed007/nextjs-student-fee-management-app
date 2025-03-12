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

export default function StudentsPage() {
	// Mock data for students
	const students = [
		{
			id: "1",
			regNumber: "S2023-1001",
			firstName: "John",
			lastName: "Doe",
			department: "Computer Science",
			session: "2020-2024",
			status: "active",
		},
		{
			id: "2",
			regNumber: "S2023-1002",
			firstName: "Jane",
			lastName: "Smith",
			department: "Electrical Engineering",
			session: "2020-2024",
			status: "active",
		},
		{
			id: "3",
			regNumber: "S2023-1003",
			firstName: "Michael",
			lastName: "Johnson",
			department: "Business Administration",
			session: "2021-2025",
			status: "active",
		},
		{
			id: "4",
			regNumber: "S2023-1004",
			firstName: "Emily",
			lastName: "Williams",
			department: "Computer Science",
			session: "2021-2025",
			status: "active",
		},
		{
			id: "5",
			regNumber: "S2023-1005",
			firstName: "David",
			lastName: "Brown",
			department: "Mechanical Engineering",
			session: "2022-2026",
			status: "active",
		},
		{
			id: "6",
			regNumber: "S2023-1006",
			firstName: "Sarah",
			lastName: "Miller",
			department: "Social Sciences",
			session: "2022-2026",
			status: "active",
		},
		{
			id: "7",
			regNumber: "S2023-1007",
			firstName: "James",
			lastName: "Wilson",
			department: "Computer Science",
			session: "2020-2024",
			status: "active",
		},
		{
			id: "8",
			regNumber: "S2023-1008",
			firstName: "Jennifer",
			lastName: "Taylor",
			department: "Electrical Engineering",
			session: "2021-2025",
			status: "active",
		},
		{
			id: "9",
			regNumber: "S2023-1009",
			firstName: "Robert",
			lastName: "Anderson",
			department: "Business Administration",
			session: "2022-2026",
			status: "active",
		},
		{
			id: "10",
			regNumber: "S2023-1010",
			firstName: "Lisa",
			lastName: "Thomas",
			department: "Mechanical Engineering",
			session: "2020-2024",
			status: "active",
		},
	];

	return (
		<div className="flex flex-col gap-6">
			<div className="flex items-center justify-between">
				<h1 className="text-2xl font-bold">Students</h1>
				<Button className="gap-2 bg-blue-500 hover:bg-blue-600" asChild>
					<Link href="/dashboard/students/new">
						<PlusCircle className="h-4 w-4" />
						<span>Add Student</span>
					</Link>
				</Button>
			</div>

			<Card>
				<CardHeader>
					<CardTitle>Student Management</CardTitle>
					<CardDescription>
						View, filter, and manage all students in the system.
					</CardDescription>
				</CardHeader>
				<CardContent className="w-full">
					<div className="flex flex-col gap-6 w-full">
						<div className="flex flex-col gap-4 md:flex-row md:items-center">
							<div className="flex items-center gap-2 flex-1">
								<Search className="h-4 w-4 text-muted-foreground" />
								<Input
									placeholder="Search by name or registration number..."
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
								<Select defaultValue="all-sessions">
									<SelectTrigger className="w-full md:w-[180px]">
										<SelectValue placeholder="Session" />
									</SelectTrigger>
									<SelectContent>
										<SelectItem value="all-sessions">
											All Sessions
										</SelectItem>
										<SelectItem value="2020-2024">
											2020-2024
										</SelectItem>
										<SelectItem value="2021-2025">
											2021-2025
										</SelectItem>
										<SelectItem value="2022-2026">
											2022-2026
										</SelectItem>
									</SelectContent>
								</Select>
								<Select defaultValue="active">
									<SelectTrigger className="w-full md:w-[180px]">
										<SelectValue placeholder="Status" />
									</SelectTrigger>
									<SelectContent>
										<SelectItem value="all">
											All Status
										</SelectItem>
										<SelectItem value="active">
											Active
										</SelectItem>
										<SelectItem value="graduated">
											Graduated
										</SelectItem>
										<SelectItem value="suspended">
											Suspended
										</SelectItem>
									</SelectContent>
								</Select>
							</div>
						</div>

						<div className="rounded-md border">
							<Table>
								<TableHeader>
									<TableRow>
										<TableHead>Reg. Number</TableHead>
										<TableHead>Name</TableHead>
										<TableHead>Department</TableHead>
										<TableHead>Session</TableHead>
										<TableHead>Status</TableHead>
										<TableHead className="text-right">
											Actions
										</TableHead>
									</TableRow>
								</TableHeader>
								<TableBody>
									{students.map((student) => (
										<TableRow key={student.id}>
											<TableCell className="font-medium">
												{student.regNumber}
											</TableCell>
											<TableCell>
												{student.firstName}{" "}
												{student.lastName}
											</TableCell>
											<TableCell>
												{student.department}
											</TableCell>
											<TableCell>
												{student.session}
											</TableCell>
											<TableCell>
												<div className="flex items-center">
													<div className="h-2 w-2 rounded-full bg-green-500 mr-2" />
													<span className="capitalize">
														{student.status}
													</span>
												</div>
											</TableCell>
											<TableCell className="text-right">
												<Button
													variant="ghost"
													size="sm"
													asChild>
													<Link
														href={`/dashboard/students/${student.id}`}>
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
								<strong>10</strong> of <strong>100</strong>{" "}
								results
							</div>
							<div className="flex items-center gap-2">
								<Button variant="outline" size="sm" disabled>
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
		</div>
	);
}
