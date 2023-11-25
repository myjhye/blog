import MarkdownViewer from "@/components/MarkdownViewer";
import { getPostData } from "@/service/posts";

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
        <>
            <h1>{post.title}</h1>
            <MarkdownViewer content={post.content} />
        </>
    )
}