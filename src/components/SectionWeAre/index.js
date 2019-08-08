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

const WeAre = ()=>(
 <div>
  <Separador>
      <Star/>
  </Separador>
  <Section styled>
      <Subtitle>WE ARE</Subtitle>
      <AboutText>
      Lejos de las diferencias entre religiones, Festival de brujas a creado espacios donde las brujas y magos de diferentes creencias y religiones conviven en armonía.
      </AboutText>
  </Section>
 </div>
)

export default WeAre