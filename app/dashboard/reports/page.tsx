import { Download, FileText, Filter } from "lucide-react";

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

export default function ReportsPage() {
	return (
		<div className="flex flex-col gap-6">
			<div className="flex items-center justify-between">
				<h1 className="text-2xl font-bold">Reports</h1>
				<Button variant="outline" className="gap-2">
					<Download className="h-4 w-4" />
					<span>Export</span>
				</Button>
			</div>

			<Tabs defaultValue="collection">
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
						<CardContent>
							<div className="flex flex-col gap-6">
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
									<Button className="ml-auto bg-blue-500 hover:bg-blue-600">
										Generate Report
									</Button>
								</div>

								<div className="h-[400px] flex items-center justify-center bg-gray-50 dark:bg-gray-800 rounded-md">
									<div className="text-center">
										<FileText className="h-12 w-12 mx-auto text-muted-foreground" />
										<p className="mt-2 text-muted-foreground">
											Select filters and generate report
										</p>
									</div>
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
						<CardContent>
							<div className="flex flex-col gap-6">
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
									<Button className="ml-auto bg-blue-500 hover:bg-blue-600">
										Generate Report
									</Button>
								</div>

								<div className="h-[400px] flex items-center justify-center bg-gray-50 dark:bg-gray-800 rounded-md">
									<div className="text-center">
										<FileText className="h-12 w-12 mx-auto text-muted-foreground" />
										<p className="mt-2 text-muted-foreground">
											Select filters and generate report
										</p>
									</div>
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
						<CardContent>
							<div className="flex flex-col gap-6">
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
									<Button className="ml-auto bg-blue-500 hover:bg-blue-600">
										Generate Report
									</Button>
								</div>

								<div className="h-[400px] flex items-center justify-center bg-gray-50 dark:bg-gray-800 rounded-md">
									<div className="text-center">
										<FileText className="h-12 w-12 mx-auto text-muted-foreground" />
										<p className="mt-2 text-muted-foreground">
											Select filters and generate report
										</p>
									</div>
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
						<CardContent>
							<div className="flex flex-col gap-6">
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
									<Button className="ml-auto bg-blue-500 hover:bg-blue-600">
										Generate Report
									</Button>
								</div>

								<div className="h-[400px] flex items-center justify-center bg-gray-50 dark:bg-gray-800 rounded-md">
									<div className="text-center">
										<FileText className="h-12 w-12 mx-auto text-muted-foreground" />
										<p className="mt-2 text-muted-foreground">
											Select filters and generate report
										</p>
									</div>
								</div>
							</div>
						</CardContent>
					</Card>
				</TabsContent>
			</Tabs>
		</div>
	);
}
