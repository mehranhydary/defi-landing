import styled, { css } from 'styled-components';
import { Link, useLocation } from "react-router-dom";

function Header () {
    const location = useLocation();
    
    return (
        <Container>
            <Info>
                <Name>
                    Meh and Mus DeFi Project
                </Name>
            </Info>
            <Tab to="/home" active={location.pathname === "/home" ? true : false}>Home</Tab>
            <Tab to="/products" active={location.pathname === "/products" ? true : false}>Products</Tab>
            <Tab to="/about" active={location.pathname === "/about" ? true : false}>About</Tab>
        </Container>
    );
}

const Container = styled.div`
    align-items: center;
    display: flex;
    justify-content: space-between;
    height: 50px;
    position: absolute;
    top: 0;
    width: 100%;
    background-color: #000000;
    -webkit-backdrop-filter: blur(16px);
    backdrop-filter: blur(16px);
`;

const Info = styled.div``;

const Name = styled.div`
    color: red;
    font-size: 14px;
    font-weight: 500;
`;

const Tab = styled(Link)`
    font-size: 14px;    
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: center;
    width: 100px;
    align-items: center;
    color: #ffffff;
    ${({ active }) =>
        active &&
        css`
        color: #fefe;
    `}
`
export default Header;