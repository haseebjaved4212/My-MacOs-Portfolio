import WindowControls from "#components/WindowControls";
import { blogPosts } from "#constants";
import WindowWrapper from "#hoc/WindowWrapper";
import { ChevronLeft, PanelLeft, ChevronRight,  ShieldHalf, Search, Share, Plus, Copy } from "lucide-react";

const Safari = () => {
    return (
        <>
            <div className="window-header flex items-center justify-between px-4 py-3 rounded-t-lg bg-gray-50 border-b border-gray-200 select-none text-sm text-gray-400">
                <WindowControls target="safari" />
                <PanelLeft className="ml-10 p-1 hover:bg-gray-200 rounded hover:cursor-default" />
                <div className="flex items-center gap-1 ml-5 ">
                    <ChevronLeft className="p-1 hover:bg-gray-200 rounded hover:cursor-default"/>
                    <ChevronRight className="p-1 hover:bg-gray-200 rounded hover:cursor-default"/>
                </div>
                <div className="flex-1 flex-center gap-3 ">
                    <ShieldHalf className="p-1 hover:bg-gray-200 rounded hover:cursor-default" />
                    <div className="search ">
                        <Search className="p-1 hover:bg-gray-200 rounded hover:cursor-default" />
                        <input type="text" placeholder="Search or Enter Website Name " className="flex-1"/>
                    </div>
                </div>
                <div className="flex items-center gap-5">
                    <Share className="p-1 hover:bg-gray-200 rounded hover:cursor-default"/>
                    <Plus className="p-1 hover:bg-gray-200 rounded hover:cursor-default"/>
                    <Copy className="p-1 hover:bg-gray-200 rounded hover:cursor-default"/>
                   

                </div>
            </div>
            <div className=" blog bg-white p-10 max-w-3xl mx-auto;  ">
                <h2>My Developer Portfolios</h2>
                <div className="space-y-8">
                    {blogPosts.map((post, index) => (
                        <div key={index} className="blog-post">
                            <img src={post.image} alt={post.title} />
                            <div className="content">
                                <p>{post.date}</p>
                                <h3>{post.title}</h3>
                                <p>{post.description}</p>
                                <a href={post.link} target="_blank" rel="noopener noreferrer">Read More</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
const SafariWindow = WindowWrapper(Safari, "safari");
export default SafariWindow;