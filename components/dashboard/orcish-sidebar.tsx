"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { 
  LayoutDashboard, 
  LifeBuoy, 
  BarChart3, 
  FolderKanban, 
  Users, 
  Database, 
  FileText, 
  PenTool, 
  MoreHorizontal,
  Settings, 
  HelpCircle,
  Plus
} from "lucide-react";

const navigation = [
  {
    title: "Main Navigation",
    items: [
      {
        name: "Dashboard",
        href: "/dashboard",
        icon: LayoutDashboard,
      },
      {
        name: "Lifecycle",
        href: "/dashboard/lifecycle",
        icon: LifeBuoy,
      },
      {
        name: "Analytics",
        href: "/dashboard/analytics",
        icon: BarChart3,
      },
      {
        name: "Projects",
        href: "/dashboard/projects",
        icon: FolderKanban,
      },
      {
        name: "Team",
        href: "/dashboard/team",
        icon: Users,
      },
    ]
  },
  {
    title: "Documents",
    items: [
      {
        name: "Data Library",
        href: "/dashboard/data-library",
        icon: Database,
      },
      {
        name: "Reports",
        href: "/dashboard/reports",
        icon: FileText,
      },
      {
        name: "Word Assistant",
        href: "/dashboard/word-assistant",
        icon: PenTool,
      },
      {
        name: "More",
        href: "/dashboard/more",
        icon: MoreHorizontal,
      },
    ]
  },
  {
    title: "Other",
    items: [
      {
        name: "Settings",
        href: "/dashboard/settings",
        icon: Settings,
      },
      {
        name: "Get Help",
        href: "/dashboard/help",
        icon: HelpCircle,
      },
    ]
  },
];

export function OrcishSidebar() {
  const pathname = usePathname();

  return (
    <div className="flex h-full w-64 flex-col bg-gray-50 border-r border-gray-200">
      {/* Header */}
      <div className="flex h-16 items-center px-6 border-b border-gray-200">
        <h1 className="text-lg font-semibold text-gray-900">Orcish Dashboard</h1>
      </div>
      
      {/* Quick Create Button */}
      <div className="px-4 pt-4">
        <Button className="w-full bg-gray-700 hover:bg-gray-800 text-white">
          <Plus className="mr-2 h-4 w-4" />
          Quick Create
        </Button>
      </div>
      
      {/* Navigation */}
      <nav className="flex-1 space-y-6 px-4 py-6 overflow-y-auto">
        {navigation.map((section) => (
          <div key={section.title}>
            <h3 className="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
              {section.title}
            </h3>
            <div className="space-y-1">
              {section.items.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={cn(
                      "flex items-center rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                      isActive
                        ? "bg-gray-200 text-gray-900"
                        : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                    )}
                  >
                    <item.icon className="mr-3 h-4 w-4" />
                    {item.name}
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </nav>
      
      {/* User Profile Section */}
      <div className="border-t border-gray-200 p-4">
        <div className="flex items-center space-x-3">
          <div className="h-8 w-8 rounded-full bg-gray-300 flex items-center justify-center">
            <span className="text-sm font-medium text-gray-700">S</span>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-gray-900 truncate">
              shadcn
            </p>
            <p className="text-xs text-gray-500 truncate">
              m@example.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
