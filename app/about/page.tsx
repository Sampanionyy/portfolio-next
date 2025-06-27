import Head from 'next/head'
import Link from 'next/link'

export default function About() {
    return (
        <>
            <Head>
                <title>À propos - Mon Portfolio</title>
                <meta name="description" content="À propos de moi et de mon parcours." />
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
                                className="text-purple-600 font-medium hover:text-purple-400 transition-colors duration-200 relative group"
                            >
                                À propos
                                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-purple-400 transform scale-x-100 transition-transform duration-200"></span>
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>

            <main className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-purple-50">
                {/* Hero Section */}
                <section className="relative overflow-hidden py-20 px-6">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-400/10 to-transparent"></div>
                    <div className="max-w-4xl mx-auto text-center relative z-10">
                        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-800 via-purple-600 to-purple-400 bg-clip-text text-transparent">
                            À propos de moi
                        </h1>
                        <div className="flex justify-center mb-8">
                            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full"></div>
                        </div>
                    </div>
                </section>

                {/* Content Section */}
                <section className="py-16 px-6">
                    <div className="max-w-4xl mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                            {/* Profile Card */}
                            <div className="lg:col-span-1">
                                <div className="bg-white rounded-2xl shadow-lg p-8 border border-purple-100 sticky top-24">
                                    <div className="text-center mb-6">
                                        <div className="w-32 h-32 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                                            <span className="text-4xl text-white font-bold">👨‍💻</span>
                                        </div>
                                        <h2 className="text-2xl font-bold text-gray-800 mb-2">Développeur Web</h2>
                                        <p className="text-purple-600 font-medium">Passionné par les technologies modernes</p>
                                    </div>
                                    
                                    <div className="space-y-4">
                                        <div className="flex items-center space-x-3 text-gray-600">
                                            <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                                                <svg className="w-4 h-4 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                                </svg>
                                            </div>
                                            <span>France</span>
                                        </div>
                                        <div className="flex items-center space-x-3 text-gray-600">
                                            <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                                                <svg className="w-4 h-4 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                                                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                                </svg>
                                            </div>
                                            <span>contact@portfolio.dev</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Main Content */}
                            <div className="lg:col-span-2 space-y-8">
                                {/* Introduction */}
                                <div className="bg-white rounded-2xl shadow-lg p-8 border border-purple-100">
                                    <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                                        <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-purple-600 rounded-lg flex items-center justify-center mr-3">
                                            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        Qui suis-je ?
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed text-lg">
                                        Je suis développeur web passionné par les technologies modernes. 
                                        J'aime créer des expériences utilisateur exceptionnelles et des solutions techniques innovantes. 
                                        Mon approche combine créativité et expertise technique pour donner vie à des projets ambitieux.
                                    </p>
                                </div>

                                {/* Skills */}
                                <div className="bg-white rounded-2xl shadow-lg p-8 border border-purple-100">
                                    <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                                        <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-purple-600 rounded-lg flex items-center justify-center mr-3">
                                            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        </div>
                                        Compétences
                                    </h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {[
                                            'React & Next.js',
                                            'TypeScript',
                                            'Node.js',
                                            'Tailwind CSS',
                                            'MongoDB',
                                            'Git & GitHub'
                                        ].map((skill, index) => (
                                            <div key={index} className="flex items-center space-x-3 p-3 bg-purple-50 rounded-lg border border-purple-100">
                                                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                                                <span className="text-gray-700 font-medium">{skill}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Experience */}
                                <div className="bg-white rounded-2xl shadow-lg p-8 border border-purple-100">
                                    <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                                        <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-purple-600 rounded-lg flex items-center justify-center mr-3">
                                            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        Mon parcours
                                    </h3>
                                    <div className="space-y-4">
                                        <div className="border-l-4 border-purple-400 pl-6">
                                            <h4 className="font-semibold text-gray-800">Développeur Full-Stack</h4>
                                            <p className="text-purple-600 font-medium">2023 - Présent</p>
                                            <p className="text-gray-600 mt-2">
                                                Développement d'applications web modernes avec React, Next.js et Node.js. 
                                                Focus sur l'expérience utilisateur et les performances.
                                            </p>
                                        </div>
                                        <div className="border-l-4 border-gray-300 pl-6">
                                            <h4 className="font-semibold text-gray-800">Études en développement web</h4>
                                            <p className="text-gray-500 font-medium">2022 - 2023</p>
                                            <p className="text-gray-600 mt-2">
                                                Formation intensive en développement web moderne, 
                                                avec un focus sur les technologies JavaScript.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Navigation */}
                        <div className="mt-16 text-center">
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
                    </div>
                </section>
            </main>
        </>
    )
}