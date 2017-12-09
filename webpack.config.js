module.exports= {
    entry: './js/ThroughTheAsteroidsGame',
    output: {
        filename: 'Build.js',
    },
    watch: true,
    devtool: "source-map",
    devServer: {
        inline: true,
        port: 10000
    }
};
