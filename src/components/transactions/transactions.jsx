import PropTypes from 'prop-types';
import {StyledTable,
     StyledTableHeader
    } from './TransactionsStyled' 

const History = props => {
    const history = props.history;
    return (
        <StyledTable>
                    <thead>
                        <tr>
                            <th>type</th>
                            <th>amount</th>
                            <th>currency</th>
                        </tr>
                    </thead>
                    <tbody>
                    {history.map(({id,type,amount,currency,}) => {
                            return (
                                    <StyledTableHeader key={id}>
                                        <td>{type}</td>
                                        <td>{amount}</td>
                                        <td>{currency}</td>
                                    </StyledTableHeader>
                                )
                            }
                        )
                    }       
                    </tbody>
            
        </StyledTable>
    )
}

export default History;



History.prototype = {
    history:PropTypes.arrayOf(
                PropTypes.shape({
                        id: PropTypes.string.isRequired,
                        type: PropTypes.string.isRequired,
                        amount: PropTypes.string.isRequired,
                        currency: PropTypes.string.isRequired,
        })
    ).isRequired,
}