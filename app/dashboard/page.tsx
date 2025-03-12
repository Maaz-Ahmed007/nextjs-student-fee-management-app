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

export default function DashboardPage() {
	return (
		<div className="flex flex-col gap-6">
			<div className="flex items-center justify-between">
				<h1 className="text-2xl font-bold">Dashboard</h1>
				<div className="flex items-center gap-2">
					<Button variant="outline" className="gap-2">
						<Users className="h-4 w-4" />
						<span>Add Student</span>
					</Button>
					<Button className="gap-2 bg-blue-500 hover:bg-blue-600">
						<Wallet className="h-4 w-4" />
						<span>Record Payment</span>
					</Button>
				</div>
			</div>

			<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
				<Card>
					<CardHeader className="flex flex-row items-center justify-between pb-2">
						<CardTitle className="text-sm font-medium">
							Total Students
						</CardTitle>
						<Users className="h-4 w-4 text-muted-foreground" />
					</CardHeader>
					<CardContent>
						<div className="text-2xl font-bold">1,248</div>
						<p className="text-xs text-muted-foreground">
							+180 from last semester
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
						<div className="text-2xl font-bold">Rs. 567,890</div>
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
						<div className="text-2xl font-bold">Rs. 123,456</div>
						<p className="text-xs text-muted-foreground">
							245 students with dues
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
						<CardTitle>Fee Collection Overview</CardTitle>
						<CardDescription>
							Monthly fee collection for the current year
						</CardDescription>
					</CardHeader>
					<CardContent>
						<div className="h-[300px] flex items-center justify-center bg-gray-50 dark:bg-gray-800 rounded-md">
							<p className="text-sm text-muted-foreground">
								Chart will be implemented here
							</p>
						</div>
					</CardContent>
				</Card>
				<Card className="md:col-span-3">
					<CardHeader>
						<CardTitle>Collection by Department</CardTitle>
						<CardDescription>
							Fee collection percentage by department
						</CardDescription>
					</CardHeader>
					<CardContent className="space-y-4">
						<div className="space-y-2">
							<div className="flex items-center justify-between">
								<span className="text-sm">
									Computer Science
								</span>
								<span className="text-sm font-medium">92%</span>
							</div>
							<Progress value={92} className="h-2" />
						</div>
						<div className="space-y-2">
							<div className="flex items-center justify-between">
								<span className="text-sm">
									Electrical Engineering
								</span>
								<span className="text-sm font-medium">84%</span>
							</div>
							<Progress value={84} className="h-2" />
						</div>
						<div className="space-y-2">
							<div className="flex items-center justify-between">
								<span className="text-sm">
									Business Administration
								</span>
								<span className="text-sm font-medium">76%</span>
							</div>
							<Progress value={76} className="h-2" />
						</div>
						<div className="space-y-2">
							<div className="flex items-center justify-between">
								<span className="text-sm">
									Mechanical Engineering
								</span>
								<span className="text-sm font-medium">68%</span>
							</div>
							<Progress value={68} className="h-2" />
						</div>
						<div className="space-y-2">
							<div className="flex items-center justify-between">
								<span className="text-sm">Social Sciences</span>
								<span className="text-sm font-medium">62%</span>
							</div>
							<Progress value={62} className="h-2" />
						</div>
					</CardContent>
				</Card>
			</div>

			<div className="grid gap-6 md:grid-cols-2">
				<Card>
					<CardHeader className="flex flex-row items-center justify-between">
						<div>
							<CardTitle>Recent Payments</CardTitle>
							<CardDescription>
								Latest fee payments received
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
												Rs.
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
								Students with outstanding dues and recently
								added
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
													Rs.
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
	);
}
