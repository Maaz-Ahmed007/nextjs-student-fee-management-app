import Link from "next/link";
import { ArrowLeft, Save, Trash } from "lucide-react";

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
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { useParams } from "next/navigation";

export default function FeeTypeDetailsPage() {
	const params = useParams<{ id: string }>();
	
	// Mock fee type data
	const feeType = {
		id: params.id,
		name: "Semester Fee",
		defaultAmount: 2500,
		isRecurring: true,
		recurringPeriod: "semester",
		department: "All Departments",
		description:
			"Regular semester fee charged to all students at the beginning of each semester.",
	};

	return (
		<div className="flex flex-col gap-6">
			<div className="flex items-center gap-4">
				<Button variant="ghost" size="icon" asChild>
					<Link href="/dashboard/fees">
						<ArrowLeft className="h-4 w-4" />
					</Link>
				</Button>
				<h1 className="text-2xl font-bold">Edit Fee Type</h1>
			</div>

			<Card>
				<CardHeader>
					<CardTitle>Fee Type Details</CardTitle>
					<CardDescription>
						Edit the details for this fee type
					</CardDescription>
				</CardHeader>
				<CardContent>
					<form className="space-y-6">
						<div className="grid gap-4 md:grid-cols-2">
							<div className="space-y-2">
								<Label htmlFor="name">Fee Type Name</Label>
								<Input
									id="name"
									defaultValue={feeType.name}
									required
								/>
							</div>
							<div className="space-y-2">
								<Label htmlFor="defaultAmount">
									Default Amount
								</Label>
								<Input
									id="defaultAmount"
									type="number"
									defaultValue={feeType.defaultAmount}
									required
								/>
							</div>
							<div className="space-y-2">
								<Label htmlFor="department">Department</Label>
								<Select
									defaultValue={
										feeType.department === "All Departments"
											? "all"
											: "specific"
									}>
									<SelectTrigger id="department">
										<SelectValue placeholder="Select department" />
									</SelectTrigger>
									<SelectContent>
										<SelectItem value="all">
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
							</div>
							<div className="space-y-4">
								<div className="flex items-center justify-between">
									<Label htmlFor="isRecurring">
										Recurring Fee
									</Label>
									<Switch
										id="isRecurring"
										defaultChecked={feeType.isRecurring}
									/>
								</div>
								{feeType.isRecurring && (
									<RadioGroup
										defaultValue={feeType.recurringPeriod}>
										<div className="flex items-center space-x-2">
											<RadioGroupItem
												value="semester"
												id="semester"
											/>
											<Label htmlFor="semester">
												Every Semester
											</Label>
										</div>
										<div className="flex items-center space-x-2">
											<RadioGroupItem
												value="year"
												id="year"
											/>
											<Label htmlFor="year">Yearly</Label>
										</div>
										<div className="flex items-center space-x-2">
											<RadioGroupItem
												value="month"
												id="month"
											/>
											<Label htmlFor="month">
												Monthly
											</Label>
										</div>
									</RadioGroup>
								)}
							</div>
							<div className="space-y-2 md:col-span-2">
								<Label htmlFor="description">Description</Label>
								<Textarea
									id="description"
									defaultValue={feeType.description}
									rows={3}
								/>
							</div>
						</div>

						<div className="flex justify-between">
							<Button
								variant="destructive"
								type="button"
								className="gap-2">
								<Trash className="h-4 w-4" />
								<span>Delete Fee Type</span>
							</Button>
							<div className="flex gap-2">
								<Button variant="outline" asChild>
									<Link href="/dashboard/fees">Cancel</Link>
								</Button>
								<Button
									type="submit"
									className="gap-2 bg-blue-500 hover:bg-blue-600">
									<Save className="h-4 w-4" />
									<span>Save Changes</span>
								</Button>
							</div>
						</div>
					</form>
				</CardContent>
			</Card>
		</div>
	);
}
