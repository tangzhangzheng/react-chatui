import React from 'react'
import PropTypes from 'prop-types'
import StyledContactList, { Contacts } from './style'
import FilterList from 'components/FilterList'
import ContactCard from 'components/ContactCard'
import { animated } from 'react-spring'
import useStaggeredList from "hooks/useStaggeredList"
import contactsData from 'data/contacts'


function ContactList({ children, ...rest }) {
  const trailAnimes = useStaggeredList(10)
  return (
    <StyledContactList {...rest}>
      <FilterList options={["新添加优先", "按姓名排序"]} actionLabel="添加好友">
        <Contacts>
          {contactsData.map((contactsData, index) => {
            console.log(contactsData.id)
            return (<animated.div key={contactsData.id} style={trailAnimes[index]} >
              <ContactCard key={contactsData.id} contactsData={contactsData} />
            </animated.div>)
          })}
        </Contacts>
      </FilterList>
    </StyledContactList>
  )
}


ContactList.propTypes = {
  children: PropTypes.any
}

export default ContactList

