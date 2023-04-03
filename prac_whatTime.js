function whatTimeIsIt() {
    let date = new Date()
    let str = getDate(date)
    alert(new Date());
/*
    1.
    자바스크립트에서 월(month)을 나타낼 때는 1월이 0으로 표현되고, 
    12월이 11로 표현된다는 사실에 유의해야 한다.

    2.
    UTC(협정 세계시: Coordinated Universal Time)는 
    GMT(그리니치 평균시: Greenwich Mean Time)로 불리기도 하는데 
    UTC와 GMT는 초의 소숫점 단위에서만 차이가 나기 때문에 일상에서는 혼용되어 사용된다.
    기술적인 표기에서는 UTC가 사용된다.

    2-1.
    KST(Korea Standard Time)는 UTC/GMT에 9시간을 더한 시간이다. 
    즉, KST는 UTC/GMT보다 9시간이 빠르다.
    예를 들어, UTC 00:00 AM은 KST 09:00 AM이다.

    3-1.
    new Date() : 인수를 전달하지 않으면 현재 날짜와 시간을 가지는 인스턴스를 반환한다.
    3-2.
    new Date(milliseconds) : 인수로 전달된 밀리초만큼 경과한 날짜와 시간을 가지는 인스턴스 반환한다.
    3-3.
    new Date(dateString) : 날짜와 시간을 나타내는 문자열을 전달하면 지정된 날짜와 시간을 가지는 인스턴스를 반환한다.
    *인수는 Date.parse 메소그에 의해 해석 가능한 형식
    *Ex) let date = new Date('May 16, 2023 18:44:23');
*/
}
