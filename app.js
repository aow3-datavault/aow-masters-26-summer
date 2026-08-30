const translations = {
  ru: {
    navigationLabel: 'Навигация по странице', languageLabel: 'Язык', navBracket: 'Сетка', navRanking: 'Кланы', mainStage: 'Основной этап', bracketTitle: 'Турнирная сетка', bracketLabel: 'Турнирная сетка. На мобильном листайте вправо между стадиями.', bracketHint: 'Листайте вправо между стадиями плей-офф', rankingTitle: 'Клановый рейтинг', rankingNote: 'В зачёт идут три лучших результата каждого клана.', pointsSystem: 'Система очков', pointsTitle: 'Сколько очков приносят клану игроки?', pointsFootnote: 'Отборочный этап не приносит клановых очков.', footer: "Art of War Masters '26 Summer · Community tournament", waiting: 'Ожидается', rankingHeaders: ['#', 'Клан', 'Лучшие представители', 'Очки'], rounds: { '1/16 финала': '1/16 финала', '1/8 финала': '1/8 финала', '1/4 финала': '1/4 финала', 'Полуфинал': 'Полуфинал', 'Финал': 'Финал', 'Матч за 3-е место': 'Матч за 3-е место' }, points: { '1-е место': '1-е место', '2-е место': '2-е место', '3-е место': '3-е место', '4-е место': '4-е место', 'Вылет в 1/4': 'Вылет в 1/4', 'Вылет в 1/8': 'Вылет в 1/8', 'Вылет в 1/16': 'Вылет в 1/16' }, results: { technicalLoss: 'Техническое поражение' }
  },
  en: {
    navigationLabel: 'Page navigation', languageLabel: 'Language', navBracket: 'Bracket', navRanking: 'Clans', mainStage: 'Main stage', bracketTitle: 'Tournament bracket', bracketLabel: 'Tournament bracket. On mobile, swipe right between stages.', bracketHint: 'Swipe right between playoff stages', rankingTitle: 'Clan ranking', rankingNote: 'Each clan receives points from its three best results.', pointsSystem: 'Points system', pointsTitle: 'How many points do players bring to their clan?', pointsFootnote: 'The qualifying stage awards no clan points.', footer: "Art of War Masters '26 Summer · Community tournament", waiting: 'Awaiting players', rankingHeaders: ['#', 'Clan', 'Top representatives', 'Points'], rounds: { '1/16 финала': 'Round of 32', '1/8 финала': 'Round of 16', '1/4 финала': 'Quarterfinal', 'Полуфинал': 'Semifinal', 'Финал': 'Final', 'Матч за 3-е место': 'Third-place match' }, points: { '1-е место': '1st place', '2-е место': '2nd place', '3-е место': '3rd place', '4-е место': '4th place', 'Вылет в 1/4': 'Eliminated in quarterfinal', 'Вылет в 1/8': 'Eliminated in round of 16', 'Вылет в 1/16': 'Eliminated in round of 32' }, results: { technicalLoss: 'Technical loss' }
  }
};

const iconUrl = value => `icons/${encodeURIComponent(value.replace(/\.+$/, ''))}.png`;
let language = 'ru';
let t = translations[language];

const playerMarkup = (player, score = 0, isEliminated = false) => {
  if (!player) return `<div class="player player-empty"><span class="avatar ghost-avatar"></span><span class="player-name">${t.waiting}</span><b class="player-score">0</b></div>`;
  return `<div class="player player-${player.faction}${isEliminated ? ' is-eliminated' : ''}"><img class="avatar" src="${iconUrl(player.name)}" alt="" /><span class="player-copy"><span class="player-name">${player.name}</span><span class="clan-name">${player.clan}</span></span><b class="player-score">${score}</b></div>`;
};

const participant = value => typeof value === 'number' ? tournamentData.players[value] : value;

const matchMarkup = (match, roundIndex) => {
  const isFirst = roundIndex === 0;
  const players = match ? [participant(match[0]), participant(match[1])] : [null, null];
  const result = match?.[4] || {};
  const scores = result.scores || [0, 0];
  const eliminated = result.eliminated || [false, false];
  const resultLabel = result.status === 'technicalSubstitution' ? (language === 'ru' ? 'Замена по технической причине' : 'Technical substitution') : result.status ? t.results[result.status] : '';
  const replacedPlayer = result.replacedPlayer === undefined ? null : participant(result.replacedPlayer);
  const statusLabel = resultLabel && replacedPlayer ? `${resultLabel}: ${replacedPlayer.name}` : resultLabel;
  const status = statusLabel ? `<span class="match-status">${statusLabel}</span>` : '';
  const stream = match?.[2] ? `<a class="stream-link" href="${match[2]}" target="_blank" rel="noreferrer"><span${statusLabel ? ' class="match-status"' : ''}>${statusLabel || 'LIVE'}</span>${match[3]}</a>` : '';
  const standaloneStatus = stream ? '' : status;
  return `<article class="match ${isFirst ? 'qualifying-match ' : ''}${stream ? 'has-stream' : 'no-stream'}">${playerMarkup(players[0], scores[0], eliminated[0])}${playerMarkup(players[1], scores[1], eliminated[1])}${standaloneStatus}${stream}</article>`;
};

