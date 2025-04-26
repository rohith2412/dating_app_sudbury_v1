"use client"

import { useState, useEffect } from "react";

async function fetchAllUsers() {
    const res = await fetch("http://localhost:3000/api/user");
    const data = await res.json();
    return data;
}

export function Alluser() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true); 
            const allUsers = await fetchAllUsers();
            setUsers(allUsers);
            setLoading(false); 
        };

        fetchData();

        const intervalId = setInterval(fetchData, 180000);

        return () => clearInterval(intervalId);
    }, []); 

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            {users.map((item) => (
                <div key={item.email}>
                    <h1>{item.name}</h1>
                    <h1>{item.email}</h1>
                    <h1>{item.PhoneNumber}</h1>
                    <h1>{item.Address}</h1>
                    <h1>{item.College}</h1>
                    <h1>{item.Education}</h1>
                    <h1>{item.gender}</h1>
                    <h1>{item.Age}</h1>
                </div>
            ))}
        </div>
    );
}
