import React from 'react';
import '../assets/back.png'


export default function SecondPage() {
    return (
        <div>
            <img src={require('../assets/back.png')} style={backArrowStyling} alt={'back to first page Logo'} />
        </div>
    )
}

const backArrowStyling = {
    height: '60px',
    position: 'absolute',
    left: '10px',
    paddingTop: '20px'
}