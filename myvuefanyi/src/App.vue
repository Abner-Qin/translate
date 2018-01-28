<template>
  <div id="app" style="text-align:center;">
  	<h1>在线翻译</h1>
  	<h5 class="text-muted">简单 / 易用 / 便捷</h5>
    <translateForm v-on:formSubmitData="translateText"></translateForm>
    <translateOutput v-text="TranslatedText"></translateOutput>
  </div>
</template>

<script>
import TranslateForm from './components/translateForm'
import translateOutput from './components/translateOutput'
export default {
  name: 'app',
  components:{
	TranslateForm,translateOutput
  },
  data:function () {
    return {
      TranslatedText:''
    }
  },
  methods:{
  	translateText:function(text,language){
  		// alert(text)
  		this.$http.get('https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20180124T021318Z.690b0fe6c50ec2a0.e4df0f1d74c6f253690c05b87e7045f4d0e7ebe3&lang='+language+'&text='+text).then((response)=>{
        console.log(response.body.text[0])
        this.TranslatedText=response.body.text[0];
      })
  			
  		
  	}
  }
  
}
</script>

<style>

</style>
