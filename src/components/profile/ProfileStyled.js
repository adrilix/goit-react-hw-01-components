import styled from 'styled-components';

export const StyledProfile = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 400px;
background-color: lightgrey;
padding: 40px;
margin: 10px auto;
border: black;
border-radius: 14px;
box-shadow: 1px 1px 1px 0px rgba(0, 0, 0, 0.5);
`;

export const StyledText = styled.p `
        color: blue;
        font-size : 34px ;
`;

export const StyledImg = styled.img`
        max-width: 230px; 
        display : flex 
        border-radius: 50%;
`;

export const StyledDiv = styled.div`
display: flex;
flex-direction: column;
align-items: center;
color: green;
font-size: 24px;

`;

export const StyledUl = styled.ul`
list-style: none;
width: 100%;
display: flex;
align-items: center;
justify-content: center;
// background-color: grey;
`;

export const StyledLi = styled.li`
margin: 10px;
display: flex;
flex-direction: column;
align-items: center;
width: 100%;;
justify-content: center;
background-color: grey;
`;

export const StyledSpan = styled.span`
        display: flex;
        margin: 20px;
`;