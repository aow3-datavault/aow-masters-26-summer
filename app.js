const avatarUrl = (value, background = '16363a') => `https://api.dicebear.com/9.x/initials/svg?seed=${encodeURIComponent(value)}&backgroundColor=${background}&fontFamily=Arial&fontSize=38`;

const playerMarkup = (player, score = '') => {
  if (!player) return `<div class="player player-empty"><span class="avatar ghost-avatar"></span><span class="player-name">Ожидается</span><span class="score"></span></div>`;
  return `<div class="player"><img class="avatar" src="${avatarUrl(player.name)}" alt="" /><span class="player-copy"><span class="player-name">${player.name}</span><span class="clan-name">${player.clan}</span></span><span class="score">${score}</span></div>`;
};

const matchMarkup = (match, roundIndex) => {
  const isFirst = roundIndex === 0;
  const players = match ? [tournamentData.players[match[0]], tournamentData.players[match[1]]] : [null, null];
  const stream = match?.[2] ? `<a class="stream-link" href="${match[2]}" target="_blank" rel="noreferrer"><span>LIVE</span>${match[3]}</a>` : '';
  return `<article class="match ${isFirst ? 'first-round-match' : ''}">${playerMarkup(players[0])}${playerMarkup(players[1])}${stream}</article>`;
};

const renderBracket = () => {
  const stages = tournamentData.rounds.map((round, index) => `
    <section class="round round-${index}">
      <header><h3>${round.title}</h3><span>${round.format}</span></header>
      <div class="matches">${round.matches.map(match => matchMarkup(match, index)).join('')}</div>
    </section>`).join('');
  const third = `<section class="round third-place"><header><h3>${tournamentData.thirdPlace.title}</h3><span>${tournamentData.thirdPlace.format}</span></header><div class="matches">${matchMarkup(null, 4)}</div></section>`;
  document.querySelector('#bracket-content').innerHTML = `${stages}${third}`;
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
