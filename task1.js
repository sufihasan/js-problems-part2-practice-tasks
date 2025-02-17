//Find the lowest number in the array below.
const heights2 = [167, 190, 120, 165, 137];

let min = heights2[0];
for (const height of heights2) {
    if (height < min) {
        min = height;
    }
}

console.log(min);