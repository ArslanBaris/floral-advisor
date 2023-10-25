import React, { useState } from 'react'
import { Card, CardBody, CardHeader, Col, Container, Row } from 'reactstrap'
import { useForm } from '@mantine/form';
import { TextInput, Button, Group, Box, ScrollArea, Paper, Text, Blockquote, ActionIcon, Textarea } from '@mantine/core';
import { randomId } from '@mantine/hooks';
import { IconCircleChevronLeft, IconCircleChevronRight, IconCopy, IconHeart, IconMailHeart } from '@tabler/icons-react';
import GetLocalizedText from '@/Utils/Intl/Index';
import suprize from "@/public/static/images/result/suprize-2.png"
import Image from 'next/image';
export default function Result() {

    const [isHovered, setIsHovered] = useState(false);


    const handleAnswerChange = (questionId, answer) => {
        setAnswers((prevAnswers) => ({
            ...prevAnswers,
            [questionId]: answer,
        }));
    };

    const handleMouseEnter = () => {
        setIsHovered(true);
    }

    const handleMouseLeave = () => {
        setIsHovered(false);
    }


    return (
        <Container>
            <Row className='d-flex justify-content-center'>
                {/* <Col xs="12" className='mt-5 mb-2'>
                    <Text
                        size="30px"
                        fw={900}
                        variant="gradient"
                        className="text-center"
                        gradient={{ from: 'blue', to: 'cyan', deg: 135 }}
                    >
                        <GetLocalizedText id={"result.recomendation-image"} />
                    </Text>
                </Col> */}
                <Col xs="9" className='mt-2 mb-1'>
                    <Row>
                        <Col xs="3">
                            {/* <Card   onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} 
                             style={{
                                borderRadius: "5%",
                                transform: isHovered ? "scale(1.05)" : "scale(1)",
                                transition: "all 0.2s ease-in-out",
                              }}
                              >
                                <Image src={suprize1}
                                    style={{ width: "100%", height: "auto",borderRadius:"5px", cursor:"pointer" }}
                                    quality={100}
                                />
                            </Card> */}
                        </Col>
                    </Row>
                </Col>

                <Col xs="9" className='mt-3 mb-2'>
                    <Card className='p-0' style={{ width: "auto", minHeight: "auto", border: "none" }}>
                        <CardBody className='p-0'>
                            {/* <Image
                                radius="md"
                                src={suprize1}
                            />
                             <img src="@/public/static/images/result/suprize1.png" style={{ width: "90%" }} /> */}
                            <Image src={suprize}
                                alt="suprize-img"
                                style={{ width: "100%", height: "auto" }}
                                quality={100}
                            />

                        </CardBody>
                    </Card>
                </Col>
                <Col xs="12" className='mb-4' style={{ float: "right" }} >
                    <div style={{ float: "right" }}>
                        {/* <Button gradient={{ from: 'blue', to: 'cyan', deg: 135}} variant="gradient">
                        <GetLocalizedText id={"survey.new-recomendation"} />
                            </Button> */}
                    </div>
                </Col>
            </Row>
            <Row className='d-flex justify-content-center'>

                <Col xs="11" className='mb-5'>
                    <Textarea
                        minRows={3}
                        autosize
                        radius="md"
                        // disabled
                        // leftSection={<span style={{ color: "#f59f00" }}><IconHeart  />  <GetLocalizedText id={"result.note"} /></span>}
                        classNames={{ input: "note-input", section: "note-input-section" }}
                        rightSection={
                            <ActionIcon variant="outline" color="orange" aria-label="Settings">
                                <IconCopy style={{ width: '70%', height: '70%' }} stroke={1.5} />
                            </ActionIcon>
                        }

                    // value={"Life is like an npm install – you never know what you are going to get."}
                    />
                </Col>
            </Row>

            {/* <Box maw={340} mx="auto">
                <TextInput label="Name" placeholder="Name" {...form.getInputProps('name')} />
                <TextInput mt="md" label="Email" placeholder="Email" {...form.getInputProps('email')} />

                <Group justify="center" mt="xl">
                    <Button
                        variant="gradient"
                        onClick={() =>
                            form.setValues({
                                name: randomId(),
                                email: `${randomId()}@test.com`,
                            })
                        }
                    >
                        Set random values
                    </Button>
                </Group>
            </Box> */}
        </Container>
    )
}
