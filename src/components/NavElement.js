import React from  'react'

const NavElement=({title,icon})=>{
    return (
            <li style={{
                    backgroundColor: '#1a1a1b',
                    color:'white',
                    border:'none',
                    margin:'10px',
                    padding:'5px',
                    border:'none'
                    }}>
                {icon}
                {title}
            </li>
    )
}
export default NavElement