import styled from "styled-components"

const Container = styled.div`
    height: 30px;
    background-color: teal;
    color: white;
    font-size:14;
    display: flex;
    align-items: center;
    justify-content: center;
`

export default function Annoucement() {
  return (
    <div>
      <Container>
      ---------FOR SALE---------
      </Container>
    </div>
  )
}
