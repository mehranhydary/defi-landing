import styled from 'styled-components';

function Banner () {

    return (
        <Container>
            <PanelTitle>Connect to Web3 in minutes.</PanelTitle>
            <PanelDescription>We support more than 40 blockchain protocols for staking or development purposes.</PanelDescription>
        </Container>
    );
}
const Container = styled.div`
    padding: 60px;
    text-align: center;
    background-image: url('https://www.xmple.com/wallpaper/linear-blue-gradient-1920x1080-c2-1e90ff-87cefa-a-345-f-14.svg');
    color: white;
    font-size: 30px;
`;

const PanelTitle = styled.text`
    font-size: 36px;
    padding: 15px;
    color: black;
    font-weight: bold;
    font-family: sans-serif;
    position: relative;
    margin-left: auto;
    margin-right: auto;
    font-weight: bold;
    `;

    const PanelDescription = styled.div`
    font-size: 20px;
    padding: 15px;
    color: black;
    font-weight: bold;
    font-family: sans-serif;
    position: relative;
    margin-left: auto;
    margin-right: auto;
    font-weight: 300;
    `;


export default Banner;