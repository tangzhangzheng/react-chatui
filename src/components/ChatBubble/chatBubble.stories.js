import React from 'react'
import ChatBubble from './index'
import VoiceMessage from "components/VoiceMessage/index"
import Emoji from "components/Emoji/index"

export default {
    title: "UI 组件/ChatBubble",
    component: ChatBubble,
    decorators: [storyFn => <div style={{ padding: "24px" }}> {storyFn()}</div>]
}

export const FromOthers = ()=> <ChatBubble time="昨天 下午14：26"> 这是一条别人发送的消息</ChatBubble>
export const Mine = () =>(
    <ChatBubble type="mine" time="昨天 下午14：28"> 这是一条我发送的消息
  <Emoji label="smile">😀</Emoji>
</ChatBubble>)
export const VoiceMessageType = () => (
    <ChatBubble  time="昨天 下午18：20">
        <VoiceMessage  time="01:24"/>
    </ChatBubble>
)
export const VoiceMessageTypeMine = () => (
    <ChatBubble type="mine" time="昨天 下午18：20">
        <VoiceMessage type="mine" time="01:24"/>
    </ChatBubble>
)