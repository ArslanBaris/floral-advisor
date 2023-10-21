import { IconArrowLeft, IconArrowBackUp } from '@tabler/icons-react'
import React, { useContext, useEffect, useState } from 'react'
import { Card, CardBody, Col, Row } from 'reactstrap'
import { useForm } from '@mantine/form';
import { TextInput, Button, Group, Box } from '@mantine/core';
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
                    <h1 className="text-center"><GetLocalizedText id={"survey.header-title"} /></h1>
                </Col>
                <Col lg="6">
                    <TextInput mt="md" label={GetLocalizedText({ id: "survey.name" })} placeholder={GetLocalizedText({ id: "survey.name" })} {...form.getInputProps('name')} />
                </Col>
                <Col lg="6">
                    <TextInput mt="md" label={GetLocalizedText({ id: "survey.email" })} placeholder={GetLocalizedText({ id: "survey.email" })} {...form.getInputProps('email')} />
                </Col>
                <Col lg="6">
                    <TextInput mt="md" label={GetLocalizedText({ id: "survey.receiver" })} placeholder={GetLocalizedText({ id: "survey.receiver" })} {...form.getInputProps('email')} />
                </Col>
                <Col lg="10" className='pt-3'>
                    <hr className='hrLine' />
                </Col>
            </Row>
            <Row className='d-flex justify-content-center'>
            <Card style={{backgroundImage:'linear-gradient(-45deg,#ffa50069,white)',border:"none"}}>
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
            </Row>
        </>
    )
}
