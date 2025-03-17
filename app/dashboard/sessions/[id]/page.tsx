import Link from "next/link";
import { ArrowLeft, Edit, Trash } from "lucide-react";

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

export default function SessionDetailsPage() {
	const params = useParams<{ id: string }>();
	
	// Mock session data
	const session = {
		id: params.id,
		name: "Batch 2020-2024",
		startYear: 2020,
		endYear: 2024,
		status: "active",
		studentCount: 450,
		createdAt: "2020-01-01",
	};

	// Mock departments in this session
	const departments = [
		{
			id: "1",
			name: "Computer Science",
			code: "CS",
			studentCount: 120,
		},
		{
			id: "2",
			name: "Electrical Engineering",
			code: "EE",
			studentCount: 95,
		},
		{
			id: "3",
			name: "Business Administration",
			code: "BA",
			studentCount: 110,
		},
		{
			id: "4",
			name: "Mechanical Engineering",
			code: "ME",
			studentCount: 85,
		},
		{
			id: "5",
			name: "Social Sciences",
			code: "SS",
			studentCount: 40,
		},
	];

	return (
		<div className="flex flex-col gap-6">
			<div className="flex items-center gap-4">
				<Button variant="ghost" size="icon" asChild>
					<Link href="/dashboard/sessions">
						<ArrowLeft className="h-4 w-4" />
					</Link>
				</Button>
				<div className="flex-1">
					<h1 className="text-2xl font-bold">{session.name}</h1>
					<p className="text-sm text-muted-foreground">
						{session.startYear} - {session.endYear} •{" "}
						{session.studentCount} students
					</p>
				</div>
				<div className="flex items-center gap-2">
					<Button variant="outline" className="gap-2" asChild>
						<Link href={`/dashboard/sessions/${session.id}/edit`}>
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
						<CardTitle>Session Details</CardTitle>
						<CardDescription>
							Information about the {session.name} session
						</CardDescription>
					</CardHeader>
					<CardContent>
						<div className="grid grid-cols-2 gap-4">
							<div>
								<p className="text-sm font-medium text-muted-foreground">
									Session Name
								</p>
								<p>{session.name}</p>
							</div>
							<div>
								<p className="text-sm font-medium text-muted-foreground">
									Duration
								</p>
								<p>
									{session.startYear} - {session.endYear}
								</p>
							</div>
							<div>
								<p className="text-sm font-medium text-muted-foreground">
									Status
								</p>
								<div className="flex items-center">
									<div
										className={`h-2 w-2 rounded-full ${
											session.status === "active"
												? "bg-green-500"
												: "bg-gray-500"
										} mr-2`}
									/>
									<span className="capitalize">
										{session.status}
									</span>
								</div>
							</div>
							<div>
								<p className="text-sm font-medium text-muted-foreground">
									Created On
								</p>
								<p>{session.createdAt}</p>
							</div>
							<div>
								<p className="text-sm font-medium text-muted-foreground">
									Total Students
								</p>
								<p>{session.studentCount}</p>
							</div>
							<div>
								<p className="text-sm font-medium text-muted-foreground">
									Total Departments
								</p>
								<p>{departments.length}</p>
							</div>
						</div>
					</CardContent>
				</Card>

				<Card>
					<CardHeader>
						<CardTitle>Statistics</CardTitle>
						<CardDescription>
							Key metrics for this session
						</CardDescription>
					</CardHeader>
					<CardContent>
						<div className="space-y-4">
							<div>
								<p className="text-sm font-medium text-muted-foreground">
									Total Students
								</p>
								<p className="text-2xl font-bold">
									{session.studentCount}
								</p>
							</div>
							<div>
								<p className="text-sm font-medium text-muted-foreground">
									Active Students
								</p>
								<p className="text-2xl font-bold">435</p>
							</div>
							<div>
								<p className="text-sm font-medium text-muted-foreground">
									Fee Collection Rate
								</p>
								<p className="text-2xl font-bold text-green-600 dark:text-green-400">
									88%
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
				<CardHeader>
					<CardTitle>Departments</CardTitle>
					<CardDescription>
						Departments with students in this session
					</CardDescription>
				</CardHeader>
				<CardContent>
					<div className="rounded-md border">
						<Table>
							<TableHeader>
								<TableRow>
									<TableHead>Department</TableHead>
									<TableHead>Code</TableHead>
									<TableHead>Students</TableHead>
									<TableHead className="text-right">
										Actions
									</TableHead>
								</TableRow>
							</TableHeader>
							<TableBody>
								{departments.map((department) => (
									<TableRow key={department.id}>
										<TableCell className="font-medium">
											{department.name}
										</TableCell>
										<TableCell>{department.code}</TableCell>
										<TableCell>
											{department.studentCount}
										</TableCell>
										<TableCell className="text-right">
											<Button
												variant="ghost"
												size="sm"
												asChild>
												<Link
													href={`/dashboard/departments/${department.id}`}>
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
