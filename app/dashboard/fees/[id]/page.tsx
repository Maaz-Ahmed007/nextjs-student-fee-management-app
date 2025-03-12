import Link from "next/link";
import { ArrowLeft, Download, Trash, User } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

interface FeeDetailsPageProps {
	params: {
		id: string;
	};
}

export default function FeeDetailsPage({ params }: FeeDetailsPageProps) {
	// Mock fee record data
	const feeRecord = {
		id: params.id,
		studentName: "John Doe",
		regNumber: "S2023-1001",
		department: "Computer Science",
		session: "2020-2024",
		feeType: "Semester Fee",
		amount: 2500,
		dueDate: "2023-01-15",
		paidAmount: 2500,
		paidDate: "2023-01-10",
		paymentMethod: "Bank Transfer",
		receiptNumber: "REC-2023-0001",
		transactionId: "TXN-123456",
		status: "paid",
		remarks: "First semester fee payment",
		createdBy: "Admin User",
		createdAt: "2023-01-10 10:30 AM",
	};

	return (
		<div className="flex flex-col gap-6">
			<div className="flex items-center gap-4">
				<Button variant="ghost" size="icon" asChild>
					<Link href="/dashboard/fees">
						<ArrowLeft className="h-4 w-4" />
					</Link>
				</Button>
				<div className="flex-1">
					<h1 className="text-2xl font-bold">Fee Payment Details</h1>
					<p className="text-sm text-muted-foreground">
						Receipt #{feeRecord.receiptNumber} • {feeRecord.feeType}
					</p>
				</div>
				<div className="flex items-center gap-2">
					<Button variant="outline" className="gap-2">
						<Download className="h-4 w-4" />
						<span>Download Receipt</span>
					</Button>
					<Button variant="destructive" className="gap-2">
						<Trash className="h-4 w-4" />
						<span>Delete</span>
					</Button>
				</div>
			</div>

			<div className="grid gap-6 md:grid-cols-3">
				<Card className="md:col-span-2">
					<CardHeader>
						<CardTitle>Payment Information</CardTitle>
						<CardDescription>
							Details of the fee payment transaction
						</CardDescription>
					</CardHeader>
					<CardContent>
						<div className="grid grid-cols-2 gap-4">
							<div>
								<p className="text-sm font-medium text-muted-foreground">
									Fee Type
								</p>
								<p>{feeRecord.feeType}</p>
							</div>
							<div>
								<p className="text-sm font-medium text-muted-foreground">
									Amount
								</p>
								<p>${feeRecord.amount.toLocaleString()}</p>
							</div>
							<div>
								<p className="text-sm font-medium text-muted-foreground">
									Due Date
								</p>
								<p>{feeRecord.dueDate}</p>
							</div>
							<div>
								<p className="text-sm font-medium text-muted-foreground">
									Paid Amount
								</p>
								<p>${feeRecord.paidAmount.toLocaleString()}</p>
							</div>
							<div>
								<p className="text-sm font-medium text-muted-foreground">
									Paid Date
								</p>
								<p>{feeRecord.paidDate}</p>
							</div>
							<div>
								<p className="text-sm font-medium text-muted-foreground">
									Status
								</p>
								<div className="flex items-center">
									<div
										className={`h-2 w-2 rounded-full ${
											feeRecord.status === "paid"
												? "bg-green-500"
												: "bg-red-500"
										} mr-2`}
									/>
									<span className="capitalize">
										{feeRecord.status}
									</span>
								</div>
							</div>
							<div>
								<p className="text-sm font-medium text-muted-foreground">
									Payment Method
								</p>
								<p>{feeRecord.paymentMethod}</p>
							</div>
							<div>
								<p className="text-sm font-medium text-muted-foreground">
									Receipt Number
								</p>
								<p>{feeRecord.receiptNumber}</p>
							</div>
							<div>
								<p className="text-sm font-medium text-muted-foreground">
									Transaction ID
								</p>
								<p>{feeRecord.transactionId || "-"}</p>
							</div>
							<div>
								<p className="text-sm font-medium text-muted-foreground">
									Created By
								</p>
								<p>{feeRecord.createdBy}</p>
							</div>
							<div>
								<p className="text-sm font-medium text-muted-foreground">
									Created At
								</p>
								<p>{feeRecord.createdAt}</p>
							</div>
							<div className="col-span-2">
								<p className="text-sm font-medium text-muted-foreground">
									Remarks
								</p>
								<p>{feeRecord.remarks || "-"}</p>
							</div>
						</div>
					</CardContent>
				</Card>

				<Card>
					<CardHeader>
						<CardTitle>Student Information</CardTitle>
						<CardDescription>
							Details of the student who made this payment
						</CardDescription>
					</CardHeader>
					<CardContent>
						<div className="flex flex-col items-center gap-4 mb-4">
							<div className="h-20 w-20 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
								<User className="h-10 w-10 text-gray-500" />
							</div>
							<div className="text-center">
								<h3 className="font-medium">
									{feeRecord.studentName}
								</h3>
								<p className="text-sm text-muted-foreground">
									{feeRecord.regNumber}
								</p>
							</div>
						</div>
						<div className="space-y-4">
							<div>
								<p className="text-sm font-medium text-muted-foreground">
									Department
								</p>
								<p>{feeRecord.department}</p>
							</div>
							<div>
								<p className="text-sm font-medium text-muted-foreground">
									Session
								</p>
								<p>{feeRecord.session}</p>
							</div>
							<div className="pt-2">
								<Button className="w-full gap-2" asChild>
									<Link href={`/dashboard/students/1`}>
										<span>View Student Profile</span>
									</Link>
								</Button>
							</div>
						</div>
					</CardContent>
				</Card>
			</div>
		</div>
	);
}
