<template>
  <div class="my-component">
    <div @keepclick="mykeep">xia</div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data(){
    return {
      str: ''
    }
  },
  props: ['mynum'],
  watch:{
    mynum(newVla,oldVal){
      if(newVla){
        this.mykeep();
      }
    }
  },
  methods:{
    init(){
      const obj1 = {
        
        a: 10,
        b: 20
      };

      const obj2 = {
        ...obj1,
        c: 30
      };
      console.log(obj2)
    },
    mykeep(){
      this.str = this.mynum + 1;
      this.$emit('keepclick',this.str)
      console.log(this.str)
    }
  }
}
</script>

<style scoped>

</style>
