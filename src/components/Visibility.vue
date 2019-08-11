<template>
    <div class="visibility">

        
    </div>
</template>



<script>
export default {
    props:['highlights'],
    data(){
        return {
            visibility: this.highlights.visibility.toString()
        }
    }
}
</script>
