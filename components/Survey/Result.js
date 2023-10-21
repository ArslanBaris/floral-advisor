import React from 'react'
import { Card, CardBody, Col, Container, Row } from 'reactstrap'
import { useForm } from '@mantine/form';
import { TextInput, Button, Group, Box, ScrollArea, Image, Paper, Text, Blockquote } from '@mantine/core';
import { randomId } from '@mantine/hooks';
import { IconHeart } from '@tabler/icons-react';

export default function Result() {

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
        <Container>
            <Row>
                <Col xs="12" className='mt-5'>
                    <Card className='p-0' style={{ width: "auto", minHeight: "350px" }}>
                        <CardBody className='p-0'>
                            <Image
                                radius="md"
                                src="https://images.unsplash.com/photo-1688920556232-321bd176d0b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2370&q=80"
                            />
                        </CardBody>
                    </Card>
                </Col>
            </Row>
            <Row className='d-flex justify-content-center mt-4'>
                <Col xs="10">
                    <Blockquote color="yellow" cite="– Forrest Gump" icon={<IconHeart />} mt="xl" style={{fontFamily:"monospace, sans-serif"}}>
                        Life is like an npm install – you never know what you are going to get.
                    </Blockquote>
                </Col>
            </Row>

            <Box maw={340} mx="auto">
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
            </Box>
        </Container>
    )
}
