"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
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
import { Badge } from "@/components/ui/badge";

export default function StudentsPage() {
	const router = useRouter();
	const [searchTerm, setSearchTerm] = useState("");
	const [programFilter, setProgramFilter] = useState("all");
	const [sessionFilter, setSessionFilter] = useState("all");
	const [statusFilter, setStatusFilter] = useState("active");

	// Mock data for students with new format
	const students = [
		{
			id: "1",
			regNumber: "2020-BS(CS)-E01",
			rollNumber: "E01",
			name: "Azad Khan",
			fatherName: "Muhammad Khan",
			cnicNo: "50000-9111111-1",
			program: "BSCS",
			session: "2020-2024",
			status: "active",
		},
		{
			id: "2",
			regNumber: "2020-BS(IT)-E02",
			rollNumber: "E02",
			name: "Sara Ahmed",
			fatherName: "Ahmed Ali",
			cnicNo: "50000-9111111-2",
			program: "BSIT",
			session: "2020-2024",
			status: "active",
		},
		{
			id: "3",
			regNumber: "2021-BS(CS)-E03",
			rollNumber: "E03",
			name: "Imran Malik",
			fatherName: "Malik Riaz",
			cnicNo: "50000-9111111-3",
			program: "BSCS",
			session: "2021-2025",
			status: "active",
		},
		{
			id: "4",
			regNumber: "2021-BS(CS)-E04",
			rollNumber: "E04",
			name: "Ayesha Khan",
			fatherName: "Zafar Khan",
			cnicNo: "50000-9111111-4",
			program: "BSCS",
			session: "2021-2025",
			status: "active",
		},
		{
			id: "5",
			regNumber: "2022-BS(IT)-E05",
			rollNumber: "E05",
			name: "Usman Ali",
			fatherName: "Ali Hassan",
			cnicNo: "50000-9111111-5",
			program: "BSIT",
			session: "2022-2026",
			status: "active",
		},
		{
			id: "6",
			regNumber: "2022-BS(CS)-E06",
			rollNumber: "E06",
			name: "Fatima Zahra",
			fatherName: "Zahid Hussain",
			cnicNo: "50000-9111111-6",
			program: "BSCS",
			session: "2022-2026",
			status: "active",
		},
		{
			id: "7",
			regNumber: "2020-BS(CS)-E07",
			rollNumber: "E07",
			name: "Hassan Raza",
			fatherName: "Raza Khan",
			cnicNo: "50000-9111111-7",
			program: "BSCS",
			session: "2020-2024",
			status: "active",
		},
		{
			id: "8",
			regNumber: "2021-BS(IT)-E08",
			rollNumber: "E08",
			name: "Zainab Fatima",
			fatherName: "Fatima Javed",
			cnicNo: "50000-9111111-8",
			program: "BSIT",
			session: "2021-2025",
			status: "active",
		},
		{
			id: "9",
			regNumber: "2022-BS(CS)-E09",
			rollNumber: "E09",
			name: "Ali Raza",
			fatherName: "Raza Hussain",
			cnicNo: "50000-9111111-9",
			program: "BSCS",
			session: "2022-2026",
			status: "dropout",
		},
		{
			id: "10",
			regNumber: "2020-BS(IT)-E10",
			rollNumber: "E10",
			name: "Sana Malik",
			fatherName: "Malik Javed",
			cnicNo: "50000-9111111-0",
			program: "BSIT",
			session: "2020-2024",
			status: "graduated",
		},
	];

	// Filter students based on search term and filters
	const filteredStudents = students.filter((student) => {
		// Apply search filter
		const matchesSearch =
			searchTerm === "" ||
			student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
			student.regNumber
				.toLowerCase()
				.includes(searchTerm.toLowerCase()) ||
			student.rollNumber
				.toLowerCase()
				.includes(searchTerm.toLowerCase()) ||
			student.cnicNo.includes(searchTerm);

		// Apply program filter
		const matchesProgram =
			programFilter === "all" || student.program === programFilter;

		// Apply session filter
		const matchesSession =
			sessionFilter === "all" || student.session === sessionFilter;

		// Apply status filter
		const matchesStatus =
			statusFilter === "all" || student.status === statusFilter;

		return (
			matchesSearch && matchesProgram && matchesSession && matchesStatus
		);
	});

	// Handle row click to navigate to student details
	const handleRowClick = (studentId: string) => {
		router.push(`/dashboard/students/${studentId}`);
	};

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
									placeholder="Search by name, registration number, roll number or CNIC..."
									className="flex-1"
									value={searchTerm}
									onChange={(e) =>
										setSearchTerm(e.target.value)
									}
								/>
							</div>
							<div className="flex flex-col gap-2 md:flex-row md:items-center">
								<Select
									value={programFilter}
									onValueChange={setProgramFilter}>
									<SelectTrigger className="w-full md:w-[180px]">
										<SelectValue placeholder="Program" />
									</SelectTrigger>
									<SelectContent>
										<SelectItem value="all">
											All Programs
										</SelectItem>
										<SelectItem value="BSCS">
											BSCS
										</SelectItem>
										<SelectItem value="BSIT">
											BSIT
										</SelectItem>
									</SelectContent>
								</Select>
								<Select
									value={sessionFilter}
									onValueChange={setSessionFilter}>
									<SelectTrigger className="w-full md:w-[180px]">
										<SelectValue placeholder="Session" />
									</SelectTrigger>
									<SelectContent>
										<SelectItem value="all">
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
								<Select
									value={statusFilter}
									onValueChange={setStatusFilter}>
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
										<SelectItem value="dropout">
											Dropout
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
										<TableHead>Roll No</TableHead>
										<TableHead>Name</TableHead>
										<TableHead>Father Name</TableHead>
										<TableHead>Program</TableHead>
										<TableHead>Session</TableHead>
										<TableHead>Status</TableHead>
									</TableRow>
								</TableHeader>
								<TableBody>
									{filteredStudents.length === 0 ? (
										<TableRow>
											<TableCell
												colSpan={7}
												className="text-center py-6 text-muted-foreground">
												No students found matching the
												search criteria
											</TableCell>
										</TableRow>
									) : (
										filteredStudents.map((student) => (
											<TableRow
												key={student.id}
												className="cursor-pointer hover:bg-muted/50"
												onClick={() =>
													handleRowClick(student.id)
												}>
												<TableCell className="font-medium">
													{student.regNumber}
												</TableCell>
												<TableCell>
													{student.rollNumber}
												</TableCell>
												<TableCell>
													{student.name}
												</TableCell>
												<TableCell>
													{student.fatherName}
												</TableCell>
												<TableCell>
													{student.program}
												</TableCell>
												<TableCell>
													{student.session}
												</TableCell>
												<TableCell>
													<Badge
														variant={
															student.status ===
															"active"
																? "default"
																: student.status ===
																  "graduated"
																? "secondary"
																: "destructive"
														}>
														{student.status ===
														"active"
															? "Active"
															: student.status ===
															  "graduated"
															? "Graduated"
															: "Dropout"}
													</Badge>
												</TableCell>
											</TableRow>
										))
									)}
								</TableBody>
							</Table>
						</div>

						<div className="flex items-center justify-between">
							<div className="text-sm text-muted-foreground">
								Showing{" "}
								<strong>{filteredStudents.length}</strong> of{" "}
								<strong>{students.length}</strong> students
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
