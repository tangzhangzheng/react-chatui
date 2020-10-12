import styled,{css} from 'styled-components'
import StyledIcon from 'components/Icon/style'
import StyledText from 'components/Text/style'
import StyledButton from 'components/Button/style'


const typeVariants = {
    mine: css`
     ${StyledButton}{
         background-color:white;
         ${StyledIcon} path{
             fill:${({ theme }) => theme.primaryColor};
         }
     }
     & >${StyledIcon} path{
         fill:white;
     }
     & >${StyledText}{
        color:white;
    }
    `
};

const StyledVoiceMessage = styled.div`
    display:flex;
    align-items:center;
    & > *:first-child {
        flex-shrink: 0;
    }
    & > *:not(:first-child) {
        margin-left:16px;
    }
    ${({type}) => type && typeVariants[type]}
`;

export default StyledVoiceMessage;
export {typeVariants}
