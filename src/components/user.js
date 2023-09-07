import Button from "./Button"
export default function User({user , showEditUser}){
    return(<li className="user">
        <img src={user.image} alt="" className="user-img" />
        <span className="user-name">{user.name}</span>
        <span className="user-title">{user.text}</span>
        <button className="btnEdit" onClick={()=> showEditUser(user.id)}>Edit</button>
    </li>)
}