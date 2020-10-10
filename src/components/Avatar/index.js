import React from 'react'
import PropTypes from 'prop-types'
import { StyledAvatar,StatusIcon,AvatarClip,AvatarImage } from './style'

function Avatar({src,size="48px",status,statusIconSize="8PX",...rest}) {
    return (
        <StyledAvatar {...rest}>
            {status && <StatusIcon status={status} size={statusIconSize}></StatusIcon>}
            <AvatarClip size={size}>
                <AvatarImage src={src} alt=""></AvatarImage>
            </AvatarClip>
        </StyledAvatar>
    )
}

//类型检查
Avatar.propTypes = {
    src: PropTypes.string.isRequired,
    size: PropTypes.string.isRequired,
    status: PropTypes.oneOf(["online", "offline"]),
    statusIconSize: PropTypes.string,
}

export default Avatar

