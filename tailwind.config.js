const colors = require('tailwindcss/colors');
module.exports = {
    purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    darkMode: 'class', // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                orange: colors.orange,
                teal: colors.teal,
                cyan: colors.cyan,
                lightblue: colors.lightBlue,
                normalgray: colors.gray,
                bluegray: colors.blueGray,
                fuchsia: colors.fuchsia,
                home: {
                    primary: colors.blue,
                    secondary: colors.indigo,
                    contrast: colors.fuchsia,
                    gray: colors.blueGray,
                    main: {
                        light: colors.white,
                        dark: colors.blueGray[900],
                    }
                },
                blog: {
                    primary: colors.cyan,
                    secondary: colors.teal,
                    contrast: colors.amber,
                    gray: colors.gray,
                    header: colors.cyan,
                    main: {
                        light: colors.white,
                        dark: colors.blueGray[900],
                    }
                },
            },
            typography: (theme) => ({
                DEFAULT: {
                    css: {
                        color: theme('colors.blog.gray.700'),
                        blockquote: {
                            color: theme('colors.blog.gray.800')
                        },
                        code: {
                            fontWeight: 'inherit',
                        },
                        'code::before': {
                            content: 'none',
                        },
                        'code::after': {
                            content: 'none',
                        },
                        a: {
                            color: theme('colors.blog.secondary.500'),
                            textDecoration: 'none',
                            fontWeight: 600,
                            '&:hover': {
                                textDecoration: 'underline',
                                color: theme('colors.blog.contrast.500'),
                            },
                        },
                        'a code': {
                            color: 'inherit',
                        },
                        thead: {
                            color: 'inherit',
                        },
                        'ol > li::before': {
                            color: theme('colors.blog.contrast.600'),
                        },
                        'ul > li::before': {
                            backgroundColor: theme('colors.blog.contrast.600'),
                        }
                    },
                },
                dark: {
                    css: {
                        blockquote: {
                            color: 'inherit'
                        },
                        code: {
                            fontWeight: 'inherit',
                        },
                        a: {
                            color: theme('colors.blog.secondary.400'),
                            textDecoration: 'none',
                            fontWeight: 600,
                            '&:hover': {
                                textDecoration: 'underline',
                                color: theme('colors.blog.contrast.300'),
                            },
                        },
                        'a code': {
                            color: 'inherit',
                        },
                        thead: {
                            color: 'inherit',
                        },
                        tr: {
                            borderColor: theme('colors.gray.400')
                        },
                        'ol > li::before': {
                            color: theme('colors.blog.contrast.600'),
                        },
                        'ul > li::before': {
                            backgroundColor: theme('colors.blog.constrast.600'),
                        },
                    },
                },
            }),
        },
    },
    variants: {
        typography: ['dark'],
        extend: {},
    },
    plugins: [require('@tailwindcss/typography')],
}
