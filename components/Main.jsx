import React from 'react'
import { useState } from 'react';
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import ImageList from './ImageList';




export default function Main() {

    const [text, setText] = useState("");
    const [daata, setDaata] = useState(null)
    const [isLoading, setLoading] = useState(false)

    const handleChange = (e) => {
        setText(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault();
        setLoading(true)
        fetch('https://images-api.nasa.gov/search?q=' + text + '&media_type=image')
            .then((res) => res.json())
            .then((data) => {
                setDaata([data.collection]/* .items */)
                setLoading(false)
            })
    }

    function more(link) {

    }

    return (
        <div className={styles.container}>
            <div className="main">
            </div>
            <div>
                <div className='flex justify-center'>
                    <Image
                        src="/whitetrans.png"
                        width={500}
                        height={500}
                    />
                </div>
                <form onSubmit={handleSubmit}>
                    <input value={text} onChange={handleChange} type="text" placeholder='Type something EX:Jupitar and hit ENTER' name="search" id="searchInput" className='block mx-auto bg-white w-1/2 rounded-md p-2.5 text-black' />
                </form>
            </div>
            <ImageList tt={daata} isLoading={isLoading} />
        </div>
    )
}
