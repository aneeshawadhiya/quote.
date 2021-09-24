import React from 'react'
import styled from 'styled-components';
import Bgcolor from './Bgcolor';


const ThemeStyle = styled.div`

    width:100%;
    height:100vh;
    font-family:'Nexa Bold';
    color:white;
    text-align:center;

    .container{
        width:100%;
        height:80vh;
        display:flex;
        flex-direction:column;

        h2{
            margin-bottom:4rem;
        }
    }

    .color-red{
        width:2.5rem;
        height:2.5rem;
        background-color:#c20000;
        opacity:0.4;
        border-radius:1rem;
        border:3px solid white;
    }

    .color-black{
        width:2.5rem;
        height:2.5rem;
        background-color:#000000;
        opacity:0.4;
        border-radius:1rem;
        border:3px solid white;
    }

    .color-blue{
        width:2.5rem;
        height:2.5rem;
        background-color:#000f94;
        opacity:0.4;
        border-radius:1rem;
        border:3px solid white;
    }

    .color-green{
        border:3px solid white;
        width:2.5rem;
        height:2.5rem;
        background-color:#137000;
        opacity:0.4;
        border-radius:1rem;
    }

    .color-container{
        display:flex;
        justify-content:space-around;
        width:600px;
    }


    @media only screen and (max-width: 768px) {

        .color-container{
            display:flex;
            flex-direction:column;
            justify-content:space-between;
            align-items:center;
            height:300px;
            width:400px;
        }


        .container{
        width:100%;
        height:80vh;
        display:flex;
        flex-direction:column;

        h2{
            margin-bottom:4rem;
        }
    }

    }

`;

export default function Theme() {
    return (
        <ThemeStyle>
            <div className="container">
                <h2>Choose a color:</h2>
                <Bgcolor />

                {/* <div className="color-container">
                    <div className="color-red"></div>
                    <div className="color-blue"></div>
                    <div className="color-green"></div>
                    <div className="color-black"></div>
                </div> */}
            </div>
        </ThemeStyle>
    )
}
