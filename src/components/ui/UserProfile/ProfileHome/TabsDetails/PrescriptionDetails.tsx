/* eslint-disable @typescript-eslint/ban-ts-comment */
//@ts-nocheck

import { imageUrl } from '@/redux/base/baseApi';
import { ArrowLeft, Download } from 'lucide-react';
import moment from 'moment';
import React from 'react'; 


interface ConsultationDetailsProps {
    consultationId: string;
    onClose: () => void;
  } 

const PrescriptionDetails = ({ consultationId , onClose }: ConsultationDetailsProps) => { 

    return (
      <div className=''>
      <button
        onClick={onClose}
        className="mb-6 inline-flex items-center text-primary font-medium"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back 
      </button> 

      <div className='bg-white p-4 '>
 
 <p className=' font-medium lg:text-[32px] text-[22px] pb-[24px]'>Your Digital Prescription Details</p>

  {/* Tracking Info */}
  <div className="bg-[#E7FBF2] p-4 rounded-none mb-6">
    <div className="text-[16px] flex flex-col gap-2">
      {/* <p className="text-[#4E4E4E]">Tracking No. {consultationId?.trackingNo}</p> */}
      <p className="text-[#4E4E4E]">{consultationId?.category?.name} / {consultationId?.subCategory?.name}</p>
      <p className="text-[#4E4E4E]">{ moment(consultationId?.createdAt).format('DD/MM/YYYY , hh:mm a')}</p>
    </div>
  </div>
 
 <div className='bg-[#F7F7F7] p-4'>
  {/* Consultation Details */}
  <div className=" pb-4 mb-4 ">
    <div className="flex justify-between items-center mb-2">
      <div>
        <p className="text-[16px] text-[#4E4E4E]">Consultation for {consultationId?.category?.name} problem</p>
        <p className="text-sm text-[#999999]">Medical questions/view, doctor&apos;s advice and prescription</p>
      </div>
      <p className="text-right text-primary">€25.00</p>
    </div>
    <div className="flex items-center justify-end gap-[200px]">
      <span className='text-[#6B6B6B]'>discount -</span>
      <span className='text-[#6B6B6B]'>€00.00</span>
    </div>
    <div className="flex justify-end items-center font-medium mt-3 gap-[200px] border-t pt-2">
      <span>Total -</span>
      <span>€25.00</span>
    </div>
  </div>

  {/* Prescription Report */} 


    <div className="p-6 pb-11 mb-6 bg-white flex flex-col gap-4">
    <h3 className="text-center font-medium text-2xl text-primary ">Prescription Report</h3>
    <p className="text-center text-green-600 text-sm font-medium ">
      Our doctor has sent your prescription, please download the file.
    </p>
    <p className="text-center text-red-500 text-sm ">
      Stating that it is valid for 7 days only and can be use once.
    </p> 
    <a  href={`${imageUrl}api/v1/pdf/generate-pdf/${consultationId?._id}`} download className="mx-auto flex items-center justify-center gap-2 px-6 bg-primary text-white h-[48px]" >
         <Download className="h-4 w-4" size={24} color='white'/>
         Download now
       </a>
  </div>


 </div>


      </div>
</div>
    );
};

export default PrescriptionDetails;