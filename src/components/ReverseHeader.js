import React from 'react'
import '../ReverseHeader.css'
const ReverseHeader =()=>{
    return(
        <div className='header'>
            <div className='header-box'>
                <div className='header-box-part-one'>
                    <a className='header-box-part-one-reddit-logo-box' href="/">Reddit</a>
                </div>

                <div aria-label='' className='dropdown'>
                    <button className='dropdown-button' tabIndex='0'>
                        <span className='dropdown-button-placeholder'>home</span>
                    
                    </button>
                </div>

                <div className='searcher'>
                    <label className='searcher-label' htmlFor="searcher">
                        <div className='serach-label-logo'>P</div>
                    </label>
                    <form className='reddit-search' action="/search/">
                        <input type="search" className="reddit-search-input" placeholder="Search" value=""/>
                    </form>
                </div>

                <div className='header-box-part-two'>
                    <div className='header-box-part-two-icon-box'>
                        <div className="header-box-part-two-icon-box-box">
                            <a href="" className='icon-box'>1</a>
                            <a href="" className='icon-box'>2</a>
                            <a href="" className='icon-box'>3</a>
                        </div>
                    </div>

                    <div className="header-box-part-two-last">
                        <div className="chat-message-create-getcoins">
                            <span className='chat-message-create-getcoins-icon'>a</span>
                            <span className='chat-message-create-getcoins-icon'>b</span>
                            <span className='chat-message-create-getcoins-icon'>c</span>
                        </div>

                        <div className="header-box-part-two-last-user-dropdown">
                            <button className='header-box-part-two-last-user-dropdown-button'>
                                <span className='dropdown-button-box'>
                                    <span className='dropdown-button-box-one'>
                                        <span className='dropdown-button-box-one-logo'>1</span>
                                        <span className='dropdown-button-box-one-user'>Alma</span>
                                    </span>
                                    <span className='dropdown-button-box-one-arrow'>1</span>
                                </span>
                            </button>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default ReverseHeader