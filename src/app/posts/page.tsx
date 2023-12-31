import FilterablePosts from "@/components/FilterablePosts";
import PostsGrid from "@/components/PostsGrid";
import { getAllPosts, getFeaturedPosts } from "@/service/posts"
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'All Posts',
    description: '풀스택 관련 블로그 글',
};

export default async function PostsPage() {

    // 모든 블로그 포스트 가져오기
    const posts = await getAllPosts();
    // 블로그 포스트에서 -> 중복되지 않는 -> 카테고리 목록 가져오기
    const categories = [ ...new Set(posts.map((post) => post.category))];

    return (
        <section>
            <FilterablePosts 
                posts={posts}
                categories={categories}
            />
        </section>
    )
}