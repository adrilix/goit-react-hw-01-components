import PropTypes from 'prop-types';
import {StyledProfile, StyledDiv, StyledText, StyledImg, StyledUl, StyledSpan} from './ProfileStyled'
// import css from './Profile.module.css'


const Profile = (props) => {
  const  {username ,tag, location, avatar, stats: {followers,views,likes} } = props;

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
                <li>
                    <StyledSpan>Followers</StyledSpan>
                    <StyledSpan>  {followers}</StyledSpan>
                </li>
                <li>
                    <StyledSpan>Views</StyledSpan>
                    <StyledSpan>  {views}</StyledSpan>
                </li>
                <li>
                    <StyledSpan>Likes</StyledSpan>
                    <StyledSpan>  {likes}</StyledSpan>
                </li>
            </StyledUl>
        </StyledProfile>
    );
}

Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.object.isRequired}


export default Profile