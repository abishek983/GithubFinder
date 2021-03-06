import React from 'react';
import UsersItems from './UserItems';
import Spinner from '../layouts/Spinner';

const Users = ({ users, loading }) => {
    /* state = {
        users: [
            {
                login: "mojombo",
                id: 1,
                node_id: "MDQ6VXNlcjE=",
                avatar_url: "https://avatars0.githubusercontent.com/u/1?v=4",
                url: "https://api.github.com/users/mojombo",
                html_url: "https://github.com/mojombo",
            },
            {
                login: "defunkt",
                id: 2,
                node_id: "MDQ6VXNlcjI=",
                avatar_url: "https://avatars0.githubusercontent.com/u/2?v=4",
                url: "https://api.github.com/users/defunkt",
                html_url: "https://github.com/defunkt",
            },
            {
                login: "pjhyett",
                id: 3,
                node_id: "MDQ6VXNlcjM=",
                avatar_url: "https://avatars0.githubusercontent.com/u/3?v=4",
                url: "https://api.github.com/users/pjhyett",
                html_url: "https://github.com/pjhyett",

            }
        ]
    } */

    if (loading) {
        return <Spinner />
    }
    else {
        return (
            <div className="row row-cols-1 row-cols-md-3 my-3">
                {users.map(user => (
                    <UsersItems key={user.id} user={user} />
                ))}
            </div>
        )
    }
}

export default Users;