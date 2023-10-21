import React from 'react';
import { Group, Radio, CheckIcon } from '@mantine/core';
import { Card, CardBody } from 'reactstrap';
import GetLocalizedText from '@/Utils/Intl/Index';
import { useAppContext } from '@/Context/AppContext';
import { getStringLocalized } from '@/Utils/Intl/utils';
import CakeIcon from '@mui/icons-material/Cake';
const QuestionInput = ({ question, options, onAnswerChange }) => {

    const { selectedLanguage } = useAppContext();

    return (
        <div className='mb-4' >
            <span className='question-text'>{question.content}</span>
            <Radio.Group
                name={`question_${question.question_id}`}
                label={getStringLocalized("survey.select-answer", selectedLanguage)}
                // description="This is anonymous"
                withAsterisk>

                <div mt="xs" className='px-3'>
                    {options.map((option) => (
                        <Radio
                            className='mb-2 mt-2'
                            style={{cursor:"pointer"}}
                            size='sm'
                            key={option.answer_id}
                            value={option.answer_id.toString()} // Dikkat: value'yu string yapmalısınız
                            label={option.content}
                            onChange={(value) => onAnswerChange(question.question_id, value)}
                        />
                    ))}
                </div>
            </Radio.Group>
        </div>
    );
};

export default QuestionInput;
