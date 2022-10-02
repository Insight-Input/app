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
        if (text == "") {
            return false
        }
        setLoading(true)
        fetch('https://images-api.nasa.gov/search?q=' + text + '&media_type=image')
            .then((res) => res.json())
            .then((data) => {
                setDaata([data.collection]/* .items */)
                setLoading(false)
            })
    }

    function aiSubmit(e) {
        console.log('AI MAgic')
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
                        alt="Logo"
                    />
                </div>
                <form onSubmit={handleSubmit}>
                    <input value={text} onChange={handleChange} type="text" placeholder='TYPE YOUR TEXT HERE' name="search" id="searchInput" className='block mx-auto bg-white w-1/2 xxs:w-4/5 rounded-md p-2.5 text-black' />
                    <div className='pt-5 flex justify-center'>
                        <button type="submit" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">SEARCH</button>
                        <button type="button" onClick={aiSubmit} className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"> Apply AI Magic</button>
                    </div>
                </form>
            </div>
            <ImageList tt={daata} isLoading={isLoading} text={text} />
        </div>
    )
}
