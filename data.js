const tournamentData = {
  players: [
    ['Hero Dominator', 'Call Me God', 'confederation'], ['Dr__Ahmad', 'VIP999999999999999', 'resistance'],
    ['VT_TaptapBoi C', '-V.E.R.T.E.X-', 'confederation'], ['White Pigeon', 'Utility Pigeon', 'resistance'],
    ['Supreme Deadass', '!SUPREME_WARRIORS!', 'confederation'], ['DAUD_77', 'BENZIN', 'resistance'],
    ['General-Hassan.AS7', '120 FPS', 'confederation'], ['Yamito012 R', '-True Freedom-', 'resistance'],
    ['Koroleva Zadrot', 'Forge of Souls', 'confederation'], ['Amaan6', 'The lion heart', 'resistance'],
    ['VANGUARD TEAM', 'Peace for everyone', 'confederation'], ['Real Cat God', 'yuanshen', 'resistance'],
    ['Mosina', 'KTO_ESLI_NE_MI', 'confederation'], ['Monirul', 'R-U-SS-K-I-E', 'resistance'],
    ['Tairitsu', 'Tianya Alliance', 'confederation'], ['kinghall', '', 'resistance'],
    ['!VOlCAN!', '-!-SUNRISE-!-', 'confederation'], ['colver_1672142468', 'Russian princes', 'resistance'],
    ['Guten tag', '-BATKEN-', 'confederation'], ['PiscesBrain YT', '_.--! Q.A.D !--._', 'resistance'],
    ['_D.A.R.K_HUNTER', 'RUSSIAN STEEL.', 'confederation'], ['VOIN--01', 'PARNI IZ STALI', 'resistance'],
    ['ALTAIR_SON_OF_DARK', '_THE_KONFA_', 'confederation'], ["!'DOOM-BRINGER'!", '-B.E.A.S.T-', 'resistance'],
    ['condantoico', 'sakasi997', 'confederation'], ['Vincenzo_1999', 'FREEDOM.113', 'resistance'],
    ['DEVIL_MAY_CRY', '_RaKi-Na-KoNfE_', 'confederation'], ['Hexblood !!!! ha', '-VERDIKT-.', 'resistance'],
    ['DuskWell-Shark', '-EAGLES-', 'confederation'], ['-_- pathmaker', 'W.O.R.L.D.C.O.R.P.', 'resistance'],
    ['for a good world', 'HELLAS ELITE', 'confederation'], ['ACCPHU.RELAXWITHME', 'CAOTHU-!-CAOCAOTHU', 'resistance']
  ].map(([name, clan, faction]) => ({ name, clan, faction })),
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
    ['Call Me God', 'Hero Dominator'], ['-VERDIKT-.', 'Hexblood !!!! ha'],
    ['-V.E.R.T.E.X-', 'VT_TaptapBoi C'], ['The lion heart', 'Amaan6'],
    ['!SUPREME_WARRIORS!', 'Supreme Deadass'], ['_.--! Q.A.D !--._', 'PiscesBrain YT'],
    ['120 FPS', 'General-Hassan.AS7'], ['R-U-SS-K-I-E', 'Monirul'],
    ['Forge of Souls', 'Koroleva Zadrot'], ['Utility Pigeon', 'White Pigeon'],
    ['Peace for everyone', 'VANGUARD TEAM'], ['-B.E.A.S.T-', "!'DOOM-BRINGER'!"],
    ['KTO_ESLI_NE_MI', 'Mosina'], ['Russian princes', 'colver_1672142468'],
    ['Tianya Alliance', 'Tairitsu'], ['VIP999999999999999', 'Dr__Ahmad'],
    ['-!-SUNRISE-!-', '!VOlCAN!'], ['BENZIN', 'DAUD_77'],
    ['-BATKEN-', 'Guten tag'], ['FREEDOM.113', 'Vincenzo_1999'],
    ['RUSSIAN STEEL.', '_D.A.R.K_HUNTER'], ['CAOTHU-!-CAOCAOTHU', 'ACCPHU.RELAXWITHME'],
    ['_THE_KONFA_', 'ALTAIR_SON_OF_DARK'], ['W.O.R.L.D.C.O.R.P.', '-_- pathmaker'],
    ['sakasi997', 'condantoico'], ['-True Freedom-', 'Yamito012 R'],
    ['_RaKi-Na-KoNfE_', 'DEVIL_MAY_CRY'],
    ['-EAGLES-', 'DuskWell-Shark'], ['PARNI IZ STALI', 'VOIN--01'],
    ['HELLAS ELITE', 'for a good world'], ['yuanshen', 'Real Cat God']
  ].map(([clan, player]) => ({ clan, points: 0, players: [player] })),
  points: [
    ['1-е место', 16], ['2-е место', 12], ['3-е место', 9], ['4-е место', 7],
    ['Вылет в 1/4', 4], ['Вылет в 1/8', 2], ['Вылет в 1/16', 1]
  ]
};
