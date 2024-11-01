'use client';
import * as React from 'react';

export default function Page({ params }) {
    const { slug } =  React.use(params);
    return (
        <div>
            <h1>Blog Page {slug}</h1>
        </div>
    );
}