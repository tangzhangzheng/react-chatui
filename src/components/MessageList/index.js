import React from 'react'
import PropTypes from 'prop-types'
import StyledMessageList,{ChatList} from './style'
import Filter from 'components/Filter/index'
import Icon from 'components/Icon/index'
import Select from 'components/Select/index'
import {ReactComponent as Plus} from 'assets/icon/plus.svg'
import Button from 'components/Button/index'
import MessageCard from 'components/MessageCard/index'
import Input from 'components/Input/index'
import face1 from 'assets/images/face-female-1.jpg'
import Option from 'components/Option/index'

function MessageList({children,...rest}) {
    return (
        <StyledMessageList {...rest}>
        <Input.Search />
        <ChatFilter /> 
        <ChatList >
           {[1, 2, 3, 4, 5, 6].map((_,index) => (
            <MessageCard
              key={index}
              active={index===3}
              replied={index % 3 ===0}
              avatarSrc={face1}
              name="李荣浩"
              avatarStatus="online"
              statusText="在线"
              time="3小时之前"
              message="你看我多乖多聪明多么听话 多奸诈  喝了几大碗米酒再离开是为了模仿"
              unreadCount={2}
            />
          ))}
       </ChatList>
       
        </StyledMessageList>
    )
}
function ChatFilter() {
  return (
    <Filter style={{ padding: "20px 0" }}>
      <Filter.Filters label="列表排序">
        <Select>
          <Option>最新消息优先</Option>
          <Option>在线好友优先</Option>
        </Select>
      </Filter.Filters> 
      <Filter.Action label="创建会话">
        <Button>
          <Icon icon={Plus} width={12} height={12}/>
          </Button>
      </Filter.Action>
    </Filter>
    )
}

MessageList.propTypes = {
  children:PropTypes.any
}

export default MessageList
export {ChatFilter}

