"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
	BarChart3,
	BookOpen,
	FileText,
	LayoutDashboard,
	LogOut,
	Settings,
	Users,
	Wallet,
} from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
	SidebarProvider,
	SidebarTrigger,
} from "@/components/ui/sidebar";
import { ModeToggle } from "@/components/mode-toggle";

interface Props {
	children: React.ReactNode;
}

export default function DashboardLayout({ children }: Props) {
	const pathname = usePathname();

	const routes = [
		{
			title: "Dashboard",
			href: "/dashboard",
			icon: LayoutDashboard,
		},
		{
			title: "Students",
			href: "/dashboard/students",
			icon: Users,
		},
		{
			title: "Departments",
			href: "/dashboard/departments",
			icon: BookOpen,
		},
		{
			title: "Sessions",
			href: "/dashboard/sessions",
			icon: FileText,
		},
		{
			title: "Fees",
			href: "/dashboard/fees",
			icon: Wallet,
		},
		{
			title: "Reports",
			href: "/dashboard/reports",
			icon: BarChart3,
		},
		{
			title: "Settings",
			href: "/dashboard/settings",
			icon: Settings,
		},
	];

	return (
		<SidebarProvider>
			<div className="flex min-h-screen bg-gray-100 dark:bg-gray-900">
				<Sidebar>
					<SidebarHeader className="flex h-14 items-center border-b px-6">
						<Link
							href="/dashboard"
							className="flex items-center gap-2 font-bold">
							<Wallet className="h-5 w-5 text-blue-500" />
							<span className="text-lg">FeeTrak</span>
						</Link>
					</SidebarHeader>
					<SidebarContent>
						<SidebarMenu>
							{routes.map((route) => (
								<SidebarMenuItem key={route.href}>
									<SidebarMenuButton
										asChild
										isActive={pathname === route.href}
										className={cn(
											"flex w-full items-center gap-2",
											pathname === route.href &&
												"bg-blue-50 text-blue-700 dark:bg-blue-900/20 dark:text-blue-400"
										)}>
										<Link href={route.href}>
											<route.icon className="h-5 w-5" />
											<span>{route.title}</span>
										</Link>
									</SidebarMenuButton>
								</SidebarMenuItem>
							))}
						</SidebarMenu>
					</SidebarContent>
					<SidebarFooter className="border-t p-4">
						<div className="flex items-center justify-between">
							<Button
								variant="ghost"
								size="sm"
								className="gap-2"
								asChild>
								<Link href="/">
									<LogOut className="h-4 w-4" />
									<span>Exit</span>
								</Link>
							</Button>
							<ModeToggle />
						</div>
					</SidebarFooter>
				</Sidebar>
				<div className="flex flex-1 flex-col">
					<header className="sticky top-0 z-10 flex h-14 items-center border-b bg-white px-6 dark:bg-gray-800">
						<SidebarTrigger />
						<div className="ml-auto flex items-center gap-4">
							<div className="flex items-center gap-2">
								<div className="h-8 w-8 rounded-full bg-blue-500 text-white flex items-center justify-center">
									<span className="text-sm font-medium">
										A
									</span>
								</div>
								<span className="text-sm font-medium">
									Admin
								</span>
							</div>
						</div>
					</header>
					<main className="flex-1 overflow-auto w-full p-6">{children}</main>
				</div>
			</div>
		</SidebarProvider>
	);
}
