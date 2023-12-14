

/** @type {import('next').NextConfig} */
module.exports = {
    env: {
        supabase_url: 'https://enyrxficohtaflrfqjev.supabase.co',
        supabase_key: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVueXJ4Zmljb2h0YWZscmZxamV2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDE4NzI1ODUsImV4cCI6MjAxNzQ0ODU4NX0.9dF9c2ml1JV3Z4b3Zd13jUAVXdgvJRldrhZCBum7cfw'
    },

    typescript: {
        ignoreBuildErrors: true
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**'
            }
        ]
    },
    webpack: (config, { isServer }) => {
        config.module.rules.push({
            test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
            use: [
                {
                    loader: 'file-loader',
                    options: {
                        publicPath: '/_next',
                        outputPath: 'static/media/',
                        name: '[name].[hash].[ext]',
                        esModule: false,
                    },
                },
            ],
        });

        return config
    }

}
