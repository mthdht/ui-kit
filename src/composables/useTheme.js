import { theme } from "../themes/pharos";

export function useTheme() {

    function getThemeClasses(props) {
        console.log(props);
        const classes = []
        if (props.color && !props.outline) {
            classes.push(theme.colors[props.color].base)
        }

        if (props.hover) {
            props.outline 
                ? classes.push(theme.colors[props.color].outlineHover) 
                : classes.push(theme.colors[props.color].hover)
        }

        if (props.outline) {
            classes.push(theme.colors[props.color].outline)
        }

        return classes
    }


    return { getThemeClasses }
}