import styled from 'styled-components'

const StyledInputText = styled.div``;

const InputUnderline = styled.input`
    border:none;
    border-bottom:1px solid ${({ theme }) => theme.gray4};
    font-size:${({ theme }) => theme.normal};
    background:none;
    &::placeholder{
        color: ${({ theme }) => theme.gray5};
    };
    :focus,
    :hover{
        border-bottom-color: ${({ theme }) => theme.primaryColor};
    }
`;

export default StyledInputText;
export { InputUnderline }