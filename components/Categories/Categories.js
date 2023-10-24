import React, { useState } from "react";
import {
    Col,
    Row,
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption,
    Container
} from "reactstrap";
import CategoryCard from "./CategoryCard";
import { categories } from "../data"
import { useAppContext } from "@/Context/AppContext";
import { Text } from "@mantine/core";
import GetLocalizedText from "@/Utils/Intl/Index";

export default function Categories(props) {

    const { setCategoryOpt } = props
    const { selectedLanguage } = useAppContext();
    const bulkData = selectedLanguage == "en" ? categories.en : categories.tr;

    const items = [{ id: 1, name: "Category" }, { id: 2, name: "Survey" }]

    return (
        <Container>
            <Row className="d-flex justify-content-center mt-5">
                <Col lg="7" className="mb-4 text-center">
                    <Text
                        size="35px"
                        fw={900}
                        variant="gradient"
                        className="text-center mb-2"
                        gradient={{ from: 'blue', to: 'cyan', deg: 135 }}
                    >
                        <GetLocalizedText id="categories.header-title" />
                    </Text>
                    <Text
                        size="22px"
                        fw={900}
                        variant="gradient"
                        className="text-center mb-3"
                        gradient={{ from: 'blue', to: 'cyan', deg: 135 }}
                    >
                        <GetLocalizedText id="categories.header-subtitle" />
                    </Text>
                    <Text
                        size="16px"
                        fw={900}
                        variant="gradient"
                        className="text-center"
                        gradient={{ from: 'blue', to: 'cyan', deg: 135 }}
                    >
                        <GetLocalizedText id="categories.header-description" />
                    </Text>
                </Col>
                <Col lg="7">
                    <Row>
                        {
                            bulkData.categories.map((category) => (
                                <CategoryCard data={category} key={category.category_id} setCategoryOpt={setCategoryOpt} />
                            ))
                        }
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}