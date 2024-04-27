import React from 'react'
import { Skeleton } from '../ui/skeleton'



const WeatherCardSkeleton: React.FC = () => {

    return (
        <div className='flex items-center justify-center flex-col w-full mt-20 mb-10 gap-1'>
            <Skeleton className='h-8 w-80'></Skeleton>

            <Skeleton className='text-5xl font-light h-12 w-16'></Skeleton>

            <Skeleton className='capitalize  h-8 w-16'></Skeleton>

            <div className='flex gap-2'>
                <Skeleton className='h-8 w-16'></Skeleton>
                <Skeleton className='h-8 w-16'></Skeleton>
            </div>
        </div>

    )
}

export default WeatherCardSkeleton