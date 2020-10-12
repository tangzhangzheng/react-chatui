import styled,{css} from 'styled-components'
import Text from 'components/Text/index'
import Paragraph from 'components/Paragraph/index';
import Badge from 'components/Badge/index';
import { card } from 'utils/mixins';
import {StyledAvatar} from 'components/Avatar/style';
import { activeBar } from 'utils/mixins';


const Name = styled(Text).attrs({ size: "large" })`
grid-area:name;

`;
const Time = styled(Text).attrs({ size: "medium", type: "secondary" })`
grid-area:time;
justify-self:end;
`;
const Status = styled(Text).attrs({ type: "secondary" })`
grid-area:status;
`;
const Message = styled.div`
grid-area:message;
display:grid;
grid-template-columns:1fr 30px;
align-items:center;
${({replied})=> replied && css`grid-template-columns:24px 1fr 30px;`}

`;
const MessageText = styled(Paragraph).attrs({ ellipsis: true })``;
const UnreadBadge = styled(Badge)`
justify-self:end;
`;
const StyledMessageCard = styled.div`
${card()};
display:grid;
grid-template-areas:
"avatar name time"
"avatar status status"
"message message message";
grid-template-columns:64px 1fr 1fr;
row-gap:16px;
background:${({ theme }) => theme.background};
transition:0.4s;
&:hover{
    box-shadow:0px 20px 50px rgba(0,0,0,.1)
}
${StyledAvatar}{
    grid-area:avatar;
}

${({ active }) => active && css`
    background:${({ theme }) => theme.darkPurple};
    ${Name},${Status},${Time},${MessageText} {
        color:white;
    }
    ${Status},${Time}{
        opacity:0.4;
    }
    ${activeBar({ barWidth: "4px", shadowWidth: "14px" })}
    overflow:hidden;
`}
`;

export default StyledMessageCard;
export {Name, Message,Time,Status,MessageText,UnreadBadge}
