var config = {
    urlArgs: 'bust=' + new Date().getTime(),
    map: {
        '*': {
            banner: 'js/banner'
        },
    },
    paths: {
        slick: 'js/slick'
    },
    shim: {
        slick: {
            deps: ['jquery']
        }
    }
}
