import "./UserList.scss"
import UserItem from "./UserItem"

const UserList = ({ items }) => {
  return (
    <div className="users">
      {items.length === 0 && (
        <div className="center">
          <h2>No users found</h2>
        </div>
      )}
      <ul className="users__list">
        {items.map(user => (
          <UserItem
            key={user.id}
            id={user.id}
            image={user.image}
            name={user.name}
            placeCount={user.places}
          />
        ))}
      </ul>
    </div>
  )
}

export default UserList
