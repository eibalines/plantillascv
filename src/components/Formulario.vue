<template>
<div>
    <div v-if="comprobar">
        <h1>Crea tu Curriculum</h1>
        <form class="form form-control" v-on:submit.prevent="recogerDatos()">
            <label class="label col-form-label">
               Nombre:
            </label>
            <input ref="nombre" type="text"/>{{""}}
           
            <label class="label col-form-label">
                Apellidos:
            </label>
            <input ref="apellidos" type="text"/> <br/>
            <br/>
            <label class="label col-form-label">Edad</label> 
            <input ref="edad" type="text"/>{{""}}
            <label>Domicilio</label>
            <input type="text" ref="domicilio"/>

            <input class="form-control" ref="myimg" type="file" id="formFile"/>
            <br/>
         <button>
                Recoger Datos
         </button>
         
        </form>


        </div>
    <div v-if="!comprobar">
            <Plantilla :user="user" v-on:volverAtrasPadre="volverAtrasPadre"/>
        </div>
    </div>
    
</template>

<script>
import Plantilla from './Plantilla.vue';
export default {

    name: "Formulario",
    components:{
        Plantilla,
    },
    data(){
        return{
            comprobar: true,
            nombre: "",
            apellidos: "",
            edad: "",
            img: "",

            user: { }
            
        }
    },
    methods: {
        recogerDatos(){
            this.nombre = this.$refs.nombre.value;
            this.apellidos = this.$refs.apellidos.value;
            this.edad = this.$refs.edad.value;
            this.user = {
                nombre: this.nombre,
                apellidos: this.apellidos,
                edad: this.edad,
                descripcion: this.descripcion
                }

            this.comprobar = false;
        },
        volverAtrasPadre(){
            this.comprobar = true;
        }
        
        },
    
    mounted(){
        
    }
}

</script>
<style >
.dropbox {
    outline: 2px dashed grey; /* the dash box */
    outline-offset: -10px;
    background: lightcyan;
    color: dimgray;
    padding: 10px 10px;
    min-height: 200px; /* minimum height */
    position: relative;
    cursor: pointer;
  }

  .input-file {
    opacity: 0; /* invisible but it's there! */
    width: 100%;
    height: 200px;
    position: absolute;
    cursor: pointer;
  }

</style>