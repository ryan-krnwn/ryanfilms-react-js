import { Card, Col, Container, Row, Image } from "react-bootstrap";
import duneImage from "../assets/images/trending/dune.jpg";
import everythingImage from "../assets/images/trending/everything.jpg";
import infiniteImage from "../assets/images/trending/infinite.jpg";
import jokerImage from "../assets/images/trending/joker.jpg";
import lightyearImage from "../assets/images/trending/lightyear.jpg";
import morbiusImage from "../assets/images/trending/morbius.jpg";

const Trending = () => {
    return (
        <div id="trending">
            <Container>
                <br />
                <h1 className="text-white">TRENDING MOVIES</h1>
                <br />
                <Row>
                    <Col md={4} className="movieWrapper">
                        <Card className="movieImage">
                            <Image src={duneImage} alt="Dune Movies" className="images" />
                            <div className="bg-dark">
                                <div className="p-2 m-2 text-white">
                                    <Card.Title className="text-center">DUNE</Card.Title>
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
                            <Image src={everythingImage} alt="Dune Movies" className="images" />
                            <div className="bg-dark">
                                <div className="p-2 m-2 text-white">
                                    <Card.Title className="text-center">EVERYTHING EVERYWHERE</Card.Title>
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
                            <Image src={infiniteImage} alt="Dune Movies" className="images" />
                            <div className="bg-dark">
                                <div className="p-2 m-2 text-white">
                                    <Card.Title className="text-center">INFINITE</Card.Title>
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
                            <Image src={jokerImage} alt="Dune Movies" className="images" />
                            <div className="bg-dark">
                                <div className="p-2 m-2 text-white">
                                    <Card.Title className="text-center">JOKER</Card.Title>
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
                            <Image src={lightyearImage} alt="Dune Movies" className="images" />
                            <div className="bg-dark">
                                <div className="p-2 m-2 text-white">
                                    <Card.Title className="text-center">LIGHT YEAR</Card.Title>
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
                            <Image src={morbiusImage} alt="Dune Movies" className="images" />
                            <div className="bg-dark">
                                <div className="p-2 m-2 text-white">
                                    <Card.Title className="text-center">MORBIUS</Card.Title>
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
                <br />
            </Container>
        </div>
    )
}

export default Trending