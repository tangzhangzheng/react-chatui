import React from 'react'
import PropTypes from 'prop-types'
import StyledMessageCard,{Name, Message,Time,Status,MessageText,UnreadBadge} from './style'
import Avatar from 'components/Avatar/index'
import {useTheme} from 'styled-components'
import Icon from 'components/Icon/index'
import {ReactComponent as Replied} from 'assets/icon/replied.svg'


function MessageCard({
      children,
      avatarSrc,
      avatarStatus,
      statusText,
      name,
      time,
      message,
      unreadCount,
      active,
      replied,
  ...rest }) {
  
  const theme = useTheme();
       return (
        <StyledMessageCard active={active} {...rest}>
        <Avatar src={avatarSrc} status={avatarStatus} />
        <Name>{name}</Name>
        <Status>{statusText}</Status>
        <Time>{time}</Time>
           <Message replied={replied}>
             {replied && 
               <Icon
               width={16}
               height={14}
               icon={Replied}
               color={active ? theme.inactiveColorDark : theme.inactiveColor}
               opacity={active ? 0.4 :1}
               style={{
                justifyContent: "start",
              }}
             
             />
             
             }

          <MessageText>{message}</MessageText>
          <UnreadBadge count={unreadCount}></UnreadBadge>
        </Message>
        </StyledMessageCard>
    )
}

MessageCard.propTypes = {
  children: PropTypes.any,
  avatarSrc: PropTypes.string.isRequired,
  avatarStatus: PropTypes.any,
  statusText: PropTypes.any,
  name: PropTypes.any,
  time: PropTypes.any,
  message: PropTypes.any,
  unreadCount: PropTypes.number, 
  active: PropTypes.bool,
  replied: PropTypes.bool,
}

export default MessageCard

