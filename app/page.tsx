import Link from 'next/link'
import Head from 'next/head'
import postsData from '@/data/posts.json'
import { Post } from '@/types/Post'

const posts: Post[] = postsData

export default function Home() {
    return (
        <>
            <Head>
                <title>Mon Portfolio</title>
                <meta name="description" content="Bienvenue sur mon portfolio de projets web." />
            </Head>
            <main>
                <h1>Bienvenue sur mon Portfolio</h1>
                <nav>
                    <Link href="/">Accueil</Link> | <Link href="/about">À propos</Link>
                </nav>
                <section>
                    <h2>Mes projets</h2>
                    <ul>
                        {posts.map((post) => (
                            <li key={post.slug}>
                                <Link href={`/posts/${post.slug}`}>{post.title}</Link>
                            </li>
                        ))}
                    </ul>
                </section>
            </main>
        </>
    )
}
