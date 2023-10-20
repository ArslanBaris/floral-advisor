import React, { useState } from "react";
import { Card, CardBody, Col, Row } from "reactstrap";
import classnames from "classnames";

export default function CategoryCard(props) {

    const { data, setSelectedCategory } = props
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    }

    const handleMouseLeave = () => {
        setIsHovered(false);
    }

    return (
        <>
            <Col lg="4" xs="6" sm="6" className="mb-4">
                <Card className={classnames({
                    "mb-2 category-card":true,
                    "shadow-lg": isHovered
                })}
                    style={{  backgroundColor: data.backgroundColor,
                        borderRadius: "5%",
                        transform: isHovered ? "scale(1.05)" : "scale(1)",
                        transition: "all 0.2s ease-in-out" }}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        onClick={() => setSelectedCategory(data)}
                >
                    <CardBody className="p-0" >
                        <Row>
                            <Col lg="12">
                                <img src={data.icon} className={classnames({"p-4":true})} style={{ width: "100%", height: "auto", borderRadius: "6%" }} />
                            </Col>
                            <Col lg="12">
                                <h4 className="mb-3">{data.name}</h4>
                            </Col>
                        </Row>
                    </CardBody>
                </Card>
            </Col>
        </>
    );
}