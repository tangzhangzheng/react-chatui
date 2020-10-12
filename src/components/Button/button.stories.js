import React from 'react'
import Button from './index'
import Icon from 'components/Icon/index'
import {ReactComponent as Plus} from 'assets/icon/plus.svg'

export default {
    title: "UI 组件/Button",
    component: Button
}

export const ReactButton = () => <Button shape="rect"> 默认按钮</Button>

export const CircleButton = () => (
    <Button>    
        <Icon icon={Plus} width={12} height={12} />
   </Button>
)