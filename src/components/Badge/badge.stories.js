import React from 'react'
import Badge from './index'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCommentDots} from '@fortawesome/free-solid-svg-icons'


export default {
    title: "UI 组件/Badge",
    component: Badge
}

export const Default = () => {
    return (<Badge count={5}></Badge>)
}

export const DotVariant = () => {
    return (
        <Badge show variant="dot">
           <FontAwesomeIcon icon={faCommentDots} style={{fontSize: '24px'}}  />
        </Badge>
    )
}