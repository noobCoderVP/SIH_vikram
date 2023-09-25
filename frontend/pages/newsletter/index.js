import Header from "@/components/Header";
import Head from "next/head";
import Link from "next/link";
import articles from "@/public/utlis/articles";


const NewsLetter = () => {
    return (
        <div className="bg-gray-100">
            <Head>
                <title>Get Started</title>
            </Head>
            <Header />
            <div className="container mx-auto py-8 pt-5">
                <h1 className="text-3xl font-semibold mb-4 text-blue-500">Monthly Newsletter</h1>
                <div className="grid gap-6">
                    {articles.map((article, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                            <h2 className="text-xl text-black font-semibold mb-2">{article.title}</h2>
                            <p className="text-gray-600 mb-4">
                                <a href={article.authorLink} className="text-blue-600 hover:underline">
                                    {article.author}
                                </a>
                            </p>
                            <p className="text-gray-800">{article.content.length > 150 ? `${article.content.substring(0, 150)}...` : article.content}</p>
                            <Link href={article.letterLink} to={article.letterLink} className="text-blue-500 hover:underline block mt-4">
                                Read the full newsletter
                            </Link>
                        </div>

                    ))}
                </div>
            </div>

        </div>
    );
};

export default NewsLetter;