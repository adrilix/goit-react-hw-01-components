import styled from 'styled-components';

export const StyledFriendsUl = styled.ul`
list-style: none;
margin: 5px;

padding-inline-start: 0px;
display: flex;
flex-direction: column;
align-items: center;
width: 300px;
/* background-color: lightgrey; */
padding: 0px;
margin: 10px auto;

`;

export const StyledLi = styled.li`
margin: 10px;
display: flex;
flex-direction: row;
align-items: center;
width: 100%;;
justify-content: start;
background-color: #e2e0ea ;
border: 1px solid #888585;
border-radius: 17px;
        background-color: #f4f0f0;
        border: 1px solid #888585;
        border-radius: 20px;
&:hover,
&:focus{
        cursor: pointer;
        background-color: #bebdc1 ; 
        color: black;
        box-shadow: 2px 2px 2px 0px rgba(0, 0, 0, 0.5);
}
`;

export const StyledSpanOnline = styled.span`
        color : green;
        font-size: 14px;
        display: block;
        margin: 20px;
        /* background-color: lightgrey; */
`;

export const StyledSpanOffline = styled.span`
        background-color: inherit;
        color: #ff000045;
        font-size: 16px;      
        display: block;
        margin: 20px;
`;

export const StyledImgOnline = styled.img`      
        max-width: 100px; 

`;

export const StyledImgOffline = styled.img`
        opacity: 0.3;
        width: 40px; 
`;

export const StyledNameOnline = styled.p `

        color: black;
        font-size : 24px ;
        font-weight: bold;
        margin: 0px 0px 0px 20px;
`;

export const StyledNameOffline = styled.p `
        opacity: 0.3;
        color: black;
        font-size : 24px ;
        margin: 0px 0px 0px 20px;
`;