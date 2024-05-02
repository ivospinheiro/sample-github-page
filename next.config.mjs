/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",  // <=== enables static exports
    reactStrictMode: true,
    basePath: "/sample-github-page"
};

export default nextConfig;
