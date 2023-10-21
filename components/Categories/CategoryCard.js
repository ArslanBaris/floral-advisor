import React, { useEffect, useState } from "react";
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

    const setCategoryProp = (id,type) => {
        if (id === 1) {
            if (type === "bg-image") {
              return 'https://media.discordapp.net/attachments/897112801812836392/1163743675910717490/OIG.png?ex=6540afc1&is=652e3ac1&hm=18d167da2d207ee8e96bd083012a2eda38f346447a8c763365d4b5e66e4c8e47&=&width=1170&height=1170'
            }
            else if (type === "bg-color") {
              return '#FBFBFB'
            }
          }
          if (id === 2) {
            if (type === "bg-image") {
              return 'https://cdn.discordapp.com/attachments/897112801812836392/1163747157153685524/OIG.png?ex=6540b2ff&is=652e3dff&hm=9f101d51ac9ca2213cf2a890ee90be2ba383937137757b54a42a07682306f9b9&'
            }
            else if (type === "bg-color") {
              return '#FDFAF1'
            }
          }
          if (id === 3) {
            if (type === "bg-image") {
              return 'https://cdn.discordapp.com/attachments/897112801812836392/1163747574088482917/OIG.png?ex=6540b363&is=652e3e63&hm=eb45194e8b49c7c7e425b732c456561a1bde56cff8d60138041f8a2de2939392&'
            }
            else if (type === "bg-color") {
              return '#F9FCEF'
            }
          }
          if (id === 4) {
            if (type === "bg-image") {
              return 'https://cdn.discordapp.com/attachments/897112801812836392/1163747129873940520/OIG.png?ex=6540b2f9&is=652e3df9&hm=1cdd68413b42fc1952448b1b19155365bb9314ef5feab204c89734d7abac360b&'
            }
            else if (type === "bg-color") {
              return '#FCFFFE'
            }
          }
          if (id === 5) {
            if (type === "bg-image") {
              return 'https://cdn.discordapp.com/attachments/897112801812836392/1163748150071267388/OIG.png?ex=6540b3ec&is=652e3eec&hm=404c02b9faef8724c316bf1d6018b02784e0dd930e800b20ca3a1b329aaeaf52&'
            }
            else if (type === "bg-color") {
              return '#E9F8FA'
            }
          }
          if (id === 6) {
            if (type === "bg-image") {
              return 'https://cdn.discordapp.com/attachments/897112801812836392/1163746505694396436/OIG.png?ex=6540b264&is=652e3d64&hm=c4aa3e0fc2aee24dc23f4df7909fd06c757972746f1459bfc0d30dd77e1fee4c&'
            }
            else if (type === "bg-color") {
              return '#FDF5E7'
            }
          }
        
    }

    return (
        <>
            <Col lg="4" xs="6" sm="6" className="mb-4">
                <Card className={classnames({
                    "mb-2 category-card":true,
                    "shadow-lg": isHovered
                })}
                    style={{  backgroundColor: setCategoryProp(data.category_id,"bg-color"),
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
                                <img src={setCategoryProp(data.category_id,"bg-image")} className={classnames({"p-4":true})} style={{ width: "100%", height: "auto", borderRadius: "6%" }} />
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