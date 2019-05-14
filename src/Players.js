import React from 'react';

function Players(props) {
    const { players = [] } = props;

    if (!players || players.length > 0) {
        return <h3>No players available</h3>;
    }

    return (
        <>
            <h3>Player List</h3>
            {players.map(player => (
                <div data-testid="player-name" key={player.id}>{player.name}</div>
            ))}
        </>
    );
}

export default Players;