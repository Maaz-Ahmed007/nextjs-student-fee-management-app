"use client";

import type React from "react";

import { useState, useEffect } from "react";
import { useSearchParams, useParams, useRouter } from "next/navigation";
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
import { Textarea } from "@/components/ui/textarea";

export default function RecordPaymentPage() {
	const router = useRouter();
	const params = useParams();
	const searchParams = useSearchParams();
	const semesterId = searchParams.get("semesterId");
	const studentId = params.id as string;

	const [isSubmitting, setIsSubmitting] = useState(false);
	const [studentDetails, setStudentDetails] = useState<any>(null);
	const [semesterFees, setSemesterFees] = useState<any[]>([]);
	const [selectedSemester, setSelectedSemester] = useState<any>(null);

	const [formData, setFormData] = useState({
		semester: "",
		totalAmount: "",
		paidAmount: "",
		remainingDues: "",
		paymentDate: new Date()
			.toLocaleDateString("en-GB")
			.split("/")
			.join("/"), // dd/mm/yyyy
		paymentMethod: "",
		challanNo: `CH-${new Date().getFullYear()}-${Math.floor(
			1000 + Math.random() * 9000
		)}`,
		transactionId: "",
		remarks: "",
	});

	// Simulate fetching student details and semester fees
	useEffect(() => {
		if (!studentId) return;

		// In a real app, this would be an API call
		setTimeout(() => {
			const studentData = {
				id: studentId,
				name: "Azad Khan",
				fatherName: "Muhammad Khan",
				regNumber: `2020-BS(CS)-E0${studentId}`,
				rollNumber: `E0${studentId}`,
				program: "BSCS",
				session: "2020-2024",
				outstandingDues: 18150,
			};

			const semesterFeesData = [
				{
					id: "1",
					name: "1st Semester",
					academicYear: "2020-2021",
					totalAmount: 33350, // Sum of all fee types for 1st semester
					dueDate: "15/09/2020",
					status: "paid",
					paidAmount: 33350,
					remainingDues: 0,
					breakdown: [
						{ type: "Admission Fee", amount: 2200 },
						{ type: "Tuition Fee", amount: 16500 },
						{ type: "Computer Lab", amount: 3000 },
						{ type: "A. V. Equipment", amount: 2000 },
						{ type: "Library Fee", amount: 3000 },
						{ type: "I.D Card Fee", amount: 100 },
						{ type: "Security Fee (Refundable)", amount: 3300 },
						{ type: "Examination Fee", amount: 2750 },
						{ type: "DMC/Provisional", amount: 500 },
					],
				},
				{
					id: "2",
					name: "2nd Semester",
					academicYear: "2020-2021",
					totalAmount: 19750, // Sum of all fee types for 2nd semester
					dueDate: "15/01/2021",
					status: "paid",
					paidAmount: 19750,
					remainingDues: 0,
					breakdown: [
						{ type: "Tuition Fee", amount: 16500 },
						{ type: "Examination Fee", amount: 2750 },
						{ type: "DMC/Provisional", amount: 500 },
					],
				},
				{
					id: "3",
					name: "3rd Semester",
					academicYear: "2021-2022",
					totalAmount: 21675, // Sum of all fee types for 3rd semester
					dueDate: "15/09/2021",
					status: "unpaid",
					paidAmount: 0,
					remainingDues: 21675,
					breakdown: [
						{ type: "Tuition Fee", amount: 18150 },
						{ type: "Examination Fee", amount: 3025 },
						{ type: "DMC/Provisional", amount: 500 },
					],
				},
				{
					id: "4",
					name: "4th Semester",
					academicYear: "2021-2022",
					totalAmount: 21675, // Sum of all fee types for 4th semester
					dueDate: "15/01/2022",
					status: "unpaid",
					paidAmount: 0,
					remainingDues: 21675,
					breakdown: [
						{ type: "Tuition Fee", amount: 18150 },
						{ type: "Examination Fee", amount: 3025 },
						{ type: "DMC/Provisional", amount: 500 },
					],
				},
			];

			setStudentDetails(studentData);
			setSemesterFees(semesterFeesData);

			// If semesterId is provided in URL, select that semester
			if (semesterId) {
				const semester = semesterFeesData.find(
					(s) => s.id === semesterId
				);
				if (semester) {
					setSelectedSemester(semester);
					setFormData((prev) => ({
						...prev,
						semester: semester.id,
						totalAmount: semester.totalAmount.toString(),
						paidAmount: semester.totalAmount.toString(),
						remainingDues: "0",
					}));
				}
			}
		}, 500);
	}, [studentId, semesterId]);

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target;

		if (name === "paidAmount" && selectedSemester) {
			const paidAmount = Number.parseFloat(value) || 0;
			const totalAmount = Number.parseFloat(formData.totalAmount) || 0;
			const remainingDues = Math.max(0, totalAmount - paidAmount);

			setFormData((prev) => ({
				...prev,
				[name]: value,
				remainingDues: remainingDues.toString(),
			}));
		} else {
			setFormData((prev) => ({ ...prev, [name]: value }));
		}
	};

	const handleSelectChange = (name: string, value: string) => {
		if (name === "semester") {
			const semester = semesterFees.find((s) => s.id === value);
			if (semester) {
				setSelectedSemester(semester);
				setFormData((prev) => ({
					...prev,
					semester: value,
					totalAmount: semester.totalAmount.toString(),
					paidAmount: semester.totalAmount.toString(),
					remainingDues: "0",
				}));
			} else {
				setSelectedSemester(null);
			}
		} else {
			setFormData((prev) => ({ ...prev, [name]: value }));
		}
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		setIsSubmitting(true);

		// Validate form
		if (
			!formData.semester ||
			!formData.paidAmount ||
			!formData.paymentMethod
		) {
			toast.error("Please fill all required fields");
			setIsSubmitting(false);
			return;
		}

		// Validate paid amount
		const paidAmount = Number.parseFloat(formData.paidAmount);
		const totalAmount = Number.parseFloat(formData.totalAmount);
		if (isNaN(paidAmount) || paidAmount <= 0) {
			toast.error("Paid amount must be greater than zero");
			setIsSubmitting(false);
			return;
		}

		if (paidAmount > totalAmount) {
			toast.error("Paid amount cannot exceed total amount");
			setIsSubmitting(false);
			return;
		}

		// Simulate API call
		setTimeout(() => {
			toast.success("Payment recorded successfully");

			// Navigate to receipt page
			router.push(
				`/dashboard/students/${studentId}/view-receipt/${formData.challanNo}`
			);
		}, 1500);
	};

	if (!studentDetails) {
		return (
			<div className="flex flex-col gap-6">
				<div className="flex items-center gap-4">
					<Button variant="ghost" size="icon" asChild>
						<Link href={`/dashboard/students/${studentId}`}>
							<ArrowLeft className="h-4 w-4" />
						</Link>
					</Button>
					<h1 className="text-2xl font-bold">Loading...</h1>
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
					<Link href={`/dashboard/students/${studentId}`}>
						<ArrowLeft className="h-4 w-4" />
					</Link>
				</Button>
				<h1 className="text-2xl font-bold">Record Fee Payment</h1>
			</div>

			<Card>
				<CardHeader>
					<CardTitle>Payment Details</CardTitle>
					<CardDescription>
						Record a new fee payment for this student.
					</CardDescription>
				</CardHeader>
				<CardContent>
					<form onSubmit={handleSubmit} className="space-y-6">
						<div className="rounded-md border p-4 bg-gray-50 dark:bg-gray-800">
							<div className="grid gap-4 md:grid-cols-3">
								<div>
									<p className="text-sm font-medium text-muted-foreground">
										Student Name
									</p>
									<p>{studentDetails.name}</p>
								</div>
								<div>
									<p className="text-sm font-medium text-muted-foreground">
										Father Name
									</p>
									<p>{studentDetails.fatherName}</p>
								</div>
								<div>
									<p className="text-sm font-medium text-muted-foreground">
										Registration Number
									</p>
									<p>{studentDetails.regNumber}</p>
								</div>
								<div>
									<p className="text-sm font-medium text-muted-foreground">
										Roll Number
									</p>
									<p>{studentDetails.rollNumber}</p>
								</div>
								<div>
									<p className="text-sm font-medium text-muted-foreground">
										Program
									</p>
									<p>{studentDetails.program}</p>
								</div>
								<div>
									<p className="text-sm font-medium text-muted-foreground">
										Session
									</p>
									<p>{studentDetails.session}</p>
								</div>
								<div className="md:col-span-3">
									<p className="text-sm font-medium text-muted-foreground">
										Outstanding Dues
									</p>
									<p className="text-red-600 dark:text-red-400 font-medium">
										Rs.{" "}
										{studentDetails.outstandingDues.toLocaleString()}
									</p>
								</div>
							</div>
						</div>

						<div className="grid gap-4 md:grid-cols-2">
							<div className="space-y-2">
								<Label htmlFor="semester">Semester</Label>
								<Select
									required
									value={formData.semester}
									onValueChange={(value) =>
										handleSelectChange("semester", value)
									}>
									<SelectTrigger id="semester">
										<SelectValue placeholder="Select semester" />
									</SelectTrigger>
									<SelectContent>
										<SelectItem value="unpaid-semesters" disabled>
											Unpaid Semesters
										</SelectItem>
										{semesterFees
											.filter(
												(semester) =>
													semester.status === "unpaid"
											)
											.map((semester) => (
												<SelectItem
													key={semester.id}
													value={semester.id}>
													{semester.name} - Rs.{" "}
													{semester.totalAmount.toLocaleString()}{" "}
													(Due: {semester.dueDate})
												</SelectItem>
											))}
										<SelectItem value="all-semesters" disabled>
											All Semesters
										</SelectItem>
										{semesterFees.map((semester) => (
											<SelectItem
												key={semester.id}
												value={semester.id}>
												{semester.name} -{" "}
												{semester.academicYear}
												{semester.status === "paid"
													? " (Paid)"
													: ""}
											</SelectItem>
										))}
									</SelectContent>
								</Select>
							</div>

							<div className="space-y-2">
								<Label htmlFor="challanNo">Challan No</Label>
								<Input
									id="challanNo"
									name="challanNo"
									value={formData.challanNo}
									onChange={handleChange}
									placeholder="Enter challan number"
								/>
								<p className="text-xs text-muted-foreground">
									Auto-generated, but can be customized
								</p>
							</div>

							{selectedSemester && (
								<>
									<div className="space-y-2">
										<Label htmlFor="totalAmount">
											Total Amount
										</Label>
										<Input
											id="totalAmount"
											name="totalAmount"
											value={formData.totalAmount}
											onChange={handleChange}
											type="number"
											placeholder="Enter total amount"
											required
											readOnly
										/>
									</div>
									<div className="space-y-2">
										<Label htmlFor="paidAmount">
											Paid Amount
										</Label>
										<Input
											id="paidAmount"
											name="paidAmount"
											value={formData.paidAmount}
											onChange={handleChange}
											type="number"
											placeholder="Enter paid amount"
											required
										/>
									</div>
									<div className="space-y-2">
										<Label htmlFor="remainingDues">
											Remaining Dues
										</Label>
										<Input
											id="remainingDues"
											name="remainingDues"
											value={formData.remainingDues}
											readOnly
											type="number"
											placeholder="Remaining dues"
										/>
									</div>
									<div className="space-y-2">
										<Label htmlFor="paymentDate">
											Payment Date
										</Label>
										<Input
											id="paymentDate"
											name="paymentDate"
											value={formData.paymentDate}
											onChange={handleChange}
											type="text"
											placeholder="DD/MM/YYYY"
											required
										/>
									</div>
									<div className="space-y-2">
										<Label htmlFor="paymentMethod">
											Payment Method
										</Label>
										<Select
											required
											value={formData.paymentMethod}
											onValueChange={(value) =>
												setFormData((prev) => ({
													...prev,
													paymentMethod: value,
												}))
											}>
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
												<SelectItem value="online-banking">
													Online Banking
												</SelectItem>
												<SelectItem value="cheque">
													Cheque
												</SelectItem>
												<SelectItem value="demand-draft">
													Demand Draft
												</SelectItem>
												<SelectItem value="other">
													Other
												</SelectItem>
											</SelectContent>
										</Select>
									</div>
									<div className="space-y-2">
										<Label htmlFor="transactionId">
											Transaction ID
										</Label>
										<Input
											id="transactionId"
											name="transactionId"
											value={formData.transactionId}
											onChange={handleChange}
											placeholder="Enter transaction ID (if applicable)"
										/>
									</div>
									<div className="space-y-2 md:col-span-2">
										<Label htmlFor="remarks">Remarks</Label>
										<Textarea
											id="remarks"
											name="remarks"
											value={formData.remarks}
											onChange={handleChange}
											placeholder="Add any additional notes or remarks"
											rows={3}
										/>
									</div>
								</>
							)}
						</div>

						{selectedSemester && (
							<div className="rounded-md border p-4 bg-gray-50 dark:bg-gray-800">
								<h3 className="font-medium mb-3">
									Fee Breakdown for {selectedSemester.name}
								</h3>
								<div className="space-y-2">
									{selectedSemester.breakdown.map(
										(item: any, index: number) => (
											<div
												key={index}
												className="flex justify-between">
												<span>{item.type}</span>
												<span>
													Rs.{" "}
													{item.amount.toLocaleString()}
												</span>
											</div>
										)
									)}
									<div className="border-t pt-2 mt-2 flex justify-between font-medium">
										<span>Total</span>
										<span>
											Rs.{" "}
											{selectedSemester.totalAmount.toLocaleString()}
										</span>
									</div>
								</div>
							</div>
						)}

						<div className="flex justify-end gap-2">
							<Button variant="outline" asChild>
								<Link href={`/dashboard/students/${studentId}`}>
									Cancel
								</Link>
							</Button>
							<Button
								type="submit"
								className="gap-2 bg-blue-500 hover:bg-blue-600"
								disabled={isSubmitting || !selectedSemester}>
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
