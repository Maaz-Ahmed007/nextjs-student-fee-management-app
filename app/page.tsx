import Link from "next/link";
import Image from "next/image";
import {
	ArrowRight,
	BarChart3,
	BookOpen,
	Calendar,
	CheckCircle,
	CreditCard,
	Database,
	FileText,
	Layers,
	Users,
} from "lucide-react";

import { Button } from "@/components/ui/button";

export default function Home() {
	return (
		<div className="flex min-h-screen flex-col">
			<header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
				<div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
					<div className="flex gap-2 items-center text-xl font-bold">
						<CreditCard className="h-6 w-6" />
						<span>FeePay</span>
					</div>
					<div className="flex flex-1 items-center justify-end space-x-4">
						<nav className="flex items-center space-x-1">
							<Link
								href="#features"
								className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
								Features
							</Link>
							<Link
								href="#how-it-works"
								className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
								How It Works
							</Link>
							<Link
								href="#faq"
								className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
								FAQ
							</Link>
							<Link
								href="https://github.com/Maaz-Ahmed007/nextjs-student-fee-management-app"
								className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
								GitHub
							</Link>
							<Link href="/dashboard">
								<Button>Get Started</Button>
							</Link>
						</nav>
					</div>
				</div>
			</header>
			<main className="flex-1">
				<section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
					<div className="container px-4 md:px-6">
						<div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
							<div className="flex flex-col justify-center space-y-4">
								<div className="space-y-2">
									<h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
										Simplify Student Fee Management
									</h1>
									<p className="max-w-[600px] text-muted-foreground md:text-xl">
										A comprehensive solution for educational
										institutions to manage student fees,
										track payments, and generate reports.
									</p>
								</div>
								<div className="flex flex-col gap-2 min-[400px]:flex-row">
									<Link href="/dashboard">
										<Button size="lg" className="gap-1.5">
											Get Started
											<ArrowRight className="h-4 w-4" />
										</Button>
									</Link>
									<Link href="https://github.com/Maaz-Ahmed007/nextjs-student-fee-management-app">
										<Button size="lg" variant="outline">
											View on GitHub
										</Button>
									</Link>
								</div>
								<div className="flex items-center space-x-4 text-sm">
									<div className="flex items-center gap-1">
										<CheckCircle className="h-4 w-4 text-primary" />
										<span>Free & Open Source</span>
									</div>
									<div className="flex items-center gap-1">
										<CheckCircle className="h-4 w-4 text-primary" />
										<span>Easy to Deploy</span>
									</div>
									<div className="flex items-center gap-1">
										<CheckCircle className="h-4 w-4 text-primary" />
										<span>Modern UI</span>
									</div>
								</div>
							</div>
							<div className="flex items-center justify-center">
								<div className="relative w-full aspect-video overflow-hidden rounded-xl border bg-gradient-to-b from-background/10 to-background/50 p-1 shadow-xl shadow-black/5">
									<Image
										src="/placeholder.svg?height=720&width=1280"
										width={1280}
										height={720}
										alt="Dashboard Preview"
										className="rounded-lg object-cover"
									/>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section
					id="features"
					className="w-full py-12 md:py-24 lg:py-32 bg-muted/40">
					<div className="container px-4 md:px-6">
						<div className="flex flex-col items-center justify-center space-y-4 text-center">
							<div className="space-y-2">
								<div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
									Features
								</div>
								<h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
									Everything you need to manage student fees
								</h2>
								<p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
									Our platform provides a comprehensive
									solution for educational institutions to
									manage student fees efficiently.
								</p>
							</div>
						</div>
						<div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
							<div className="grid gap-4">
								<div className="flex items-center gap-4 rounded-lg border p-4">
									<Users className="h-8 w-8 text-primary" />
									<div>
										<h3 className="font-semibold">
											Student Management
										</h3>
										<p className="text-sm text-muted-foreground">
											Add, edit, and manage student
											profiles with ease.
										</p>
									</div>
								</div>
								<div className="flex items-center gap-4 rounded-lg border p-4">
									<Database className="h-8 w-8 text-primary" />
									<div>
										<h3 className="font-semibold">
											Fee Structure
										</h3>
										<p className="text-sm text-muted-foreground">
											Define custom fee structures for
											different departments and sessions.
										</p>
									</div>
								</div>
								<div className="flex items-center gap-4 rounded-lg border p-4">
									<CreditCard className="h-8 w-8 text-primary" />
									<div>
										<h3 className="font-semibold">
											Payment Tracking
										</h3>
										<p className="text-sm text-muted-foreground">
											Record and track fee payments with
											detailed history.
										</p>
									</div>
								</div>
							</div>
							<div className="grid gap-4">
								<div className="flex items-center gap-4 rounded-lg border p-4">
									<Calendar className="h-8 w-8 text-primary" />
									<div>
										<h3 className="font-semibold">
											Session Management
										</h3>
										<p className="text-sm text-muted-foreground">
											Organize students by academic
											sessions and years.
										</p>
									</div>
								</div>
								<div className="flex items-center gap-4 rounded-lg border p-4">
									<BookOpen className="h-8 w-8 text-primary" />
									<div>
										<h3 className="font-semibold">
											Department Filtering
										</h3>
										<p className="text-sm text-muted-foreground">
											Sort and filter students by
											departments and programs.
										</p>
									</div>
								</div>
								<div className="flex items-center gap-4 rounded-lg border p-4">
									<FileText className="h-8 w-8 text-primary" />
									<div>
										<h3 className="font-semibold">
											Due Management
										</h3>
										<p className="text-sm text-muted-foreground">
											Track outstanding dues and send
											automated reminders.
										</p>
									</div>
								</div>
							</div>
							<div className="grid gap-4">
								<div className="flex items-center gap-4 rounded-lg border p-4">
									<BarChart3 className="h-8 w-8 text-primary" />
									<div>
										<h3 className="font-semibold">
											Reports & Analytics
										</h3>
										<p className="text-sm text-muted-foreground">
											Generate comprehensive reports on
											fee collection and dues.
										</p>
									</div>
								</div>
								<div className="flex items-center gap-4 rounded-lg border p-4">
									<Layers className="h-8 w-8 text-primary" />
									<div>
										<h3 className="font-semibold">
											Multi-user Access
										</h3>
										<p className="text-sm text-muted-foreground">
											Role-based access for administrators
											and accountants.
										</p>
									</div>
								</div>
								<div className="flex items-center gap-4 rounded-lg border p-4">
									<CheckCircle className="h-8 w-8 text-primary" />
									<div>
										<h3 className="font-semibold">
											Open Source
										</h3>
										<p className="text-sm text-muted-foreground">
											Free to use, modify, and deploy for
											your institution.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section
					id="how-it-works"
					className="w-full py-12 md:py-24 lg:py-32">
					<div className="container px-4 md:px-6">
						<div className="flex flex-col items-center justify-center space-y-4 text-center">
							<div className="space-y-2">
								<div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
									How It Works
								</div>
								<h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
									Streamlined Fee Management Process
								</h2>
								<p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
									Our platform simplifies the entire fee
									management workflow for educational
									institutions.
								</p>
							</div>
						</div>
						<div className="mx-auto grid max-w-5xl gap-8 py-12 lg:grid-cols-3">
							<div className="flex flex-col items-center space-y-4 text-center">
								<div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-3xl font-bold text-primary-foreground">
									1
								</div>
								<h3 className="text-xl font-bold">
									Add Students
								</h3>
								<p className="text-muted-foreground">
									Create student profiles with all necessary
									details including department, session, and
									contact information.
								</p>
							</div>
							<div className="flex flex-col items-center space-y-4 text-center">
								<div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-3xl font-bold text-primary-foreground">
									2
								</div>
								<h3 className="text-xl font-bold">
									Set Fee Structure
								</h3>
								<p className="text-muted-foreground">
									Define fee structures for different
									departments, sessions, and semesters with
									customizable fee components.
								</p>
							</div>
							<div className="flex flex-col items-center space-y-4 text-center">
								<div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-3xl font-bold text-primary-foreground">
									3
								</div>
								<h3 className="text-xl font-bold">
									Manage Payments
								</h3>
								<p className="text-muted-foreground">
									Record payments, track dues, generate
									receipts, and get insights through
									comprehensive reports.
								</p>
							</div>
						</div>
						<div className="flex justify-center">
							<div className="relative w-full max-w-4xl overflow-hidden rounded-xl border shadow-xl">
								<Image
									src="/placeholder.svg?height=720&width=1280"
									width={1280}
									height={720}
									alt="System Workflow"
									className="object-cover"
								/>
							</div>
						</div>
					</div>
				</section>
				<section className="w-full py-12 md:py-24 lg:py-32 bg-muted/40">
					<div className="container px-4 md:px-6">
						<div className="flex flex-col items-center justify-center space-y-4 text-center">
							<div className="space-y-2">
								<div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
									Testimonials
								</div>
								<h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
									Trusted by Educational Institutions
								</h2>
								<p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
									See what administrators and accountants are
									saying about our fee management system.
								</p>
							</div>
						</div>
						<div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2">
							<div className="rounded-lg border bg-background p-6">
								<div className="flex flex-col gap-4">
									<div className="flex gap-4 items-center">
										<div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center">
											<Users className="h-6 w-6" />
										</div>
										<div>
											<h3 className="font-semibold">
												Sarah Johnson
											</h3>
											<p className="text-sm text-muted-foreground">
												Financial Administrator, City
												College
											</p>
										</div>
									</div>
									<p className="text-muted-foreground">
										"This system has transformed how we
										manage student fees. What used to take
										days now takes minutes, and we have
										complete visibility into our financial
										status."
									</p>
								</div>
							</div>
							<div className="rounded-lg border bg-background p-6">
								<div className="flex flex-col gap-4">
									<div className="flex gap-4 items-center">
										<div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center">
											<Users className="h-6 w-6" />
										</div>
										<div>
											<h3 className="font-semibold">
												Michael Chen
											</h3>
											<p className="text-sm text-muted-foreground">
												Accountant, Tech University
											</p>
										</div>
									</div>
									<p className="text-muted-foreground">
										"The ability to filter students by
										department and session has made our
										semester fee collection process
										incredibly efficient. Highly
										recommended!"
									</p>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section id="faq" className="w-full py-12 md:py-24 lg:py-32">
					<div className="container px-4 md:px-6">
						<div className="flex flex-col items-center justify-center space-y-4 text-center">
							<div className="space-y-2">
								<div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
									FAQ
								</div>
								<h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
									Frequently Asked Questions
								</h2>
								<p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
									Find answers to common questions about our
									student fee management system.
								</p>
							</div>
						</div>
						<div className="mx-auto grid max-w-5xl gap-6 py-12">
							<div className="rounded-lg border p-6">
								<h3 className="text-lg font-semibold">
									Is this system completely free to use?
								</h3>
								<p className="mt-2 text-muted-foreground">
									Yes, FeePay is completely free and open
									source. You can use it, modify it, and
									deploy it for your institution without any
									licensing fees.
								</p>
							</div>
							<div className="rounded-lg border p-6">
								<h3 className="text-lg font-semibold">
									What technical skills do I need to deploy
									this system?
								</h3>
								<p className="mt-2 text-muted-foreground">
									Basic knowledge of web hosting and databases
									is helpful. We provide detailed
									documentation for deployment on various
									platforms, making it accessible even for
									those with limited technical expertise.
								</p>
							</div>
							<div className="rounded-lg border p-6">
								<h3 className="text-lg font-semibold">
									Can I customize the system for my
									institution's specific needs?
								</h3>
								<p className="mt-2 text-muted-foreground">
									Being open source, you can modify any aspect
									of the system to fit your institution's
									specific requirements. The codebase is
									well-documented to facilitate customization.
								</p>
							</div>
							<div className="rounded-lg border p-6">
								<h3 className="text-lg font-semibold">
									How secure is the student and payment data?
								</h3>
								<p className="mt-2 text-muted-foreground">
									Security is a top priority. The system
									implements industry-standard security
									practices, including encrypted data storage,
									secure authentication, and role-based access
									control to protect sensitive information.
								</p>
							</div>
							<div className="rounded-lg border p-6">
								<h3 className="text-lg font-semibold">
									Can I contribute to the development of this
									project?
								</h3>
								<p className="mt-2 text-muted-foreground">
									We welcome contributions! Check out our
									GitHub repository for contribution
									guidelines, open issues, and ways to get
									involved in improving the system for
									educational institutions worldwide.
								</p>
							</div>
						</div>
					</div>
				</section>
				<section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
					<div className="container px-4 md:px-6">
						<div className="flex flex-col items-center justify-center space-y-4 text-center">
							<div className="space-y-2">
								<h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
									Ready to simplify your fee management?
								</h2>
								<p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
									Get started with FeePay today and transform
									how your institution manages student fees.
								</p>
							</div>
							<div className="flex flex-col gap-2 min-[400px]:flex-row">
								<Link href="/dashboard">
									<Button
										size="lg"
										variant="secondary"
										className="gap-1.5">
										Get Started
										<ArrowRight className="h-4 w-4" />
									</Button>
								</Link>
								<Link href="https://github.com/Maaz-Ahmed007/nextjs-student-fee-management-app">
									<Button
										size="lg"
										variant="outline"
										className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
										View on GitHub
									</Button>
								</Link>
							</div>
						</div>
					</div>
				</section>
			</main>
			<footer className="w-full border-t py-6 md:py-0">
				<div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
					<div className="flex gap-2 items-center text-lg font-semibold">
						<CreditCard className="h-5 w-5" />
						<span>FeePay</span>
					</div>
					<p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
						Built with ❤️ for educational institutions. Open source
						and free to use.
					</p>
					<div className="flex items-center gap-4">
						<Link
							href="https://github.com/Maaz-Ahmed007/nextjs-student-fee-management-app"
							className="text-sm text-muted-foreground underline underline-offset-4">
							GitHub
						</Link>
						<Link
							href="#"
							className="text-sm text-muted-foreground underline underline-offset-4">
							Documentation
						</Link>
						<Link
							href="#"
							className="text-sm text-muted-foreground underline underline-offset-4">
							License
						</Link>
					</div>
				</div>
			</footer>
		</div>
	);
}