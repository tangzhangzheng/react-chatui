import React from 'react'
import PropTypes from 'prop-types'
import StyledRadio, { RadioButton, Circle, StyledRadioGroup } from './style'
import LabelContainer from "components/LabelContainer/index"

function Radio({ name, children, ...rest }) {
  return (
    <StyledRadio {...rest}>
      {children}
      <RadioButton name={name}></RadioButton>
      <Circle />
    </StyledRadio>
  );
}

function RadioGroup({ label, children, ...rest }) {

  return (
    <LabelContainer label={label}>
      <StyledRadioGroup {...rest}> {children}</StyledRadioGroup>
    </LabelContainer>
  );
}
console.log(RadioGroup)

Radio.Group = RadioGroup

Radio.propTypes = {
  children: PropTypes.any,
  name: PropTypes.string,
}

RadioGroup.prototype = {
  label: PropTypes.string,
  children: PropTypes.any
}

export default Radio
export { RadioGroup }

