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

    plugins: [
        require('@tailwindcss/typography'),
    ],
};
