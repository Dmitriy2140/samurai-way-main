import React from 'react';
import './App.css';

const App = () => {
    return (
        <div>
            <Header/>
            <Texnologes/>
        </div>

    );
}

const Texnologes = () => {
    return (
        <ul>
            <li>css</li>
            <li>html</li>
            <li>js</li>
            <li>react</li>
        </ul>
    )
}

const Header = () => {
    return (<div>
            <a href="#s">Home</a>
            <a href="#s">News Feed</a>
            <a href="#s">Messages</a>
        </div>
    );
}

export default App;
