import React from 'react'

export default function Navbar() {
    return (
        <>
        <div className="nav-container bg-white" style={{position: 'sticky', top:0, zIndex: 1000}}>
            <div className="d-flex flex-wrap align-items-center justify-content-between p-2 px-4">
                {/* First column */}
                <div className="col-md-auto d-flex align-items-center">
                    <i className="bi bi-list" style={{fontSize: "24px"}}></i>
                    <img src="src\assets\yt-logo.png" width="120" alt="YouTube logo" className="ms-2"></img>
                </div>

                {/* Second column */}
                <div className="col col-sm-4 col-md-6 col-lg-5 d-none d-sm-flex align-items-center justify-content-center">
                    <div className="input-group flex-nowrap col-10" style={{width: "90%"}}>
                        <input 
                            type="text" 
                            className="form-control rounded-start-pill" 
                            placeholder="Search" aria-label="Recipient's username" 
                            aria-describedby="basic-addon2"
                        />

                        <button className="input-group-text rounded-end-circle" id="basic-addon2">
                        <i className="bi bi-search" style={{fontSize: "20px"}}></i>
                        </button>
                    </div>
                    
                    <div className="ms-2">
                        <i className="bi bi-mic-fill ms-1" style={{fontSize: "20px"}}></i>
                    </div>
                </div>

                {/* Third column */}
                <ul className="nav col-md-auto">
                    <li>
                        <a href="#" className="nav-link px-2">
                        <i className="bi bi-camera-reels text-black" style={{fontSize: "20px"}}></i>
                        </a>
                    </li>

                    <li>
                        <a href="#" className="nav-link px-2">
                        <i className="bi bi-bell text-black" style={{fontSize: "20px"}}></i>
                        </a>
                    </li>

                    <li>
                        <a href="#" className="nav-link px-2">
                        <img src="src\assets\user-logo.png" className='rounded-circle' width={35}></img>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        </>
    )
}
