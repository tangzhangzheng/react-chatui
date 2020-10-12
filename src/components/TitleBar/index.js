import React from 'react'
import PropTypes from 'prop-types'
import StyledTitleBar,{Title,Actions} from './style'
import Avatar from 'components/Avatar/index'
import Paragraph from 'components/Paragraph/index'
import Icon from 'components/Icon/index'
import {ReactComponent as Call} from "assets/icon/call.svg"
import {ReactComponent as Camera} from "assets/icon/camera.svg"
import {ReactComponent as Options} from "assets/icon/options.svg"
import face from 'assets/images/face-male-2.jpg'
import Text from 'components/Text/index'


function TitleBar({children,...rest}) {
    return (
        <StyledTitleBar {...rest}>
         <Avatar src={face} status="offline"/>
         <Title>
            <Paragraph size="large">慕容天宇</Paragraph> 
            <Paragraph type="secondary">
               <Text type="secondary">离线 </Text>
               <Text type="secondary">. 最后阅读：3小时前</Text>
            </Paragraph>
         </Title>
        <Actions>
            <Icon opacity={0.3} icon={Call}/>
            <Icon opacity={0.3} icon={Camera}/>
            <Icon opacity={0.3} icon={Options}/>
         </Actions>
        </StyledTitleBar>
    )
}


TitleBar.propTypes = {
  children:PropTypes.any
}

export default TitleBar

