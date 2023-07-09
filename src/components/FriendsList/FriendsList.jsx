import PropTypes from 'prop-types';
import { Fragment } from "react";
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
                            isOnline
                                ?   (<Fragment>
                                            <StyledSpanOnline>✅ online</StyledSpanOnline>
                                            <StyledImgOnline                                        
                                                    src={avatar}
                                                    alt={name}
                                                    width="48" />
                                            <StyledNameOnline>{name}</StyledNameOnline>
                                    </Fragment>)

                                :   (<Fragment>
                                            <StyledSpanOffline>❌ offline </StyledSpanOffline>
                                            <StyledImgOffline                                        
                                                    src={avatar}
                                                    alt={name}
                                                    width="40" />
                                            <StyledNameOffline>{name}</StyledNameOffline>
                                    </Fragment>)
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











