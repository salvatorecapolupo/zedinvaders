/**
 * @author Sal
 */

//variabili fisiche
var factor = 0.001;
var force = 1.2;
var forzajack = 1;
var forzavirus = 0.001; //??????
var mseconds = 1000;
var startvalue = 30;
var gameOver =false;

//variabili grafiche
var totalJackFrame = 10;
var actualFrame =0;

function showGameInfo(){
	$('#info').html('startvalue = '+startvalue);
}

$(function() {
	var progressbar = $( "#progressbar" ),
	progressLabel = $( ".progress-label" );
		
	progressbar.progressbar({
		value: false,
		change: function() {
			progressLabel.text( ~~progressbar.progressbar( "value" ) + "%" );

			if (progressbar.progressbar("value")<=15) 
				baloonDraw();
			
			//cambio colore barra
			if (progressbar.progressbar( "value" )>=20 && progressbar.progressbar( "value" )<=30) 
				$(".progress-label").css({"backgroundColor":"red","color":"white"});
			if (progressbar.progressbar( "value" )<20 ) 
				$(".progress-label").css({"backgroundColor":"yellow","color":"black"});
			else //default
				$(".progress-label").css({"backgroundColor":"green","color":"white"});

		},
		complete: function() {
			finished = true;
			
			progressLabel.text( "HAI VINTO!" );
			//alert("HAI VINTO!");
			youwon.play();

			for ( var r=0; r<quantiInvader; r++ ){
				vivo[r]=false; //tutti grigi
			}
						
			setInterval(easterEgg, 10);
			
			return;
		}
	});
	progressbar.progressbar( "value", startvalue );
	
	setInterval( decrease, mseconds);


function easterEgg(){
	var ctx = getCtx();
	ctx.fillStyle = "black";
  	ctx.drawImage( vaiadormire, 2*tilew, height1/2 );
}

function decrease(){
	
	var val = progressbar.progressbar( "value" ) || 0;
	if (val == 100) return; //finished
	
	forzavirus = Math.random() * 0.15;
	
	var newvalue = ( val - forzavirus );
	newvalue = Math.round(newvalue * 100) / 100;
	
	if ( newvalue<=15 )
		$('#console').html("PREMI Z !");
	
	if ( newvalue<=10 )
		$('#console').html("GIRA PIU' VELOCEMENTE !");

	if ( newvalue<=5 )
		$('#console').html("SEI AL LIMITE, GIRA !");

	if ( newvalue<=0 ) newvalue=0;
	
	gameOver = ( newvalue==0 );
	
	progressbar.progressbar( "value", newvalue );
}

/**
function increase() {
	var val = progressbar.progressbar( "value" ) || 0;
	var newvalue = (val + forzajack);
		newvalue=Math.round(newvalue * 100) / 100;

	progressbar.progressbar( "value", newvalue );
}
**/
});

