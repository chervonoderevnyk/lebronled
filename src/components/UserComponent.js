export default function UserComponent({item,infUser}){

    return (<div>
        <h2>{item.id} - {item.name}</h2>
        <button onClick={()=> {infUser(item);}}>Details</button>
    </div>);
}