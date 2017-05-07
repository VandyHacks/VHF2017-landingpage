<template>
    <div class="email-container">
        <div class="input-wrapper">
            <input ref="emailInput" type="email" placeholder="Email Address" v-model="email">
            <span class="fa" :class="emailIndicatorClass"></span>
        </div>
    </div>
</template>

<script>
import * as EmailValidator from 'email-validator'

export default {
    data() {
        return {
            email: ''
        }
    },
    props: ['valid-email'],
    computed: {
        emailIndicatorClass() {
            if (this.email.trim() == '') {
                return 'icon-mail-alt';
            } else if (!EmailValidator.validate(this.email)) {
                return 'icon-attention-circled';
            } else {
                return 'icon-ok-circled';
            }
        },
        isEmailInputValid() {
            return this.email.trim() != '' && EmailValidator.validate(this.email);
        }
    },
    watch: {
        email(val) {
            this.$emit('update:valid-email', this.isEmailInputValid);
        }
    },
    mounted() {
        this.$refs.emailInput.focus();
    }
}
</script>