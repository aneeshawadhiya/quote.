
import styled from 'styled-components'
import '../index.css'
import Quote from './Quote';
import React from 'react'



const HomeStyle = styled.div`

    height:100vh;
    margin-top:1rem;
    font-family: 'Nexa Regular';
    width:100%;
    
    h1{
        color:white;
        margin:0;
    }


    @media only screen and (max-width:500px){
        margin-top:2rem;
    }
`;



export default function Home() {
    return (
            <HomeStyle >
                <Quote/>
            </HomeStyle>
    )
}
