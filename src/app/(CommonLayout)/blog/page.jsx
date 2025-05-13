export const metadata = {
  title: "Blog | Toymur Rahman",
};
const BlogPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-[#383737] to-[#0f0f0f] text-white px-6">
      <div className="text-center space-y-6">
        <h1 className="text-3xl font-bold tracking-tight">
          📚 Blog is Coming Soon!
        </h1>
        <p className="text-lg text-gray-400 max-w-xl mx-auto">
          I'm currently cooking up some awesome articles on web development,
          React, UI/UX, and everything in between. Stay tuned! ✨👨‍💻
        </p>
        <p className="text-sm text-white ">— Toymur Rahman</p>
      </div>
    </div>
  );
};

export default BlogPage;
