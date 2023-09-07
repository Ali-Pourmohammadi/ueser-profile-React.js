import { useState } from "react"
import Button from "./Button"
export default function AddUser({addUser}){
    const [name , setName] = useState("");
    const [text , setText] = useState("hello i happy to here 🙂");
    const [image , setImage] = useState("https://i.pravatar.cc/48?u=499476")
    function handleSubmit(e){
        if(!name) return ;
        e.preventDefault();
        const id = Math.floor(Math.random()*1000)
        const newUser = {name , text ,   id ,image : `${image}?=${id}`}
        addUser(newUser);
        setName("");
    }
    return (<form className="form-add-user" onSubmit={handleSubmit} >
        <section className="header-box">
        <h3>ADD NEW USER</h3>
        </section>
        <section>
        <input value={name} onChange={(e)=> setName(e.target.value)} type="text" placeholder="User Name" />
        <input value={text} onChange={(e)=> setText(e.target.value)} type="text" placeholder="User Text" />
        <input value={image} onChange={(e)=> setImage(e.target.value)}  type="text" placeholder="Image Url" />
        </section>
   
       <Button>Add Friend</Button>
    </form>)
}