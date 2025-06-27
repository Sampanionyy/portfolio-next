import Head from 'next/head'
import Link from 'next/link'

export default function About() {
    return (
        <>
            <Head>
                <title>À propos</title>
                <meta name="description" content="À propos de moi et de mon parcours." />
            </Head>
            <main>
                <h1>À propos</h1>
                <p>Je suis développeur web passionné par les technologies modernes.</p>
                <Link href="/">← Retour à l'accueil</Link>
            </main>
        </>
    )
}
