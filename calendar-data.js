// ============================================================
// ELENCO DEGLI EVENTI
// Modifica SOLO questa sezione per cambiare gli eventi.
// data       = AAAA-MM-GG
// oraInizio  = HH:MM
// oraFine    = HH:MM
// titolo     = titolo dell'evento
// descrizione= descrizione (facoltativa)
// luogo      = luogo (facoltativo)
// ============================================================

const eventi = [
  {
    "data": "2026-10-04",
    "oraInizio": "15:30",
    "oraFine": "17:30",
    "titolo": "CANOSA CALCIO 1948 - TARANTO 2025 SSD ARL",
    "descrizione": "Giornata 7 - Incontro in trasferta",
    "luogo": "CAM COMUNALE\"S.SABINO\"ERB-AR* - CANOSA DI PUGLIA"
  },
  {
    "data": "2026-10-11",
    "oraInizio": "15:30",
    "oraFine": "17:30",
    "titolo": "TARANTO 2025 SSD ARL - UGENTO",
    "descrizione": "Giornata 8 - Incontro in casa",
    "luogo": "Stadio Erasmo Iacovone, Via Erasmo Iacovone, 9, 74121 Taranto TA"
  },
  {
    "data": "2026-10-18",
    "oraInizio": "15:30",
    "oraFine": "17:30",
    "titolo": "BRILLA CAMPI - TARANTO 2025 SSD ARL",
    "descrizione": "Giornata 9 - Incontro in trasferta",
    "luogo": "CAMPO COMUNALE \"R.TREVISI\"E.A - CAMPI SALENTINA"
  },
  {
    "data": "2026-10-25",
    "oraInizio": "14:30",
    "oraFine": "16:30",
    "titolo": "TARANTO 2025 SSD ARL - VIGOR TRANI CALCIO",
    "descrizione": "Giornata 10 - Incontro in casa",
    "luogo": "Stadio Erasmo Iacovone, Via Erasmo Iacovone, 9, 74121 Taranto TA"
  },
  {
    "data": "2026-11-01",
    "oraInizio": "14:30",
    "oraFine": "16:30",
    "titolo": "UNIONE CALCIO - TARANTO 2025 SSD ARL",
    "descrizione": "Giornata 11 - Incontro in trasferta",
    "luogo": "CAMPO COMU.\"G.VENTURA\" E.A * - BISCEGLIE"
  },
  {
    "data": "2026-11-08",
    "oraInizio": "14:30",
    "oraFine": "16:30",
    "titolo": "TARANTO 2025 SSD ARL - SQUINZANO CALCIO 1913",
    "descrizione": "Giornata 12 - Incontro in casa",
    "luogo": "Stadio Erasmo Iacovone, Via Erasmo Iacovone, 9, 74121 Taranto TA"
  },
  {
    "data": "2026-11-15",
    "oraInizio": "14:30",
    "oraFine": "16:30",
    "titolo": "GALATINA CALCIO - TARANTO 2025 SSD ARL",
    "descrizione": "Giornata 13 - Incontro in trasferta",
    "luogo": "STADIO COMUNALE \"G.SPECCHIA\" * - GALATINA"
  },
  {
    "data": "2026-11-22",
    "oraInizio": "14:30",
    "oraFine": "16:30",
    "titolo": "TARANTO 2025 SSD ARL - TAURISANO 1939",
    "descrizione": "Giornata 14 - Incontro in casa",
    "luogo": "Stadio Erasmo Iacovone, Via Erasmo Iacovone, 9, 74121 Taranto TA"
  },
  {
    "data": "2026-11-29",
    "oraInizio": "14:30",
    "oraFine": "16:30",
    "titolo": "OSTUNI CALCIO 24 - TARANTO 2025 SSD ARL",
    "descrizione": "Giornata 15 - Incontro in trasferta",
    "luogo": "CAMPO COMUNALE N.LAVENEZIANA - OSTUNI"
  },
  {
    "data": "2026-12-06",
    "oraInizio": "14:30",
    "oraFine": "16:30",
    "titolo": "TARANTO 2025 SSD ARL - ATLETICO ACQUAVIVA",
    "descrizione": "Giornata 16 - Incontro in casa",
    "luogo": "Stadio Erasmo Iacovone, Via Erasmo Iacovone, 9, 74121 Taranto TA"
  },
  {
    "data": "2026-12-13",
    "oraInizio": "14:30",
    "oraFine": "16:30",
    "titolo": "BITONTO CALCIO SSDARL - TARANTO 2025 SSD ARL",
    "descrizione": "Giornata 17 - Incontro in trasferta",
    "luogo": "CAMPO COMU\"CITTÀ DEGLI ULIVI+ - BITONTO"
  },
  {
    "data": "2026-12-20",
    "oraInizio": "14:30",
    "oraFine": "16:30",
    "titolo": "COSMANO SPORT FOGGIA - TARANTO 2025 SSD ARL",
    "descrizione": "Giornata 18 - Incontro in trasferta",
    "luogo": "EX CAMPO FIGC ER.ART.*NO PUBBL - FOGGIA"
  },
  {
    "data": "2027-01-03",
    "oraInizio": "14:30",
    "oraFine": "16:30",
    "titolo": "TARANTO 2025 SSD ARL - NUOVA SPINAZZOLA",
    "descrizione": "Giornata 19 - Incontro in casa",
    "luogo": "Stadio Erasmo Iacovone, Via Erasmo Iacovone, 9, 74121 Taranto TA"
  },
  {
    "data": "2027-01-10",
    "oraInizio": "14:30",
    "oraFine": "16:30",
    "titolo": "TARANTO 2025 SSD ARL - POLIMNIA CALCIO",
    "descrizione": "Giornata 20 - Incontro in casa",
    "luogo": "Stadio Erasmo Iacovone, Via Erasmo Iacovone, 9, 74121 Taranto TA"
  },
  {
    "data": "2027-01-14",
    "oraInizio": "14:30",
    "oraFine": "16:30",
    "titolo": "ATLETICO RACALE - TARANTO 2025 SSD ARL",
    "descrizione": "Giornata 21 - Incontro in trasferta",
    "luogo": "C.COMUNALE F.BRANDOLINO E.A - MELISSANO"
  },
  {
    "data": "2027-01-17",
    "oraInizio": "15:00",
    "oraFine": "17:00",
    "titolo": "TARANTO 2025 SSD ARL - A. TOMA MAGLIE",
    "descrizione": "Giornata 22 - Incontro in casa",
    "luogo": "Stadio Erasmo Iacovone, Via Erasmo Iacovone, 9, 74121 Taranto TA"
  },
  {
    "data": "2027-01-24",
    "oraInizio": "15:00",
    "oraFine": "17:00",
    "titolo": "NOVOLI CALCIO 1942 - TARANTO 2025 SSD ARL",
    "descrizione": "Giornata 23 - Incontro in trasferta",
    "luogo": "CAMPO COM \"TOTO CEZZI\" E.A. - NOVOLI"
  },
  {
    "data": "2027-01-31",
    "oraInizio": "15:00",
    "oraFine": "17:00",
    "titolo": "TARANTO 2025 SSD ARL - CANOSA CALCIO 1948",
    "descrizione": "Giornata 24 - Incontro in casa",
    "luogo": "Stadio Erasmo Iacovone, Via Erasmo Iacovone, 9, 74121 Taranto TA"
  },
  {
    "data": "2027-02-07",
    "oraInizio": "15:00",
    "oraFine": "17:00",
    "titolo": "UGENTO - TARANTO 2025 SSD ARL",
    "descrizione": "Giornata 25 - Incontro in trasferta",
    "luogo": "CAMPO COMUNALE UGENTO ER.ART. - UGENTO"
  },
  {
    "data": "2027-02-14",
    "oraInizio": "15:00",
    "oraFine": "17:00",
    "titolo": "TARANTO 2025 SSD ARL - BRILLA CAMPI",
    "descrizione": "Giornata 26 - Incontro in casa",
    "luogo": "Stadio Erasmo Iacovone, Via Erasmo Iacovone, 9, 74121 Taranto TA"
  },
  {
    "data": "2027-02-21",
    "oraInizio": "15:00",
    "oraFine": "17:00",
    "titolo": "VIGOR TRANI CALCIO - TARANTO 2025 SSD ARL",
    "descrizione": "Giornata 27 - Incontro in trasferta",
    "luogo": "CAMPO CO. \"N.LAPI\"*DR 06/26 - TRANI"
  },
  {
    "data": "2027-02-28",
    "oraInizio": "15:00",
    "oraFine": "17:00",
    "titolo": "TARANTO 2025 SSD ARL - UNIONE CALCIO",
    "descrizione": "Giornata 28 - Incontro in casa",
    "luogo": "Stadio Erasmo Iacovone, Via Erasmo Iacovone, 9, 74121 Taranto TA"
  },
  {
    "data": "2027-03-07",
    "oraInizio": "15:00",
    "oraFine": "17:00",
    "titolo": "SQUINZANO CALCIO 1913 - TARANTO 2025 SSD ARL",
    "descrizione": "Giornata 29 - Incontro in trasferta",
    "luogo": "C.COM SQUINZANO E.NAT - SQUINZANO"
  },
  {
    "data": "2027-03-14",
    "oraInizio": "15:00",
    "oraFine": "17:00",
    "titolo": "TARANTO 2025 SSD ARL - GALATINA CALCIO",
    "descrizione": "Giornata 30 - Incontro in casa",
    "luogo": "Stadio Erasmo Iacovone, Via Erasmo Iacovone, 9, 74121 Taranto TA"
  },
  {
    "data": "2027-04-04",
    "oraInizio": "16:00",
    "oraFine": "18:00",
    "titolo": "TAURISANO 1939 - TARANTO 2025 SSD ARL",
    "descrizione": "Giornata 31 - Incontro in trasferta",
    "luogo": "CAMPO COMUNALE UGENTO ER.ART. - UGENTO"
  },
  {
    "data": "2027-04-11",
    "oraInizio": "16:00",
    "oraFine": "18:00",
    "titolo": "TARANTO 2025 SSD ARL - OSTUNI CALCIO 24",
    "descrizione": "Giornata 32 - Incontro in casa",
    "luogo": "Stadio Erasmo Iacovone, Via Erasmo Iacovone, 9, 74121 Taranto TA"
  },
  {
    "data": "2027-04-18",
    "oraInizio": "16:30",
    "oraFine": "18:30",
    "titolo": "ATLETICO ACQUAVIVA - TARANTO 2025 SSD ARL",
    "descrizione": "Giornata 33 - Incontro in trasferta",
    "luogo": "CAMPO COMUNLE \"GIAMMARIA\"E.A - ACQUAVIVA DELLE FONTI"
  },
  {
    "data": "2027-04-25",
    "oraInizio": "16:30",
    "oraFine": "18:30",
    "titolo": "TARANTO 2025 SSD ARL - BITONTO CALCIO SSDARL",
    "descrizione": "Giornata 34 - Incontro in casa",
    "luogo": "Stadio Erasmo Iacovone, Via Erasmo Iacovone, 9, 74121 Taranto TA"
  }
];