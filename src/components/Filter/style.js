import styled from 'styled-components'
import StyledText from 'components/Text/style'
import StyledSelect from 'components/Select/style'

const StyledFilter = styled.div`
    display:grid;
    grid-template-columns:2fr 1fr;
    align-items:center;
`;
const Filters = styled.div`
${StyledSelect}{
    margin-left: 1rem;
}

`;
const Action = styled.div`
    justify-self:end;
    ${StyledText} {
        padding-right: 1rem;
    };
`;
export default StyledFilter;
export { Filters, Action };
