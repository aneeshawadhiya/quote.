import { Fab } from '@mui/material';
import React from 'react'
import styled from 'styled-components';
import emojie from '../assets/emojie.svg'
import { FaGithub, FaLinkedinIn } from "react-icons/fa"


const UnderDevelopementStyle = styled.div`

    width:100%;
    height:100vh;
    font-family:'Nexa Bold';
    color:white;
    text-align:center;
    display:flex;
    justify-content:center;
    align-items:center;


    .emojie{
        width:15rem;
    }

    .container{
        z-index:2;
        height:70vh;
        margin-bottom:6rem;
        width:80%;
        display:flex;
        justify-content:center;
        flex-direction:column;
        background: rgba( 5, 5, 5, 0.2 );
        box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
        backdrop-filter: blur( 16px );
        -webkit-backdrop-filter: blur( 16px );
        border-radius: 10px;
        border: 1px solid rgba( 255, 255, 255, 0.18 );

        h2{
            margin-bottom:4rem;
        }
    }

    h3{
        line-height:30px;
    }

    .fab-icon{
        padding: 0 1rem;
    }


    .custom-msg{
        max-width:500px;
        padding: 0 2rem;
    }

    .social-btn{
        margin-top:1rem;
    }

    @media only screen and (max-width: 768px) {

        h3{
            font-size:1rem;
            margin-top:-1rem;
        }


    }
`;

export default function UnderDevelopement() {
    return (
        <UnderDevelopementStyle>
            <div className="container">
                <img src={emojie} alt="emojie" className="emojie" />
                <h3 className="custom-msg">Uh ho.. !! <br /> Seems like developer forgot to complete this part. <br /> No worries, you can contact the developer and remind him to complete it.</h3>
            
                <Fab href="https://www.github.com/aneeshawadhiya/" className="social-btn" variant="extended" size="medium" color="#1b1b1b" aria-label="home">
                    <FaGithub className="fab-icon"/>
                      Github  
                </Fab>
                <Fab href="https://www.linkedin.com/in/aneeshawadhiya/" className="social-btn" variant="extended" size="medium" color="#1b1b1b" aria-label="home">
                    <FaLinkedinIn className="fab-icon"/> 
                      LinkedIN  
                </Fab>
            </div>
        </UnderDevelopementStyle>
    )
}
