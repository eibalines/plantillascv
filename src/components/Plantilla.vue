
<template>
    <div>
        <h1>Plantilla</h1>
        <h2>{{user.nombre}}</h2>
        <h2>{{user.apellidos}}</h2>
        <button @click="volver()">Volver atrás</button>

        
    
        

    </div>
</template>
<script>
export default {
    name: "Plantilla",
    props:["user"],
    methods:{
    volver(){
        this.$emit("volverAtrasPadre");
    }
    }
}

</script>