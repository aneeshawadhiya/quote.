import React from 'react'
import styled from 'styled-components';
import './about.css'
// import github from '../assets/logo/github.svg'

import pattern from '../assets/pattern.svg'
import { Fab } from '@mui/material';
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa"
import { useHistory } from 'react-router-dom';

const AboutStyle = styled.div`
    width:100%;
    height:100vh;
    display:flex;
    justify-content:center;
    flex-direction:column;
    align-items:center;

    p{
        padding: 0 3rem;
        max-width:600px;
        font-size:1rem;
        font-weight:lighter;
        color:white;
        text-align:center;
    }

/* 
    .page-title{
        margin-top:-6rem;
        margin-bottom:-2.5rem;
        margin-left:2rem;
        text-align:left;
        font-size:2rem;
        width:80%;
        z-index:5;
    } */


    .social-icons{
        display:flex;
        a{
            padding: 0 1rem;
        }
    }

    h1{
        font-weight:bold;
        color:white;
    }

    .text-pop-up-top {
        margin-top:1rem;
        font-size:4rem;
	    -webkit-animation: text-pop-up-top 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
	    animation: text-pop-up-top 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;

        @-webkit-keyframes text-pop-up-top {
            0% {
                -webkit-transform: translateY(0);
                        transform: translateY(0);
                -webkit-transform-origin: 50% 50%;
                        transform-origin: 50% 50%;
                text-shadow: none;
            }
            100% {
                -webkit-transform: translateY(-50px);
                        transform: translateY(-50px);
                -webkit-transform-origin: 50% 50%;
                        transform-origin: 50% 50%;
                text-shadow: 0 1px 0 #444444, 0 2px 0 #444444, 0 3px 0 #444444, 0 4px 0 #444444, 0 5px 0 #444444, 0 6px 0 #444444, 0 7px 0 #444444, 0 8px 0 #444444, 0 9px 0 #444444, 0 50px 30px rgba(0, 0, 0, 0.3);
            }
        }
        @keyframes text-pop-up-top {
            0% {
                -webkit-transform: translateY(0);
                        transform: translateY(0);
                -webkit-transform-origin: 50% 50%;
                        transform-origin: 50% 50%;
                text-shadow: none;
            }
            100% {
                -webkit-transform: translateY(-50px);
                        transform: translateY(-50px);
                -webkit-transform-origin: 50% 50%;
                        transform-origin: 50% 50%;
                text-shadow: 0 1px 0 #444444, 0 2px 0 #444444, 0 3px 0 #444444, 0 4px 0 #444444, 0 5px 0 #444444, 0 6px 0 #444444, 0 7px 0 #444444, 0 8px 0 #444444, 0 9px 0 #444444, 0 50px 30px rgba(0, 0, 0, 0.3);
            }
        }

       
    }

    .AboutSection{
        z-index:2;
        height:70vh;
        margin-bottom:6rem;
        width:80%;
        display:flex;
        justify-content:center;
        flex-direction:column;
        align-items:center;
        background: rgba( 5, 5, 5, 0.2 );
        box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
        backdrop-filter: blur( 16px );
        -webkit-backdrop-filter: blur( 16px );
        border-radius: 10px;
        border: 1px solid rgba( 255, 255, 255, 0.18 );
        
    }

        span {
        color: #f2f2f2;
        font-size: 12px;
        text-align: center;
        position:absolute;
        bottom:2rem;
        }

        span a {
            color:white;
            text-decoration: none;
        }

        span a:hover{
            color:#22a19b;
        }


    .bg-pattern{
        height:70vh;
        position:absolute;
        z-index:0;
        left:0;
        bottom:0;
    }

    .fab-icon{
        padding:10px;
    }

    //Responsive layout Desgin

    @media only screen and (max-width: 768px) {

        .bg-pattern{
            height:50vh;
        }


        h1{
            font-size:2rem;
            margin-bottom:2.5rem;
        }


        .text-pop-up-top {
            font-size:3rem;
        }

    }


    @media only screen and (max-width: 500px) {

    .bg-pattern{
        height:40vh;
    }



}




`;


export default function About() {

    const history = useHistory()

    const routeChange = () =>{ 
        let path = `/home`; 
        history.push(path);
      }
    return (
        <AboutStyle>

            <div className="AboutSection">
                <h1 className="text-pop-up-top">quote.</h1>
                <p>is an webapp for display of Inspirational quotations<br />
                It selects a quote at random from its database and displays it on the home screen.<br /><br />🎉</p>
                <p></p>
                <Fab onClick={routeChange} variant="extended" size="medium" color="#1b1b1b" aria-label="home">
                    <FaQuoteLeft className="fab-icon"/>
                      read a quote  
                    <FaQuoteRight className="fab-icon"/>
                </Fab>
                <span>
                    Made with ❤  
                    <a href="http://github.com/aneeshawadhiya" target="blank"> Aneesh</a>
                </span>
            </div>
            <img src={pattern} alt="bg-pattern" className="bg-pattern"/>
            
        </AboutStyle>
    )
}
