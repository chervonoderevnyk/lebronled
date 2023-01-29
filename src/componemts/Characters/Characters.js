import {Character} from "../Character/Character";

const Characters = () => {
        const characters = [
            {
                id: 19,
                name: "Antenna Rick",
                status: "unknown",
                species: "Human",
                gender: "Male",
                image: "https://rickandmortyapi.com/api/character/avatar/19.jpeg",
            },
            {
                id: 389,
                name: "Zeta Alpha Rick",
                status: "Dead",
                species: "Human",
                gender: "Male",
                image: "https://rickandmortyapi.com/api/character/avatar/389.jpeg",
            },
            {
                id: 801,
                name: "7+7 Years Old Morty",
                status:"unknown",
                species: "Human",
                gender: "Male",
                image: "https://rickandmortyapi.com/api/character/avatar/801.jpeg",
            },
            {
                id: 624,
                name: "Snuffles",
                status: "Alive",
                species: "Animal",
                gender: "Male",
                image: "https://rickandmortyapi.com/api/character/avatar/624.jpeg",
            },
            {
                id: 759,
                name: "Turkey Morty",
                status: "Alive",
                species: "Animal",
                gender: "Male",
                image: "https://rickandmortyapi.com/api/character/avatar/759.jpeg",
            },
            {
                id: 722,
                name: "Air Tina-Teer",
                status: "Dead",
                species: "Human",
                gender: "Female",
                image: "https://rickandmortyapi.com/api/character/avatar/722.jpeg",
            },
        ]
        return (
            <div>
                {
                    characters.map(character=><Character key={character.id} character={character}/>)
                }
            </div>
        );
};

export {Characters};