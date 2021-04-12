
import './App.css';
import NavigationHeader from './component/navbar/Navbar'
import {BrowserRouter as Router, Switch, Redirect, Route} from  'react-router-dom'
import Home from './component/page/Home'
import Services from './component/page/Services'
import Products from './component/page/Products'
import ContactUs from './component/page/ContactUs'
import SignUp from './component/page/SignUp'



const App = () =>  {

  return (
    <Router>
    <div className="App">
      <NavigationHeader />
      <Switch>
        <Route path='/' component={Home} exact/>
        <Route path='/services' component={Services} exact/>
        <Route path='/products' component={Products} exact/>
        <Route path='/contact-us' component={ContactUs} exact/>
        <Route path='/sign-up' component={SignUp} exact/>
        <Redirect to='/'/>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
