import PropTypes from 'prop-types';
import {
    StyledProfile, 
    StyledDiv, 
    StyledImg, 
    StyledText, 
    StyledUl,
    StyledLi,
    StyledSpan} from './ProfileStyled'
// import css from './Profile.module.css'


const Profile = (props) => {
  const  {
    username,
    tag,
    location,
    avatar,
    stats:
          {followers,views,likes}
     } = props;

  return (
        <StyledProfile >
            <StyledDiv >
                <StyledImg 
                    src={avatar}
                    alt={username}
                />
                <StyledText >{username}</StyledText>
                <p >@{tag}</p>
                <p >{location}</p>
            </StyledDiv>

            <StyledUl>
                <StyledLi>
                    <StyledSpan>Followers</StyledSpan>
                    <StyledSpan>  {followers}</StyledSpan>
                </StyledLi>
                <StyledLi>
                    <StyledSpan>Views</StyledSpan>
                    <StyledSpan>  {views}</StyledSpan>
                </StyledLi>
                <StyledLi>
                    <StyledSpan>Likes</StyledSpan>
                    <StyledSpan>  {likes}</StyledSpan>
                </StyledLi>
            </StyledUl>
        </StyledProfile>
    );
}

Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired
    })}


export default Profile