<template>
    <div>
        <h1>Crea tu Curriculum</h1>
        <form class="form form-control" v-on:submit.prevent="recogerDatos()">
            <label class="label col-form-label">
               Nombre:
            </label>
            <input ref="nombre" class="input input-group" type="text"/>
            <br/>
            <label class="label col-form-label">
                Apellidos:
            </label>
            <input ref="apellidos" class="input input-group" type="text"/>
            <br/>
            <label class="label col-form-label">Edad</label>
            <input ref="edad" type="text" class="input input-group"/>

            <input class="form-control" ref="myimg" type="file" id="formFile"/>
        <br/>
         <button>
                Recoger Datos
         </button>
        </form>
        
    </div>
</template>

<script>

export default {
    name: "Formulario",
    data(){
        return{
            nombre: "",
            apellidos: "",
            edad: "",
            img: "",
            
        }
    },
    methods: {
        recogerDatos(){
            this.nombre = this.$refs.nombre.value;
            console.log(this.nombre);
            this.apellidos = this.$refs.apellidos.value;
            console.log(this.apellidos);
            this.edad = this.$refs.edad.value;
            console.log(this.edad);
        },

        

    
    mounted(){
        
    }
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