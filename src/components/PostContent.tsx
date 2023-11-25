import {AiTwotoneCalendar} from 'react-icons/ai';
import MarkdownViewer from "@/components/MarkdownViewer";
import { PostData } from '@/service/posts';

export default function PostContent({post}: {post: PostData }) {

    return (
        <section className="flex flex-col p-4">
            <div className="flex items-center self-end">
                <AiTwotoneCalendar />
                <p className="font-semibold ml-2">{post.date.toString()}</p>
            </div>
            <h1 className="text-4xl font-bold">{post.title}</h1>
            <p className="text-xl font-bold">{post.description}</p>
            
            {/* 구분선 */}
            <div className="w-44 border-2 border-sky-600 mt-4 mb-8" />
            <MarkdownViewer content={post.content} />
        </section>
    )
}