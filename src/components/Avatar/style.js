import styled,{css} from 'styled-components'


const circleMixinFunc = (color,size="8px") => css`
    position:absolute;
    content:"";
    display:block;
    width:${size};
    height:${size};
    border-radius:50%;
    background-color:${color};
`


const StyledAvatar = styled.div`
position:relative;
`;

const StatusIcon = styled.div`
position:absolute;
left:2px;
top:4px;

&::before {
   ${({size})=> circleMixinFunc("white",size)}
    transform:scale(2)
}
&::after{
     ${ ({ theme, status, size }) => {
    if (status === "online") {
       return circleMixinFunc(theme.green,size)
    } else if (status === "offline") {
      return  circleMixinFunc(theme.gary,size)
    } 
}
    }
}
`;

const AvatarClip = styled.div`
   width:${({size})=> size};
   height:${({size})=> size};
   border-radius:50%;
   overflow:hidden;
`;



const AvatarImage = styled.img`
width:100%;
height:100%;
object-fit:cover;
object-position:center;

`;


export { StyledAvatar,StatusIcon,AvatarImage,AvatarClip}



