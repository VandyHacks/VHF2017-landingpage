import Vue from 'vue'
import Typeahead from './Typeahead.vue'
import VueResource from 'vue-resource'
import * as EmailValidator from 'email-validator'

Vue.use(VueResource);
var app = new Vue({
    el: "#app",
    components: { 'typeahead': Typeahead },
    data: {
        email: '',
    },
    computed: {
        emailHint: function () {
            if (this.email.trim() == '') {
                return 'Enter your email address';
            } else if (!EmailValidator.validate(this.email)) {
                return 'Invalid email address';
            } else {
                return '';
            }
        }
    }
});