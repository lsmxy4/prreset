# 조별 전시회

React + TypeScript + Vite로 만든 전시회 기본 틀입니다.

## 실행

```sh
npm install
npm run dev
```

`npm run build`는 TypeScript 검사 후 `dist/`에 배포 파일을 생성합니다.

## 자료 변경

`src/teams.ts`에서 조 이름, 작품 설명, `pptUrl`, `projectUrl`을 수정하세요.
PPT 버튼에는 PPT 파일 경로나 Google Slides, PDF 등의 공유 주소를 넣을 수 있습니다.
PPT 파일을 브라우저에서 직접 슬라이드로 보여주려면 온라인 발표 자료의 보기 주소를 사용하세요.
주소가 비어 있으면 예시 슬라이드 또는 미등록 안내를 표시합니다.
