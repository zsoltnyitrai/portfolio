import React from 'react'
import Card from'react-bootstrap/Card'


const Skills=({name,src})=>{
    return(
            <Card  className='m-2 p-3 ' style={{  maxWidth: '18rem', display:'flex',alignItems:'center',minHeight:'380px' }} >
                <img className='cardskill' src={src}></img>  
                <Card.Body style={{position:'absolute',bottom:'0'}} >
                <Card.Title className='text-center'>{name}</Card.Title>

                </Card.Body>
            </Card>

    )
}
export default Skills