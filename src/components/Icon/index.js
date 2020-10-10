import React from 'react'
import PropTypes from 'prop-types'
import StyledIcon from './style'

function Icon({children,...rest}) {
    return (
        <StyledIcon {...rest}>
           {children}
        </StyledIcon>
    )
}


Icon.propTypes = {
  children:PropType.any
}

export default Icon

