<template>
    <!--Section: Jumbotron-->
    <section class="card blue-gradient wow fadeIn" id="intro">

        <!-- Content -->
        <div class="card-body text-white text-center py-5 px-5 my-5">

            <h1 class="mb-4">
                <strong>Survey System</strong>
            </h1>
            <p>
                <strong>Best & free guide of responsive web design</strong>
            </p>
            <p class="mb-4">
                <strong>설문에 참여해주셔서 감사드립니다. 여러분의 의견을 수렴하여 양질의 서비스를 제공하도록 최선을 다하겠습니다.</strong>
            </p>

            <div v-if="surveys.length">
                <div v-for="survey in surveys" v-bind:key="survey.id" >
                    <router-link :to="'/survey/' + survey.id" href="#" class="btn btn-outline-white btn-lg">
                        {{survey.title}}
                        <i class="fas fa-send ml-2"></i>
                    </router-link>
                </div>
            </div>
            <div v-else class="text-warning">오픈 된 설문이 없습니다.</div>

        </div>
        <!-- Content -->
    </section>
    <!--Section: Jumbotron-->
</template>

<script>

export default {
  name: 'Home',
    created() {
        let url = this.ApiURL + "surveys";
        console.log("url>>>>>>>>>," + url)
        this.$http.get(url).then(ret => {
            if (ret.status !== 200) {
                alert("Error on get surveys!!")
                return 0
            }
        });
    },
    data() {
      return {
        surveys: [{id:1, title: 'ttt'}, {id:2, title: 'AAA'}]
      }
    }
/*    components: {
    }*/
}
</script>
