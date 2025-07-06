<template lang="">
    <div>
        <!-- find our location -->
        <div class="find-location blue-bg">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 text-center">
                        <p> <i class="fas fa-map-marker-alt"></i> Find Our Location</p>
                    </div>
                </div>
            </div>
        </div>
        <!-- end find our location -->

        <!-- google map section -->
        <div class="embed-responsive embed-responsive-21by9">
            <iframe :src="src" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" class="embed-responsive-item"></iframe>
        </div>
        <!-- end google map section -->
    </div>
</template>
<script>
export default {
    name: 'ContactLocation',
    data(){
        return {
            src: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d523.5704044494286!2d104.92889923425017!3d11.545034648118957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTHCsDMyJzQzLjIiTiAxMDTCsDU1JzQ0LjIiRQ!5e1!3m2!1sen!2skh!4v1751781838878!5m2!1sen!2skh"
        }
    }
}
</script>
<style lang="">

</style>