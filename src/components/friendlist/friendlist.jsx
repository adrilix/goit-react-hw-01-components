import PropTypes from 'prop-types';


const Friendlist = props => {
    const friends = props.friends;
    return (
        <ul className="friend-list">
            {friends.map(({ avatar, name, isOnline, id }) => {
                return (
                    <li key={id} className="item">
                        {
                            isOnline === true
                                ? (<span className="statusOnline"></span>)
                                : (<span className="statusOfline"></span>)
                        }
                        <img
                            className="avatar"
                            src={avatar}
                            alt={name}
                            width="48" />
                        <p className="name"></p>
                    </li>
                )
            }
            )
            }
        </ul>

    )

};

Friendlist.prototype = {
    friends:
    {
        avatar: PropTypes.string,
        name: PropTypes.string,
        isOnline: PropTypes.bool,
        id: PropTypes.number
    }
}

export default Friendlist;











