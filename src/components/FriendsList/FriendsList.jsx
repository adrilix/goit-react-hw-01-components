import PropTypes from 'prop-types';
// import { FaCcPaypal } from "react-icons/fa";
import {
    StyledFriendsUl,
    StyledLi,
    StyledSpanOnline,
    StyledSpanOffline,
    StyledImgOnline,
    StyledImgOffline,
    StyledNameOnline,
    StyledNameOffline
} from './FriendsListStyled'



const FriendsList = props => {
    const friends = props.friends;
    return (
        <StyledFriendsUl>
            {friends.map(({ avatar, name, isOnline, id }) => {
                return (
                    <StyledLi key={id}>
                        {
                            isOnline === true
                                ? (<StyledSpanOnline>✅ online</StyledSpanOnline>)
                                : (<StyledSpanOffline>❌ offline </StyledSpanOffline>)
                        }
                        {
                            isOnline === true
                            ? (<StyledImgOnline
                                className="avatar"
                                src={avatar}
                                alt={name}
                                width="48" />)
                            :
                            (<StyledImgOffline
                                className="avatar"
                                src={avatar}
                                alt={name}
                                width="40" />)
                        }
                        {isOnline === true
                        ? (<StyledNameOnline>{name}</StyledNameOnline>)
                        : (<StyledNameOffline>{name}</StyledNameOffline>)
                        }
                    </StyledLi>
                )
            }
            )
            }
        </StyledFriendsUl>

    )

};

FriendsList.prototype = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,
            id: PropTypes.number.isRequired
        })
    ).isRequired,
    }

export default FriendsList;











