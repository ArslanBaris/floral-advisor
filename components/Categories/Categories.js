import React, { useState } from "react";
import {
    Col,
    Row,
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption,
} from "reactstrap";
import CategoryCard from "./CategoryCard";
import { categories } from "../data"

export default function Categories(props) {

    const { setSelectedCategory } = props
    // const categories = [
    //     {
    //         id: 1,
    //         name: "Sevgiliye Özel",
    //         icon: "https://media.discordapp.net/attachments/897112801812836392/1163743675910717490/OIG.png?ex=6540afc1&is=652e3ac1&hm=18d167da2d207ee8e96bd083012a2eda38f346447a8c763365d4b5e66e4c8e47&=&width=1170&height=1170",
    //         backgroundColor: "#FBFBFB"
    //     },
    //     {
    //         id: 2,
    //         name: "Doğum Günü",
    //         icon: "https://cdn.discordapp.com/attachments/897112801812836392/1163747157153685524/OIG.png?ex=6540b2ff&is=652e3dff&hm=9f101d51ac9ca2213cf2a890ee90be2ba383937137757b54a42a07682306f9b9&",
    //         backgroundColor: "#FDFAF1"
    //     },
    //     {
    //         id: 3,
    //         name: "Evlilik Yıl Dönümü",
    //         icon: "https://cdn.discordapp.com/attachments/897112801812836392/1163747574088482917/OIG.png?ex=6540b363&is=652e3e63&hm=eb45194e8b49c7c7e425b732c456561a1bde56cff8d60138041f8a2de2939392&",
    //         backgroundColor: "#F9FCEF"
    //     },
    //     {
    //         id: 4,
    //         name: "Yeni İş Çiçeği",
    //         icon: "https://cdn.discordapp.com/attachments/897112801812836392/1163747129873940520/OIG.png?ex=6540b2f9&is=652e3df9&hm=1cdd68413b42fc1952448b1b19155365bb9314ef5feab204c89734d7abac360b&",
    //         backgroundColor: "#FCFFFE"
    //     },
    //     {
    //         id: 5,
    //         name: "Geçmiş Olsun",
    //         icon: "https://cdn.discordapp.com/attachments/897112801812836392/1163748150071267388/OIG.png?ex=6540b3ec&is=652e3eec&hm=404c02b9faef8724c316bf1d6018b02784e0dd930e800b20ca3a1b329aaeaf52&",
    //         backgroundColor: "#E9F8FA"
    //     },
    //     {
    //         id: 6,
    //         name: "Öğretmenler Günü",
    //         icon: "https://cdn.discordapp.com/attachments/897112801812836392/1163746505694396436/OIG.png?ex=6540b264&is=652e3d64&hm=c4aa3e0fc2aee24dc23f4df7909fd06c757972746f1459bfc0d30dd77e1fee4c&",
    //         backgroundColor: "#FDF5E7"
    //     }
    // ]

    const items = [{ id: 1, name: "Category" }, { id: 2, name: "Survey" }]

    return (
        <>
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
        </>
    );
}