import styled from "@emotion/styled";
import { Container } from "@mui/material";
import GetQuoteButton from "./GetQuoteButton";
import BrowseOurService from "./BrowseOurService";

const HeroImage = styled.div`
background: url(./Plumberimages/herocover.png);
background-position: top right;
background-repeat:  no-repeat;

@media (max-width: 500px) {
    background-position: bottom right;

}
`;
const HeroContainer = styled.div`
padding-top: 160px;
width: 100%;


`;

const Flex = styled.div`
display: flex;
// align-items: center;
justify-content: space-between;

@media (max-width: 500px) {
    display: flex;
    align-items: center;
    flex-direction: column; 
}

`;

const PlumberdetailsFlex = styled.div`
display: flex;
flex-direction: column;
margin-top: 60px;
`;
const Plumberdetails = styled.h1`
font-size: 55px;
font-weight: 900;
color: #182944;
line-height: 50px;
width:80%;

@media (max-width: 500px) {
font-size: 38px; 
}
`;

const PlumberTxt = styled.span`
color: #3083ff;
font-weight: 900;
font-size: 20px;
`;

const PlumberImage = styled.div`
width: 60%;

@media (max-width: 500px) {
    width: 10%
}
`;

const PlumberparagraphTxt = styled.p`
margin-top: 20px;
width: 90%;
`;

const ButtonFlex = styled.div`
display: flex;
align-items: center;
margin-top: 50px;

@media (max-width: 500px) {
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
}
`;
export default function HeroSection() {
    return(
        <>
           <HeroContainer>

           <HeroImage>
           <Container>
           {
                Herodatas.map(Herodata => (
                   <Flex key={Herodata.id}>

                            <PlumberdetailsFlex>
                                
                            <PlumberTxt>
                                Plumbers
                            </PlumberTxt>
                            
                            <Plumberdetails>
                                {Herodata.Plumberdetails}
                            </Plumberdetails>

                            <PlumberparagraphTxt>
                                    {Herodata.Plumberparagraph}
                                </PlumberparagraphTxt>

                                <ButtonFlex>
                                <GetQuoteButton />
                                 <BrowseOurService />
                                </ButtonFlex>
                            </PlumberdetailsFlex>
                               
                                <PlumberImage>
                                    <img src={Herodata.PlumberImages} alt="Heroimages"/>
                                </PlumberImage>
                            
                           
                       
                   </Flex>
                ))
            }
           </Container>
           </HeroImage>
           </HeroContainer>
        </>
    )
}

export const Herodatas = [
    {
        id: 0,
        Plumberdetails: 'Best Plumbing & repair solutions with quality work',
        Plumberparagraph: 'Industrial tools for all kinds of plumbering materials for your household projects.',
        PlumberImages: './Plumberimages/hero-plumbing-template.png'

    }
]