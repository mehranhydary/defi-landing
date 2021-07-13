import styled from 'styled-components';
import { Link, useLocation } from "react-router-dom";

function Card () {
    
    return (   
        <Container>
            <CardBody>
            <CardTitle>Staking nodes</CardTitle>
            <CardDescription>Spin up your own staking nodes and start earning rewards immediately.</CardDescription>
            <CardButton>Get started for Free</CardButton>
            <CardLink>Learn more</CardLink>
            </CardBody>
        </Container>
    );
}

const Container = styled.div`
    margin-top: 10px;
    width: 300px;
    height: 150px;
    position: absolute;
    border-color: #F1F1F1;  
    background-color: black;
    border-style: solid;
    padding: 25px;
    display: flex;
    border-radius: 5px;
    transition-duration: 0.4s;
    :hover {
        filter: brightness(150%);
    }
    `;

const CardTitle = styled.h1`
    color: white;
    font-size: 20px;
    font-weight: bold;
    font-family: sans-serif;
    font-weight: 200;
    `;

const CardDescription = styled.p`
    color: white;
    font-weight: 300;
    font-family: sans-serif;
    `;

const CardButton = styled.button`
    margin: 0 5px;
    padding: 16px 20px;
    background: rgba(155, 155, 155, 0.2);
    color: #fff;
    cursor: pointer;
    border: 1px solid #fff;
    outline: 0;
    font-weight: 300;
    transition-duration: 0.4s;
    border-radius: 5px;
    :hover {
        background-color: dodgerblue;
        color: white;
        border-color: dodgerblue;
    }
    `;

const CardLink = styled(Link)`
    color: white;
    font-size: 12px;
    font-weight: 300;
    font-family: sans-serif;
    transition-duration: 0.4s;
    text-decoration: none;
    :hover {
        opacity: 0.8;
    }
    }
    `;

const CardBody = styled.div` 
    padding-right: 16px;
    padding-left: 16px;
    width: 300px;
`;

export default Card;