import React from 'react'
import ReactECharts from 'echarts-for-react';



function Bars({ wineData }) {

    const options = {
        title: {
            text: "Malic Acid vs Alcohol",
            left: "80px"
        },
        xAxis: {
            type: 'category',
            name: 'Alcohol',
            nameLocation: "middle",
            nameTextStyle: {
                padding: [10, 0, 0, 0]
            },
            data: wineData.map(i => i["Alcohol"]),
        },
        yAxis: {
            type: 'value',
            position: 'left',
            axisLabel: {
                formatter: '{value} ml'
            },
            name: "Malic Acid",
            nameLocation: "middle",
            nameTextStyle: {
                padding: [0, 0, 30, 0]
            },
        },
        series: [
            {
                name: "Malic Acid",
                data: wineData.map(i => i["Malic Acid"]),
                type: 'bar',
                smooth: true,
            },
        ],
        tooltip: {
            trigger: 'axis',
        },
        legend: {
            top: "8%"

        }
    };

    return (
        <>
            <ReactECharts style={{ marginTop: '15vh' }} option={options} />

        </>
    )
}

export default Bars