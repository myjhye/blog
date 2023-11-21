import { Post } from "@/service/posts";
import PostCard from "./PostCard";

// prop인 posts -> 데이터 타입 명시 -> Post[] 사용해서
type Props = { posts: Post[] };

export default function PostsGrid({posts}: Props) {

    // posts를 prop으로 받아 -> 화면에 표시

    return (
        <ul className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {posts.map((post) => (
                <li key={post.path}>
                    <PostCard post={post} />
                </li>
            ))}
        </ul>
    )
}