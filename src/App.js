import React from 'react';
import Navbar from './components/firebase/Navbar';
import Footer from './components/firebase/Footer';
import Dashboard from './components/admin/Dashboard';
import EventDetails from './components/EventDetails';
import CreateEvent from './components/admin/CreateEvent'
import SignIn from './components/firebase/SignIn';
import SignUp from './components/firebase/SignUp';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Seventies from './components/themes/Seventies';
import Tropical from './components/themes/Tropical';
import Sterile from './components/themes/Sterile';




class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
    };

  }
  render(){
      return (
        <BrowserRouter>
          <div>
            <Navbar/>
              <Switch>
                <Route exact path='/' component={Seventies}/>
                <Route path='/project/:id' component={EventDetails}/>
                <Route path='/signin' component={SignIn}/>
                <Route path='/signup' component={SignUp}/>
                <Route path='/create' component={CreateEvent}/>

                <Route path='/dos' component={Tropical}/>
                <Route path='/tres' component={Sterile}/>

              </Switch>
              <Footer/>
          </div>

        </BrowserRouter>
        );
      }
    }

export default App;







// <ThemeProvider theme={this.state.theme}>
//
//     <ThemeChanger
//       onChangeTheme={this.handleThemeChange}
//       themes={Object.keys(themes)}
//     />
// </ThemeProvider>
