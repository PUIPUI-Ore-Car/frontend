import './network.css'

export default function Network (props) {
  const ssid = props.ssid
  const ip = props.ip
  return (
    <div className="network">
      <div className="wrapper">
        <p className="networkTitle">俺カーが接続中のネットワーク情報</p>
        <div className="networkData">
          <p>SSID:</p>
          <p style={{fontWeight: 'bold'}}>{ssid}</p>
        </div>
        <div className="networkData">
          <p>IPアドレス:</p>
          <p style={{fontWeight: 'bold'}}>{ip}</p>
        </div>
      </div>
    </div>
  )
}