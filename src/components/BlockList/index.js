import React from 'react'
import PropTypes from 'prop-types'
import StyledBlockList, { SettingsMenu, FriendList, ClosableAvatar, CloseIcon, BlockedName, BlockedAvatar } from './style'
import { ReactComponent as ArrowMenuLight } from 'assets/icon/arrowMenuLeft.svg'
import Icon from "components/Icon"
import Text from "components/Text"
import face from "assets/images/face-male-4.jpg"
import { ReactComponent as closeCircle } from "assets/icon/closeCircle.svg"


function BlockList({ children, ...rest }) {
  return (
    <StyledBlockList {...rest}>
      <SettingsMenu>
        <Icon icon={ArrowMenuLight}
          css={`cursor:pointer;`}
        />
        <Text size="xxlarge">已屏蔽好友</Text>
      </SettingsMenu>
      <FriendList>
        {new Array(8).fill(0).map((_, i) => {
          return (<ClosableAvatar key={i}>
            <BlockedAvatar size="105px" src={face} />
            <CloseIcon width={46} height={51} icon={closeCircle} />
            <BlockedName>李浩</BlockedName>
          </ClosableAvatar>)
        })}

      </FriendList>


    </StyledBlockList>
  )
}


BlockList.propTypes = {
  children: PropTypes.any
}

export default BlockList

