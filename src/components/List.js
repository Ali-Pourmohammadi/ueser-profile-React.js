import User from "./user"
export default function List({users   , onSelect , selected}){ 
    return( <div className="list">
        <ul className="">
        
        {
        users.map(user=> <User user={user}key={user.id}   onSelect = {onSelect} selected = {selected} />)
        }
    
    </ul>

    </div>
)
}