// import { Button } from "@mui/material";

import styled from "@emotion/styled"

const ButtonStyle = styled.div`
cursor: pointer;
`
export default function BrowseOurService () {
    return(
        <>
        <ButtonStyle style={{backgroundColor: 'transparent', border: '1px solid #3083ff', color: '#3083ff', marginLeft: '10px', fontWeight: '600', padding: '15px 15px 15px 15px'}}>
            Browse Our Services
        </ButtonStyle>
        </>
    )
}

