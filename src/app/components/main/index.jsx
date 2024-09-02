// "use client"
import React from 'react';
import style from './style.module.css';
import { tableHead, tableBody } from './data';
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";
// Download dependencies
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { DownloadIcon } from 'lucide-react';

// import { Bar, BarChart } from "recharts"

// import { ChartConfig, ChartContainer } from "../../../components/ui/chart"


import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "../../../components/ui/card";
import {
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
    ChartLegend,
    ChartLegendContent
} from "../../../components/ui/chart";
import { Merged } from '../Merged';


const downloadPage = () => {
    console.log('I am working')
    window.print()
    // const input = document.getElementById('pdf-content');
    // Specify the id of the element you want to convert to PDF
    // html2canvas(input).then((canvas) => {
    //     const imgData = canvas.toDataURL('image/png');
    //     const pdf = new jsPDF();
    //     pdf.addImage(imgData, 'PNG', 0, 0);
    //     pdf.save('Result.pdf');
        // Specify the name of the downloaded PDF file
    // });
}


export const Main = () => {
    return (
        <main className={style.main}>
            <SpreadsheetTable tablehead={tableHead} tablebody={tableBody} id="downloadBtn"/>
            <SpreadsheetChart tablebody={tableBody} />
            <div>
                {/* <Merged  /> */}
                <button onClick={downloadPage} value="download" >
                    <DownloadIcon />Download
                </button>
            </div>
            {/* <Component/> */}
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

export const SpreadsheetChart = (props) => {
    const [total, setTotal] = React.useState()
    const [subject, setSubject] = React.useState()
    const chartData = props.tablebody;

    const chartConfig = {
        desktop: {
            label: "FIRST TERM",
            color: "#ffc0cb",
        },
    };

    return (
        <section className={style.sheetChart}>
            <h3>CUMULATIVE BAR CHART</h3>
            <Card>
                <CardContent className={style.container}>
                    <ChartContainer config={chartConfig}>

                        <BarChart accessibilityLayer data={chartData}>
                            <CartesianGrid />
                            <XAxis
                                dataKey="subject"
                                tickLine={false}
                                tickMargin={2}
                                // axisLine={false}
                                tickFormatter={(value) => value.slice(0, 3)}
                            />
                            <YAxis
                                dataKey="total"
                                tickLine={false}
                                tickMargin={2}
                            // axisLine={false}
                            // tickFormatter={(value) => value.slice(0, 3)}
                            />
                            <ChartTooltip
                                cursor={false}
                                content={<ChartTooltipContent />}
                            />
                            <ChartLegend content={<ChartLegendContent nameKey="desktop" />} />
                            <Bar dataKey="total" fill="var(--color-desktop)" tickFormatter={(value) => value} />
                        </BarChart>
                    </ChartContainer>
                </CardContent>
            </Card>
        </section>
    )
}



export const DownloadBtn = () => {
    // const downloadPage = () => {
    //     console.log('I am working')
    //     //     // text content
    //     //     const texts = ["line 1", "line 2", "line 3"]
    //     // // file object
    //     //     const file = new Blob(texts, {type: 'text/plain'});
    //     // // anchor link
    //     //     const element = document.createElement("a");
    //     //     element.href = URL.createObjectURL(file);
    //     //     element.download = "100ideas-" + Date.now() + ".txt";
    //     // // simulate link click
    //     //     document.body.appendChild(element); // Required for this to work in FireFox
    //     //     element.click();
    //     const input = document.getElementById('pdf-content');
    //     // Specify the id of the element you want to convert to PDF
    //     html2canvas(input).then((canvas) => {
    //         const imgData = canvas.toDataURL('image/png');
    //         const pdf = new jsPDF();
    //         pdf.addImage(imgData, 'PNG', 0, 0);
    //         pdf.save('Result.pdf');
    //         // Specify the name of the downloaded PDF file
    //     });
    // }

    // return (

    // )
}