import styled from 'styled-components';

function Banner () {
    
    return (
        <Container>
            <BannerText>Our ETH2 staking solution has launched!</BannerText>
            <BannerButton>Visit</BannerButton>
            <BannerXButton>X</BannerXButton>
        </Container>
    );
}
const Container = styled.div`
    position: absolute;
    display: flex;
    justify-content: space-between;
`;

const BannerText = styled.div`
    color: white;
    font-weight: bold;  
`;

const BannerButton = styled.button`
    box-sizing: border-box;
    color: rgb(0, 109, 255);
    cursor: pointer;
    display: inline;
    fill: rgb(0, 109, 255);
    font-family: Roboto, Helvetica, Arial, sans-serif;
    font-size: 14px;
    font-weight: 400;
    height: 30px;
    letter-spacing: 0.14994px;
    line-height: 16.8px;
    rx: 2px;
    text-decoration-thickness: auto;
    transform-origin: 0px 0px;
    transition-delay: 0s;
    transition-duration: 0.15s;
    transition-property: color;
    transition-timing-function: ease;
    width: 92px;
    -webkit-font-smoothing: antialiased;
    display: flex;
`;

const BannerXButton = styled.button`
    box-sizing: border-box;
    clip-rule: evenodd;
    color: rgba(255, 255, 255, 0.933);
    cursor: pointer;
    d: path("M 26.163 9.192 L 24.75 7.778 L 16.972 15.556 L 9.194 7.778 L 7.779 9.192 L 15.558 16.971 L 7.779 24.749 L 9.194 26.163 L 16.972 18.385 L 24.75 26.163 L 26.164 24.749 L 18.386 16.971 L 26.164 9.192 Z");
    display: inline;
    fill: rgba(255, 255, 255, 0.933);
    fill-rule: evenodd;
    font-family: Arial;
    font-size: 13.3333px;
    font-stretch: 100%;
    font-style: normal;
    font-variant-caps: normal;
    font-weight: 400;
    //height: auto;
    letter-spacing: normal;
    line-height: normal;
    opacity: 0.8;
    text-align: center;
    text-indent: 0px;
    text-rendering: auto;
    text-shadow: none;
    text-transform: none;
    transform-origin: 0px 0px;
    width: auto;
    word-spacing: 0px;
    writing-mode: horizontal-tb;
    -webkit-font-smoothing: antialiased;
    display: flex;
`;

export default Banner;