import React from 'react'
import styled from 'styled-components'


const NavbarStyle = styled.div`
    width:100%;
    height:8rem;
    background-color: transparent;

    h1{
        font-size:1.7rem;
    }


    .logo_space{
        display:flex;
        justify-content:center;
        align-items:center;
        color:white;
        padding:1.25rem;
    }


    @media only screen and (max-width: 500px) {
        .logo_space{
            font-size:0.75rem;
        display:flex;
        justify-content:center;
        align-items:center;
        color:white;
        padding:1.5rem;
    }
        
    }
`;

export default function Navbar() {
    return (
        <NavbarStyle>
            <div className="logo_space">
                <h1>quote.</h1>
            </div>
        </NavbarStyle>
    )
}
