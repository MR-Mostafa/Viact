import { defineConfig, toEscapedSelector as e } from 'unocss';

import acss from './acss';

const setProperty = (property: string = ''): string => {
	const removeEndDash = property.replace(/\-$/, '');

	return acss[removeEndDash] || removeEndDash;
};

const setUnits = (cssProperty: string, unit: string): string => {
	if (!cssProperty || !unit) return '';

	/**
	 * @description
	 * 	Some of CSS properties are just numbers, and there is no unit requirement (like rem,px,...)
	 * 	like opacity, font-weight, etc.
	 */
	if (['opacity', 'font-weight', 'line-height'].includes(cssProperty)) return unit;

	/**
	 * @description
	 * 	When other CSS properties are just numbers (float or integer), the default units are rem.
	 */
	if (/^[0-9\.\-]+$/.test(unit)) {
		return `${unit}rem`;
	}

	/**
	 * @description
	 * 	The CSS content value must be a string, and it must be converted to a string with quotation marks
	 */
	if (cssProperty === 'cnt' || cssProperty === 'content') {
		return `"${unit}"`;
	}

	return unit;
};

const cssPseudoClassesList = [
	'active:',
	'hover:',
	'focus:',
	'visited:',
	'focus-within:',
	'focus-visible:',
	'target:',
	'link:',
	'first:',
	'first-child:',
	'checked:',
	'disabled:',
	'empty:',
	'enabled:',
	'first-of-type:',
	'in-range:',
	'invalid:',
	'last:',
	'last-child:',
	'last-of-type:',
	'optional:',
	'out-of-range:',
	'read-only:',
	'read-write:',
	'required:',
	'valid:',
	'odd:',
	'even:',
];

const cssPseudoElementsList = ['before:', 'after:', 'first-letter:', 'first-line:', 'placeholder:'];

