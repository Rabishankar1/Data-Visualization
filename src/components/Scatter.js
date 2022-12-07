import React from 'react'
import ReactECharts from 'echarts-for-react';




function Scatter({ wineData }) {
    const options = {
        title: {
            text: "Hue vs Colour intensity",
            left:"80px"
        },
        grid: {
            bottom: '15%'
        },
        xAxis: {
            name: 'Color Intensity',
            nameLocation: "middle",
            nameTextStyle: {
                padding: [10, 0, 0, 0]
            },
            min: 0,
            type: "category",
            data: wineData.sort((a, b) => a["Color intensity"] - b["Color intensity"]).map(i => i["Color intensity"]),
        },
        yAxis: {
            type: "value",
            name: "Hue",
            nameLocation: "middle",
            nameTextStyle: {
                padding: [0, 0, 30, 0]
            },
        },
        series: [
            {
                name: 'Hue',
                type: 'scatter',
                data: wineData.sort((a, b) => a["Color intensity"] - b["Color intensity"]).map(i => i["Hue"]),
                itemStyle: {
                    color: 'rgba(210, 33, 33, 1)'
                }
            }
        ],
        tooltip: {
            trigger: 'axis',
        },
        legend: {
            top: "8%"
        }
    };

    return (
        <div className='chart-container'>
            <ReactECharts style={{marginTop: '15vh'}} option={options} />
        </div>
    )
}

export default Scatter