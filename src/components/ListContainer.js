import List from "./List"
import AddUser from "./AddUser"
import data from "../data"
import EditUser from "./EditUser"
import Button from "./Button"
import { useState } from "react"
export default function Container(){
    const [ users , setUsers] = useState(data);
    const [btnAddUser , setAddBtnUser] = useState(false);
    const [btnEditUser , setBtnEditUser] = useState(false);
    function showAddUser(){
        setBtnEditUser(false);
        setAddBtnUser(btn=> !btn);
    }
    function showEditUser(id){
        setAddBtnUser(false)
        setBtnEditUser(btn=> !btn);
    }
    return (<div>
        <div className="list-container">
            <section className="wrapper">
            <List users = {users} showEditUser = {showEditUser}/>
        { btnAddUser &&<AddUser />}
        {btnEditUser&&<EditUser />}

            </section>
            <Button onClick={showAddUser}>{btnAddUser?"Close":"Add User"}</Button>
        </div>
    </div>)

}