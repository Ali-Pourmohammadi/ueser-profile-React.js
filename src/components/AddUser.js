import Button from "./Button"
export default function AddUser(){
    return (<form className="form-add-user" >
        <section className="header-box">
        <h3>ADD NEW USER</h3>

        </section>
        <section>
        <input type="text" placeholder="User Name" />
        <input type="text" placeholder="User Text" />
        <input type="text" placeholder="Image Url" />
        </section>
   
       <Button>Add Friend</Button>
    </form>)
}