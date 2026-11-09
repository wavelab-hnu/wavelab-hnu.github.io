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

## 미니게임 랭킹 (Fun Zone 탭)

`play.html`의 Make It Rain 게임(구 Rain 10, 물방울 170개) 랭킹은 Supabase 프로젝트 `wavelab`의 `rain10_scores` 표에 저장됩니다.
방문자는 기록을 **보기·추가**만 할 수 있고, 수정·삭제는 Supabase 화면(Table Editor)에서만 가능합니다.
이상한 기록은 Supabase → Table Editor → `rain10_scores`에서 해당 줄을 지우면 됩니다.

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
