import PropTypes from 'prop-types';
import {
    StyledSection,
    StyledTittle,
    StyledUl,
    StyledLi,
    StyledSpanTittle,
    StyledSpan,

} from './StatisticStyled'

const Statistics = ({title, stats }) => {
    return (
        <StyledSection>
            {title && (<StyledTittle>{title}</StyledTittle>)}

            <StyledUl>
                {stats.map(({ id, label, percentage }) => {
                    return <StyledLi key={id}>
                            <StyledSpanTittle>{label}</StyledSpanTittle>
                            <StyledSpan>{percentage}%</StyledSpan>
                        </StyledLi>
                })}
            </StyledUl>
        </StyledSection>
    );
};

Statistics.prototype = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        })
    ).isRequired,
}

export default Statistics;
