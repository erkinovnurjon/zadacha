"use client"

import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation'; // Değişiklik yapıldı

const LoginPage: React.FC = () => {
  const [name, setName] = useState('');
  const [pin, setPin] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const Function = (name: string, pin: string) => {
    if (pin !== 'oybek') {
      setError('Error: Invalid PIN');
      return;
    }
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handlePinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPin(e.target.value);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (pin === 'oybek') {
      router.push('/home');
    } else {
      setError('Error: Invalid PIN');
    }
  };

  return (
    <div className='flex items-center justify-center h-screen w-full relative'>
      <Image src='/bg.jpg' alt='img' layout='fill' objectFit='cover' className='absolute inset-0 z-10' />

      <form onSubmit={onSubmit} className='flex flex-col z-50 justify-center items-center'>
        <input
          type='text'
          value={name}
          onChange={handleNameChange}
          placeholder='Enter your name'
          className='border border-gray-300 rounded-md p-2 mb-2'
        />
        <input
          type='password'
          value={pin}
          onChange={handlePinChange}
          placeholder='Enter "oybek"'
          className='border border-gray-300 rounded-md p-2 mb-2'
        />
        {error && <p className='text-red-500'>{error}</p>}
        <button type='submit' className='bg-blue-500 text-white px-4 py-2 rounded-md'>
          Submit
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
