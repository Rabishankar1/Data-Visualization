import React from 'react'
import { Link } from 'react-router-dom';
import scatter from '../../src/scatter.png'
import bars from '../../src/bars.webp'

function Home() {
    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-between", height: "50vh" }}>
            <h2>Click on the type of graph that you want to view</h2>
            <div className="button-box" style={{ display: "flex", justifyContent: "space-between", width: "50vw" }}>
                <Link to="/scatter">
                    <div><img className='btn' src={scatter} alt="" /></div>
                </Link>
                <Link to="/bars">
                    <div><img className='btn' src={bars} alt="" /></div>
                </Link>
            </div>
        </div>
    )
}

export default Home