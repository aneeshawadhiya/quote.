import React from 'react'
import styled from 'styled-components';
import './about.css'
// import github from '../assets/logo/github.svg'

const AboutStyle = styled.div`
    width:100%;
    height:100vh;
    display:flex;
    justify-content:center;
    align-items:center;


    .social-icons{
        display:flex;
        a{
            padding: 0 1rem;
        }
    }

    h1{
        font-weight:bold;
    }

    .AboutSection{
        height:100vh;
        width:100%;
        display:flex;
        justify-content:center;
        align-items:center;
        margin-top:-100px;
    }
`;


export default function About() {
    return (
        <AboutStyle>
            <div className="AboutSection">
                <h3>Developed by : </h3>
                <h2>Aneesh Awadhiya</h2>
                <p></p>

                     {/* <div class="social-menu">
                        <ul>
                            <li><a href="https://github.com/aneeshawadhiya" target="blank"><img className="logo" src={github}></img></a></li>
                            <li><a href="https://www.instagram.com/imsanketbodke/" target="blank"><i class="fab fa-instagram"></i></a></li>
                            <li><a href="https://www.linkedin.com/in/sanket-bodake-995b5b205/" target="blank"><i class="fab fa-linkedin-in"></i></a></li>
                            <li><a href="https://codepen.io/sanketbodke"><i class="fab fa-codepen" target="blank"></i></a></li>
                        </ul>
                    </div> */}
            </div>
        </AboutStyle>
    )
}
