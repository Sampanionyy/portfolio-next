import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import postsData from '@/data/posts.json'
import { Post } from '@/types/Post'

interface Props {
    post: Post
}

export default function PostPage({ post }: Props) {
    return (
        <>
            <Head>
                <title>{post.title}</title>
                <meta name="description" content={post.description} />
            </Head>
            <main>
                <h1>{post.title}</h1>
                <img src={post.image} alt={post.title} width={600} />
                <p>{post.content}</p>
                <Link href="/">← Retour à l'accueil</Link>
            </main>
        </>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = postsData.map((post) => ({
        params: { slug: post.slug }
    }))

    return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const post = postsData.find((p) => p.slug === params?.slug)
    return {
        props: {
            post
        }
    }
}
