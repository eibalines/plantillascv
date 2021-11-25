<template>
<div>
    <div v-if="comprobar">
        <h1>Crea tu Curriculum</h1><br/>
        <form class="form form-control border-1" v-on:submit.prevent="recogerDatos()">
            <div style="width: 100%">
            <label>Nombre:</label>
            <input ref="nombre" type="text"/>{{""}} <!--Campo requerido, Validacion de escritura-->
           
            <label>Apellidos:</label>
            <input ref="apellidos" type="text"/> 
            </div>
                 <br/><br/>
             <!-- HACER RESPONSIVEEEEEE con <div> y width="50%"-->
        <div style="width: 100%">
            <h2 style="">Datos de residencia</h2>
            <label>Domicilio</label>
            <input value="ej: Calle Mirlo, 12" type="text" ref="domicilio"/>
        
            <label>Codigo Postal</label>
            <input type="number" ref="cp"/>
        
           <label>Localidad</label> <!--Hacer array con las povincias españolas y mostrar en select -->
            <input type="text" ref="localidad"/>
         </div>
            <br/><br/>

         <div style="width: 100%">
              <h2>Contacto</h2>
            <label>Telefono</label> <!-- Validacion de 9 numeros-->
            <input type="number" ref="telefono"/>
        
            <label>Correo eléctronico</label> <!-- Validacion de correo-->
            <input value="ej: user@gmail.com" type="text" ref="email"/>
            </div>
            <br/><br/>
            <div style="width: 100%">
                  <h2>Experiencia Laboral</h2>

                        <label>Desde</label>
                        <input value="ej: 2001" type="text" ref="desdeDate"/>

                        <label>Hasta</label>
                        <input value="ej: 2004" type="text" ref="hastaDate"/>

                        <label>Descripcion del trabajo</label>
                        <input type="text" ref="descripcionTrabajo"/>
            </div>
            <br/><br/>
            <div style="width: 100%">
                  <h2>Formacion</h2>

                        <label>Titulacion</label>
                        <input type="text" ref="descripcionTrabajo"/>
            </div>
            
            <br/><br/>

            <div style="width: 100%; height:100%">
                <h2>Conocimientos</h2>
                <textarea cols="40" rows="5"></textarea>
            </div>

              <div class="mb-3">
             <label ref="myimg" for="formFileSm" class="form-label">Inserte Foto</label>
                <input class="form-control form-control-sm" id="formFileSm" type="file">
                </div>  
            <br/><br/>
         <button class="btn btn-success">
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
            img: "",
            email: "",

            user: { }
            
        }
    },
    methods: {
        recogerDatos(){
            this.nombre = this.$refs.nombre.value;
            this.apellidos = this.$refs.apellidos.value; 
            this.email = this.$refs.email.value; 
            this.user = {
                nombre: this.nombre,
                apellidos: this.apellidos,
                descripcion: this.descripcion,
                email:this.email
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