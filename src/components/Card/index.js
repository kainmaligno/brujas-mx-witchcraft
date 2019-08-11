import React from 'react';
import Image from 'gatsby-image'
import styled from 'styled-components'
const Cardcontainer = styled.div`
top:0;
width:250px;
left:0;
border-radius:20px;
margin-bottom:1rem;
padding:10px;
:hover{
    box-shadow: 2px 2px 2px rgba(0,0,0,0.1);
}
`
/**
 * 
 * @param image from component 
 * @param title string from component
 * @params props  all other information about the componnet 
 */

const Card = (({image}) => (
    < Cardcontainer>
    {/* <span>card</span> */}
    <Image style={{borderRadius:'8px'}} fluid={image} alt={image.originalName} title={image.originalName}/> 
    </Cardcontainer>
));

export default Card

