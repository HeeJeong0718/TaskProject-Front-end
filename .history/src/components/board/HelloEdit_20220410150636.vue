<template>
    <div style ="margin:30px">
        <div align="right">
            <button type="button" class="btn btn-outline-info btn-sm" @click='modifyContent()'>Modify</button>&nbsp;
            <button type="button" class="btn btn-outline-danger btn-sm" @click='deleteContent()'>Delete</button>&nbsp;
            <button type="button" class="btn btn-outline-secondary btn-sm" @click='toBack()' >Back</button> 
        </div>
        <div class="mb-3 row" align="left">
            <label for="staticEmail" class="col-sm-2 col-form-label">Name</label>
            <div class="col-sm-10">
       
            </div>
        </div>
        <div class="mb-3 row" align="left">
            <label for="staticEmail" class="col-sm-2 col-form-label">Title</label>
            <div class="col-sm-10">
       
            </div>
        </div>
        <div class="mb-3 row" align="left">
            <label for="staticEmail" class="col-sm-2 col-form-label">Content</label>
            <div class="col-sm-10">
       
            </div>
        </div>
        <div class="mb-3 row" align="left">
            <label for="staticEmail" class="col-sm-2 col-form-label">Last Modified</label>
            <div class="col-sm-10">
       
            </div>
        </div>
    </div>  
</template>

<script>
export default {

}
</script>

<style>

</style>