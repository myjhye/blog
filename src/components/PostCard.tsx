import { Post } from "@/service/posts"
import Image from "next/image"
import Link from "next/link"

type Props = { post: Post }

export default function PostCard({post}: Props) {

    return (
        <Link href={`/posts/${post.path}`}>
            <article className="rounded-md overflow-hidden shadow-lg">
                <Image
                    className="w-full" 
                    src={`/images/posts/${post.path}.png`} 
                    alt={post.title}
                    width={300}
                    height={200} 
                />
                <div className="flex flex-col items-center p-4">
                    <time className="self-end">{post.date.toString()}</time>
                    <h3 className="text-lg font-bold">{post.title}</h3>
                    <p className="w-full truncate text-center">{post.description}</p>
                    <span className="text-sm rounded-lg bg-green-100 px-2 my-2">{post.category}</span>
                </div>
            </article>
        </Link>
    )
}