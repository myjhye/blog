import { readFile } from "fs/promises";
import path from "path";
import { cache } from "react";

// Post -> 블로그 포스트 타입 정의
export type Post = {
    title: string;
    description: string;
    date: Date;
    category: string;
    path: string;
    featured: boolean;
}

// PostData -> Post 타입에 content를 추가
export type PostData = Post & { 
    content: string;
    prev: Post | null;
    next: Post | null;
};


// featured가 true인 블로그 포스트 가져오는 -> 비동기 함수
export async function getFeaturedPosts(): Promise<Post[]> {

    return getAllPosts()
        .then((posts) => posts.filter((post) => post.featured));
}


// featured가 true가 아닌 블로그 포스트 가져오는 -> 비동기 함수
export async function getNonFeaturedPosts(): Promise<Post[]> {

    return getAllPosts()
        .then((posts) => posts.filter((post) => !post.featured));
}


// 모든 블로그 포스트 가져오는 -> 비동기 함수
export const getAllPosts = cache(async () => {
    
    // data 디렉토리 안에 있는 posts.json 파일 지정
    const filePath = path.join(process.cwd(), 'data', 'posts.json');

    return readFile(filePath, 'utf-8')
        // 읽어온 json 문자열을 -> javascript 객체로 파싱 -> 화면에서 읽을 수 있게
        .then<Post[]>(JSON.parse)
        // 게시물을 날짜 순으로 정렬 -> 내림차순 -> 최신날짜부터
        .then(posts => posts.sort((a, b) => (a.date > b.date ? -1 : 1)));
})




// 포스트 파일 이름을 받아 -> 해당 포스트의 데이터를 가져오는 -> 비동기 함수
export async function getPostData(fileName: string): Promise<PostData> {

    // 포스트 파일의 경로 지정
    const filePath = path.join(process.cwd(), 'data', 'posts', `${fileName}.md`);
    
    // 모든 포스트 데이터 가져오기
    const posts = await getAllPosts()
    
    // 저장된 파일 이름과 일치하는 포스트 찾기
    const post = posts.find((post) => post.path === fileName);    
    
    if (!post) {
        throw new Error(`${fileName}에 해당하는 포스트를 찾을 수 없음`);
    }
    
    // 현재 포스트의 인덱스 찾기
    const index = posts.indexOf(post);
    
    // 현재 포스트의 -> 이전 포스트와 다음 포스트를 결정
    const next = index > 0 
                    ? posts[index - 1]
                    : null;
    const prev = index < posts.length 
                    ? posts[index + 1]
                    : null; 
 
    // 포스트 파일의 내용을 읽어오기
    const content = await readFile(filePath, 'utf-8');
    
    // 포스트 데이터와 파일 내용을 합쳐서 반환
    return { 
        ...post, 
        content,
        next,
        prev 
    };
}