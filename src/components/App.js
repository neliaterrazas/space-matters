import React from 'react';

import styled from 'styled-components';

import ThemeChanger from './ThemeChanger';
import { ThemeProvider } from '@callstack/react-theme-provider';
import { themes } from './themes';
import './App.css';

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      theme: themes.normal
    };
    //
    // handleThemeChange = (themeName: string) => {
    //   this.setState({ theme: themes[themeName] });
    // };

  }
  render(){
      return (
        <div>
          <ThemeProvider theme={this.state.theme}>
          
              <ThemeChanger
                onChangeTheme={this.handleThemeChange}
                themes={Object.keys(themes)}
              />
          </ThemeProvider>
        </div>
        );
      }
    }

export default App;
