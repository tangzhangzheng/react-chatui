import React from 'react'
import Input from './index'
import { ReactComponent as ClipIcon } from 'assets/icon/clip.svg'
import { ReactComponent as SmileIcon } from 'assets/icon/smile.svg'
import Icon from 'components/Icon/index'

export default {
    title: "UI 组件/Input",
    component: Input
}

export const Default = () => <Input /> 


export const Search = () => <Input.Search />


export const WithAffix = () => <Input prefix={<Icon icon={ClipIcon} color="#ccc" />}
suffix={<Icon icon={SmileIcon} color="#ccc" /> }

/>