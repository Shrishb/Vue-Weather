<template>

<div style="position:relative;">
    <temp-var-chart :tempVar="tempVar"> </temp-var-chart>
    <today-highlights :highlights="highlights"> </today-highlights>
</div>
</template>

<script>
import TempVarChart from './TempVarChart.vue';
import TodayHighlights from './Highlights.vue';

export default {
    
    props:['highlights','tempVar'],
    methods(){

    },
    computed(){

    },
    components:{
        'temp-var-chart': TempVarChart,
        'today-highlights': TodayHighlights
    }
}
</script>


<style>

</style>
