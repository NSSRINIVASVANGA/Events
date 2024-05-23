import './index.css'

const EventItem = props => {
  const {details, onClicked, activeId} = props
  const {id, imageUrl, name, location} = details
  const eventClicked = () => {
    onClicked(id)
  }
  const classVal = activeId === id ? 'active' : 'inactive'
  return (
    <li className="event-item">
      <button className={classVal} onClick={eventClicked} type="button">
        <img src={imageUrl} alt="event" className="event-image" />
      </button>
      <p> {name} </p>
      <p> {location} </p>
    </li>
  )
}
export default EventItem
