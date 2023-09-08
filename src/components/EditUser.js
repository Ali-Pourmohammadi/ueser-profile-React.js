import Button from "./Button"
export default function EditUser({setAddUser , setUsers , currentUser}){
    return (<form className="form-edit-user">
        <div className="header-box">
            <h3>Edit User Information of X</h3>
        </div>
        <section>
            <input type="text"placeholder="User name" />
            <input type="text" placeholder="User text"/>
            <input type="text" placeholder="Image url" />
        </section>
        <Button>Edit</Button>
    </form>)
}