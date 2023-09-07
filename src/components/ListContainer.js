import List from "./List"
import AddUser from "./AddUser"
import data from "../data"
import EditUser from "./EditUser"
import Button from "./Button"
import { useState } from "react"
export default function Container(){
    const [ users , setUsers] = useState(data);
    const [btnUser , setBtnUser] = useState(false);
    function showAddFriend(){
        setBtnUser(btn=> !btn);
    }
    return (<div>
        <div className="list-container">
            <section className="wrapper">
            <List users = {users}/>
        { btnUser &&<AddUser />}
            </section>
            <Button onClick={showAddFriend}>{btnUser?"Close":"Add User"}</Button>
        </div>
        <EditUser/>
    </div>)

}