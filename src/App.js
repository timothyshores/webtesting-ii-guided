import React, { useState } from 'react';
import Players from './Players';

import './App.css';

function App() {
    state = {
        players: [
            { id: 1, name: 'Babe Ruth' },
            { id: 2, name: 'Jackie Robinson' },
            { id: 3, name: 'Derek Jeter' },
        ]
    }
    const [greeting, setGreeting] = useState('')

    const greet = () => {
        setGreeting('hello web 18')
    }

    return (
        <div className='App'>
            <h3>Hello World!</h3>
            <div>
                <button onClick={greet}>Greet</button>
            </div>
            <h4>{greeting}</h4>
            <Players players={this.state.players]} />
        </div>
    );
}

export default App;