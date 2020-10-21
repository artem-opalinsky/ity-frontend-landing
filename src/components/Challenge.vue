<template>
  <b-container>
    <b-card class="challenge-wrapper mx-auto">
      <b-row class="first-row">
        <b-col cols="3">
          <b-img v-bind="mainProps" rounded="circle" alt="Circle image"></b-img>
          <div class="author">@author</div>
        </b-col>
        <b-col class="center"><div class="timer">Timer</div></b-col>
        <b-col cols="3">
          <b-img v-bind="mainProps" rounded="circle" alt="Circle image"></b-img>
          <div class="author">@author</div>
        </b-col>
      </b-row>
      <b-row>
        <b-col class="video-card">
          <div class="challenger-video"></div>
          <div class="challengee-video"></div>
        </b-col>
      </b-row>
      <b-row class="center mt-1">
        <b-card class="statement">
          <span>Statement eqwfeqfewqef qe q we fewqf e ew fq wefq ew qfe wf qwf qew</span>
        </b-card>
      </b-row>
    </b-card>
  </b-container>
</template>

<script>
export default {
  name: 'Challenge',
  data () {
    return {
      mainProps: { blank: true, blankColor: '#777', width: '75 auto', height: '75 auto', class: 'm1', center: true }
    }
  }
}
</script>

<style scoped lang="scss">
.challenge-wrapper{
  width: 592px;
  height: auto;
  display: flex;
  justify-content: center;
  margin-top: 1rem;
  border-radius: 25px;
}

.statement{
  width: 95%;
  border-radius: 25px;
  background-color: blue;
  color: white;
}

.video-card{
  display: flex;
  max-width: 100%;
}

.challenger-video{
  height: 466.663px;
  width: 60%;
  background-color: #00ff90;
  border-radius: 25px;
  z-index: 10;
}

.challengee-video{
  height: 466.663px;
  width: 60%;
  margin-left: 35%;
  background-color: red;
  border-radius: 25px;
  position: absolute;
}

.timer{
  width: 9.5rem;
  height: 3rem;
  background-color: blue;
  color: white;
  border-radius: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.first-row{
  display: flex;
  justify-content: center;
  align-items: center;
}

.author{
  color: black;
  font-size: 1rem;
  width: auto;
  margin-right: 0.2rem;
}

.center{
  display: flex;
  justify-content: center;
}
</style>
