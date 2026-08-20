const tournamentData = {
  players: [
    ['Northwind', 'VANGUARD'], ['Maximuss', 'VANGUARD'], ['DarkEagle', 'IRON LEGION'], ['Kira', 'IRON LEGION'],
    ['Nexus', 'ECLIPSE'], ['Raven', 'ECLIPSE'], ['FrostByte', 'NORTH'], ['Vortex', 'NORTH'],
    ['Dominator', 'TITANS'], ['Cobra', 'TITANS'], ['Phantom', 'RED LINE'], ['Alisa', 'RED LINE'],
    ['SteelRain', 'WOLFPACK'], ['Vector', 'WOLFPACK'], ['ArcticFox', 'POLARIS'], ['Raptor', 'POLARIS'],
    ['Solaris', 'SUNSTRIKE'], ['Titan', 'SUNSTRIKE'], ['Mirage', 'MERCENARY'], ['Crusader', 'MERCENARY'],
    ['Nightmare', 'BLACKOUT'], ['Havoc', 'BLACKOUT'], ['Fury', 'STORM'], ['Blitz', 'STORM'],
    ['Helios', 'ORBITAL'], ['Nomad', 'ORBITAL'], ['Berserk', 'RAIDERS'], ['Viper', 'RAIDERS'],
    ['Sentinel', 'AEGIS'], ['Astra', 'AEGIS'], ['Ghost', 'SHADOW'], ['Nova', 'SHADOW']
  ].map(([name, clan]) => ({ name, clan })),
  rounds: [
    { title: '1/16 финала', format: 'BO1', matches: [
      [0, 1, 'https://twitch.tv/', 'Stream One'], [2, 3, 'https://twitch.tv/', 'Stream Two'],
      [4, 5, 'https://youtube.com/', 'Stream Three'], [6, 7, 'https://twitch.tv/', 'Stream Four'],
      [8, 9, 'https://youtube.com/', 'Stream Five'], [10, 11, 'https://twitch.tv/', 'Stream Six'],
      [12, 13, 'https://youtube.com/', 'Stream Seven'], [14, 15, 'https://twitch.tv/', 'Stream Eight'],
      [16, 17, 'https://youtube.com/', 'Stream Nine'], [18, 19, 'https://twitch.tv/', 'Stream Ten'],
      [20, 21, 'https://youtube.com/', 'Stream Eleven'], [22, 23, 'https://twitch.tv/', 'Stream Twelve'],
      [24, 25, 'https://youtube.com/', 'Stream Thirteen'], [26, 27, 'https://twitch.tv/', 'Stream Fourteen'],
      [28, 29, 'https://youtube.com/', 'Stream Fifteen'], [30, 31, 'https://twitch.tv/', 'Stream Sixteen']
    ] },
    { title: '1/8 финала', format: 'BO1', matches: Array(8).fill(null) },
    { title: '1/4 финала', format: 'BO1', matches: Array(4).fill(null) },
    { title: 'Полуфинал', format: 'BO3', matches: Array(2).fill(null) },
    { title: 'Финал', format: 'BO3', matches: [null] }
  ],
  thirdPlace: { title: 'Матч за 3-е место', format: 'BO1' },
  ranking: [
    ['VANGUARD', 0, ['Northwind', 'Maximuss']], ['IRON LEGION', 0, ['DarkEagle', 'Kira']],
    ['ECLIPSE', 0, ['Nexus', 'Raven']], ['NORTH', 0, ['FrostByte', 'Vortex']],
    ['TITANS', 0, ['Dominator', 'Cobra']], ['RED LINE', 0, ['Phantom', 'Alisa']],
    ['WOLFPACK', 0, ['SteelRain', 'Vector']], ['POLARIS', 0, ['ArcticFox', 'Raptor']]
  ].map(([clan, points, players]) => ({ clan, points, players })),
  points: [
    ['1-е место', 16], ['2-е место', 12], ['3-е место', 9], ['4-е место', 7],
    ['Вылет в 1/4', 4], ['Вылет в 1/8', 2], ['Вылет в 1/16', 1]
  ]
};
