import React from 'react'
import PropTypes from 'prop-types'
import StyledBlockList, { SettingsMenu, FriendList, ClosableAvatar, CloseIcon, BlockedName, BlockedAvatar } from './style'
import { ReactComponent as ArrowMenuLight } from 'assets/icon/arrowMenuLeft.svg'
import Icon from "components/Icon"
import Text from "components/Text"
import face from "assets/images/face-male-4.jpg"
import { ReactComponent as closeCircle } from "assets/icon/closeCircle.svg"
import { useHistory } from 'react-router-dom'
import "styled-components/macro";
import blockedData from "data/blocked"

function BlockList({ children, ...rest }) {
  const history = useHistory();
  return (
    <StyledBlockList {...rest}>
      <SettingsMenu>
        <Icon icon={ArrowMenuLight}
          css={`cursor:pointer;`}
          onClick={() => history.goBack()}
        />
        <Text size="xxlarge">已屏蔽好友</Text>
      </SettingsMenu>
      <FriendList>
        {blockedData.map((blocked, index) => {
          return (<ClosableAvatar key={blocked.id}>
            <BlockedAvatar size="105px" src={blocked.avatar} />
            <CloseIcon width={46} height={51} icon={closeCircle} />
            <BlockedName>{blocked.name}</BlockedName>
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

