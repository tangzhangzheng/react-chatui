import React from 'react'
import PropTypes from 'prop-types'
import face2 from '../../assets/images/face-female-2.jpg'

function Avatar(props) {
    return (
        <div>
            <div></div>
            <div>
                <img src={face2} alt=""></img>
            </div>
        </div>
    )
}

Avatar.propTypes = {

}

export default Avatar

