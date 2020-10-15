import styled from 'styled-components'
import StyledIcon from 'components/Icon/style'
import { animated } from 'react-spring'

const StyledTitleBar = styled(animated.div)`
    display:grid;
    grid-template-columns:62px 1fr 112px;
    padding:30px;
    max-height:110px;
    border-bottom:1px solid ${({ theme }) => theme.gray4};
`;
const Title = styled.div`
    display:grid;
    `;
const Actions = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    ${StyledIcon}{
        cursor:pointer;
    };
`;

export default StyledTitleBar;
export { Title, Actions }
