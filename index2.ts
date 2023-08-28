// Define the interface for an Author
interface Author {
    id: number,
    name: string,
    bio: string
}

// Create a type Comment that represents an object with author (of type Author), content, and timestamp
type Comment = {
    author: Author,
    content: string,
    timestamp: number
};

// Define the interface for a Post
interface Post {
    id: number,
    title: string,
    content: string,
    author: Author,
    comments: Comment[]
}

// Implement a function that sorts posts based on their number of comments
function sortPostsByCommentCount(posts: Post[]): Post[] {
    // Sort the posts array in descending order based on the number of comments
    const sortedPosts = posts.slice().sort((a, b) => b.comments.length - a.comments.length);
    return sortedPosts;
}

// Example usage
const author1: Author = {
    id: 1,
    name: "John Doe",
    bio: "An avid blogger."
};

const author2: Author = {
    id: 2,
    name: "Jane Smith",
    bio: "Passionate about writing."
};

const post1: Post = {
    id: 1,
    title: "Introduction to TypeScript",
    content: "TypeScript is a superset of JavaScript...",
    author: author1,
    comments: [
        { author: author2, content: "Great article!", timestamp: 1630000000 },
        { author: author1, content: "Thanks for sharing.", timestamp: 1630100000 }
    ]
};

const post2: Post = {
    id: 2,
    title: "The Benefits of Blogging",
    content: "Blogging can have a positive impact on...",
    author: author2,
    comments: [
        { author: author1, content: "I agree with your points.", timestamp: 1630200000 }
    ]
};

const posts: Post[] = [post1, post2];

const sortedPosts = sortPostsByCommentCount(posts);
console.log("Sorted Posts:", sortedPosts);
