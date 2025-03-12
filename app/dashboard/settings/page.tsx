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
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function SettingsPage() {
	return (
		<div className="flex flex-col gap-6">
			<div className="flex items-center justify-between">
				<h1 className="text-2xl font-bold">Settings</h1>
			</div>

			<Tabs defaultValue="general">
				<div className="flex flex-col gap-6 md:flex-row">
					<div className="md:w-[200px]">
						<TabsList className="flex flex-col h-auto p-0 bg-transparent">
							<TabsTrigger
								value="general"
								className="justify-start w-full">
								General
							</TabsTrigger>
							<TabsTrigger
								value="appearance"
								className="justify-start w-full">
								Appearance
							</TabsTrigger>
							<TabsTrigger
								value="notifications"
								className="justify-start w-full">
								Notifications
							</TabsTrigger>
							<TabsTrigger
								value="security"
								className="justify-start w-full">
								Security
							</TabsTrigger>
							<TabsTrigger
								value="backup"
								className="justify-start w-full">
								Backup & Export
							</TabsTrigger>
						</TabsList>
					</div>
					<div className="flex-1">
						<TabsContent value="general" className="m-0">
							<Card>
								<CardHeader>
									<CardTitle>General Settings</CardTitle>
									<CardDescription>
										Manage your institution details and
										system preferences.
									</CardDescription>
								</CardHeader>
								<CardContent className="space-y-6">
									<div className="space-y-4">
										<h3 className="text-lg font-medium">
											Institution Information
										</h3>
										<div className="grid gap-4 md:grid-cols-2">
											<div className="space-y-2">
												<Label htmlFor="institutionName">
													Institution Name
												</Label>
												<Input
													id="institutionName"
													defaultValue="University of Technology"
												/>
											</div>
											<div className="space-y-2">
												<Label htmlFor="institutionCode">
													Institution Code
												</Label>
												<Input
													id="institutionCode"
													defaultValue="UOT-2023"
												/>
											</div>
											<div className="space-y-2">
												<Label htmlFor="email">
													Email Address
												</Label>
												<Input
													id="email"
													type="email"
													defaultValue="admin@university.edu"
												/>
											</div>
											<div className="space-y-2">
												<Label htmlFor="phone">
													Phone Number
												</Label>
												<Input
													id="phone"
													defaultValue="+1234567890"
												/>
											</div>
											<div className="space-y-2 md:col-span-2">
												<Label htmlFor="address">
													Address
												</Label>
												<Input
													id="address"
													defaultValue="123 University Avenue, College Town"
												/>
											</div>
										</div>
									</div>
									<Separator />
									<div className="space-y-4">
										<h3 className="text-lg font-medium">
											System Preferences
										</h3>
										<div className="space-y-4">
											<div className="flex items-center justify-between">
												<div className="space-y-0.5">
													<Label htmlFor="dateFormat">
														Date Format
													</Label>
													<p className="text-sm text-muted-foreground">
														Choose your preferred
														date format
													</p>
												</div>
												<div className="w-[200px]">
													<select
														id="dateFormat"
														className="w-full h-9 rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors"
														defaultValue="MM/DD/YYYY">
														<option value="MM/DD/YYYY">
															MM/DD/YYYY
														</option>
														<option value="DD/MM/YYYY">
															DD/MM/YYYY
														</option>
														<option value="YYYY-MM-DD">
															YYYY-MM-DD
														</option>
													</select>
												</div>
											</div>
											<div className="flex items-center justify-between">
												<div className="space-y-0.5">
													<Label htmlFor="currencySymbol">
														Currency Symbol
													</Label>
													<p className="text-sm text-muted-foreground">
														Set your preferred
														currency symbol
													</p>
												</div>
												<div className="w-[200px]">
													<Input
														id="currencySymbol"
														defaultValue="$"
													/>
												</div>
											</div>
											<div className="flex items-center justify-between">
												<div className="space-y-0.5">
													<Label htmlFor="timezone">
														Timezone
													</Label>
													<p className="text-sm text-muted-foreground">
														Set your local timezone
													</p>
												</div>
												<div className="w-[200px]">
													<select
														id="timezone"
														className="w-full h-9 rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors"
														defaultValue="UTC-5">
														<option value="UTC-12">
															UTC-12
														</option>
														<option value="UTC-11">
															UTC-11
														</option>
														<option value="UTC-10">
															UTC-10
														</option>
														<option value="UTC-9">
															UTC-9
														</option>
														<option value="UTC-8">
															UTC-8
														</option>
														<option value="UTC-7">
															UTC-7
														</option>
														<option value="UTC-6">
															UTC-6
														</option>
														<option value="UTC-5">
															UTC-5 (Eastern Time)
														</option>
														<option value="UTC-4">
															UTC-4
														</option>
														<option value="UTC-3">
															UTC-3
														</option>
														<option value="UTC-2">
															UTC-2
														</option>
														<option value="UTC-1">
															UTC-1
														</option>
														<option value="UTC+0">
															UTC+0
														</option>
														<option value="UTC+1">
															UTC+1
														</option>
														<option value="UTC+2">
															UTC+2
														</option>
														<option value="UTC+3">
															UTC+3
														</option>
														<option value="UTC+4">
															UTC+4
														</option>
														<option value="UTC+5">
															UTC+5
														</option>
														<option value="UTC+5:30">
															UTC+5:30 (India)
														</option>
														<option value="UTC+6">
															UTC+6
														</option>
														<option value="UTC+7">
															UTC+7
														</option>
														<option value="UTC+8">
															UTC+8
														</option>
														<option value="UTC+9">
															UTC+9
														</option>
														<option value="UTC+10">
															UTC+10
														</option>
														<option value="UTC+11">
															UTC+11
														</option>
														<option value="UTC+12">
															UTC+12
														</option>
													</select>
												</div>
											</div>
										</div>
									</div>
									<div className="flex justify-end">
										<Button className="bg-blue-500 hover:bg-blue-600">
											Save Changes
										</Button>
									</div>
								</CardContent>
							</Card>
						</TabsContent>

						<TabsContent value="appearance" className="m-0">
							<Card>
								<CardHeader>
									<CardTitle>Appearance Settings</CardTitle>
									<CardDescription>
										Customize the look and feel of your
										dashboard.
									</CardDescription>
								</CardHeader>
								<CardContent className="space-y-6">
									<div className="space-y-4">
										<h3 className="text-lg font-medium">
											Theme
										</h3>
										<div className="space-y-4">
											<div className="flex items-center justify-between">
												<div className="space-y-0.5">
													<Label>Theme Mode</Label>
													<p className="text-sm text-muted-foreground">
														Choose between light and
														dark mode
													</p>
												</div>
												<div className="flex items-center space-x-2">
													<Label htmlFor="theme-mode">
														Dark Mode
													</Label>
													<Switch id="theme-mode" />
												</div>
											</div>
											<div className="flex items-center justify-between">
												<div className="space-y-0.5">
													<Label>
														System Preference
													</Label>
													<p className="text-sm text-muted-foreground">
														Follow your system&apos;s
														theme preference
													</p>
												</div>
												<div className="flex items-center space-x-2">
													<Label htmlFor="system-preference">
														Enable
													</Label>
													<Switch
														id="system-preference"
														defaultChecked
													/>
												</div>
											</div>
										</div>
									</div>
									<Separator />
									<div className="space-y-4">
										<h3 className="text-lg font-medium">
											Accent Color
										</h3>
										<div className="grid grid-cols-3 gap-2">
											<div className="flex flex-col items-center space-y-2">
												<div className="h-10 w-10 rounded-full bg-blue-500" />
												<Label className="text-xs">
													Blue
												</Label>
											</div>
											<div className="flex flex-col items-center space-y-2">
												<div className="h-10 w-10 rounded-full bg-green-500" />
												<Label className="text-xs">
													Green
												</Label>
											</div>
											<div className="flex flex-col items-center space-y-2">
												<div className="h-10 w-10 rounded-full bg-purple-500" />
												<Label className="text-xs">
													Purple
												</Label>
											</div>
											<div className="flex flex-col items-center space-y-2">
												<div className="h-10 w-10 rounded-full bg-red-500" />
												<Label className="text-xs">
													Red
												</Label>
											</div>
											<div className="flex flex-col items-center space-y-2">
												<div className="h-10 w-10 rounded-full bg-orange-500" />
												<Label className="text-xs">
													Orange
												</Label>
											</div>
											<div className="flex flex-col items-center space-y-2">
												<div className="h-10 w-10 rounded-full bg-teal-500" />
												<Label className="text-xs">
													Teal
												</Label>
											</div>
										</div>
									</div>
									<Separator />
									<div className="space-y-4">
										<h3 className="text-lg font-medium">
											Layout
										</h3>
										<div className="space-y-4">
											<div className="flex items-center justify-between">
												<div className="space-y-0.5">
													<Label>Compact Mode</Label>
													<p className="text-sm text-muted-foreground">
														Use a more compact
														layout for tables and
														forms
													</p>
												</div>
												<div className="flex items-center space-x-2">
													<Label htmlFor="compact-mode">
														Enable
													</Label>
													<Switch id="compact-mode" />
												</div>
											</div>
											<div className="flex items-center justify-between">
												<div className="space-y-0.5">
													<Label>
														Sidebar Collapsed
													</Label>
													<p className="text-sm text-muted-foreground">
														Start with sidebar
														collapsed by default
													</p>
												</div>
												<div className="flex items-center space-x-2">
													<Label htmlFor="sidebar-collapsed">
														Enable
													</Label>
													<Switch id="sidebar-collapsed" />
												</div>
											</div>
										</div>
									</div>
									<div className="flex justify-end">
										<Button className="bg-blue-500 hover:bg-blue-600">
											Save Changes
										</Button>
									</div>
								</CardContent>
							</Card>
						</TabsContent>

						<TabsContent value="notifications" className="m-0">
							<Card>
								<CardHeader>
									<CardTitle>Notification Settings</CardTitle>
									<CardDescription>
										Configure how and when you receive
										notifications.
									</CardDescription>
								</CardHeader>
								<CardContent className="space-y-6">
									<div className="space-y-4">
										<h3 className="text-lg font-medium">
											Email Notifications
										</h3>
										<div className="space-y-4">
											<div className="flex items-center justify-between">
												<div className="space-y-0.5">
													<Label>
														Payment Reminders
													</Label>
													<p className="text-sm text-muted-foreground">
														Send email reminders for
														upcoming fee payments
													</p>
												</div>
												<div className="flex items-center space-x-2">
													<Label htmlFor="payment-reminders">
														Enable
													</Label>
													<Switch
														id="payment-reminders"
														defaultChecked
													/>
												</div>
											</div>
											<div className="flex items-center justify-between">
												<div className="space-y-0.5">
													<Label>
														Payment Receipts
													</Label>
													<p className="text-sm text-muted-foreground">
														Send email receipts for
														fee payments
													</p>
												</div>
												<div className="flex items-center space-x-2">
													<Label htmlFor="payment-receipts">
														Enable
													</Label>
													<Switch
														id="payment-receipts"
														defaultChecked
													/>
												</div>
											</div>
											<div className="flex items-center justify-between">
												<div className="space-y-0.5">
													<Label>
														System Updates
													</Label>
													<p className="text-sm text-muted-foreground">
														Receive emails about
														system updates and
														maintenance
													</p>
												</div>
												<div className="flex items-center space-x-2">
													<Label htmlFor="system-updates">
														Enable
													</Label>
													<Switch id="system-updates" />
												</div>
											</div>
										</div>
									</div>
									<Separator />
									<div className="space-y-4">
										<h3 className="text-lg font-medium">
											In-App Notifications
										</h3>
										<div className="space-y-4">
											<div className="flex items-center justify-between">
												<div className="space-y-0.5">
													<Label>
														Due Date Alerts
													</Label>
													<p className="text-sm text-muted-foreground">
														Show alerts for upcoming
														fee due dates
													</p>
												</div>
												<div className="flex items-center space-x-2">
													<Label htmlFor="due-date-alerts">
														Enable
													</Label>
													<Switch
														id="due-date-alerts"
														defaultChecked
													/>
												</div>
											</div>
											<div className="flex items-center justify-between">
												<div className="space-y-0.5">
													<Label>
														New Student
														Notifications
													</Label>
													<p className="text-sm text-muted-foreground">
														Show notifications when
														new students are added
													</p>
												</div>
												<div className="flex items-center space-x-2">
													<Label htmlFor="new-student-notifications">
														Enable
													</Label>
													<Switch id="new-student-notifications" />
												</div>
											</div>
										</div>
									</div>
									<div className="flex justify-end">
										<Button className="bg-blue-500 hover:bg-blue-600">
											Save Changes
										</Button>
									</div>
								</CardContent>
							</Card>
						</TabsContent>

						<TabsContent value="security" className="m-0">
							<Card>
								<CardHeader>
									<CardTitle>Security Settings</CardTitle>
									<CardDescription>
										Manage your account security and access
										controls.
									</CardDescription>
								</CardHeader>
								<CardContent className="space-y-6">
									<div className="space-y-4">
										<h3 className="text-lg font-medium">
											Password
										</h3>
										<div className="space-y-4">
											<div className="grid gap-4 md:grid-cols-2">
												<div className="space-y-2">
													<Label htmlFor="current-password">
														Current Password
													</Label>
													<Input
														id="current-password"
														type="password"
													/>
												</div>
												<div className="space-y-2">
													<Label htmlFor="new-password">
														New Password
													</Label>
													<Input
														id="new-password"
														type="password"
													/>
												</div>
												<div className="space-y-2">
													<Label htmlFor="confirm-password">
														Confirm New Password
													</Label>
													<Input
														id="confirm-password"
														type="password"
													/>
												</div>
											</div>
											<Button className="bg-blue-500 hover:bg-blue-600">
												Change Password
											</Button>
										</div>
									</div>
									<Separator />
									<div className="space-y-4">
										<h3 className="text-lg font-medium">
											Two-Factor Authentication
										</h3>
										<div className="space-y-4">
											<div className="flex items-center justify-between">
												<div className="space-y-0.5">
													<Label>Enable 2FA</Label>
													<p className="text-sm text-muted-foreground">
														Add an extra layer of
														security to your account
													</p>
												</div>
												<div className="flex items-center space-x-2">
													<Label htmlFor="enable-2fa">
														Enable
													</Label>
													<Switch id="enable-2fa" />
												</div>
											</div>
										</div>
									</div>
									<Separator />
									<div className="space-y-4">
										<h3 className="text-lg font-medium">
											Session Management
										</h3>
										<div className="space-y-4">
											<div className="flex items-center justify-between">
												<div className="space-y-0.5">
													<Label>Auto Logout</Label>
													<p className="text-sm text-muted-foreground">
														Automatically log out
														after period of
														inactivity
													</p>
												</div>
												<div className="w-[200px]">
													<select
														id="auto-logout"
														className="w-full h-9 rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors"
														defaultValue="30">
														<option value="never">
															Never
														</option>
														<option value="15">
															15 minutes
														</option>
														<option value="30">
															30 minutes
														</option>
														<option value="60">
															1 hour
														</option>
														<option value="120">
															2 hours
														</option>
													</select>
												</div>
											</div>
										</div>
									</div>
								</CardContent>
							</Card>
						</TabsContent>

						<TabsContent value="backup" className="m-0">
							<Card>
								<CardHeader>
									<CardTitle>
										Backup & Export Settings
									</CardTitle>
									<CardDescription>
										Manage data backups and exports for your
										system.
									</CardDescription>
								</CardHeader>
								<CardContent className="space-y-6">
									<div className="space-y-4">
										<h3 className="text-lg font-medium">
											Data Backup
										</h3>
										<div className="space-y-4">
											<div className="flex items-center justify-between">
												<div className="space-y-0.5">
													<Label>
														Automatic Backups
													</Label>
													<p className="text-sm text-muted-foreground">
														Schedule regular backups
														of your data
													</p>
												</div>
												<div className="flex items-center space-x-2">
													<Label htmlFor="automatic-backups">
														Enable
													</Label>
													<Switch
														id="automatic-backups"
														defaultChecked
													/>
												</div>
											</div>
											<div className="flex items-center justify-between">
												<div className="space-y-0.5">
													<Label>
														Backup Frequency
													</Label>
													<p className="text-sm text-muted-foreground">
														How often to create
														backups
													</p>
												</div>
												<div className="w-[200px]">
													<select
														id="backup-frequency"
														className="w-full h-9 rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors"
														defaultValue="daily">
														<option value="hourly">
															Hourly
														</option>
														<option value="daily">
															Daily
														</option>
														<option value="weekly">
															Weekly
														</option>
														<option value="monthly">
															Monthly
														</option>
													</select>
												</div>
											</div>
											<Button className="gap-2">
												Create Manual Backup Now
											</Button>
										</div>
									</div>
									<Separator />
									<div className="space-y-4">
										<h3 className="text-lg font-medium">
											Data Export
										</h3>
										<div className="space-y-4">
											<div className="grid gap-4 md:grid-cols-2">
												<Button
													variant="outline"
													className="gap-2">
													Export Students Data (CSV)
												</Button>
												<Button
													variant="outline"
													className="gap-2">
													Export Fee Records (CSV)
												</Button>
												<Button
													variant="outline"
													className="gap-2">
													Export Departments (CSV)
												</Button>
												<Button
													variant="outline"
													className="gap-2">
													Export Sessions (CSV)
												</Button>
											</div>
											<Button className="gap-2 bg-blue-500 hover:bg-blue-600">
												Export All Data
											</Button>
										</div>
									</div>
								</CardContent>
							</Card>
						</TabsContent>
					</div>
				</div>
			</Tabs>
		</div>
	);
}
