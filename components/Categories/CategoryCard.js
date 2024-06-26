import React, { useEffect, useState } from "react";
import { Card, CardBody, Col, Row } from "reactstrap";
import classnames from "classnames";
import { Text } from "@mantine/core";
import { setCategoryProp, specialDateRanges } from "@/Utils/Categories/utils";
import Image from "next/image";

export default function CategoryCard(props) {

  const { data, setCategoryOpt } = props
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  }

  const handleMouseLeave = () => {
    setIsHovered(false);
  }

  useEffect(() => {
    const today = new Date();
    const isSpecialDate = specialDateRanges.some((specialDateRange) => {
      return isDateInRange(today, specialDateRange.startDate, specialDateRange.endDate);
    });

    if (isSpecialDate) {
      // Özel günlerde kategori kartlarının arka plan rengini değiştir
    }
  }
    , []);



  function isDateInRange(date, startDate, endDate) {
    return date >= startDate && date <= endDate;
  }

  return (
    <>
      <Col lg="4" xs="6" sm="4" className="mb-4 p-3">
        <Card className={classnames({
          "mb-2 category-card": true,
          "shadow-lg": isHovered
        })}
          style={{
            backgroundColor: setCategoryProp(data.category_id, "bg-color"),
            borderRadius: "5%",
            transform: isHovered ? "scale(1.05)" : "scale(1)",
            transition: "all 0.2s ease-in-out",
          }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={() => setCategoryOpt(data)}
        >
          <CardBody className="p-0" >
            <Row style={{flexDirection: "column"}}>
              <Col lg="12" > 
                <Image className="category-img" src={setCategoryProp(data.category_id, "bg-image")} alt="category-img" style={{ width: "100%", height: "auto", borderRadius: "6%" }} />
              </Col>
              <Col lg="12" style={{marginTop:"auto"}}>
                <Text
                 className="category-name mb-3"
                 style={{marginTop:"auto"}}
                  fw={900}
                >
                 {data.name}
                </Text>
              </Col>
            </Row>
          </CardBody>
        </Card>
      </Col>
    </>
  );
}