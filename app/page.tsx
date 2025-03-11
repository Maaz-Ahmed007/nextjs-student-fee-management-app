import Link from "next/link";
import {
	ArrowRight,
	BarChart3,
	Database,
	FileText,
	LineChart,
	Users,
	Wallet,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";

export default function LandingPage() {
	return (
		<div className="flex min-h-screen flex-col bg-white text-gray-800 dark:bg-gray-900 dark:text-gray-100">
			<header className="sticky top-0 z-50 w-full border-b border-gray-200 dark:border-gray-800 bg-white/95 dark:bg-gray-900/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-gray-900/60">
				<div className="container mx-auto max-w-7xl flex h-16 items-center justify-between px-4 md:px-6">
					<div className="flex items-center gap-2 font-bold text-2xl">
						<Wallet className="h-5 w-5 text-blue-500" />
						<span>FeeTrak</span>
					</div>
					<nav className="hidden md:flex gap-6 text-sm">
						<Link
							href="#features"
							className="transition-colors hover:text-blue-500">
							Features
						</Link>
						<Link
							href="#benefits"
							className="transition-colors hover:text-blue-500">
							Benefits
						</Link>
						<Link
							href="#tech-stack"
							className="transition-colors hover:text-blue-500">
							Tech Stack
						</Link>
						<Link
							href="#faq"
							className="transition-colors hover:text-blue-500">
							FAQ
						</Link>
					</nav>
					<div className="flex items-center gap-4">
						<ModeToggle />
						<Button
							variant="outline"
							className="border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 dark:text-gray-100"
							asChild>
							<Link
								href="https://github.com/Maaz-Ahmed007/nextjs-student-fee-management-app"
								target="_blank">
								GitHub
							</Link>
						</Button>
						<Button
							className="bg-blue-500 hover:bg-blue-600 text-white"
							asChild>
							<Link href="/dashboard">
								Dashboard{" "}
								<ArrowRight className="ml-2 h-4 w-4" />
							</Link>
						</Button>
					</div>
				</div>
			</header>
			<main className="flex-1">
				<section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
					<div className="container mx-auto max-w-7xl px-4 md:px-6">
						<div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
							<div className="flex flex-col justify-center space-y-4">
								<div className="space-y-2">
									<div className="flex items-center gap-2">
										<div className="inline-flex items-center rounded-md bg-blue-100 dark:bg-blue-900/30 px-3 py-1 text-sm font-medium text-blue-800 dark:text-blue-300">
											<span>Open Source</span>
										</div>
										<div className="inline-flex items-center rounded-md bg-green-100 dark:bg-green-900/30 px-3 py-1 text-sm font-medium text-green-800 dark:text-green-300">
											<span>Free to Use</span>
										</div>
									</div>
									<h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-gray-900 dark:text-white">
										Student Fee Management Made Simple
									</h1>
									<p className="max-w-[600px] text-gray-600 dark:text-gray-300 md:text-xl">
										A comprehensive solution for educational
										institutions to efficiently track,
										manage, and report on student fees with
										a clean, intuitive interface.
									</p>
								</div>
								<div className="flex flex-col gap-2 min-[400px]:flex-row">
									<Button
										size="lg"
										className="bg-blue-500 hover:bg-blue-600 text-white"
										asChild>
										<Link href="/dashboard">
											Get Started
											<ArrowRight className="ml-2 h-4 w-4" />
										</Link>
									</Button>
									<Button
										size="lg"
										variant="outline"
										className="border-blue-500 text-blue-500 hover:bg-blue-50 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-gray-800"
										asChild>
										<Link href="#features">Learn More</Link>
									</Button>
								</div>
							</div>
							<div className="flex items-center justify-center">
								<div className="relative w-full h-[400px] rounded-xl overflow-hidden shadow-2xl">
									<div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-indigo-600 opacity-90 dark:opacity-80"></div>
									<div className="absolute inset-0 flex items-center justify-center">
										<div className="w-3/4 h-3/4 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 flex flex-col">
											<div className="flex items-center justify-between mb-4">
												<div className="w-1/2 h-6 bg-gray-200 dark:bg-gray-700 rounded"></div>
												<div className="flex space-x-2">
													<div className="w-6 h-6 bg-blue-500 rounded-full"></div>
													<div className="w-6 h-6 bg-gray-300 dark:bg-gray-600 rounded-full"></div>
												</div>
											</div>
											<div className="flex-1 grid grid-cols-2 gap-3">
												<div className="bg-gray-100 dark:bg-gray-700 rounded p-2">
													<div className="w-full h-3 bg-blue-200 dark:bg-blue-900 rounded mb-2"></div>
													<div className="w-3/4 h-3 bg-gray-300 dark:bg-gray-600 rounded"></div>
												</div>
												<div className="bg-gray-100 dark:bg-gray-700 rounded p-2">
													<div className="w-full h-3 bg-blue-200 dark:bg-blue-900 rounded mb-2"></div>
													<div className="w-3/4 h-3 bg-gray-300 dark:bg-gray-600 rounded"></div>
												</div>
												<div className="bg-gray-100 dark:bg-gray-700 rounded p-2">
													<div className="w-full h-3 bg-blue-200 dark:bg-blue-900 rounded mb-2"></div>
													<div className="w-3/4 h-3 bg-gray-300 dark:bg-gray-600 rounded"></div>
												</div>
												<div className="bg-gray-100 dark:bg-gray-700 rounded p-2">
													<div className="w-full h-3 bg-blue-200 dark:bg-blue-900 rounded mb-2"></div>
													<div className="w-3/4 h-3 bg-gray-300 dark:bg-gray-600 rounded"></div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section
					id="features"
					className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-800">
					<div className="container mx-auto max-w-7xl px-4 md:px-6">
						<div className="flex flex-col items-center justify-center space-y-4 text-center">
							<div className="space-y-2">
								<div className="inline-block rounded-lg bg-blue-500 px-3 py-1 text-sm text-white">
									Features
								</div>
								<h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-gray-900 dark:text-white">
									Everything you need to manage student fees
								</h2>
								<p className="max-w-[900px] text-gray-600 dark:text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
									Our comprehensive platform provides all the
									tools you need to streamline fee collection
									and management.
								</p>
							</div>
						</div>

						<div className="mt-12">
							<h3 className="text-2xl font-bold mb-6 text-center text-gray-900 dark:text-white">
								Student Management
							</h3>
							<div className="mx-auto grid max-w-5xl items-center gap-6 lg:grid-cols-2">
								<div className="grid gap-4">
									<div className="flex items-start gap-4">
										<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-500 text-white">
											<Users className="h-5 w-5" />
										</div>
										<div>
											<h4 className="text-lg font-bold text-gray-900 dark:text-white">
												Comprehensive Student Records
											</h4>
											<p className="text-gray-600 dark:text-gray-300">
												Store complete student
												information including personal
												details, contact information,
												and enrollment data.
											</p>
										</div>
									</div>
									<div className="flex items-start gap-4">
										<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-500 text-white">
											<Database className="h-5 w-5" />
										</div>
										<div>
											<h4 className="text-lg font-bold text-gray-900 dark:text-white">
												Department & Session
												Organization
											</h4>
											<p className="text-gray-600 dark:text-gray-300">
												Group students by department and
												academic session (e.g.,
												2018-2022).
											</p>
										</div>
									</div>
								</div>
								<div className="grid gap-4">
									<div className="flex items-start gap-4">
										<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-500 text-white">
											<Users className="h-5 w-5" />
										</div>
										<div>
											<h4 className="text-lg font-bold text-gray-900 dark:text-white">
												Bulk Operations
											</h4>
											<p className="text-gray-600 dark:text-gray-300">
												Perform actions on multiple
												students simultaneously.
											</p>
										</div>
									</div>
									<div className="flex items-start gap-4">
										<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-500 text-white">
											<Database className="h-5 w-5" />
										</div>
										<div>
											<h4 className="text-lg font-bold text-gray-900 dark:text-white">
												Advanced Filtering
											</h4>
											<p className="text-gray-600 dark:text-gray-300">
												Quickly find students based on
												various criteria.
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div className="mt-16">
							<h3 className="text-2xl font-bold mb-6 text-center text-gray-900 dark:text-white">
								Fee Management
							</h3>
							<div className="mx-auto grid max-w-5xl items-center gap-6 lg:grid-cols-2">
								<div className="grid gap-4">
									<div className="flex items-start gap-4">
										<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-teal-500 text-white">
											<Wallet className="h-5 w-5" />
										</div>
										<div>
											<h4 className="text-lg font-bold text-gray-900 dark:text-white">
												Fee Structure Definition
											</h4>
											<p className="text-gray-600 dark:text-gray-300">
												Set up different fee types with
												customizable amounts.
											</p>
										</div>
									</div>
									<div className="flex items-start gap-4">
										<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-teal-500 text-white">
											<Wallet className="h-5 w-5" />
										</div>
										<div>
											<h4 className="text-lg font-bold text-gray-900 dark:text-white">
												Payment Tracking
											</h4>
											<p className="text-gray-600 dark:text-gray-300">
												Record full and partial payments
												with receipt generation.
											</p>
										</div>
									</div>
								</div>
								<div className="grid gap-4">
									<div className="flex items-start gap-4">
										<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-teal-500 text-white">
											<Wallet className="h-5 w-5" />
										</div>
										<div>
											<h4 className="text-lg font-bold text-gray-900 dark:text-white">
												Due Calculation
											</h4>
											<p className="text-gray-600 dark:text-gray-300">
												Automatically calculate
												remaining balances.
											</p>
										</div>
									</div>
									<div className="flex items-start gap-4">
										<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-teal-500 text-white">
											<FileText className="h-5 w-5" />
										</div>
										<div>
											<h4 className="text-lg font-bold text-gray-900 dark:text-white">
												Payment History
											</h4>
											<p className="text-gray-600 dark:text-gray-300">
												View complete payment history
												for each student.
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div className="mt-16">
							<h3 className="text-2xl font-bold mb-6 text-center text-gray-900 dark:text-white">
								Reporting & Analytics
							</h3>
							<div className="mx-auto grid max-w-5xl items-center gap-6 lg:grid-cols-2">
								<div className="grid gap-4">
									<div className="flex items-start gap-4">
										<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-indigo-500 text-white">
											<BarChart3 className="h-5 w-5" />
										</div>
										<div>
											<h4 className="text-lg font-bold text-gray-900 dark:text-white">
												Financial Overview
											</h4>
											<p className="text-gray-600 dark:text-gray-300">
												Get a snapshot of fee collection
												status.
											</p>
										</div>
									</div>
									<div className="flex items-start gap-4">
										<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-indigo-500 text-white">
											<LineChart className="h-5 w-5" />
										</div>
										<div>
											<h4 className="text-lg font-bold text-gray-900 dark:text-white">
												Outstanding Dues Reports
											</h4>
											<p className="text-gray-600 dark:text-gray-300">
												Identify students with pending
												payments.
											</p>
										</div>
									</div>
								</div>
								<div className="grid gap-4">
									<div className="flex items-start gap-4">
										<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-indigo-500 text-white">
											<BarChart3 className="h-5 w-5" />
										</div>
										<div>
											<h4 className="text-lg font-bold text-gray-900 dark:text-white">
												Department-wise Analysis
											</h4>
											<p className="text-gray-600 dark:text-gray-300">
												Compare fee collection across
												departments.
											</p>
										</div>
									</div>
									<div className="flex items-start gap-4">
										<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-indigo-500 text-white">
											<FileText className="h-5 w-5" />
										</div>
										<div>
											<h4 className="text-lg font-bold text-gray-900 dark:text-white">
												Exportable Data
											</h4>
											<p className="text-gray-600 dark:text-gray-300">
												Export reports to CSV/Excel for
												further analysis.
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section
					id="benefits"
					className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-900">
					<div className="container mx-auto max-w-7xl px-4 md:px-6">
						<div className="flex flex-col items-center justify-center space-y-4 text-center">
							<div className="space-y-2">
								<div className="inline-block rounded-lg bg-blue-500 px-3 py-1 text-sm text-white">
									Benefits
								</div>
								<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900 dark:text-white">
									Why Choose Our Fee Management System?
								</h2>
								<p className="max-w-[900px] text-gray-600 dark:text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
									Designed by educators for educational
									institutions with practical needs in mind.
								</p>
							</div>
						</div>
						<div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-2">
							<div className="flex flex-col gap-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 transition-all hover:shadow-md">
								<h3 className="text-xl font-bold text-gray-900 dark:text-white">
									Time-Saving Efficiency
								</h3>
								<p className="text-gray-600 dark:text-gray-300">
									Reduce administrative workload by up to 70%
									with automated fee management processes.
								</p>
							</div>
							<div className="flex flex-col gap-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 transition-all hover:shadow-md">
								<h3 className="text-xl font-bold text-gray-900 dark:text-white">
									Enhanced Accuracy
								</h3>
								<p className="text-gray-600 dark:text-gray-300">
									Eliminate manual calculation errors and
									maintain consistent records across
									departments.
								</p>
							</div>
							<div className="flex flex-col gap-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 transition-all hover:shadow-md">
								<h3 className="text-xl font-bold text-gray-900 dark:text-white">
									Improved Financial Oversight
								</h3>
								<p className="text-gray-600 dark:text-gray-300">
									Gain complete visibility into fee collection
									status and identify trends with visual
									reports.
								</p>
							</div>
							<div className="flex flex-col gap-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 transition-all hover:shadow-md">
								<h3 className="text-xl font-bold text-gray-900 dark:text-white">
									Better Decision Making
								</h3>
								<p className="text-gray-600 dark:text-gray-300">
									Use data-driven insights to optimize fee
									structures and collection strategies.
								</p>
							</div>
						</div>
					</div>
				</section>

				<section
					id="tech-stack"
					className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-800">
					<div className="container mx-auto max-w-7xl px-4 md:px-6">
						<div className="flex flex-col items-center justify-center space-y-4 text-center">
							<div className="space-y-2">
								<div className="inline-block rounded-lg bg-blue-500 px-3 py-1 text-sm text-white">
									Tech Stack
								</div>
								<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900 dark:text-white">
									Built with Modern Technologies
								</h2>
								<p className="max-w-[900px] text-gray-600 dark:text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
									Our platform leverages the latest web
									technologies for optimal performance and
									developer experience.
								</p>
							</div>
						</div>
						<div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-3">
							<div className="flex flex-col items-center gap-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 text-center">
								<div className="flex h-12 w-12 items-center justify-center rounded-full bg-black text-white dark:bg-white dark:text-black">
									<svg
										viewBox="0 0 24 24"
										className="h-6 w-6"
										fill="currentColor">
										<path d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 0 1-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 0 0-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.25 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 0 0-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 0 1-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 0 1-.157-.171l-.05-.106.006-4.703.007-4.705.072-.092a.645.645 0 0 1 .174-.143c.096-.047.134-.051.54-.051.478 0 .558.018.682.154.035.038 1.337 1.999 2.895 4.361a10760.433 10760.433 0 0 0 4.735 7.17l1.9 2.879.096-.063a12.317 12.317 0 0 0 2.466-2.163 11.944 11.944 0 0 0 2.824-6.134c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747-.652-4.506-3.859-8.292-8.208-9.695a12.597 12.597 0 0 0-2.499-.523A33.119 33.119 0 0 0 11.573 0zm4.069 7.217c.347 0 .408.005.486.047a.473.473 0 0 1 .237.277c.018.06.023 1.365.018 4.304l-.006 4.218-.744-1.14-.746-1.14v-3.066c0-1.982.01-3.097.023-3.15a.478.478 0 0 1 .233-.296c.096-.05.13-.054.5-.054z" />
									</svg>
								</div>
								<h3 className="text-xl font-bold text-gray-900 dark:text-white">
									Next.js
								</h3>
								<p className="text-gray-600 dark:text-gray-300">
									React framework with App Router for both
									client and server components.
								</p>
							</div>
							<div className="flex flex-col items-center gap-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 text-center">
								<div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-500 text-white">
									<svg
										viewBox="0 0 24 24"
										className="h-6 w-6"
										fill="currentColor">
										<path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" />
									</svg>
								</div>
								<h3 className="text-xl font-bold text-gray-900 dark:text-white">
									TypeScript
								</h3>
								<p className="text-gray-600 dark:text-gray-300">
									Strongly typed programming language that
									builds on JavaScript for better tooling.
								</p>
							</div>
							<div className="flex flex-col items-center gap-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 text-center">
								<div className="flex h-12 w-12 items-center justify-center rounded-full bg-cyan-500 text-white">
									<svg
										viewBox="0 0 24 24"
										className="h-6 w-6"
										fill="currentColor">
										<path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z" />
									</svg>
								</div>
								<h3 className="text-xl font-bold text-gray-900 dark:text-white">
									Tailwind CSS
								</h3>
								<p className="text-gray-600 dark:text-gray-300">
									Utility-first CSS framework for rapid UI
									development with shadcn/ui components.
								</p>
							</div>
						</div>
					</div>
				</section>

				<section
					id="faq"
					className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-900">
					<div className="container mx-auto max-w-7xl px-4 md:px-6">
						<div className="flex flex-col items-center justify-center space-y-4 text-center">
							<div className="space-y-2">
								<div className="inline-block rounded-lg bg-blue-500 px-3 py-1 text-sm text-white">
									FAQ
								</div>
								<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900 dark:text-white">
									Frequently Asked Questions
								</h2>
								<p className="max-w-[900px] text-gray-600 dark:text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
									Get answers to common questions about our
									fee management system.
								</p>
							</div>
						</div>
						<div className="mx-auto grid max-w-5xl gap-8 py-12">
							<div className="grid gap-4 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6">
								<h3 className="text-xl font-bold text-gray-900 dark:text-white">
									Is this software free to use?
								</h3>
								<p className="text-gray-600 dark:text-gray-300">
									Yes, FeeTrak is completely open-source and
									free to use. You can download, modify, and
									distribute it under the MIT license.
								</p>
							</div>
							<div className="grid gap-4 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6">
								<h3 className="text-xl font-bold text-gray-900 dark:text-white">
									How do I deploy this for my institution?
								</h3>
								<p className="text-gray-600 dark:text-gray-300">
									You can either self-host the application on
									your servers or deploy it on platforms like
									Vercel. Detailed installation instructions
									are available in our GitHub repository.
								</p>
							</div>
							<div className="grid gap-4 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6">
								<h3 className="text-xl font-bold text-gray-900 dark:text-white">
									Can I customize it for my specific needs?
								</h3>
								<p className="text-gray-600 dark:text-gray-300">
									The codebase is designed to be modular and
									extensible. You can customize forms,
									reports, and workflows to match your
									institution&apos;s specific requirements.
								</p>
							</div>
							<div className="grid gap-4 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6">
								<h3 className="text-xl font-bold text-gray-900 dark:text-white">
									Is my data secure?
								</h3>
								<p className="text-gray-600 dark:text-gray-300">
									Yes, we prioritize data security. Since
									you&apos;ll be hosting the application, you
									maintain complete control over your data. We
									also follow best practices for secure
									authentication and data handling.
								</p>
							</div>
						</div>
					</div>
				</section>

				<section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-blue-500 to-indigo-600 text-white">
					<div className="container mx-auto max-w-7xl px-4 md:px-6">
						<div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
							<div className="flex flex-col justify-center space-y-4">
								<div className="space-y-2">
									<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
										Ready to streamline your fee management?
									</h2>
									<p className="max-w-[600px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed opacity-90">
										Join educational institutions that have
										simplified their fee management process.
										Get started today.
									</p>
								</div>
								<div className="flex flex-col gap-2 min-[400px]:flex-row">
									<Button
										size="lg"
										className="bg-white text-blue-600 hover:bg-gray-100"
										asChild>
										<Link href="/dashboard">
											Get Started Free
											<ArrowRight className="ml-2 h-4 w-4" />
										</Link>
									</Button>
									<Button
										size="lg"
										variant="outline"
										className="border-white text-white hover:bg-blue-600"
										asChild>
										<Link
											href="https://github.com/Maaz-Ahmed007/nextjs-student-fee-management-app"
											target="_blank">
											View on GitHub
										</Link>
									</Button>
								</div>
							</div>
							<div className="flex items-center justify-center">
								<div className="grid gap-1">
									<div className="grid grid-cols-2 gap-1">
										<div className="flex aspect-square items-center justify-center rounded-lg bg-white/10 p-4 backdrop-blur-sm">
											<Users className="h-10 w-10" />
										</div>
										<div className="flex aspect-square items-center justify-center rounded-lg bg-white/10 p-4 backdrop-blur-sm">
											<Database className="h-10 w-10" />
										</div>
									</div>
									<div className="grid grid-cols-2 gap-1">
										<div className="flex aspect-square items-center justify-center rounded-lg bg-white/10 p-4 backdrop-blur-sm">
											<Wallet className="h-10 w-10" />
										</div>
										<div className="flex aspect-square items-center justify-center rounded-lg bg-white/10 p-4 backdrop-blur-sm">
											<BarChart3 className="h-10 w-10" />
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</main>
			<footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
				<div className="flex items-center gap-2 font-bold">
					<Wallet className="h-5 w-5 text-blue-500" />
					<span>FeeTrak</span>
				</div>
				<p className="text-xs text-gray-500 dark:text-gray-400 sm:ml-auto">
					© {new Date().getFullYear()} FeeTrak. Open-source student
					fee management system.
				</p>
				<nav className="flex gap-4 sm:gap-6">
					<Link
						href="#"
						className="text-xs text-gray-500 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 hover:underline underline-offset-4">
						Terms
					</Link>
					<Link
						href="#"
						className="text-xs text-gray-500 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 hover:underline underline-offset-4">
						Privacy
					</Link>
					<Link
						href="https://github.com/Maaz-Ahmed007/nextjs-student-fee-management-app"
						target="_blank"
						className="text-xs text-gray-500 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 hover:underline underline-offset-4">
						GitHub
					</Link>
				</nav>
			</footer>
		</div>
	);
}
