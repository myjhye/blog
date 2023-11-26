import AdjacentPostCard from "@/components/AdjacentPostCard";
import PostContent from "@/components/PostContent";
import { getPostData } from "@/service/posts";
import Image from "next/image";

type Props = {
    params: {
        // url의 slug 파라미터
        slug: string;
    }
}

export default async function PostPage({params: {slug}}: Props) {

    // slug에 해당하는 포스트 데이터를 -> 비동기적으로 가져온다
    const post = await getPostData(slug);

    return (
        <article className="rounded-2xl overflow-hidden bg-gray-100 shadow-lg m-4">
            <Image 
                className="w-full h-1/5 max-h-[500px]"
                src={`/images/posts/${post.path}.png`} 
                alt={post.title} 
                width={760} 
                height={420} 
            />
            <PostContent post={post} />
            <section className="flex shadow-md">
                {post.prev && <AdjacentPostCard post={post.prev} type='prev' />}
                {post.next && <AdjacentPostCard post={post.next} type='next' />}
            </section>
        </article>
    )
}