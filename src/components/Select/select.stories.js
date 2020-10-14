import React from 'react'
import Select from './index'
import Option from '../Option/index'


export default {
    title: "UI 组件/Input/Select",
    component: Select
}

export const Default = () => (
    <Select>
        <Option>最新消息优先</Option>
        <Option>好友消息优先</Option>
    </Select>
)

export const FormSelect = () => {
    return (
        <Select type="form">
            <Option>北京市</Option>
            <Option>河北省</Option>
        </Select>
    )
}