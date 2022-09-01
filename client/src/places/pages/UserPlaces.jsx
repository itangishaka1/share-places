import PlaceList from "../components/PlaceList"

const DUMMY_PLACES = [
    {
        id: 'p1',
        image: 'https://i0.wp.com/www.gorillasafaris-uganda.com/wp-content/uploads/2020/11/CHIMPS-trekking.jpg?fit=750%2C400&ssl=1',
        title: "Nyungwe Forest",
        description: "Best and long forest in Rwanda",
        address: 'KN6, Rusizi, Rwanda',
        creatorId: 'u1',
        location: {
            lat: -2.48125,
            lng: 29.220815
        },
    },
    {
        id: 'p2',
        image: 'https://i0.wp.com/www.gorillasafaris-uganda.com/wp-content/uploads/2020/11/CHIMPS-trekking.jpg?fit=750%2C400&ssl=1',
        title: "Nyungwe Forest",
        description: "Best and long forest in Rwanda",
        address: 'KN6, Rusizi, Rwanda',
        creatorId: 'u2',
        location: {
            lat: -2.48125,
            lng: 29.220815
        },
    },
]

const UserPlaces = () => {
  return <PlaceList places={DUMMY_PLACES} />
}

export default UserPlaces
