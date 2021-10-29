import { useContext } from 'react';
import RestaurantCard from './RestaurantCard';
import { RestaurantContext } from '../App';
import styles from '../styles';

export default function Home() {
  const { restaurants } = useContext(RestaurantContext);
  return (
    <section style={styles.container}>
      {!restaurants
        ? <h2>Loading...</h2>
        : restaurants.map(rest => <RestaurantCard key={rest.id} rest={rest} />)
      }
    </section>
  )
}
