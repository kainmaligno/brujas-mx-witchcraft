import React from 'react'
import styled from 'styled-components'
//components
import Separador from "../Elements/separador"
import Star from "../image"
import Section from "../../components/Elements/ContenedorSeccion"
import Subtitle from "../../components/Elements/Subtitle"
import Brujas from '../../images/logob-negro.jpg'

const AboutText = styled.p`
font-family: 'Hind', sans-serif;
text-align:justify;
`

const Galery = ()=>(
 <div>
  <Separador>
      <Star/>
  </Separador>
  <Section>
      <Subtitle>GALERY</Subtitle>
      <AboutText>
      Cada festival de brujas lo realizamos con diferente temática dentro del tema mágico, como festival de brujas y hadas, potterico, o celebrando cada 
      estación de la rueda.
      </AboutText>
  </Section>
 </div>
)

export default Galery