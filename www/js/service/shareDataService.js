//データ保持用のサービス
onsModule.factory('ShareDataService', function() {
  var plList = [{plId:"1",plName:"プレイヤー1"},{plId:"2",plName:"プレイヤー2"},{plId:"3",plName:"プレイヤー3"},{plId:"4",plName:"プレイヤー4"},{plId:"5",plName:"プレイヤー5"}];
  var pointList = [];//全得点リスト
  var keyPlayer = 'player';
  var keyPoint = 'point';

  return {
    //プレイヤー一覧を返す
    getPlList: function() {
      return plList;
    },

    //ポイント一覧を返す
    getPtList: function() {
      return pointList;
    },

    //プレイヤー名を返す（引数:プレイヤーID）
    getPlName(plId) {
      for(var i=0;i<plList.length;i++) {
        player = plList[i];
        if(player['plId'] == plId) {
          return player['plName'];
        }
      }
      return null;
    },

    //点棒一覧とプレイヤー選択から得点リストを作成する
    createPointList: function(resultList) {
      var thisResultList = [];//本ゲームの得点リスト
      for(var i=0; i < resultList.length; i++) {
        var thisGamePointList = {};
        //順番にプレイヤー名、ポイントを格納
        thisGamePointList[keyPlayer] = resultList[i].player;
        thisGamePointList[keyPoint] = resultList[i].originPt;
        thisResultList.push(thisGamePointList);
      }
      pointList.push(thisResultList);//全得点リストに本ゲーム得点リストを格納
    },

    //プレイヤー名を更新し、結果コードを返す(0:Success, -1:Fail)
    changeNameData: function(index,name) {
      if (plList.indexOf(name) == -1) {
        //既に登録済の名前でないかチェックし更新
        plList[index] = name;
        return 0;
      } else {
        //重複名の場合エラーコードとして-1を返す
        return -1;
      }
    }
  }
})