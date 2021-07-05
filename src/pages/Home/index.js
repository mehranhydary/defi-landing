import styled from 'styled-components';

function Home () {
    return(
        <Container>
            <HeaderText>
                Home
            </HeaderText>
        </Container>
    )
}

const Container = styled.div`
    align-items: center;
    display: flex;
    flex: 1;
    flex-direction: column;
    height: 100%;
    overflow-y: scroll
`

const HeaderText = styled.div`
    color: #e4e4e4;
    font-size: 24px;
    font-weight: 500;
`

export default Home;