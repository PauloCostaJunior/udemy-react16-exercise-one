import React from 'react';

const UserInput = (props) => {
    return (
        <div>
            <p>UserInput</p>
            <input type="text" onChange={props.changed}></input>
        </div>
    )
};

export default UserInput;