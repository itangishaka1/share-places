import { Link } from "react-router-dom"
import "./UserItem.scss"
import Avatar from "../../../shared/UIElements/Avatar/Avatar"
import Card from "../../../shared/UIElements/Card/Card"

const UserItem = ({ id, image, name, placeCount }) => {
  return (
    <li className="userItem">
      <Card className="userItem__content">
        <Link to={`/${id}/places`}>
          <div className="userItem__image">
            <Avatar image={image} alt={name} />
          </div>
          <div className="userItem__info">
            <h2>{name}</h2>
            <h3>
              {placeCount} {placeCount === 1 ? " place" : " places"}{" "}
            </h3>
          </div>
        </Link>
      </Card>
    </li>
  )
}

export default UserItem
