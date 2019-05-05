// 깊이 우선 탐색
var count = 3;

function move(log) {
    // 맨 처음의 위치를 포함해 N+1 번째 위치이면 1 리턴하면서 종료
    // (결과적으로 cnt가 1 증가)
    if(log.length == count+1)   // 13번째는 리턴
        return 1;
    
    var cnt = 0;
    // 상/하/좌/우로 이동하는 모든 경우에 대해 재귀함수 호출
    [[0, 1], [0, -1], [1, 0], [-1, 0]].forEach(function(el) {
        // 경로 저장한 배열의 가장 최근 위치에서 전후 좌우로 이동하는 경우 탐색    
        var next_pos = [log[log.length-1][0] + el[0], log[log.length-1][1] + el[1]];
        //console.log(next_pos);

        // 이미 지나간 장소가 아니면 경로에 삽입 후 다시 이동
        var flag = false;
        log.forEach(function(pos) {
            if(pos[0] == next_pos[0] && pos[1] == next_pos[1]) 
                flag = true;
        });
        if(!flag) {
            log.push(next_pos);
            //console.log(log);
            cnt += move(log);
            log.pop();
            return cnt;
        }
    });
    return cnt;
}

console.log( move([[0, 0]]) );
