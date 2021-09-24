import React from 'react'
import styled from 'styled-components';



const CategoriesStyle = styled.div`
    display:grid;
    place-items:center;
    width:100%;
    height:100vh;
`;

export default function Categories() {
    return (
        <CategoriesStyle>
            <h1>This is Category</h1>
        </CategoriesStyle>
    )
}
