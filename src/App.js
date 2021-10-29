import { createContext, useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import Home from './components/Home';
import RandomRestaurant from './components/RandomRestaurant';
import DetailsScreen from './components/DetailsScreen';

const { Header, Content } = Layout;

export const RestaurantContext = createContext();

function App() {
  const [restaurants, setRestaurants] = useState();
  return (
    <Router>
      <RestaurantContext.Provider value={{ restaurants, setRestaurants }}>
        <Layout>
          <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
            <Menu theme="dark" mode="horizontal">
              <Menu.Item key="1"><Link to="/">Home</Link></Menu.Item>
              <Menu.Item key="2"><Link to="/random">Random</Link></Menu.Item>
            </Menu>
          </Header>
          <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
            <Switch>
              <Route path="/details/:restId" component={DetailsScreen} />
              <Route path="/random" component={RandomRestaurant} />
              <Route path="/" component={Home} />
            </Switch>
          </Content>
        </Layout>
      </RestaurantContext.Provider>
    </Router>
  );
}

export default App;
