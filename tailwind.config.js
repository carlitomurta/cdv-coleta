module.exports = {
    purge: [
        './components/**/*.{vue,js}',
        './layouts/**/*.vue',
        './pages/**/*.vue',
        './plugins/**/*.{js,ts}',
        './nuxt.config.{js,ts}',
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        container: {
            center: true,
            padding: '2rem',
        },
        colors: {
            black: '#2B2D39',
            white: '#FFFFFF',
            grey: {
                100: '#EFEFEF',
                200: '#CDCDCD',
                300: '#696969',
                400: '#424242',
                500: '#2B2D39',
            },
            red: {
                100: '#FEEBEF',
                200: '#FDD2DB',
                300: '#FB88A1',
                400: '#F93963',
                500: '#E11E49',
            },
            yellow: {
                100: '#FFF8E9',
                200: '#FFEEC8',
                300: '#FED988',
                400: '#FEC548',
                500: '#EDAD22',
            },
            green: {
                100: '#DEF8E9',
                200: '#C9F3DA',
                300: '#6EDF9D',
                400: '#17C862',
                500: '#19BE5E',
            },
            blue: {
                100: '#E8F4FF',
                200: '#C6E4FF',
                300: '#66B8FF',
                400: '#1894FF',
                500: '#007EEA',
            },
            purple: {
                100: '#7D39D4',
                200: '#9159DB',
                300: '#B38DE6',
                400: '#E0D1F5',
                500: '#F4EEFB',
            },
        },
        extend: {
            colors: {
                brand: {
                    leaf: '#92C133',
                    green: '#0D8C34',
                    yellow: '#FFEEC8'
                },
            },
            fontFamily: {
                head: ['Bowlby One'],
                sans: ['Roboto'],
            },
        },
    },
    variants: {
        extend: {
            appearance: ['hover', 'focus'],
        },
    },
    plugins: [],
}