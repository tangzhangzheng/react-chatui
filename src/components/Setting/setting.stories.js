import React from 'react'
import Setting, { SettingsItem } from './index'



export default {
    title: "页面组件/ Setting",
    component: Setting
}

export const Default = () => <Setting />

export const WithoutDescription = () => {
    return <SettingsItem label="这是一个没有描述项的设置" />
}
export const WithDescription = () => {
    return <SettingsItem label="这是一个有描述项的设置" description=" 这是描述信息" />
}
export const WithMenu = () => {
    return <SettingsItem label="这是一个没有描述项的设置" type="menu" />

}