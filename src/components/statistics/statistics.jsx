import PropTypes from 'prop-types';

const Statistics = props => {
    const { title, stats } = props;

    return (
        <section className="statistics">
            {{title}.title!==undefined && (<h2 className="title">{title}</h2>)}

            <ul className="stat-list">
                {stats.map(({ id, label, percentage }) => {
                    return <li key={id} className="item">
                            <span className="label">{label}</span>
                            <span className="percentage">{percentage}%</span>
                        </li>
                })}
            </ul>
        </section>
    );
};

Statistics.prototype = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        })
    ).isRequired,
}

export default Statistics;
