import React from 'react';
import { useParams } from 'next/navigation';

export default function PostDetail() {
    const { id } = useParams();

    return (
        <div>
            <h1>Post Detail: {id}</h1>
        </div>
    );
}
