import User from "./user"
export default function List({users  , showEditUser}){ 
    return( <div className="list">
        <ul className="">
        
        {
        users.map(user=> <User user={user}key={user.id} showEditUser = {showEditUser} />)
        }
    
    </ul>

    </div>
)
}