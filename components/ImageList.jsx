
import React from 'react'


let i = 0

export default function ImageList(props) {
    if (props.isLoading) return <p className='text-center'>Loading...</p>
    if (!props.tt) return <p className='text-center'>Enter you Query above</p>
    return (
        <>
            <div className='flex flex-wrap justify-between mx-auto bg-white rounded-lg w-11/12 mt-52'>
                {props.tt.map(
                    item =>
                        item.items.map(item =>
                            <div key={i++} className=' w-1/4 mb-5 mt-5'>
                                <div className=' w-full h-auto'>
                                    <a className='text-black' href={item.links[0].href} target="_blank">
                                        <img src={item.links[0].href} className='max-w-full max-h-full' />
                                    </a>
                                </div>
                                <h3 className='text-black text-center font-bold'>{item.data[0].title}</h3>
                                <h3 className='text-center'><a target="_blank" href={'https://twitter.com/intent/tweet?url=' + item.links[0].href.replaceAll(' ', '%20') + '&text=' + item.data[0].title} className='text-cyan-400 font-bold'>Tweet</a > <a target="_blank" href={'https://www.facebook.com/sharer/sharer.php?u=' + item.links[0].href} className='font-bold text-blue-800'> Share</a></h3>
                            </div>
                        )
                )
                }

            </div>
        </>

    )
}
