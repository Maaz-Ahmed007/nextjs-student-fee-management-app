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
import { Textarea } from "@/components/ui/textarea";

export default function NewDepartmentPage() {
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [formData, setFormData] = useState({
		name: "",
		code: "",
		description: "",
	});

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		setIsSubmitting(true);

		// Validate form
		if (!formData.name || !formData.code) {
			toast.error("Department name and code are required");
			setIsSubmitting(false);
			return;
		}

		// Simulate API call
		setTimeout(() => {
			toast.success("Department created successfully");
			setIsSubmitting(false);
			// In a real app, you would redirect to the departments list
			// or the new department's detail page
		}, 1500);
	};

	return (
		<div className="flex flex-col gap-6">
			<div className="flex items-center gap-4">
				<Button variant="ghost" size="icon" asChild>
					<Link href="/dashboard/departments">
						<ArrowLeft className="h-4 w-4" />
					</Link>
				</Button>
				<h1 className="text-2xl font-bold">Add New Department</h1>
			</div>

			<Card>
				<CardHeader>
					<CardTitle>Department Information</CardTitle>
					<CardDescription>
						Enter the details for the new department.
					</CardDescription>
				</CardHeader>
				<CardContent>
					<form onSubmit={handleSubmit} className="space-y-6">
						<div className="grid gap-4 md:grid-cols-2">
							<div className="space-y-2">
								<Label htmlFor="name">Department Name</Label>
								<Input
									id="name"
									name="name"
									value={formData.name}
									onChange={handleChange}
									placeholder="e.g., Computer Science"
									required
								/>
							</div>
							<div className="space-y-2">
								<Label htmlFor="code">Department Code</Label>
								<Input
									id="code"
									name="code"
									value={formData.code}
									onChange={handleChange}
									placeholder="e.g., CS"
									required
								/>
							</div>
							<div className="space-y-2 md:col-span-2">
								<Label htmlFor="description">Description</Label>
								<Textarea
									id="description"
									name="description"
									value={formData.description}
									onChange={handleChange}
									placeholder="Enter department description"
									rows={3}
								/>
							</div>
						</div>

						<div className="flex justify-end gap-2">
							<Button variant="outline" asChild>
								<Link href="/dashboard/departments">
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
										<span>Creating...</span>
									</>
								) : (
									<>
										<Save className="h-4 w-4" />
										<span>Create Department</span>
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