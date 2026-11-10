# WAVE Lab 홈페이지

한남대학교 건설환경공학과 지능형 수자원 연구실 (Water Analytics for Variability & Extremes Laboratory)

## 내용 수정하기

대부분의 내용은 **`assets/js/data.js`** 한 파일에서 고칩니다.

| 바꾸고 싶은 것 | 위치 |
|---|---|
| 구성원 추가 | `data.js` → `MEMBERS` (예시 줄의 `//` 지우고 채우기) |
| 논문 추가 | `data.js` → `PUBS` 맨 위에 한 줄 추가 (`featured: true` 넣으면 홈에도 표시) |
| 뉴스 추가 | `data.js` → `NEWS` 맨 위에 추가 |
| 과제 추가 | `data.js` → `PROJECTS` |
| 연구실 호수 | `data.js` → `LAB.office` |
| Links 탭 사이트 링크 | `data.js` → `LINKS` (해당 섹션 `items`에 한 줄 추가) |
| 연구 분야 설명 | `research.html` |
| 교수 약력 | `people.html` |

사진은 `assets/img/people/` 폴더에 넣고 경로를 `photo: "assets/img/people/파일명.jpg"`처럼 적으면 됩니다.

## 한국어 버전 (English | 한국어)

기본은 영어이고, 오른쪽 위 **English | 한국어**를 누르면 같은 페이지가 한국어로 바뀝니다(선택은 브라우저에 기억됨).
주소 뒤에 `?lang=ko`를 붙이면 바로 한국어로 열립니다(예: `https://wavelab-hnu.github.io/?lang=ko`).

- 페이지 글: 영어 태그에 `data-ko="한국어"`를 붙이면 한국어 모드에서 그 글로 바뀝니다.
  한쪽 언어에서만 보일 문단은 `data-only="en"` / `data-only="ko"`를 붙입니다.
- `data.js`: 항목에 `textKo`, `titleKo`, `nameKo`, `descKo`, `roleKo` 처럼 이름 뒤에 `Ko`를 붙인 칸을 추가하면 한국어 모드에서 그 값을 씁니다(없으면 영어 그대로).
- 논문 제목·논문 요약(Study)은 영어 그대로 둡니다.

## 미니게임 랭킹 (Fun Zone 탭)

`play.html`의 Make It Rain 게임(구 Rain 10, 물방울 170개) 랭킹은 Supabase 프로젝트 `wavelab`의 `rain10_scores` 표에 저장됩니다.
방문자는 기록을 **보기·추가**만 할 수 있고, 수정·삭제는 Supabase 화면(Table Editor)에서만 가능합니다.
이상한 기록은 Supabase → Table Editor → `rain10_scores`에서 해당 줄을 지우면 됩니다.

게임 배경음악과 효과음은 모두 이 게임용으로 새로 만든 것이며, 음악 파일 없이 `play.html` 코드가 직접 연주합니다(8비트 오락실 스타일).
멜로디는 `play.html`의 `BARS` 목록(한 마디에 8칸: 음 이름, `-` 늘이기, `.` 쉼표)에서 고칠 수 있습니다.

## Study 탭 (매일 논문 한 편)

`study.html`은 `assets/data/study.json`의 글을 게시판 형태로 보여줍니다(그림은 `assets/img/study/`).
매일 자동으로 논문 한 편을 골라 요약해 올리며, 절차는 `tools/STUDY_ROUTINE.md`에 있습니다.
그림을 쓸 수 있도록 CC BY / CC BY-SA 오픈액세스 논문만 고르고, 그림 아래에 출처를 표시합니다.
글을 지우려면 `study.json`에서 해당 항목을, `assets/img/study/`에서 같은 이름의 그림을 지우면 됩니다.
수정 후 `python tools/study_tool.py check`로 형식을 확인할 수 있습니다.

Study 안의 **Our Papers** 탭(`study.html#our`)은 연구실 논문(국제 31편 + 국내 15편) 요약이며 `assets/data/our-papers.json`에 있습니다.
같은 형식이고(`id`는 `our-`로 시작, `date` 없음), 그림은 `assets/img/study/our-*.webp`입니다.
CC 논문은 라이선스대로, 구독형 논문은 저자 재사용 권한으로 저자 PDF에서 잘라 넣고 출판사 저작권을 표시했습니다.
새 논문이 나오면 같은 형식으로 항목을 추가하면 됩니다(자동 일일 작업은 이 파일을 건드리지 않습니다).

## 방문자 수 (모든 페이지 하단)

같은 Supabase 프로젝트의 `site_visits` 표에 날짜별(한국 시간)로 저장됩니다.
한 사람이 브라우저를 켜둔 동안 여러 페이지를 봐도 1번만 셉니다. 내 컴퓨터에서 미리보기할 때는 세지 않습니다.
방문자는 `visit` 함수로 숫자를 올리고 읽기만 할 수 있습니다. 숫자를 고치려면 Table Editor → `site_visits`에서 수정합니다.
처음 설정에 쓴 SQL은 `supabase/site_visits.sql`에 있습니다.

## 미리보기

`index.html`을 더블클릭하면 브라우저에서 바로 열립니다.

## 공개하기 (GitHub Pages, 무료)

1. GitHub에서 새 저장소 만들기 (예: `wavelab`)
2. 이 폴더의 파일을 모두 업로드
3. Settings → Pages → Branch: `main` / `(root)` 선택 후 저장
4. 몇 분 뒤 `https://<아이디>.github.io/wavelab/` 에서 접속 가능
