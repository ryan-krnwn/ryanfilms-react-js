import { Card, Col, Container, Row, Image } from "react-bootstrap";
import antmanImage from "../assets/images/superhero/antman.jpg";
import avengerImage from "../assets/images/superhero/avenger.jpg";
import batmanImage from "../assets/images/superhero/batman.jpg";
import robinhoodImage from "../assets/images/superhero/robinhood.jpg";
import spidermanImage from "../assets/images/superhero/spiderman-cover.jpg";
import supermanImage from "../assets/images/superhero/superman.jpg";

const Superhero = () => {
    return (
        <div id="superhero">
            <Container>
                <br />
                <h1 className="text-white">SUPERHERO MOVIES</h1>
                <br />
                <Row>
                    <Col md={4} className="movieWrapper">
                        <Card className="movieImage">
                            <Image src={antmanImage} alt="Dune Movies" className="images" />
                            <div className="bg-dark">
                                <div className="p-2 m-2 text-white">
                                    <Card.Title className="text-center">ANT MAN</Card.Title>
                                    <Card.Text className="text-center">
                                        This is a wider card with natural lead-in to additional content.
                                    </Card.Text>
                                    <Card.Text className="text-center">Last updated 3 mins ago</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="movieImage">
                            <Image src={avengerImage} alt="Dune Movies" className="images" />
                            <div className="bg-dark">
                                <div className="p-2 m-2 text-white">
                                    <Card.Title className="text-center">AVENGER</Card.Title>
                                    <Card.Text className="text-center">
                                        This is a wider card with natural lead-in to additional content.
                                    </Card.Text>
                                    <Card.Text className="text-center">Last updated 3 mins ago</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="movieImage">
                            <Image src={batmanImage} alt="Dune Movies" className="images" />
                            <div className="bg-dark">
                                <div className="p-2 m-2 text-white">
                                    <Card.Title className="text-center">THE BATMAN</Card.Title>
                                    <Card.Text className="text-center">
                                        This is a wider card with natural lead-in to additional content.
                                    </Card.Text>
                                    <Card.Text className="text-center">Last updated 3 mins ago</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="movieImage">
                            <Image src={robinhoodImage} alt="Dune Movies" className="images" />
                            <div className="bg-dark">
                                <div className="p-2 m-2 text-white">
                                    <Card.Title className="text-center">ROBIN HOOD</Card.Title>
                                    <Card.Text className="text-center">
                                        This is a wider card with natural lead-in to additional content.
                                    </Card.Text>
                                    <Card.Text className="text-center">Last updated 3 mins ago</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="movieImage">
                            <Image src={spidermanImage} alt="Dune Movies" className="images" />
                            <div className="bg-dark">
                                <div className="p-2 m-2 text-white">
                                    <Card.Title className="text-center">SPIDERMAN</Card.Title>
                                    <Card.Text className="text-center">
                                        This is a wider card with natural lead-in to additional content.
                                    </Card.Text>
                                    <Card.Text className="text-center">Last updated 3 mins ago</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="movieImage">
                            <Image src={supermanImage} alt="Dune Movies" className="images" />
                            <div className="bg-dark">
                                <div className="p-2 m-2 text-white">
                                    <Card.Title className="text-center">SUPERMAN</Card.Title>
                                    <Card.Text className="text-center">
                                        This is a wider card with natural lead-in to additional content.
                                    </Card.Text>
                                    <Card.Text className="text-center">Last updated 3 mins ago</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                </Row>
                <br />
                <div class="text-white text-center">
                    <p>© 2022 - RYANFILMS.com</p>
                </div>
                <br />
            </Container>
        </div>
    )
}

export default Superhero