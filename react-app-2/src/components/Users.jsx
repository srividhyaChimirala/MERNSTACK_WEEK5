function User(props)
{
let {user}=props;
return (
<div className="text-center bg-gray-300 gradient shadow-2xl p-5 ring-2 ring-black rounded-2xl shadow-gray-50">
    <h2>{user.name}</h2>
    <p>{user.email}</p>
    <img src={user.image} alt="" className="block mx-auto rounded-3xl"/>
</div>
)
}
export default User;