// Implement a function that finds the most liked post and the user who posted it
function findMostLikedPost(profiles) {
    var mostLikedPost = undefined;
    var mostLikesCount = 0;
    var mostLikedUser = undefined;
    // Iterate through all profiles and their posts
    profiles.forEach(function (profile) {
        profile.posts.forEach(function (post) {
            if (post.likes.length > mostLikesCount) {
                mostLikesCount = post.likes.length;
                mostLikedPost = post;
                mostLikedUser = profile;
            }
        });
    });
    if (mostLikedPost && mostLikedUser) {
        return { post: mostLikedPost, user: mostLikedUser };
    }
    else {
        return undefined;
    }
}
// Example usage
var user1 = { id: 1, username: "john_doe" };
var user2 = { id: 2, username: "jane_smith" };
var profile1 = {
    id: 1,
    username: "john_doe",
    bio: "A passionate developer",
    posts: [
        { id: 1, content: "My first post!", likes: [{ user: user2, timestamp: 1631000000 }], comments: [] },
        { id: 2, content: "Coding all day!", likes: [{ user: user2, timestamp: 1631100000 }, { user: user1, timestamp: 1631200000 }], comments: [] }
    ]
};
var profile2 = {
    id: 2,
    username: "jane_smith",
    bio: "Lover of books",
    posts: [
        { id: 3, content: "Reading a great novel", likes: [{ user: user1, timestamp: 1631300000 }], comments: [] }
    ]
};
var profiles = [profile1, profile2];
var mostLikedInfo = findMostLikedPost(profiles);
if (mostLikedInfo) {
    console.log("Most Liked Post:", mostLikedInfo.post);
    console.log("Posted by:", mostLikedInfo.user);
}
else {
    console.log("No posts found.");
}
