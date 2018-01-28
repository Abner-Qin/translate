<template>
  <div id="translateForm" class="row">
    <div class="col-md-12">  
    <form v-on:submit="formSubmit" class="well form-inline" id="transform">
  <input type="text" placeholder="请输入翻译的内容" v-model="textToTranslate" class="form-control" />
  <select name="" id="" v-model="language" class="form-control">
  <option value="en">English</option>
  <option value="ru">Russian</option>
  <option value="ko">Korean</option>
  <option value="ja">Janpenese</option>
  </select>
  <input type="submit" value="翻译" class="btn btn-primary">
    </form>
    </div> 
  </div>
</template>

<script>
export default {
  name: 'translateForm',
  data:function(){
    return{
      textToTranslate:"",
      language:""
    }
  },
  methods:{
    formSubmit:function(e){
      // alert(this.textToTranslate)
      this.$emit('formSubmitData',this.textToTranslate,this.language)
      e.preventDefault()
    }
  },
  created:function(){
    this.language="en"
  }
}
</script>

<style>
#transform{border:1px solid #ccc;border-radius:10px;display:inline-block;}
</style>
