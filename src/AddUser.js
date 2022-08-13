export function AddUser({userlist, setUserlist}) {

    function addNewUser(event) {
    
        let newUser = event.target.previousSibling.value;

        setUserlist([
            ...userlist,
            newUser,
        ])

        event.target.previousSibling.value = '';

    }

    return (
        <div>
            <input className="border-black border-2 mr-3" name="newUser" />
            <button className="rounded-xl border-black border-2 p-1 mr-3" onClick={addNewUser} >Add Item</button>
        </div>
    )
}