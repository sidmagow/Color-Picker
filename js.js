/**
 * Created by Sidhant Magow on 19-06-2017.
 */
$().ready(function () {
  /*  var dragged=0;
    document.getElementById("div6").addEventListener("drag", function( event ) {
        // store a ref. on the dragged elem
        dragged = event.target;
        console.log("hello");
        // make it half transparent
        event.target.style.opacity = .5;

    }, false);
    document.getElementById("div6").addEventListener("dragstart", function( event ) {
        // store a ref. on the dragged elem
        dragged = event.target;
        console.log("hey");
        // make it half transparent
        event.target.style.opacity = .5;

    }, false);

    document.getElementById("div6").addEventListener("dragend", function( event ) {
        // store a ref. on the dragged elem
        dragged = event.target;
        console.log("hola");
        // make it half transparent
        event.target.style.background="";

    }, false);


    function myfunction(color) {
       var div3= document.getElementById("div3");
        var width=div3.width;
       var height=div3.height;

    }*/


    var canvas1=document.getElementById("canvas1");
    var ctx=canvas1.getContext('2d');
    canvas1.height=258;
    canvas1.width=258;
    var canvas2=document.getElementById("canvas2");
    var scrollcanvas=document.getElementById("scrollcanvas")
    var ctx1=scrollcanvas.getContext('2d');
    scrollcanvas.height=12;
    scrollcanvas.width=767;


    function subsets( A,N){

        for(var i = 0;i < (1 << N); ++i)
        {
            for(var j = 0;j < N;++j)
                if(i & (1 << j))
                    console.log(A[j]+'');
        }
    }

    function paint(event,r,g,b) {
            console.log(r);
            console.log(g);
            console.log(b);
  var A=[r,g,b];
  var N=A.length;
        subsets(A,N);







        var l=255;
        var m=255;
            var n=255;

           /* var ldiff=l-r;
            var mdiff=m-g;
            var ndiff=n-b;
            var proportion;
            var count;
            if(ldiff==0){
                if(mdiff>ndiff){
                    proportion=(mdiff/ndiff);
                    count=1;
                }
                else{
                    proportion=(ndiff/mdiff);
                    count=2;
                }
            }
            else if (mdiff==0){
                if(ldiff>ndiff){
                    proportion=(ldiff/ndiff);
                }else{
                    proportion=(ndiff/ldiff);
                }
            }
            else{
                if(ldiff>mdiff){
                    proportion=(ldiff/mdiff);
                }else{
                    proportion=(mdiff/ldiff);
                }
            }
*/
            for(var j=1;j<=256;j++) {
          var x=l;
          var y=m;
          var z=n;
            for (var i = 1; i <= 256; i++) {
                ctx.fillStyle ='rgb('+(x)+','+(y)+','+(z)+')' ;
                ctx.fillRect(i, j, 1, 1);
                if(x!==r){
                    x--;
                }
                if(y!=g){
                    y--;
                }
                if(z!=b){
                    z--;
                }
                if(x==r&&y==g&&z==b){
                    if(r!=0){
                        r--;
                    }
                    if(g!=0){
                        g--;
                    }

                    if(b!=0){
                        b--;
                    }
                    break;
                }
            }
            l--;
            m--;
            n--;

        }


    }
    function myfunc(event){
        var x=event.layerX;
        var y=event.layerY;
        var pixel=ctx1.getImageData(x,y,1,1);
        var data=pixel.data;

        console.log(x+','+y);

        var r= 255;
        var g=0;
        var b=0;


        var linearGradient1 = ctx1.createLinearGradient(0,0,780,0);
        linearGradient1.addColorStop(0  , 'rgb(255, 0,   0)');
        linearGradient1.addColorStop(0.2  , 'rgb(255, 255, 0)');
        linearGradient1.addColorStop(0.4  , 'rgb(0, 255, 0)');
        linearGradient1.addColorStop(0.6  , 'rgb(0, 255, 255)');
        linearGradient1.addColorStop(0.8  , 'rgb(0, 0, 255)');
        linearGradient1.addColorStop(0.9  , 'rgb(255, 0, 255)');
        linearGradient1.addColorStop(1  , 'rgb(255, 0,   0)');


        linearGradient1.addColorStop(1, 'rgb(  0, 0, 255)');


        ctx1.fillStyle = linearGradient1;
        ctx1.fillRect(1,1,767, 11);

        var rgb='rgb('+data[0]+','+data[1]+','+data[2]+')';
        document.getElementById("scrollspan").innerHTML=rgb;
        paint(null,data[0],data[1],data[2]);
    }

    function colorPicker(event)  {

        var x=event.layerX;
        var y=event.layerY;
        var pixel=ctx.getImageData(x,y,1,1);
        var data=pixel.data;
        console.log(x+','+y);
        var rgb='rgb('+data[0]+','+data[1]+','+data[2]+')';
        canvas2.style.background=rgb;
        document.getElementById('myspan').innerHTML=rgb;

    }
    canvas1.addEventListener('mousemove',colorPicker);
    scrollcanvas.addEventListener('mousemove',myfunc);


})