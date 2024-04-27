import { LucideIcon } from 'lucide-react'
import React from 'react'

interface WidgetCardProps {
    TitleIcon?: LucideIcon
    title: string,
    content: any,
    footer?: string,
    url?: string
}

const WidgetCard: React.FC<WidgetCardProps> = ({ title, content, footer, TitleIcon, url }) => {
    if (!title || !content) {
        return null
    }

    return (
        <a href={url ?? undefined} rel="noreferrer" target='_blank' className={`${!url ? 'cursor-default' : 'cursor-pointer'} border p-2 rounded-md flex flex-col items-center h-32`}>
            <div className='text-xs flex items-center relative w-full'>
                {TitleIcon && <span className="relative left-0"><TitleIcon size={16} /></span>}
                <span className={`${TitleIcon && '-ml-3'} flex-grow text-center`}>{title}</span>
            </div>
            <span className='text-3xl flex-grow flex items-center'>{content}</span>
            <span className='text-xs flex-grow-0'>{footer}</span>
        </a>

    )
}

export default WidgetCard