import styled from 'styled-components';
import { Link, useLocation } from "react-router-dom";

function Tile () {
    
    return (   
        <Container>
            <CardBody>
            </CardBody>
        </Container>
    );
}

const Container = styled.div`
    background-image: url('https://cdn-images-1.medium.com/max/476/1*HxmIL4obYbd94uoz1EbVXQ@2x.png');
    background-size: contain;
    background-repeat: no-repeat;
    margin-top: 225px;
    width: 300px;
    height: 150px;
    position: absolute;
    border-color: #f1f1f1;  
    background-color: white;
    border-style: solid;
    padding: 25px;
    display: block;
    border-radius: 5px;
    transition-duration: 0.8s;
    background-position: center;

    :hover {
        box-shadow: 0 0 20px rgba(0, 0, 0, .05), 0 0px 40px rgba(0, 0, 0, .08);

    }
    `;

const CardBody = styled.div` 
    padding-right: 16px;
    padding-left: 16px;
    width: 300px;
`;

export default Tile;