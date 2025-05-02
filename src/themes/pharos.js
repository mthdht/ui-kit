import { colors } from './colors.js'

export const pharos = {
    colors: colors,
    radius: {
        normal: 'rounded',
        none: 'rounded-none',
        large: 'rounded-lg',
        full: 'rounded-full'
    },
    shadow: 'shadow',
    sizes: {
        button: {
            base: 'px-3 py-2',
            small: 'px-2 py-1',
            large: 'px-5 py-3 text-xl'
        },
        button: {
            base: 'px-2 py-1 font-medium',
            small: 'px-2 py-1 text-sm',
            large: 'px-3 py-2 text-lg font-semibold'
        }
    },
    padding: 'p-4'
}