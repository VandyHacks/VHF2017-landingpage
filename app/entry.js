import Vue from 'vue'
import EmailField from './EmailField.vue'
import Typeahead from './Typeahead.vue'
// import VueResource from 'vue-resource'
// Vue.use(VueResource);

setTimeout(() => {
    // Workaround Chrome animated GIF bug
    var logoEl = document.getElementById('logo');
    var imageUrl = logoEl.src;
    logoEl.src = '#';
    logoEl.src = imageUrl;
    // Opacity and scale
    var appEl = document.getElementById('app');
    appEl.style.opacity = '1';
    appEl.style.transform = 'scale(1)';
    document.getElementById("date").className += " lines";
}, 5);

var app = new Vue({
    el: "#app",
    components: { 'typeahead': Typeahead, 'email': EmailField },
    data: {
        isEmailInputValid: false,
        isUniversityInputValid: false
    },
    computed: {
        areInputsValid() {
            return this.isEmailInputValid && this.isUniversityInputValid;
        }
    },
    methods: {
        registerEmail() {
            console.log('registerEmail called...');
        }
    }
});
