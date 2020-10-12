import React from 'react'
import PropTypes from 'prop-types'
import StyledVoiceMessage from './style'
import Button from 'components/Button/index'
import Icon from 'components/Icon/index'
import {ReactComponent as Play} from"assets/icon/play.svg"
import {ReactComponent as Wave} from"assets/icon/wave.svg"
import {useTheme} from "styled-components"
import Text from 'components/Text/index'

function VoiceMessage({children,time,type,...rest}) {
  const theme = useTheme();
    return (
        <StyledVoiceMessage type={type} {...rest}>
          <Button>
            <Icon
            icon={Play}
            color="white"
            width="14px"
            height="16px"
            style={{transform: 'translateX(1px)'}}
            />
          </Button>
          <Icon icon={Wave} width="100%" height="100%" color={theme.primaryColor} />
          <Text bold>{time} </Text>
        </StyledVoiceMessage>
    )
}

VoiceMessage.propTypes = {
  children: PropTypes.any,
  type: PropTypes.oneOf(["mine"]),
  time: PropTypes.string,
}

export default VoiceMessage

