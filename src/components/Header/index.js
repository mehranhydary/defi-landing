import styled, { css } from 'styled-components';
import { Link, useLocation } from "react-router-dom";

function Header () {
    const location = useLocation();

    return (
        <Container>
            <Info>
                <Name>Tempo</Name>
            </Info>
            <Tab to="/signup" active={location.pathname === "/signup" ? true : false}>Sign Up</Tab>
            <Tab to="/login" active={location.pathname === "/Login" ? true : false}>Login</Tab>
            <Tab to="/docs" active={location.pathname === "/Docs" ? true : false}>Docs</Tab>
            <Tab to="/about" active={location.pathname === "/about" ? true : false}>About</Tab>
            <Tab to="/home" active={location.pathname === "/home" ? true : false}>Home</Tab> 
        </Container>
    );
}

const Container = styled.div`
    overflow: hidden;
    background-color: #f1f1f1;
    padding: 20px 10px;
    border-radius: 5px;

`;

const Info = styled.div``;

const Name = styled.div`
    font-size: 25px;
    font-weight: bold;
    font-family: sans-serif;
    float: left;
    padding-left: 5px;
    padding-top: 10px;

`;

const Tab = styled(Link)`
    float: right;
    color: black;
    font-family: sans-serif;
    text-align: center;
    padding: 12px;
    text-decoration: none;
    font-size: 18px;
    line-height: 25px;
    border-radius: 5px;
    font-weight: 300;
    transition-duration: 0.4s;
    :hover {
        background-color: #ddd;
        color: black;
    }

    ${({ active }) =>
        active &&
        css`
        background-color: dodgerblue;
        color: white;
    `}
`
export default Header;
