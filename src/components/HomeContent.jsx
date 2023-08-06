import React from 'react'

function VideoCard({imageURL,logoURL,title,user,views,uploaded_at}){
    return (
      <>
        <div className="col-sm-12 col-md-6 col-lg-4 col-xxl-3">
            <a href="#" className="card border-0 bg-transparent mb-4 text-decoration-none">
                <div className="image-container" style={{height: '200px', overflow: 'hidden'}}>
                    <img src={imageURL} className="img-fluid" alt="logo" style={{width: '100%', height: '100%', objectFit: 'cover'}} />
                </div>
                <div className="card-video-details d-flex mt-2">
                    <div className='me-3'>
                        <img src={logoURL} width="40" alt='logo' className='rounded-circle'/>
                    </div>
                    <div>
                        <span className='fw-medium'>{title}</span>
                        <br/>
                        <span className='text-dark-emphasis' style={{fontSize:'14px'}}>{user}</span>
                        <br/>
                        <span className='text-dark-emphasis' style={{fontSize:'14px'}}>{views} Views • {uploaded_at} Months Ago</span>
                    </div>
                </div>
            </a>
        </div>
      </>
    )
}

export default function HomeContent() {
    return (
        <>
        <style>
            {`
                @media (min-width: 576px) {
                    .ms-sm-250 {
                        margin-left: 250px !important;
                    }
                }
            `}
        </style>

        <div className='my-2 px-4 ms-sm-250' style={{ height: '100%'}}>
            <div className='row'>
                <VideoCard imageURL='src\assets\thumbnail.png' logoURL = 'src\assets\\user-logo.png' title = 'Build 15 JavaScript Projects - Vanilla JavaScript Course' user = 'freeCodeCamp.org' views={100} uploaded_at={3}/>
                <VideoCard imageURL='src\assets\thumbnail.png' logoURL = 'src\assets\\user-logo.png' title = 'Build 15 JavaScript Projects - Vanilla JavaScript Course' user = 'freeCodeCamp.org' views={100} uploaded_at={3}/>
                <VideoCard imageURL='src\assets\thumbnail.png' logoURL = 'src\assets\\user-logo.png' title = 'Build 15 JavaScript Projects - Vanilla JavaScript Course' user = 'freeCodeCamp.org' views={100} uploaded_at={3}/>
                <VideoCard imageURL='src\assets\thumbnail.png' logoURL = 'src\assets\\user-logo.png' title = 'Build 15 JavaScript Projects - Vanilla JavaScript Course' user = 'freeCodeCamp.org' views={100} uploaded_at={3}/>
                <VideoCard imageURL='src\assets\thumbnail.png' logoURL = 'src\assets\\user-logo.png' title = 'Build 15 JavaScript Projects - Vanilla JavaScript Course' user = 'freeCodeCamp.org' views={100} uploaded_at={3}/>
                <VideoCard imageURL='src\assets\thumbnail.png' logoURL = 'src\assets\\user-logo.png' title = 'Build 15 JavaScript Projects - Vanilla JavaScript Course' user = 'freeCodeCamp.org' views={100} uploaded_at={3}/>
                <VideoCard imageURL='src\assets\thumbnail.png' logoURL = 'src\assets\\user-logo.png' title = 'Build 15 JavaScript Projects - Vanilla JavaScript Course' user = 'freeCodeCamp.org' views={100} uploaded_at={3}/>
                <VideoCard imageURL='src\assets\thumbnail.png' logoURL = 'src\assets\\user-logo.png' title = 'Build 15 JavaScript Projects - Vanilla JavaScript Course' user = 'freeCodeCamp.org' views={100} uploaded_at={3}/>
            </div>
        </div>
        </>
    )
}

