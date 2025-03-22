'use client'

import { useEffect, useState } from 'react';
import { Doc } from '../../../../convex/_generated/dataModel';
import { api } from '../../../../convex/_generated/api';

type Roommate = Doc<"roommates">


const GetAllRoommates: React.FC = () => {
    const [roommates, setRoommates] = useState<Roommate[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchRoommates = async () => {
            const roommates = api.roommates.getAllRoomMates
        };

        fetchRoommates();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <h1>Roommates</h1>
            <ul>
                {roommates.map((roommate) => (
                    roommate.roommates[0]
                ))}
            </ul>
        </div>
    );
};

export default GetAllRoommates;