'use client';
 
import { Post } from "@/service/posts"
import { useState } from "react";
import PostsGrid from "./PostsGrid";
import Categories from "./Categories";

// Props 타입 정의
type Props = {
    // 블로그 포스트 배열
    posts: Post[];
    // 카테고리 목록 배열
    categories: string[];
};


// 모든 게시물을 표시하는 -> 'All Posts' 카테고리 정의
const ALL_POSTS = 'All Posts';


export default function FilterablePosts({posts, categories}: Props) {

    // 선택된 카테고리
    const [selected, setSelected] = useState(ALL_POSTS);
    
    // 선택된 카테고리에 따라 -> 게시물 필터링
    const filtered = selected === ALL_POSTS
                        ? posts 
                        : posts.filter((post) => post.category === selected);

    return (
        <section className="flex m-5">
            <PostsGrid posts={filtered} />
            <Categories 
                categories={[ALL_POSTS, ...categories]}
                selected={selected}
                onClick={(selected) => setSelected(selected)} 
            />
        </section>
    )
}