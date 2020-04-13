import React, { Component } from 'react';
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import FunkopopsSecretPage from '../FunkopopsSecretPage/FunkopopsSecretPage'
import * as funkopopAPI from '../../services/funkopop-api';
import * as userAPI from '../../services/user-api';
import Funkopop from '../../components/Funkopop/Funkopop'
import NavBar from '../../components/NavBar/NavBar'
import AddFunko from '../AddFunko/AddFunko';
import Wishlist from '../Wishlist/Wishlist';
import FunkoCollection from '../FunkoCollection/FunkoCollection';

class App extends Component {
  state = {
    // Initialize user if there's a token, otherwise null
    user: userAPI.getUser(),
    funkopops: []
  };

  /*--------------------------- Callback Methods ---------------------------*/

  handleLogout = () => {
    userAPI.logout();
    this.setState({ user: null });
  }
  handleSignupOrLogin = () => {
    this.setState({user: userAPI.getUser()});
  }

  /*-------------------------- Lifecycle Methods ---------------------------*/

  async componentDidMount() {
    const funkopops = await funkopopAPI.index();
    this.setState({ funkopops });
  }

  /*-------------------------------- Render --------------------------------*/

  render() {
    return (
      <div className="App">
        <h1>Welcome to Funkopop</h1>
        <NavBar
          user={this.state.user}
          handleLogout={this.handleLogout}
        />
        <Switch>
          <Route exact path='/login' render={({ history }) => 
            <LoginPage
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          }/>
          <Route exact path='/signup' render={({ history }) => 
            <SignupPage
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          }/>
          <Route exact path='/funkopop-secret' render={() => 
            userAPI.getUser() ? 
              <FunkopopsSecretPage />
            :
              <Redirect to='/login'/>
          }/>
          <Route exact path="/funkos" render={() => 
            <FunkoCollection />
          }/>
          <Route exact path="/wishlist" render={() =>
            <Wishlist />
          } />
        </Switch>
      </div>
    );
  }
}

export default App;
