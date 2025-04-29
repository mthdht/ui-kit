import * as components from '@/components';

const uikit = {
    install(app, options = {}) {
      // components
      for (const componentName in components) {
        const component = components[componentName];
        app.component(component.name, component);
      }
    },
};

export { uikit };