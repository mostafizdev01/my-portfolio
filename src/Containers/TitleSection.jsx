import React from 'react'

export default function TitleSection({ title }) {
    return (
        <>
            <div className=' text-center flex flex-col justify-center items-center mt-48 mb-10'>
                <h1 className=' text-sm font-bold tracking-tight text-white sm:text-5xl font-serif'>{title}</h1>
                <div>
                    <h2 className="divider divider-primary w-20"></h2>
                </div>
            </div>
        </>
    )
}
