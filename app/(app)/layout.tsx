import { Sidebar } from "@/components/sidebar"
import { ModeToggle } from "@/components/mode-toggle"
import { UserNav } from "@/components/user-nav"

export default function AppLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen flex">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <header className="flex h-14 items-center justify-end gap-2 border-b px-4">
          <ModeToggle />
          <UserNav />
        </header>
        <main className="flex-1 p-4">{children}</main>
      </div>
    </div>
  )
}
