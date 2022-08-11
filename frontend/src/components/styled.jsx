import styled from "styled-components"


export const Cards=styled.div`
    width:100%;
    display:grid;
    grid-gap:10px;
    grid-template-columns:repeat(7,1fr);
    &>div{
        height:14rem;
        text-align:center;
        border:1px solid black;
        cursor: pointer;
    
        &>img{
            padding:5px;
        }
    }

`