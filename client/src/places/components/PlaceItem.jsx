import { useState } from "react"
import Card from "../../shared/UIElements/Card/Card"
import Button from "../../shared/components/FormElements/Button/Button"
import Modal from "../../shared/UIElements/Modal/Modal"
import Map from "../../shared/UIElements/Map/Map"
import "./PlaceItem.scss"

const PlaceItem = ({
  id,
  image,
  title,
  description,
  address,
  creatorId,
  coordinates,
}) => {
  const [showMap, setShowMap] = useState(false)

  const openMapHandler = () => setShowMap(true)
  const closeMapHandler = () => setShowMap(false)

  return (
    <>
      <Modal
        show={showMap}
        onCancel={closeMapHandler}
        header={address}
        contentClass="place-item__model-content"
        footerClass="place-tem__model-actions"
        footer={<button onClick={closeMapHandler}>Close</button>}
      >
        <div className="mapContainer">
          <Map  center={coordinates} zoom={16} />
        </div>
      </Modal>
      <li className="place-item">
        <Card className="place-item__content">
          <div className="place-item__image">
            <img src={image} alt={title} />
          </div>
          <div className="place-item__info">
            <h2>{title}</h2>
            <h3>{address}</h3>
            <p>{description}</p>
          </div>
          <div className="place-item__actions">
            <Button inverse onClick={openMapHandler}>VIEW ON MAP</Button>
            <Button to={`/places/${id}`}>EDIT</Button>
            <Button danger>DELETE</Button>
          </div>
        </Card>
      </li>
    </>
  )
}

export default PlaceItem
