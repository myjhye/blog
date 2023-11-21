import { Post } from "@/service/posts"
import Image from "next/image"
import Link from "next/link"

type Props = { post: Post }

export default function PostCard({post}: Props) {

    return (
        <Link href={`/posts/${post.path}`}>
            <Image 
                src={`/images/posts/${post.path}.png`} 
                alt={post.title}
                width={300}
                height={200} 
            />
            <div>
                <time>{post.date.toString()}</time>
                <h3>{post.title}</h3>
                <p>{post.description}</p>
                <span>{post.category}</span>
            </div>
        </Link>
    )
}