"use client";

import { useState } from "react";
import Link from "next/link";
import {
	ArrowRight,
	ArrowUpRight,
	BookOpen,
	DollarSign,
	Users,
	Wallet,
} from "lucide-react";

import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
	BarChart,
	ResponsiveContainer,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Bar,
} from "recharts";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";

// Update the component to filter for active students only
export default function DashboardPage() {
	// Mock data for charts with active student filter applied
	const monthlyFeeData = [
		{ name: "Jan", amount: 45000 },
		{ name: "Feb", amount: 52000 },
		{ name: "Mar", amount: 48000 },
		{ name: "Apr", amount: 61000 },
		{ name: "May", amount: 55000 },
		{ name: "Jun", amount: 67000 },
		{ name: "Jul", amount: 72000 },
		{ name: "Aug", amount: 80000 },
		{ name: "Sep", amount: 67000 },
		{ name: "Oct", amount: 54000 },
		{ name: "Nov", amount: 48000 },
		{ name: "Dec", amount: 58000 },
	];

	const departmentData = [
		{ name: "Computer Science", collected: 92, total: 100 },
		{ name: "Electrical Engineering", collected: 84, total: 100 },
		{ name: "Business Administration", collected: 76, total: 100 },
		{ name: "Mechanical Engineering", collected: 68, total: 100 },
		{ name: "Social Sciences", collected: 62, total: 100 },
	];

	// Add state for active student filter
	const [showActiveOnly, setShowActiveOnly] = useState(true);

	// Filter data for active students only
	const activeStudentCount = 1048; // Reduced from total 1,248
	const activeStudentIncrease = 150; // Changed from 180
	const activeTotalCollected = 487890; // Reduced from 567,890
	const activeOutstandingDues = 98765; // Reduced from 123,456
	const activeStudentsWithDues = 198; // Reduced from 245

	return (
		<div className="w-full">
			<div className="flex flex-col gap-6">
				<div className="flex items-center justify-between">
					<h1 className="text-2xl font-bold">Dashboard</h1>
					<div className="flex items-center gap-4">
						<div className="flex items-center gap-2">
							<Switch
								id="active-filter"
								checked={showActiveOnly}
								onCheckedChange={setShowActiveOnly}
							/>
							<Label htmlFor="active-filter">
								Show active students only
							</Label>
						</div>
						<div className="flex items-center gap-2">
							<Button variant="outline" className="gap-2" asChild>
								<Link href="/dashboard/students/new">
									<Users className="h-4 w-4" />
									<span>Add Student</span>
								</Link>
							</Button>
							<Button
								className="gap-2 bg-blue-500 hover:bg-blue-600"
								asChild>
								<Link href="/dashboard/fees/record">
									<Wallet className="h-4 w-4" />
									<span>Record Payment</span>
								</Link>
							</Button>
						</div>
					</div>
				</div>

				<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
					<Card>
						<CardHeader className="flex flex-row items-center justify-between pb-2">
							<CardTitle className="text-sm font-medium">
								Active Students
							</CardTitle>
							<Users className="h-4 w-4 text-muted-foreground" />
						</CardHeader>
						<CardContent>
							<div className="text-2xl font-bold">
								{activeStudentCount}
							</div>
							<p className="text-xs text-muted-foreground">
								+{activeStudentIncrease} from last semester
							</p>
						</CardContent>
					</Card>
					<Card>
						<CardHeader className="flex flex-row items-center justify-between pb-2">
							<CardTitle className="text-sm font-medium">
								Total Collected
							</CardTitle>
							<DollarSign className="h-4 w-4 text-muted-foreground" />
						</CardHeader>
						<CardContent>
							<div className="text-2xl font-bold">
								${activeTotalCollected.toLocaleString()}
							</div>
							<p className="text-xs text-muted-foreground">
								+12.5% from last month
							</p>
						</CardContent>
					</Card>
					<Card>
						<CardHeader className="flex flex-row items-center justify-between pb-2">
							<CardTitle className="text-sm font-medium">
								Outstanding Dues
							</CardTitle>
							<Wallet className="h-4 w-4 text-muted-foreground" />
						</CardHeader>
						<CardContent>
							<div className="text-2xl font-bold">
								${activeOutstandingDues.toLocaleString()}
							</div>
							<p className="text-xs text-muted-foreground">
								{activeStudentsWithDues} students with dues
							</p>
						</CardContent>
					</Card>
					<Card>
						<CardHeader className="flex flex-row items-center justify-between pb-2">
							<CardTitle className="text-sm font-medium">
								Departments
							</CardTitle>
							<BookOpen className="h-4 w-4 text-muted-foreground" />
						</CardHeader>
						<CardContent>
							<div className="text-2xl font-bold">12</div>
							<p className="text-xs text-muted-foreground">
								Across 4 faculties
							</p>
						</CardContent>
					</Card>
				</div>

				<div className="grid gap-6 md:grid-cols-7">
					<Card className="md:col-span-4">
						<CardHeader>
							<div className="flex items-center justify-between">
								<div>
									<CardTitle>
										Fee Collection Overview
									</CardTitle>
									<CardDescription>
										{showActiveOnly
											? "Monthly fee collection for active students"
											: "Monthly fee collection for all students"}
									</CardDescription>
								</div>
								<Badge variant="outline" className="ml-2">
									{showActiveOnly
										? "Active Students"
										: "All Students"}
								</Badge>
							</div>
						</CardHeader>
						<CardContent>
							<div className="h-[300px]">
								<ResponsiveContainer width="100%" height="100%">
									<BarChart data={monthlyFeeData}>
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
												borderColor: "var(--border)",
												borderRadius: "0.5rem",
												boxShadow:
													"0 4px 12px rgba(0, 0, 0, 0.1)",
											}}
										/>
										<Bar
											dataKey="amount"
											fill="var(--primary)"
											radius={[4, 4, 0, 0]}
											name="Amount Collected"
										/>
									</BarChart>
								</ResponsiveContainer>
							</div>
						</CardContent>
					</Card>
					<Card className="md:col-span-3">
						<CardHeader>
							<div className="flex items-center justify-between">
								<div>
									<CardTitle>
										Collection by Department
									</CardTitle>
									<CardDescription>
										Fee collection percentage by department
									</CardDescription>
								</div>
								<Badge variant="outline" className="ml-2">
									{showActiveOnly
										? "Active Students"
										: "All Students"}
								</Badge>
							</div>
						</CardHeader>
						<CardContent className="space-y-4">
							{departmentData.map((dept) => (
								<div key={dept.name} className="space-y-2">
									<div className="flex items-center justify-between">
										<span className="text-sm">
											{dept.name}
										</span>
										<span className="text-sm font-medium">
											{dept.collected}%
										</span>
									</div>
									<Progress
										value={dept.collected}
										className="h-2"
									/>
								</div>
							))}
						</CardContent>
					</Card>
				</div>

				<div className="grid gap-6 md:grid-cols-2">
					<Card>
						<CardHeader className="flex flex-row items-center justify-between">
							<div>
								<CardTitle>Recent Payments</CardTitle>
								<CardDescription>
									Latest fee payments from active students
								</CardDescription>
							</div>
							<Button
								variant="ghost"
								size="sm"
								className="gap-1"
								asChild>
								<Link href="/dashboard/fees">
									<span>View All</span>
									<ArrowRight className="h-4 w-4" />
								</Link>
							</Button>
						</CardHeader>
						<CardContent>
							<div className="space-y-4">
								{[1, 2, 3, 4, 5].map((i) => (
									<div
										key={i}
										className="flex items-center gap-4">
										<div className="h-10 w-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
											<Users className="h-5 w-5 text-gray-500" />
										</div>
										<div className="flex-1">
											<div className="flex items-center justify-between">
												<p className="font-medium">
													Student Name {i}
												</p>
												<p className="text-sm font-medium text-green-600 dark:text-green-400">
													$
													{(
														1000 +
														i * 100
													).toLocaleString()}
												</p>
											</div>
											<div className="flex items-center justify-between">
												<p className="text-sm text-muted-foreground">
													ID: S2023-{1000 + i}
												</p>
												<p className="text-xs text-muted-foreground">
													Today, 10:3{i} AM
												</p>
											</div>
										</div>
									</div>
								))}
							</div>
						</CardContent>
					</Card>

					<Card>
						<CardHeader>
							<Tabs defaultValue="outstanding">
								<div className="flex items-center justify-between">
									<CardTitle>Students</CardTitle>
									<TabsList>
										<TabsTrigger value="outstanding">
											Outstanding
										</TabsTrigger>
										<TabsTrigger value="recent">
											Recent
										</TabsTrigger>
									</TabsList>
								</div>
								<CardDescription>
									{showActiveOnly
										? "Active students with outstanding dues and recently added"
										: "Students with outstanding dues and recently added"}
								</CardDescription>
							</Tabs>
						</CardHeader>
						<CardContent>
							<Tabs>
								<TabsContent
									value="outstanding"
									className="space-y-4 mt-0">
									{[1, 2, 3, 4, 5].map((i) => (
										<div
											key={i}
											className="flex items-center gap-4">
											<div className="h-10 w-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
												<Users className="h-5 w-5 text-gray-500" />
											</div>
											<div className="flex-1">
												<div className="flex items-center justify-between">
													<p className="font-medium">
														Student Name {i}
													</p>
													<p className="text-sm font-medium text-red-600 dark:text-red-400">
														$
														{(
															500 +
															i * 100
														).toLocaleString()}
													</p>
												</div>
												<div className="flex items-center justify-between">
													<p className="text-sm text-muted-foreground">
														Computer Science
													</p>
													<Button
														variant="ghost"
														size="sm"
														className="h-6 gap-1 text-xs"
														asChild>
														<Link
															href={`/dashboard/students/${
																1000 + i
															}`}>
															<span>View</span>
															<ArrowUpRight className="h-3 w-3" />
														</Link>
													</Button>
												</div>
											</div>
										</div>
									))}
								</TabsContent>
								<TabsContent
									value="recent"
									className="space-y-4 mt-0">
									{[6, 7, 8, 9, 10].map((i) => (
										<div
											key={i}
											className="flex items-center gap-4">
											<div className="h-10 w-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
												<Users className="h-5 w-5 text-gray-500" />
											</div>
											<div className="flex-1">
												<div className="flex items-center justify-between">
													<p className="font-medium">
														Student Name {i}
													</p>
													<p className="text-xs text-muted-foreground">
														Added 2 days ago
													</p>
												</div>
												<div className="flex items-center justify-between">
													<p className="text-sm text-muted-foreground">
														Electrical Engineering
													</p>
													<Button
														variant="ghost"
														size="sm"
														className="h-6 gap-1 text-xs"
														asChild>
														<Link
															href={`/dashboard/students/${
																2000 + i
															}`}>
															<span>View</span>
															<ArrowUpRight className="h-3 w-3" />
														</Link>
													</Button>
												</div>
											</div>
										</div>
									))}
								</TabsContent>
							</Tabs>
						</CardContent>
					</Card>
				</div>
			</div>
		</div>
	);
}
