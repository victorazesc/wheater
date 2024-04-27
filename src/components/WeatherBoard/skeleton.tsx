import React from 'react'
import { Skeleton } from '../ui/skeleton'

const WeatherBoardSkeleton: React.FC = () => {

    return (
        <div className='flex items-center justify-center flex-col gap-4 mt-12 pl-4 pr-4 w-full'>
            <div className='flex flex-col md:flex-row w-full gap-4'>
                <Skeleton className='w-full md:w-96 flex-1 h-32'></Skeleton>
                <Skeleton className='h-32 w-32 hidden md:flex'></Skeleton>
            </div>
            <div className='flex flex-col md:flex-row w-full gap-4'>
                <Skeleton className='w-full'></Skeleton>
                <div className='flex flex-col gap-4'>
                    <div className='flex gap-4'>
                        <Skeleton className='h-32 w-full md:w-32 flex md:hidden'></Skeleton>
                        <Skeleton className='h-32 w-full md:w-32'></Skeleton>
                        <Skeleton className='h-32 w-full md:w-32'></Skeleton>
                    </div>
                    <div className='flex gap-4'>
                        <Skeleton className='h-32 w-full md:w-32'></Skeleton>
                        <Skeleton className='h-32 w-full md:w-32'></Skeleton>
                    </div>
                    <div className='flex gap-4'>
                        <Skeleton className='h-32 w-full md:w-32'></Skeleton>
                        <Skeleton className='h-32 w-full md:w-32'></Skeleton>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WeatherBoardSkeleton