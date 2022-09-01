import { Link } from "react-router-dom"
import Card from "../../shared/UIElements/Card/Card"
import PlaceItem from "./PlaceItem"

import "./PlaceList.scss"

const PlaceList = ({ places }) => {
  return (
    <>
      {places.length === 0 && (
        <div className="place-list center">
          <Card>
            <h2>No places found. May be create one</h2>
            <button>Share place</button>
          </Card>
        </div>
      )}
      <ul className="place-list">
        {places.map(place => (
          <PlaceItem
            key={place.id}
            id={place.id}
            image={place.image}
            title={place.title}
            description={place.description}
            address={place.address}
            creatorId={place.creator}
            coordinates={place.location}
          />
        ))}
      </ul>
    </>
  )
}

export default PlaceList