export default defineConfig({
	shortcuts: [],
	variants: [
		/**
		 * @description
		 *  	1) In classNames, spaces cannot be used (because a new class has already been defined).
		 * 	Therefore, the underscore(_) sign should be used instead of a space.
		 * 	We will now replace the underscore(_) sign with a space.
		 * 	2) Add body wrapping to classNames (for CSS Specification)
		 * 		{@link https://www.w3schools.com/css/css_specificity.asp}
		 */
		(matcher) => {
			return {
				matcher: matcher.replace(/_/g, ' '),
				selector: (s) => {
					return `body ${s}`;
				},
			};
		},

		/**
		 * @description Group Selectors
		 * @rule
		 * 	- Group Selectors must start with @
		 * 	- All selectors must end with dollar sign ($)
		 * 	- The classname can only contain one dollar sign ($)
		 *
		 * @example
		 * 	      space between
		 * 	 			  👆
		 * 	1)	@.wrapper_p$fs[16px] => .wrapper p{font-size: 16px;}
		 * 	   👇         👇
		 * 		👇      end group selectors
		 *   		👇
		 * 	start group selectors
		 *
		 *
		 * 	2) @#wrapper_button$hover:bg[green] => .wrapper button:hover{background: green;}
		 *
		 * 	3) @form_input$bd[1px_solid_red] => form input{border: 1px solid red;}
		 */
		(matcher) => {
			if (!/^@[\w\s\[\]\-:.#$]+$/gi.test(matcher)) return matcher;
			if (!matcher.includes('$')) return matcher;

			const selectors = matcher.split('$');

			if (!selectors || selectors.length !== 2) return matcher;

			return {
				/**
				 * Slice `selectors` and passed to the next variants and rules
				 *
				 * @example
				 * 	@#wrapper_button$hover:bg[green] => hover:bg[green]
				 * 	@form_input$bd[1px_solid_red] => bd[1px_solid_red]
				 */
				matcher: selectors[1],
				layer: 'Group Selectors',
				selector: () => {
					/**
					 * Remove first @ for the selector
					 */
					return selectors[0].slice(1);
				},
			};
		},

		/**
		 * @description Pseudo classes/elements Selectors
		 * @example
		 * 	1)	hover:bg[red] => .hover\:bg\[red\]:hover{background: red;}
		 * 	2) after:hover:c[red] => .after\:hover\:c\[red\]:hover::after{color: red;}
		 * 	3) hover:after:c[red] => .after\:hover\:c\[red\]:hover::after{color: red;}
		 */
		(matcher, { rawSelector }) => {
			const getCssPseudoClasses = cssPseudoClassesList.find((pseudoClass) => {
				return matcher.includes(pseudoClass);
			});

			const getCssPseudoElements = cssPseudoElementsList.find((pseudoElements) => {
				return matcher.includes(pseudoElements);
			});

			const layer = 'Pseudo classes/elements Selectors';

			// For Both pseudo classes and pseudo elements
			if (getCssPseudoClasses && getCssPseudoElements) {
				return {
					matcher: matcher.slice(getCssPseudoClasses.length + getCssPseudoElements.length),
					layer,
					selector: (s) => {
						return `${s}:${getCssPseudoClasses.slice(0, -1)}::${getCssPseudoElements.slice(0, -1)}`;
					},
				};
			}

			// For pseudo classes
			if (getCssPseudoClasses) {
				if (getCssPseudoClasses === 'odd:') {
					return {
						matcher: matcher.slice(getCssPseudoClasses.length),
						layer,
						selector: (s) => `${s}:nth-child(odd)`,
					};
				}

				if (getCssPseudoClasses === 'even:') {
					return {
						matcher: matcher.slice(getCssPseudoClasses.length),
						layer,
						selector: (s) => `${s}:nth-child(even)`,
					};
				}

				return {
					matcher: matcher.slice(getCssPseudoClasses.length),
					layer,
					selector: (s) => `${s}:${getCssPseudoClasses.slice(0, -1)}`,
				};
			}

			// For pseudo elements
			if (getCssPseudoElements) {
				return {
					matcher: matcher.slice(getCssPseudoElements.length),
					layer,
					selector: (s) => `${s}::${getCssPseudoElements.slice(0, -1)}`,
				};
			}

			// default
			return matcher;
		},
	],
	rules: [
		/**
		 * @description Defining CSS variables
		 * @example
		 * 	1)	root:[--primary:#0d6efd] => root:{--primary:#0d6efd}
		 * 	2)	root:[--font-size:16px] => root:{--font-size:16px}
		 * 	3)	local-var[--green:#198754] => local-var{--green:#198754}
		 */
		[
			/^([a-zA-Z\-\:]+)\[(\-\-.+):(.+)\]$/,
			([all, selector, varName, varValue], { rawSelector }) => {
				const cssSelector = selector === 'root:' ? ':root' : e(rawSelector);

				return `
					${cssSelector} {
						${varName}: ${varValue};
					}
				`.replace(/[\s]+/gi, '');
			},
			{ layer: 'CSS Variables' },
		],

		/**
		 * @description For all css properties
		 * 	property: @see getProperty() function
		 * 	units: 10px, 10rem, 10%, 10vh, auto & etc.
		 * @example
		 *  	m-[1rem_auto]  ==> margin: 10px auto;
		 * 	mr-[10px]      ==> margin-right: 10px
		 * 	pl-[auto]      ==> margin-left: auto
		 */
		[
			/^([a-zA-Z\-]+)\[(.+)\]$/,
			([all, property, units], { rawSelector }) => {
				// escape the css variable
				if (units.startsWith('--')) return {};

				const cssProperty = setProperty(property);
				const cssUnit = setUnits(cssProperty, units);

				if (!cssProperty || !cssUnit) return {};

				// console.log({ cssProperty, cssUnit });

				/**
				 * For margin-x & margin-y & padding-x & padding-y
				 */
				if (/^(padding|margin)-(x|y)$/gi.test(cssProperty)) {
					const [type, dir] = cssProperty.split('-');

					const direction = {
						x: ['left', 'right'],
						y: ['top', 'bottom'],
					};

					return {
						[`${type}-${direction[dir][0]}`]: cssUnit,
						[`${type}-${direction[dir][1]}`]: cssUnit,
					};
				}

				return {
					[cssProperty]: `${cssUnit} !important;`,
				};
			},
		],
	],
	presets: [],
});
