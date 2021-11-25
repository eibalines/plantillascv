
<template>
<div id="doc2" class="yui-t7">
	<button class="btn btn-light" @click="volver()">Volver atrás</button>	
	<div ref="pdfcontent" id="inner">
	
		<div id="hd">
			<div class="yui-gc">
				<div class="yui-u first">
					<h1>{{user.nombre}}</h1>
					<h1>{{user.apellidos}}</h1><br/>
					<h2>{{user.perfilProfesional}}</h2>
				</div>

				<div class="yui-u">
					<div class="contact-info">
						
						<h3>{{user.nombre}} &mdash; <a :href="'mailto:' + user.email">{{user.email}}</a></h3>
						<h3>Telefono de contacto: {{user.telefono}}</h3>
					</div><!--// .contact-info -->
				</div>
			</div><!--// .yui-gc -->
		</div><!--// hd -->

		<div id="bd">
			<div id="yui-main">
				<div class="yui-b">

					

					<div class="yui-gf">
						<div class="yui-u first">
							<h2>Habilidades</h2>
						</div>
						<div class="yui-u">
							{{user.conocimientos}}
						</div>
					</div><!--// .yui-gf -->

					

					<div class="yui-gf">
	
						<div class="yui-u first">
							<h2>Experiencia Laboral</h2>
						</div><!--// .yui-u -->

						<div class="yui-u">

							<div class="job">
								<h2>{{user.empresa}}</h2>
								<h3>{{user.cargo}}</h3>
								<h4>{{user.desdeExp}} - {{user.hastaExp}}</h4>
								<p> {{user.descripcionTrabajo}}</p>

								</div>


						</div><!--// .yui-u -->
					</div><!--// .yui-gf -->


					<div class="yui-gf last">
						<div class="yui-u first">
							<h2>Formacion</h2>
						</div>
						<div class="yui-u">
							<h2>{{user.titulo}}</h2>
							<h4>{{user.desdeEduca}} - {{user.hastaEduca}}</h4>
						</div>
					</div><!--// .yui-gf -->


				</div><!--// .yui-b -->
			</div><!--// yui-main -->
		</div><!--// bd -->

		<div id="ft">
			<p> <a :href="'mailto:' + user.email">{{user.email}}</a>{{user.telefono}}</p>
		</div><!--// footer -->

	</div>

    </div>

</template>
<script>

export default {
    name: "Plantilla",
    props:["user"],
    methods:{
    volver(){
        this.$emit("volverAtrasPadre");
    },

}
}

</script>
<style scoped>
@import './../assets/css/resume.css';
</style>