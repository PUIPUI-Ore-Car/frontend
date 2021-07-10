import './odo.css'

export default function Odo (props) {
  const count = props.odo
  return (
    <div className="odo">
      <div className="wrapper">
        <p className="odoTitle">俺カーとの思い出</p>
        <p>俺カーはこれまで<span style={{fontWeight: 'bold'}}>{count}回</span>おしゃべりしました！</p>
      </div>
    </div>
  )
}