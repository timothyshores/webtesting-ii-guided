import React from 'react';
import { cleanup, render } from 'react-testing-library';

import Players from './Players';

afterEach(cleanup);

describe('<Players />', () => {
    it('renders without crashing', () => {
        render(<Players />);
    });
    it('renders a list of players', () => {
        const players = [
            { id: 1, name: 'Babe Ruth' },
            { id: 2, name: 'Jackie Robinson' },
            { id: 3, name: 'Derek Jeter' },
        ];

        const { getAllByTestId } = render(<Players players={players} />);
        const playerNames = getAllByTestId('player-name').map(name => name.textContent);
        const names = players.map(player => player.name);
        
        expect(playerNames).toHaveLength(players.length);
        expect(playerNames).toEqual(names);
    });
});

