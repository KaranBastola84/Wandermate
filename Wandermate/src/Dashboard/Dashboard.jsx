import React from 'react'

function Dashboard() {
  return (
    <>
    <div>

    </div>
    </>
  )
}

export default Dashboard

function Paths(){
    return (
        <>
        <div className="paths">
            <div className="path">
                <div className="path-icon">
                    <i className="fa-solid fa-house"></i>
                </div>
                <div className="path-text">
                    <p>Home</p>
                </div>
            </div>
            <div className="path">
                <div className="path-icon">
                    <i className="fa-solid fa-map-location-dot"></i>
                </div>
                <div className="path-text">
                    <p>Destination</p>
                </div>
            </div>
            <div className="path">
                <div className="path-icon">
                    <i className="fa-solid fa-hotel"></i>
                </div>
                <div className="path-text">
                    <p>Hotels</p>
                </div>
            </div>
            <div className="path">
                <div className="path-icon">
                </div>
            </div>
        </div>
        </>
    )
}
