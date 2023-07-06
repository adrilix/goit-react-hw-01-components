import PropTypes from 'prop-types';

const History = props => {
    const history = props.history;
    return (
        <table className="transaction-history">
                    <thead>
                        <tr>
                            <th>type</th>
                            <th>amount</th>
                            <th>currency</th>
                        </tr>
                    </thead>
                    <tbody>
                    {history.map(item => {
                const{type,amount,currency}=item;
                return (
                        <tr key={item.id}>
                            <td>{type}</td>
                            <td>{amount}</td>
                            <td>{currency}</td>
                        </tr>
                )
            })}
        
                    </tbody>
            
        </table>
    )
}

export default History;



History.prototype = {
    history:
    { id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }
}