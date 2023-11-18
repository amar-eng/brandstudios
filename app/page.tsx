'use client';

import {
  BarChartIcon,
  CodeIcon,
  Cross1Icon,
  HeartFilledIcon,
  SpeakerLoudIcon,
} from '@radix-ui/react-icons';
import Image from 'next/image';
import { useState } from 'react';
import { InlineWidget } from 'react-calendly';

export default function Home() {
  const [showCalendly, setShowCalendly] = useState(false);

  const handleConsultationClick = () => {
    setShowCalendly(true);
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-between mt-2  lg:p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between text-sm lg:flex">
        <Image
          className="mx-5 lg:mx-0"
          src="/logo.svg"
          alt="brand studios Logo"
          width={200}
          height={120}
          priority
        />

        <div
          onClick={handleConsultationClick}
          className=" text-center mt-4 right-0 top-0 flex w-full  cursor-pointer justify-center border-b border-red-500 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-red-500 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30 font-extralight"
        >
          Book a consultation call
        </div>
      </div>
      {showCalendly && (
        <div className="mt-4">
          <div
            className="pb-3 cursor-pointer"
            onClick={() => setShowCalendly(false)}
          >
            <Cross1Icon fontSize="10px" />
          </div>
          <InlineWidget url="https://calendly.com/brandstudios/30min" />
        </div>
      )}

      <div className="relative mt-16 flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-red-200 after:via-red-600 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-red-700 before:dark:opacity-10 after:dark:from-red-900 after:dark:via-[#ff0501] after:dark:opacity-40 before:lg:h-[360px] z-[-1] sm:mt-12 md:mt-1">
        <h1 className="text-center text-red-500 text-4xl lg:text-6xl uppercase mb-16 ">
          Coming Soon
        </h1>
      </div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
          <h2 className={`mb-3 text-2xl font-semibold flex items-center`}>
            <span className="mr-2">
              <HeartFilledIcon color="red" />
            </span>
            Branding
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50 text-left`}>
            Using the latest digital marketing techniques, we garuntee a
            noticable jump in your business!
          </p>
        </div>

        <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
          <h2 className={`mb-3 text-2xl font-semibold flex items-center`}>
            <span className="mr-2">
              <BarChartIcon color="red" />
            </span>
            Analytics
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50 text-left`}>
            Using the latest digital marketing techniques, we garuntee a
            noticable jump in your business!
          </p>
        </div>

        <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
          <h2 className={`mb-3 text-2xl font-semibold flex items-center`}>
            <span className="mr-2">
              <SpeakerLoudIcon color="red" />
            </span>
            Marketing
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50 text-left`}>
            Using the latest digital marketing techniques, we garuntee a
            noticable jump in your business!
          </p>
        </div>

        <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
          <h2 className={`mb-3 text-2xl font-semibold flex items-center`}>
            <span className="mr-2">
              <CodeIcon color="red" />
            </span>
            Development
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50 text-left`}>
            Using the latest digital marketing techniques, we garuntee a
            noticable jump in your business!
          </p>
        </div>
      </div>
    </main>
  );
}
