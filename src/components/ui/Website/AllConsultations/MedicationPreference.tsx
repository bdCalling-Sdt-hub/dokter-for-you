"use client";

import { useState } from 'react';
import { Radio } from 'antd';
import type { RadioChangeEvent } from 'antd';

const MedicationPreference = () => {
  const [preference, setPreference] = useState<string | null>(null);
  const [error, setError] = useState(false);

  const handlePreferenceChange = (e: RadioChangeEvent) => {
    setPreference(e.target.value);
    setError(false);
  };


  return (
    <div 
    > 
    <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Do you have a medication preference?
        </h2>
      <div className="space-y-6">
        <p className="text-gray-600 text-[16px] tracking-wide">
          If you have a preference for certain medication, you can indicate this below. The doctor can, based on your answers to the medical questionnaire, determine whether this medication is most suitable for your situation. In that case, the doctor will inform you about this. Do you have no preference? Then choose the option &apos;let the doctor decide&apos;.
        </p>

        <Radio.Group 
          onChange={handlePreferenceChange} 
          value={preference}
          className="flex flex-col space-y-4 w-full  "
        > 
        <div className={` p-4 pb-6    ${preference === 'has_preference' ? ' bg-[#B5F1D5]' : 'bg-[#EEEEEE] '}
              ${error ? 'border-red-300' : ''} `} >
          <Radio 
            value="has_preference" 
            className={`
              w-full  transition-all duration-200  `}
          >
            <div className="ml-2">
              <div className="font-medium text-gray-800">
                Yes, I have a preference for certain medication
              </div>
              <div className="text-sm text-gray-500 mt-1">
                Select your preferred medication in the next step
              </div>
            </div>
          </Radio>
        </div>

        <div className={` p-4 pb-6    ${preference === 'no_preference' ? ' bg-[#B5F1D5]' : 'bg-[#EEEEEE] '}
              ${error ? 'border-red-300' : ''} `} > 
          
          <Radio 
            value="no_preference"
            className={`
              w-full  transition-all duration-200`}
          >
            <div className="ml-2">
              <div className="font-medium text-gray-800">
                No, I let the doctor decide
              </div>
              <div className="text-sm text-gray-500 mt-1">
                The doctor will prescribe medication based on the medical questionnaire you completed
              </div>
            </div>
          </Radio>
              </div>
        </Radio.Group>

        {error && (
          <p className="text-red-500 text-sm">
            Please select a preference before continuing
          </p>
        )}


      </div>
    </div>
  );
};

export default MedicationPreference;