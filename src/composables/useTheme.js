import { theme } from "../themes/pharos";

export function useTheme() {

    function getThemeClasses(props) {
        const classes = []
        if (props.color) {
            classes.push(theme.colors[props.color])
        }

        return classes
    }


    return { getThemeClasses }
}