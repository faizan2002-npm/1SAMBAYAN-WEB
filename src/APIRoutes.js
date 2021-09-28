// import singlePost from "./Views/Public/singlePost";


// const getAllPosts = async () => {
//     try {
//         const token = localStorage.getItem("TOKEN");
//         // console.log("token", token);
//         // var params = props.location.search.slice(5);
//         const response = await getRequest(
//             `/api/secure/post/post-list`,
//             token
//         );
//         response.result.data.posts.map((data, key) => {
//             console.log(data);
//         });
//         console.log("Get All Posts Response", response.result.data.posts);
//     } catch (error) {
//         console.log("Get Site Setting Error", error);
//     }
// };

// useEffect(() => {
//     getAllPosts();
// }, []);
// function _Dashboard() {
//     useDocumentTitle(`${siteSettings.SiteSettings[0].SITE_TITLE} | Admin | Dashboard`)
//     return <singlePost />
// }
// var routes = [

//     {
//         path: "/ActRegulation",
//         name: "Act and Regulation",
//         icon: "ni ni-tv-2 text-primary",
//         component: _ActRegulation,
//         layout: "",
//     },
// ];
// export default routes;
