import "./UserItem.scss"

const UserItem = ({ id, image, name, placeCount }) => {
  return (
    <li className="userItem">
      <div className="userItem__content">
        <div className="userItem__image">
          <img src={image} alt={name}  />
        </div>
        <div className="userItem__info">
          <h2>{name}</h2>
          <h3>{placeCount} {placeCount === 1 ? ' place' : ' places'} </h3>
        </div>
      </div>
    </li>
  )
}

export default UserItem
