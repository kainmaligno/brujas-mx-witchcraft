import React from "react"
import styled from "styled-components"
import device from "../../device"
import penta from "../../images/gatsby-icon.png"
const FooterContainer = styled.div`
  position: relative;
  float: left;
  width: 100%;
  clear: both;
`

const PrimaryFoot = styled.div`
  color: #acacad;
  background-color: rgba(16, 16, 16, 1);
`
const Container = styled.div`
  padding-top: 80px;
  padding-bottom: 80px;
  padding-left: 0 !important;
  padding-right: 0 !important;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-left: 220px;
  margin-right: 220px;
`

const FootBox = styled.div`
  width: 33.3%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 2em;
  font-family:'Helvetica Neue', 'Arial', 'sans-serif';
  color:#ededed !important;
  font-size:15px;

  /* @media ${device.desktop} {
    width: 33.3%;
  }
  @media ${device.mobileM} {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
  }
  @media ${device.laptop} {
  } */
`

const SecondaryFoot = styled.div`
  color: #acacad;
  background-color: rgba(16, 16, 16, 1);
  padding-top: 40px;
  padding-bottom: 80px;
  padding: 40px 0 20px;
  display: inline-block;
  width: 100%;
`
const SecondContainer = styled.div`
  padding-top: 40px;
  padding-bottom: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 220px;
  margin-right: 220px;
  font-family:'Helvetica Neue', 'Arial', 'sans-serif';
  color:#ededed !important;
  font-size:15px;
`

const Footer = () => (
  <FooterContainer>
    <PrimaryFoot>
      <Container>
        <FootBox>
          <span>
            <img alt='img' src={penta} style={{ height: 50, width: 50 }} />{" "}
          </span>
          <span >(+44) 239 121 332</span>
        </FootBox>
        <FootBox>
          <span>
            <img alt='img1' src={penta} style={{ height: 50, width: 50 }} />{" "}
          </span>

          <span style={{textAlign:'center'}}>PO Box 16122 Collins Street West Victoria 8007 Australia</span>
        </FootBox>
        <FootBox>
          <span>
            <img alt='img2' src={penta} style={{ height: 50, width: 50 }} />{" "}
          </span>

          <span style={{textAlign:'center'}}>hello@example.com <br/>job@example.com</span>
        </FootBox>
      </Container>
    </PrimaryFoot>
    <SecondaryFoot>
      <SecondContainer>
        <p style={{textAlign:'center'}}>
          Copyrigth © 2016 - {new Date().getFullYear()}, Festival de Brujas La
          Bruja Moderna. Todos los derechos reservados. Cualquier reproducción o
          uso total o parcial sin permiso de los autores sera sancionado
          conforme a la Ley de Protección de Derechos de Autor. Festival de
          Brujas © Sandra Ramirez / ©
        </p>
        {` `}
        <a style={{textDecoration:'none',color:'#dedede'}} href="https://www.google.com">Drakar zamael</a>
      </SecondContainer>
    </SecondaryFoot>
  </FooterContainer>
)

export default Footer
