//入力データから結果一覧を表示するためのサービス
onsModule.factory('ShowService', function() {
  var keyPlayer = 'player';
  var keyPoint = 'point';

  return {
    //ポイントリストから表示用の結果配列を作る
    getPointList: function(plList,pointList) {
      var showList = [];
      showList.push(plList);//1行目にプレイヤーリストを格納
      for (var i = 0, lenI = pointList.length; i<lenI; ++i) {
        var inputList = [];//ゲームごとのリスト
        var tmpPtList = pointList[i];
        for (var j=0, lenJ=plList.length; j<lenJ; ++j) {
          //プレイヤーリスト順に値を格納
          var player = plList[j];
          var point = getPointFromPlayerKey(player,tmpPtList);
          inputList.push(point);
        }
        showList.push(inputList);//代入
      }
      return showList;
    }
  }

  //プレイヤー名をキーにゲームごとの得点を返す
  function getPointFromPlayerKey(player,thisGameList) {
    var resultPoint = "--";//結果ポイント
    for(var i=0,lenI = thisGameList.length;i<lenI;i++) {
      var tmpPlayer = thisGameList[i][keyPlayer];
      if(player == tmpPlayer) {
        resultPoint = thisGameList[i][keyPoint];//プレイヤーが一致したらポイントを格納
      }
    }
    return resultPoint;
  }    
})