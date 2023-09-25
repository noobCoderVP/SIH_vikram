import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Head from "next/head";
import Header from "@/components/Header";
import articles from "@/public/utlis/articles";
import Link from "next/link";
import NewsLetter from "@/components/NewsLetter";



const FilteredArticles = () => {
  const router = useRouter();
  const [selectedArticle, setSelectedArticle] = useState(null);

  useEffect(() => {
    // to check if the current path matches an article's letterLink
    const checkArticleMatch = () => {
      const matchingArticle = articles.find((article) => article.letterLink === router.asPath);
      if (matchingArticle) {
        setSelectedArticle(matchingArticle);
      } else {
        setSelectedArticle(null);
      }
    };

    // Call function when the component mounts and when the router.asPath changes
    checkArticleMatch();

    // Subscribe to router.asPath changes
    const routeChangeHandler = () => {
      checkArticleMatch();
    };

    router.events.on("routeChangeComplete", routeChangeHandler);

    // Clean up the subscription when the component unmounts
    return () => {
      router.events.off("routeChangeComplete", routeChangeHandler);
    };
  }, [router.asPath]);






  return (
    <div className="bg-gray-100">
        {selectedArticle ? (
          <div>
            <NewsLetter 
            title={selectedArticle.title}
            content={selectedArticle.content}
            author={selectedArticle.author}
            authorLink={selectedArticle.authorLink}
            />
          </div>
        ) : (
            <div>
                <Head>
                    <title>Articles</title>
                </Head>
                <Header />
                <div>
                    <p className="mt-24  text-3xl text-center text-black font-black">No matching articles found</p>
                    <p className="text-black text-center pb-24 font-serif mt-2">Redirect to <Link className="text-blue-600 underline-offset-2 underline" href="/">Home</Link></p>
                </div>
            </div>
          
        )}
    </div>
  );
};

export default FilteredArticles;
