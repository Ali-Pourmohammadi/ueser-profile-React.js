import List from "./List"
import UserList from "./UserList"
import AddUser from "./AddUser"
import data from "../data"
import EditUser from "./EditUser"
import Button from "./Button"
import { useState } from "react"
export default function Container(){
    const [ users , setUsers] = useState(data);
    const [btnAddUser , setBtnAddUser] = useState(false);
    const [selected , setSelected] = useState(null);
    function showAddUser(){
        setBtnAddUser(btn=> !btn);
        setSelected(null);
    }
   
    function addUser(user){
        setUsers([...users , user]);
        setBtnAddUser(btn => !btn);
    }
    //selection
    function handleSelection(user){
        setSelected(curr=> curr?.id === user.id ? null : user);
        setBtnAddUser(false);

    }
    return (<div>
        <div className="list-container">
            <>
        <List> <UserList users={users} onSelect={handleSelection} selected={selected}/></List>
        { btnAddUser &&<AddUser addUser = {addUser}/>}
        {selected&&<EditUser setUsers = {setUsers} currentUser = {selected} setSelected  = {setSelected} />}

            </>
            <Button onClick={showAddUser}>{btnAddUser?"Close":"Add User"}</Button>
        </div>
    </div>)

}