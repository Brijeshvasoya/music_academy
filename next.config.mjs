/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.unsplash.com'
            },
            {
                protocol: 'https',
                hostname: 'res.cloudinary.com'
            }
        ]
    },
    webpack: (config) => {
        config.module.rules.push({
            test: /\.json$/,
            loader: 'json-loader',
            type: 'javascript/auto'
        });
        return config;
    }
};

export default nextConfig;
