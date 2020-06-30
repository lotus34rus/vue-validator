<template>

    <div class="wrapper content">
        <div class="left_side">
            <h3>Исходный список</h3>
            <form id='original' onsubmit="return false;">
                <textarea  v-model="original" name="phones" cols="30" rows="10"></textarea>
                <button v-on:click="validate();" >Проверить</button>

            </form>
        </div>
        <div class="right_side">
            <h3>Список валидных номеров</h3>
            <form id="validated">
                <textarea v-model="validated" id='validated_phones' name="validated_phones" cols="30" rows="10"></textarea>
            </form>
            <button v-on:click="addSeven()">Добавить "375"</button>
            <button v-on:click="copy()">Скопировать</button>
            <a download="result.txt" id="test" href="#">Скачать файл</a>
        </div>
        
        <div class="legend">
            <p>Номеров в исходной базе : {{ originalCount }}</p>
            <p>Номеров в валидной базе : {{ validatedCount }}</p>
            <p>Невалидных номеров (в т.ч. дублей) : {{ originalCount - validatedCount }}</p>
        </div>
    </div>

</template>


<script>
export default {

  name: 'MainPage',

  data: function(){
      return {
          title: "Инструменты для рассылок",
          original: '',
          validated: '',
      }
  },

  methods:{
      addSeven(){
            let phones = this.validated.trim().split('\n');

            let result =  phones.map((item)=>{
                return "375"+item;
            });
            
            this.validated = result.join('\n');

            let type = 'data:application/octet-stream;base64, ';
            let text =  this.validated;
            let base = btoa(text);
            let res = type + base;
            document.getElementById('test').href = res;
      },
      validate(){
            let phonesWithOutValidate = this.original.trim().split('\n');
            let phonesForValidate = phonesWithOutValidate.join(',').split(','); // Соберем в один массив номер,даже если они по несколько в строчку
            let result=[];
    
            phonesForValidate.forEach((item)=>{

            let current = item.replace(/\D+/g, ''); // Clear current phone number        
            if(current.startsWith('375')){ //Если номер начинается с +7

                if(current.length == 12){
                
                    result.push(current.slice(3));

                }

            }else if(current.startsWith('89') && current.length == 11){ //Если номер начинается с 8
                
                result.push(current.split(' ').join('').slice(1));  

            }else if(current.length == 10 && current.startsWith("9")){ //Если номер валиден изначально
            
                result.push(current);

            }
            
         });

         //delete duplicates
        let result_Set = new Set(result);
        this.validated = Array.from(result_Set).join('\n');

         //generate file for downloading
        let type = 'data:application/octet-stream;base64, ';
        let text =  this.validated;
        let base = btoa(text);
        let res = type + base;
        document.getElementById('test').href = res;
      },

      copy(){
        document.getElementById('validated_phones').select();
        document.execCommand("copy");
      },
    

  },
  
  computed: {      
      originalCount: function(){
          return this.original != '' ? this.original.trim().split('\n').length : 0;
      },

      validatedCount: function(){
          return this.validated != '' ? this.validated.trim().split('\n').length : 0;
      }
  
  }
}

</script>

<style scoped>


.left_side, .right_side{
    width: 45%;
    padding: 50px 0;
}
.content{
    justify-content: space-between;
}
.legend{
    width: 100%;
}

.right_side button, .right_side a{
    width: 30%;
    margin-right: 10px;
    display: inline-block;
    background: rgb(226,226,226);
    height: 40px;
    color: #000;
    line-height: 39px;
    text-align: center;
    text-decoration: none;
    border: 0;
    transition: 0.3s;
}
.content button:hover, .content a:hover, .content input[type="submit"]:hover{
    background: rgb(144, 137, 137);
}


</style>