var todasImg=[],selecionados = [], ids = [],imgVirada = "img/cross.png"
var contadorcards = 0, erros = 0, comparadorImg = []

    $(document).ready(function(){
      $("#inicia").click(function(){ 
        
        var cards=["img/android.png",
           "img/chrome.png",
           "img/facebook.png",
           "img/firefox.png",
           "img/googleplus.png",
           "img/html5.png",
           "img/twitter.png",
           "img/windows.png"
        ]
        for (var a = todasImg.length; a > 0; a--) { 
          todasImg.pop(); 
        }
        $(".jogo").empty()
        for(i=0;i<=cards.length *2; i++){
          for (var j = cards.length; j;) {
            var n = Math.random() * j-- | 0;
            var temporaria = cards[n];
            cards[n] = cards[j];
            cards[j] = temporaria;
            var img = $('<img id="img'+i+'" class="cards" src='+temporaria+' onclick="trocaImagem(this,'+todasImg.length+')">');
            todasImg.push(temporaria);            
            img.fadeIn(2000).slideDown(2000);
            $("#jogo").append(img);
            img.slideUp(1000).fadeOut(1000, function(){
              $(".cards").attr("src", imgVirada);
              $(".cards").fadeIn(2000).slideDown(3000);
            });
            i++
          }
        }
      })
});


function trocaImagem(img, indiceArray){
      if(selecionados.length <2){
        $("#"+img.id).attr("src", todasImg[indiceArray]);
      
        if(selecionados.length == 0){
          selecionados.push(indiceArray);
          ids.push(img.id);
          comparadorImg.push(todasImg[indiceArray]);
        } else if(selecionados.length == 1){

          selecionados.push(indiceArray);
          ids.push(img.id);
          comparadorImg.push(todasImg[indiceArray]);
          if(comparadorImg[0] == comparadorImg[1]){
            
            selecionados = [];
            ids = [];
            comparadorImg = [];
            contadorcards += 2;
            console.log(contadorcards)

            if(contadorcards == todasImg.length){
              alert("Parabéns, você concluiu o jogo!!!")
              alert("Quantidade de erros:"+ erros)
              $("#jogo").empty()
              contadorcards=0
              erros = 0
            }
          }else {
            setTimeout(function(){
              $("#"+ids[0]).attr("src", imgVirada);
              $("#"+ids[1]).attr("src", imgVirada);
              erros++;
              selecionados = [];
              ids = [];
              comparadorImg = []; 
            }, 1500)}
          }         
        } 
      
    }