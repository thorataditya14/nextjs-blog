import Head from "next/head"
import Link from "next/link"
import Image from "next/image"
import Layout from "../../components/layout"

export default function FirstPost() {
    return (
        <>
            <Head>
                <title>First Post</title>
            </Head>
            <h1>First Post</h1>
            <h2>
                <Link href="/">
                    <a>Back to home</a>
                </Link>
            </h2>

            <Image
                src="/images/profile.jpg"
                height={144}
                width={144}
                alt="Your Name"
            />
        </>
    )
}