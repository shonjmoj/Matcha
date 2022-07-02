import { LayoutProps } from '../../types/types';

const HomeLayout = ({ children }: LayoutProps) => {
  return (
    <div className='min-h-screen bg-gradient-to-br from-pink via-soft-pink to-pink w-screen flex justify-center items-center'>
      {children}
    </div>
  );
};
export default HomeLayout;
