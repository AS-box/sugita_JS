$(function(){

	var Human = function(){
		//引数の取得
		// alert(arguments[0]);
		// alert(arguments[1]);

		//propertの設定
//		this.name = arguments[0];
		this.name = "Human";
		this.age = 0;
		this.gender = "しらん";
	};

	//メソッドの定義
	Human.prototype = {
		sit : function(){
			alert("すわったよ");
		},
		sleep : function(){
			alert("ねたよ");
		},
		eat : function(){
			alert("たべたよ")
		},
		greet : function(){
			alert("こんにちは！ "+this.name+"だよ！");
		},
		toString : function(){
			return this.name+this.age+this.gender;
		}
	};

	//Humanクラスのインスタンス生成
	var test = new Human("aiueo",65);


	//Sugitaクラス定義
	var Sugita = function(){
		this.name = "杉田亜衣";
	};
	//SugitaクラスはHumanクラスを継承する
	Sugita.prototype = new Human();

	//Humanクラスのgreetをオーバーライド
	Sugita.prototype.greet  = function(){
		alert("すぎただよー");
	};

	var test2 = new Sugita();
	test2.greet();

});