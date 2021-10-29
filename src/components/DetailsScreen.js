import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { RestaurantContext } from '../App';
import styles from '../styles';

export default function DetailsScreen() {
  const { restId } = useParams();
  const { restaurants, setRestaurants } = useContext(RestaurantContext);
  const [thisRest, setThisRest] = useState();
  useEffect(() => {
    if(restaurants && restId) {
      const _thisRest = restaurants.find(r => r.id === restId);
      setThisRest(_thisRest);
    }
  }, [restId, restaurants])
  if(!thisRest) {
    return <h2>Loading...</h2>
  }
  const addRating = (myRating) => {
    fetch('https://bocacode-intranet-api.web.app/restaurants/' + restId, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ rating: myRating })
    })
      .then(response => response.json())
      .then(setRestaurants)
      .catch(alert)
  }
  return (
    <div>
    <h2>{thisRest.name}</h2>
      <img src={thisRest.photoUrl} alt={thisRest.name} style={styles.detailsImage} />
      <h2 style={styles.cardTitle}>{thisRest.name}</h2>
      <p style={styles.cardSubtitle}>{thisRest.address}</p>
      <p style={styles.cardSubtitle}>Rating: {thisRest.rating}</p>
      <div>
        <h3>My Rating:</h3>
        <div style={{ flexDirection: 'row'}}>
          <button onClick={() => addRating(1)}>1</button>
          <button onClick={() => addRating(2)}>2</button>
          <button onClick={() => addRating(3)}>3</button>
          <button onClick={() => addRating(4)}>4</button>
          <button onClick={() => addRating(5)}>5</button>
        </div>
      </div>
    </div>
  )
}