import Link from "next/link"
import { LayoutDashboard } from "lucide-react"
import { cn } from "@/lib/utils"

const items = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
]

export function Sidebar() {
  return (
    <aside className="w-64 border-r bg-sidebar text-sidebar-foreground">
      <div className="p-4 text-2xl font-bold">Hashly</div>
      <nav className="space-y-1 px-2">
        {items.map(({ href, label, icon: Icon }) => (
          <Link
            key={href}
            href={href}
            className={cn(
              "flex items-center gap-2 rounded-md px-2 py-2 text-sm hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
            )}
          >
            <Icon className="h-4 w-4" />
            {label}
          </Link>
        ))}
      </nav>
    </aside>
  )
}
