import styled from 'styled-components';

function Banner () {

    return (
        <Container>
            <BannerText>🔥 Our ETH2 staking solution has launched!</BannerText>
            <BannerButton>Visit →</BannerButton>
            <BannerXButton>ⓧ</BannerXButton>
        </Container>
    );
}
const Container = styled.div`
    padding: 10px;
    text-align: center;
    background: #f1f1f1;
    display: flex;
    background-size: cover;
    position: relative;
    border-radius: 5px;
`;

const BannerText = styled.div`
    padding: 15px;
    color: black;
    font-weight: bold;
    font-family: sans-serif;
    position: relative;
    margin-left: auto;
    margin-right: auto;
    font-weight: 300;
    `;

const BannerButton = styled.button`
    border: 1px solid dodgerblue;
    font-family: sans-serif;
    background-color: dodgerblue;
    border: none;
    color: white;
    padding: 12px 20px;
    text-align: center;
    text-decoration: none;
    font-size: 16px;
    border-radius: 5px;
    cursor: pointer;
    font-weight: 300;
    transition-duration: 0.4s;
    :hover {
        opacity: 0.8;
    }
`;

const BannerXButton = styled.button`
    border: 1px solid blue;
    font-family: sans-serif;
    background-color: transparent;
    border: none;
    color: black;
    padding: 3px 10px;
    text-align: center;
    text-decoration: none;
    font-size: 20px;
    border-radius: 12px;
    cursor: pointer;
    font-weight: 300;
    transition-duration: 0.2s;
    :hover {
        opacity: 0.8;
    }
`;



export default Banner;