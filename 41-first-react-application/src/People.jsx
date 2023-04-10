import { useState, useEffect } from "react"

export default function People() {

    const [people, setPeople] = useState([
        {name: 'Sasha', id: 1},
        {name: 'Gatine Arancione', id: 2},
        {name: 'Diderot', id: 3},
        {name: 'Signor Peletti', id: 4}
    ])
   const getPeople = () => 
   {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(result => console.log(result))
   }
   useEffect(() => 
   {
    getPeople()
   }, [])
    return (
        <>
            <h1>People</h1>
            <ul>
                {people.map(person => 
                <li key={person.id}>{person.name}</li>)}
            </ul>
        </>
    )
}