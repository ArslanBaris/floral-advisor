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

  const [recommendedFlowers, setRecommendedFlowers] = useState([]);
  const [recommendedText, setRecommendedText] = useState("");

  return (
    <Container>
      <Row className='d-flex justify-content-center'>
        <Col lg="12">
          <Row>
            <Col md="6" className='mt-0'>
              <Questions setRecommendedFlowers={setRecommendedFlowers} setRecommendedText={setRecommendedText} />
            </Col>
            <Col md="6" className='d-flex justify-content-center'>
              <Result recommendedFlowers={recommendedFlowers} recommendedText={recommendedText} />
            </Col>
            <Col lg="12">
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  )
}

