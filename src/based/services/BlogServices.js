import BaseServices from "./BaseServices";

const BlogServices = {
  GetAllBlogs: async (paging) => {
    return await BaseServices.Post("/api/blog/home-get-list-blogs", paging);
  },
};
export default BlogServices;
