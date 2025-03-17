"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { ArrowLeft, Download, Printer } from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function ReceiptPage() {
	const params = useParams();
	const studentId = params.id as string;
	const receiptId = params.receiptId as string;

	const [receipt, setReceipt] = useState<any>(null);
	const [loading, setLoading] = useState(true);
	const receiptRef = useRef<HTMLDivElement>(null);

	// Handle printing functionality
	const handlePrint = () => {
		if (receiptRef.current) {
			// Store the current page styles
			const originalContents = document.body.innerHTML;

			// Replace with just our receipt content
			document.body.innerHTML = receiptRef.current.innerHTML;

			// Add print-specific styles
			const style = document.createElement("style");
			style.innerHTML = `
        @media print {
          body { 
            padding: 20px;
            font-family: system-ui, sans-serif;
          }
          @page { 
            size: auto;
            margin: 10mm; 
          }
        }
      `;
			document.head.appendChild(style);

			// Print
			window.print();

			// Restore original content
			document.body.innerHTML = originalContents;

			// Show success message
			toast.success("Receipt has been sent to printer");
		}
	};

	// Mock fetching receipt data
	useEffect(() => {
		if (!studentId || !receiptId) return;

		// In a real app, this would be an API call
		setTimeout(() => {
			setReceipt({
				id: receiptId,
				challanNo: receiptId,
				studentId: studentId,
				studentName: "Azad Khan",
				fatherName: "Muhammad Khan",
				regNumber: `2020-BS(CS)-E0${studentId}`,
				rollNumber: `E0${studentId}`,
				program: "BSCS",
				session: "2020-2024",
				semester: "3rd Semester",
				academicYear: "2021-2022",
				totalAmount: 21675,
				paidAmount: 15000,
				remainingDues: 6675,
				paymentDate: "15/09/2021",
				dueDate: "15/09/2021",
				paymentMethod: "Bank Transfer",
				transactionId: "TXN-123456",
				remarks: "Partial payment for 3rd semester",
				createdBy: "Admin User",
				createdAt: "15/09/2021 10:30 AM",
				institutionName: "University of Technology",
				institutionAddress: "123 University Avenue, Islamabad",
				institutionPhone: "+92 51 1234567",
				institutionEmail: "admin@university.edu",
				breakdown: [
					{ type: "Tuition Fee", amount: 18150 },
					{ type: "Examination Fee", amount: 3025 },
					{ type: "DMC/Provisional", amount: 500 },
				],
			});
			setLoading(false);
		}, 1000);
	}, [studentId, receiptId]);

	// Handle download as PDF
	const handleDownload = () => {
		// TODO: This would generate and download a PDF
		toast.success("Receipt is being downloaded as PDF");
	};

	if (loading) {
		return (
			<div className="flex flex-col gap-6">
				<div className="flex items-center gap-4">
					<Button variant="ghost" size="icon" asChild>
						<Link href={`/dashboard/students/${studentId}`}>
							<ArrowLeft className="h-4 w-4" />
						</Link>
					</Button>
					<h1 className="text-2xl font-bold">Loading Receipt...</h1>
				</div>
				<div className="flex items-center justify-center h-[600px]">
					<div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
				</div>
			</div>
		);
	}

	return (
		<div className="flex flex-col gap-6">
			<div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
				<div className="flex items-center gap-4">
					<Button variant="ghost" size="icon" asChild>
						<Link href={`/dashboard/students/${studentId}`}>
							<ArrowLeft className="h-4 w-4" />
						</Link>
					</Button>
					<h1 className="text-2xl font-bold">
						Receipt #{receipt.challanNo}
					</h1>
				</div>
				<div className="flex items-center gap-2 w-full sm:w-auto">
					<Button
						variant="outline"
						className="gap-2 flex-1 sm:flex-none"
						onClick={handlePrint}>
						<Printer className="h-4 w-4" />
						<span>Print</span>
					</Button>
					<Button
						className="gap-2 bg-blue-500 hover:bg-blue-600 flex-1 sm:flex-none"
						onClick={handleDownload}>
						<Download className="h-4 w-4" />
						<span>Download PDF</span>
					</Button>
				</div>
			</div>

			<Card className="p-4 sm:p-8 max-w-4xl mx-auto">
				<div ref={receiptRef} className="p-4 sm:p-8">
					{/* Receipt Header */}
					<div className="text-center mb-8">
						<h2 className="text-2xl font-bold">
							{receipt.institutionName}
						</h2>
						<p className="text-muted-foreground">
							{receipt.institutionAddress}
						</p>
						<p className="text-muted-foreground">
							{receipt.institutionPhone} |{" "}
							{receipt.institutionEmail}
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
							<p className="font-medium">{receipt.challanNo}</p>
						</div>
						<div className="sm:text-right">
							<p className="text-sm text-muted-foreground">
								Date
							</p>
							<p className="font-medium">{receipt.paymentDate}</p>
						</div>
					</div>

					{/* Student Information */}
					<div className="mb-6 p-4 bg-gray-50 dark:bg-gray-800 rounded-md">
						<h3 className="font-semibold mb-2">
							Student Information
						</h3>
						<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
							<div>
								<p className="text-sm text-muted-foreground">
									Name
								</p>
								<p>{receipt.studentName}</p>
							</div>
							<div>
								<p className="text-sm text-muted-foreground">
									Father Name
								</p>
								<p>{receipt.fatherName}</p>
							</div>
							<div>
								<p className="text-sm text-muted-foreground">
									Registration Number
								</p>
								<p>{receipt.regNumber}</p>
							</div>
							<div>
								<p className="text-sm text-muted-foreground">
									Roll Number
								</p>
								<p>{receipt.rollNumber}</p>
							</div>
							<div>
								<p className="text-sm text-muted-foreground">
									Program
								</p>
								<p>{receipt.program}</p>
							</div>
							<div>
								<p className="text-sm text-muted-foreground">
									Session
								</p>
								<p>{receipt.session}</p>
							</div>
							<div>
								<p className="text-sm text-muted-foreground">
									Semester
								</p>
								<p>{receipt.semester}</p>
							</div>
							<div>
								<p className="text-sm text-muted-foreground">
									Academic Year
								</p>
								<p>{receipt.academicYear}</p>
							</div>
						</div>
					</div>

					{/* Payment Details */}
					<div className="mb-6">
						<h3 className="font-semibold mb-2">Fee Breakdown</h3>
						<table className="w-full border-collapse">
							<thead>
								<tr className="border-b">
									<th className="text-left py-2">
										Description
									</th>
									<th className="text-right py-2">Amount</th>
								</tr>
							</thead>
							<tbody>
								{receipt.breakdown.map(
									(item: any, index: number) => (
										<tr key={index} className="border-b">
											<td className="py-2">
												{item.type}
											</td>
											<td className="text-right py-2">
												Rs.{" "}
												{item.amount.toLocaleString()}
											</td>
										</tr>
									)
								)}
								<tr className="border-b font-medium">
									<td className="py-3">Total Fee</td>
									<td className="text-right py-3">
										Rs.{" "}
										{receipt.totalAmount.toLocaleString()}
									</td>
								</tr>
								<tr className="border-b text-green-600 dark:text-green-400 font-medium">
									<td className="py-3">Paid Amount</td>
									<td className="text-right py-3">
										Rs.{" "}
										{receipt.paidAmount.toLocaleString()}
									</td>
								</tr>
								{receipt.remainingDues > 0 && (
									<tr className="text-red-600 dark:text-red-400 font-medium">
										<td className="py-3">Remaining Dues</td>
										<td className="text-right py-3">
											Rs.{" "}
											{receipt.remainingDues.toLocaleString()}
										</td>
									</tr>
								)}
							</tbody>
						</table>
					</div>

					{/* Payment Method */}
					<div className="mb-6">
						<h3 className="font-semibold mb-2">Payment Method</h3>
						<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
							<div>
								<p className="text-sm text-muted-foreground">
									Method
								</p>
								<p>{receipt.paymentMethod}</p>
							</div>
							<div>
								<p className="text-sm text-muted-foreground">
									Transaction ID
								</p>
								<p>{receipt.transactionId || "N/A"}</p>
							</div>
						</div>
					</div>

					{/* Remarks */}
					{receipt.remarks && (
						<div className="mb-6">
							<h3 className="font-semibold mb-2">Remarks</h3>
							<p className="text-sm">{receipt.remarks}</p>
						</div>
					)}

					{/* Signature */}
					<div className="mt-12 flex flex-col sm:flex-row justify-between gap-6 sm:gap-0">
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
							This is a computer-generated receipt and does not
							require a physical signature.
						</p>
						<p>
							For any queries, please contact the accounts
							department.
						</p>
					</div>
				</div>
			</Card>
		</div>
	);
}
