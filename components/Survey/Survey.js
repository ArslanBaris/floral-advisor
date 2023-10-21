import { IconArrowLeft, IconArrowBackUp } from '@tabler/icons-react'
import React, { useContext, useEffect, useState } from 'react'
import { Col, Container, Row } from 'reactstrap'
import { useForm } from '@mantine/form';
import { TextInput, Button, Group, Box, ScrollArea } from '@mantine/core';
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
    <Container>
      <Row className='d-flex justify-content-center'>
        <Col lg="12">
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
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  )
}

