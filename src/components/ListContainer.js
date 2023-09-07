import List from "./List"
import AddUser from "./AddUser"
import data from "../data"
import EditUser from "./EditUser"
import Button from "./Button"
import { useState } from "react"
export default function Container(){
    const [ users , setUsers] = useState(data);
    const [btnAddUser , setAddBtnUser] = useState(false);
    const [selected , setSelected] = useState(null);
    function showAddUser(){
        setAddBtnUser(btn=> !btn);
    }
   
    function addUser(user){
        setUsers([...users , user]);
        setAddBtnUser(btn => !btn);
    }
    //selection
    function handleSelection(user){
        setSelected(curr=> curr?.id === user.id ? null : user);

    }
    return (<div>
        <div className="list-container">
            <section className="wrapper">
            <List users = {users}  onSelect = {handleSelection} selected = {selected}/>
        { btnAddUser &&<AddUser addUser = {addUser} />}
        {selected&&<EditUser />}

            </section>
            <Button onClick={showAddUser}>{btnAddUser?"Close":"Add User"}</Button>
        </div>
    </div>)

}