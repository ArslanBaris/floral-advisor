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

export default function Categories(props) {

    const { setSelectedCategory } = props

    const items = [{ id: 1, name: "Category" }, { id: 2, name: "Survey" }]

    return (
        <Container>
            <Row className="d-flex justify-content-center mt-5">
                <Col lg="7" className="mb-4 text-center">
                    <h1 className="mb-2">Her Anınızda En Güzel Çiçekleri Sunar</h1>
                    <h4 className="mb-3">Sadece Bir Kaç Adımda Mükemmel Çiçeği Bulun</h4>
                    <span className="">En iyi çiçek önerilerini sunabilmemiz için size en uygun kategoriyi seçin ve soruları cevaplandırın !</span>
                </Col>
                <Col lg="7">
                    <Row>
                        {
                            categories.categories.map((category) => (
                                <CategoryCard data={category} key={category.category_id} setSelectedCategory={setSelectedCategory} />
                            ))
                        }
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}