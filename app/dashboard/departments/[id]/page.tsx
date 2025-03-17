import Link from "next/link";
import { ArrowLeft, Edit, Trash, Users } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { useParams } from "next/navigation";

export default function DepartmentDetailsPage() {
	const params = useParams<{ id: string }>();

	// Mock department data
	const department = {
		id: params.id,
		name: "Computer Science",
		code: "CS",
		description:
			"Department of Computer Science and Information Technology",
		studentCount: 320,
		createdAt: "2020-01-15",
	};

	// Mock students in this department
	const students = [
		{
			id: "1",
			regNumber: "S2023-1001",
			firstName: "John",
			lastName: "Doe",
			session: "2020-2024",
			status: "active",
		},
		{
			id: "2",
			regNumber: "S2023-1004",
			firstName: "Emily",
			lastName: "Williams",
			session: "2021-2025",
			status: "active",
		},
		{
			id: "7",
			regNumber: "S2023-1007",
			firstName: "James",
			lastName: "Wilson",
			session: "2020-2024",
			status: "active",
		},
		{
			id: "11",
			regNumber: "S2023-1011",
			firstName: "Alex",
			lastName: "Johnson",
			session: "2022-2026",
			status: "active",
		},
		{
			id: "15",
			regNumber: "S2023-1015",
			firstName: "Sophia",
			lastName: "Garcia",
			session: "2021-2025",
			status: "active",
		},
	];

	return (
		<div className="flex flex-col gap-6">
			<div className="flex items-center gap-4">
				<Button variant="ghost" size="icon" asChild>
					<Link href="/dashboard/departments">
						<ArrowLeft className="h-4 w-4" />
					</Link>
				</Button>
				<div className="flex-1">
					<h1 className="text-2xl font-bold">{department.name}</h1>
					<p className="text-sm text-muted-foreground">
						{department.code} • {department.studentCount} students
					</p>
				</div>
				<div className="flex items-center gap-2">
					<Button variant="outline" className="gap-2" asChild>
						<Link
							href={`/dashboard/departments/${department.id}/edit`}>
							<Edit className="h-4 w-4" />
							<span>Edit</span>
						</Link>
					</Button>
					<Button variant="destructive" className="gap-2">
						<Trash className="h-4 w-4" />
						<span>Delete</span>
					</Button>
				</div>
			</div>

			<div className="grid gap-6 md:grid-cols-3">
				<Card className="md:col-span-2">
					<CardHeader>
						<CardTitle>Department Details</CardTitle>
						<CardDescription>
							Information about the {department.name} department
						</CardDescription>
					</CardHeader>
					<CardContent>
						<div className="grid grid-cols-2 gap-4">
							<div>
								<p className="text-sm font-medium text-muted-foreground">
									Department Name
								</p>
								<p>{department.name}</p>
							</div>
							<div>
								<p className="text-sm font-medium text-muted-foreground">
									Department Code
								</p>
								<p>{department.code}</p>
							</div>
							<div className="col-span-2">
								<p className="text-sm font-medium text-muted-foreground">
									Description
								</p>
								<p>{department.description}</p>
							</div>
							<div>
								<p className="text-sm font-medium text-muted-foreground">
									Created On
								</p>
								<p>{department.createdAt}</p>
							</div>
							<div>
								<p className="text-sm font-medium text-muted-foreground">
									Total Students
								</p>
								<p>{department.studentCount}</p>
							</div>
						</div>
					</CardContent>
				</Card>

				<Card>
					<CardHeader>
						<CardTitle>Statistics</CardTitle>
						<CardDescription>
							Key metrics for this department
						</CardDescription>
					</CardHeader>
					<CardContent>
						<div className="space-y-4">
							<div>
								<p className="text-sm font-medium text-muted-foreground">
									Total Students
								</p>
								<p className="text-2xl font-bold">
									{department.studentCount}
								</p>
							</div>
							<div>
								<p className="text-sm font-medium text-muted-foreground">
									Active Students
								</p>
								<p className="text-2xl font-bold">310</p>
							</div>
							<div>
								<p className="text-sm font-medium text-muted-foreground">
									Fee Collection Rate
								</p>
								<p className="text-2xl font-bold text-green-600 dark:text-green-400">
									92%
								</p>
							</div>
							<div className="pt-2">
								<Button className="w-full gap-2" asChild>
									<Link href="/dashboard/reports">
										<span>View Reports</span>
									</Link>
								</Button>
							</div>
						</div>
					</CardContent>
				</Card>
			</div>

			<Card>
				<CardHeader className="flex flex-row items-center justify-between">
					<div>
						<CardTitle>Students</CardTitle>
						<CardDescription>
							Students enrolled in this department
						</CardDescription>
					</div>
					<Button
						className="gap-2 bg-blue-500 hover:bg-blue-600"
						asChild>
						<Link href="/dashboard/students/new">
							<Users className="h-4 w-4" />
							<span>Add Student</span>
						</Link>
					</Button>
				</CardHeader>
				<CardContent>
					<div className="rounded-md border">
						<Table>
							<TableHeader>
								<TableRow>
									<TableHead>Reg. Number</TableHead>
									<TableHead>Name</TableHead>
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
										<TableCell>{student.session}</TableCell>
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
				</CardContent>
			</Card>
		</div>
	);
}
