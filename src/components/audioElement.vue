<template>




<b-col sm align-self="center">

  <b-button v-bind:class="{ ' active': item.isActive}"
 class="roundbutton" variant="outline-light"  @click.prevent="item.isActive ? pause(item) : play(item)" >

<v-icon label="No Photos">
<v-icon :name="item.icon" scale="4"/>

</v-icon>
 </b-button>
    <b-form-input :id="'volumen_'+item.id" v-model="value" type="range" min="0" max="5" size="sm" @change="changeVolume(item)"></b-form-input>


</b-col>


</template>

<script>

export default {



  name: 'audioElement',
    props:['item'],

      methods: {
    play (audio) {

      //VOLUMEN !!!!! GET VOLUMEN BY ID OF RANGESLIDER
console.log("volmenfinder");
      console.log(document.getElementById("volumen_"+audio.id).value)
      let volumenSliderValue=document.getElementById("volumen_"+audio.id).value;
      console.log(audio.soundfile)

      audio.isActive = true;
      audio.soundfile.loop=true;
      //audio.volume = this.volume+volumenSliderValue;
      audio.soundfile.volume = (1/5)*volumenSliderValue;

      audio.soundfile.play();
    },

    pause (audio) {
      audio.isActive = false;
      audio.soundfile.pause();
    },
    changeVolume (audio) {
      let volumenSliderValue=document.getElementById("volumen_"+audio.id).value;

      //IF AUDIOOBJECT VORHANDEN CHANGE VOLUME
      // volumen 1.0 =highest volumen 0.0 lowest
      //console.log(this.$emit('changeVolume', this.value).value);
      //let changeValue=this.$emit('changeVolume', this.value).value
      console.log(audio)
      audio.soundfile.volume = (1/5)*volumenSliderValue;

    //  audio.volume = volume / 5


    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
