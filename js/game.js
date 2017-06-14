var s;
function buildBoard(size){
  s = size;
  var str = "<table border = 4 align = 'center' width = 400 height = 400 onclick='count()'>"
  for(var i = 0 ; i<size;i++){
    str +='tr';
    for(var y = 0;y<size;y++){
      str+="<td id ="+x+""+y+"onclick = 'td(this.id)' style = 'background:white'>&nbsp;</td>"

    }
    str+="</tr>"
  }
  str+="</table>"
  return str;
}
function returnColor(id){
  var tdColor = document.getElementById(id).style.background;
  return tdColor;

}
function setTdColor(id,color){
  document.getElementById(id).style.background = color;
}

//判断是不是四条边上的点
function idflag(id){
  var iid = parseInt(id);//转成int
  var row = iid/10;//行序号
  var col = iid%10;//列序号
  if(row==0||row==b||col==0||col==b)
    return true;
  else {
     return false;
  }
}
var b//表示长宽
function setcolor(id,col){
  b=(s-1);
  if(id=="0"+b||id==b+"0"||id==b+""+b||id=="00"){
    document.getElementById(id).style.background = col;
    if(id=='00'){
      var ids = new Array(2);
      ids[0]='01';
      ids[1]='10';
      var c = new Array(2);
      c[0]=returnColor(ids[0]);
      c[1]=returnColor(ids[1]);
      setTdColor(ids[0],col);
      setTdColor(ids[1],col);
      for(var k=0;k<2;k++){
        if(c[k]=="red"){
          setTdColor(ids[k],'white');

        }else{
          setTdColor(ids[k],'red');
        }
      }
    }

    if(id==b+'0'){
      var ids = new Array(2);
      ids[0]=(b-1)+'0';
      ids[1]=b+'1';
      var c=new Array(2);
      c[0]=returnColor(ids[0]);
      c[1]=returnColor(ids[1]);
      setTdColor(ids[0],col);
      setTdColor(ids[1],col);
      for(var k=0;k<2;k++){
        if(c[k]=="red"){
          setTdColor(ids[k],'white');
        }else{
          setTdColor(ids[k],'red');
        }
      }
    }

    //右上角
    if(id=='0'+b){
      var ids = new Array(2);
      ids[0]='0'+b-1；
      ids[1]='1'+b;
      var c=new Array(2);
      c[0]=returnColor(ids[0]);
      c[1]=returnColor(ids[1]);
      setTdColor(ids[0],col);
      setTdColor(ids[1],col);
      for(var k=0;k<2;k++){
        if(c[k]=="red"){
          setTdColor(ids[k],'white');
        }else{
          setTdColor(ids[k],'red');
        }
      }
    }

    if(id==b+''+b){
      var ids = new Array(2);
      ids[0]=(b-1)+''+b;
      ids[1]=b+''+(b-1);
      var c=new Array(2);
      c[0]=returnColor(ids[0]);
      c[1]=returnColor(ids[1]);
      setTdColor(ids[0],col);
      setTdColor(ids[1],col);
      for(var k=0;k<2;k++){
        if(c[k]=="red"){
          setTdColor(ids[k],'white');
        }else{
          setTdColor(ids[k],'red');
        }
      }
    }
  }

  else if(idflag(id)){
    for(var j =0;j<s;j++){
      if(id=='0'+j){
        var ids = new Array(3);
        ids[0]='0'+(j-1);
        ids[1]='0'+(j+1);
        ids[2]='1'+j;
        var c = new Array(3);
        c[0]= returnColor(ids[0]);
        c[1]= returnColor(ids[1]);
        c[2]= returnColor(ids[2]);
        setTdColor(id,col);
        setTdColor(ids[0],col);
        setTdColor(ids[1],col);
        setTdColor(ids[2],col);
        for(var k =0;k<3;k++){
          if(c[k]=="red"){
            setTdColor(ids[k],'white');
          }else{
            setTdColor(ids[k],'red');
          }
        }
      }
      if(id==b+''+j){
        var ids = new Array(3);
        ids[0]=b+''+(j-1);
        ids[1]=b+''+(j+1);
        ids[2]=b-1+''+j;
        var c = new Array(3);
        c[0]= returnColor(ids[0]);
        c[1]= returnColor(ids[1]);
        c[2]= returnColor(ids[2]);
        setTdColor(id,col);
        setTdColor(ids[0],col);
        setTdColor(ids[1],col);
        setTdColor(ids[2],col);
        for(var k =0;k<3;k++){
          if(c[k]=="red"){
            setTdColor(ids[k],'white');
          }else{
            setTdColor(ids[k],'red');
          }
        }
      }

      if(id==j+'0'){
        var ids = new Array(3);
        ids[0]=(j-1)+'0';
        ids[1]=(j+1)+'0';
        ids[2]=j+'1';
        var c = new Array(3);
        c[0]= returnColor(ids[0]);
        c[1]= returnColor(ids[1]);
        c[2]= returnColor(ids[2]);
        setTdColor(id,col);
        setTdColor(ids[0],col);
        setTdColor(ids[1],col);
        setTdColor(ids[2],col);
        for(var k =0;k<3;k++){
          if(c[k]=="red"){
            setTdColor(ids[k],'white');
          }else{
            setTdColor(ids[k],'red');
          }
        }
      }
      if(id==j+''+b){
        var ids = new Array(3);
        ids[0]=(j-1)+''+b;
        ids[1]=(j+1)+''+b;
        ids[2]=j+''+(b-1);
        var c = new Array(3);
        c[0]= returnColor(ids[0]);
        c[1]= returnColor(ids[1]);
        c[2]= returnColor(ids[2]);
        setTdColor(id,col);
        setTdColor(ids[0],col);
        setTdColor(ids[1],col);
        setTdColor(ids[2],col);
        for(var k =0;k<3;k++){
          if(c[k]=="red"){
            setTdColor(ids[k],'white');
          }else{
            setTdColor(ids[k],'red');
          }
        }
      }
    }
  }
  else{
    for(var i=1;i<b;i++){
      for(var j=1;j<b;j++){
        if(id==i+""+j){
          var id1=new Array(4);
          id1[0]=(i+1)+""+j;
          id1[1]=(i-1)+""+j;
          id1[2]=i+""+(j+1);
          id1[3]=i+""+(j-1);
          var c=new Array(4);
          c[0]=returnColor(id1[0]);
          c[1]=returnColor(id1[1]);
          c[2]=returnColor(id1[2]);
          c[3]=returnColor(id1[3]);
          setTdColor(id,col);
          setTdColor(id1[0],col);
          setTdColor(id1[1],col);
          setTdColor(id1[2],col);
          setTdColor(id1[3],col);
          for(var k=0;k<4;k++){
            if(c[k]=="red"){
              setTdColor(id1[k],'white');
            }else{
              setTdColor(id1[k],'red');
            }
          }

        }
      }

    }
  }
}
//点击单元格事件
	var sum;
	var lian;
	var bu;
	function td(id){

		var t=document.getElementById(id);
		if(t.style.background=="white"){
			setColor(id,'red');
		}
		else{
			setColor(id,'white');
		}

