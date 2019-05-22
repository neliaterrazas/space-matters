import React from 'react';
import Navbar from './components/firebase/Navbar';
import Dashboard from './components/themes/Dashboard';
import EventDetails from './components/themes/EventDetails';
import CreateEvent from './components/admin/CreateEvent'
import SignIn from './components/firebase/SignIn';
import SignUp from './components/firebase/SignUp';
import { BrowserRouter, Switch, Route, withRouter } from 'react-router-dom';
import styled from 'styled-components';



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
                <Route exact path='/' component={Dashboard}/>
                <Route path='/project/:id' component={EventDetails}/>
                <Route path='/signin' component={SignIn}/>
                <Route path='/signup' component={SignUp}/>
                <Route path='/create' component={CreateEvent}/>
              </Switch>
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
