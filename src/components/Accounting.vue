<template>
	<div class="accounting">
		<account-type> </account-type>
		<account-record></account-record>
	</div>
</template>

<script>
	import accountType from './AccountType'
	import accountRecord from './AccountRecord'
	export default {
		components:{ accountType,accountRecord}
}
</script>

<style>
	.accounting {
		background-color: #fff;
	}
</style>
