import React from 'react'
import PropTypes from 'prop-types'
import StyledIcon from './style'
import SocialIcon from "./SocialIcon/index"

function Icon({ icon: IconComponent, width = 24, height = 24, color, opacity, ...rest }) {
  return (
    <StyledIcon color={color} opacity={opacity} {...rest}>
      {IconComponent && <IconComponent width={width} height={height} />}
    </StyledIcon>
  )
}
Icon.Social = SocialIcon;

Icon.propTypes = {
  icon: PropTypes.element,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  opacity: PropTypes.number,
  color: PropTypes.string
}


export default Icon

