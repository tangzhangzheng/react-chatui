import React from 'react'
import PropTypes from 'prop-types'
import StyledInput,{Prefix,Suffix,InputContainer} from './style'
import {ReactComponent as SearchIcon} from 'assets/icon/search.svg'
import Icon from 'components/Icon/index'
import {useTheme} from 'styled-components'


function Input({placeholder="请输入内容...",prefix,suffix,...rest}) {
  return (
      
    <InputContainer> 
      {prefix && <Prefix>{prefix}</Prefix>}
      <StyledInput placeholder={placeholder} />
      {suffix && <Suffix>{suffix}</Suffix>}
    </InputContainer>
       
    )
}

function Search({ placeholder = "请输入搜索内容...", ...rest }) {
  const theme = useTheme();
  return (
    <Input
      placeholder={placeholder}
      prefix={<Icon icon={SearchIcon}  color={theme.gray3} width={18} height={18}  {...rest}/>}
    />
  )
}

Input.Search = Search


Input.propTypes = {
  placeholder: PropTypes.string,
  prefix: PropTypes.any,
  suffix: PropTypes.any,
}

export default Input



