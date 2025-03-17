"use client";

import type React from "react";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowLeft, Save } from "lucide-react";
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
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";

interface EditStudentPageProps {
	params: {
		id: string;
	};
}

export default function EditStudentPage({ params }: EditStudentPageProps) {
	const router = useRouter();
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [loading, setLoading] = useState(true);

	// Form state
	const [formData, setFormData] = useState({
		regNumber: "",
		rollNumber: "",
		name: "",
		fatherName: "",
		cnicNo: "",
		program: "",
		session: "",
		status: "",
		gender: "",
		dateOfBirth: "",
		email: "",
		phone: "",
		address: "",
		city: "",
		state: "",
	});

	// Fetch student data
	useEffect(() => {
		// In a real app, this would be an API call
		setTimeout(() => {
			setFormData({
				regNumber: `2020-BS(CS)-E0${params.id}`,
				rollNumber: `E0${params.id}`,
				name: "Azad Khan",
				fatherName: "Muhammad Khan",
				cnicNo: "50000-9111111-7",
				program: "BSCS",
				session: "2020-2024",
				status: "active",
				gender: "Male",
				dateOfBirth: "2002-05-15", // Stored in ISO format for the input
				email: "azad.khan@example.com",
				phone: "+92 300 1234567",
				address: "123 University Avenue, Islamabad",
				city: "Islamabad",
				state: "Federal",
			});
			setLoading(false);
		}, 500);
	}, [params.id]);

	// Handle input change
	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { id, value } = e.target;
		setFormData((prev) => ({ ...prev, [id]: value }));
	};

	// Handle select change
	const handleSelectChange = (id: string, value: string) => {
		setFormData((prev) => ({ ...prev, [id]: value }));
	};

	// Format CNIC as user types (e.g., 12345-1234567-1)
	const handleCNICChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		let value = e.target.value.replace(/[^0-9]/g, "");

		if (value.length > 13) {
			value = value.slice(0, 13);
		}

		// Format with dashes
		if (value.length > 5 && value.length <= 12) {
			value = `${value.slice(0, 5)}-${value.slice(5)}`;
		} else if (value.length > 12) {
			value = `${value.slice(0, 5)}-${value.slice(5, 12)}-${value.slice(
				12
			)}`;
		}

		setFormData((prev) => ({ ...prev, cnicNo: value }));
	};

	// Format date to dd/mm/yyyy for display
	const formatDate = (dateString: string) => {
		if (!dateString) return "";

		const date = new Date(dateString);
		const day = date.getDate().toString().padStart(2, "0");
		const month = (date.getMonth() + 1).toString().padStart(2, "0");
		const year = date.getFullYear();

		return `${day}/${month}/${year}`;
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		setIsSubmitting(true);

		// Validate required fields
		const requiredFields = [
			"regNumber",
			"rollNumber",
			"name",
			"fatherName",
			"program",
			"session",
		];
		const missingFields = requiredFields.filter(
			(field) => !formData[field as keyof typeof formData]
		);

		if (missingFields.length > 0) {
			toast.error(
				`Please fill all required fields: ${missingFields.join(", ")}`
			);
			setIsSubmitting(false);
			return;
		}

		// Simulate API call
		setTimeout(() => {
			setIsSubmitting(false);
			toast.success("Student updated successfully!");
			router.push(`/dashboard/students/${params.id}`);
		}, 1500);
	};

	if (loading) {
		return (
			<div className="flex flex-col gap-6">
				<div className="flex items-center gap-4">
					<Button variant="ghost" size="icon" asChild>
						<Link href={`/dashboard/students/${params.id}`}>
							<ArrowLeft className="h-4 w-4" />
						</Link>
					</Button>
					<h1 className="text-2xl font-bold">Loading Student...</h1>
				</div>
				<div className="flex items-center justify-center h-[400px]">
					<div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
				</div>
			</div>
		);
	}

	return (
		<div className="flex flex-col gap-6">
			<div className="flex items-center gap-4">
				<Button variant="ghost" size="icon" asChild>
					<Link href={`/dashboard/students/${params.id}`}>
						<ArrowLeft className="h-4 w-4" />
					</Link>
				</Button>
				<h1 className="text-2xl font-bold">Edit Student</h1>
			</div>

			<Card>
				<CardHeader>
					<CardTitle>Student Information</CardTitle>
					<CardDescription>
						Update the student&apos;s personal and academic
						information.
					</CardDescription>
				</CardHeader>
				<CardContent>
					<form onSubmit={handleSubmit} className="space-y-6">
						<Tabs defaultValue="personal" className="w-full">
							<TabsList className="grid w-full grid-cols-3">
								<TabsTrigger value="personal">
									Personal Information
								</TabsTrigger>
								<TabsTrigger value="academic">
									Academic Details
								</TabsTrigger>
								<TabsTrigger value="contact">
									Contact Information
								</TabsTrigger>
							</TabsList>

							<TabsContent
								value="personal"
								className="space-y-4 pt-4">
								<div className="grid grid-cols-1 gap-4 md:grid-cols-2">
									<div className="space-y-2">
										<Label htmlFor="name">Full Name</Label>
										<Input
											id="name"
											placeholder="Enter full name"
											value={formData.name}
											onChange={handleChange}
											required
										/>
									</div>
									<div className="space-y-2">
										<Label htmlFor="fatherName">
											Father Name
										</Label>
										<Input
											id="fatherName"
											placeholder="Enter father's name"
											value={formData.fatherName}
											onChange={handleChange}
											required
										/>
									</div>
									<div className="space-y-2">
										<Label htmlFor="cnicNo">
											CNIC Number
										</Label>
										<Input
											id="cnicNo"
											placeholder="e.g., 50000-9111111-7"
											value={formData.cnicNo}
											onChange={handleCNICChange}
										/>
										<p className="text-xs text-muted-foreground">
											Format: 50000-9111111-7
										</p>
									</div>
									<div className="space-y-2">
										<Label htmlFor="gender">Gender</Label>
										<Select
											value={formData.gender}
											onValueChange={(value) =>
												handleSelectChange(
													"gender",
													value
												)
											}>
											<SelectTrigger id="gender">
												<SelectValue placeholder="Select gender" />
											</SelectTrigger>
											<SelectContent>
												<SelectItem value="Male">
													Male
												</SelectItem>
												<SelectItem value="Female">
													Female
												</SelectItem>
												<SelectItem value="Other">
													Other
												</SelectItem>
											</SelectContent>
										</Select>
									</div>
									<div className="space-y-2">
										<Label htmlFor="dateOfBirth">
											Date of Birth
										</Label>
										<Input
											id="dateOfBirth"
											type="date"
											value={formData.dateOfBirth}
											onChange={handleChange}
										/>
										{formData.dateOfBirth && (
											<p className="text-xs text-muted-foreground">
												Format:{" "}
												{formatDate(
													formData.dateOfBirth
												)}
											</p>
										)}
									</div>
								</div>
							</TabsContent>

							<TabsContent
								value="academic"
								className="space-y-4 pt-4">
								<div className="grid grid-cols-1 gap-4 md:grid-cols-2">
									<div className="space-y-2">
										<Label htmlFor="regNumber">
											Registration Number
										</Label>
										<Input
											id="regNumber"
											placeholder="e.g., 2020-BS(CS)-E07"
											value={formData.regNumber}
											onChange={handleChange}
											required
										/>
										<p className="text-xs text-muted-foreground">
											Format: 2020-BS(CS)-E07
										</p>
									</div>
									<div className="space-y-2">
										<Label htmlFor="rollNumber">
											Roll Number
										</Label>
										<Input
											id="rollNumber"
											placeholder="e.g., E07"
											value={formData.rollNumber}
											onChange={handleChange}
											required
										/>
									</div>
									<div className="space-y-2">
										<Label htmlFor="program">Program</Label>
										<Select
											value={formData.program}
											onValueChange={(value) =>
												handleSelectChange(
													"program",
													value
												)
											}
											required>
											<SelectTrigger id="program">
												<SelectValue placeholder="Select program" />
											</SelectTrigger>
											<SelectContent>
												<SelectItem value="BSCS">
													Computer Science (BSCS)
												</SelectItem>
												<SelectItem value="BSIT">
													Information Technology
													(BSIT)
												</SelectItem>
											</SelectContent>
										</Select>
									</div>
									<div className="space-y-2">
										<Label htmlFor="session">Session</Label>
										<Select
											value={formData.session}
											onValueChange={(value) =>
												handleSelectChange(
													"session",
													value
												)
											}
											required>
											<SelectTrigger id="session">
												<SelectValue placeholder="Select session" />
											</SelectTrigger>
											<SelectContent>
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
									</div>
									<div className="space-y-2">
										<Label htmlFor="status">Status</Label>
										<Select
											value={formData.status}
											onValueChange={(value) =>
												handleSelectChange(
													"status",
													value
												)
											}>
											<SelectTrigger id="status">
												<SelectValue placeholder="Select status" />
											</SelectTrigger>
											<SelectContent>
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
							</TabsContent>

							<TabsContent
								value="contact"
								className="space-y-4 pt-4">
								<div className="grid grid-cols-1 gap-4 md:grid-cols-2">
									<div className="space-y-2">
										<Label htmlFor="email">
											Email Address
										</Label>
										<Input
											id="email"
											type="email"
											placeholder="student@example.com"
											value={formData.email}
											onChange={handleChange}
										/>
									</div>
									<div className="space-y-2">
										<Label htmlFor="phone">
											Phone Number
										</Label>
										<Input
											id="phone"
											placeholder="e.g., +92 300 1234567"
											value={formData.phone}
											onChange={handleChange}
										/>
									</div>
									<div className="space-y-2 md:col-span-2">
										<Label htmlFor="address">Address</Label>
										<Textarea
											id="address"
											placeholder="Enter student's address"
											rows={3}
											value={formData.address}
											onChange={handleChange}
										/>
									</div>
									<div className="space-y-2">
										<Label htmlFor="city">City</Label>
										<Input
											id="city"
											placeholder="Enter city"
											value={formData.city}
											onChange={handleChange}
										/>
									</div>
									<div className="space-y-2">
										<Label htmlFor="state">
											State/Province
										</Label>
										<Input
											id="state"
											placeholder="Enter state or province"
											value={formData.state}
											onChange={handleChange}
										/>
									</div>
								</div>
							</TabsContent>
						</Tabs>

						<div className="flex justify-end gap-2">
							<Button variant="outline" asChild>
								<Link href={`/dashboard/students/${params.id}`}>
									Cancel
								</Link>
							</Button>
							<Button
								type="submit"
								className="gap-2 bg-blue-500 hover:bg-blue-600"
								disabled={isSubmitting}>
								{isSubmitting ? (
									<>
										<div className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
										<span>Saving...</span>
									</>
								) : (
									<>
										<Save className="h-4 w-4" />
										<span>Update Student</span>
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
