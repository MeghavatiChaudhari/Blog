
import { Link } from "react-router-dom";
import styled from "styled-components";


const Nav = styled.div`
 height:80px;
 width:3000px;
 background-color:black;
`;

const StyledLink = styled(Link)`
// applying styles to 3rd party component
text-decoration: none;
color: white;
font-size:25px;
margin:10px 20px 20px 20px;
margin-top:30px;
padding:10px;

&:hover{
  text-decoration: underline;
}
`;



function Navbar() {
    return(
      <Nav>
      <ul id="nav">
       <li>
        <StyledLink to="/">Home</StyledLink>
       </li>
       <li>
        <StyledLink to="/create-post"> Create Post</StyledLink>
       </li>
      </ul>
      </Nav> 
    );
  }
  export default Navbar;