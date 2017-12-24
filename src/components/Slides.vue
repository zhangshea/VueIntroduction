<template>
  <div v-bind:is="currentPage"></div>

</template>

<script>
  import Title from "@/components/Pages/Title"

  import IntroVue from "@/components/Pages/Chapter-IntroVue/IntroVue"
  import WebFrontEnd from "@/components/Pages/Chapter-IntroVue/WebFrontEnd"
  import WebFrontEndFramework from "@/components/Pages/Chapter-IntroVue/WebFrontEndFramework"
  import EventsBased from "@/components/Pages/Chapter-IntroVue/EventsBased"

  import VueAndAngular from "@/components/Pages/Chapter-Vue1/VueAndAngular"
  import DataBind from "@/components/Pages/Chapter-Vue1/DataBind"
  import DataBindImplement from "@/components/Pages/Chapter-Vue1/DataBindImplement"
  import DataBindProblem from "@/components/Pages/Chapter-Vue1/DataBindProblem"

  import IntroVue2 from "@/components/Pages/Chapter-Vue2/IntroVue2"
  import ProgressiveLevel from "@/components/Pages/Chapter-Vue2/ProgressiveLevel"
  import StateView from "@/components/Pages/Chapter-Vue2/StateView"
  import Virtual from "@/components/Pages/Chapter-Vue2/Virtual"
  import Components from "@/components/Pages/Chapter-Vue2/Components"
  import Vuex from "@/components/Pages/Chapter-Vue2/Vuex"
  import Others from "@/components/Pages/Chapter-Vue2/Others"

  import Survey from "@/components/Pages/Chapter-Conclusion/Survey"
  import Conclusion from "@/components/Pages/Chapter-Conclusion/Conclusion"
  import Thanks from "@/components/Pages/Chapter-Conclusion/Thanks"

  export default {
    props: ['id'],
    data: function () {
      return {
        cid: 0,
        pages: [
          {cpt: Title, content: "Title"},
          {cpt: IntroVue, content: "IntroVue"},
          {cpt: WebFrontEnd, content: "WebFrontEnd"},
          {cpt: WebFrontEndFramework, content: "WebFrontEndFramework"},
          {cpt: EventsBased, content: "EventsBased"},
          {cpt: VueAndAngular, content: "VueAndAngular"},
          {cpt: DataBind, content: "DataBind"},
          {cpt: DataBindImplement, content: "DataBindImplement"},
          {cpt: DataBindProblem, content: "DataBindProblem"},
          {cpt: IntroVue2, content: "IntroVue2"},
          {cpt: ProgressiveLevel, content: "ProgressiveLevel"},
          {cpt: StateView, content: "StateView"},
          {cpt: Virtual, content: "Virtual"},
          {cpt: Components, content: "Components"},
          {cpt: Vuex, content: "Vuex"},
          {cpt: Others, content: "Others"},
          {cpt: Survey, content: "Survey"},
          {cpt: Conclusion, content: "Conclusion"},
          {cpt: Thanks, content: "Thanks"},
        ],
        currentPage: Title
      }
    },
    components: {
      Title,
      IntroVue,
      WebFrontEnd,
      WebFrontEndFramework,
      EventsBased,
      VueAndAngular,
      DataBind,
      DataBindImplement,
      DataBindProblem,
      IntroVue2,
      ProgressiveLevel,
      StateView,
      Virtual,
      Components,
      Vuex,
      Others,
      Survey,
      Conclusion,
      Thanks,
    },
    methods: {
      keyUp: function(event) {
        console.log('key pressed: ' + event.which);
        if (event.which === 37) {
          this.goPre();
        }
        if (event.which === 39) {
          this.goNext();
        }
      },
      goNext: function () {
        if (this.cid < this.pages.length - 1) {
          this.cid = (+this.cid) + 1;
        }
      },
      goPre: function () {
        if (this.cid > 0) {
          this.cid = (+this.cid) - 1;
        }
      }
    },
    watch: {
      cid: function() {
        this.currentPage = this.pages[this.cid].cpt;
      }
    },
    created: function () {
      this.cid = this.id;
      window.addEventListener('keyup', this.keyUp);
    }
  }
</script>
