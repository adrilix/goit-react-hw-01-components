import styled from 'styled-components';

export const StyledTable = styled.table`
table-layout: fixed;
border-collapse: collapse;
display: flex;
flex-direction: column;
text-align: center;
align-items: center;

thead th:nth-child(1) {
  width: 176.64px;
}

thead th:nth-child(2) {
  width: 163.8px;
}

thead th:nth-child(3) {
  width: 159.92px;
}

thead{
    font-size: 18px;
    width: 500px;
    background-color: #a9a3d4;
    margin: 0 px auto;
}

tbody{
    background-color: tomato;
    width: 500px;
    margin: 0 px auto;
}


th,
td{
    width: 250px;
    padding: 15px 0px;
    outline: 2px solid #888585;
    padding: 10px 0px;    
}

tbody tr:nth-child(odd) {
  background-color: lightgrey;
}
`

export const StyledTableHeader = styled.tr `
    background-color: white ;  
` 