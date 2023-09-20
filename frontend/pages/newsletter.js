import Header from "@/components/Header";
import Head from "next/head";

const articles = [
    {
        title: 'Understanding Family Law',
        author: 'John Doe',
        authorLink: '/lawyer/profile/john_doe',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias nemo quidem nam neque fugit, fugiat sequi eaque accusamus molestiae iste dolorum qui explicabo voluptas debitis deleniti reprehenderit? Ipsa corporis inventore praesentium quae? Placeat maiores aliquam ex neque a nemo ratione aspernatur aliquid, voluptate esse repellendus dolore quos voluptatibus? Commodi laudantium laboriosam necessitatibus voluptates, non porro ducimus assumenda, perspiciatis hic illo quis nostrum totam doloremque id eum amet! Suscipit qui, dolore facilis velit, rerum dolorem eveniet quidem error porro voluptas nobis et ab! Quis, cumque dignissimos doloribus alias id totam fugiat quia ea, dolor suscipit maiores facilis error! Ipsum, quaerat delectus.',
    },
    {
        title: 'The Importance of Legal Contracts',
        author: 'Jane Smith',
        authorLink: '/lawyer/profile/jane_smith',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias nemo quidem nam neque fugit, fugiat sequi eaque accusamus molestiae iste dolorum qui explicabo voluptas debitis deleniti reprehenderit? Ipsa corporis inventore praesentium quae? Placeat maiores aliquam ex neque a nemo ratione aspernatur aliquid, voluptate esse repellendus dolore quos voluptatibus? Commodi laudantium laboriosam necessitatibus voluptates, non porro ducimus assumenda, perspiciatis hic illo quis nostrum totam doloremque id eum amet! Suscipit qui, dolore facilis velit, rerum dolorem eveniet quidem error porro voluptas nobis et ab! Quis, cumque dignissimos doloribus alias id totam fugiat quia ea, dolor suscipit maiores facilis error! Ipsum, quaerat delectus.',
    },
    {
        title: 'The Importance of Legal Contracts',
        author: 'Jane Smith',
        authorLink: '/lawyer/profile/jane_smith',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias nemo quidem nam neque fugit, fugiat sequi eaque accusamus molestiae iste dolorum qui explicabo voluptas debitis deleniti reprehenderit? Ipsa corporis inventore praesentium quae? Placeat maiores aliquam ex neque a nemo ratione aspernatur aliquid, voluptate esse repellendus dolore quos voluptatibus? Commodi laudantium laboriosam necessitatibus voluptates, non porro ducimus assumenda, perspiciatis hic illo quis nostrum totam doloremque id eum amet! Suscipit qui, dolore facilis velit, rerum dolorem eveniet quidem error porro voluptas nobis et ab! Quis, cumque dignissimos doloribus alias id totam fugiat quia ea, dolor suscipit maiores facilis error! Ipsum, quaerat delectus.',
    },
    {
        title: 'The Importance of Legal Contracts',
        author: 'Jane Smith',
        authorLink: '/lawyer/profile/jane_smith',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias nemo quidem nam neque fugit, fugiat sequi eaque accusamus molestiae iste dolorum qui explicabo voluptas debitis deleniti reprehenderit? Ipsa corporis inventore praesentium quae? Placeat maiores aliquam ex neque a nemo ratione aspernatur aliquid, voluptate esse repellendus dolore quos voluptatibus? Commodi laudantium laboriosam necessitatibus voluptates, non porro ducimus assumenda, perspiciatis hic illo quis nostrum totam doloremque id eum amet! Suscipit qui, dolore facilis velit, rerum dolorem eveniet quidem error porro voluptas nobis et ab! Quis, cumque dignissimos doloribus alias id totam fugiat quia ea, dolor suscipit maiores facilis error! Ipsum, quaerat delectus.',
    },
    {
        title: 'The Importance of Legal Contracts',
        author: 'Jane Smith',
        authorLink: '/lawyer/profile/jane_smith',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias nemo quidem nam neque fugit, fugiat sequi eaque accusamus molestiae iste dolorum qui explicabo voluptas debitis deleniti reprehenderit? Ipsa corporis inventore praesentium quae? Placeat maiores aliquam ex neque a nemo ratione aspernatur aliquid, voluptate esse repellendus dolore quos voluptatibus? Commodi laudantium laboriosam necessitatibus voluptates, non porro ducimus assumenda, perspiciatis hic illo quis nostrum totam doloremque id eum amet! Suscipit qui, dolore facilis velit, rerum dolorem eveniet quidem error porro voluptas nobis et ab! Quis, cumque dignissimos doloribus alias id totam fugiat quia ea, dolor suscipit maiores facilis error! Ipsum, quaerat delectus.',
    },
];

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
                            <p className="text-gray-800">{article.content}</p>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
};

export default NewsLetter;