import { useHistory } from 'react-router';
import { Card } from 'antd';
import styles from '../styles';

const { Meta } = Card;

export default function RestaurantCard({ rest }) {
  let history = useHistory();
  return(
    <Card
      style={styles.card}
      onClick={() => history.push('/details/' + rest.id)}
      hoverable
      cover={<img style={styles.cardImage} alt={rest.name} src={rest.photoUrl} />}>
      <Meta title={rest.name} description={rest.address} />
    </Card>
  )
}