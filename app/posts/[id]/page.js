import React from 'react';
import { useRouter } from 'next/router';

export default function PostDetail() {
    const router = useRouter();
    const { id } = router.query;

    if (!id) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>Post Detail: {id}</h1>
        </div>
    );
}
