import UserList from '../../components/UserList/UserList'
import Nyungwe from '../../../assets/images/nyungwe.jpg'

const Users = () => {
  // const USERS = []
  const USERS = [
    {      
    id: 'u1',
    image: 'https://i0.wp.com/www.gorillasafaris-uganda.com/wp-content/uploads/2020/11/CHIMPS-trekking.jpg?fit=750%2C400&ssl=1',
    name: 'Abdullah Ita',
    places: 2
  },
  ]
  return (
    <section className='users'>
      <UserList items={USERS} />
    </section>
  )
}

export default Users