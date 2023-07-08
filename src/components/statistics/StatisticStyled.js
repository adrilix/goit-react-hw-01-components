import styled from 'styled-components';

export const StyledSection = styled.section`
display: flex;
flex-direction: column;
align-items: center;
width: 400px;
background-color: lightgrey;
padding: 0px;
margin: 10px auto;
border: 2px solid #888585;
border-radius: 20px;
box-shadow: 2px 2px 2px 0px rgba(0, 0, 0, 0.5);
&:hover,
&:focus{
        border-radius: 24px;  
        box-shadow: 3px 3px 3px 0px rgba(0, 0, 0, 0.5);
        background-color: #ece2e2;
        cursor: pointer;

        li{
            background-color: #bebdc1 ; 
            color: darkblue;
        }
    }
`;

export const StyledTittle = styled.h2`
    font-size: 24px;
    margin: 10px;
    padding: 5px 10px;
    display: flex;
    justify-content: center;
`;

export const StyledUl = styled.ul`
margin: 5px;
padding: 10px, 10px;
list-style: none;
width: 100%;
display: flex;
align-items: center;
justify-content: center;
padding-inline-start: 0px;

margin-block-end: 0px;
`;

export const StyledLi = styled.li`
margin: 10px;
display: flex;
flex-direction: column;
align-items: center;
width: 100%;;
justify-content: center;
background-color: #e2e0ea ;
border: 1px solid #888585;
border-radius: 17px;
`;

export const StyledSpanTittle = styled.span`
        font-size: 20px;
        font-weight: bold;
        display: block;
        margin: 20px;
`;

export const StyledSpan = styled.span`
        font-size: 16px;      
        display: block;
        margin: 20px;
`;