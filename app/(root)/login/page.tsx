"use client"

import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation'; // Değişiklik yapıldı
import { useToast } from '@/components/ui/use-toast';

const LoginPage: React.FC = () => {
  const [name, setName] = useState('');
  const [pin, setPin] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();
  const { toast } = useToast()



  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handlePinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPin(e.target.value);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (pin === 'oybek') {
      localStorage.setItem('username' , pin)
      router.push('/home');
    } else {
      return toast({
        title: "Error",
        description:"Invalid Pin",
        variant :"destructive"
      })
    }
  };

  return (
    <div className='flex items-center justify-center h-screen w-full relative'>
      <Image src='/bg.jpg' alt='img' layout='fill' objectFit='cover' className='absolute inset-0 z-10' />

      <form onSubmit={onSubmit} className='bg-gradient-to-r from-blue-500 to-green-500
      flex bg-slate-400 space-y-4 p-4 rounded-lg flex-col z-50 justify-center items-center'>
        <input
          type='text'
          value={name}
          onChange={handleNameChange}
          placeholder='Your name'
          className='border border-gray-300 rounded-md p-2 mb-2'
          required
        />
        <input
          type='password'
          value={pin}
          onChange={handlePinChange}
          placeholder='Your password'
          className='border border-gray-300 rounded-md p-2 mb-2'
          required
        />
        {error && <p className='text-red-500'>{error}</p>}
        <button type='submit' className='bg-gradient-to-r from-slate-700 to-blue-700
        bg-blue-500  w-full text-white px-4 py-2 rounded-md'>
          Submit
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
