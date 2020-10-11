import React from 'react'
import Heading from './index'



export default {
    title: "排版/Heading",
    component: Heading
}

export const H1 = () => <Heading level={1}> 默认</Heading>;
export const H2 = () => <Heading level={2}> 默认</Heading>
export const H3 = () => <Heading level={3}> 默认</Heading>
export const H4 = () => <Heading level={4}> 默认</Heading>
export const H5= () => <Heading level={5}> 默认</Heading>
export const H6 = ()=> <Heading level={6}> 默认</Heading>