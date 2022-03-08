<template>
    <div class="main-wrapper">
        <layout-header></layout-header>
        <slider></slider>
        <home-banner></home-banner>
        <looking></looking>
        <specialities :specialities="specialities"></specialities>
        <book-doctor :doctors="doctors"></book-doctor>
        <features></features>
        <layout-footer></layout-footer>
    </div>
</template>

<script>
import doctors from  "../../assets/json/doctors.json";
import specialities from  "../../assets/json/specialities.json";
export default {
    data() {
        return {
            doctors: doctors,
            specialities: specialities
        }
    }
}
</script>