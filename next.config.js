// const withImages = require('next-images');

// module.exports = {
//     typescript: {
//         // !! WARN !!
//         // Dangerously allow production builds to successfully complete even if
//         // your project has type errors.
//         // !! WARN !!
//         ignoreBuildErrors: true,
//     },
//     withImages: withImages({
//         webpack(config, options) {
//             config.module.rules.push({
//                 test: /\.(ogg|mp3|wav|mpe?g)$/i,
//                 use: [
//                     {
//                         loader: 'url-loader',
//                         options: {
//                             name: '[name]-[hash].[ext]',
//                         },
//                     },
//                 ],
//             });
//             return config;
//         },
//     }),
// };

const withImages = require('next-images');

module.exports = withImages({
    webpack(config, options) {
        config.module.rules.push({
            test: /\.(ogg|mp3|wav|mpe?g)$/i,
            use: [
                {
                    loader: 'url-loader',
                    options: {
                        name: '[name]-[hash].[ext]',
                    },
                },
            ],
        });
        return config;
    },
});
