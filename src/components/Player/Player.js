import React from 'react';
import './Player.css'

const Player = (props) => {

    console.log('player', props);

    const { email, phone } = props.player;
    // const { image } = props.player.picture.medium;

    // const { name } = props.name;


    return (
        <div className="player-container col-md-3">
            <div className="bg-white p-3">
                <h3>Name: {props.name}</h3>
                <img src={props.image} alt="" className="rounded img-thumbnail" />
                <p>Email: {email}</p>
                <p>Phone: {phone}</p>
                <button className="btn btn-primary font-weight-bold">Add Player</button>
            </div>
        </div>
    );
};

export default Player;