'use client'

import { ChangeEvent, FormEvent, useState } from "react"
import Banner, { BannerData } from "./Banner";

// Form 타입 정의
type Form = {
    from : string;
    subject : string;
    message : string;
}

export default function ContactForm() {

    // 폼 데이터 -> 유저가 입력한 데이터 저장
    const [form, setForm] = useState<Form>({
        from: '',
        subject: '',
        message: ''
    });

    // 배너 데이터 -> 배너 메세지, 상태 저장
    const [banner, setBanner] = useState<BannerData | null>(null);

    // 입력 필드 값 변경
    const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {

        const { name, value } = e.target;

        // 상태 업데이트 -> 현재 폼 상태를 -> 이전 상태를 기반으로 업데이트
        setForm(prev => ({
            // 이전 상태 복사
            ...prev,
            // 변경된 name 값을 -> 새 value로 설정
            [name]: value
        }));
    }

    // 폼 제출
    const onSubmit = (e: FormEvent<HTMLFormElement>) => {

        e.preventDefault();
        console.log(form);
        
        // 성공 배너 메세지 표시
        setBanner({ 
            message: '성공', 
            state: 'success' 
        });

        // 3초 후 배너 숨김
        setTimeout(() => {
            setBanner(null);
        }, 3000);
    }

    return (
        <section className="w-full max-w-md">
            {/* 배너가 존재하는 경우에만 렌더링 */}
            { banner && <Banner banner={banner} /> }
            <form onSubmit={onSubmit} className="w-full flex flex-col gap-2 my-4 p-4 bg-slate-700 rounded-xl text-white">
                <label className="font-semibold" htmlFor="from">Your Email</label>
                <input 
                    type='email'
                    id='from'
                    name='from'
                    required
                    autoFocus
                    value={form.from}
                    onChange={onChange}
                    className="text-black"
                />
                <label className="font-semibold" htmlFor="subject">Subject</label>
                <input 
                    type='text'
                    id='subject'
                    name='subject'
                    required
                    value={form.subject}
                    onChange={onChange}
                    className="text-black"
                />
                <label htmlFor="subject" className="font-semibold">Message</label>
                <textarea
                    rows={10} 
                    id='message'
                    name='message'
                    required
                    value={form.message}
                    onChange={onChange}
                    className="text-black"
                />
                <button className="bg-yellow-300 text-black font-bold hover:bg-yellow-400">Submit</button>
            </form>
        </section>
    )
}