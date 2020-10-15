import React from 'react'
import PropTypes from 'prop-types'
import StyledTitleBar, { Title, Actions } from './style'
import Avatar from 'components/Avatar/index'
import Paragraph from 'components/Paragraph/index'
import Icon from 'components/Icon/index'
import { ReactComponent as Call } from "assets/icon/call.svg"
import { ReactComponent as Camera } from "assets/icon/camera.svg"
import { ReactComponent as Options } from "assets/icon/options.svg"
import face from 'assets/images/face-male-2.jpg'
import Text from 'components/Text/index'
import Seperator from 'components/Seperator/index'
import Dropdown from 'components/Dropdown/index'
import { DropdownItem } from "components/Dropdown/style"

function TitleBar({ children, ...rest }) {
    return (
        <StyledTitleBar {...rest}>
            <Avatar src={face} status="offline" />
            <Title>
                <Paragraph size="large">慕容天宇</Paragraph>
                <Paragraph type="secondary">
                    <Text type="secondary">离线 </Text>
                    <Text type="secondary">. 最后阅读：3小时前</Text>
                </Paragraph>
            </Title>
            <Actions>
                <Icon opacity={0.3} icon={Call} />
                <Icon opacity={0.3} icon={Camera} />
                <Dropdown content={
                    <>
                        <DropdownItem>
                            <Paragraph>个人资料</Paragraph>
                        </DropdownItem>
                        <DropdownItem>
                            <Paragraph>关闭会话</Paragraph>
                        </DropdownItem>
                        <Seperator />
                        <DropdownItem>
                            <Paragraph type="danger">个人资料</Paragraph>
                        </DropdownItem>
                    </>
                }>

                    <Icon opacity={0.3} icon={Options} />

                </Dropdown>

            </Actions>
        </StyledTitleBar>
    )
}


TitleBar.propTypes = {
    children: PropTypes.any
}

export default TitleBar

