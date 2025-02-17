//Find the friend with the smallest name.
const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed', 'w'];

let smFriend = heights2[0];
for (const friend of heights2) {
    // console.log(friend.length);
    if (friend.length < smFriend.length) {
        smFriend = friend;
    }
}

console.log(smFriend);