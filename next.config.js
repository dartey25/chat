/** @type {import('next').NextConfig} */

const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    //basePath: '/chat',
    webpack: function (config, options) {
        config.resolve.modules.push('.')
        config.module.rules.push( {
            test: /\.(eot|svg|ttf|woff)$/,
            use: [
                {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'fonts'
                    }
                }
            ]
        });
        return config;
    }
}


module.exports = nextConfig;