const renderBracket = () => {
  const preliminaryStages = tournamentData.rounds.slice(0, -1).map((round, index) => `
    <section class="playoff-round playoff-round-${index}">
      <header><h3>${t.rounds[round.title]}</h3><span>${round.format}</span></header>
      <div class="playoff-matches">${round.matches.map(match => matchMarkup(match, index)).join('')}</div>
    </section>`).join('');
  const final = tournamentData.rounds.at(-1);
  const finalStage = `<section class="playoff-round playoff-round-4 final-stage"><header><h3>${t.rounds[final.title]}</h3><span>${final.format}</span></header><div class="playoff-matches">${final.matches.map(match => matchMarkup(match, 4)).join('')}</div><section class="third-place"><header><h3>${t.rounds[tournamentData.thirdPlace.title]}</h3><span>${tournamentData.thirdPlace.format}</span></header><div class="playoff-matches">${matchMarkup(null, 4)}</div></section></section>`;
  const sourceCenters = Array.from({ length: 8 }, (_, index) => 66 + index * 126);
  const quarterCenters = Array.from({ length: 4 }, (_, index) => 129 + index * 252);
  const semiCenters = [255, 759];
  const sourceLines = sourceCenters.map(y => `<path d="M 32.6 ${y} H 35.8" />`).join('');
  const quarterLines = quarterCenters.map((y, index) => `<path d="M 50.8 ${sourceCenters[index * 2]} H 52.1 V ${y} H 53.4 M 50.8 ${sourceCenters[index * 2 + 1]} H 52.1 V ${y}" />`).join('');
  const semiLines = semiCenters.map((y, index) => `<path d="M 68.4 ${quarterCenters[index * 2]} H 69.7 V ${y} H 71.1 M 68.4 ${quarterCenters[index * 2 + 1]} H 69.7 V ${y}" />`).join('');
  const finalLines = `<path d="M 86.1 ${semiCenters[0]} H 87.4 V 507 H 88.7 M 86.1 ${semiCenters[1]} H 87.4 V 507" />`;
  const lines = `<svg class="bracket-lines" viewBox="0 0 100 1020" preserveAspectRatio="none" aria-hidden="true">${sourceLines}${quarterLines}${semiLines}${finalLines}</svg>`;
  document.querySelector('#bracket-content').innerHTML = `${lines}${preliminaryStages}${finalStage}`;
};

const renderRanking = () => {
  document.querySelector('#ranking-content').innerHTML = `
    <div class="ranking-head">${t.rankingHeaders.map(header => `<span>${header}</span>`).join('')}</div>
    ${tournamentData.ranking.toSorted((a, b) => b.points - a.points).map((entry, index) => `<div class="ranking-row">
      <span class="rank">${String(index + 1).padStart(2, '0')}</span>
      <span class="clan"><img src="${iconUrl(entry.clan)}" alt="" /><b>${entry.clan}</b></span>
      <span class="representatives">${entry.players.join(' · ')}</span>
      <strong class="clan-points">${entry.points}</strong>
    </div>`).join('')}`;
  document.querySelector('#points-content').innerHTML = tournamentData.points.map(([label, value], index) => `<div class="point-row ${index === 0 ? 'winner-points' : ''}"><span>${t.points[label]}</span><strong>${value}</strong></div>`).join('');
};

const setCookie = (name, value) => document.cookie = `${name}=${value}; max-age=31536000; path=/; SameSite=Lax`;
const getCookie = name => document.cookie.split('; ').find(cookie => cookie.startsWith(`${name}=`))?.split('=')[1];

const setLanguage = value => {
  language = value;
  t = translations[language];
  document.documentElement.lang = language;
  document.querySelectorAll('[data-i18n]').forEach(element => element.textContent = t[element.dataset.i18n]);
  document.querySelectorAll('[data-i18n-aria-label]').forEach(element => element.setAttribute('aria-label', t[element.dataset.i18nAriaLabel]));
  document.querySelector('#language-select').value = language;
  renderBracket();
  renderRanking();
};

const savedLanguage = getCookie('aow-language');
const hasSavedLanguage = Boolean(savedLanguage && translations[savedLanguage]);
setLanguage(hasSavedLanguage ? savedLanguage : 'ru');
document.querySelector('#language-select').addEventListener('change', event => {
  setLanguage(event.target.value);
  setCookie('aow-language', event.target.value);
});

if (!hasSavedLanguage) {
  const dialog = document.querySelector('#language-dialog');
  dialog.hidden = false;
  dialog.querySelectorAll('[data-language]').forEach(button => button.addEventListener('click', () => {
    setLanguage(button.dataset.language);
    setCookie('aow-language', button.dataset.language);
    dialog.hidden = true;
  }));
}
