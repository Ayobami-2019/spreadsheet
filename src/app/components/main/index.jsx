import style from './style.module.css'
import { tableHead, tableBody } from './data'
import { TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"
// import {
//     Card,
//     CardContent,
//     CardDescription,
//     CardFooter,
//     CardHeader,
//     CardTitle,
// } from "@/components/ui/card"
// import {
//     ChartConfig,
//     ChartContainer,
//     ChartTooltip,
//     ChartTooltipContent,
// } from "@/components/ui/chart"
// const chartConfig = {
//     desktop: {
//         label: "Desktop",
//         color: "hsl(var(--chart-1))",
//     },
// }
//   satisfies ChartConfig


export const Main = () => {
    return (
        <main className={style.main}>
            <SpreadsheetTable tablehead={tableHead} tablebody={tableBody} />
            <SpreadsheetChart />
        </main>
    )
}

export const SpreadsheetTable = (props) => {
    // console.log(props)
    return (
        <section className={style.sheetTable}>
            <table>
                <thead>
                    <tr>
                        {props.tablehead.map((heading) =>
                            heading.title ?
                                <th key={heading.id}>{heading.title} <br></br><span>[ {heading.total} ]</span></th> :
                                <th key={heading.id}>{heading}</th>
                        )}

                    </tr>
                </thead>
                <tbody>

                    {props.tablebody.map((data) =>
                        <tr key={data.id}>
                            <td>{data.id}</td>
                            <td>{data.subject}</td>
                            <td>{data.ca1}</td>
                            <td>{data.ca2}</td>
                            <td>{data.exam}</td>
                            <td>{data.clm}</td>
                            <td>{data.chm}</td>
                            <td>{data.total}</td>
                            <td>{data.grade}</td>

                        </tr>
                    )}


                </tbody>
            </table>
        </section>
    )
}

export const SpreadsheetChart = () => {


    return (
        <section className={style.sheetChart}>
            <h3>CUMULATIVE BAR CHART</h3>
            {/* <Card>
                <CardHeader>
                    <CardTitle>Bar Chart</CardTitle>
                    <CardDescription>January - June 2024</CardDescription>
                </CardHeader>
                <CardContent>
                    <ChartContainer config={chartConfig}>
                        <BarChart accessibilityLayer data={chartData}>
                            <CartesianGrid vertical={false} />
                            <XAxis
                                dataKey="month"
                                tickLine={false}
                                tickMargin={10}
                                axisLine={false}
                                tickFormatter={(value) => value.slice(0, 3)}
                            />
                            <ChartTooltip
                                cursor={false}
                                content={<ChartTooltipContent hideLabel />}
                            />
                            <Bar dataKey="desktop" fill="var(--color-desktop)" radius={8} />
                        </BarChart>
                    </ChartContainer>
                </CardContent>
                <CardFooter className="flex-col items-start gap-2 text-sm">
                    <div className="flex gap-2 font-medium leading-none">
                        Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
                    </div>
                    <div className="leading-none text-muted-foreground">
                        Showing total visitors for the last 6 months
                    </div>
                </CardFooter>
            </Card> */}
        </section>
    )
}