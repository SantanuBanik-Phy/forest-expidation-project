
const blogData = [
    {
        title: "The Thrill of Forest Expeditions: Discover Nature's Hidden Wonders",
        author: "Jane Doe",
        date: "NOV 19, 2024",
        comments: 5,
        image: "https://i.ibb.co.com/gSmRnVF/stream-with-moss-covered-rocks-trees-background-1034910-32693.jpg", // Replace with actual image URLs
        content: "Embark on an unforgettable adventure through lush forests, encountering diverse wildlife and hidden trails. Forest expeditions offer a deep connection to nature while promoting eco-friendly tourism."
    },
    {
        title: "Why Forest Expeditions Are a Must for Nature Lovers",
        author: "John Smith",
        date: "NOV 18, 2024",
        comments: 8,
        image: "https://i.ibb.co.com/ynQtz7s/istockphoto-1419410282-612x612.jpg",
        content: "From towering trees to vibrant flora, forest expeditions are a dream come true for eco-tourists. Learn how these adventures help conserve biodiversity and support sustainable travel practices."
    },
    {
        title: "Eco-friendly Forest Expeditions: A Step Towards Sustainable Tourism",
        author: "Alice Green",
        date: "NOV 17, 2024",
        comments: 12,
        image: "https://i.ibb.co.com/fGdwr7m/pexels-nejc-kosir-108379-338936.jpg",
        content: "Discover how forest expeditions help conserve natural habitats while educating travelers about the importance of preserving forests. Join us in making a positive impact on the environment through responsible travel."
    },
   
];




const Blog = () => {
    return (
        <div className="container mx-auto p-6 my-12">
            <h1 className="text-4xl font-bold text-center mb-8">Recent Blog</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {blogData.map((post, index) => (
                    <div key={index} className="card bg-base-100 shadow-xl">
                        <figure><img src={post.image} alt={post.title} /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{post.title}</h2>
                            <div className="flex items-center text-sm text-gray-500 mb-4">
                                <span>{post.author}</span>
                                <span className="mx-2">•</span>
                                <span>{post.date}</span>
                                <span className="mx-2">•</span>
                                <span>{post.comments} Comments</span>
                            </div>
                            <p>{post.content}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Blog;