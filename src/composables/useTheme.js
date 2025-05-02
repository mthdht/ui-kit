export function useTheme(theme) {
    function getThemeClasses(props, component) {
        const classes = []

        if (props.unstyle) {
            return 
        }

        if (props.color) {
            classes.push(theme.colors[props.color]?.[props.variant])
        }

        if (props.hover) {
            props.variant == 'outline' 
                ? classes.push(theme.colors[props.color]?.outlineHover) 
                : classes.push(theme.colors[props.color]?.hover)
        }

        if (props.rounded) {
            classes.push(theme.radius[props.rounded])
        }

        if (props.shadow) {
            classes.push(theme.shadow)
        }

        if (props.disabled) {
            classes.push("disabled:bg-slate-200 disabled:text-slate-500 disabled:cursor-not-allowed")
        }

        if (props.size) {
            classes.push(theme.sizes[component][props.size])
        }

        return classes
    }


    return { theme, getThemeClasses }
}