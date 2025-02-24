/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './resources/**/*.antlers.html',
        './resources/**/*.antlers.php',
        './resources/**/*.blade.php',
        './resources/**/*.vue',
        './content/**/*.md',
    ],

    theme: {
        extend: {
            fontFamily: {
                avenir: ['Avenir', 'sans-serif'],
                avenirmed: ['AvenirMedium', 'sans-serif'],
                avenirbold: ['AvenirBold', 'sans-serif'],
              },
            colors: {
                'primary': '#FFE9EB',
                'secondary': '#FBDFE2',
                'warmred': '#DE4353',
                'warmblack': '#181B18',
                'warmgray': '#2F302F',
                'brown': '#4D4243',
            },
        },
    },
    // daisyUI config (optional - here are the default values)
    daisyui: {
        themes: false, // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
        darkTheme: "dark", // name of one of the included themes for dark mode
        base: false, // applies background color and foreground color for root element by default
        styled: true, // include daisyUI colors and design decisions for all components
        utils: true, // adds responsive and modifier utility classes
        prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
        logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
        themeRoot: ":root", // The element that receives theme color CSS variables
    },
    plugins: [
        require('@tailwindcss/typography'),
        require('daisyui')
    ],
};
