import {Simpson} from "../Simpson/Simpson";

const Simpsons = () => {
    const simpsons = [
        {
            id: 1,
            name: 'Homer',
            surname: 'Simpson',
            image: 'https://upload.wikimedia.org/wikipedia/uk/0/02/Homer_Simpson_2006.png'
        },
        {
            id: 2,
            name: 'Marge',
            surname: 'Simpson',
            image: 'https://upload.wikimedia.org/wikipedia/uk/0/0b/Marge_Simpson.png'
        },
        {
            id: 3,
            name: 'Bart',
            surname: 'Simpson',
            image: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
        },
        {
            id: 4,
            name: 'Liza',
            surname: 'Simpson',
            image: 'https://upload.wikimedia.org/wikipedia/uk/thumb/a/ae/Lisasmiling.png/170px-Lisasmiling.png'
        },
        {
            id: 5,
            name: 'Maggi',
            surname: 'Simpson',
            image: 'https://upload.wikimedia.org/wikipedia/uk/9/9d/Maggie_Simpson.png'
        },
    ]
    return (
        <div>
            {
                simpsons.map(simpson=><Simpson key={simpson.id} simpson={simpson}/>)
            }
        </div>
    );};

export {Simpsons};