import React from 'react';

const UserOutput = (props) => {
    return (
        <div>
            <p>User's Output</p>
            <p>{props.name}</p>
        </div>
    ) 
};

export default UserOutput;