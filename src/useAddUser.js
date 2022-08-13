import { useState } from "react";

export function useAddUsers() {

    const [users, setUsers] = useState(['Arkadeion', 'Develhope', 'mirkoRainer'])

        function addNewUser(event) {
    
            let newUser = event.target.previousSibling.value;
    
            setUsers([
                ...users,
                newUser,
            ])
    
            event.target.previousSibling.value = '';
    
        }

    return (
        {
            users: users,
            addNewUser: addNewUser,
        }
    )

}