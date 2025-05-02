async function getUser(id) {
    const res = await fetch(`http://localhost:3000/api/user/${id}`, { cache: 'no-store' });
    if (!res.ok) {
        console.error('Failed to fetch user:', res.status);
        throw new Error('Failed to fetch user');
    }
    return res.json();
}


export default async function UserPage({ params }) {
    const user = await getUser(params.id);

    return (
        <div className="p-10">
            <h1 className="text-2xl font-bold mb-4">{user.name}</h1>
            <img src={user.image} alt={user.name} className="w-32 h-32 rounded-full mb-4" />
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Gender:</strong> {user.gender}</p>
            <p><strong>Age:</strong> {user.Age}</p>
            <p><strong>Address:</strong> {user.Address}</p>
            <p><strong>Education:</strong> {user.Education}</p>
        </div>
    );
}
