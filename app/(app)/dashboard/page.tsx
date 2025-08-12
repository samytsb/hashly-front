"use client"

import { useEffect, useState } from "react"
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

interface CryptoData {
  name: string
  price: number
}

export default function DashboardPage() {
  const [data, setData] = useState<CryptoData[]>([])

  useEffect(() => {
    fetch("http://localhost:8080/crypto")
      .then((res) => res.json())
      .then((res) => {
        const chartData: CryptoData[] = [
          { name: "BTC", price: res.BTC ?? res.btc ?? 0 },
          { name: "ETH", price: res.ETH ?? res.eth ?? 0 },
          { name: "SOL", price: res.SOL ?? res.sol ?? 0 },
        ]
        setData(chartData)
      })
      .catch(() => setData([]))
  }, [])

  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>Cours des cryptos</CardTitle>
        </CardHeader>
        <CardContent className="h-72">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="price" fill="var(--color-chart-1)" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  )
}
