import React from 'react';
import { Group, Radio, Select } from '@mantine/core';
import { Card, CardBody } from 'reactstrap';
import GetLocalizedText from '@/Utils/Intl/Index';
import { useAppContext } from '@/Context/AppContext';
import { getStringLocalized } from '@/Utils/Intl/utils';
import CakeIcon from '@mui/icons-material/Cake';
import { Icon24Hours, IconFlower, IconLeaf, IconPlant, IconPlant2, IconSeeding } from '@tabler/icons-react';
const QuestionInput = ({ question, options, onAnswerChange }) => {

    const { selectedAnswers } = useAppContext();
    const selectedAnswer = selectedAnswers.find((answer) => answer.questionId === question.question_id);

    const createAswerData=()=>{
        let optionsList = []

        options.map((option) =>{
            optionsList.push({
                value: option.answer_id.toString(),
                label: option.content,
            })
        } )

        return optionsList
    }

    return (
        <div className='mb-4' >
            {/* <span className='question-text' style={{ fontFamily: "Times New Roman, sans-serif", fontSize: "16px" }} >{question.content}</span> */}
            <Select
                label={question.content}
                placeholder={GetLocalizedText({ id: "survey.select_placeholder" })}
                data={createAswerData()}
                value={selectedAnswer?.answerId}
                onChange={(value) => { onAnswerChange(value) }}
                
            />
            {/* <Radio.Group style={{ fontFamily: "Times New Roman, sans-serif" }}
                name={`question_${question.question_id}`}
                onChange={(value) => { onAnswerChange(value) }}
                value={selectedAnswer?.answerId}
            >

                <Group className='px-3 pt-2'>
                    {options.map((option) => {
                        return (
                            <Radio
                                icon={IconPlant2}
                                className=''
                                style={{ cursor: "pointer" }}
                                size='sm'
                                key={option.answer_id}
                                value={option.answer_id.toString()} // Dikkat: value'yu string yapmalısınız
                                label={option.content}
                            />
                        )
                    })}
                </Group> 
            </Radio.Group> */}
        </div>
    );
};

export default QuestionInput;
