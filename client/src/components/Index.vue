<template>
    <div class="main-wrapper">
        <top-header></top-header>
        <layout-header></layout-header>
        <home-banner></home-banner>
        <specialities :specialities="specialities"></specialities>
        <browse-specialities></browse-specialities>
        <best-doctor :doctors="doctors"></best-doctor>
        <features></features>
        <blogs :blogs="blogs"></blogs>
        <layout-footer></layout-footer>
    </div>
</template>

<script>
import doctors from  "../assets/json/doctors.json";
import blogs from  "../assets/json/blogs.json";
import specialities from  "../assets/json/specialities.json";
export default {
    data() {
        return {
            doctors: doctors,
            blogs: blogs,
            specialities: specialities
        }
    },

}
</script>