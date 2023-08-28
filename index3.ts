// Define the interface for a User
interface User {
    id: number,
    username: string
}

// Define the interface for a Profile
interface Profile {
    id: number,
    username: string,
    bio: string,
    posts: Post[]
}

// Create a type Like that represents an object with user (of type User) and timestamp
type Like = {
    user: User,
    timestamp: number
};

// Define the interface for a Comment
interface Comment {
    id: number,
    user: User,
    content: string,
    timestamp: number
}

// Define the interface for a Post
interface Post {
    id: number,
    content: string,
    likes: Like[],
    comments: Comment[]
}

// Implement a function that finds the most liked post and the user who posted it
function findMostLikedPost(profiles: Profile[]): { post: Post, user: User } | undefined {
    let mostLikedPost: Post | undefined = undefined;
    let mostLikesCount = 0;
    let mostLikedUser: User | undefined = undefined;

    // Iterate through all profiles and their posts
    profiles.forEach(profile => {
        profile.posts.forEach(post => {
            if (post.likes.length > mostLikesCount) {
                mostLikesCount = post.likes.length;
                mostLikedPost = post;
                mostLikedUser = profile;
            }
        });
    });

    if (mostLikedPost && mostLikedUser) {
        return { post: mostLikedPost, user: mostLikedUser };
    } else {
        return undefined;
    }
}

// Example usage
const user1: User = { id: 1, username: "john_doe" };
const user2: User = { id: 2, username: "jane_smith" };

const profile1: Profile = {
    id: 1,
    username: "john_doe",
    bio: "A passionate developer",
    posts: [
        { id: 1, content: "My first post!", likes: [{ user: user2, timestamp: 1631000000 }], comments: [] },
        { id: 2, content: "Coding all day!", likes: [{ user: user2, timestamp: 1631100000 }, { user: user1, timestamp: 1631200000 }], comments: [] }
    ]
};

const profile2: Profile = {
    id: 2,
    username: "jane_smith",
    bio: "Lover of books",
    posts: [
        { id: 3, content: "Reading a great novel", likes: [{ user: user1, timestamp: 1631300000 }], comments: [] }
    ]
};

const profiles: Profile[] = [profile1, profile2];

const mostLikedInfo = findMostLikedPost(profiles);
if (mostLikedInfo) {
    console.log("Most Liked Post:", mostLikedInfo.post);
    console.log("Posted by:", mostLikedInfo.user);
} else {
    console.log("No posts found.");
}
