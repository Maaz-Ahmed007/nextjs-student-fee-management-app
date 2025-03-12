"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Save } from "lucide-react";

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

export default function NewStudentPage() {
	const [isSubmitting, setIsSubmitting] = useState(false);

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		setIsSubmitting(true);

		// Simulate API call
		setTimeout(() => {
			setIsSubmitting(false);
			// Redirect would happen here in a real app
			alert("Student added successfully!");
		}, 1500);
	};

	return (
		<div className="flex flex-col gap-6">
			<div className="flex items-center gap-4">
				<Button variant="ghost" size="icon" asChild>
					<Link href="/dashboard/students">
						<ArrowLeft className="h-4 w-4" />
					</Link>
				</Button>
				<h1 className="text-2xl font-bold">Add New Student</h1>
			</div>

			<Card>
				<CardHeader>
					<CardTitle>Student Information</CardTitle>
					<CardDescription>
						Enter the student&apos;s personal and academic
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
										<Label htmlFor="registrationNumber">
											Registration Number
										</Label>
										<Input
											id="registrationNumber"
											placeholder="e.g., S2023-1011"
											required
										/>
									</div>
									<div className="space-y-2">
										<Label htmlFor="enrollmentDate">
											Enrollment Date
										</Label>
										<Input
											id="enrollmentDate"
											type="date"
											required
										/>
									</div>
									<div className="space-y-2">
										<Label htmlFor="firstName">
											First Name
										</Label>
										<Input
											id="firstName"
											placeholder="Enter first name"
											required
										/>
									</div>
									<div className="space-y-2">
										<Label htmlFor="lastName">
											Last Name
										</Label>
										<Input
											id="lastName"
											placeholder="Enter last name"
											required
										/>
									</div>
									<div className="space-y-2">
										<Label htmlFor="gender">Gender</Label>
										<Select>
											<SelectTrigger id="gender">
												<SelectValue placeholder="Select gender" />
											</SelectTrigger>
											<SelectContent>
												<SelectItem value="male">
													Male
												</SelectItem>
												<SelectItem value="female">
													Female
												</SelectItem>
												<SelectItem value="other">
													Other
												</SelectItem>
											</SelectContent>
										</Select>
									</div>
									<div className="space-y-2">
										<Label htmlFor="dateOfBirth">
											Date of Birth
										</Label>
										<Input id="dateOfBirth" type="date" />
									</div>
								</div>
							</TabsContent>

							<TabsContent
								value="academic"
								className="space-y-4 pt-4">
								<div className="grid grid-cols-1 gap-4 md:grid-cols-2">
									<div className="space-y-2">
										<Label htmlFor="department">
											Department
										</Label>
										<Select required>
											<SelectTrigger id="department">
												<SelectValue placeholder="Select department" />
											</SelectTrigger>
											<SelectContent>
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
									</div>
									<div className="space-y-2">
										<Label htmlFor="session">Session</Label>
										<Select required>
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
										<Select defaultValue="active">
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
												<SelectItem value="suspended">
													Suspended
												</SelectItem>
											</SelectContent>
										</Select>
									</div>
									<div className="space-y-2">
										<Label htmlFor="admissionType">
											Admission Type
										</Label>
										<Select defaultValue="regular">
											<SelectTrigger id="admissionType">
												<SelectValue placeholder="Select admission type" />
											</SelectTrigger>
											<SelectContent>
												<SelectItem value="regular">
													Regular
												</SelectItem>
												<SelectItem value="transfer">
													Transfer
												</SelectItem>
												<SelectItem value="special">
													Special
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
											required
										/>
									</div>
									<div className="space-y-2">
										<Label htmlFor="phone">
											Phone Number
										</Label>
										<Input
											id="phone"
											placeholder="e.g., +1234567890"
										/>
									</div>
									<div className="space-y-2 md:col-span-2">
										<Label htmlFor="address">Address</Label>
										<Textarea
											id="address"
											placeholder="Enter student's address"
											rows={3}
										/>
									</div>
									<div className="space-y-2">
										<Label htmlFor="city">City</Label>
										<Input
											id="city"
											placeholder="Enter city"
										/>
									</div>
									<div className="space-y-2">
										<Label htmlFor="state">
											State/Province
										</Label>
										<Input
											id="state"
											placeholder="Enter state or province"
										/>
									</div>
								</div>
							</TabsContent>
						</Tabs>

						<div className="flex justify-end gap-2">
							<Button variant="outline" asChild>
								<Link href="/dashboard/students">Cancel</Link>
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
										<span>Save Student</span>
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
