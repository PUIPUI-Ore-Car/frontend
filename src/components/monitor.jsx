import './monitor.css'

import Temp from './temp'
import Network from './network'
import Odo from './odo'
import Graph from './graph'

import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'

export default function Monitor (props) {
  const url = '/api/'
  const allDataUrl = '/api/getAllData/'

  const [temp, updateTemp] = useState('--')
  const [humidity, updateHumidity] = useState('--')
  const [ssid, updateSsid] = useState('--')
  const [ipAddr, updateIpAddr] = useState('--')
  const [odoCount, updateOdoCount] = useState('--')
  const [latestDate, updateLatestDate] = useState(<span style={{paddingLeft: 3, textDecoration: 'bold'}}>情報を取得しています……</span>)
  const [tempList, setTempList] = useState([])
  const [humiList, setHumiList] = useState([])
  const [timeList, setTimeList] = useState([])

  const fetchData = () => {
    axios.get(url).then((response) => {
      // 取得成功時
      console.log("取得成功", response.data)
      const data = response.data

      updateTemp(data.temp)
      updateHumidity(data.humidity)
      updateSsid(data.ssid)
      updateIpAddr(data.ipAddr)
      updateOdoCount(data.odo)
      updateLatestDate(data.time)
    })
  }
  const fetchAllData = () => {
    axios.get(allDataUrl).then((response) => {
      // 取得成功時
      console.log("取得成功", response.data)
      const data = response.data

      setTempList(data.temp)
      setHumiList(data.humidity)
      setTimeList(data.time)
    })
  }

  useEffect(() => {
    // 初回フェッチ
    console.log('初回フェッチ')
    fetchData()
    fetchAllData()

    // 数秒おきに取得する
    setInterval(() => {
      console.log("取得します")
      fetchData()
    }, 10000)
  }, [])
  return (
    <>
    <p style={{padding: 5, fontSize: 10}}>最終更新:{latestDate}</p>
    <div className="monitor">
      <div className="wrapper">
        <Temp temp={temp} humidity={humidity} />
        <div className="rightSection" style={{flexGrow: 1, marginLeft: 5}}>
          <Network ssid={ssid} ip={ipAddr} />
          <Odo odo={odoCount} />
        </div>
      </div>
      <Graph temp={tempList} humi={humiList} time={timeList} />
    </div>
    </>
  )
}