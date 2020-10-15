import React from 'react';
import PropTypes from 'prop-types';
import StyledConversation, { Conversations, MyChatBubble } from './style';
import Emoji from 'components/Emoji/index';
import VoiceMessage from 'components/VoiceMessage/index';
import TitleBar from 'components/TitleBar/index';
import Footer from 'components/Footer/index';
import ChatBubble from 'components/ChatBubble/index';
import { useSpring, animated } from 'react-spring'

function Conversation({ onAvatarClick, onVideoClick, children, ...rest }) {
  const tBarAnimeProps = useSpring({
    opacity: 1,
    transform: "translate3d(0px,0px,0px)",
    from: { opacity: 0, transform: "translate3d(0px,-50px,0px)" },
    delay: 500,
  })

  const convAnimeProps = useSpring({
    opacity: 1,
    transform: "translate3d(0px,0px,0px)",
    from: { opacity: 0, transform: "translate3d(50,0px,0px)" },
    delay: 800,
  })
  const ftAnimeProps = useSpring({
    opacity: 1,
    transform: "translate3d(0px,0px,0px)",
    from: { opacity: 0, transform: "translate3d(0px,50px,0px)" },
    delay: 950,
  })
  return (
    <StyledConversation {...rest}>
      <TitleBar onAvatarClick={onAvatarClick} onVideoClick={onVideoClick} animeProps={tBarAnimeProps} />
      <Conversations style={convAnimeProps}>
        <ChatBubble time="昨天 下午14:26">Hi 小宇，忙什么呢</ChatBubble>
        <MyChatBubble time="昨天 下午16:30">
          Hello 最近一直在加班改bug
        </MyChatBubble>
        <ChatBubble time="昨天 下午14:26">
          <VoiceMessage time="01:24" />
        </ChatBubble>
        <MyChatBubble time="昨天 下午16:30">
          明天约一把王者荣耀
           <Emoji label="smile">😀</Emoji>
        </MyChatBubble>
      </Conversations>
      <Footer animeProps={ftAnimeProps} />
    </StyledConversation>
  )
}


Conversation.propTypes = {
  children: PropTypes.any
}

export default Conversation

