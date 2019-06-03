import React from 'react';
import useResources from './useResources';

const UserList25 = () => {
    const resources = useResources('users');

    return (
        <div>
            <ul>
                {resources.map( record => <li key={record.id}>{record.name}</li> )}
            </ul>
        </div>
    );
}

export default UserList25;