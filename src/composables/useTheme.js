export function useTheme(theme) {
    function getThemeClasses(props) {
        if (props.unstyle) {
            return 
        }
        
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

        if (props.rounded) {
            classes.push(theme.radius[props.rounded])
        }

        if (props.shadow) {
            classes.push(theme.shadow)
        }

        return classes
    }


    return { getThemeClasses }
}