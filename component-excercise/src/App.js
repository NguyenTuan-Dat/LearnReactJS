import React from 'react';
import logo from './logo.svg';
import './App.css';
import Main from './Main';
import SlideBar from './SlideBar';

function App() {
    return (
        <div class="row">
            <div class="column"><Main /></div>
            <div class="column"><SlideBar /></div>
        </div>
    );
}

export default App;
