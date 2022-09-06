import { useParams } from 'react-router-dom'

import PlaceList from "../components/PlaceList"

const DUMMY_PLACES = [
    {
        id: 'p1',
        image: 'https://i0.wp.com/www.gorillasafaris-uganda.com/wp-content/uploads/2020/11/CHIMPS-trekking.jpg?fit=750%2C400&ssl=1',
        title: "Nyungwe Forest",
        description: "Nyungwe National Park lies in southwest Rwanda, partly abutting the Burundi border. It's a vast area of mountain rainforest, home to many species of chimpanzees, plus owl-faced and colobus monkeys.",
        address: 'KN6, Rusizi, Rwanda',
        creatorId: 'u1',
        location: {
            lat: -2.48125,
            lng: 29.220815
        },
    },
    {
        id: 'p2',
        image: 'https://www.safarisrwandasafari.com/wp-content/uploads/2019/08/Webp.net-compress-image-59.jpg',
        title: "Akagera National Park",
        description: "Akagera National Park lies in eastern Rwanda, hugging the border with Tanzania. It's characterized by woodland, swamps, low mountains and savannah.",
        address: "Easter Rwanda",
        creatorId: 'u2',
        location: {
            lat: 43.6837687, 
            lng: -79.346555,
        },
    },
]

const UserPlaces = () => {
    const userId = useParams().userId
    const loadedPlaces = DUMMY_PLACES.filter(place => place.creatorId === userId)
  return <PlaceList places={loadedPlaces} />
}

export default UserPlaces
