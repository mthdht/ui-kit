import { theme } from "../themes/pharos";

export function useTheme() {

    function getThemeClasses(props) {
        const classes = []
        if (props.color) {
            classes.push(theme.colors[props.color].base)
        }

        if (props.hover) {
            classes.push(theme.colors[props.color].hover)
        }

        return classes
    }


    return { getThemeClasses }
}