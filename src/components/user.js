import Button from "./Button"
export default function User({user , onSelect  , selected}){
    const isSelected = selected?.id === user.id
    return(<li className={`user ${isSelected? "selected":""}`}>
        <img src={user.image} alt="" className="user-img" />
        <span className="user-name">{user.name}</span>
        <span className="user-title">{user.text}</span>
        <Button className="btnEdit" onClick={()=> onSelect(user)}>{isSelected ? "Close" : "Edit"}</Button>
    </li>)
}