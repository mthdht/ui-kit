import { theme } from "../themes/pharos";

export function useTheme() {

    function getThemeClasses() {
        return theme.colors.primary
    }


    return { getThemeClasses }
}