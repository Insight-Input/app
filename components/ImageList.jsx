
import React from 'react'
import collection from '../pages/collection';

const hideShare = (id) => {
    document.getElementById(id).classList.remove("vesible");
    document.getElementById(id).classList.add("invesible");
}


const showShare = (id) => {
    document.getElementById(id).classList.remove("invesible");
    document.getElementById(id).classList.add("vesible");
}

export default function ImageList(props) {
    if (props.isLoading) return <p className='text-center'>Loading...</p>
    if (!props.tt) return <h1 className='text-center mt-5'>Type something EX: Jupiter and hit ENTER</h1>
    if (props.text == "") return <h1 className='text-center mt-5'>Type something EX: Jupiter and hit ENTER</h1>

    let i = 0



    return (
        <>
            <div className='flex flex-wrap justify-between mx-auto bg-slate-900 rounded-lg w-11/12 mt-52 mb-20'>
                {props.tt.map(
                    item =>
                        item.items.map((item, index) => {
                            return (<div key={index} onMouseLeave={() => hideShare(`share${index}`)} onMouseOver={() => showShare(`share${index}`)} className=' md:w-1/4 sm:w-1/2 xxs:w-full bg-slate-900'>
                                <div className=' w-full h-auto bg-slate-900'>
                                    <a className='text-white' rel="noreferrer" href={item.links[0].href/* '/collection?url=' + item.href */} target="_blank">
                                        <img src={item.links[0].href} alt={item.data[0].title} className='min-w-full max-w-full max-h-full' />
                                    </a>
                                </div>
                                <h3 className='text-white text-center font-bold'>{item.data[0].title}</h3>
                                <h3 id={`share${index}`} className='invesible text-center'><a target="_blank" rel="noreferrer" href={'https://twitter.com/intent/tweet?url=' + item.links[0].href.replaceAll(' ', '%20') + '&text=' + item.data[0].title} className='text-cyan-400 font-bold'>Tweet</a > <a target="_blank" rel="noreferrer" href={'https://www.facebook.com/sharer/sharer.php?u=' + item.links[0].href} className='font-bold text-blue-800'> Share</a></h3>
                            </div>)
                        })
                )
                }

            </div>
        </>

    )
}
