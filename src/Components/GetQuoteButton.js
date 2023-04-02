// import { Button } from "@mui/material";

import styled from "@emotion/styled"

const ButtonStyle = styled.button`
cursor: pointer;
font-family: 'Outfit', sans-serif;

@media (max-width: 500px) {
    width: 100%;
    
}
`
export default function BrowseOurService () {
    return(
        <>
        <ButtonStyle style={{backgroundColor: '#3083ff', color: 'white', marginLeft: '10px', fontWeight: '900', padding: '15px 15px 15px 15px', border: '1px solid #3083ff', borderRadius: '5px'}}>
           Get a quote
        </ButtonStyle>
        </>
    )
}

