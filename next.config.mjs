/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
        {
            protocol: 'https',
            hostname: 'csyxkpbavpcrhwqhcpyy.supabase.co',
            port: '',
            pathname: '/storage/v1/object/public/assets/coffee-challenge/**',
        },
        ],
    },
};

export default nextConfig;
