import { Post } from "@/service/posts";

// prop인 posts -> 데이터 타입 명시 -> Post[] 사용해서
type Props = { posts: Post[] };

export default function PostsGrid({posts}: Props) {

    // posts를 prop으로 받아 -> 화면에 표시

    return (
        <ul>
            {posts.map((post) => (
                <li key={post.path}>
                    {post.title}
                </li>
            ))}
        </ul>
    )
}