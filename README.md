# VueJS - Starter Stack

A repository to start VueJS frontend project with this tecnologies below

![Stack](https://i.imgur.com/VYRUuwx.png)

## Usage
Download repo and start building something awesome!

## Tutorial
Only if you want to configure or make a fresh install

**Create Vite App**

    npm init @vitejs/app project-name

**Install Tailwind + Dependencies**

     npm install -D tailwindcss@latest postcss@latest autoprefixer@latest

**Install ESLint + Prettier**

    npm install --save-dev eslint prettier eslint-plugin-vue eslint-config-prettier

**Install Vue Router**

    npm install vue-router@4

**Install Vuex**

    npm install vuex@next --save

**.eslintrc.js:**

    module.exports  = {
	    extends: [
		    'plugin:vue/vue3-essential',
		    'prettier',
	    ],
	    rules: {
		    // override/add rules settings here, such as:
		    'vue/no-unused-vars': 'error',
		    //disable multi-word
		    'vue/no-multi-spaces': 'off',
	    },
    }

**.prettierrc.js:**

    module.exports = {
	    semi: false,
	    tabWidth: 4,
	    useTabs: false,
	    printWidth: 80,
	    endOfLine: 'auto',
	    singleQuote: true,
	    trailingComma: 'es5',
	    bracketSpacing: true,
	    arrowParens: 'always',
    }

  
  ### Articles i read to build this project
 - [Getting started with Vue 3 + Vite in 2021](https://youtu.be/O8epzPrsADI)
