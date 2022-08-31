import './Users.scss'
import UserList from '../../components/UserList/UserList'
// import Nyungwe from '../../../assets/images/nyungwe.jpg'

const Users = () => {
  // const USERS = []
  const USERS = [
    {      
    id: 1,
    image: '../../../assets/images/nyungwe.jpg',
    name: 'Abdullah Ita',
    places: 2
  },
  ]
  return (
    <div className='users'>
      <UserList items={USERS} />
    </div>
  )
}

export default Users