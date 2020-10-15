import React from 'react'
import PropTypes from 'prop-types'
import StyledSetting, { StyledSettingsItem, SettingsItemControl, StyledSettingsGroup } from './style'
import Paragraph from 'components/Paragraph/index'
import Icon from 'components/Icon/index'
import Switch from 'components/Switch/'
import Seperator from 'components/Seperator'
import { ReactComponent as ArrowMenuRight } from "assets/icon/arrowMenuRight.svg"
import { Link } from "react-router-dom"
import "styled-components/macro"
import { useSpring, animated } from 'react-spring'

function Setting({ groupName, children, ...rest }) {
  const animeProps = useSpring({
    transform: "translate3d(0px,0px,0px)",
    opacity: 1,
    from: { transform: "translate3d(100px,0px,0px)", opacity: 0 },
    config: {
      tension: 140,
    },
    delay: 300,
  })
  return (
    <StyledSetting {...rest}>
      <animated.div style={animeProps}>
        <SettingsGroup groupName="隐私设置">
          <SettingsItem label="添加好友时需要验证" />
          <SettingsItem label="通讯录好友" description="上传的通讯录只能用来匹配好友列表" />
          <SettingsItem label="只能通过手机号找到我" />
        </SettingsGroup>
        <SettingsGroup groupName="通知设置">
          <SettingsItem label="新消息通知" />
          <SettingsItem label="语音和视频通话提醒" />
          <SettingsItem label="显示通知详情" />
          <SettingsItem label="声音" />
          <Link to={`/settings/block`}
            css={`
            text-decoration: none;
            color:inherit;
          `}
          >
            <SettingsItem label="查看已静音的好友列表" type="menu" />
          </Link>
        </SettingsGroup>
      </animated.div>
    </StyledSetting>
  )
}


function SettingsGroup({ groupName, children, ...rest }) {

  return (
    <StyledSettingsGroup>
      <Paragraph size="xxlarge" style={{ paddingBottom: "24px" }}>
        {groupName}
      </Paragraph>
      {children}
    </StyledSettingsGroup>
  )
}



export function SettingsItem({
  type = "switch",
  label,
  description,
  children,
  ...rest
}) {
  return (
    <StyledSettingsItem {...rest}>
      <SettingsItemControl>
        <Paragraph size="large">{label}</Paragraph>
        {type === "switch" && <Switch />}
        {type === "menu" && <Icon icon={ArrowMenuRight} />}
      </SettingsItemControl>
      {description && <Paragraph type="secondary" style={{ margin: "4px 0" }}>
        {description}
      </Paragraph>}
      <Seperator style={{ marginTop: "8px", marginBottom: "20px" }} />
    </StyledSettingsItem>
  );
}


Setting.propTypes = {
  children: PropTypes.any
}

export default Setting

