import styled from "@emotion/styled";
import { Container } from "@mui/material";
import GetQuoteButton from "./GetQuoteButton";
import BrowseOurService from "./BrowseOurService";

const HeroImage = styled.div`
background: url(./Plumberimages/herocover.png);
background-position: top right;
background-repeat:  no-repeat;
width: 100%;
@media (max-width: 489px) {
    background-position-y : 420px, center;
    background-size: contain;
}
@media (min-width: 489px) and (max-width: 900px) {
    background-position-y : 420px, center;
    background-size: contain;
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

@media (max-width: 489px) {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column; 
}

@media (min-width: 489px) and (max-width: 900px) {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}

`;

const PlumberdetailsFlexChild = styled.div`

`;

const PlumberdetailsFlex = styled.div`
display: flex;
flex-direction: column;
margin-top: 40px;
width: 45%;

@media (max-width: 489px) {
    width: 100%;
    margin-top: -100px;
    margin-bottom: 30px;
}

@media (min-width: 489px) and (max-width: 991px) {
    width: 100%;
    margin-top: -100px;
    margin-bottom: 30px;
}


`;
const PlumberdetailsH1 = styled.h1`
font-size: 55px;
font-weight: 900;
color: #182944;
line-height: 50px;
width: 80%;

@media (max-width: 489px) {
font-size: 38px; 
width: 100%;
}

@media (min-width: 489px) and (max-width: 900px) {
    font-size: 38px; 
width: 100%;
}

`;

const PlumberSpanTxt = styled.span`
color: #3083ff;
font-weight: 900;
font-size: 20px;

`;



const PlumberparagraphTxt = styled.p`
margin-top: 20px;
width: 90%;
`;

const ButtonFlex = styled.div`
display: flex;
align-items: center;
margin-top: 50px;

@media (max-width: 489px) {
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
}

@media (min-width: 489px) and (max-width: 900px) {
    display: flex;
}
`;

const PlumberImage = styled.div`
width: 55%;

@media (max-width: 500px) {
    width: 90%;   
}

@media (min-width: 489px) and (max-width: 900px) {
    width: 90%;
}
`;

const CoverImage = styled.img`
padding-top: 5px;

@media (max-width: 500px) {
// padding-top: 
}
`
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
                                
                            <PlumberdetailsFlexChild>
                            <PlumberSpanTxt>
                                Plumbers
                            </PlumberSpanTxt>
                            
                            <PlumberdetailsH1>
                                {Herodata.Plumberdetails}
                            </PlumberdetailsH1>

                            <PlumberparagraphTxt>
                                    {Herodata.Plumberparagraph}
                                </PlumberparagraphTxt>
                            </PlumberdetailsFlexChild>

                                <ButtonFlex>
                                <GetQuoteButton />
                                 <BrowseOurService />
                                </ButtonFlex>
                            </PlumberdetailsFlex>
                               
                                <PlumberImage>
                                    <CoverImage src={Herodata.PlumberImages} alt="Heroimages"/>
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