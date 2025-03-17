"use client";

import type React from "react";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowLeft, Save, Search } from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";

export default function RecordFeePage() {
	const router = useRouter();
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [searchQuery, setSearchQuery] = useState("");
	const [selectedStudent, setSelectedStudent] = useState<any>(null);
	const [students, setStudents] = useState<any[]>([]);
	const [filteredStudents, setFilteredStudents] = useState<any[]>([]);
	const [popoverOpen, setPopoverOpen] = useState(false);

	// Simulate fetching students
	useEffect(() => {
		// In a real app, this would be an API call
		const studentsData = [
			{
				id: "1",
				name: "Azad Khan",
				fatherName: "Muhammad Khan",
				regNumber: "2020-BS(CS)-E01",
				rollNumber: "E01",
				program: "BSCS",
				session: "2020-2024",
				outstandingDues: 21675,
			},
			{
				id: "2",
				name: "Sara Ahmed",
				fatherName: "Ahmed Ali",
				regNumber: "2020-BS(CS)-E02",
				rollNumber: "E02",
				program: "BSCS",
				session: "2020-2024",
				outstandingDues: 21675,
			},
			{
				id: "3",
				name: "Ali Raza",
				fatherName: "Raza Khan",
				regNumber: "2020-BS(IT)-E01",
				rollNumber: "E01",
				program: "BSIT",
				session: "2020-2024",
				outstandingDues: 7750,
			},
			{
				id: "4",
				name: "Fatima Khan",
				fatherName: "Imran Khan",
				regNumber: "2020-BS(IT)-E02",
				rollNumber: "E02",
				program: "BSIT",
				session: "2020-2024",
				outstandingDues: 31350,
			},
		];

		setStudents(studentsData);
		setFilteredStudents(studentsData);
	}, []);

	// Filter students based on search query
	useEffect(() => {
		if (searchQuery.trim() === "") {
			setFilteredStudents(students);
		} else {
			const filtered = students.filter(
				(student) =>
					student.name
						.toLowerCase()
						.includes(searchQuery.toLowerCase()) ||
					student.regNumber
						.toLowerCase()
						.includes(searchQuery.toLowerCase())
			);
			setFilteredStudents(filtered);
		}
	}, [searchQuery, students]);

	const handleStudentSelect = (student: any) => {
		setSelectedStudent(student);
		setPopoverOpen(false);
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();

		if (!selectedStudent) {
			toast.error("Please select a student");
			return;
		}

		setIsSubmitting(true);

		// Simulate API call
		setTimeout(() => {
			setIsSubmitting(false);

			// Navigate to record payment page for the selected student
			router.push(
				`/dashboard/students/${selectedStudent.id}/record-payment`
			);
		}, 1000);
	};

	return (
		<div className="flex flex-col gap-6">
			<div className="flex items-center gap-4">
				<Button variant="ghost" size="icon" asChild>
					<Link href="/dashboard/fees">
						<ArrowLeft className="h-4 w-4" />
					</Link>
				</Button>
				<h1 className="text-2xl font-bold">Record Fee Payment</h1>
			</div>

			<Card>
				<CardHeader>
					<CardTitle>Select Student</CardTitle>
					<CardDescription>
						Search and select a student to record a fee payment.
					</CardDescription>
				</CardHeader>
				<CardContent>
					<form onSubmit={handleSubmit} className="space-y-6">
						<div className="space-y-2">
							<Label htmlFor="student">Student</Label>
							<div className="flex gap-2">
								<Popover
									open={popoverOpen}
									onOpenChange={setPopoverOpen}>
									<PopoverTrigger asChild>
										<Button
											variant="outline"
											className="w-full justify-between"
											type="button">
											{selectedStudent ? (
												<span>
													{selectedStudent.name} (
													{selectedStudent.regNumber})
												</span>
											) : (
												<span>
													Search for a student
												</span>
											)}
											<Search className="h-4 w-4 opacity-50" />
										</Button>
									</PopoverTrigger>
									<PopoverContent
										className="w-[300px] p-0"
										align="start">
										<div className="p-2">
											<div className="relative">
												<Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
												<Input
													type="search"
													placeholder="Search by name or reg no..."
													className="pl-8"
													value={searchQuery}
													onChange={(e) =>
														setSearchQuery(
															e.target.value
														)
													}
												/>
											</div>
										</div>
										<div className="max-h-[300px] overflow-auto">
											{filteredStudents.length === 0 ? (
												<div className="p-4 text-center text-sm text-muted-foreground">
													No students found
												</div>
											) : (
												filteredStudents.map(
													(student) => (
														<button
															key={student.id}
															type="button"
															className="w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 flex flex-col"
															onClick={() =>
																handleStudentSelect(
																	student
																)
															}>
															<span className="font-medium">
																{student.name}
															</span>
															<span className="text-sm text-muted-foreground">
																{
																	student.regNumber
																}
															</span>
														</button>
													)
												)
											)}
										</div>
									</PopoverContent>
								</Popover>
							</div>
						</div>

						{selectedStudent && (
							<div className="rounded-md border p-4 bg-gray-50 dark:bg-gray-800">
								<div className="grid gap-4 md:grid-cols-3">
									<div>
										<p className="text-sm font-medium text-muted-foreground">
											Student Name
										</p>
										<p>{selectedStudent.name}</p>
									</div>
									<div>
										<p className="text-sm font-medium text-muted-foreground">
											Father Name
										</p>
										<p>{selectedStudent.fatherName}</p>
									</div>
									<div>
										<p className="text-sm font-medium text-muted-foreground">
											Registration Number
										</p>
										<p>{selectedStudent.regNumber}</p>
									</div>
									<div>
										<p className="text-sm font-medium text-muted-foreground">
											Roll Number
										</p>
										<p>{selectedStudent.rollNumber}</p>
									</div>
									<div>
										<p className="text-sm font-medium text-muted-foreground">
											Program
										</p>
										<p>{selectedStudent.program}</p>
									</div>
									<div>
										<p className="text-sm font-medium text-muted-foreground">
											Session
										</p>
										<p>{selectedStudent.session}</p>
									</div>
									<div className="md:col-span-3">
										<p className="text-sm font-medium text-muted-foreground">
											Outstanding Dues
										</p>
										<p className="text-red-600 dark:text-red-400 font-medium">
											Rs.{" "}
											{selectedStudent.outstandingDues.toLocaleString()}
										</p>
									</div>
								</div>
							</div>
						)}

						<div className="flex justify-end gap-2">
							<Button variant="outline" asChild>
								<Link href="/dashboard/fees">Cancel</Link>
							</Button>
							<Button
								type="submit"
								className="gap-2 bg-blue-500 hover:bg-blue-600"
								disabled={isSubmitting || !selectedStudent}>
								{isSubmitting ? (
									<>
										<div className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
										<span>Processing...</span>
									</>
								) : (
									<>
										<Save className="h-4 w-4" />
										<span>Continue</span>
									</>
								)}
							</Button>
						</div>
					</form>
				</CardContent>
			</Card>
		</div>
	);
}
