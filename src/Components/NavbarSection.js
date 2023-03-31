import Container from '@mui/material/Container';
import styled from '@emotion/styled';
import GetQuoteButton from './GetQuoteButton';
import {TbMenu, TbX} from 'react-icons/tb';
import { useState } from 'react';

const ContainerChild = styled.div`



@media (max-width: 480px) {
    .menubutton{
        display: block;
    }

    .hide{
    display: none;
    }
    .show{
        display: block;
    }

    .linksitems{
       
       
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

@media (max-width: 600px) {
    width: 50%;  
}
`;

const LinksContainer = styled.div`
display: flex;

.Linkbutton{
    display: none;
}



@media (max-width: 480px) {
    display: block;
    position: fixed;
    top: 0; 
    left: 0;
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

    const HandleClick = () => setToggle(!toggle)

    return(
        <>
            <Container style={{marginTop: '10px'}}>
                
        <ContainerChild className={toggle ? 'hide' : 'show'}>
        {
        Navsectiondatas.map(Navsectiondata => (
            <div key={Navsectiondata.id}>
                <Flex>
                            <LogoImage src={Navsectiondata.LogoUrl} alt={Navsectiondata.LogoAlt}/>
                
                <LinksContainer className='linksitems'>
                    <HomeUrl>{Navsectiondata.HomeUrl}</HomeUrl>
                    <AboutUrl>{Navsectiondata.AboutUrl}</AboutUrl>
                    <ServiceUrl>{Navsectiondata.ServiceUrl}</ServiceUrl>
                    <PagesUrl>{Navsectiondata.PagesUrl}</PagesUrl>
                    <CartsUrl>{Navsectiondata.CartsUrl}</CartsUrl>
                    
                    <LinkGetBuuton>
                    <GetQuoteButton />
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

        </ContainerChild>
                
                
            </Container>
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