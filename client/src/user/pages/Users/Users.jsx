

import UserList from '../../components/UserList/UserList'

const Users = () => {
  // const USERS = []
  const USERS = [
    {      
    id: 'u1',
    image: 'https://i0.wp.com/www.gorillasafaris-uganda.com/wp-content/uploads/2020/11/CHIMPS-trekking.jpg?fit=750%2C400&ssl=1',
    name: 'Abdullah Ita',
    places: 2
  },
    {      
    id: 'u2',
    image: 'https://www.safarisrwandasafari.com/wp-content/uploads/2019/08/Webp.net-compress-image-59.jpg',
    name: 'Akil Ita',
    places: 4
  },
  ]
  return (
    <section className='users'>
      <UserList items={USERS} />
    </section>
  )
}

export default Users