import React from 'react'
import {useSpring, animated}from 'react-spring'
import Button from 'react-bootstrap/Button'

const CardInfo=(props)=>{
    const style=useSpring({opacity:1,from :{opacity:0}})
    return(
        <animated.div className="p-1" style={style}>
            {/* <p className='g-card-title'>{props.title}</p> */}
            <p className='g-card-sub-title'>{props.subtitle}</p>
            <a href={props.link} target='_blank'rel='noopener noreferrer'><Button className='m-2'>View</Button></a>
            <a href={props.codelink} target='_blank'rel='noopener noreferrer'><Button className='m-2'>Code</Button></a>
        </animated.div>
    )
}
export default CardInfo