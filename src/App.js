import React, { Component } from 'react'
import Routes from './routes'
import MenuComponent from './components/MenuComponent';

class App extends Component {
    render(){
        return (
            <div className="app">
                <MenuComponent />
                <Routes />
            </div>
        );
    }
}

export default App;