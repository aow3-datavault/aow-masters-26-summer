const avatarUrl = (value, background = '16363a') => `https://api.dicebear.com/9.x/initials/svg?seed=${encodeURIComponent(value)}&backgroundColor=${background}&fontFamily=Arial&fontSize=38`;

const playerMarkup = player => {
  if (!player) return `<div class="player player-empty"><span class="avatar ghost-avatar"></span><span class="player-name">Ожидается</span><b class="player-score">0</b></div>`;
  return `<div class="player"><img class="avatar" src="${avatarUrl(player.name)}" alt="" /><span class="player-copy"><span class="player-name">${player.name}</span><span class="clan-name">${player.clan}</span></span><b class="player-score">0</b></div>`;
};

const matchMarkup = (match, roundIndex) => {
  const isFirst = roundIndex === 0;
  const players = match ? [tournamentData.players[match[0]], tournamentData.players[match[1]]] : [null, null];
  const stream = match?.[2] ? `<a class="stream-link" href="${match[2]}" target="_blank" rel="noreferrer"><span>LIVE</span>${match[3]}</a>` : '';
  return `<article class="match ${isFirst ? 'qualifying-match' : ''}">${playerMarkup(players[0])}${playerMarkup(players[1])}${stream}</article>`;
};

const renderBracket = () => {
  const preliminaryStages = tournamentData.rounds.slice(0, -1).map((round, index) => `
    <section class="playoff-round playoff-round-${index}">
      <header><h3>${round.title}</h3><span>${round.format}</span></header>
      <div class="playoff-matches">${round.matches.map(match => matchMarkup(match, index)).join('')}</div>
    </section>`).join('');
  const final = tournamentData.rounds.at(-1);
  const finalStage = `<section class="playoff-round playoff-round-4 final-stage"><header><h3>${final.title}</h3><span>${final.format}</span></header><div class="playoff-matches">${final.matches.map(match => matchMarkup(match, 4)).join('')}</div><section class="third-place"><header><h3>${tournamentData.thirdPlace.title}</h3><span>${tournamentData.thirdPlace.format}</span></header><div class="playoff-matches">${matchMarkup(null, 4)}</div></section></section>`;
  const sourceCenters = Array.from({ length: 8 }, (_, index) => 66 + index * 126);
  const quarterCenters = Array.from({ length: 4 }, (_, index) => 129 + index * 252);
  const semiCenters = [255, 759];
  const sourceLines = sourceCenters.map(y => `<path d="M 32 ${y} H 36" />`).join('');
  const quarterLines = quarterCenters.map((y, index) => `<path d="M 51 ${sourceCenters[index * 2]} H 52 V ${y} H 54 M 51 ${sourceCenters[index * 2 + 1]} H 52" />`).join('');
  const semiLines = semiCenters.map((y, index) => `<path d="M 68 ${quarterCenters[index * 2]} H 69 V ${y} H 71 M 68 ${quarterCenters[index * 2 + 1]} H 69" />`).join('');
  const finalLines = `<path d="M 86 ${semiCenters[0]} H 87 V 507 H 89 M 86 ${semiCenters[1]} H 87" /><path class="third-line" d="M 94 577 V 710" />`;
  const lines = `<svg class="bracket-lines" viewBox="0 0 100 1020" preserveAspectRatio="none" aria-hidden="true">${sourceLines}${quarterLines}${semiLines}${finalLines}</svg>`;
  document.querySelector('#bracket-content').innerHTML = `${lines}${preliminaryStages}${finalStage}`;
};

const renderRanking = () => {
  document.querySelector('#ranking-content').innerHTML = `
    <div class="ranking-head"><span>#</span><span>Клан</span><span>Лучшие представители</span><span>Очки</span></div>
    ${tournamentData.ranking.map((entry, index) => `<div class="ranking-row">
      <span class="rank">${String(index + 1).padStart(2, '0')}</span>
      <span class="clan"><img src="${avatarUrl(entry.clan, '51391a')}" alt="" /><b>${entry.clan}</b></span>
      <span class="representatives">${entry.players.join(' · ')}</span>
      <strong class="clan-points">${entry.points}</strong>
    </div>`).join('')}`;
  document.querySelector('#points-content').innerHTML = tournamentData.points.map(([label, value], index) => `<div class="point-row ${index === 0 ? 'winner-points' : ''}"><span>${label}</span><strong>${value}</strong></div>`).join('');
};

renderBracket();
renderRanking();
