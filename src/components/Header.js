import React ,{useState} from 'react'
import Navbar from 'react-bootstrap/Navbar'
import {FaRedditAlien} from  'react-icons/fa'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import {AiOutlineRise} from 'react-icons/ai'





const Header =({basicSubreddits})=>{
    const [open, setOpen]=useState(false)
    const [selection, setSelection]=useState([])
    const toggle=()=>setOpen(!open)
    Header.handleClickOutside=()=>setOpen(false)

    function handleOnClick(item){

    }


   
    return(
        <div>
            <Row 
                style={{
                    backgroundColor: '#1a1a1b',
                    color:'#d4d7d9'

                }}>
                <Col  lg={true}
                    xs={4}
                    style={{
                        flexGrow: '0',
                        display:'flex',
                        margin:'5px',
                        justifyContent:'center',
                        alignItems:'center'
                }}>
                    <FaRedditAlien className='reddit-logo' />Reddit
                </Col>

                <Col  lg={true}  
                    xs={4}
                    style={{
                        flexGrow: '0',
                        display:'flex',
                        margin:'5px',
                        color: '#d4d7d9',
                        justifyContent:'center',
                        alignItems:'center'
                        }}
                    className='dropdown d-block'>
                    <div
                            className='d-flex'
                            role='button'
                            onKeyPress={()=>toggle(!open)}
                            onClick={()=>toggle(!open)}
                        >
                        <div className='dropdown-title'>{'title '}</div>
                        <div className='action'>
                            <span className='m-2 text-light'>{open? 'close':'open'}</span>
                        </div>
                    </div>
                        {open &&(
                            <ul className='dropdown-items'>
                                {basicSubreddits.map(item=>(
                                    <li className='d-flex p-0 dropitem' key={item.title}>
                                         <span className='m-2 dropdown-item-icon'>{item.icon}</span>
                                         <span className='m-2'>{item.title}</span> 
                                     </li>
                                ))}
                            </ul>)
                        }
                    
                </Col>
                <Col    md={true}                 
                    xs={4}
                    
                    style={{
                        flexGrow: '1',
                        margin:'5px',
                }}>      
                    <input
                        type="text" 
                        placeholder="Search" 
                        className="mr-sm-2 nav-input"
                        style={{   
                            backgroundColor: '#272729',
                            }} />  
                </Col>
                <Col lg={true}
                    xs={4}
                    style={{
                        flexGrow: '1',
                        margin:'5px',
                        }}>
                    <span><AiOutlineRise/></span>
                    <span><AiOutlineRise/></span>
                    <span><AiOutlineRise/></span>
                </Col>

            </Row>
            

            
        </div>
        
    
    )
                                }
export default Header

