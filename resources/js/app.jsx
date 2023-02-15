import './bootstrap';
import '../sass/admin/dashlite.scss';
// import '../css/app.css';

import { createRoot } from 'react-dom/client';
import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';

const appName = window.document.getElementsByTagName('title')[0]?.innerText || 'Laravel';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    // resolve: (name) => resolvePageComponent(`./Pages/${name}.jsx`, import.meta.glob('./Pages/**/*.jsx')),
    resolve: (name) => {
        let [module,reactComponent] = name.split('::');
        if(module != undefined && reactComponent != undefined){
            let module_path = `../../modules/${module}/Resources/assets/js/${reactComponent}`;
            return resolvePageComponent(
                `${module_path}.jsx`,
                import.meta.glob(`../../modules/**/Resources/assets/js/**/*.jsx`, { eager: true })
            );
        }
        return resolvePageComponent(
            `./pages/${name}.jsx`,
            import.meta.glob("./pages/**/*.jsx", { eager: true })
        );
    },
    setup({ el, App, props }) {
        const root = createRoot(el);

        root.render(<App {...props} />);
    },
    // progress: {
    //     color: '#4B5563',
    // },
});
