import Image from 'next/image'
import profileImage from '../../public/images/profile.jpeg'
import Link from 'next/link'

export default function Hero() {

    return (
        <section className='text-center'>
            <Image
                className='rounded-full mx-auto' 
                src={profileImage} 
                alt='picture of the author' 
                width={250} 
                height={250} 
                priority
            />
            <h2 className='text-3xl font-bold mt-2'>{"Hi, I'm J"}</h2>
            <h3 className='text-xl font-semibold'>Front-end Engineer</h3>
            <p>Aspiring frontend engineer with a strong command of React JS and TypeScript,<br /> 
            and a deep fascination for emerging technologies such as the metaverse and AI.</p>
            <Link href='/contact'>
                <button className='bg-yellow-500 font-bold rounded-xl py-2 px-4 mt-2'>Contact Me</button>
            </Link>
        </section>
    )
}