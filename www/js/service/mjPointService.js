//点棒データを入力し、ポイント計算するためのサービス
onsModule.factory('MjPointService', function() {
  return {
    //点棒リストからポイントリストを返す(点棒リスト,返し点)
    getOriginPoint: function(handPtList,returnPt,plList) {
      var sorted = handPtList.slice().sort(function(a, b) {return b - a});//持ち点を昇順に並び替え
      var ranks = handPtList.slice().map(function(x){return sorted.indexOf(x) + 1});//順位リストを作成
      var pointMjList = [];//{originPt,rank,player}

      for(var i=0;i<4;i++) {
        var mjList = {};//プレイヤーごとの素点と順位リスト
        var rank = ranks[i];//順位
        var mjPoint;//最終ポイント
        var player = plList[i];//プレイヤー名

        mjPoint = ((handPtList[i] - returnPt) / 10);//最終ポイント
        mjList['originPt'] = mjPoint;
        mjList['rank'] = rank;
        mjList['player'] = player;
        pointMjList.push(mjList);//最終ポイントをリストに格納
      }
      return pointMjList;
    },

      //プレイヤー選択の重複チェック(true:重複あり)
      checkPlayerValid: function(selectPlList) {
        var validFlag = false;

        for(var i=0; i < (selectPlList.length - 1); i++) {
          for(var j=i+1; j < selectPlList.length; j++) {
            if(selectPlList[i] === selectPlList[j]){
                //i人目とj人目が同じなら重複フラグをtrue
                validFlag = true;
            }
          }
          if(validFlag) {
            return validFlag;
          }
        }
        return validFlag;
      }
    }

    //配列の重複チェック
    function checkListValid(checkList) {
      var validFlag = false;

      for(var i=0; i < (checkList.length - 1); i++) {
        for(var j=i+1; j < checkList.length; j++) {
          if(checkList[i] === checkList[j]){
              //i人目とj人目が同じなら重複フラグをtrue
              validFlag = true;
          }
        }
        if(validFlag) {
          return validFlag;
        }
      }
      return validFlag;
    }
})