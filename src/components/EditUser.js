import { useState } from "react"
import Button from "./Button"
export default function EditUser({  setUsers , currentUser   , setSelected}){
    const [editName  , setEditName] = useState(currentUser.name);
    const [editText , setEditText] = useState(currentUser.text);
    const [editImage , setEditImage] = useState(currentUser.image);
    function handleEdit(e){
        e.preventDefault();
    if (!editName || !editText) return ;

        setUsers(existingUsers=>existingUsers.map(user=> user.id=== currentUser.id ? {...user , name:editName , text:editText , iamge : editImage }:user));
        setSelected(null);
    }
    return (<form className="form-edit-user" onSubmit={handleEdit}>
        <div className="header-box">
            <h3>Edit User Information of {currentUser.name}</h3>
        </div>
        <section>
            <input value={editName} onChange={(e)=> setEditName(e.target.value)} type="text"placeholder="User name" />
            <input value={editText} onChange={(e)=> setEditText(e.target.value)} type="text" placeholder="User text"/>
            <input value={editImage} onChange={(e)=> setEditImage(e.target.value)} type="text" placeholder="Image url" />
        </section>
        <Button>Edit</Button>
    </form>)
}