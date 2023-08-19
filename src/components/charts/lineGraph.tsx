
// import React from 'react';
// import { Line } from 'react-chartjs-2';


// interface LineGraphProps {
//   data: any;
// }

// const LineGraph: React.FC<LineGraphProps> = ({ data }) => {
//   const dates = Object.keys(data.cases);
//   const cases = Object.values(data.cases);

//   console.log(dates);

//   const chartData = {
//     labels: dates,
//     datasets: [
//       {
//         label: 'Cases',
//         data: cases,
//         borderColor: 'rgba(75, 192, 192, 1)',
//         backgroundColor: 'rgba(75, 192, 192, 0.2)',
//         fill: true,
//       },
//     ],
//   };

//   const options:any = {
//     scales: {
//       x: {
//         type: 'time',
//         time: {
//           unit: 'day',
//           displayFormats: {
//             day: 'MMM D',
//           },
//         },
//         title: {
//           display: true,
//           text: 'Date',
//         },
//       },
//       y: {
//         title: {
//           display: true,
//           text: 'Cases',
//         },
//       },
//     },
//   };

//   return <Line data={chartData} options={options} />;
// };

// export default LineGraph;

import React from 'react'

function lineGraph() {
  return (
    <div>
      <h1>hhh</h1>
    </div>
  )
}

export default lineGraph
