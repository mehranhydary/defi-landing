import styled from 'styled-components';

function Header () {
    return (
        <Container>
            <Info>
                <Name>
                    Meh and Mus DeFi Project
                </Name>
            </Info>
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
    color: #ffffff;
    font-size: 14px;
    font-weight: 500;
`;

export default Header;