import Link from "next/link";
import { PlusCircle, Search } from "lucide-react";

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
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";

export default function SessionsPage() {
	// Mock data for sessions
	const sessions = [
		{
			id: "1",
			name: "Batch 2020-2024",
			startYear: 2020,
			endYear: 2024,
			status: "active",
			studentCount: 450,
		},
		{
			id: "2",
			name: "Batch 2021-2025",
			startYear: 2021,
			endYear: 2025,
			status: "active",
			studentCount: 420,
		},
		{
			id: "3",
			name: "Batch 2022-2026",
			startYear: 2022,
			endYear: 2026,
			status: "active",
			studentCount: 380,
		},
		{
			id: "4",
			name: "Batch 2019-2023",
			startYear: 2019,
			endYear: 2023,
			status: "completed",
			studentCount: 410,
		},
		{
			id: "5",
			name: "Batch 2018-2022",
			startYear: 2018,
			endYear: 2022,
			status: "completed",
			studentCount: 390,
		},
		{
			id: "6",
			name: "Batch 2023-2027",
			startYear: 2023,
			endYear: 2027,
			status: "active",
			studentCount: 320,
		},
	];

	return (
		<div className="flex flex-col gap-6">
			<div className="flex items-center justify-between">
				<h1 className="text-2xl font-bold">Sessions</h1>
				<Button className="gap-2 bg-blue-500 hover:bg-blue-600" asChild>
					<Link href="/dashboard/sessions/new">
						<PlusCircle className="h-4 w-4" />
						<span>Add Session</span>
					</Link>
				</Button>
			</div>

			<Card>
				<CardHeader>
					<CardTitle>Session Management</CardTitle>
					<CardDescription>
						View and manage all academic sessions/batches in the
						institution.
					</CardDescription>
				</CardHeader>
				<CardContent>
					<div className="flex flex-col gap-6">
						<div className="flex items-center gap-2">
							<Search className="h-4 w-4 text-muted-foreground" />
							<Input
								placeholder="Search sessions..."
								className="flex-1"
							/>
						</div>

						<div className="rounded-md border">
							<Table>
								<TableHeader>
									<TableRow>
										<TableHead>Name</TableHead>
										<TableHead>Start Year</TableHead>
										<TableHead>End Year</TableHead>
										<TableHead>Status</TableHead>
										<TableHead>Students</TableHead>
										<TableHead className="text-right">
											Actions
										</TableHead>
									</TableRow>
								</TableHeader>
								<TableBody>
									{sessions.map((session) => (
										<TableRow key={session.id}>
											<TableCell className="font-medium">
												{session.name}
											</TableCell>
											<TableCell>
												{session.startYear}
											</TableCell>
											<TableCell>
												{session.endYear}
											</TableCell>
											<TableCell>
												<div className="flex items-center">
													<div
														className={`h-2 w-2 rounded-full ${
															session.status ===
															"active"
																? "bg-green-500"
																: "bg-gray-500"
														} mr-2`}
													/>
													<span className="capitalize">
														{session.status}
													</span>
												</div>
											</TableCell>
											<TableCell>
												{session.studentCount}
											</TableCell>
											<TableCell className="text-right">
												<Button
													variant="ghost"
													size="sm"
													asChild>
													<Link
														href={`/dashboard/sessions/${session.id}`}>
														View
													</Link>
												</Button>
											</TableCell>
										</TableRow>
									))}
								</TableBody>
							</Table>
						</div>
					</div>
				</CardContent>
			</Card>
		</div>
	);
}