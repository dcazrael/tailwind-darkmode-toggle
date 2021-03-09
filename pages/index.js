import Head from 'next/head';
import DarkModeToggle from '../components/DarkModeToggle';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <header className='container flex justify-between py-12 mx-auto'>
        <h1 className='text-4xl text-gray-800 dark:text-gray-300'>
          Welcome to <a href='https://nextjs.org'>Next.js!</a>
        </h1>
        <DarkModeToggle className='w-10 h-10 text-gray-800 dark:text-gray-300' />
      </header>

      <main className='container mx-auto'>
        <h2 className='text-xl text-gray-800 dark:text-gray-300'>
          This app is bootstrapped with TailwindCSS and has dark mode enabled
        </h2>
      </main>

      <footer className='container mx-auto'>
        <p className='text-gray-800 dark:text-gray-300'>
          &copy; Michael Sachdev
        </p>
      </footer>
    </div>
  );
}
