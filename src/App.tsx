import { useEffect, useRef, useState } from 'react';
import type { CSSProperties } from 'react';
import { teams } from './teams';
import type { Team } from './teams';

type Action = 'ppt' | 'link';
type Selection = { team: Team; action: Action };

function TeamCard({ team, onOpen }: { team: Team; onOpen: (team: Team, action: Action) => void }) {
  const colors = { '--bg': team.bg, '--ink': team.ink } as CSSProperties;
  return <article className="card">
    <div className="visual" style={colors}>
      <span className="number">
        {team.name} PROJECT
      </span>
      <div className="shape" aria-hidden="true">
        {team.shape}
      </div>
    </div>
    <div className="body">
      <div className="category">
        {team.category}
      </div>
      <h3>
        {team.title}
      </h3>
      <p className="desc">
        {team.description}
      </p>
      <div className="buttons">
        <button
          className="ppt"
          onClick={() => onOpen(team, 'ppt')}>▤ 설명 PPT 보기</button>
        <button
          className="link"
          onClick={() => onOpen(team, 'link')}>↗ 관련 링크</button>
      </div>
    </div>
  </article>;
}

function ProjectDialog({ selection, onClose }: { selection: Selection; onClose: () => void }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const [page, setPage] = useState(0);
  const { team, action } = selection;
  const slides = [
    { title: '프로젝트 소개', body: team.description },
    { title: '아이디어와 제작 과정', body: '이 페이지에 작품의 목적, 주요 기능, 제작 과정을 넣어 주세요.' },
    { title: '결과물과 기대 효과', body: '작품 사진과 완성된 결과, 기대 효과를 소개해 주세요.' },
  ];
  useEffect(() => {
    const element = dialog.current;
    element?.showModal();
    return () => element?.close();
  }, []);
  return <dialog ref={dialog} aria-labelledby="modal-title" onCancel={onClose} onClick={event => {
    if (event.target !== event.currentTarget)
      return;
    const bounds = event.currentTarget.getBoundingClientRect();
    if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom)
      onClose();
  }}>
    <div className="modal-top">
      <h2 id="modal-title">
        {team.name} · {team.title}
      </h2>
      <button className="close" aria-label="닫기" onClick={onClose}>✕</button>
    </div>
    {action === 'ppt' ? <>
      <div className="slide">
        <div className="eyebrow">
          {team.name} · 예시 설명 자료
        </div>
        <h3>
          {slides[page].title}
        </h3>
        <p>
          {slides[page].body}
        </p>
      </div>
      <div className="pager">
        <button
          disabled={page === 0}
          onClick={() => setPage(p => Math.max(0, p - 1))}>
          ← 이전
        </button>
        <span aria-live="polite">
          {page + 1} / {slides.length}
        </span>
        <button
          disabled={page === slides.length - 1}
          onClick={() => setPage(p => Math.min(slides.length - 1, p + 1))}>
          다음 →
        </button>
      </div>
      <p style={{ fontSize: 11 }}>
        실제 PPT 연결 전 보여주는 예시입니다.
      </p>
    </> : <div className="placeholder">아직 관련 링크가 등록되지 않았어요.<br />나중에 이 조의 웹사이트, 영상 또는 결과물 링크를 연결할 수 있습니다.</div>}
  </dialog>;
}

export default function App() {
  const [query, setQuery] = useState('');
  const [selection, setSelection] = useState<Selection | null>(null);
  const filtered = teams.filter(team => (team.name + team.title + team.description).includes(query.trim()));
  function open(team: Team, action: Action) {
    const address = action === 'ppt' ? team.pptUrl : team.projectUrl;
    if (address) {
      try {
        const url = new URL(address, window.location.href);
        if (url.protocol === 'http:' || url.protocol === 'https:') window.open(url.href, '_blank', 'noopener,noreferrer');
      } catch { /* 잘못된 주소는 열지 않습니다. */ }
      return;
    }
    setSelection({ team, action });
  }
  return <>
    <header>
      <div className="brand">
        <span>
          ▦
        </span>
        우리의 전시회
      </div>
      <div className="tag">
        TEAM PROJECT EXHIBITION · 기본 틀
      </div>
    </header>
    <main>
      <section className="intro">
        <div>
          <div className="eyebrow">
            IDEAS COME TOGETHER
          </div>
          <h1>
            우리의 작품, 한자리에.
          </h1>
          <p>
            각 조의 아이디어와 결과물을 만나보세요.<br />
            설명 자료부터 프로젝트 링크까지, 한눈에 살펴볼 수 있어요.
          </p>
        </div>
        <div className="note">
          👋 전시회 관람 안내
          <br />
          관심 있는 작품의 버튼을 눌러
          <br />
          설명 자료와 관련 링크를 확인하세요.
        </div>
      </section>
      <section>
        <div className="toolbar">
          <h2>
            조별 작품
            <span>
              {filtered.length}개 작품
            </span>
          </h2>
          <input
            type="search"
            value={query}
            onChange={event => setQuery(event.target.value)}
            placeholder="조 이름 또는 작품 검색" aria-label="조 이름 또는 작품 검색" />
        </div>
        <div className="grid">
          {filtered.map(team => <TeamCard key={team.name} team={team} onOpen={open} />)}
          {filtered.length === 0 && <div className="empty">
            검색한 작품이 없습니다.
          </div>}
        </div>
      </section>
      <footer>
        <span>
          우리의 전시회 · 함께 만든 아이디어를 공유하는 공간
        </span>
        <span>
          현재 작품과 자료는 예시입니다.
        </span>
      </footer>
    </main>
    {
      selection && <ProjectDialog selection={selection}
        onClose={() => setSelection(null)} />
    }
  </>;
}
