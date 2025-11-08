/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './resources/**/*.antlers.html',
        './resources/**/*.antlers.php',
        './resources/**/*.blade.php',
        './resources/**/*.vue',
        './content/**/*.md',
        'node_modules/preline/dist/*.js',
    ],

    theme: {
        extend: {
        fontFamily: {
            'sans': ['Neue Haas Grotesk Text', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
            'display': ['Neue Haas Grotesk Display', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        },
            fontSize: {
                'xs': ['0.75rem', { lineHeight: '1rem' }],
                'sm': ['0.875rem', { lineHeight: '1.25rem' }],
                'base': ['1rem', { lineHeight: '1.5rem' }],
                'lg': ['1.125rem', { lineHeight: '1.75rem' }],
                'xl': ['1.25rem', { lineHeight: '1.75rem' }],
                '2xl': ['1.5rem', { lineHeight: '2rem' }],
                '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
                '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
                '5xl': ['3rem', { lineHeight: '1' }],
                '6xl': ['3.75rem', { lineHeight: '1' }],
            },
            letterSpacing: {
                'tighter': '-0.05em',
                'tight': '-0.025em',
                'normal': '0',
                'wide': '0.025em',
                'wider': '0.05em',
                'widest': '0.1em',
            },
            lineHeight: {
                'none': '1',
                'tight': '1.25',
                'snug': '1.375',
                'normal': '1.5',
                'relaxed': '1.625',
                'loose': '2',
            },
            colors: {
                // Retro-modern palette inspired by 1980s Macintosh
                'primary': '#FFFFFF',
                'accent': '#1a1a1a', // Near-black for key accents
                'dark': '#1a1a1a', // Rich near-black for text
                'dark-light': '#2d2d2d',
                'gray': '#5a5a5a', // Warm mid-gray
                'gray-light': '#8a8a8a',
                'gray-dark': '#3a3a3a',
                'border': '#b8b0ad', // Slightly darker than background
                'background': '#fbf7ef', // Warm off-white background
                'surface': '#e8e3e0', // Lighter variant for cards/sections
                'surface-dark': '#c4bdb9', // Darker variant for hero
                'norwegian-fjord': '#e3edf4',
                'norwegian-dusk': '#ede8f5',
                'norwegian-moss': '#e7f1ea',
                'norwegian-rose': '#f4e8ea',
                'norwegian-amber': '#f3efe5',
                'norwegian-sky': '#e8f2f8',
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
                'gradient-warm': 'linear-gradient(135deg, #FFE9EB 0%, #FBDFE2 100%)',
                'gradient-dark': 'linear-gradient(135deg, #181B18 0%, #2F302F 100%)',
                'gradient-red': 'linear-gradient(135deg, #DE4353 0%, #F56573 100%)',
                'gradient-subtle': 'linear-gradient(160deg, #ccc5c2 0%, #e0d9d6 50%, #ccc5c2 100%)',
                'gradient-fjord': 'linear-gradient(135deg, #e8f1f7 0%, #dfe9f1 100%)',
                'gradient-dusk': 'linear-gradient(135deg, #f1ecf8 0%, #e9e4f2 100%)',
                'gradient-moss': 'linear-gradient(135deg, #ecf4ee 0%, #e3ede6 100%)',
                'gradient-rose': 'linear-gradient(135deg, #f7ecee 0%, #f0e4e6 100%)',
                'gradient-amber': 'linear-gradient(135deg, #f7f2e9 0%, #f0ebe1 100%)',
                'gradient-sky': 'linear-gradient(135deg, #ecf5fa 0%, #e4eef4 100%)',
            },
            boxShadow: {
                'warm': '0 10px 25px -5px rgba(222, 67, 83, 0.1), 0 10px 10px -5px rgba(222, 67, 83, 0.04)',
                'warm-lg': '0 20px 25px -5px rgba(222, 67, 83, 0.1), 0 10px 10px -5px rgba(222, 67, 83, 0.04)',
                'glow': '0 0 20px rgba(222, 67, 83, 0.3)',
                'glow-lg': '0 0 40px rgba(222, 67, 83, 0.4)',
            },
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
        require('preline/plugin'),
    ],
};
