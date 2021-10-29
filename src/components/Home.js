import { useEffect, useContext } from 'react';
import RestaurantCard from './RestaurantCard';
import { RestaurantContext } from '../App';
import styles from '../styles';

export default function Home() {
  const { restaurants, setRestaurants } = useContext(RestaurantContext);
  useEffect(() => {
    fetch('https://bocacode-intranet-api.web.app/restaurants')
      .then(response => response.json())
      .then(setRestaurants)
      .catch(alert)
  }, [])
  return (
    <section style={styles.container}>
      {!restaurants
        ? <h2>Loading...</h2>
        : restaurants.map(rest => <RestaurantCard key={rest.id} rest={rest} />)
      }
    </section>
  )
}
