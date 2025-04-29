import * as components from '@/components';
import { useTheme } from './composables/useTheme';

const uikit = {
    install(app, options = {}) {
      // components
      for (const componentName in components) {
        const component = components[componentName];
        app.component(component.name, component);
      }

      app.provide('theme', useTheme(options.theme))
    }
};

export { uikit };