<template>
    <input type="number" ref="input" @input="updateValue($event.target.value)" :value="value" @blur="formatValue" class="moneyRecord" />
</template>

<script>
export default {
    props: {
        value: {
            type: Number,
            default: 0
        }
    },
    methods: {
        updateValue(value) {
            var result = currencyValidator.parse(value, this.value);
            if (result.warning) {
                this.$refs.input.value = result.value;
            }
            this.$emit('input', result.value);
        },
        formatValue() {
            this.$refs.input.value = currencyValidator.format(this.value);
        },
        selectAll() {
            setTimeout(() => {
                event.target.select();
            }, 0);
        }
    }
}
</script>

<style>
.moneyRecord {
    background-color: transparent;
    line-height: 1.5rem;
    font-size: 0.6rem;
    width: 50%;
    border: none;
    padding-left: 0.1rem;
    border-left: 1px solid #999;
    border-radius: 0px;
    color: red;
}

input:foucs {
    border: none;
    outline: none;
    border-left: 1px solid #999;
}
</style>
