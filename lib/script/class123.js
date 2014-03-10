/**
 * @author Sal
 */

function getCtx(){
	var canvas = document.getElementById("canvas");
	var ctx = canvas.getContext("2d");
	return ctx;
}

function createRect( x, y, w, h ){
	var ctx = getCtx();
	ctx.rect( x, y, w, h );
	ctx.stroke();
}
