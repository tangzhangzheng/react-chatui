import React from 'react'
import PropTypes from 'prop-types'
import StyledContactCard, { Name, Intro } from './style'
import Avatar from 'components/Avatar'



function ContactCard({ contactsData, children, ...rest }) {
  return (
    <StyledContactCard {...rest}>
      <Avatar src={contactsData.avatar} status="online" />
      <Name>{contactsData.name}</Name>
      <Intro>{contactsData.intro}</Intro>
    </StyledContactCard>
  )
}


ContactCard.propTypes = {
  children: PropTypes.any
}

export default ContactCard

