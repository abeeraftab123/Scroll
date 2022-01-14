import styled from "styled-components"

const Container = styled.div`
    height: 30px;
    background-color: teal;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    font-size: 14px;
`
const Announcement = () => {
    return (
        <Container>
            Super Deal 20% Off on Orders Over $200
        </Container>
    )
}

export default Announcement
