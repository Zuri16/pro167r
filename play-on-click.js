AFRAME.registerComponent("play-on-click", {
 //Añadimos el código aquí.
 schema: { isPlaying: { type: "boolean", default: false } }, init: function() { //Para guardar el video que se va a reproducir 
    this.videoEl = this.el.getAttribute("material").src; 
    //bind()unir, le une el video a la función onclcik es como si se lo enviaramos como parametro 
    this.onClick = this.onClick.bind(this); }, 
    play: function() { 
    //Si se siente un click o touch en la pantalla 
    window.addEventListener("click", this.onClick); }, 
    onClick: function(evt) { 
    //Si no hay video solo return 
    if (!this.videoEl) { return; } 
    //Obtener el atributo boleano de true o false 
    var isPlaying = this.el.getAttribute("play-on-click").isPlaying; 
    //Ponerlo como objeto 3d visible 
    this.el.object3D.visible = true; 
    if (!isPlaying) { 
    //Si el video NO se esta reproduciendo(isPlaying esta en false) el atributo cambia a tru y lo reproducimos con play() 
    this.el.setAttribute("play-on-click", { 
        isPlaying: true }); 
        this.videoEl.play(); } 
        else { 
            this.el.setAttribute("play-on-click", { 
                isPlaying: false }); 
            this.videoEl.pause(); } }
});
