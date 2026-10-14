import { useEffect, useRef, useState } from 'react';
import type { CSSProperties } from 'react';
import type { Team } from '../teams';
import { categories } from '../categories';
export type Action = 'ppt' | 'link';
export type Selection = { team: Team; action: Action };
export function TeamCard({ team, index, onOpen }: { team: Team; index: number; onOpen: (team: Team, action: Action) => void }) {
  const colors = { '--bg': team.bg, '--ink': team.ink } as CSSProperties;
  return <article className="card" style={{ '--enter-delay': `${Math.min(index, 8) * 65}ms` } as CSSProperties}>
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
        {categories.find(category => category.id === team.category)?.name}
      </div>
      <h3>
        {team.title}
      </h3>
      <p className="desc">
        {team.description}
      </p>
      <div className="resource-status">{team.pptUrl.trim() ? '● 발표 자료 연결됨' : '○ 예시 발표 자료'} · {team.projectUrl.trim() ? '링크 연결됨' : '링크 준비 중'}</div>
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

export function ProjectDialog({ selection, onClose }: { selection: Selection; onClose: () => void }) {
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
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    element?.showModal();
    return () => { element?.close(); document.body.style.overflow = previous; };
  }, []);
  return <dialog ref={dialog} aria-labelledby="modal-title" onKeyDown={event => {
    if (action !== 'ppt') return;
    if (event.key === 'ArrowRight') { event.preventDefault(); setPage(p => Math.min(slides.length - 1, p + 1)); }
    if (event.key === 'ArrowLeft') { event.preventDefault(); setPage(p => Math.max(0, p - 1)); }
  }} onCancel={onClose} onClick={event => {
    if (event.target !== event.currentTarget)
      return;
    const bounds = event.currentTarget.getBoundingClientRect();
    if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom)
      onClose();
  }}>
    <div className="modal-top">
      <div>
      <div className="eyebrow">{action === 'ppt' ? 'PROJECT PRESENTATION' : 'PROJECT LINK'}</div>
      <h2 id="modal-title">
        {team.name} · {team.title}
      </h2>
      </div>
      <button className="close" aria-label="닫기" onClick={onClose}>✕</button>
    </div>
    {action === 'ppt' ? <>
      <div className="slide" key={page}>
        <span className="slide-number" aria-hidden="true">0{page + 1}</span>
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
      <div className="slide-progress" aria-hidden="true">{slides.map((slide, index) => <span key={slide.title} className={index === page ? 'current' : ''} />)}</div>
      <p className="dialog-hint">
        실제 PPT 연결 전의 예시 자료입니다. ← → 키로 이동 · Esc로 닫기
      </p>
    </> : <div className="placeholder">아직 관련 링크가 등록되지 않았어요.<br />나중에 이 조의 웹사이트, 영상 또는 결과물 링크를 연결할 수 있습니다.</div>}
  </dialog>;
}

