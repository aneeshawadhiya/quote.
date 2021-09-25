import React, { useContext } from 'react'
import styled from 'styled-components';

import AppContext from './AppContext';


const ThemeStyle = styled.div`

    width:100%;
    height:100vh;
    font-family:'Nexa Bold';
    color:white;
    text-align:center;
    display:flex;
    justify-content:center;
    align-items:center;

    .active{
        border:2px solid white;
    }

    .color-container{
        width:80%;
        height:100%;
        margin: 2rem 5rem;
        display:flex;
        flex-direction:column;
        justify-content:space-evenly;
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
        padding: 0 1rem;
        color:#cccccc;
    }

    .grid-item{
        
        background:#c1c1c1;
    }

    .row1{
        height:40%;
        width:100%;
        display:flex;
        justify-content:space-evenly;
        align-items:center;

        //Colors button for Row 1 

        //teal
        .sq1{
            background: linear-gradient(154deg, #537895, #000000);
        }
        
        //pine
        .sq2{
            background: linear-gradient(154deg, #02a388, #000000);
        } 


        //rose
        .sq3{
            background: linear-gradient(154deg, #b02e0c, #000000);
        } 



    }
    .row2{
        height:40%;
        width:100%;
        display:flex;
        justify-content:space-evenly;
        align-items:center;


        //dark
        .sq4{
            background: linear-gradient(154deg, #414141, #000000);
        } 


        //cider
        .sq5{
            background: linear-gradient(154deg, #f2a65a, #000000);
        } 


        //pride
        .sq6{
            background: linear-gradient(to right top, #c717d8, #3c7dff, #00a9ff, #00c4f8, #00d7d1, #54d8aa, #8ad481, #bccc60, #ddb24a, #f69550, #ff766a, #fb5f8e);
        } 
    }


    .square{
        width:20%;
        height:50%;
        background:white;
        color:black;
        border-radius:1rem;

            p{
                text-align:center;
                color:white;    
                font-size:1.5rem;
            }
    }

    .color-names{
        width:100%;
        height:100%;
        display:grid;
        place-content:center;
    }

    @media only screen and (max-width: 768px) {

        h3{
            font-size:1rem;
            padding: 0 2rem;
        }

    }

    @media only screen and (max-width: 568px) {


        .container{
            margin:5rem 0;
            
            height:90vh;
        }

        h3{
            font-size:1rem;
            padding: 0 2rem;
        }

        .row1{
            height:60%;
            flex-direction:column;  
            margin-bottom:-25px;
        }

        .row2{
            height:60%;
            flex-direction:column;  
        }
        

        .square{
            width:80%;
            height:70px;
            background:white;
            color:black;
            border-radius:1rem;
            
            p{
                text-align:center;
                color:white;    
            }
        }

        .color-container{
            justify-content:space-around;
            
        }

}
`;

export default function Theme() {

    const {background, setBackground} = useContext(AppContext);
    return (
        <ThemeStyle>
            <div className="container">
                <h1>choose colors.</h1>
                <h3>the colors are picked carefully to match the asthetic of the App design.</h3>
                <div className="color-container">
                    <div className="row1">
                        <div className="square sq1" onClick={()=> setBackground("#537895")}>
                            <div className="color-names">
                                <p>teal</p>
                            </div>
                            
                            </div>
                        <div className="square sq2" onClick={()=> setBackground("#166d3b")}>
                            <div className="color-names">
                                <p>pine</p>
                            </div>
                        </div>
                        <div className="square sq3" onClick={()=> setBackground("#b02e0c")}>
                            <div className="color-names">
                                <p>rose</p>
                            </div>
                        </div>
                        
                    </div>
                    <div className="row2">
                        <div className="square sq4" onClick={()=> setBackground("#414141")}>
                            <div className="color-names">
                                <p>dark</p>
                            </div>
                        </div>
                        <div className="square sq5" onClick={()=> setBackground("#f2a65a")}>
                            <div className="color-names">
                                <p>cider</p>
                            </div>
                        </div>
                        <div className="square sq6" onClick={()=> setBackground("#02a388")}>
                            <div className="color-names">
                                <p>pride</p>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </ThemeStyle>
    )
}
