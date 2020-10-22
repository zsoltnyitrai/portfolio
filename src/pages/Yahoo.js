import React from 'react'
import '../styles/yahoo.css'
import yahoologo from '../assets/images/yahoo-logo.png'
import defaultpic from '../assets/images/defaultpic.png'
import dots from '../assets/images/3dots.png'

const Yahoo=()=>{
    const accounts=[
        {
            name:'Nyitrai Zsolt',
            email:'nyitraizsolt1993@gmail.com',
            status:'signed out',
            profile:defaultpic
        },
        {
            name:'James John',
            email:'jamesjohn@gmail.com',
            status:'signed out',
            profile:defaultpic
        },
        {
            name:'Laura Parlmer',
            email:'laurapalmer@gmail.com',
            status:'signed out',
            profile:defaultpic
        },
        {
            name:'Dana Washington',
            email:'danawashingtow@gmail.com',
            status:'signed out',
            profile:defaultpic
        },
    ]
    const accountHandler=()=>{
        return accounts.map(account=>{
            return(
                <div>
                <li key={account.name} className='login-box-account-card'>
                    <div className='login-box-account-profile-pic-box'>
                        <img src={defaultpic} className='login-box-account-profile-pic'></img>
                        <div className='login-box-state-indicator'></div>
                    </div>
                    <div className="card-container">
                        <div className='card-container-title'>{account.name}</div>
                        <div className='card-container-email'>{account.email}</div>
                        <div className='card-container-status'>{account.status}</div>
                    </div>
                    <div className="card-container-dots">
                        <img src={dots} alt=""/>
                    </div>
                </li>
                </div>
                )
            })
        }

    return(
        <div>
            <div className='yahoo-header'>
                <span className='yahoo-header yahoo-logo'>
                    <a href='/yahoo'>
                        <img className='yahoo-logo' src={yahoologo}/>
                    </a>
                </span>
                <span className='yahoo-header-help'>
                    <a href="">help</a>
                </span>
            </div>
            <div className="login-box-container">
                <div className='login-box right'>
                    <div className="login-box-header">
                        <div className="login-box-header-image text-center">
                            <img className='yahoo-header-logo ' src={yahoologo} alt=""/>
                        </div>
                    </div>
                    <div className="login-box-account-changer">
                        <div className="login-box-account-changer-header">
                            <span>Hi, there!</span>
                        </div>
                        <div className="login-box-account-changer-description">
                            <div className ='login-box-account-changer-description-header'>Welcome</div>
                            <span>Select an account to sign in or manage a saved account on this device</span>
                        </div>
                        <div className="login-box-account-changer-accounts">
                            <ul>
                                {accountHandler()}
                            </ul>
                        </div>
                    </div>
                    <div className="login-box-right-use-another-account">
                        <a href="#">Use another account</a>
                    </div>
                </div>
            </div>
        </div>  
    )
}
export default Yahoo