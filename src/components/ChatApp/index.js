import React from 'react'
import PropTypes from 'prop-types'
import StyledChatApp, { Sidebar, Nav, Content, Drawer } from './style'
import NavBar from 'components/NavBar'
import Profile from 'components/Profile'
import Conversation from 'components/Conversation'
import MessageList from 'components/MessageList'


function ChatApp({ children, ...rest }) {
  return (
    <StyledChatApp {...rest}>
      <Nav>
        <NavBar />
      </Nav>
      <Sidebar>
        <MessageList />
      </Sidebar>
      <Content>
        <Conversation />
      </Content>
      <Drawer>
        <Profile />
      </Drawer>
    </StyledChatApp>
  )
}


ChatApp.propTypes = {
  children: PropTypes.any
}

export default ChatApp

