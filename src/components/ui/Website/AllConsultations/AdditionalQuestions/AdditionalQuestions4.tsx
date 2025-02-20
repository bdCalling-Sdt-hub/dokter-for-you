
"use client"
import { ConfigProvider, Form, Input, message, Radio, Space } from 'antd';
import React, { useState } from 'react'; 
const questions = [
    {
      title: 'Have you used this medication before, and if so, did you experience any side effects?',
      options: [
       "Yes" ,
       "No"
      ],
    }
  ];

const AdditionalQuestions4 = ({ updateQNA }: { updateQNA: (question: string, answer: string) => void }) => { 
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [additionalInfo, setAdditionalInfo] = useState<string>('');

  const handleOptionChange = (question: string, answer: string) => {
    setSelectedAnswer(answer);
  
    if (answer === "No") {
      setAdditionalInfo("");
      updateQNA(question, answer);
    } else if (answer === "Yes") {
      if (additionalInfo.trim().length === 0) {
        message.error("Please enter a reason.");
      } else {
        updateQNA(question, `${answer}, ${additionalInfo}`);
      }
    }
  };
  
  const handleAdditionalInfoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setAdditionalInfo(value);
  
    if (selectedAnswer === "Yes" && value.trim().length > 0) {
      updateQNA(questions[0].title, `Yes, ${value}`);
    }
  };

    return (
      <div>
      <Form>
        {questions.map((question, index) => (
          <div key={index}>
            {/* Main Question */}
            <div>
              <h1 className="lg:text-[24px] text-[20px] font-medium pb-6">{question.title}</h1>
              <Form.Item>
                <Radio.Group
                  onChange={(e) => handleOptionChange(question.title, e.target.value)}
                  value={selectedAnswer}
                >
                  <Space direction="vertical">
                    {question.options.map((option, idx) => (
                      <div key={idx}>

                        <ConfigProvider
                          theme={{
                            token: {
                              colorPrimary: option === 'Yes' ? 'red' : 'green'
                            },
                          }}
                        >

                          <Radio

                            value={option}
                            className="text-[22px] font-medium my-5 flex items-center"
                            style={{
                              color: option === 'Yes' ? 'red' : 'green',
                              fontWeight: selectedAnswer === option ? 'bold' : 'normal',

                            }}
                          >
                            {option}
                          </Radio>
                        </ConfigProvider>
                      </div>
                    ))}
                  </Space>
                </Radio.Group>
              </Form.Item>
            </div>

            {/* Additional Input for "Yes" */}
            {selectedAnswer === 'Yes' && (
              <ConfigProvider
                theme={{
                  token: {
                    colorPrimary: 'red',
                  },
                }}
              >
                <Form.Item>
                  <Input
                    placeholder="Reason"
                    value={additionalInfo}
                    onChange={handleAdditionalInfoChange}
                    style={{
                      height: 48,
                      width: '420px',
                    }}
                  />
                </Form.Item>
              </ConfigProvider>
            )}
          </div>
        ))}
      </Form>
    </div>
    );
};

export default AdditionalQuestions4;