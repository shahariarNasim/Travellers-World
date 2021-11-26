import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import AddService from './components/AddService/AddService';
import Login from './components/Authentication/Login';
import PrivateRoute from './components/Authentication/PrivateRoute';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Notfound from './components/Notfound/Notfound';
import ManageOrders from './components/Order/ManageOrders';
import Order from './components/Order/Order';
import Details from './components/Service/Details';
import Services from './components/Services/Services';
import AuthProvider from './context/AuthProvider';
function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>

          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/Home'>
              <Home></Home>
            </Route>
            <Route path='/Services'>
              <Services></Services>
            </Route>
            <PrivateRoute path='/Details/:key'>
              <Details></Details>
            </PrivateRoute>
            <PrivateRoute path='/addService'>
              <AddService></AddService>
            </PrivateRoute>
            <PrivateRoute path='/Order'>
              <Order></Order>
            </PrivateRoute>
            <PrivateRoute path='/ManageOrders'>
             <ManageOrders></ManageOrders>
            </PrivateRoute>
            <Route path='/login'>
              <Login></Login>
            </Route>
            <Route path='*'>
              <Notfound></Notfound>
            </Route>
          </Switch>

          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
