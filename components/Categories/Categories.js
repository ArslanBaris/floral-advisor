import React, { useEffect, useState } from "react";
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
import axios from "axios";

export default function Categories(props) {

    const { setCategoryOpt } = props
    const { selectedLanguage } = useAppContext();
    const bulkData = selectedLanguage == "en" ? categories.en : categories.tr;

    const items = [{ id: 1, name: "Category" }, { id: 2, name: "Survey" }]

    useEffect(() => {
        getCategories();
    }, []);

    const getCategories = async () => {
        let body = {
            "receiver_name": "Çağrı",
            "sender_name": "Ataol",
            "email": "ataolbalkar97@gmail.com",
            "category_id": 1,
            "language": "Türkçe",
            "answers": [{
                "question_id": 1,
                "answer_id": 3
            },
            {
                "question_id": 2,
                "answer_id": 6
            },
            {
                "question_id": 3,
                "answer_id": 13
            },
            {
                "question_id": 4,
                "answer_id": 18
            }]
        }

        // await axios.post('/api/hello/test', body)
        // .then((response) => {
        //     console.log(response.data)
        // }
        // ).catch((error) => {
        //     console.log(error)
        // })

    }

    return (
        <Container>
            <Row className="d-flex justify-content-center mt-5">
                <Col lg="7" className="mb-4 text-center">
                    <Text
                        className="categories-header-title text-center mb-2"
                        fw={900}
                    >
                        <GetLocalizedText id="categories.header-title" />
                    </Text>
                    <Text
                        className="categories-header-subtitle text-center mb-3"
                        fw={900}
                    >
                        <GetLocalizedText id="categories.header-subtitle" />
                    </Text>
                    <Text
                        size="16px"
                        fw={900}
                        className="text-center"
                    >
                        <GetLocalizedText id="categories.header-description" />
                    </Text>
                </Col>
                <Col lg="7">
                    <Row >
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