import React from 'react'

export default function Card({image,title,description,url1,url2,url3,red1,red2,red3}) {
  return (

    <div className='card'>
            <img className='imgAvatar' src={image} alt={title} />
            <h2>{title}</h2>
            <div className='AlCenter'>
              <p>{description}</p>
            </div>

          <div className='redes'>
            <div>
              <a className='icoRedes' href={url1}>
                <img className='imgRedes' src={red1} alt={title} />
              </a>
            </div>    
            <div>
              <a className='icoRedes' href={url2}>
                <img className='imgRedes' src={red2} alt={title} />
              </a>
            </div>    
            <div>
              <a className='icoRedes' href={url3}>
                <img className='imgRedes' src={red3} alt={title} />
              </a>
            </div>    
          </div>
    </div>

  )
}
