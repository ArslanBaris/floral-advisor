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

    const { selectedCategory,  selectedAnswers, setSelectedAnswers } = useAppContext();

    const form = useForm({
        initialValues: {
            name: '',
            email: '',
        },
    });

    useEffect(() => {
        console.log("selectedAnswers", selectedAnswers);
    }, [selectedAnswers]);

    const handleAnswerChange = (questionId, answerId) => {
        const newSelectedAnswers = [...selectedAnswers];
        const answerIndex = newSelectedAnswers.findIndex((answer) => answer.questionId === questionId);
        if (answerIndex >= 0) {
          newSelectedAnswers[answerIndex].answerId = answerId;
        } else {
          newSelectedAnswers.push({ questionId, answerId });
        }
        setSelectedAnswers(newSelectedAnswers);
      };

    return (
        <>
            <Row className='d-flex justify-content-center p-2'>
                {/* <Col lg="12" >
                    <Text
                        size="30px"
                        fw={900}
                        variant="gradient"
                        className="text-center"
                        gradient={{ from: 'blue', to: 'cyan', deg: 135 }}
                    >
                        <GetLocalizedText id={"survey.header-title"} />
                    </Text>
                </Col> */}
                <Col lg="6" xs="6">
                    <TextInput mt="md"
                        label={GetLocalizedText({ id: "survey.name" })}
                        placeholder={GetLocalizedText({ id: "survey.name" })} {...form.getInputProps('name')} autoFocus
                        leftSection={<IconUser size={20} />}
                    />
                </Col>
                <Col lg="6" xs="6">
                    <TextInput mt="md"
                        label={GetLocalizedText({ id: "survey.receiver" })}
                        placeholder={GetLocalizedText({ id: "survey.receiver" })} {...form.getInputProps('email')}
                        leftSection={<IconHeart size={20} />}
                    />
                </Col>
                {/* <Col lg="6" xs="8">
                    <TextInput mt="md"
                        label={GetLocalizedText({ id: "survey.email" })}
                        placeholder={GetLocalizedText({ id: "survey.email" })} {...form.getInputProps('email')}
                        leftSection={<IconMailFilled size={20} />}
                    />
                </Col> */}
                <Col lg="10" className='pt-3'>
                    <hr className='hrLine' />
                </Col>
            </Row>
            <Row className='d-flex justify-content-center p-3'>
                {/* <div style={{ maxHeight: '600px', overflowY: 'auto' }}> */}
                <Card style={{ }}>
                    <CardBody>
                        {selectedCategory.questions.map((question) => (
                            <QuestionInput
                                key={question.question_id}
                                question={question}
                                options={question.answers}
                                onAnswerChange={(answerId) => handleAnswerChange(question.question_id, answerId)}
                            />
                        ))}
                    </CardBody>
                </Card>
                {/* </div> */}
            </Row>
            <Row className='d-flex justify-content-center p-2'>
                <Col xs="12" className='d-flex justify-content-end'>
                <Button
                        variant="gradient"
                        gradient={{ from: 'blue', to: 'cyan', deg: 135 }}
                        size='md'
                        onClick={() => { }}
                    >
                          <GetLocalizedText id={"survey.suggest"} />
                    </Button>
                </Col>
            </Row>
        </>
    )
}
