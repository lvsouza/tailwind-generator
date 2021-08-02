export const extractClassNames = (css: string) => {
    const allClassNames = css.match(/\.-?[_a-zA-Z]+[_a-zA-Z0-9-\\:\.]*\s*\{/g);
    const allUniqueRawClassNames: string[] = [];

    allClassNames?.forEach(className => {
        if (allUniqueRawClassNames.includes(className)) return;
        if (!className.includes('.')) return;
        if (!className.includes('{')) return;

        allUniqueRawClassNames.push(className);
    });

    const allCleanClassNames: string[] = [];
    allUniqueRawClassNames.forEach(className => {
        if (!className) return;
        const [cleanClassName] = className.match(/-?[_a-zA-Z]+[_a-zA-Z0-9-\\:\.]*/g) as (string | null)[]
        if (!cleanClassName) return;

        const classNameWithoutSlash = cleanClassName.replace(/\\/g, '');

        const parts = classNameWithoutSlash.split(':')
        if (parts.length > 1) {
            const isSelector = (value: string) => {
                const selectors = ['', 'hover', 'focus', 'active', 'focus-within', 'focus-visible', 'first', 'disabled', 'visited', 'checked', 'default', 'placeholder', '-moz-placeholder', '-ms-input-placeholder'];
                return selectors.some(selector => selector === value);
            }

            while (isSelector(parts[parts.length - 1])) {
                parts.pop();
            }
        }

        if (!allCleanClassNames.includes(parts.join(':'))) {
            allCleanClassNames.push(parts.join(':'));
        }
    });

    return allCleanClassNames;
};
