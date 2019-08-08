import styled from 'styled-components'
import fondo from '../../images/4324232.jpg'
export default styled.section`
height:auto;
width: auto;
padding:1em;
display:flex;
flex-direction:${props => (props.rows? 'row': 'column')};
justify-content:center;
align-items:center;
border:3px solid red;
border-radius:20px;
color:${props => ( props.styled ? "#595959":"#000000")};
background-color:${props => ( props.styled ? '#000000':'#fafafa')};
`
