import { notFound } from 'next/navigation'
import postsData from '@/data/posts.json'
import { Post } from '@/types/Post'
import Image from 'next/image'
import Link from 'next/link'
import Head from 'next/head'

interface Props {
    params: {
        slug: string
    }
}

export async function generateStaticParams() {
    return postsData.map((post) => ({
        slug: post.slug
    }))
}

export default function PostPage({ params }: Props) {
    const post = postsData.find((p) => p.slug === params.slug)

    if (!post) {
        notFound()
    }

    return (
        <>
            <Head>
                <title>{post.title} - Mon Portfolio</title>
                <meta name="description" content={post.description} />
            </Head>
            
            {/* Navbar */}
            <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-purple-100 shadow-sm">
                <div className="max-w-6xl mx-auto px-6 py-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                            <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-purple-600 rounded-lg flex items-center justify-center">
                                <span className="text-white font-bold text-sm">P</span>
                            </div>
                            <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent">
                                Portfolio
                            </span>
                        </div>
                        
                        <div className="flex items-center space-x-8">
                            <Link 
                                href="/" 
                                className="text-gray-600 font-medium hover:text-purple-400 transition-colors duration-200 relative group"
                            >
                                Accueil
                                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-purple-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></span>
                            </Link>
                            <Link 
                                href="/about" 
                                className="text-gray-600 font-medium hover:text-purple-400 transition-colors duration-200 relative group"
                            >
                                À propos
                                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-purple-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></span>
                            </Link>
                            <button className="bg-gradient-to-r from-purple-400 to-purple-600 text-white px-6 py-2 rounded-full font-medium hover:from-purple-500 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-purple-200">
                                Contact
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            <main className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-purple-50">
                <div className="max-w-4xl mx-auto px-6 py-12">
                    {/* Breadcrumb */}
                    <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-8">
                        <Link href="/" className="hover:text-purple-600 transition-colors">
                            Accueil
                        </Link>
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-purple-600 font-medium">Projets</span>
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-400">{post.title}</span>
                    </nav>

                    {/* Article Header */}
                    <header className="mb-12">
                        <div className="flex items-center space-x-4 mb-6">
                            <div className="flex space-x-2">
                                <span className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm font-medium">
                                    Projet
                                </span>
                                <span className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm font-medium">
                                    Web
                                </span>
                            </div>
                            <div className="flex items-center text-sm text-gray-500">
                                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                                </svg>
                                5 min de lecture
                            </div>
                        </div>
                        
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-800 via-purple-600 to-purple-400 bg-clip-text text-transparent leading-tight">
                            {post.title}
                        </h1>
                        
                        {post.description && (
                            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl">
                                {post.description}
                            </p>
                        )}
                    </header>

                    {/* Article Content */}
                    <article className="bg-white rounded-2xl shadow-lg overflow-hidden border border-purple-100">
                        {/* Featured Image */}
                        <div className="relative overflow-hidden">
                            <div className="aspect-video bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center">
                                {post.image ? (
                                    <Image
                                        src={post.image}
                                        alt={post.title}
                                        width={800}
                                        height={450}
                                        className="w-full h-full object-cover"
                                    />
                                ) : (
                                    <div className="text-center text-white">
                                        <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                                            <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <p className="text-lg font-medium">Image du projet</p>
                                    </div>
                                )}
                            </div>
                            
                            {/* Overlay gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                        </div>

                        {/* Content */}
                        <div className="p-8 md:p-12">
                            <div className="prose prose-lg max-w-none">
                                <div className="text-gray-700 leading-relaxed space-y-6">
                                    {post.content ? (
                                        <div className="whitespace-pre-line text-lg leading-loose">
                                            {post.content}
                                        </div>
                                    ) : (
                                        <div className="space-y-6">
                                            <p className="text-lg leading-loose">
                                                Ce projet représente une réalisation technique ambitieuse qui combine innovation et expertise. 
                                                Développé avec les dernières technologies web, il offre une expérience utilisateur exceptionnelle 
                                                et des performances optimales.
                                            </p>
                                            
                                            <h3 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Fonctionnalités principales</h3>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                                                {[
                                                    'Interface utilisateur moderne',
                                                    'Performance optimisée',
                                                    'Design responsive',
                                                    'Sécurité renforcée'
                                                ].map((feature, index) => (
                                                    <div key={index} className="flex items-center space-x-3 p-4 bg-purple-50 rounded-lg border border-purple-100">
                                                        <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                                                        <span className="text-gray-700 font-medium">{feature}</span>
                                                    </div>
                                                ))}
                                            </div>
                                            
                                            <p className="text-lg leading-loose">
                                                L'architecture de ce projet a été pensée pour être évolutive et maintenable. 
                                                Chaque composant a été développé avec attention au détail et aux bonnes pratiques 
                                                de développement moderne.
                                            </p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </article>

                    {/* Navigation Footer */}
                    <footer className="mt-12 pt-8 border-t border-purple-100">
                        <div className="flex items-center justify-between">
                            <Link
                                href="/"
                                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-400 to-purple-600 text-white font-medium rounded-full hover:from-purple-500 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-purple-200"
                            >
                                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                                </svg>
                                Retour à l'accueil
                            </Link>
                        </div>
                    </footer>
                </div>
            </main>
        </>
    )
}