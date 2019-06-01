4월 28일 11시 33 분

로그인 페이지를 위한 index.ejs생성, middle ware 설치, 모듈 설치, router

해야할것 : 로그인 페이지 기능 만들기 ,꾸미기, 페이지와 node 연결, 로그인 구현 , 모달윈도우 로그인창 구현 ( 틴더처럼 )

1. 메인 페이지
   1. 로그인 기능 ( 회원가입 / 로그인)
      1. 구글 ,SNS 등 로그인 가능
   2. 회원가입
      1.
2. 로그인 후 페이지
   1. 카테고리
      1. 맥주 , 사진, 운동 등등 사진 과 글로 표시
   2. 카테고리에 따른 글
      1. 사진 , 제목, 프로필, 작성자 닉네임 표시
      2. 위치기반 KM 로  필터, 최근 이름
   3. 사진 클릭
      1. 사진, 제목, 프로필 사진,참가자 목록, 시간,
   4. 글쓰기 버튼 클릭
      1. 제목, 카테고리 설정, 참가인원,  참가자 성별, 기간(달력 폼) , 내용
   5. 프로필 화면 ( 내수정 )
      1. 프로필 사진, 회원가입 기본 정보 ( 사진 ), 별점,리뷰?
      2. edit\
   6. 남이 보는 프로필 화면
      1. 닉네임, 나이대, 별점, 사유
   7. 진행중 / 진행완료 리스트보기
      1.
3. 만남 이후 로그인 했을때
   1. 리뷰, 별점주기

- 회원목록(identity);
  id(int(11) PRIMARY), email(varchar(40)), pw(varchar(40)), 별명(varchar(40)), 성별(남자,여자,그외 TINYint), 나이-범위(int), 지역(API,TEXT), 자기소개(TEXT), 별(float unsigned),사진(varchar)

  database  : 'nearbyFriends'

  CREATE TABLE identity (
      -> id INT(11) unsigned AUTO_INCREMENT NOT NULL,
      -> email VARCHAR(40) NOT NULL,
      -> password  VARCHAR(40) NOT NULL,
      -> nickname varchar(40),
      -> sex TINYINT,
      -> age INT,
      -> area TEXT,
      -> about TEXT,
      -> grade float unsigned,
      -> picture varchar(2)
      -> PRIMARY KEY(id)
      -> );

  ALTER TABLE identity ADD COLUMN (
   ->                             );

- 글테이블 (Post)
  id(int(11),PRIMARY),user_id(int(11))[조인],카테고리(char),제목(varchar),작성날짜(created_at),수정날짜(updated_at),글(text),사진(varchar),제한인원(TINYINT),참여자 성별(tinyint),기간(달력 이용,datetime),삭제여부(tinyint)
  CREATE TABLE post (
    -> id INT(11) unsigned AUTO_INCREMENT NOT NULL,
    -> UID ITN(11) unsigned NOT NULL,
    -> category VARCHAR(2),
    -> subject VARCHAR(2) NOT NULL,
    -> created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    -> updated_at DATETIME ON UPDATE CURRENT_TIMESTAMP,
    -> content TEXT,
    -> picture TEXT,
    -> limitNumOfPeople TINYINT,
    -> limitGender TINYINT,
    -> DateToMeet DATETIME ( Default 값 존재)),
    -> deletion tinyint(1)


=======
    -> time (DATETIME or TIEMSTAMP ( Default 값 존재)),
    )

- 참가자 목록
  id(int(11),PRIMARY),post_id(int(11)),UID(int(11)),

10 1
10 2
10 3
10 4
10 5
11 1
12 1

- index.html


1. identity 목록에 참여목록을 넣을경우
  - 장점 : 로그인을 하였을경우 참여예정이나 , 이미 참여한 목록들을 쉽게 가져올수있다.
  - 단점 : 참여예정에서 시작되거나 끝난목록을 구별할 경우 전체글목록을 다 찾아야한다, 글목록에서 참여자 를 찾을때 모든 아이디를 검색해야한다.
  - 해결방안 : column 을 2개 만들어서 한개는 참여목록 ( 아직 끝나지 않음 ) 나머지는 이미 끝난 참여목록을 만든다, 2번 해결방안과 같다.

2. post 에 참여자 id 를 넣을경우
  - 장점 :  글 에서 참여자의 항목을 찾을때 저장한 data 의 값만을 사용한다.
  - 단점 : 사용자 목록에서 내가 참여목록을 가져오고 싶으면 모든 글의 항목을 찾아야한다
  - 해결방안 : identity 에는 참여 post 목록( 예정, 끝 ) , post 에는 UID( 참여자 목록 ) 의 값을 각각 넣는다 ( data type = text 로 data value 는 array 로 넣는다. )
