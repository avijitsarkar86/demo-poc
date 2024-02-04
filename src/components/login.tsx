'use client';
import {
  Card,
  CardBody,
  CardHeader,
  Input,
  Spacer,
  input,
} from '@nextui-org/react';
import FormButton from './form-button';
import * as actions from '@/actions';
import { FormEvent } from 'react';
// import { redirect } from 'next/navigation';
import { useRouter } from 'next/navigation';

export default function Login() {
  const router = useRouter();
  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // const formData = new FormData(event.currentTarget);
    // console.log('formData : ', formData);
    // return redirect('/survey');
    router.push('/survey');
  }

  const variant = ['flat', 'bordered', 'underlined', 'faded'];
  // const ref = useRef<HTMLFormElement | null>(null);
  return (
    <div className='col-span-3'>
      <form onSubmit={onSubmit}>
        <div className='flex flex-col gap-4 p-4 w-80'>
          <h3 className='text-lg'>Login</h3>
          <Input
            name='email'
            label='Email'
            labelPlacement='outside'
            placeholder='Enter your email'
            classNames={{ input: 'bordered' }}
          />
          <Spacer y={0.5} />
          <Input
            name='pass'
            label='Password'
            labelPlacement='outside'
            placeholder='Enter your password'
            type='password'
          />
          <FormButton>Login</FormButton>
        </div>
      </form>
    </div>
  );
}
