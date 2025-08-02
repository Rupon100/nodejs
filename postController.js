
const posts = [
    {id: 1, title: "First title 1"},
    {id: 2, title: "First title 2"},
    {id: 3, title: "First title 3"},
];

// export in es6 module way
export const getPost = () => posts;
// export { getPost };
// export default when only have one  to export one - export default getPost;
// we can export 2 function at a same time like export default and export... function
 

