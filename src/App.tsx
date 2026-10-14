import { useState } from 'react';
import { teams } from './teams';
import type { Team } from './teams';
import { categories } from './categories';
import type { CategoryId } from './categories';
import { TeamCard, ProjectDialog } from './components/Projects';
import type { Action, Selection } from './components/Projects';

export default function App() {
  const [query, setQuery] = useState('');
  const [selection, setSelection] = useState<Selection | null>(null);
  const [activeCategory, setActiveCategory] = useState<CategoryId | 'all' | null>(null);
  const [error, setError] = useState('');
  const normalizedQuery = query.trim().normalize('NFKC').toLocaleLowerCase('ko');
  const filtered = teams.filter(team =>
    (activeCategory === 'all' || team.category === activeCategory) &&
    (team.name + team.title + team.description).normalize('NFKC').toLocaleLowerCase('ko').includes(normalizedQuery)
  );
  const selectedCategory = categories.find(category => category.id === activeCategory);
  function selectCategory(category: CategoryId | 'all' | null) {
    setActiveCategory(category);
    setQuery('');
    setError('');
  }
  function open(team: Team, action: Action) {
    const address = action === 'ppt' ? team.pptUrl : team.projectUrl;
    if (address) {
      try {
        const url = new URL(address, window.location.href);
        if (!['http:', 'https:'].includes(url.protocol)) throw new Error('Invalid protocol');
        setError('');
        window.open(url.href, '_blank', 'noopener,noreferrer');
      } catch { setError(`${team.name}의 자료 주소를 열 수 없습니다. 등록된 주소를 확인해 주세요.`); }
      return;
    }
    setSelection({ team, action });
  }
  return <>
    <a className="skip-link" href="#category-heading">전시 분야로 바로가기</a>
    <header>
      <div className="brand">
        <span>
          ▦
        </span>
        우리의 전시회
      </div>
      <div className="tag">
        TEAM PROJECT EXHIBITION <span className="header-badge">온라인 전시관</span>
      </div>
    </header>
    <main>
      <section className="intro">
        <div>
          <div className="eyebrow">
            IDEAS COME TOGETHER
          </div>
          <h1>
            우리의 작품,<br /><em>한자리에.</em>
          </h1>
          <p>
            각 조의 아이디어와 결과물을 만나보세요.<br />
            설명 자료부터 프로젝트 링크까지, 한눈에 살펴볼 수 있어요.
          </p>
          <div className="hero-meta"><span><strong>{categories.length}</strong>개의 전시 분야</span><span><strong>{teams.length}</strong>개의 예시 프로젝트</span><span className="demo-badge">미리 보는 전시회</span></div>
        </div>
        <div className="note">
          <span className="note-label">HOW TO EXPLORE</span><strong>작품을 만나는 세 단계</strong>
          <ol><li><span>01</span>관심 있는 전시 분야 선택</li><li><span>02</span>조별 아이디어와 작품 살펴보기</li><li><span>03</span>PPT 자료와 관련 링크 열기</li></ol>
        </div>
      </section>
      <section className="category-section" aria-labelledby="category-heading">
        <div className="category-heading">
          <div><div className="eyebrow">EXPLORE BY FIELD</div><h2 id="category-heading">분야별 전시</h2></div>
          <button className="show-all" aria-pressed={activeCategory === 'all'} aria-controls="projects" onClick={() => selectCategory('all')}>전부 보기 · {teams.length} ↗</button>
        </div>
        <div className="category-grid">
          {categories.map((category, index) => <button
            key={category.id}
            className={`category-card${activeCategory === category.id ? ' selected' : ''}`}
            aria-pressed={activeCategory === category.id}
            aria-controls="projects"
            onClick={() => selectCategory(category.id)}
          >
            <div className="category-art" style={{ background: category.color }} aria-hidden="true"><span>{category.symbol}</span><small>FIELD 0{index + 1}</small><span className="selected-mark">✓</span></div>
            <div className="category-info"><strong>{category.name}</strong><span className="category-english">{category.english}</span><p>{category.description}</p><span className="category-count">{teams.filter(team => team.category === category.id).length}개 작품 <span aria-hidden="true">↗</span></span></div>
          </button>)}
        </div>
        <p className="category-hint">분야 카드를 누르면 아래에 해당 작품이 표시됩니다. 현재 조별 분류는 예시입니다.</p>
      </section>
      {activeCategory !== null ? <section id="projects" aria-labelledby="projects-heading">
        <div className="collection-top"><button className="text-button" onClick={() => selectCategory(null)}>← 분야 선택으로</button><span>EXHIBITION COLLECTION</span></div>
        <div className="toolbar">
          <h2 id="projects-heading" aria-live="polite">
            {selectedCategory?.name ?? '전부 보기'}
            <span>
              {filtered.length}개 작품
            </span>
          </h2>
          <div className="search-field"><span aria-hidden="true">⌕</span><input
            type="search"
            value={query}
            onChange={event => setQuery(event.target.value)}
            placeholder="조 이름 또는 작품 검색" aria-label="조 이름 또는 작품 검색" />{query && <button className="clear-search" aria-label="검색어 지우기" onClick={() => setQuery('')}>✕</button>}</div>
        </div>
        <p className="collection-description">{selectedCategory?.description ?? '다섯 가지 분야의 조별 아이디어를 한곳에서 만나보세요.'}</p>
        {error && <p className="resource-error" role="alert">{error}</p>}
        <div className="grid" key={activeCategory}>
          {filtered.map((team, index) => <TeamCard key={team.name} team={team} index={index} onOpen={open} />)}
          {filtered.length === 0 && <div className="empty">
            <span className="empty-icon" aria-hidden="true">⌕</span><strong>{query.trim() ? '검색 결과가 없어요.' : '아직 등록된 작품이 없어요.'}</strong><p>다른 조 이름이나 작품 이름으로 검색해 보세요.</p>{query && <button className="show-all" onClick={() => setQuery('')}>검색 초기화</button>}
          </div>}
        </div>
      </section> : <div id="projects" className="welcome-state"><span aria-hidden="true">↖</span><div><strong>어떤 아이디어가 궁금하세요?</strong><p>위의 분야 카드를 선택해 조별 작품을 만나보세요.</p></div></div>}
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
