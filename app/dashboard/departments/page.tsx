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
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";

export default function DepartmentsPage() {
	// Mock data for departments
	const departments = [
		{
			id: "1",
			name: "Computer Science",
			code: "CS",
			description:
				"Department of Computer Science and Information Technology",
			studentCount: 320,
		},
		{
			id: "2",
			name: "Electrical Engineering",
			code: "EE",
			description: "Department of Electrical and Electronic Engineering",
			studentCount: 280,
		},
		{
			id: "3",
			name: "Business Administration",
			code: "BA",
			description: "Department of Business Administration and Management",
			studentCount: 350,
		},
		{
			id: "4",
			name: "Mechanical Engineering",
			code: "ME",
			description: "Department of Mechanical Engineering",
			studentCount: 240,
		},
		{
			id: "5",
			name: "Social Sciences",
			code: "SS",
			description: "Department of Social Sciences and Humanities",
			studentCount: 180,
		},
		{
			id: "6",
			name: "Physics",
			code: "PH",
			description: "Department of Physics and Applied Sciences",
			studentCount: 120,
		},
		{
			id: "7",
			name: "Mathematics",
			code: "MA",
			description: "Department of Mathematics and Statistics",
			studentCount: 90,
		},
		{
			id: "8",
			name: "Chemistry",
			code: "CH",
			description: "Department of Chemistry",
			studentCount: 85,
		},
	];

	return (
		<div className="flex flex-col gap-6">
			<div className="flex items-center justify-between">
				<h1 className="text-2xl font-bold">Departments</h1>
				<Button className="gap-2 bg-blue-500 hover:bg-blue-600" asChild>
					<Link href="/dashboard/departments/new">
						<PlusCircle className="h-4 w-4" />
						<span>Add Department</span>
					</Link>
				</Button>
			</div>

			<Card>
				<CardHeader>
					<CardTitle>Department Management</CardTitle>
					<CardDescription>
						View and manage all departments in the institution.
					</CardDescription>
				</CardHeader>
				<CardContent>
					<div className="flex flex-col gap-6">
						<div className="flex items-center gap-2">
							<Search className="h-4 w-4 text-muted-foreground" />
							<Input
								placeholder="Search departments..."
								className="flex-1"
							/>
						</div>

						<div className="rounded-md border">
							<Table>
								<TableHeader>
									<TableRow>
										<TableHead>Name</TableHead>
										<TableHead>Code</TableHead>
										<TableHead>Description</TableHead>
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
											<TableCell>
												{department.code}
											</TableCell>
											<TableCell>
												{department.description}
											</TableCell>
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
					</div>
				</CardContent>
			</Card>
		</div>
	);
}
