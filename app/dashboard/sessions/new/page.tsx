"use client";

import type React from "react";

import { useState } from "react";
import Link from "next/link";
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

export default function NewSessionPage() {
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [formData, setFormData] = useState({
		name: "",
		startYear: "",
		endYear: "",
		status: "active",
	});

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	const handleSelectChange = (name: string, value: string) => {
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		setIsSubmitting(true);

		// Validate form
		if (!formData.name || !formData.startYear || !formData.endYear) {
			toast.error("All fields are required");
			setIsSubmitting(false);
			return;
		}

		// Validate years
		const startYear = Number.parseInt(formData.startYear);
		const endYear = Number.parseInt(formData.endYear);

		if (isNaN(startYear) || isNaN(endYear) || startYear >= endYear) {
			toast.error("End year must be greater than start year");
			setIsSubmitting(false);
			return;
		}

		// Simulate API call
		setTimeout(() => {
			toast.success("Session created successfully");
			setIsSubmitting(false);
			// In a real app, you would redirect to the sessions list
			// or the new session's detail page
		}, 1500);
	};

	// Auto-generate session name when years change
	const updateSessionName = () => {
		if (formData.startYear && formData.endYear) {
			setFormData((prev) => ({
				...prev,
				name: `Batch ${formData.startYear}-${formData.endYear}`,
			}));
		}
	};

	return (
		<div className="flex flex-col gap-6">
			<div className="flex items-center gap-4">
				<Button variant="ghost" size="icon" asChild>
					<Link href="/dashboard/sessions">
						<ArrowLeft className="h-4 w-4" />
					</Link>
				</Button>
				<h1 className="text-2xl font-bold">Add New Session</h1>
			</div>

			<Card>
				<CardHeader>
					<CardTitle>Session Information</CardTitle>
					<CardDescription>
						Enter the details for the new academic session.
					</CardDescription>
				</CardHeader>
				<CardContent>
					<form onSubmit={handleSubmit} className="space-y-6">
						<div className="grid gap-4 md:grid-cols-2">
							<div className="space-y-2">
								<Label htmlFor="startYear">Start Year</Label>
								<Input
									id="startYear"
									name="startYear"
									value={formData.startYear}
									onChange={(e) => {
										handleChange(e);
										setTimeout(updateSessionName, 100);
									}}
									type="number"
									placeholder="e.g., 2023"
									required
								/>
							</div>
							<div className="space-y-2">
								<Label htmlFor="endYear">End Year</Label>
								<Input
									id="endYear"
									name="endYear"
									value={formData.endYear}
									onChange={(e) => {
										handleChange(e);
										setTimeout(updateSessionName, 100);
									}}
									type="number"
									placeholder="e.g., 2027"
									required
								/>
							</div>
							<div className="space-y-2">
								<Label htmlFor="name">Session Name</Label>
								<Input
									id="name"
									name="name"
									value={formData.name}
									onChange={handleChange}
									placeholder="e.g., Batch 2023-2027"
									required
								/>
								<p className="text-xs text-muted-foreground">
									Auto-generated from years, but you can
									customize it
								</p>
							</div>
							<div className="space-y-2">
								<Label htmlFor="status">Status</Label>
								<Select
									defaultValue="active"
									onValueChange={(value) =>
										handleSelectChange("status", value)
									}>
									<SelectTrigger id="status">
										<SelectValue placeholder="Select status" />
									</SelectTrigger>
									<SelectContent>
										<SelectItem value="active">
											Active
										</SelectItem>
										<SelectItem value="completed">
											Completed
										</SelectItem>
										<SelectItem value="upcoming">
											Upcoming
										</SelectItem>
									</SelectContent>
								</Select>
							</div>
						</div>

						<div className="flex justify-end gap-2">
							<Button variant="outline" asChild>
								<Link href="/dashboard/sessions">Cancel</Link>
							</Button>
							<Button
								type="submit"
								className="gap-2 bg-blue-500 hover:bg-blue-600"
								disabled={isSubmitting}>
								{isSubmitting ? (
									<>
										<div className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
										<span>Creating...</span>
									</>
								) : (
									<>
										<Save className="h-4 w-4" />
										<span>Create Session</span>
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
