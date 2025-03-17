"use client";

import { useState } from "react";
import { Download, Filter } from "lucide-react";

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
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import {
	BarChart,
	PieChart,
	Bar,
	Pie,
	ResponsiveContainer,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
	Cell,
} from "recharts";

export default function ReportsPage() {
	const [selectedReport, setSelectedReport] = useState("collection");

	// Mock data for charts
	const collectionData = [
		{ month: "Jan", amount: 45000 },
		{ month: "Feb", amount: 52000 },
		{ month: "Mar", amount: 48000 },
		{ month: "Apr", amount: 61000 },
		{ month: "May", amount: 55000 },
		{ month: "Jun", amount: 67000 },
		{ month: "Jul", amount: 72000 },
		{ month: "Aug", amount: 80000 },
		{ month: "Sep", amount: 67000 },
		{ month: "Oct", amount: 54000 },
		{ month: "Nov", amount: 48000 },
		{ month: "Dec", amount: 58000 },
	];

	const departmentData = [
		{ name: "Computer Science", value: 92000 },
		{ name: "Electrical Engineering", value: 84000 },
		{ name: "Business Administration", value: 76000 },
		{ name: "Mechanical Engineering", value: 68000 },
		{ name: "Social Sciences", value: 62000 },
	];

	const sessionData = [
		{ name: "2020-2024", paid: 92000, outstanding: 8000 },
		{ name: "2021-2025", paid: 84000, outstanding: 16000 },
		{ name: "2022-2026", paid: 76000, outstanding: 24000 },
		{ name: "2023-2027", paid: 68000, outstanding: 32000 },
	];

	const outstandingData = [
		{ department: "CS", students: 45, amount: 22500 },
		{ department: "EE", students: 38, amount: 19000 },
		{ department: "BA", students: 65, amount: 32500 },
		{ department: "ME", students: 52, amount: 26000 },
		{ department: "SS", students: 45, amount: 22500 },
	];

	const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884d8"];

	const generateReport = () => {
		setSelectedReport(selectedReport);
	};

	return (
		<div className="flex flex-col gap-6">
			<div className="flex items-center justify-between">
				<h1 className="text-2xl font-bold">Reports</h1>
				<Button variant="outline" className="gap-2">
					<Download className="h-4 w-4" />
					<span>Export</span>
				</Button>
			</div>

			<Tabs defaultValue="collection" onValueChange={setSelectedReport}>
				<TabsList className="grid w-full grid-cols-4">
					<TabsTrigger value="collection">Fee Collection</TabsTrigger>
					<TabsTrigger value="outstanding">
						Outstanding Dues
					</TabsTrigger>
					<TabsTrigger value="department">
						Department-wise
					</TabsTrigger>
					<TabsTrigger value="session">Session-wise</TabsTrigger>
				</TabsList>

				<TabsContent value="collection" className="pt-4">
					<Card>
						<CardHeader>
							<CardTitle>Fee Collection Report</CardTitle>
							<CardDescription>
								View fee collection statistics for a specific
								time period.
							</CardDescription>
						</CardHeader>
						<CardContent className="w-full">
							<div className="flex flex-col gap-6 w-full">
								<div className="flex flex-col gap-4 md:flex-row md:items-center">
									<div className="flex items-center gap-2">
										<Filter className="h-4 w-4 text-muted-foreground" />
										<span className="text-sm font-medium">
											Filter by:
										</span>
									</div>
									<div className="grid grid-cols-1 gap-2 md:grid-cols-4">
										<Select defaultValue="all-time">
											<SelectTrigger>
												<SelectValue placeholder="Time Period" />
											</SelectTrigger>
											<SelectContent>
												<SelectItem value="all-time">
													All Time
												</SelectItem>
												<SelectItem value="this-month">
													This Month
												</SelectItem>
												<SelectItem value="last-month">
													Last Month
												</SelectItem>
												<SelectItem value="this-year">
													This Year
												</SelectItem>
												<SelectItem value="custom">
													Custom Range
												</SelectItem>
											</SelectContent>
										</Select>
										<Select defaultValue="all-departments">
											<SelectTrigger>
												<SelectValue placeholder="Department" />
											</SelectTrigger>
											<SelectContent>
												<SelectItem value="all-departments">
													All Departments
												</SelectItem>
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
										<Select defaultValue="all-sessions">
											<SelectTrigger>
												<SelectValue placeholder="Session" />
											</SelectTrigger>
											<SelectContent>
												<SelectItem value="all-sessions">
													All Sessions
												</SelectItem>
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
										<Select defaultValue="all-fee-types">
											<SelectTrigger>
												<SelectValue placeholder="Fee Type" />
											</SelectTrigger>
											<SelectContent>
												<SelectItem value="all-fee-types">
													All Fee Types
												</SelectItem>
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
											</SelectContent>
										</Select>
									</div>
									<Button
										className="ml-auto bg-blue-500 hover:bg-blue-600"
										onClick={generateReport}>
										Generate Report
									</Button>
								</div>

								<div className="h-[400px]">
									<ResponsiveContainer
										width="100%"
										height="100%">
										<BarChart data={collectionData}>
											<CartesianGrid strokeDasharray="3 3" />
											<XAxis dataKey="month" />
											<YAxis />
											<Tooltip
												formatter={(value) => [
													`$${value}`,
													"Amount",
												]}
												contentStyle={{
													backgroundColor:
														"var(--background)",
													borderColor:
														"var(--border)",
													borderRadius: "0.5rem",
													boxShadow:
														"0 4px 12px rgba(0, 0, 0, 0.1)",
												}}
											/>
											<Legend />
											<Bar
												dataKey="amount"
												fill="var(--primary)"
												radius={[4, 4, 0, 0]}
												name="Amount Collected"
											/>
										</BarChart>
									</ResponsiveContainer>
								</div>
							</div>
						</CardContent>
					</Card>
				</TabsContent>

				<TabsContent value="outstanding" className="pt-4">
					<Card>
						<CardHeader>
							<CardTitle>Outstanding Dues Report</CardTitle>
							<CardDescription>
								View students with outstanding fee payments.
							</CardDescription>
						</CardHeader>
						<CardContent className="w-full">
							<div className="flex flex-col gap-6 w-full">
								<div className="flex flex-col gap-4 md:flex-row md:items-center">
									<div className="flex items-center gap-2">
										<Filter className="h-4 w-4 text-muted-foreground" />
										<span className="text-sm font-medium">
											Filter by:
										</span>
									</div>
									<div className="grid grid-cols-1 gap-2 md:grid-cols-3">
										<Select defaultValue="all-departments">
											<SelectTrigger>
												<SelectValue placeholder="Department" />
											</SelectTrigger>
											<SelectContent>
												<SelectItem value="all-departments">
													All Departments
												</SelectItem>
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
										<Select defaultValue="all-sessions">
											<SelectTrigger>
												<SelectValue placeholder="Session" />
											</SelectTrigger>
											<SelectContent>
												<SelectItem value="all-sessions">
													All Sessions
												</SelectItem>
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
										<Select defaultValue="all-fee-types">
											<SelectTrigger>
												<SelectValue placeholder="Fee Type" />
											</SelectTrigger>
											<SelectContent>
												<SelectItem value="all-fee-types">
													All Fee Types
												</SelectItem>
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
											</SelectContent>
										</Select>
									</div>
									<Button
										className="ml-auto bg-blue-500 hover:bg-blue-600"
										onClick={generateReport}>
										Generate Report
									</Button>
								</div>

								<div className="h-[400px]">
									<ResponsiveContainer
										width="100%"
										height="100%">
										<BarChart data={outstandingData}>
											<CartesianGrid strokeDasharray="3 3" />
											<XAxis dataKey="department" />
											<YAxis
												yAxisId="left"
												orientation="left"
												stroke="#8884d8"
											/>
											<YAxis
												yAxisId="right"
												orientation="right"
												stroke="#82ca9d"
											/>
											<Tooltip
												contentStyle={{
													backgroundColor:
														"var(--background)",
													borderColor:
														"var(--border)",
													borderRadius: "0.5rem",
													boxShadow:
														"0 4px 12px rgba(0, 0, 0, 0.1)",
												}}
											/>
											<Legend />
											<Bar
												yAxisId="left"
												dataKey="students"
												fill="#8884d8"
												name="Students with Dues"
											/>
											<Bar
												yAxisId="right"
												dataKey="amount"
												fill="#82ca9d"
												name="Outstanding Amount ($)"
											/>
										</BarChart>
									</ResponsiveContainer>
								</div>
							</div>
						</CardContent>
					</Card>
				</TabsContent>

				<TabsContent value="department" className="pt-4">
					<Card>
						<CardHeader>
							<CardTitle>
								Department-wise Collection Report
							</CardTitle>
							<CardDescription>
								Compare fee collection across different
								departments.
							</CardDescription>
						</CardHeader>
						<CardContent className="w-full">
							<div className="flex flex-col gap-6 w-full">
								<div className="flex flex-col gap-4 md:flex-row md:items-center">
									<div className="flex items-center gap-2">
										<Filter className="h-4 w-4 text-muted-foreground" />
										<span className="text-sm font-medium">
											Filter by:
										</span>
									</div>
									<div className="grid grid-cols-1 gap-2 md:grid-cols-3">
										<Select defaultValue="this-year">
											<SelectTrigger>
												<SelectValue placeholder="Time Period" />
											</SelectTrigger>
											<SelectContent>
												<SelectItem value="all-time">
													All Time
												</SelectItem>
												<SelectItem value="this-month">
													This Month
												</SelectItem>
												<SelectItem value="last-month">
													Last Month
												</SelectItem>
												<SelectItem value="this-year">
													This Year
												</SelectItem>
												<SelectItem value="custom">
													Custom Range
												</SelectItem>
											</SelectContent>
										</Select>
										<Select defaultValue="all-sessions">
											<SelectTrigger>
												<SelectValue placeholder="Session" />
											</SelectTrigger>
											<SelectContent>
												<SelectItem value="all-sessions">
													All Sessions
												</SelectItem>
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
										<Select defaultValue="all-fee-types">
											<SelectTrigger>
												<SelectValue placeholder="Fee Type" />
											</SelectTrigger>
											<SelectContent>
												<SelectItem value="all-fee-types">
													All Fee Types
												</SelectItem>
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
											</SelectContent>
										</Select>
									</div>
									<Button
										className="ml-auto bg-blue-500 hover:bg-blue-600"
										onClick={generateReport}>
										Generate Report
									</Button>
								</div>

								<div className="h-[400px]">
									<ResponsiveContainer
										width="100%"
										height="100%">
										<PieChart>
											<Pie
												data={departmentData}
												cx="50%"
												cy="50%"
												labelLine={true}
												label={({ name, percent }) =>
													`${name}: ${(
														percent * 100
													).toFixed(0)}%`
												}
												outerRadius={150}
												fill="#8884d8"
												dataKey="value">
												{departmentData.map(
													(entry, index) => (
														<Cell
															key={`cell-${index}`}
															fill={
																COLORS[
																	index %
																		COLORS.length
																]
															}
														/>
													)
												)}
											</Pie>
											<Tooltip
												formatter={(value) => [
													`$${value}`,
													"Amount",
												]}
												contentStyle={{
													backgroundColor:
														"var(--background)",
													borderColor:
														"var(--border)",
													borderRadius: "0.5rem",
													boxShadow:
														"0 4px 12px rgba(0, 0, 0, 0.1)",
												}}
											/>
											<Legend />
										</PieChart>
									</ResponsiveContainer>
								</div>
							</div>
						</CardContent>
					</Card>
				</TabsContent>

				<TabsContent value="session" className="pt-4">
					<Card>
						<CardHeader>
							<CardTitle>
								Session-wise Collection Report
							</CardTitle>
							<CardDescription>
								Compare fee collection across different academic
								sessions.
							</CardDescription>
						</CardHeader>
						<CardContent className="w-full">
							<div className="flex flex-col gap-6 w-full">
								<div className="flex flex-col gap-4 md:flex-row md:items-center">
									<div className="flex items-center gap-2">
										<Filter className="h-4 w-4 text-muted-foreground" />
										<span className="text-sm font-medium">
											Filter by:
										</span>
									</div>
									<div className="grid grid-cols-1 gap-2 md:grid-cols-3">
										<Select defaultValue="this-year">
											<SelectTrigger>
												<SelectValue placeholder="Time Period" />
											</SelectTrigger>
											<SelectContent>
												<SelectItem value="all-time">
													All Time
												</SelectItem>
												<SelectItem value="this-month">
													This Month
												</SelectItem>
												<SelectItem value="last-month">
													Last Month
												</SelectItem>
												<SelectItem value="this-year">
													This Year
												</SelectItem>
												<SelectItem value="custom">
													Custom Range
												</SelectItem>
											</SelectContent>
										</Select>
										<Select defaultValue="all-departments">
											<SelectTrigger>
												<SelectValue placeholder="Department" />
											</SelectTrigger>
											<SelectContent>
												<SelectItem value="all-departments">
													All Departments
												</SelectItem>
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
										<Select defaultValue="all-fee-types">
											<SelectTrigger>
												<SelectValue placeholder="Fee Type" />
											</SelectTrigger>
											<SelectContent>
												<SelectItem value="all-fee-types">
													All Fee Types
												</SelectItem>
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
											</SelectContent>
										</Select>
									</div>
									<Button
										className="ml-auto bg-blue-500 hover:bg-blue-600"
										onClick={generateReport}>
										Generate Report
									</Button>
								</div>

								<div className="h-[400px]">
									<ResponsiveContainer
										width="100%"
										height="100%">
										<BarChart data={sessionData}>
											<CartesianGrid strokeDasharray="3 3" />
											<XAxis dataKey="name" />
											<YAxis />
											<Tooltip
												formatter={(value) => [
													`$${value}`,
													"Amount",
												]}
												contentStyle={{
													backgroundColor:
														"var(--background)",
													borderColor:
														"var(--border)",
													borderRadius: "0.5rem",
													boxShadow:
														"0 4px 12px rgba(0, 0, 0, 0.1)",
												}}
											/>
											<Legend />
											<Bar
												dataKey="paid"
												stackId="a"
												fill="#4CAF50"
												name="Paid"
											/>
											<Bar
												dataKey="outstanding"
												stackId="a"
												fill="#FF5722"
												name="Outstanding"
											/>
										</BarChart>
									</ResponsiveContainer>
								</div>
							</div>
						</CardContent>
					</Card>
				</TabsContent>
			</Tabs>
		</div>
	);
}
