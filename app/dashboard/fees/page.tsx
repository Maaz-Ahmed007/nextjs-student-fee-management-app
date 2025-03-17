"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
	CheckCircle2,
	Clock,
	Download,
	Plus,
	Search,
	XCircle,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
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

export default function FeesPage() {
	const [loading, setLoading] = useState(true);
	const [activeTab, setActiveTab] = useState("structure");
	const [feeStructures, setFeeStructures] = useState<any[]>([]);
	const [feePayments, setFeePayments] = useState<any[]>([]);
	const [filterProgram, setFilterProgram] = useState("all");
	const [filterStatus, setFilterStatus] = useState("all");
	const [searchQuery, setSearchQuery] = useState("");

	// Stats
	const [stats, setStats] = useState({
		totalCollected: 0,
		outstandingDues: 0,
		paidCount: 0,
		unpaidCount: 0,
		partialCount: 0,
	});

	// Fetch fee structures and payments
	useEffect(() => {
		// Simulate API call
		const fetchData = async () => {
			try {
				// Mock data for fee structures
				const structuresData = [
					{
						id: "1",
						program: "BSCS",
						session: "2020-2024",
						semester: "1st Semester",
						academicYear: "2020-2021",
						totalAmount: 33350,
						dueDate: "15/09/2020",
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
						program: "BSCS",
						session: "2020-2024",
						semester: "2nd Semester",
						academicYear: "2020-2021",
						totalAmount: 19750,
						dueDate: "15/01/2021",
						breakdown: [
							{ type: "Tuition Fee", amount: 16500 },
							{ type: "Examination Fee", amount: 2750 },
							{ type: "DMC/Provisional", amount: 500 },
						],
					},
					{
						id: "3",
						program: "BSCS",
						session: "2020-2024",
						semester: "3rd Semester",
						academicYear: "2021-2022",
						totalAmount: 21675,
						dueDate: "15/09/2021",
						breakdown: [
							{ type: "Tuition Fee", amount: 18150 },
							{ type: "Examination Fee", amount: 3025 },
							{ type: "DMC/Provisional", amount: 500 },
						],
					},
					{
						id: "4",
						program: "BSCS",
						session: "2020-2024",
						semester: "4th Semester",
						academicYear: "2021-2022",
						totalAmount: 21675,
						dueDate: "15/01/2022",
						breakdown: [
							{ type: "Tuition Fee", amount: 18150 },
							{ type: "Examination Fee", amount: 3025 },
							{ type: "DMC/Provisional", amount: 500 },
						],
					},
					{
						id: "5",
						program: "BSIT",
						session: "2020-2024",
						semester: "1st Semester",
						academicYear: "2020-2021",
						totalAmount: 31350,
						dueDate: "15/09/2020",
						breakdown: [
							{ type: "Admission Fee", amount: 2200 },
							{ type: "Tuition Fee", amount: 15000 },
							{ type: "Computer Lab", amount: 3000 },
							{ type: "A. V. Equipment", amount: 2000 },
							{ type: "Library Fee", amount: 3000 },
							{ type: "I.D Card Fee", amount: 100 },
							{ type: "Security Fee (Refundable)", amount: 3300 },
							{ type: "Examination Fee", amount: 2250 },
							{ type: "DMC/Provisional", amount: 500 },
						],
					},
					{
						id: "6",
						program: "BSIT",
						session: "2020-2024",
						semester: "2nd Semester",
						academicYear: "2020-2021",
						totalAmount: 17750,
						dueDate: "15/01/2021",
						breakdown: [
							{ type: "Tuition Fee", amount: 15000 },
							{ type: "Examination Fee", amount: 2250 },
							{ type: "DMC/Provisional", amount: 500 },
						],
					},
				];

				// Mock data for fee payments
				const paymentsData = [
					{
						id: "1",
						studentId: "1",
						studentName: "Azad Khan",
						regNumber: "2020-BS(CS)-E01",
						program: "BSCS",
						semester: "1st Semester",
						academicYear: "2020-2021",
						totalAmount: 33350,
						paidAmount: 33350,
						remainingDues: 0,
						paymentDate: "10/09/2020",
						dueDate: "15/09/2020",
						status: "paid",
						paymentMethod: "Bank Transfer",
						challanNo: "CH-2020-1234",
					},
					{
						id: "2",
						studentId: "1",
						studentName: "Azad Khan",
						regNumber: "2020-BS(CS)-E01",
						program: "BSCS",
						semester: "2nd Semester",
						academicYear: "2020-2021",
						totalAmount: 19750,
						paidAmount: 19750,
						remainingDues: 0,
						paymentDate: "12/01/2021",
						dueDate: "15/01/2021",
						status: "paid",
						paymentMethod: "Cash",
						challanNo: "CH-2021-2345",
					},
					{
						id: "3",
						studentId: "1",
						studentName: "Azad Khan",
						regNumber: "2020-BS(CS)-E01",
						program: "BSCS",
						semester: "3rd Semester",
						academicYear: "2021-2022",
						totalAmount: 21675,
						paidAmount: 15000,
						remainingDues: 6675,
						paymentDate: "20/09/2021",
						dueDate: "15/09/2021",
						status: "partial",
						paymentMethod: "Bank Transfer",
						challanNo: "CH-2021-3456",
					},
					{
						id: "4",
						studentId: "2",
						studentName: "Sara Ahmed",
						regNumber: "2020-BS(CS)-E02",
						program: "BSCS",
						semester: "1st Semester",
						academicYear: "2020-2021",
						totalAmount: 33350,
						paidAmount: 33350,
						remainingDues: 0,
						paymentDate: "14/09/2020",
						dueDate: "15/09/2020",
						status: "paid",
						paymentMethod: "Cash",
						challanNo: "CH-2020-4567",
					},
					{
						id: "5",
						studentId: "2",
						studentName: "Sara Ahmed",
						regNumber: "2020-BS(CS)-E02",
						program: "BSCS",
						semester: "2nd Semester",
						academicYear: "2020-2021",
						totalAmount: 19750,
						paidAmount: 19750,
						remainingDues: 0,
						paymentDate: "10/01/2021",
						dueDate: "15/01/2021",
						status: "paid",
						paymentMethod: "Bank Transfer",
						challanNo: "CH-2021-5678",
					},
					{
						id: "6",
						studentId: "3",
						studentName: "Ali Raza",
						regNumber: "2020-BS(IT)-E01",
						program: "BSIT",
						semester: "1st Semester",
						academicYear: "2020-2021",
						totalAmount: 31350,
						paidAmount: 31350,
						remainingDues: 0,
						paymentDate: "12/09/2020",
						dueDate: "15/09/2020",
						status: "paid",
						paymentMethod: "Cash",
						challanNo: "CH-2020-6789",
					},
					{
						id: "7",
						studentId: "3",
						studentName: "Ali Raza",
						regNumber: "2020-BS(IT)-E01",
						program: "BSIT",
						semester: "2nd Semester",
						academicYear: "2020-2021",
						totalAmount: 17750,
						paidAmount: 10000,
						remainingDues: 7750,
						paymentDate: "18/01/2021",
						dueDate: "15/01/2021",
						status: "partial",
						paymentMethod: "Cash",
						challanNo: "CH-2021-7890",
					},
					{
						id: "8",
						studentId: "4",
						studentName: "Fatima Khan",
						regNumber: "2020-BS(IT)-E02",
						program: "BSIT",
						semester: "1st Semester",
						academicYear: "2020-2021",
						totalAmount: 31350,
						paidAmount: 0,
						remainingDues: 31350,
						paymentDate: "",
						dueDate: "15/09/2020",
						status: "unpaid",
						paymentMethod: "",
						challanNo: "",
					},
				];

				// Calculate stats
				const totalCollected = paymentsData.reduce(
					(sum, payment) => sum + payment.paidAmount,
					0
				);
				const outstandingDues = paymentsData.reduce(
					(sum, payment) => sum + payment.remainingDues,
					0
				);
				const paidCount = paymentsData.filter(
					(payment) => payment.status === "paid"
				).length;
				const unpaidCount = paymentsData.filter(
					(payment) => payment.status === "unpaid"
				).length;
				const partialCount = paymentsData.filter(
					(payment) => payment.status === "partial"
				).length;

				setFeeStructures(structuresData);
				setFeePayments(paymentsData);
				setStats({
					totalCollected,
					outstandingDues,
					paidCount,
					unpaidCount,
					partialCount,
				});

				setLoading(false);
			} catch (error) {
				console.error("Error fetching data:", error);
				setLoading(false);
			}
		};

		fetchData();
	}, []);

	// Filter fee payments based on selected filters and search query
	const filteredPayments = feePayments.filter((payment) => {
		const matchesProgram =
			filterProgram === "all" || payment.program === filterProgram;
		const matchesStatus =
			filterStatus === "all" || payment.status === filterStatus;
		const matchesSearch =
			payment.studentName
				.toLowerCase()
				.includes(searchQuery.toLowerCase()) ||
			payment.regNumber
				.toLowerCase()
				.includes(searchQuery.toLowerCase()) ||
			payment.challanNo.toLowerCase().includes(searchQuery.toLowerCase());

		return matchesProgram && matchesStatus && matchesSearch;
	});

	// Filter fee structures based on selected program
	const filteredStructures = feeStructures.filter((structure) => {
		return filterProgram === "all" || structure.program === filterProgram;
	});

	// Get status badge
	const getStatusBadge = (status: string) => {
		switch (status) {
			case "paid":
				return (
					<Badge className="bg-green-500 hover:bg-green-600">
						<CheckCircle2 className="h-3 w-3 mr-1" /> Paid
					</Badge>
				);
			case "partial":
				return (
					<Badge className="bg-yellow-500 hover:bg-yellow-600">
						<Clock className="h-3 w-3 mr-1" /> Partial
					</Badge>
				);
			case "unpaid":
				return (
					<Badge className="bg-red-500 hover:bg-red-600">
						<XCircle className="h-3 w-3 mr-1" /> Unpaid
					</Badge>
				);
			default:
				return (
					<Badge className="bg-gray-500 hover:bg-gray-600">
						Unknown
					</Badge>
				);
		}
	};

	if (loading) {
		return (
			<div className="flex flex-col gap-6">
				<h1 className="text-2xl font-bold">Fee Management</h1>
				<div className="flex items-center justify-center h-[600px]">
					<div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
				</div>
			</div>
		);
	}

	return (
		<div className="flex flex-col gap-6 max-w-7xl mx-auto">
			<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
				<h1 className="text-2xl font-bold">Fee Management</h1>
				<Button asChild className="gap-2 bg-blue-500 hover:bg-blue-600">
					<Link href="/dashboard/fees/create">
						<Plus className="h-4 w-4" />
						<span>Create Fee Structure</span>
					</Link>
				</Button>
			</div>

			{/* Stats Cards */}
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
				<Card>
					<CardHeader className="pb-2">
						<CardTitle className="text-sm font-medium text-muted-foreground">
							Total Collected
						</CardTitle>
					</CardHeader>
					<CardContent>
						<div className="text-2xl font-bold text-green-600 dark:text-green-400">
							Rs. {stats.totalCollected.toLocaleString()}
						</div>
					</CardContent>
				</Card>
				<Card>
					<CardHeader className="pb-2">
						<CardTitle className="text-sm font-medium text-muted-foreground">
							Outstanding Dues
						</CardTitle>
					</CardHeader>
					<CardContent>
						<div className="text-2xl font-bold text-red-600 dark:text-red-400">
							Rs. {stats.outstandingDues.toLocaleString()}
						</div>
					</CardContent>
				</Card>
				<Card>
					<CardHeader className="pb-2">
						<CardTitle className="text-sm font-medium text-muted-foreground">
							Paid
						</CardTitle>
					</CardHeader>
					<CardContent>
						<div className="text-2xl font-bold text-green-600 dark:text-green-400">
							{stats.paidCount}
						</div>
					</CardContent>
				</Card>
				<Card>
					<CardHeader className="pb-2">
						<CardTitle className="text-sm font-medium text-muted-foreground">
							Partial
						</CardTitle>
					</CardHeader>
					<CardContent>
						<div className="text-2xl font-bold text-yellow-600 dark:text-yellow-400">
							{stats.partialCount}
						</div>
					</CardContent>
				</Card>
				<Card>
					<CardHeader className="pb-2">
						<CardTitle className="text-sm font-medium text-muted-foreground">
							Unpaid
						</CardTitle>
					</CardHeader>
					<CardContent>
						<div className="text-2xl font-bold text-red-600 dark:text-red-400">
							{stats.unpaidCount}
						</div>
					</CardContent>
				</Card>
			</div>

			<Tabs
				defaultValue="structure"
				value={activeTab}
				onValueChange={setActiveTab}>
				<TabsList className="grid w-full grid-cols-2 mb-4">
					<TabsTrigger value="structure">Fee Structure</TabsTrigger>
					<TabsTrigger value="payments">Fee Payments</TabsTrigger>
				</TabsList>

				{/* Fee Structure Tab */}
				<TabsContent value="structure" className="space-y-4">
					<Card>
						<CardHeader>
							<CardTitle>Student Management</CardTitle>
							<CardDescription>
								View, filter, and manage all students in the
								system.
							</CardDescription>
						</CardHeader>
						<CardContent className="w-full">
							<div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
								<div className="flex flex-col sm:flex-row gap-2 pb-4 w-full sm:w-auto">
									<Select
										value={filterProgram}
										onValueChange={setFilterProgram}>
										<SelectTrigger className="w-full sm:w-[180px]">
											<SelectValue placeholder="Select Program" />
										</SelectTrigger>
										<SelectContent>
											<SelectItem value="all">
												All Programs
											</SelectItem>
											<SelectItem value="BSCS">
												BSCS
											</SelectItem>
											<SelectItem value="BSIT">
												BSIT
											</SelectItem>
										</SelectContent>
									</Select>
								</div>
								<Button
									variant="outline"
									className="gap-2 w-full sm:w-auto">
									<Download className="h-4 w-4" />
									<span>Export</span>
								</Button>
							</div>

							<div className="rounded-md border overflow-hidden">
								<Table>
									<TableHeader>
										<TableRow>
											<TableHead>Program</TableHead>
											<TableHead>Session</TableHead>
											<TableHead>Semester</TableHead>
											<TableHead>Academic Year</TableHead>
											<TableHead>Due Date</TableHead>
											<TableHead className="text-right">
												Total Amount
											</TableHead>
											<TableHead className="text-right">
												Actions
											</TableHead>
										</TableRow>
									</TableHeader>
									<TableBody>
										{filteredStructures.length === 0 ? (
											<TableRow>
												<TableCell
													colSpan={7}
													className="text-center py-8 text-muted-foreground">
													No fee structures found
												</TableCell>
											</TableRow>
										) : (
											filteredStructures.map(
												(structure) => (
													<TableRow
														key={structure.id}>
														<TableCell>
															{structure.program}
														</TableCell>
														<TableCell>
															{structure.session}
														</TableCell>
														<TableCell>
															{structure.semester}
														</TableCell>
														<TableCell>
															{
																structure.academicYear
															}
														</TableCell>
														<TableCell>
															{structure.dueDate}
														</TableCell>
														<TableCell className="text-right font-medium">
															Rs.{" "}
															{structure.totalAmount.toLocaleString()}
														</TableCell>
														<TableCell className="text-right">
															<div className="flex justify-end gap-2">
																<Button
																	variant="ghost"
																	size="sm"
																	asChild>
																	<Link
																		href={`/dashboard/fees/${structure.id}`}>
																		View
																	</Link>
																</Button>
																<Button
																	variant="ghost"
																	size="sm"
																	asChild>
																	<Link
																		href={`/dashboard/fees/${structure.id}/edit`}>
																		Edit
																	</Link>
																</Button>
															</div>
														</TableCell>
													</TableRow>
												)
											)
										)}
									</TableBody>
								</Table>
							</div>
						</CardContent>
					</Card>
				</TabsContent>

				{/* Fee Payments Tab */}
				<TabsContent value="payments" className="space-y-4">
					<Card>
						<CardHeader>
							<CardTitle>Student Management</CardTitle>
							<CardDescription>
								View, filter, and manage all students in the
								system.
							</CardDescription>
						</CardHeader>
						<CardContent className="w-full">
							<div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
								<div className="flex flex-col sm:flex-row gap-2 pb-4 w-full sm:w-auto">
									<div className="relative w-full sm:w-[300px]">
										<Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
										<Input
											type="search"
											placeholder="Search by name, reg no, challan..."
											className="pl-8"
											value={searchQuery}
											onChange={(e) =>
												setSearchQuery(e.target.value)
											}
										/>
									</div>
									<Select
										value={filterProgram}
										onValueChange={setFilterProgram}>
										<SelectTrigger className="w-full sm:w-[180px]">
											<SelectValue placeholder="Select Program" />
										</SelectTrigger>
										<SelectContent>
											<SelectItem value="all">
												All Programs
											</SelectItem>
											<SelectItem value="BSCS">
												BSCS
											</SelectItem>
											<SelectItem value="BSIT">
												BSIT
											</SelectItem>
										</SelectContent>
									</Select>
									<Select
										value={filterStatus}
										onValueChange={setFilterStatus}>
										<SelectTrigger className="w-full sm:w-[180px]">
											<SelectValue placeholder="Select Status" />
										</SelectTrigger>
										<SelectContent>
											<SelectItem value="all">
												All Status
											</SelectItem>
											<SelectItem value="paid">
												Paid
											</SelectItem>
											<SelectItem value="partial">
												Partial
											</SelectItem>
											<SelectItem value="unpaid">
												Unpaid
											</SelectItem>
										</SelectContent>
									</Select>
								</div>
								<Button
									variant="outline"
									className="gap-2 w-full sm:w-auto">
									<Download className="h-4 w-4" />
									<span>Export</span>
								</Button>
							</div>

							<div className="rounded-md border">
								<Table>
									<TableHeader>
										<TableRow>
											<TableHead>Student</TableHead>
											<TableHead>Reg Number</TableHead>
											<TableHead>Program</TableHead>
											<TableHead>Semester</TableHead>
											<TableHead>Challan No</TableHead>
											<TableHead>Payment Date</TableHead>
											<TableHead>Status</TableHead>
											<TableHead className="text-right">
												Total Amount
											</TableHead>
											<TableHead className="text-right">
												Paid Amount
											</TableHead>
											<TableHead className="text-right">
												Remaining
											</TableHead>
											<TableHead className="text-right">
												Actions
											</TableHead>
										</TableRow>
									</TableHeader>
									<TableBody>
										{filteredPayments.length === 0 ? (
											<TableRow>
												<TableCell
													colSpan={11}
													className="text-center py-8 text-muted-foreground">
													No payments found
												</TableCell>
											</TableRow>
										) : (
											filteredPayments.map((payment) => (
												<TableRow key={payment.id}>
													<TableCell>
														{payment.studentName}
													</TableCell>
													<TableCell>
														{payment.regNumber}
													</TableCell>
													<TableCell>
														{payment.program}
													</TableCell>
													<TableCell>
														{payment.semester}
													</TableCell>
													<TableCell>
														{payment.challanNo ||
															"—"}
													</TableCell>
													<TableCell>
														{payment.paymentDate ||
															"—"}
													</TableCell>
													<TableCell>
														{getStatusBadge(
															payment.status
														)}
													</TableCell>
													<TableCell className="text-right">
														Rs.{" "}
														{payment.totalAmount.toLocaleString()}
													</TableCell>
													<TableCell className="text-right text-green-600 dark:text-green-400 font-medium">
														{payment.paidAmount > 0
															? `Rs. ${payment.paidAmount.toLocaleString()}`
															: "—"}
													</TableCell>
													<TableCell className="text-right text-red-600 dark:text-red-400 font-medium">
														{payment.remainingDues >
														0
															? `Rs. ${payment.remainingDues.toLocaleString()}`
															: "—"}
													</TableCell>
													<TableCell className="text-right">
														<div className="flex justify-end gap-2">
															{payment.status !==
																"unpaid" && (
																<Button
																	variant="ghost"
																	size="sm"
																	asChild>
																	<Link
																		href={`/dashboard/students/${payment.studentId}/view-receipt/${payment.challanNo}`}>
																		Receipt
																	</Link>
																</Button>
															)}
															{(payment.status ===
																"unpaid" ||
																payment.status ===
																	"partial") && (
																<Button
																	variant="ghost"
																	size="sm"
																	asChild>
																	<Link
																		href={`/dashboard/students/${
																			payment.studentId
																		}/record-payment?semesterId=${payment.semester.charAt(
																			0
																		)}`}>
																		Pay
																	</Link>
																</Button>
															)}
														</div>
													</TableCell>
												</TableRow>
											))
										)}
									</TableBody>
								</Table>
							</div>
						</CardContent>
					</Card>
				</TabsContent>
			</Tabs>
		</div>
	);
}
