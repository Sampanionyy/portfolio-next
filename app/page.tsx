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
                                className="text-purple-600 font-medium hover:text-purple-400 transition-colors duration-200 relative group"
                            >
                                Accueil
                                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-purple-400 transform scale-x-100 transition-transform duration-200"></span>
                            </Link>
                            <Link 
                                href="/about" 
                                className="text-gray-600 font-medium hover:text-purple-400 transition-colors duration-200 relative group"
                            >
                                À propos
                                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-purple-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></span>
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>

            <main className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-purple-50">
                {/* Hero Section */}
                <section className="relative overflow-hidden py-20 px-6">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-400/10 to-transparent"></div>
                    <div className="max-w-6xl mx-auto text-center relative z-10">
                        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-800 via-purple-600 to-purple-400 bg-clip-text text-transparent">
                            Bienvenue sur mon Portfolio
                        </h1>
                        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                            Découvrez mes projets créatifs et mes réalisations techniques
                        </p>
                        <div className="flex justify-center">
                            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full"></div>
                        </div>
                    </div>
                </section>

                {/* Projects Section */}
                <section className="py-16 px-6">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-gray-800 mb-4">Mes Projets</h2>
                            <p className="text-gray-600 max-w-2xl mx-auto">
                                Une collection de mes travaux les plus récents et les plus passionnants
                            </p>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {posts.map((post, index) => (
                                <Link
                                    key={post.slug}
                                    href={`/posts/${post.slug}`}
                                    className="group block"
                                >
                                    <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-purple-100 hover:border-purple-200">
                                        {/* Card Header avec gradient */}
                                        <div className="h-32 bg-gradient-to-br from-purple-400 to-purple-600 relative overflow-hidden">
                                            <div className="absolute inset-0 bg-black/10"></div>
                                            <div className="absolute top-4 right-4 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                                                <span className="text-white text-sm font-bold">#{index + 1}</span>
                                            </div>
                                            <div className="absolute bottom-4 left-4 text-white">
                                                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                                                        <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm0 4a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        {/* Card Content */}
                                        <div className="p-6">
                                            <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-purple-600 transition-colors duration-200">
                                                {post.title}
                                            </h3>
                                            <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                                                {post.description || "Découvrez ce projet passionnant et ses fonctionnalités innovantes."}
                                            </p>
                                            
                                            {/* Tags */}
                                            <div className="flex flex-wrap gap-2 mb-4">
                                                <span className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-xs font-medium">
                                                    Web
                                                </span>
                                                <span className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-xs font-medium">
                                                    React
                                                </span>
                                            </div>
                                            
                                            {/* Call to action */}
                                            <div className="flex items-center text-purple-600 font-medium text-sm group-hover:text-purple-400 transition-colors duration-200">
                                                Voir le projet
                                                <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                        
                        {posts.length === 0 && (
                            <div className="text-center py-16">
                                <div className="w-24 h-24 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-12 h-12 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">Aucun projet pour le moment</h3>
                                <p className="text-gray-600">Les projets apparaîtront ici bientôt !</p>
                            </div>
                        )}
                    </div>
                </section>
            </main>
        </>
    )
}