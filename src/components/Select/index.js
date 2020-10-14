import React from 'react'
import PropTypes from 'prop-types'
import StyledSelect from './style'
import LabelContainer from 'components/LabelContainer'

function Select({ children, label, type, ...rest }) {
  const selectWithLabel = (
    <StyledSelect type={type} {...rest}>
      {children}
    </StyledSelect>
  )
  return label ? (
    <LabelContainer label={label} {...rest}>
      selectWithLabel
    </LabelContainer>
  ) : (selectWithLabel)
}


Select.propTypes = {
  children: PropTypes.any,
  type: PropTypes.oneOf(["form"])
}

export default Select

