'use client';
import { signIn, signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import React from 'react';

type Props = {};

const Dashboard = (props: Props) => {
  const { data: session } = useSession();

  return (
    <>
      {session ? (
        <div className="mt-5 flex justify-center gap-3">
          <div>
            <Image
              src={session.user?.image!}
              alt="profile"
              className='rounded-full'
              width={100}
              height={100}
            />
            <h1>Hello, {session.user?.name}</h1>
            <h1 className="text-3xl text-blue-500 font-bold text-center">
              Welcome back
            </h1>
            <button
              className="bg-red-400 px-5 py-2 rounded-2xl text-white"
              onClick={() => signOut({ callbackUrl: '/' })}
            >
              Sign Out
            </button>
          </div>

        </div>
      ) : (
        <div className="mt-5">
          <h1 className="text-3xl text-red-500 font-bold text-center">
            Please Login
          </h1>
          <div className="flex justify-center">
            <button
              className="bg-sky-400 px-5 py-2 rounded-2xl text-white"
              onClick={() => signIn('google')}
            >
              Sign in with Google
            </button>
            <button
              className="bg-gray-200 px-5 py-2 rounded-2xl"
              onClick={() => signIn('github')}
            >
              Sign in with Github
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Dashboard;
