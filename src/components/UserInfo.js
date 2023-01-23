const UserInfo = ({value}) => {
    const {id, name, username, email, address, street, city} = value;

    console.log(value);

    return (
        <div>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>username: {username}</div>
            <div>email: {email}</div>
            <div>address: {address}</div>
            <div>street: {street}</div>
            <div>city: {city}</div>

        </div>
    );
};

export {UserInfo};