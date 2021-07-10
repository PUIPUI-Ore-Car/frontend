import './monitor.css'

import Temp from './temp'
import Network from './network'
import Odo from './odo'

import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'

export default function Monitor (props) {
  const url = '/api/'

  const [temp, updateTemp] = useState('--')
  const [humidity, updateHumidity] = useState('--')
  const [ssid, updateSsid] = useState('--')
  const [ipAddr, updateIpAddr] = useState('--')
  const [odoCount, updateOdoCount] = useState('--')
  // const [latestDate, updateLatestDate] = useState('--')

  useEffect(() => {
    axios.get(url).then((response) => {
      // 取得成功時
      console.log("取得成功", response.data)
      const data = response.data

      updateTemp(data.temp)
      updateHumidity(data.humidity)
      updateSsid(data.ssid)
      updateIpAddr(data.ipAddr)
      updateOdoCount(data.odo)
      // updateLatestDate(data.time)
    })
  }, [])
  return (
    <div className="monitor">
      <div className="wrapper">
        <Temp temp={temp} humidity={humidity} />
        <div className="rightSection">
          <Network ssid={ssid} ip={ipAddr} />
          <Odo odo={odoCount} />
        </div>
      </div>
    </div>
  )
}