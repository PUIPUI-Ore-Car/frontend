import './graph.css'

import {ResponsiveContainer, LineChart, Tooltip, Legend, Line, CartesianGrid, XAxis, YAxis } from 'recharts'

export default function Graph (props) {
  const time = props.time
  const humi = props.humi
  const temp = props.temp
  console.log(time)
  console.log(humi)
  console.log(temp)

  const data = []

  for(let i = time.length - 1; i >= time.length - 6; i--){
    const tmp = {time: time[i*100], 温度: temp[i*100], 湿度: humi[i*100]}
    data.push(tmp)
  }
  console.log(data)

  return (
    <div className="graph">
      <div className="wrapper">
        <p className="graphTitle">温湿度履歴</p>
        <div style={{textAlign: 'center', marginTop: 30}}>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0}}>
            <Legend width={100} wrapperStyle={{ top: 5, right: 20, backgroundColor: 'rgba(137, 155, 64, 0.5)', border: '1px solid #323232', borderRadius: 3, lineHeight: '40px'}} />
              <Line type="monotone" dataKey="湿度" stroke="#f7ca00" />
              <Line type="monotone" dataKey="温度" stroke="#00fff7" />
              <CartesianGrid stroke="#323232" strokeDasharray="5 5" />
              <Tooltip content={<CustomTooltip />}/>
              <XAxis dataKey="time" stroke="#323232" axisLine={{ stroke: '#323232' }} />
              <YAxis stroke="#323232" axisLine={{ stroke: '#323232' }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  )
}

function CustomTooltip({ payload, label, active }) {
  console.log(payload)
  if (active) {
    return (
      <div className="custom-tooltip" style={{backgroundColor: 'rgba(0, 0, 0, 0.2)', padding: 20, borderRadius: 10}}>
        <p style={{fontWeight: 'bold', color: '#fff'}}>{label}</p>
        <hr />
        <p className="label" style={{color: '#fff', textAlign: 'left'}}>{`${payload[0].name} : ${payload[0].value}%`}</p>
        <p className="label" style={{color: '#fff', textAlign: 'left'}}>{`${payload[1].name} : ${payload[1].value}℃`}</p>
      </div>
    );
  }

  return null;
}