<template>
	<div class="accountMonth">
		<account-budget></account-budget>
		<account-day-record></account-day-record>		
	</div>
</template>


<script>
	import accountBudget from './AccountBudget'
	import accountDayRecord from './AccountDayRecord'
	export default {
		components:{ accountBudget , accountDayRecord}
	}
</script>


<style scoped>
	.accountMonth {
		background-color: #F8F8F8;
		height: 100%;
	}
</style>