import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import autoprefixer from 'autoprefixer'
import postcssFlexbugsFixes from 'postcss-flexbugs-fixes'


export default defineConfig({
    server: {
        host: '0.0.0.0'
    },
    plugins: [
        vue(),
        // element plus
        AutoImport({
            resolvers: [ElementPlusResolver()],
        }),
        Components({
            resolvers: [ElementPlusResolver()],
        })
    ],
    css: {
        preprocessorOptions: {
            less: {
                javascriptEnabled: true,
                additionalData: `@import "${path.resolve(__dirname, 'src/assets/css/global.less')}";`
            }
        },
        postcss: {
            plugins: [
                autoprefixer({
                    overrideBrowserslist: [
                        'Android 4.1',
                        'iOS 12',
                        'Chrome > 31',
                        'ff > 31',
                        'ie >= 10',
                        '> 1%',
                    ],
                    grid: true,
                }),
                postcssFlexbugsFixes()
            ],
        }
    }
})
