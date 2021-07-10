import './temp.css'
export default function Temp (props) {
  const temp = props.temp
  const humidity = props.humidity
  return (
    <div className="temp">
      <div className="wrapper">
        <p className="tempTitle">おへやの温湿度</p>
        <div style={{display:'flex', alignItems: 'center', justifyContent: 'center'}}>
          <div>
            <div className="tempDisplay">
              <p className="tempData">{temp}</p>
              <p className="celsius">℃</p>
            </div>
            <p className="humidity">{humidity}%</p>
          </div>
        </div>
      </div>
    </div>
  )
}