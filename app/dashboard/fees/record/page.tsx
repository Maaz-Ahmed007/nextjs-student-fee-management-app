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
import { Textarea } from "@/components/ui/textarea";

export default function RecordPaymentPage() {
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [selectedStudent, setSelectedStudent] = useState<string | null>(null);
	const [studentDetails, setStudentDetails] = useState<any>(null);

	// Mock function to simulate fetching student details
	const handleStudentSelect = (value: string) => {
		setSelectedStudent(value);

		// Simulate API call to get student details
		setTimeout(() => {
			setStudentDetails({
				id: value,
				name: "John Doe",
				regNumber: "S2023-1001",
				department: "Computer Science",
				session: "2020-2024",
				outstandingDues: 2500,
			});
		}, 500);
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		setIsSubmitting(true);

		// Simulate API call
		setTimeout(() => {
			setIsSubmitting(false);
			// Redirect would happen here in a real app
			alert("Payment recorded successfully!");
		}, 1500);
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
					<CardTitle>Payment Details</CardTitle>
					<CardDescription>
						Record a new fee payment for a student.
					</CardDescription>
				</CardHeader>
				<CardContent>
					<form onSubmit={handleSubmit} className="space-y-6">
						<div className="space-y-4">
							<div className="space-y-2">
								<Label htmlFor="student">Select Student</Label>
								<Select onValueChange={handleStudentSelect}>
									<SelectTrigger id="student">
										<SelectValue placeholder="Search and select student" />
									</SelectTrigger>
									<SelectContent>
										<SelectItem value="1">
											John Doe (S2023-1001)
										</SelectItem>
										<SelectItem value="2">
											Jane Smith (S2023-1002)
										</SelectItem>
										<SelectItem value="3">
											Michael Johnson (S2023-1003)
										</SelectItem>
										<SelectItem value="4">
											Emily Williams (S2023-1004)
										</SelectItem>
										<SelectItem value="5">
											David Brown (S2023-1005)
										</SelectItem>
									</SelectContent>
								</Select>
							</div>

							{studentDetails && (
								<div className="rounded-md border p-4 bg-gray-50 dark:bg-gray-800">
									<div className="grid gap-2 md:grid-cols-3">
										<div>
											<p className="text-sm font-medium text-muted-foreground">
												Student Name
											</p>
											<p>{studentDetails.name}</p>
										</div>
										<div>
											<p className="text-sm font-medium text-muted-foreground">
												Registration Number
											</p>
											<p>{studentDetails.regNumber}</p>
										</div>
										<div>
											<p className="text-sm font-medium text-muted-foreground">
												Department
											</p>
											<p>{studentDetails.department}</p>
										</div>
										<div>
											<p className="text-sm font-medium text-muted-foreground">
												Session
											</p>
											<p>{studentDetails.session}</p>
										</div>
										<div>
											<p className="text-sm font-medium text-muted-foreground">
												Outstanding Dues
											</p>
											<p className="text-red-600 dark:text-red-400 font-medium">
												$
												{studentDetails.outstandingDues.toLocaleString()}
											</p>
										</div>
									</div>
								</div>
							)}
						</div>

						<div className="grid gap-4 md:grid-cols-2">
							<div className="space-y-2">
								<Label htmlFor="feeType">Fee Type</Label>
								<Select required>
									<SelectTrigger id="feeType">
										<SelectValue placeholder="Select fee type" />
									</SelectTrigger>
									<SelectContent>
										<SelectItem value="semester-fee">
											Semester Fee
										</SelectItem>
										<SelectItem value="library-fee">
											Library Fee
										</SelectItem>
										<SelectItem value="admission-fee">
											Admission Fee
										</SelectItem>
										<SelectItem value="lab-fee">
											Lab Fee
										</SelectItem>
										<SelectItem value="other">
											Other
										</SelectItem>
									</SelectContent>
								</Select>
							</div>
							<div className="space-y-2">
								<Label htmlFor="amount">Amount</Label>
								<Input
									id="amount"
									type="number"
									placeholder="Enter amount"
									required
								/>
							</div>
							<div className="space-y-2">
								<Label htmlFor="paymentDate">
									Payment Date
								</Label>
								<Input
									id="paymentDate"
									type="date"
									defaultValue={
										new Date().toISOString().split("T")[0]
									}
									required
								/>
							</div>
							<div className="space-y-2">
								<Label htmlFor="paymentMethod">
									Payment Method
								</Label>
								<Select required>
									<SelectTrigger id="paymentMethod">
										<SelectValue placeholder="Select payment method" />
									</SelectTrigger>
									<SelectContent>
										<SelectItem value="cash">
											Cash
										</SelectItem>
										<SelectItem value="bank-transfer">
											Bank Transfer
										</SelectItem>
										<SelectItem value="credit-card">
											Credit Card
										</SelectItem>
										<SelectItem value="debit-card">
											Debit Card
										</SelectItem>
										<SelectItem value="online">
											Online Payment
										</SelectItem>
										<SelectItem value="other">
											Other
										</SelectItem>
									</SelectContent>
								</Select>
							</div>
							<div className="space-y-2">
								<Label htmlFor="receiptNumber">
									Receipt Number
								</Label>
								<Input
									id="receiptNumber"
									placeholder="Enter receipt number"
								/>
							</div>
							<div className="space-y-2">
								<Label htmlFor="transactionId">
									Transaction ID
								</Label>
								<Input
									id="transactionId"
									placeholder="Enter transaction ID (if applicable)"
								/>
							</div>
							<div className="space-y-2 md:col-span-2">
								<Label htmlFor="remarks">Remarks</Label>
								<Textarea
									id="remarks"
									placeholder="Add any additional notes or remarks"
									rows={3}
								/>
							</div>
						</div>

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
										<span>Record Payment</span>
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
