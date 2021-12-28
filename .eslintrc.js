module.exports = {
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
    //disable vue/multi-word-component-names
}