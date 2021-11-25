<template>
    <div>
    <!-- comprobar es un boolean para cambiar entre el formulario y la plantilla -->
        <div v-if="comprobar">
             <h1>Crea tu Curriculum</h1><br/>
             <form class="form form-control border-1" v-on:submit.prevent="recogerDatos()">
                <div style="width: 100%">
                    <label>Nombre:</label>
                    <input ref="nombre" type="text"/>{{""}}
                    
                    <label>Apellidos:</label>
                    <input ref="apellidos" type="text"/> 
                </div>
                <br/>   
                <div style="width: 100%">
                    <h2 style="">Datos de residencia</h2>
                    
                    <label>Domicilio</label>
                    <input value="ej: Calle Mirlo, 12" type="text" ref="domicilio"/>
                
                    <label>Codigo Postal</label>
                    <input type="number" ref="cp"/><br/>
            
                     <label>Localidad</label> 
                    <input type="text" ref="localidad"/>
                </div>
                 <br/>

                <div style="width: 100%">
                    <h2>Contacto</h2>

                    <label>Telefono</label> 
                     <input type="number" ref="telefono"/>
            
                    <label>Correo eléctronico</label> 
                    <input value="ej: user@gmail.com" type="text" ref="email"/>
                 </div>
                 <br/>
                 <div style="width: 100%">
                    <h2>Experiencia Laboral</h2>

                    <label>Desde</label>
                    <input value="ej: 2001" type="text" ref="desdeDate"/>

                    <label>Hasta</label>
                    <input value="ej: 2004" type="text" ref="hastaDate"/><br/>

                    <label>Cargo</label>
                    <input size="50" type="text" ref="cargo"/><br/>
                    <label>Empresa</label>
                    <input type="text" ref="empresa" size="35"/><br/>

                    <label>Descripcion del trabajo</label><br/>
                    <textarea cols="40" rows="5" type="text" ref="descripcionTrabajo"/>
                </div>
                <br/>
                <div style="width: 100%">
                    <h2>Formacion</h2>

                    <label>Desde</label>
                    <input value="ej: 2000" type="text" ref="desdeEduca"/>

                    <label>Hasta</label>
                    <input value="ej: 2002" type="text" ref="hastaEduca"/><br/>

                    <label>Título</label>
                    <input size="50" type="text" ref="titulo"/><br/>
                </div>
                <br/>
                <div>
                    <h2>Perfil profesional</h2><br/>

                    <input size="40" value="ej: Desarrollador Web" ref="perfilProfesional"/>
                </div>
                <br/>
                <div style="width: 100%; height:100%">
                    <h2>Conocimientos</h2>

                    <textarea cols="40" rows="5" ref="conocimientos"/>
                </div>
                <br/>

                <button class="btn btn-success">
                    Recoger Datos
                </button>
         
            </form>

        </div>
        
        <!-- se mostrará la plantilla cuando el valor de comprobar sea false -->
        <div v-if="!comprobar">
        <!-- Le pasamos por props a la plantilla el objeto usuario y el metodo para volver al formulario -->
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
           domicilio: "",
            email: "",
            cp: 0,
            localidad: "",
           telefono: 0,
            desdeExp: 0,
            hastaExp: 0,
            cargo: "",
           empresa: "",
            descripcionTrabajo: "",
            desdeEduca: 0,
           hastaEduca: 0,
           titulo: "",
           

            user: { }
            
        }
    },
    methods: {
        recogerDatos(){
            this.nombre = this.$refs.nombre.value;
            this.apellidos = this.$refs.apellidos.value; 
             this.domicilio = this.$refs.domicilio.value;
            this.cp = this.$refs.cp.value; 
            this.localidad = this.$refs.localidad.value; 
             this.telefono = this.$refs.telefono.value;
             this.email = this.$refs.email.value; 

            this.desdeExp = this.$refs.desdeDate.value; 
            this.hastaExp = this.$refs.hastaDate.value; 
            this.cargo = this.$refs.cargo.value; 
           this.empresa = this.$refs.empresa.value; 
             this.descripcionTrabajo = this.$refs.descripcionTrabajo.value;

            this.desdeEduca = this.$refs.desdeEduca.value; 
            this.hastaEduca = this.$refs.hastaEduca.value; 
            this.titulo = this.$refs.titulo.value; 

            this.perfilProfesional = this.$refs.perfilProfesional.value; 
            this.conocimientos = this.$refs.conocimientos.value; 

            this.download
            

            

            this.user = {
                nombre: this.nombre,
                apellidos: this.apellidos,
                domicilio: this.domicilio,
                cp: this.cp,
                localidad: this.localidad,
                telefono: this.telefono,
                email: this.email,
                desdeExp: this.desdeExp,
                hastaExp: this.hastaExp,
                cargo: this.cargo,
                descripcionTrabajo: this.descripcionTrabajo,
                desdeEduca: this.desdeEduca,
                hastaEduca: this.hastaEduca,
                titulo: this.titulo,
                perfilProfesional: this.perfilProfesional,
                conocimientos: this.conocimientos

                }

            this.comprobar = false;
        },
        volverAtrasPadre(){
            this.comprobar = true;
        },
        
        
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