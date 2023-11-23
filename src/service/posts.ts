import { readFile } from "fs/promises";
import path from "path";

// Post -> 블로그 포스트 타입 정의
export type Post = {
    title: string;
    description: string;
    date: Date;
    category: string;
    path: string;
    featured: boolean;
}

export type PostData = Post & { 
    content: string 
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
// Promise<Post[]> -> 비동기 작업이 완료 되면 -> Post 객체의 배열 반환 
export async function getAllPosts(): Promise<Post[]> {

    // process.cwd() -> 현재 작업 디렉토리
    // data 디렉토리 안에 있는 posts.json 파일 지정
    const filePath = path.join(process.cwd(), 'data', 'posts.json');

    // readFile -> 파일 읽어오기
    // utf-8 -> 파일 내용을 문자열로 읽어오기
    return readFile(filePath, 'utf-8')
        // 읽어온 json 문자열을 -> javascript 객체로 파싱 -> 화면에서 읽을 수 있게
        .then<Post[]>(JSON.parse)
        // 게시물을 날짜 순으로 정렬 -> 내림차순 -> 최신날짜부터
        .then(posts => posts.sort((a, b) => (a.date > b.date ? -1 : 1)));
}



export async function getPostData(fileName: string): Promise<PostData> {

    const filePath = path.join(process.cwd(), 'data', 'posts', `${fileName}.md`);
    const metadata = await getAllPosts()
        .then((posts) => posts.find((post) => post.path === fileName));
        if(!metadata) {
            throw new Error(`${fileName}에 해당하는 포스트를 찾을 수 없음`);
        }
        
        const content = await readFile(filePath, 'utf-8');
        return { ...metadata, content };
}