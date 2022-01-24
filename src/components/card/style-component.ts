import styled from "styled-components";

export const Container = styled.div`
    width: 340px;
    height: auto;
    border-radius: 10px;
    background-color: hsl(216, 50%, 16%);
`
export const Img = styled.img`
    width: ${(props) => props.width};
`
export const Text = styled.text`
    font-size: ${(props => props.fontSize)};
    color: ${(props => props.color)};
    font-weight: ${(props => props.fontWeight)};
    font-family: 'Outfit', sans-serif;
`
export const Hr = styled.hr`
    color: hsl(215, 51%, 70%);
    width: 90%;
`
export const Wrapper = styled.div`
    height: 100vh;
    display: flex;
    align-content: center;
    justify-content: center;
    align-items: center;
`


