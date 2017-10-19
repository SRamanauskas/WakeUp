module.exports = function () {
    var config = {
        scss: {
            src: [
                './scss/**/*.scss',
                '!scss/**/*_scsslint_tmp*.scss'
            ],
            cssFolder: 'css'
        },
        svg: {
            sourceFolder: 'scss/assets/icons/',
            spriteFolder: 'css/images/',
            scssMapFolder: 'scss/core/',
            pngFallback: false
        }
    };

    return config;
};
