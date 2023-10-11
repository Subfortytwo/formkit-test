// // formkit.config.js
import { generateClasses } from '@formkit/themes'
// import { genesisIcons } from '@formkit/icons'
import myWindicssTheme from './windicss-theme' // change to your theme's path
import { applicationIcons, inputIcons, directionalIcons } from '@formkit/icons'


// const config = defaultConfig({
//     // plugins: [proPlugin],
//     icons: {
//       ...genesisIcons
//     }
//   })

export default {
    icons: {
        ...applicationIcons, 
        ...inputIcons,
        ...directionalIcons, // spread an entire group of icons
        
        
    },
    config: {
        classes: generateClasses(myWindicssTheme),
    },
}



// import { DefaultConfigOptions } from '@formkit/vue';

// const config: DefaultConfigOptions = {
//   theme: 'genesis',
// };

// export default config;