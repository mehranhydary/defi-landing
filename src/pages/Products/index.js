import styled from 'styled-components';

function Products () {
    return(
        <Container>
            <HeaderText>
                Products
            </HeaderText>
        </Container>
    )
}

const Container = styled.div`
    padding: 50px 0px 100px 0px;
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

export default Products;