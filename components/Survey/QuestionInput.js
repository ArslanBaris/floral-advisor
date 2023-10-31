import React from 'react';
import { Group, Radio, Select } from '@mantine/core';
import { Card, CardBody } from 'reactstrap';
import GetLocalizedText from '@/Utils/Intl/Index';
import { useAppContext } from '@/Context/AppContext';
const QuestionInput = ({ form,question, options, onAnswerChange }) => {

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

    // console.log({...form.getInputProps(`select-${question.question_id}`)})

    return (
        <div className='mb-4' >
            {/* <span className='question-text' style={{ fontFamily: "Times New Roman, sans-serif", fontSize: "16px" }} >{question.content}</span> */}
            <Select
                withAsterisk
                label={question.content}
                placeholder={GetLocalizedText({ id: "survey.select_placeholder" })}
                data={createAswerData()}
                // value={selectedAnswer?.answerId}
                // onChange={(value) => {console.log("ewfgg"); onAnswerChange(value);}}
                {...form.getInputProps(`question-select-${question.question_id}`)}
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
