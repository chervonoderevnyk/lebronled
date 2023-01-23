let UserInfo = ({value}) => {

    return (
        <div>

            <div>id: {value.id}</div>
            <div>name: {value.name}</div>
            <div>username: {value.username}</div>
            <div>email: {value.email}</div>
            <div>address: {value.address.zipcode}</div>
            <div>city: {value.address.city}</div>
            <div>street: {value.address.street}</div>
            <div>company: {value.company.name}</div>
            <div>company: {value.company.catchPhrase}</div>
            <div>company: {value.company.bs}</div>
            <div>phone: {value.phone}</div>

        </div>
    );
};

export {UserInfo};
