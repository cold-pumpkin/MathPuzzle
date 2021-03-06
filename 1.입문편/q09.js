/*
 * Q09. 남녀 불균형

    남자 20명, 여자 10명이 도착하였을 때, 어느 지점에서 그룹을 나누더라도
    두 그룹 중 한쪽은 남녀 수가 달라지는 도착 순서가 몇 가지 있는지 구해 보세요.
    
    
    Sol. 남녀를 순서대로 배치하여 같은 수가 되는 경우는 세지 않고 넘어가자.
        -> 20x10의 바둑판에서 여자가 오면 위로, 남자가 오면 오른쪽으로 이동.
            왼쪽 아래서 진행하며 남녀가 같은 수가 되는 지점과
            오른쪽 위에서 진행하며 남녀가 같은 수가 되는 지점을 제외하고
            (ex. (1,1), (2,2)...(10,10), (11,1), (12,2)...(19,9) 제외)
            (0, 0)에서 (20, 10)까지 도달하는 경우의 수 구하기.
*/

var boys = 20;
var girls = 10;
boys += 1;
girls += 1;
// 다차원 배열 생성 & 0으로 초기화
var ary = new Array(girls);
for(var i=0; i < girls; i++) {
    ary[i] = new Array(boys).fill(0);
}

ary[0][0] = 1;  // 처음 그룹 나누는 경우의 수(=1)는 [기존 += 이전 값] 이므로 원점을 1로 초기화

// 경우의 수 세기
for(var i = 0; i < girls; i++) {
    for(var j = 0; j < boys; j++) {
        if( (i != j) && (boys - j != girls - i) ) {
            if(j > 0) 
                ary[i][j] += ary[i][j-1];
            if(i > 0)
                ary[i][j] += ary[i-1][j];
        }
    }
}
// (남19, 여10) 지점까지의 경우의 수 + (남20, 여9) 지점까지의 경우의 수
// -> ary[9][18] + ary[8][19]
console.log(ary[girls - 2][boys - 1] + ary[girls - 1][boys - 2]);