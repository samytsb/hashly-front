import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Cpu, Users, Server, Wallet, type LucideIcon } from "lucide-react"

interface FeatureProps {
  icon: LucideIcon
  title: string
  description: string
}

function Feature({ icon: Icon, title, description }: FeatureProps) {
  return (
    <div className="flex flex-col items-center text-center gap-2 p-6 bg-card rounded-lg shadow">
      <Icon className="h-8 w-8 text-primary" />
      <h3 className="font-semibold">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  )
}

export default function Home() {
  return (
    <div className="flex flex-col">
      <section className="py-24 bg-gradient-to-b from-background via-background to-muted">
        <div className="container mx-auto px-6 text-center space-y-6">
          <h1 className="text-5xl font-bold tracking-tight">
            Construisez votre empire de minage
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Hashly est un jeu de gestion où vous optimisez vos rigs, vos équipes et vos ressources pour miner des crypto-monnaies.
          </p>
          <Button asChild size="lg">
            <Link href="/login">Accéder à l&apos;app</Link>
          </Button>
        </div>
      </section>
      <section className="container mx-auto px-6 py-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <Feature icon={Server} title="Infrastructure" description="Planifiez vos data centers et gardez vos serveurs opérationnels." />
        <Feature icon={Cpu} title="Rigs" description="Assemblez des machines performantes pour un hash rate maximal." />
        <Feature icon={Users} title="Employés" description="Recrutez des experts pour gérer vos opérations quotidiennes." />
        <Feature icon={Wallet} title="Ressources" description="Surveillez l'énergie et les finances pour rester rentable." />
      </section>
    </div>
  )
}
