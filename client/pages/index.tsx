import { Button, Input } from '../components/common';

export default function Home() {
  return (
    <div className='grid grid-cols-2 gap-3'>
      <Input label='Email' type='text' placeholder='test@test.com' />
    </div>
  );
}
