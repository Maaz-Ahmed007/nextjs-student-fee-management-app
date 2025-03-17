"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import {
	ArrowLeft,
	Download,
	Edit,
	FileText,
	Printer,
	Trash,
	Wallet,
} from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogFooter,
	DialogClose,
} from "@/components/ui/dialog";

export default function StudentDetailsPage() {
	const params = useParams<{ id: string }>();
	const router = useRouter();
	const [student, setStudent] = useState<any>(null);
	const [feeRecords, setFeeRecords] = useState<any[]>([]);
	const [loading, setLoading] = useState(true);
	const [selectedReceipt, setSelectedReceipt] = useState<any>(null);
	const [receiptDialogOpen, setReceiptDialogOpen] = useState(false);
	const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
	const [isDeleting, setIsDeleting] = useState(false);

	// Mock fetching student data
	useEffect(() => {
		// In a real app, this would be an API call
		setTimeout(() => {
			setStudent({
				id: params.id,
				regNumber: `2020-BS(CS)-E0${params.id}`,
				rollNumber: `E0${params.id}`,
				name: "Azad Khan",
				fatherName: "Muhammad Khan",
				cnicNo: "50000-9111111-7",
				email: "azad.khan@example.com",
				phone: "+92 300 1234567",
				address: "123 University Avenue, Islamabad",
				city: "Islamabad",
				state: "Federal",
				program: "BSCS",
				session: "2020-2024",
				enrollmentDate: "01/09/2020",
				status: "active",
				gender: "Male",
				dateOfBirth: "15/05/2002",
			});

			setFeeRecords([
				{
					id: "1",
					feeType: "Admission Fee",
					amount: 2200,
					dueDate: "15/09/2020",
					paidAmount: 2200,
					remainingDues: 0,
					paidDate: "10/09/2020",
					status: "paid",
					challanNo: "CH-2020-0001",
				},
				{
					id: "2",
					feeType: "Tuition Fee (1st Semester)",
					amount: 16500,
					dueDate: "15/09/2020",
					paidAmount: 16500,
					remainingDues: 0,
					paidDate: "10/09/2020",
					status: "paid",
					challanNo: "CH-2020-0002",
				},
				{
					id: "3",
					feeType: "Computer Lab",
					amount: 3000,
					dueDate: "15/09/2020",
					paidAmount: 3000,
					remainingDues: 0,
					paidDate: "10/09/2020",
					status: "paid",
					challanNo: "CH-2020-0003",
				},
				{
					id: "4",
					feeType: "A. V. Equipment",
					amount: 2000,
					dueDate: "15/09/2020",
					paidAmount: 2000,
					remainingDues: 0,
					paidDate: "10/09/2020",
					status: "paid",
					challanNo: "CH-2020-0004",
				},
				{
					id: "5",
					feeType: "Library Fee",
					amount: 3000,
					dueDate: "15/09/2020",
					paidAmount: 3000,
					remainingDues: 0,
					paidDate: "10/09/2020",
					status: "paid",
					challanNo: "CH-2020-0005",
				},
				{
					id: "6",
					feeType: "I.D Card Fee",
					amount: 100,
					dueDate: "15/09/2020",
					paidAmount: 100,
					remainingDues: 0,
					paidDate: "10/09/2020",
					status: "paid",
					challanNo: "CH-2020-0006",
				},
				{
					id: "7",
					feeType: "Security Fee (Refundable)",
					amount: 3300,
					dueDate: "15/09/2020",
					paidAmount: 3300,
					remainingDues: 0,
					paidDate: "10/09/2020",
					status: "paid",
					challanNo: "CH-2020-0007",
				},
				{
					id: "8",
					feeType: "Examination Fee (1st Semester)",
					amount: 2750,
					dueDate: "15/09/2020",
					paidAmount: 2750,
					remainingDues: 0,
					paidDate: "10/09/2020",
					status: "paid",
					challanNo: "CH-2020-0008",
				},
				{
					id: "9",
					feeType: "Tuition Fee (2nd Semester)",
					amount: 16500,
					dueDate: "15/01/2021",
					paidAmount: 16500,
					remainingDues: 0,
					paidDate: "10/01/2021",
					status: "paid",
					challanNo: "CH-2021-0001",
				},
				{
					id: "10",
					feeType: "Tuition Fee (3rd Semester)",
					amount: 18150,
					dueDate: "15/09/2021",
					paidAmount: 0,
					remainingDues: 18150,
					paidDate: null,
					status: "unpaid",
					challanNo: null,
				},
			]);

			setLoading(false);
		}, 500);
	}, [params.id]);

	const handleViewReceipt = (record: any) => {
		// In a real app, this would fetch the receipt details
		setSelectedReceipt({
			...record,
			studentName: student.name,
			fatherName: student.fatherName,
			regNumber: student.regNumber,
			rollNumber: student.rollNumber,
			program: student.program,
			session: student.session,
			paymentMethod: "Bank Transfer",
			transactionId: "TXN-123456",
			remarks: "Regular fee payment",
			createdBy: "Admin User",
			createdAt: record.paidDate + " 10:30 AM",
			institutionName: "University of Technology",
			institutionAddress: "123 University Avenue, Islamabad",
			institutionPhone: "+92 51 1234567",
			institutionEmail: "admin@university.edu",
		});
		setReceiptDialogOpen(true);
	};

	const handlePrintReceipt = () => {
		// In a real app, this would use a proper printing library
		const printContent = document.getElementById("receipt-content");
		if (printContent) {
			const originalContents = document.body.innerHTML;
			document.body.innerHTML = printContent.innerHTML;
			window.print();
			document.body.innerHTML = originalContents;
			toast.success("Receipt sent to printer");
			setReceiptDialogOpen(false);
		}
	};

	const handleDownloadReceipt = () => {
		// In a real app, this would generate a PDF
		toast.success("Receipt downloaded as PDF");
	};

	const handleDeleteStudent = () => {
		setIsDeleting(true);

		// Simulate API call
		setTimeout(() => {
			setIsDeleting(false);
			setDeleteDialogOpen(false);
			toast.success("Student deleted successfully");
			router.push("/dashboard/students");
		}, 1500);
	};

	if (loading) {
		return (
			<div className="flex flex-col gap-6">
				<div className="flex items-center gap-4">
					<Button variant="ghost" size="icon" asChild>
						<Link href="/dashboard/students">
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

	// Calculate total fees, paid amount, and outstanding dues
	const totalFees = feeRecords.reduce(
		(sum, record) => sum + record.amount,
		0
	);
	const paidAmount = feeRecords.reduce(
		(sum, record) => sum + record.paidAmount,
		0
	);
	const outstandingDues = totalFees - paidAmount;

	return (
		<div className="flex flex-col gap-6">
			<div className="flex flex-col justify-center sm:flex-row items-start sm:items-center gap-4">
				<Button
					variant="ghost"
					size="icon"
					asChild
					className="mb-2 sm:mb-0">
					<Link href="/dashboard/students">
						<ArrowLeft className="h-4 w-4" />
					</Link>
				</Button>
				<div className="flex-1">
					<h1 className="text-2xl font-bold">{student.name}</h1>
					<p className="text-sm text-muted-foreground">
						{student.regNumber} • {student.program}
					</p>
				</div>
				<div className="flex flex-wrap items-center gap-2 w-full sm:w-auto mt-2 sm:mt-0">
					<Button
						variant="outline"
						className="gap-2 flex-1 sm:flex-none"
						asChild>
						<Link href={`/dashboard/students/${student.id}/edit`}>
							<Edit className="h-4 w-4" />
							<span>Edit</span>
						</Link>
					</Button>
					<Button
						variant="destructive"
						className="gap-2 flex-1 sm:flex-none"
						onClick={() => setDeleteDialogOpen(true)}>
						<Trash className="h-4 w-4" />
						<span>Delete</span>
					</Button>
					<Button
						className="gap-2 bg-blue-500 hover:bg-blue-600 flex-1 sm:flex-none"
						asChild>
						<Link
							href={`/dashboard/students/${student.id}/record-payment`}>
							<Wallet className="h-4 w-4" />
							<span>Record Payment</span>
						</Link>
					</Button>
				</div>
			</div>

			<div className="grid gap-6 md:grid-cols-3">
				<Card className="md:col-span-2">
					<CardHeader>
						<CardTitle>Student Details</CardTitle>
						<CardDescription>
							Personal and academic information for {student.name}
						</CardDescription>
					</CardHeader>
					<CardContent>
						<Tabs defaultValue="personal">
							<TabsList className="grid w-full grid-cols-3 mb-2">
								<TabsTrigger value="personal">
									Personal
								</TabsTrigger>
								<TabsTrigger value="academic">
									Academic
								</TabsTrigger>
								<TabsTrigger value="contact">
									Contact
								</TabsTrigger>
							</TabsList>
							<TabsContent value="personal" className="pt-4">
								<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
									<div>
										<p className="text-sm font-medium text-muted-foreground">
											Full Name
										</p>
										<p>{student.name}</p>
									</div>
									<div>
										<p className="text-sm font-medium text-muted-foreground">
											Father Name
										</p>
										<p>{student.fatherName}</p>
									</div>
									<div>
										<p className="text-sm font-medium text-muted-foreground">
											CNIC Number
										</p>
										<p>{student.cnicNo}</p>
									</div>
									<div>
										<p className="text-sm font-medium text-muted-foreground">
											Gender
										</p>
										<p>{student.gender}</p>
									</div>
									<div>
										<p className="text-sm font-medium text-muted-foreground">
											Date of Birth
										</p>
										<p>{student.dateOfBirth}</p>
									</div>
								</div>
							</TabsContent>
							<TabsContent value="academic" className="pt-4">
								<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
									<div>
										<p className="text-sm font-medium text-muted-foreground">
											Registration Number
										</p>
										<p>{student.regNumber}</p>
									</div>
									<div>
										<p className="text-sm font-medium text-muted-foreground">
											Roll Number
										</p>
										<p>{student.rollNumber}</p>
									</div>
									<div>
										<p className="text-sm font-medium text-muted-foreground">
											Program
										</p>
										<p>{student.program}</p>
									</div>
									<div>
										<p className="text-sm font-medium text-muted-foreground">
											Session
										</p>
										<p>{student.session}</p>
									</div>
									<div>
										<p className="text-sm font-medium text-muted-foreground">
											Enrollment Date
										</p>
										<p>{student.enrollmentDate}</p>
									</div>
									<div>
										<p className="text-sm font-medium text-muted-foreground">
											Status
										</p>
										<div className="flex items-center">
											<Badge
												variant={
													student.status === "active"
														? "default"
														: student.status ===
														  "graduated"
														? "secondary"
														: "destructive"
												}>
												{student.status === "active"
													? "Active"
													: student.status ===
													  "graduated"
													? "Graduated"
													: "Dropout"}
											</Badge>
										</div>
									</div>
								</div>
							</TabsContent>
							<TabsContent value="contact" className="pt-4">
								<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
									<div>
										<p className="text-sm font-medium text-muted-foreground">
											Email
										</p>
										<p>{student.email}</p>
									</div>
									<div>
										<p className="text-sm font-medium text-muted-foreground">
											Phone
										</p>
										<p>{student.phone}</p>
									</div>
									<div className="col-span-2">
										<p className="text-sm font-medium text-muted-foreground">
											Address
										</p>
										<p>{student.address}</p>
									</div>
									<div>
										<p className="text-sm font-medium text-muted-foreground">
											City
										</p>
										<p>{student.city}</p>
									</div>
									<div>
										<p className="text-sm font-medium text-muted-foreground">
											State/Province
										</p>
										<p>{student.state}</p>
									</div>
								</div>
							</TabsContent>
						</Tabs>
					</CardContent>
				</Card>

				<Card>
					<CardHeader>
						<CardTitle>Fee Summary</CardTitle>
						<CardDescription>
							Overview of fee payments and dues
						</CardDescription>
					</CardHeader>
					<CardContent>
						<div className="space-y-4">
							<div>
								<p className="text-sm font-medium text-muted-foreground">
									Total Fees
								</p>
								<p className="text-2xl font-bold">
									Rs. {totalFees.toLocaleString()}
								</p>
							</div>
							<div>
								<p className="text-sm font-medium text-muted-foreground">
									Paid Amount
								</p>
								<p className="text-2xl font-bold text-green-600 dark:text-green-400">
									Rs. {paidAmount.toLocaleString()}
								</p>
							</div>
							<div>
								<p className="text-sm font-medium text-muted-foreground">
									Outstanding Dues
								</p>
								<p className="text-2xl font-bold text-red-600 dark:text-red-400">
									Rs. {outstandingDues.toLocaleString()}
								</p>
							</div>
							<div className="pt-2">
								<Button
									className="w-full gap-2 bg-blue-500 hover:bg-blue-600"
									asChild>
									<Link
										href={`/dashboard/students/${student.id}/record-payment`}>
										<Wallet className="h-4 w-4" />
										<span>Record New Payment</span>
									</Link>
								</Button>
							</div>
						</div>
					</CardContent>
				</Card>
			</div>

			<Card>
				<CardHeader>
					<CardTitle>Fee Records</CardTitle>
					<CardDescription>
						Complete history of fee payments and outstanding dues
					</CardDescription>
				</CardHeader>
				<CardContent>
					<div className="rounded-md border overflow-x-auto max-w-full">
						<Table>
							<TableHeader>
								<TableRow>
									<TableHead>Fee Type</TableHead>
									<TableHead>Amount</TableHead>
									<TableHead>Due Date</TableHead>
									<TableHead>Paid Amount</TableHead>
									<TableHead>Remaining Dues</TableHead>
									<TableHead>Paid Date</TableHead>
									<TableHead>Status</TableHead>
									<TableHead>Challan No</TableHead>
									<TableHead className="text-right">
										Actions
									</TableHead>
								</TableRow>
							</TableHeader>
							<TableBody>
								{feeRecords.map((record) => (
									<TableRow key={record.id}>
										<TableCell className="font-medium">
											{record.feeType}
										</TableCell>
										<TableCell>
											Rs. {record.amount.toLocaleString()}
										</TableCell>
										<TableCell>{record.dueDate}</TableCell>
										<TableCell>
											Rs.{" "}
											{record.paidAmount.toLocaleString()}
										</TableCell>
										<TableCell>
											Rs.{" "}
											{record.remainingDues.toLocaleString()}
										</TableCell>
										<TableCell>
											{record.paidDate || "-"}
										</TableCell>
										<TableCell>
											<Badge
												variant={
													record.status === "paid"
														? "default"
														: record.status ===
														  "partial"
														? "outline"
														: "destructive"
												}>
												{record.status}
											</Badge>
										</TableCell>
										<TableCell>
											{record.challanNo || "-"}
										</TableCell>
										<TableCell className="text-right">
											{record.status === "unpaid" ? (
												<Button
													variant="ghost"
													size="sm"
													asChild>
													<Link
														href={`/dashboard/students/${student.id}/record-payment?feeId=${record.id}`}>
														Pay Now
													</Link>
												</Button>
											) : (
												<div className="flex justify-end gap-2">
													<Button
														variant="ghost"
														size="sm"
														onClick={() =>
															handleViewReceipt(
																record
															)
														}>
														<FileText className="h-4 w-4 mr-1" />
														View Receipt
													</Button>
												</div>
											)}
										</TableCell>
									</TableRow>
								))}
							</TableBody>
						</Table>
					</div>
				</CardContent>
			</Card>

			{/* Receipt Dialog */}
			<Dialog
				open={receiptDialogOpen}
				onOpenChange={setReceiptDialogOpen}>
				<DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
					<DialogHeader>
						<DialogTitle>
							Receipt #{selectedReceipt?.challanNo}
						</DialogTitle>
						<DialogDescription>
							Payment receipt for {student?.name}
						</DialogDescription>
					</DialogHeader>

					<div className="flex flex-col sm:flex-row sm:justify-end gap-2 mb-4">
						<Button
							variant="outline"
							className="gap-2 w-full sm:w-auto"
							onClick={handlePrintReceipt}>
							<Printer className="h-4 w-4" />
							<span>Print</span>
						</Button>
						<Button
							className="gap-2 bg-blue-500 hover:bg-blue-600 w-full sm:w-auto"
							onClick={handleDownloadReceipt}>
							<Download className="h-4 w-4" />
							<span>Download PDF</span>
						</Button>
					</div>

					{selectedReceipt && (
						<div
							id="receipt-content"
							className="border rounded-md p-4 sm:p-6">
							{/* Receipt Header */}
							<div className="text-center mb-6 sm:mb-8">
								<h2 className="text-2xl font-bold">
									{selectedReceipt.institutionName}
								</h2>
								<p className="text-muted-foreground">
									{selectedReceipt.institutionAddress}
								</p>
								<p className="text-muted-foreground">
									{selectedReceipt.institutionPhone} |{" "}
									{selectedReceipt.institutionEmail}
								</p>
								<div className="mt-4 text-xl font-semibold border-2 border-dashed border-gray-300 dark:border-gray-600 inline-block px-4 py-1 rounded">
									FEE RECEIPT
								</div>
							</div>

							{/* Receipt Number and Date */}
							<div className="flex flex-col sm:flex-row sm:justify-between mb-6 gap-4">
								<div>
									<p className="text-sm text-muted-foreground">
										Challan No
									</p>
									<p className="font-medium">
										{selectedReceipt.challanNo}
									</p>
								</div>
								<div className="sm:text-right">
									<p className="text-sm text-muted-foreground">
										Date
									</p>
									<p className="font-medium">
										{selectedReceipt.paidDate}
									</p>
								</div>
							</div>

							{/* Student Information */}
							<div className="mb-6 p-3 sm:p-4 bg-gray-50 dark:bg-gray-800 rounded-md">
								<h3 className="font-semibold mb-2">
									Student Information
								</h3>
								<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
									<div>
										<p className="text-sm text-muted-foreground">
											Name
										</p>
										<p>{selectedReceipt.studentName}</p>
									</div>
									<div>
										<p className="text-sm text-muted-foreground">
											Father Name
										</p>
										<p>{selectedReceipt.fatherName}</p>
									</div>
									<div>
										<p className="text-sm text-muted-foreground">
											Registration Number
										</p>
										<p>{selectedReceipt.regNumber}</p>
									</div>
									<div>
										<p className="text-sm text-muted-foreground">
											Roll Number
										</p>
										<p>{selectedReceipt.rollNumber}</p>
									</div>
									<div>
										<p className="text-sm text-muted-foreground">
											Program
										</p>
										<p>{selectedReceipt.program}</p>
									</div>
									<div>
										<p className="text-sm text-muted-foreground">
											Session
										</p>
										<p>{selectedReceipt.session}</p>
									</div>
								</div>
							</div>

							{/* Payment Details */}
							<div className="mb-6">
								<h3 className="font-semibold mb-2">
									Payment Details
								</h3>
								<table className="w-full border-collapse">
									<thead>
										<tr className="border-b">
											<th className="text-left py-2">
												Description
											</th>
											<th className="text-right py-2">
												Amount
											</th>
										</tr>
									</thead>
									<tbody>
										<tr className="border-b">
											<td className="py-3">
												{selectedReceipt.feeType}
											</td>
											<td className="text-right py-3">
												Rs.{" "}
												{selectedReceipt.amount.toLocaleString()}
											</td>
										</tr>
										<tr>
											<td className="py-3 font-semibold">
												Total Paid
											</td>
											<td className="text-right py-3 font-semibold">
												Rs.{" "}
												{selectedReceipt.paidAmount.toLocaleString()}
											</td>
										</tr>
									</tbody>
								</table>
							</div>

							{/* Payment Method */}
							<div className="mb-6">
								<h3 className="font-semibold mb-2">
									Payment Method
								</h3>
								<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
									<div>
										<p className="text-sm text-muted-foreground">
											Method
										</p>
										<p>{selectedReceipt.paymentMethod}</p>
									</div>
									<div>
										<p className="text-sm text-muted-foreground">
											Transaction ID
										</p>
										<p>
											{selectedReceipt.transactionId ||
												"N/A"}
										</p>
									</div>
								</div>
							</div>

							{/* Remarks */}
							{selectedReceipt.remarks && (
								<div className="mb-6">
									<h3 className="font-semibold mb-2">
										Remarks
									</h3>
									<p className="text-sm">
										{selectedReceipt.remarks}
									</p>
								</div>
							)}

							{/* Signature */}
							<div className="mt-8 sm:mt-12 flex flex-col sm:flex-row justify-between gap-6 sm:gap-0">
								<div>
									<div className="border-t border-gray-300 dark:border-gray-600 pt-2 w-40">
										<p className="text-sm text-center">
											Student Signature
										</p>
									</div>
								</div>
								<div>
									<div className="border-t border-gray-300 dark:border-gray-600 pt-2 w-40">
										<p className="text-sm text-center">
											Authorized Signature
										</p>
									</div>
								</div>
							</div>

							{/* Footer */}
							<div className="mt-12 pt-4 border-t text-center text-sm text-muted-foreground">
								<p>
									This is a computer-generated receipt and
									does not require a physical signature.
								</p>
								<p>
									For any queries, please contact the accounts
									department.
								</p>
							</div>
						</div>
					)}
				</DialogContent>
			</Dialog>

			{/* Delete Confirmation Dialog */}
			<Dialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
				<DialogContent>
					<DialogHeader>
						<DialogTitle>Confirm Deletion</DialogTitle>
						<DialogDescription>
							Are you sure you want to delete this student? This
							action cannot be undone.
						</DialogDescription>
					</DialogHeader>
					<DialogFooter className="flex items-center justify-between">
						<DialogClose asChild>
							<Button variant="outline">Cancel</Button>
						</DialogClose>
						<Button
							variant="destructive"
							onClick={handleDeleteStudent}
							disabled={isDeleting}>
							{isDeleting ? (
								<>
									<div className="h-4 w-4 mr-2 animate-spin rounded-full border-2 border-current border-t-transparent" />
									Deleting...
								</>
							) : (
								"Delete Student"
							)}
						</Button>
					</DialogFooter>
				</DialogContent>
			</Dialog>
		</div>
	);
}
