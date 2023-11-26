import Hero from "@/components/Hero";

export default function AboutPage() {

    const TITLE_CLASS = "text-2xl font-bold text-gray-800";

    return (
        <>
            <Hero />
            <section className="bg-gray-100 shadow-lg p-8 m-8 text-center">
                <h2 className={TITLE_CLASS}>Who Am I?</h2>
                <p>A developer with a keen interest in future-oriented items like the metaverse.</p>
                <h2 className={TITLE_CLASS}>Skills</h2>
                <p>
                    React, Java <br />
                    MySQL, Oracle <br />
                    Git, Clean Code <br />
                    VS Code, IntelliJ
                </p>
            </section>
        </>
    )
}