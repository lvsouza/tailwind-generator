import { TailwindConfig } from 'tailwindcss/tailwind-config';
import autoprefixer from 'autoprefixer'
import tailwindcss from 'tailwindcss'
import postcss from 'postcss'


export const generateCss = async (config: TailwindConfig) => {
    const processor = postcss([
        tailwindcss(config),
        autoprefixer(),
    ] as any);

    const { css } = await processor.process(`
        @tailwind base;
        @tailwind components;
        @tailwind utilities;
    `, { from: undefined, })

    return css;
};
