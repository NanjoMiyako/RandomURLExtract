var lines = [];
var DataImportFlg = false;

DisplayDataImportFlg();

function RandomURLExtract(){
    var lineNum = lines.length;
    
	var extraNum = 10;
	if(lines.length < 10){
		extraNum = lines.length;
	}
	
	var loopMax = 0;
	var rndIdx;
	var rndIdxAry = [];
	for(var i=0; i<extraNum; i++){
		rndIdx = getRandom(0, lineNum-1);
		if(rndIdxAry.includes(rndIdx)){
			i--;
			
			loopMax++;
			if(loopMax >= 100){
				break;
			}
			
			continue;
		}else{
			rndIdxAry.push(rndIdx);
		}
	}
	
	
	for(var j=0; j<rndIdxAry.length; j++){
	    k = j+1;
		var linkId = "URL"+k;
		var linkElem = document.getElementById(linkId);
		linkElem.href = lines[rndIdxAry[j]];
		linkElem.innerText = lines[rndIdxAry[j]];
	}
	


}

//参考URL:https://www.sejuku.net/blog/22432
function getRandom( min, max ) {
    var random = Math.floor( Math.random() * (max + 1 - min) ) + min;
  
    return random;
}

function ImportDataOnDataImportTab(){
      var fileRef = document.getElementById('fileOnDataImport');
	  var content;
	  var category1;
	  var subcategory1;
	  
      if (1 <= fileRef.files.length) {
			var reader = new FileReader();
			//ファイル読み出し完了後の処理を記述
			reader.onload = function (theFile) {
			var content = theFile.target.result;
			lines = content.split(/[\r\n]+/);

			DataImportFlg = true;
			DisplayDataImportFlg();
        }

		//ファイル読み出し
        reader.readAsText(fileRef.files[0], "utf-8");

      }
}

var g_reader = new FileReader();
var g_File;
var fileElem = document.getElementById("fileOnDataImport");
fileElem.onchange = function(event) {
    g_File = event.target.files[0];
};

function DisplayDataImportFlg(){
	var spanElem;
	
	spanElem = document.getElementById("ImportDataFlg");
	if(DataImportFlg == true){
		spanElem.innerHTML = "URLデータ：ロード済み"
	}else{
		spanElem.innerHTML = "URLデータ：ロード未完了"
	}
}

