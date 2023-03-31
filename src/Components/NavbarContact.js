import React from 'react';
import Container from '@mui/material/Container';
import styled from '@emotion/styled';
import {GrFacebookOption, GrTwitter} from 'react-icons/gr';
import {RiInstagramFill} from 'react-icons/ri';
import {AiOutlineGoogle} from 'react-icons/ai';
import {BsSlack} from 'react-icons/bs';
import { Navsectiondatas } from './NavbarSection';
import NavbarSection from './NavbarSection';


const NavbarContainer = styled.div`

`;

const NavbarFirstElement = styled.div`
position: relative;
@media (max-width:830px){
display: none;
}

`;

// const NavbarSecondElement = styled.div`

// `;

const Flex = styled.div`
display: flex;
align-items: center;
justify-content: space-between;

`;


const AllInfo = styled.div`
display: flex;
`;
const EmailContainer = styled.div`
display: flex;
align-items: center;
`;

const EmailImage = styled.img`
width: 16%;
border-radius: 50%;
`;

const EmailDetails = styled.span`
font-size: 16px;
margin-left: 10px;
`;

const PhoneContainer = styled.div`
display: flex;
align-items: center;
`;

const PhoneImage = styled.img`
width: 16%;
border-radius: 50%;
`;

const PhoneDetails = styled.span`
font-size: 16px;
margin-left: 10px;
`;

const LocationContainer = styled.div`
display: flex;
align-items: center;
`;

const LocationImage = styled.img`
width: 12%;
border-radius: 50%;
`;

const LocationDetails = styled.span`
font-size: 14px;
margin-left: 10px;
`;

const SocialMediaIconHolder = styled.div`
display: flex;
align-items: center;

.iconsize{
    margin-right: 10px;
}
`;
export default function NavbarContact() {
    return(
        
       <NavbarContainer>
        
            
        <Container style={{ padding: '20px 5px 5px 5px'}}>
            

            {
               Navbardata.map(Navdata => (
                <NavbarFirstElement>
                   <div key={Navdata.id}>
                    

                      <Flex>

                           

                               <AllInfo>
                               <EmailContainer>
                                       <EmailImage src={Navdata.EmailImage}  alt={Navdata.EmailAlt}/>
                                       <EmailDetails >{Navdata.EmailUrl}</EmailDetails>
                               </EmailContainer>
                                   
                                   
                               

                             <PhoneContainer>
                                   <PhoneImage src={Navdata.PhoneImage} alt={Navdata.EmailAlt}/>
                                   <PhoneDetails>{Navdata.PhoneUrl}</PhoneDetails>
                             </PhoneContainer>
                                 
                                   
                                   
                              

                               <LocationContainer>
                                   <LocationImage src={Navdata.LocationImage} alt={Navdata.EmailAlt}/>
                                   <LocationDetails> {Navdata.LocationUrl}</LocationDetails>
                               </LocationContainer>
                               </AllInfo>
                                
                                  
                              <SocialMediaIconHolder>
                                   <GrFacebookOption className='iconsize' size="18"/>
                                   <GrTwitter className='iconsize' size="18"/>
                                   <RiInstagramFill className='iconsize' size="18"/>
                                   <BsSlack className='iconsize' size="18"/>
                                   <AiOutlineGoogle className='iconsize' size="18"/>
                              </SocialMediaIconHolder>

                      </Flex>
                   </div>
                   <hr />
                   </NavbarFirstElement>
               ))
            }
            
       </Container>
        
            <NavbarSection Navsectiondata= {Navsectiondatas}/>
       </NavbarContainer>

       
        
    )
}




export const Navbardata = [

    {
        id: 0,
        EmailImage: "../Plumberimages/email-plumbing.svg",
        EmailUrl: "contact@plumbing.com",
        EmailAlt: "EmailLogo",
        PhoneImage: "../Plumberimages/phone-plumbing.svg",
        PhoneUrl: "(234) 7019-425976",
        LocationImage: "../Plumberimages/location.svg",
        LocationUrl: "149W 70th 5t, 9000 Los Angeles, CA",
    },
];



