"use client";

import { useState } from 'react';
import useSignUpModal from '@/app/hooks/useSignUpModal';
import Modal from './Modal';

import React from 'react'
import { headers } from 'next/headers';
import CustomButton from '../forms/CustomButton';

const SignupModal = () => {
    const signupModal = useSignUpModal()

    const content = (
        <>
        <form className="space-y-4">
            <input placeholder="Your e-mail address" type="email" className="w-full h-[54px] px-4 border border-gray-300 rounded-xl" />

            <input placeholder="Your password" type="password" className="w-full h-[54px] px-4 border border-gray-300 rounded-xl" />

          
            <input placeholder="Repeat password" type="password" className="w-full h-[54px] px-4 border border-gray-300 rounded-xl" />
            <div className="p-5 bg-airbnb-dark text-white rounded-xl opacity-80">
                The error message
            </div>
            <CustomButton
                label="Submit"
                onClick={() => console.log('Test')}
            />
        </form>
    </>        
    )
  return (
<Modal
            isOpen={signupModal.isOpen}
            close={signupModal.close}
            label="Sign UP"
            content={content}
/>
  )
}

export default SignupModal;
