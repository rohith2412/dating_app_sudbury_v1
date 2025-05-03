import { notFound } from 'next/navigation';

async function getUser(id) {
    const res = await fetch(`http://localhost:3000/api/profile/${id}`);
    if (!res.ok) {
        notFound(); 
    }
    return res.json();
}

export default async function UserPage({ params }) {
    const {id} = params;
    const user = await getUser(id);

    return (
        <div>
            <h1>{user.name}</h1>
            <p>Email: {user.email}</p>
            <p>Age: {user.Age}</p>
            <p>Address: {user.Address}</p>
            <img src={user.image}></img>
        </div>
    );
}
