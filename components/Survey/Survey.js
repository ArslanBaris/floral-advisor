import { IconArrowLeft, IconArrowBackUp } from '@tabler/icons-react'
import React, { useContext, useEffect, useState } from 'react'
import { Col, Row } from 'reactstrap'
import { useForm } from '@mantine/form';
import { TextInput, Button, Group, Box } from '@mantine/core';
import { randomId } from '@mantine/hooks';
import { useAppContext } from '../../Context/AppContext';
import GetLocalizedText from '@/Utils/Intl/Index';
import QuestionInput from './QuestionInput';
import Questions from './Questions';
import Result from './Result';

export default function Survey(props) {


  const { selectedCategory } = useAppContext();
  const initialAnswers = {}; // Boş bir yanıt nesnesi oluşturuyoruz
  const [answers, setAnswers] = useState(initialAnswers);

  const handleAnswerChange = (questionId, answer) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionId]: answer,
    }));
  };

  const { setActiveIndex } = props
  const form = useForm({
    initialValues: {
      name: '',
      email: '',
    },
  });

  return (
    <>
      <Row className='d-flex justify-content-center'>
        <Col lg="10">
          <Row>
            <Col lg="6">
              <Row>
                <Col lg="12">
                  <IconArrowBackUp size={"30px"} style={{ cursor: "pointer" }} onClick={() => { setActiveIndex("Categories") }} />
                </Col>
              </Row>

              <Questions />

            </Col>



            <Col lg="6" className='d-flex justify-content-center'>
              <Result />
             
            </Col>
            <Col lg="12">
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
            </Col>
          </Row>
        </Col>

      </Row>

    </>
  )
}

