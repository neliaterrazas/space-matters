import React from 'react';

import styled from 'styled-components';

// import ThemeChanger from './ThemeChanger';
// import { ThemeProvider } from '@callstack/react-theme-provider';

import './App.css';

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      
    };
    //
    // handleThemeChange = (themeName: string) => {
    //   this.setState({ theme: themes[themeName] });
    // };

  }
  render(){
      return (
        <div>
        </div>
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
