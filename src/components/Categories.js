import React from 'react'
import styled from 'styled-components';



const CategoriesStyle = styled.div`
   
    width:100%;
    height:100vh;

    .category-card{
        background:white;
    }

    .container{
        width:100%;
        display:flex;
        flex-direction:column;
        height:90vh;
        background-color:#f7f7f7;
    }
`;

export default function Categories() {
    return (
        <CategoriesStyle>
            <div className="container">
               
            </div>
        </CategoriesStyle>
    )
}
