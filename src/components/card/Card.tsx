import { useState } from "react"
import { Container, Hr, Img, Text, Wrapper } from "./style-component"
import view from "../../utils/images/icon-view.svg"

const Card = (): JSX.Element => {

    const [visible, setVisible] = useState(false)
    return (
        <Wrapper>
            <Container className="container">
                <div className="row px-3 pt-4 pb-3">
                    <div className="col">
                        <div className="main-image d-flex"
                            onMouseEnter={()=> setVisible(true)}
                            onMouseLeave={()=> setVisible(false)}>
                            <Img src={view} className="img-fluid" style={{ objectFit: "none", display: visible ? "initial" : "none" }} />
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-12 my-3">
                        <Text fontSize="20px" color="hsl(0, 0%, 100%)" fontWeight="600" className="hovered">Equilibrium #3429</Text>
                    </div>
                    <div className="col">
                        <Text fontSize="18px" color="hsl(215, 51%, 70%)" fontWeight="300" className="">Our Equilibrium collection promotes <br />
                            balance and calm.</Text>
                    </div>
                </div>
                <div className="row px-3">
                    <div className="col">
                        <svg width="11" height="18" xmlns="http://www.w3.org/2000/svg"><path d="M11 10.216 5.5 18 0 10.216l5.5 3.263 5.5-3.262ZM5.5 0l5.496 9.169L5.5 12.43 0 9.17 5.5 0Z" fill="#00FFF8" /></svg>
                        <Text color="hsl(178, 100%, 50%)" fontSize="" fontWeight="400" className="ps-2 align-middle">0.041 ETH</Text>
                    </div>
                    <div className="col text-end">
                        <svg width="17" height="17" xmlns="http://www.w3.org/2000/svg"><path d="M8.305 2.007a6.667 6.667 0 1 0 0 13.334 6.667 6.667 0 0 0 0-13.334Zm2.667 7.334H8.305a.667.667 0 0 1-.667-.667V6.007a.667.667 0 0 1 1.334 0v2h2a.667.667 0 0 1 0 1.334Z" fill="#8BACD9" /></svg>
                        <Text color="hsl(215, 51%, 70%)" fontSize="" fontWeight="300" className="ps-2 align-middle">3 days left</Text>
                    </div>
                    <Hr className="mt-3 mx-auto"></Hr>
                </div>
                <div className="row px-3 pb-4">
                    <div className="col">
                        <Img src={require('../../utils/images/image-avatar.png')} width="40px" className="img-fluid" alt="..." style={{ borderRadius: "30px", border: "1px solid hsl(0, 0%, 100%)" }}></Img>
                        <Text color="hsl(215, 51%, 70%)" fontSize="" fontWeight="300" className="ps-3 pe-1">Creation of</Text>
                        <Text color="hsl(0, 0%, 100%)" fontSize="" fontWeight="300" className="hovered">Jules Wyvern</Text>
                    </div>
                </div>
            </Container>
        </Wrapper>
    )
}
export default Card
