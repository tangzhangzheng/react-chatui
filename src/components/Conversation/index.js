import React from 'react';
import PropTypes from 'prop-types';
import StyledConversation, { Conversations, MyChatBubble } from './style';
import Emoji from 'components/Emoji/index';
import VoiceMessage from 'components/VoiceMessage/index';
import TitleBar from 'components/TitleBar/index';
import Footer from 'components/Footer/index';
import ChatBubble from 'components/ChatBubble/index';

function Conversation({ children, ...rest }) {
  return (
    <StyledConversation {...rest}>
      <TitleBar />
      <Conversations>
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
      <Footer />
    </StyledConversation>
  )
}


Conversation.propTypes = {
  children: PropTypes.any
}

export default Conversation

