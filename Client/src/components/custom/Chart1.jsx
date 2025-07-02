"use client";

import {
  Bar,
  BarChart,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { ChartContainer } from "@/components/ui/chart";
import { Colors } from "@/constants/colors";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { TrendingUp } from "lucide-react";

const chartData = [
  { month: "January", suits: 186, kurtis: 80, jewellery: 50 },
  { month: "February", suits: 305, kurtis: 200, jewellery: 50 },
  { month: "March", suits: 237, kurtis: 120, jewellery: 50 },
  { month: "April", suits: 73, kurtis: 190, jewellery: 50 },
  { month: "May", suits: 209, kurtis: 130, jewellery: 50 },
  { month: "June", suits: 214, kurtis: 140, jewellery: 50 },
];

const chartConfig = {
  Suits: {
    label: "Suits",
    color: Colors.customGrey,
  },
  Kurtis: {
    label: "Kurtis",
    color: Colors.customYellow,
  },
  Jewellery: {
    label: "Jewellery",
    color: Colors.customIsabelline,
  },
};

export function Chart1() {
  return (
    <Card className="flex-1 rounded-xl bg-muted/50 md:min-hmin">
      <CardHeader>
        <CardTitle>Bar Chart - Multiple </CardTitle>
        <CardDescription> January - June 2025</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={chartData}>
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip
                contentStyle={{
                  backgroundColor: Colors.customBlack, // your desired background color (e.g. light yellow)
                  border: "1px solid #ffffff",
                  borderRadius: "8px",
                  color: "#000",
                }}
              />
              <Legend />
              <Bar dataKey="suits" fill={Colors.customGrey} radius={4} />
              <Bar dataKey="kurtis" fill={Colors.customYellow} radius={4} />
              <Bar
                dataKey="jewellery"
                fill={Colors.customIsabelline}
                radius={4}
              />
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>
        <CardFooter className="flex-col items-start gap-2 text-sm">
          <div className="flex gap-2 font-medium leading-none ">
            {" "}
            Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
          </div>
          <div className="leading-none text-muted-foreground">
            Showing total visitors for the last 6 months
          </div>
        </CardFooter>
      </CardContent>
    </Card>
  );
}
