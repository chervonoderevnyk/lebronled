// const User = ({user}) => {
//     const {id, name, username, email, address, street, suite, city, zipcode, geo, lat, lng} = user;
//
//     return (
//         <div>
//             <h2>{item.id} - {item.name}</h2>
//             <div>id: {id}</div>
//             <div>name: {name}</div>
//             <div>username: {username}</div>
//             <div>email: {email}</div>
//             <div>address: {address}</div>
//             <div>street: {street}</div>
//             <div>suite: {suite}</div>
//             <div>city: {city}</div>
//             <div>zipcode: {zipcode}</div>
//             <div>geo: {geo}</div>
//             <div>lat: {lat}</div>
//             <div>lng: {lng}</div>
//         </div>
//     );
// };
//
// export {User};

export  function User({item}) {
    return (<div>
        <div>{item.id} - {item.name} - {item.username}</div>

    </div>);
}