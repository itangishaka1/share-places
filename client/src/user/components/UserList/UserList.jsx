import UserItem from "./UserItem"
import Card from "../../../shared/UIElements/Card/Card"
import "./UserList.scss"


const UserList = ({ items }) => {
  return (
    <div className="users">
      {items.length === 0 && (
        <div className="users__list center">
          <Card>
             <h2>No users found</h2>
          </Card>
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
