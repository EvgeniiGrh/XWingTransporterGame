module.exports= {
    entry: './js/XWingTransporterGame',
    output: {
        filename: 'Build.js',
    },
    watch: true,
    devtool: 'source-map',
    devServer: {
        inline: true,
        port: 10000
    }
};
