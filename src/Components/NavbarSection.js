import Container from '@mui/material/Container';
import styled from '@emotion/styled';
import GetQuoteButton from './GetQuoteButton';
import GetQuoteButtonWidth from './GetQuoteButtonWidth';
import {TbMenu, TbX} from 'react-icons/tb';
import { useState } from 'react';



// const Shownav = styled.div`
// display: block;
// `;

const NavContainer = styled.div`
width: 100%;

@media (max-width: 480px) {
    .menubutton{
        display: block;
    }

    .shownav expanded{
        display: block
    }

    .hidenav{
        display: none;
    }
}
`;

const Flex = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
`;

const LogoImage = styled.img`
width: 20%;
z-index: 2;
@media (max-width: 600px) {
    width: 50%;  
}
`;

const LinksContainer = styled.div`
display: flex;
.Linkbutton{
    display: none;
}

.linksitems{
    display: none;
}

@media (max-width: 480px) {
    .noneall{
        display: none;
    }
    display: block;
    // display: none;
    position: fixed;
    top: 0; 
    left: 0;
    height: 50vh;
    padding: 100px 10px 10px 30px;
}
`;

const HomeUrl = styled.div`
color: black;
margin-right: 20px;
`;

const AboutUrl = styled.div`
color: black;
margin-right: 20px;
`;

const ServiceUrl = styled.div`
color: black;
margin-right: 10px;
`;

const PagesUrl = styled.div`
color: black;
margin-right: 10px;
`;

const CartsUrl = styled.div`
color: black;

`;

const MenuButton = styled.div`
background: #3083ff;
padding: 5px 10px 5px 10px;
border-radius: 10px;
display: none;
cursor: pointer;
z-index: 2;



`;

const GetQuoteButtonStyle = styled.div`
@media (max-width: 480px) {
    display: none;
}
`;

const LinkGetBuuton = styled.div`
display: none;

@media (max-width: 480px) {
    display: block;
  
}
`
export default function NavbarSection() {
    const [toggle, setToggle] = useState(false);

    const HandleClick = () => setToggle(!toggle);

    return(
        <>
        <NavContainer>
            <Container style={{marginTop: '10px'}}>
                
        
        {
        Navsectiondatas.map(Navsectiondata => (
            <div key={Navsectiondata.id}>
                <Flex>
                            <LogoImage src={Navsectiondata.LogoUrl} alt={Navsectiondata.LogoAlt}/>
                
                <LinksContainer >
                    <HomeUrl>{Navsectiondata.HomeUrl}</HomeUrl>
                    <AboutUrl>{Navsectiondata.AboutUrl}</AboutUrl>
                    <ServiceUrl>{Navsectiondata.ServiceUrl}</ServiceUrl>
                    <PagesUrl>{Navsectiondata.PagesUrl}</PagesUrl>
                    <CartsUrl>{Navsectiondata.CartsUrl}</CartsUrl>
                    
                    <LinkGetBuuton>
                    <GetQuoteButtonWidth />
                    </LinkGetBuuton>
                </LinksContainer>


                <GetQuoteButtonStyle>
                    <GetQuoteButton />
                </GetQuoteButtonStyle>


                <MenuButton className='menubutton' onClick={HandleClick}>
                    {
                        toggle
                        ?
                        <TbX style={{ color: 'white', fontWeight: '900', fontSize: '28px'}}/>
                        :
                        <TbMenu style={{ color: 'white', fontWeight: '900', fontSize: '28px'}}/>
                    }
                
             
                </MenuButton>
                </Flex>
            </div>
        ))
    }

        
                
                
            </Container>
        </NavContainer>
        </>
    )
}

export const Navsectiondatas = [

    {
        id: 0,
        LogoUrl: "./plumberX.svg",
        LogoAlt: "PlumberXlogo",
        HomeUrl: "Home",
        AboutUrl: "About",
        ServiceUrl: "Services", 
        PagesUrl: "Pages", 
        CartsUrl: "Cart(0)",
    },
];