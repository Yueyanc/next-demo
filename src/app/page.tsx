'use client';

import Head from 'next/head';
import * as React from 'react';
import '@/lib/env';

import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';

import BookIcon from '~/svg/book.svg';
import ClockIcon from '~/svg/clock.svg';
import FlightIcon from '~/svg/Flight.svg';
import RightIcon from '~/svg/right.svg';
export default function HomePage() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [isEnd, setIsEnd] = React.useState(false);
  const [isStart, setIsStart] = React.useState(false);
  React.useEffect(() => {
    if (!api) {
      return;
    }
    setIsStart(api.selectedScrollSnap() === 0);
    setIsEnd(api.scrollSnapList().length === api.selectedScrollSnap() + 1);
    api.on('select', () => {
      setIsEnd(api.scrollSnapList().length === api.selectedScrollSnap() + 1);
      setIsStart(api.selectedScrollSnap() === 0);
    });
  }, [api]);

  return (
    <main>
      <Head>
        <title>Hi</title>
      </Head>
      <section className='bg-[#030303] min-h-screen p-[20px]'>
        <div className='relative text-center p-[30px] overflow-x-hidden'>
          <div
            onClick={() => {
              api?.scrollPrev();
            }}
            style={{ opacity: isStart ? 0 : 1 }}
            className='absolute w-[48px] h-[48px] flex justify-center hover:bg-[#303030] cursor-pointer bg-black border-[1px] border-[#676767] z-[100] top-1/2 -translate-y-1/2 rounded-full'
          >
            <RightIcon className='w-[11px] rotate-180' />
          </div>
          <div
            onClick={() => {
              api?.scrollNext();
            }}
            style={{ opacity: isEnd ? 0 : 1 }}
            className='absolute w-[48px] h-[48px] flex justify-center hover:bg-[#303030] cursor-pointer bg-black border-[1px] border-[#676767] z-[100] top-1/2 -translate-y-1/2 rounded-full right-0'
          >
            <RightIcon className='w-[11px]' />
          </div>
          <Carousel
            setApi={setApi}
            opts={{
              align: 'start',
            }}
            className='w-full'
          >
            <CarouselContent>
              <CarouselItem className='basis-1/3'>
                <div className=''>
                  <div className='w-[416px] absolute z-0  scale-[.995]'>
                    <svg
                      width='416'
                      height='278'
                      viewBox='0 0 416 278'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <defs>
                        <linearGradient id='gradientOne'>
                          <stop offset='5%' stop-color='#38C1A5' />
                          <stop offset='95%' stop-color='#0891D5' />
                        </linearGradient>
                      </defs>
                      <path
                        fill='url(#gradientOne)'
                        d='M31.9999 0.000756464L384 6.30388e-05C401.673 2.82235e-05 416 14.3269 416 32.0001L416 162.792C416 168.192 414.634 173.503 412.028 178.232L410.162 181.621C404.664 191.601 404.888 203.751 410.749 213.522L411.442 214.677C414.424 219.649 416 225.339 416 231.137L416 246C416 263.673 401.673 278 384 278L32 278C14.3269 278 4.94914e-05 263.673 1.97476e-05 246L-1.01193e-05 231.137C-4.0383e-05 225.339 1.57549 219.649 4.55816 214.677L5.25124 213.521C11.1121 203.751 11.3356 191.6 5.83807 181.621L3.97134 178.232C1.36614 173.503 -3.78811e-05 168.191 -3.76447e-05 162.792L-3.19186e-05 32.0008C-3.11449e-05 14.3277 14.3268 0.00079128 31.9999 0.000756464Z'
                      />
                    </svg>
                  </div>
                  <div className='relative hover:translate-x-[4px] hover:translate-y-[-4px] transition'>
                    <div className='w-[416px] absolute z-0'>
                      <svg
                        width='416'
                        height='278'
                        viewBox='0 0 416 278'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          fill='#131313'
                          d='M31.9999 0.000756464L384 6.30388e-05C401.673 2.82235e-05 416 14.3269 416 32.0001L416 162.792C416 168.192 414.634 173.503 412.028 178.232L410.162 181.621C404.664 191.601 404.888 203.751 410.749 213.522L411.442 214.677C414.424 219.649 416 225.339 416 231.137L416 246C416 263.673 401.673 278 384 278L32 278C14.3269 278 4.94914e-05 263.673 1.97476e-05 246L-1.01193e-05 231.137C-4.0383e-05 225.339 1.57549 219.649 4.55816 214.677L5.25124 213.521C11.1121 203.751 11.3356 191.6 5.83807 181.621L3.97134 178.232C1.36614 173.503 -3.78811e-05 168.191 -3.76447e-05 162.792L-3.19186e-05 32.0008C-3.11449e-05 14.3277 14.3268 0.00079128 31.9999 0.000756464Z'
                        />
                      </svg>
                    </div>
                    <div className='w-[416px] h-[278px] bg-transparent relative z-10  p-[30px] flex flex-col justify-between'>
                      <div>
                        <div className='w-[45px] h-[4px] rounded-[11px] bg-gradient-to-b from-[#38C1A5] to-[#0891D5]'></div>
                        <div className='mt-8 text-white'>
                          <div className='text-[16px] font-bold text-left '>
                            Introduction to programming
                          </div>
                          <div className='my-4 w-[53px] h-[18px] border-[#676767] border-[1px] leading-[18px] rounded-[9px] text-[9px]'>
                            Beginner
                          </div>
                          <div className='text-[#676767] text-[12px] text-left leading-[14px]'>
                            This course covers the most basic concepts in
                            programming using Solidity as an example.
                          </div>
                        </div>
                      </div>
                      <div className='flex justify-between items-center text-white mt-5 text-[12px]'>
                        <div className='flex'>
                          <div>
                            <ClockIcon className='h-[14px] inline-block mr-3' />
                            <span>36 Hour</span>
                          </div>
                          <div className='ml-8'>
                            <BookIcon className='h-[14px] inline-block mr-3' />
                            <span>5 Course</span>
                          </div>
                        </div>
                        <div className='ml-4 w-[140px] h-[36px] bg-[#2A2A2A] text-[#9EFA13] rounded-[18px] flex items-center justify-center '>
                          <FlightIcon className='h-[16px]' />
                          <span>45% COMPLETED</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem className='basis-1/3'>
                <div>
                  <div className='w-[416px] absolute z-0 scale-[.995]'>
                    <svg
                      width='416'
                      height='278'
                      viewBox='0 0 416 278'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <defs>
                        <linearGradient id='gradientTwo'>
                          <stop offset='5%' stop-color='#719BFF' />
                          <stop offset='95%' stop-color='#DA8AFF' />
                        </linearGradient>
                      </defs>
                      <path
                        fill='url(#gradientTwo)'
                        d='M31.9997 0L384.001 -1.38868e-06C401.674 -6.2174e-07 416.001 14.3268 416.001 31.9999L416.001 78.1226C416.001 84.5537 414.032 90.8306 410.358 96.1092L409.39 97.5011C402.176 107.866 402.456 121.697 410.083 131.762C413.923 136.829 416.001 143.012 416.001 149.37L416.001 246.001C416.001 263.674 401.674 278.001 384.001 278.001L31.9995 278C14.3264 278 -0.000438855 263.673 -0.00040756 246L-0.0002202 149.369C-0.000189402 143.011 2.07803 136.828 5.91781 131.761C13.545 121.696 13.8249 107.865 6.61132 97.5L5.64263 96.1081C1.96902 90.8295 -0.000186828 84.5527 -0.000217063 78.1216L-0.00036762 32.0001C-0.000427877 14.3269 14.3265 0 31.9997 0Z'
                      />
                    </svg>
                  </div>
                  <div className='relative hover:translate-x-[4px] hover:translate-y-[-4px] transition'>
                    <div className='w-[416px] absolute z-0'>
                      <svg
                        width='416'
                        height='278'
                        viewBox='0 0 416 278'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          fill='#131313'
                          d='M31.9997 0L384.001 -1.38868e-06C401.674 -6.2174e-07 416.001 14.3268 416.001 31.9999L416.001 78.1226C416.001 84.5537 414.032 90.8306 410.358 96.1092L409.39 97.5011C402.176 107.866 402.456 121.697 410.083 131.762C413.923 136.829 416.001 143.012 416.001 149.37L416.001 246.001C416.001 263.674 401.674 278.001 384.001 278.001L31.9995 278C14.3264 278 -0.000438855 263.673 -0.00040756 246L-0.0002202 149.369C-0.000189402 143.011 2.07803 136.828 5.91781 131.761C13.545 121.696 13.8249 107.865 6.61132 97.5L5.64263 96.1081C1.96902 90.8295 -0.000186828 84.5527 -0.000217063 78.1216L-0.00036762 32.0001C-0.000427877 14.3269 14.3265 0 31.9997 0Z'
                        />
                      </svg>
                    </div>
                    <div className='w-[416px] h-[278px] bg-transparent relative z-10  p-[40px] flex flex-col justify-between'>
                      <div className='text-white'>
                        <div className='text-[16px] font-bold text-left '>
                          Moonshot 2023 Summer Hackathon
                        </div>
                        <div className='flex gap-4'>
                          <div className='my-4 px-2 inline-block h-[18px] border-[#676767] border-[1px] leading-[18px] rounded-[9px] text-[9px]'>
                            All Tracks
                          </div>
                          <div className='my-4 px-2 inline-block h-[18px] border-[#676767] border-[1px] leading-[18px] rounded-[9px] text-[9px]'>
                            Solidity
                          </div>
                          <div className='my-4 px-2 inline-block h-[18px] border-[#676767] border-[1px] leading-[18px] rounded-[9px] text-[9px]'>
                            ZK
                          </div>
                        </div>
                      </div>
                      <div className='flex flex-col gap-2'>
                        <div className='flex justify-between border-b-[1px] border-[#282828]'>
                          <div className='text-[#676767] text-[12px]'>
                            Signup
                          </div>
                          <div className='text-[#EDEDED]'>4/15 - 6/15</div>
                        </div>
                        <div className='flex justify-between border-b-[1px] border-[#282828]'>
                          <div className='text-[#676767] text-[12px]'>
                            Event
                          </div>
                          <div className='text-[#EDEDED]'>6/15 - 7/15</div>
                        </div>
                        <div className='flex justify-between border-b-[1px] border-[#282828]'>
                          <div className='text-[#676767] text-[12px]'>
                            Grant size
                          </div>
                          <div className='text-[#EDEDED]'>200K</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem className='basis-1/3'>
                <div>
                  <div className='w-[416px] absolute z-0  scale-[.995]'>
                    <svg
                      width='416'
                      height='278'
                      viewBox='0 0 416 278'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <defs>
                        <linearGradient id='gradientThree'>
                          <stop offset='5%' stop-color='#D9E313' />
                          <stop offset='95%' stop-color='#3CBC34' />
                        </linearGradient>
                      </defs>
                      <path
                        fill='url(#gradientThree)'
                        d='M1.57233e-07 238.001L9.35541e-07 39.9999C1.02238e-06 17.9085 17.9086 -6.26008e-05 40 -6.45321e-05L229.45 -8.10943e-05C238.544 -8.18894e-05 247.367 3.09901 254.464 8.7862L283.573 32.1138C290.67 37.801 299.493 40.9001 308.587 40.9001L376 40.9001C398.091 40.9001 416 58.8086 416 80.9L416 238C416 260.092 398.091 278 376 278L40 278C17.9086 278 -1.56562e-06 260.092 1.57233e-07 238.001Z'
                      />
                    </svg>
                  </div>
                  <div className='relative hover:translate-x-[4px] hover:translate-y-[-4px] transition'>
                    <div className='w-[416px] absolute z-0'>
                      <svg
                        width='416'
                        height='278'
                        viewBox='0 0 416 278'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          fill='#131313'
                          d='M1.57233e-07 238.001L9.35541e-07 39.9999C1.02238e-06 17.9085 17.9086 -6.26008e-05 40 -6.45321e-05L229.45 -8.10943e-05C238.544 -8.18894e-05 247.367 3.09901 254.464 8.7862L283.573 32.1138C290.67 37.801 299.493 40.9001 308.587 40.9001L376 40.9001C398.091 40.9001 416 58.8086 416 80.9L416 238C416 260.092 398.091 278 376 278L40 278C17.9086 278 -1.56562e-06 260.092 1.57233e-07 238.001Z'
                        />
                      </svg>
                    </div>
                    <div className='w-[416px] h-[278px] bg-transparent relative z-10  p-[30px] flex flex-col justify-between'>
                      <div>
                        <div className='w-[45px] h-[4px] rounded-[11px] bg-gradient-to-b from-[#D9E313] to-[#3CBC34]'></div>
                        <div className='mt-8 text-white'>
                          <div className='text-[16px] font-bold text-left '>
                            Web 3.0 Programming Basics
                          </div>
                          <div className='my-4 w-[53px] h-[18px] border-[#676767] border-[1px] leading-[18px] rounded-[9px] text-[9px]'>
                            Beginner
                          </div>
                          <div className='text-[#676767] text-[12px] text-left leading-[14px]'>
                            Basic concepts in programming of Solidity. Topics
                            include: variables, functions, flow control, error
                            handling, data structure.
                          </div>
                        </div>
                      </div>
                      <div className='flex justify-between items-center text-white mt-5 text-[12px]'>
                        <div className='flex'>
                          <div>
                            <ClockIcon className='h-[14px] inline-block mr-3' />
                            <span>36 Hour</span>
                          </div>
                          <div className='ml-8'>
                            <BookIcon className='h-[14px] inline-block mr-3' />
                            <span>5 Course</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem className='basis-1/3'>
                <div>
                  <div className='w-[416px] absolute z-0  scale-[.995]'>
                    <svg
                      width='416'
                      height='278'
                      viewBox='0 0 416 278'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <defs>
                        <linearGradient id='gradientThree'>
                          <stop offset='5%' stop-color='#D9E313' />
                          <stop offset='95%' stop-color='#3CBC34' />
                        </linearGradient>
                      </defs>
                      <path
                        fill='url(#gradientThree)'
                        d='M1.57233e-07 238.001L9.35541e-07 39.9999C1.02238e-06 17.9085 17.9086 -6.26008e-05 40 -6.45321e-05L229.45 -8.10943e-05C238.544 -8.18894e-05 247.367 3.09901 254.464 8.7862L283.573 32.1138C290.67 37.801 299.493 40.9001 308.587 40.9001L376 40.9001C398.091 40.9001 416 58.8086 416 80.9L416 238C416 260.092 398.091 278 376 278L40 278C17.9086 278 -1.56562e-06 260.092 1.57233e-07 238.001Z'
                      />
                    </svg>
                  </div>
                  <div className='relative hover:translate-x-[4px] hover:translate-y-[-4px] transition'>
                    <div className='w-[416px] absolute z-0'>
                      <svg
                        width='416'
                        height='278'
                        viewBox='0 0 416 278'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          fill='#131313'
                          d='M1.57233e-07 238.001L9.35541e-07 39.9999C1.02238e-06 17.9085 17.9086 -6.26008e-05 40 -6.45321e-05L229.45 -8.10943e-05C238.544 -8.18894e-05 247.367 3.09901 254.464 8.7862L283.573 32.1138C290.67 37.801 299.493 40.9001 308.587 40.9001L376 40.9001C398.091 40.9001 416 58.8086 416 80.9L416 238C416 260.092 398.091 278 376 278L40 278C17.9086 278 -1.56562e-06 260.092 1.57233e-07 238.001Z'
                        />
                      </svg>
                    </div>
                    <div className='w-[416px] h-[278px] bg-transparent relative z-10  p-[30px] flex flex-col justify-between'>
                      <div>
                        <div className='w-[45px] h-[4px] rounded-[11px] bg-gradient-to-b from-[#D9E313] to-[#3CBC34]'></div>
                        <div className='mt-8 text-white'>
                          <div className='text-[16px] font-bold text-left '>
                            Web 3.0 Programming Basics
                          </div>
                          <div className='my-4 w-[53px] h-[18px] border-[#676767] border-[1px] leading-[18px] rounded-[9px] text-[9px]'>
                            Beginner
                          </div>
                          <div className='text-[#676767] text-[12px] text-left leading-[14px]'>
                            Basic concepts in programming of Solidity. Topics
                            include: variables, functions, flow control, error
                            handling, data structure.
                          </div>
                        </div>
                      </div>
                      <div className='flex justify-between items-center text-white mt-5 text-[12px]'>
                        <div className='flex'>
                          <div>
                            <ClockIcon className='h-[14px] inline-block mr-3' />
                            <span>36 Hour</span>
                          </div>
                          <div className='ml-8'>
                            <BookIcon className='h-[14px] inline-block mr-3' />
                            <span>5 Course</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            </CarouselContent>
          </Carousel>
        </div>
      </section>
    </main>
  );
}
