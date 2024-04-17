import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
// import { LineChart } from '@mui/x-charts/LineChart';
import { Gauge, gaugeClasses } from '@mui/x-charts/Gauge';
// import { PieChart } from '@mui/x-charts/PieChart';
// import Box from '@mui/material/Box';
import './overview.scss';
import { DataGrid } from '@mui/x-data-grid';
import { useDemoData } from '@mui/x-data-grid-generator';

// import { LineChart } from '@mui/x-charts/LineChart';
const VISIBLE_FIELDS = ['name', 'rating', 'country', 'isAdmin'];
function Overview() {
               const dataa = [
                              { id: 0, value: 10, label: 'series A' },
                              { id: 1, value: 15, label: 'series B' },
                              { id: 2, value: 20, label: 'series C' },
                            ];

                            const settings = {
                              width: 200,
                              height: 200,
                              value: 60,
                            };

                            const { data } = useDemoData({
                              dataSet: 'Employee',
                              visibleFields: VISIBLE_FIELDS,
                              rowLength: 100,
                            });
                           

  return (
    <>
      <div className="overviewContainer">
               <div className="top">
                        <div className="left">
                        <BarChart
      series={[
        { data: [3, 4, 1, 6, 5], stack: 'A', label: 'Series A1' },
        { data: [4, 3, 1, 5, 8], stack: 'A', label: 'Series A2' },
        { data: [4, 2, 5, 4, 1], stack: 'B', label: 'Series B1' },
        { data: [2, 8, 1, 3, 1], stack: 'B', label: 'Series B2' },
        { data: [10, 6, 5, 8, 9], label: 'Series C1' },
      ]}
      width={600}
      height={350}
    />
                        </div>
                        <div className="right">
                        <Gauge
      {...settings}
      cornerRadius="50%"
      sx={(theme) => ({
        [`& .${gaugeClasses.valueText}`]: {
          fontSize: 40,
        },
        [`& .${gaugeClasses.valueArc}`]: {
          fill: '#52b202',
        },
        [`& .${gaugeClasses.referenceArc}`]: {
          fill: theme.palette.text.disabled,
        },
      })}
    />
                       
                              </div>      
               </div>
               <div className="bottom">
               <div style={{ height: 300, width: '100%' }}>
      <DataGrid {...data} />
    </div>
               </div>
      </div>
    </>
  )
}

export default Overview
