import { IconArrowLeft, IconArrowBackUp, IconMailFilled, IconUser, IconHeart } from '@tabler/icons-react'
import React, { useContext, useEffect, useState } from 'react'
import { Card, CardBody, Col, Row } from 'reactstrap'
import { useForm } from '@mantine/form';
import { TextInput, Button, Group, Box, ScrollArea, Text } from '@mantine/core';
import { randomId } from '@mantine/hooks';
import { useAppContext } from '../../Context/AppContext';
import GetLocalizedText from '@/Utils/Intl/Index';
import QuestionInput from './QuestionInput';

export default function Questions() {

    const { selectedCategory } = useAppContext();
    const initialAnswers = {}; // Boş bir yanıt nesnesi oluşturuyoruz
    const [answers, setAnswers] = useState(initialAnswers);

    const handleAnswerChange = (questionId, answer) => {
        setAnswers((prevAnswers) => ({
            ...prevAnswers,
            [questionId]: answer,
        }));
    };

    const form = useForm({
        initialValues: {
            name: '',
            email: '',
        },
    });

    return (
        <>
            <Row className='d-flex justify-content-center'>
                <Col lg="12" >
                    <Text
                        size="30px"
                        fw={900}
                        variant="gradient"
                        className="text-center"
                        gradient={{ from: 'blue', to: 'cyan', deg: 135 }}
                    >
                        <GetLocalizedText id={"survey.header-title"} />
                    </Text>
                </Col>
                <Col lg="6" xs="6">
                    <TextInput mt="md"
                        label={GetLocalizedText({ id: "survey.name" })}
                        placeholder={GetLocalizedText({ id: "survey.name" })} {...form.getInputProps('name')} autoFocus
                        leftSection={<IconUser size={20} />}
                    />
                </Col>
                <Col lg="6" xs="6">
                    <TextInput mt="md"
                        label={GetLocalizedText({ id: "survey.email" })}
                        placeholder={GetLocalizedText({ id: "survey.email" })} {...form.getInputProps('email')}
                        leftSection={<IconMailFilled size={20} />}
                    />
                </Col>
                <Col lg="6" xs="6">
                    <TextInput mt="md"
                        label={GetLocalizedText({ id: "survey.receiver" })}
                        placeholder={GetLocalizedText({ id: "survey.receiver" })} {...form.getInputProps('email')}
                        leftSection={<IconHeart size={20} />}
                    />
                </Col>
                <Col lg="10" className='pt-3'>
                    <hr className='hrLine' />
                </Col>
            </Row>
            <Row className='d-flex justify-content-center p-2'>
                {/* <div style={{ maxHeight: '600px', overflowY: 'auto' }}> */}
                <Card style={{ backgroundImage: 'linear-gradient(-45deg,rgba(0, 255, 255, 0.468),white)', border: "none" }}>
                    <CardBody>
                        {selectedCategory.questions.map((question) => (
                            <QuestionInput
                                key={question.question_id}
                                question={question}
                                options={question.answers}
                                onAnswerChange={handleAnswerChange}
                            />
                        ))}
                    </CardBody>
                </Card>
                {/* </div> */}
            </Row>
        </>
    )
}
