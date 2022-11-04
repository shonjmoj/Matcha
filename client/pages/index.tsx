import { Button } from '../components/common';

export default function Home() {
  return (
    <div className='grid grid-cols-2 gap-3'>
      <Button type='primary'>Button</Button>
      <Button type='primary' disabled>
        Button
      </Button>
      <Button type='secondary'>Button</Button>
      <Button type='outlined'>Button</Button>
    </div>
  );
}
