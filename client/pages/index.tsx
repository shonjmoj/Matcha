import type { NextPage } from 'next';
import styles from '../styles/Home.module.css';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Mode from '../components/Mode';
import Love from '../components/Love';
import { useRouter } from 'next/router';

const Home: NextPage = () => {
	const router = useRouter();
	return (
		<motion.div className='flex flex-col items-center w-full'>
			<motion.h1
				initial={{ opacity: 0, y: 50 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 2.5, duration: 0.8 }}
				className='text-4xl font-semibold md:text-5xl lg:text-6xl'>
				Matcha
			</motion.h1>
			<motion.p
				className='text-center font-light leading-relaxed lg:text-md mt-6 w-[80%] lg:w-[60%]'
				initial={{ opacity: 0 }}
				animate={{ opacity: 1, scale: 1.1 }}
				transition={{ delay: 0.2 }}>
				You are more than just a photo. You have stories to tell, and passions
				to share, and things to talk about that are more interesting than the
				weather.Because you deserve what dating deserves: better.
			</motion.p>
			<motion.button
				className='px-3 py-2 mt-8 transition-shadow duration-200 border-2 border-white shadow-xs lg:text-md hover:shadow-sm hover:shadow-white shadow-white/50'
				initial={{ x: -600, opacity: 0 }}
				animate={{ x: 0, opacity: 1 }}
				whileTap={{
					scale: 1,
				}}
				whileHover={{ scale: 1.1 }}
				onClick={() => router.push('/login')}>
				FIND A MATCH
			</motion.button>
		</motion.div>
	);
};

export default Home;
