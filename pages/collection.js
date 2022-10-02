import { useRouter } from 'next/router'
import { useState, useEffect } from 'react';

export default function collection() {
    const router = useRouter()

    const [daata, setDaata] = useState(null)
    const [isLoading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        fetch(router.query.url)
            .then((res) => res.json())
            .then((data) => {
                setDaata(data/* .items */)
                setLoading(false)
            })
    }, []);

    if (isLoading == true) return <p className='text-center'>Loading...</p>
    console.log(daata)

    return (
        <p>Welcome to About!{router.query.url}</p>

    )

}
