import React from 'react'
import styled from 'styled-components'
import FetchQuote from './FetchQuote';


const QuoteStyle = styled.div`
    width:100%;
    height:90vh;
    letter-spacing: 3px;


    .quote-section{
        display:flex;
        justify-content:center;
        align-items:center;
        width:100%;
        height:90%;
    }

    .innerQuote{
        max-width:1000px;
        text-align:center;
        margin: 0 7rem;
    }


    @media only screen and (max-width: 500px) {


        .quote-section{
            margin-top:-3rem;
        }

        .innerQuote{
            max-width:300px;
            text-align:left;
            margin: 0 7rem;
            font-size: 12px;
        }
    }
`;



export default function Quote() {
    return (
        <QuoteStyle>
            <div className="quote-section">
                <div className="innerQuote">
                    <h1>
                        <FetchQuote/>
                    </h1>
                </div>
            </div>
        </QuoteStyle>
    )
}
