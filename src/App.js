import React from 'react';
import Navbar from './components/firebase/Navbar';
import Dashboard from './components/admin/Dashboard';
import EventDetails from './components/EventDetails';
import CreateEvent from './components/admin/CreateEvent';
import CreateReflection from './components/admin/CreateReflection';
import SignIn from './components/firebase/SignIn';
import SignUp from './components/firebase/SignUp';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Seventies from './components/themes/Seventies';
import Tropical from './components/themes/Tropical';
import Sterile from './components/themes/Sterile';
import PieChart from './components/react-vis/PieChart';
import * as V from 'victory';




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
                <Route path='/createevent' component={CreateEvent}/>
                <Route path='/uno' component={Seventies}/>
                <Route path='/dos' component={Tropical}/>
                <Route path='/tres' component={Sterile}/>
                <Route path='/createreflection' component={CreateReflection}/>

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
