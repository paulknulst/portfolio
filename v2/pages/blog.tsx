import Parser from 'rss-parser'
import {useEffect, useState} from "react";
import SkeletonBlogEntry from "@components/SkeletonBlogEntry";

const Blog = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false);

    const openInNewTab = (url: string): void => {
        const newWindow = window.open(url, '_blank', 'noopener')
        if (newWindow) newWindow.opener = null
    }

    useEffect(() => {
        setLoading(true);
        const getFeeds = () => {
            type CustomFeed = {}
            type CustomItem = { description: string }
            const parser: Parser<CustomFeed, CustomItem> = new Parser({
                customFields: {
                    item: ['description']
                }
            })
            parser.parseURL("https://proxy.knulst.de/medium", function (err, feed) {
                const data = []
                feed.items.forEach(item => {
                    const image = item.description.substring(item.description.indexOf('https://cdn-images'), item.description.indexOf('" width'))
                    data.push({
                        title: item.title,
                        link: item.link.substring(0, item.link.indexOf('?')),
                        snippet: item.contentSnippet,
                        description: item.description,
                        image: image,
                        pubDate: item.pubDate
                    })
                })
                setData(data)
                setLoading(false);
            })
        };
        getFeeds()
    }, [])

    return (
        <div className="blog">
            <h1 className="text-4xl font-extrabold text-gray-800 dark:text-white p-2 text-center">
                Blog
            </h1>
            <div className="flex flex-col items-center justify-center py-2">
                <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
                    {loading && Array(10).fill(0, 0).map(() => (<SkeletonBlogEntry/>))}
                    {!loading &&
                        data.map((d, i) => (
                            <button
                                key={i}
                                onClick={() => {
                                    openInNewTab(d.link)
                                }}
                                className="transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 ...">
                                <div className="w-96 p-1">
                                    <div className="px-5 text-left">{d.pubDate}</div>
                                    <div
                                        className="px-6 py-3 text-base bg-gray-dark"
                                    >
                                        <div className="relative mb-4 rounded-lg text-[0px]">
                                            <img src={d.image} alt={d.t}/>
                                        </div>
                                        <h2 className="text-lg font-bold hover:text-sky-500 dark:text-white">{d.title}</h2>
                                    </div>
                                </div>
                            </button>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Blog;