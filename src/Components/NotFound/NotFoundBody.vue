<template lang="">
    <div class="full-height-section error-section">
        <div class="full-height-tablecell">
            <div class="container">
                <div class="row">
                    <div class="col-lg-8 offset-lg-2 text-center">
                        <div class="error-text">
                            <i class="far fa-sad-cry"></i>
                            <h1>Oops! Not Found.</h1>
                            <p>The page you requested for is not found.</p>
                            <router-link to="/" class="boxed-btn">Back to Home</router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'NotFoundBody'
}
</script>
<style lang="">

</style>