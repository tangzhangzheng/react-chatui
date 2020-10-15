import React, { useState } from 'react'
import PropTypes from 'prop-types'
import StyledChatApp, { Sidebar, Nav, Content, Drawer } from './style'
import NavBar from 'components/NavBar'
import Profile from 'components/Profile'
import Conversation from 'components/Conversation'
import MessageList from 'components/MessageList'
import { Route, Switch, useLocation } from 'react-router-dom'
import ContactList from 'components/ContactList'
import FileList from 'components/FileList'
import EditProfile from 'components/EditProfile'
import NoteList from 'components/NoteList'
import BlockList from 'components/BlockList/index'
import Setting from 'components/Setting'
import VideoCall from 'components/VideoCall'
import { useTransition, animated } from "react-spring"

function ChatApp({ children, ...rest }) {
  const [showDrawer, setShowDrawer] = useState(false);
  const [videoCalling, setVideoCalling] = useState(false);
  const location = useLocation();
  const getFirstSgmtpath = (location) => location.pathname.split('/')[1];
  const transitions = useTransition(location, getFirstSgmtpath, {
    from: { opacity: 0, transform: "translate3d(-100px,0,0)" },
    enter: { opacity: 1, transform: "translate3d(0,0,0)" },
    leave: { opacity: 0, transform: "translate3d(-100px,0,1)" },
  })
  return (
    <StyledChatApp {...rest}>
      <Nav>
        <NavBar />
      </Nav>
      <Sidebar>
        {transitions.map(({ item: location, props, key }) => (
          <animated.div key={key} style={props}>
            <Switch location={location}>
              <Route exact path="/">
                <MessageList />
              </Route>
              <Route exact path="/contacts">
                <ContactList />
              </Route>
              <Route exact path="/files">
                <FileList />
              </Route>
              <Route exact path="/notes">
                <NoteList />
              </Route>
              <Route path="/settings">
                <EditProfile />
              </Route>

            </Switch>
          </animated.div>
        ))}
      </Sidebar>
      <Content>
        {videoCalling && <VideoCall onHangoffClick={() => setVideoCalling(false)} />}
        <Switch>
          <Route exact path="/settings">
            <Setting />
          </Route>
          <Route path="/settings/block">
            <BlockList />
          </Route>
          <Route path="/">
            <Conversation onAvatarClick={() => setShowDrawer(true)}
              onVideoClick={() => setVideoCalling(true)}
            />
          </Route>
        </Switch>
      </Content>
      <Drawer show={showDrawer}>
        <Profile onCloseClick={() => setShowDrawer(false)} />
      </Drawer>
    </StyledChatApp>
  )
}


ChatApp.propTypes = {
  children: PropTypes.any
}

export default ChatApp

