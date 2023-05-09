// import './charts.scss'
// import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';


// const data = [
// {name: 'January', total:1200},
// {name: 'February', total:100},
// {name: 'March', total:2200},
// {name: 'April', total:1600},
// {name: 'may', total:900},
// {name: 'June', total:1200},
//   ];

// function charts() {
//   return (
    
//     <div className='charts'>
//         <div className="title">Last 7 Months (Revenu)</div>
       
//          <ResponsiveContainer >
//          <AreaChart width={830} height={0} data={data}
//         margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
//   <defs>
//     <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
//       <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
//       <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
//     </linearGradient>
//   </defs>
//   <XAxis dataKey="name" />
//   <YAxis />
//   <CartesianGrid strokeDasharray="3 3" />
//   <Tooltip />
//   <Area type="monotone" dataKey="total" stroke="#8884d8" fillOpacity={1} fill="url(#total)" />
//   <Area type="monotone" dataKey="pv" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
// </AreaChart>
//       </ResponsiveContainer>
//          </div>

//   )
// }

// export default charts


import './charts.scss'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';


const data = [
  {name: 'January', total:1200},
  {name: 'February', total:100},
  {name: 'March', total:2200},
  {name: 'April', total:1600},
  {name: 'May', total:900},
  {name: 'June', total:1200},
];

function Charts() {
  return (
    <div className='charts'>
      <div className="title">Last 7 Months (Revenue)</div>
      <div className="chart-container">
        <ResponsiveContainer>
          <AreaChart
            width={830}
            height={0}
            data={data}
            margin={{ top: 10, right: 20, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <XAxis dataKey="name"  stroke='red'/>
            {/* <YAxis /> */}
            <CartesianGrid strokeDasharray="3 3" className="chartGrid"/>
            <Tooltip />
            <Area type="monotone" dataKey="total" stroke="#8884d8" fillOpacity={1} fill="url(#total)" />
            
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default Charts