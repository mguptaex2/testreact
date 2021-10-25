import React from 'react'
import PropTypes from 'prop-types'
const submitStyle = {
    margin: 'auto',
    border: '1px solid #efffff',
    borderRadius: '3px',
    background: '#3085d6',
    width: '20%', 
    fontSize: '15px',
    color: 'white',
    display: 'block'
};
function Profile(props) {
    console.log(props);
    function handleLogoutClick() {
        console.log("you are logged out");
        props.history.push("/");
    }
    return (
        <div>
            Hello, {props.history.state.user}
            <button onClick={handleLogoutClick} style={submitStyle}>Logout</button>
        </div>
    )
}

Profile.propTypes = {

}

export default Profile

