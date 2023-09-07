import User from "./user"
import Button from "./Button"
import { useState } from "react"
export default function List({users , setBtnUser , btnUser}){ 
    function showAddFriend(){
        setBtnUser(btn=> !btn);
    }
    return( <div className="list">
        <ul className="">
        
        {
        users.map(user=> <User user={user}key={user.id} />)
        }
    
    </ul>

    </div>
)
}