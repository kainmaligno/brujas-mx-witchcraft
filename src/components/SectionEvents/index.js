import React from 'react'
import styled from 'styled-components'
//components
import Separador from "../Elements/separador"
import Star from "../image"
import Section from "../../components/Elements/ContenedorSeccion"
import Subtitle from "../../components/Elements/Subtitle"
import Eventos from '../Events'
const AboutText = styled.p`
font-family: 'Hind', sans-serif;
text-align:justify;
`

const Events = ()=>(
 <div>
  <Separador>
      <Star/>
  </Separador>
  <Section styled>
      <Subtitle>COMING SOON...!</Subtitle>
      <AboutText>
      Con el fin de que cada bruja y mago pueda celebrar su poder, la magia y los dioses.
      </AboutText>
      <Eventos/>
  </Section>
 </div>
)

export default Events