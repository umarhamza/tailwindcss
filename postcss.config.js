module.exports = {
    plugins: [
        require('postcss-import'),
        require('tailwindcss'),
        require('postcss-nested'), // or require('postcss-nesting')
        require('autoprefixer'),
        process.env.NODE_ENV === 'production' && require('@fullhuman/postcss-purgecss')({
            content: [
                './public/index.html',
            ],
            defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
        })
    ]
}