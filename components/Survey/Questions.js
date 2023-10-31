import { IconArrowLeft, IconArrowBackUp, IconMailFilled, IconUser, IconHeart, IconMailHeart } from '@tabler/icons-react'
import React, { useContext, useEffect, useState } from 'react'
import { Card, CardBody, Col, Row } from 'reactstrap'
import { isEmail, useForm } from '@mantine/form';
import { TextInput, Button, Group, Modal, Box, ScrollArea, Text } from '@mantine/core';
import { useAppContext } from '../../Context/AppContext';
import GetLocalizedText from '@/Utils/Intl/Index';
import QuestionInput from './QuestionInput';
import { getStringLocalized } from '@/Utils/Intl/utils';
import axios from 'axios';

export default function Questions({setRecommendedFlowers ,setRecommendedText}) {

    const { selectedCategory, selectedLanguage, selectedAnswers, setSelectedAnswers } = useAppContext();

    const [modalOpened, setModalOpened] = useState(false);
   

    let tempObj = {}
    selectedCategory.questions.map((question) => {
        tempObj[`question-select-${question.question_id}`] = (value) => (value == null ? getStringLocalized("form.select.validation", selectedLanguage) : null)
    })

    const form = useForm({
        initialValues: {
            name: '',
            receiver: '',
        },
        validate: {
            ...tempObj,
            name: (value) => (value.length < 3 ? getStringLocalized("form.name.validation", selectedLanguage) : null),
            receiver: (value) => (value.length < 3 ? getStringLocalized("form.receiver.validation", selectedLanguage) : null),
        },
    });

    const emailForm = useForm({
        initialValues: {
            email: '',
        },
        validate: {
            email: isEmail(getStringLocalized("form.email.validation", selectedLanguage)),
        },
    });

    const handleAnswerChange = (questionId, answerId) => {
        const newSelectedAnswers = [...selectedAnswers];
        const answerIndex = newSelectedAnswers.findIndex((answer) => answer.questionId === questionId);
        if (answerIndex >= 0) {
            newSelectedAnswers[answerIndex].answerId = answerId;
        } else {
            newSelectedAnswers.push({ questionId, answerId });
        }
        setSelectedAnswers(newSelectedAnswers);
        console.log(newSelectedAnswers)
    };

    const openModal = (e) => {
        setModalOpened(true);
    }

    const handleSuggestClick = async () => {

        let answers = []

        for (const prop in form.values) {
            if (prop.startsWith("question-select")) {

                let question_id = parseInt(prop.split("-")[2]) ;
                let answer_id = parseInt(form.values[prop])

                answers.push({question_id,answer_id})

            }
          }
        
        let body = {
            "receiver_name":form.values.receiver,
            "sender_name": form.values.name,
            "email": emailForm.values.email,
            "category_id": selectedCategory.category_id,
            "language": selectedLanguage == "tr" ? "Türkçe" : "English",
            "answers": answers
        }

        await axios.post('/api/questions/answer-questions', body)
        .then((response) => {
            setRecommendedFlowers(response.data.recommended_flowers)
            setRecommendedText(response.data.recommended_text)
            setModalOpened(false)
        }
        ).catch((error) => {
            console.log(error)
        })
    }


    return (
        <>
            <form onSubmit={form.onSubmit(openModal)}>
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
                            withAsterisk
                            label={GetLocalizedText({ id: "survey.name" })}
                            placeholder={GetLocalizedText({ id: "survey.name" })}
                            {...form.getInputProps('name')}
                            autoFocus
                            onChange={(e) => {
                                form.setValues({
                                    ...form,
                                    name: e.target.value,
                                })
                            }}
                            leftSection={<IconUser size={20} />}
                        />
                    </Col>
                    <Col lg="6" xs="6">
                        <TextInput mt="md"
                            withAsterisk
                            label={GetLocalizedText({ id: "survey.receiver" })}
                            placeholder={GetLocalizedText({ id: "survey.receiver" })}
                            {...form.getInputProps('receiver')}
                            onChange={(e) => {
                                form.setValues({
                                    ...form,
                                    receiver: e.target.value,
                                })
                            }}
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
                    <Card style={{}}>
                        <CardBody>
                            {selectedCategory.questions.map((question) => (
                                <QuestionInput
                                    form={form}
                                    key={question.question_id}
                                    question={question}
                                    options={question.answers}
                                    onAnswerChange={(answerId) =>{ handleAnswerChange(question.question_id, answerId)}}
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
                            type='submit'
                        >
                            <GetLocalizedText id={"survey.suggest"} />
                        </Button>
                    </Col>
                </Row>
            </form>

            <Modal opened={modalOpened} onClose={() => { setModalOpened(false) }} title={getStringLocalized("survey.email.modal.title",selectedLanguage)}>
            <form onSubmit={emailForm.onSubmit(handleSuggestClick)}>
                <Row className='d-flex justify-content-center p-2'>
                    <Col xs="12" className='mb-4'>
                        <TextInput mt="md"
                            withAsterisk
                            label={GetLocalizedText({ id: "survey.email" })}
                            placeholder={GetLocalizedText({ id: "survey.email" })}
                            {...emailForm.getInputProps('email')}
                            autoFocus
                            onChange={(e) => {
                                emailForm.setValues({
                                    email: e.target.value,
                                })
                            }}
                            leftSection={<IconMailHeart size={20} />
                            }
                        />
                    </Col>
                    <Col xs="12" className='d-flex justify-content-end'>
                        <Button
                            variant="gradient"
                            gradient={{ from: 'blue', to: 'cyan', deg: 135 }}
                            size='md'
                            type='submit'
                        >
                            <GetLocalizedText id={"survey.email.modal.button"} />
                        </Button>
                    </Col>
                </Row>
                </form>
            </Modal>

        </>
    )
}
