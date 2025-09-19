	const arrayGo = ["銅","鉄","銀","金"];
	const arrayKakuritsu = [5,4,3,2];
	var n1 = 0;
	var i = 0;
	var st1 = '';
	var ran = 0;
	var x = 0;


	function function1 ()
	{
		x = 0;
		for (var v1 in arrayKakuritsu)
		{
			x += arrayKakuritsu[v1];
		}
		ran = Math.floor(Math.random() * x);
		for (i=0,x=0; ; i++)
		{
			x += arrayKakuritsu[i];
			if (ran <= x)
			{
				st1 = arrayGo[i];
				break;
			}
		}
		document.getElementById("text1").textContent=st1;

//		document.getElementById("span1").textContent=arrayGo1[n1];
	}



	function function2 ()
	{
document.getElementById("span1").textContent=arrayGo.length	;
	}



window.onload = function() {function1();};
