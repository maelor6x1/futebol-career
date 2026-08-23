import { MATCH_EVENTS, CLUBS, CAREER_MILESTONES } from './gameData.js';

export function generateInitialAttributes(position, potential = 70) {
  const base = Math.max(40, potential - 20);
  const attrs = {};
  const allAttrs = [
    'pace', 'acceleration', 'stamina', 'strength', 'agility', 'jumping',
    'dribbling', 'passing', 'shooting', 'heading', 'longShots', 'freeKick', 'penalty', 'crossing',
    'vision', 'positioning', 'composure', 'leadership', 'workRate', 'decisions',
    'tackling', 'marking', 'interception', 'aerial',
    'reflexes', 'handling', 'positioningGK', 'kicking', 'oneOnOne'
  ];
  allAttrs.forEach(attr => {
    const variance = Math.floor(Math.random() * 15) - 7;
    attrs[attr] = Math.min(99, Math.max(30, base + variance));
  });
  if (position === 'GK') {
    ['reflexes', 'handling', 'positioningGK', 'kicking', 'oneOnOne'].forEach(a => attrs[a] = Math.min(99, attrs[a] + 15));
  } else if (['CB'].includes(position)) {
    ['tackling', 'marking', 'interception', 'aerial', 'strength', 'heading'].forEach(a => attrs[a] = Math.min(99, attrs[a] + 12));
  } else if (['LB', 'RB'].includes(position)) {
    ['pace', 'stamina', 'crossing', 'tackling', 'marking'].forEach(a => attrs[a] = Math.min(99, attrs[a] + 10));
  } else if (['CDM', 'CM'].includes(position)) {
    ['passing', 'vision', 'tackling', 'interception', 'stamina', 'workRate'].forEach(a => attrs[a] = Math.min(99, attrs[a] + 12));
  } else if (['CAM'].includes(position)) {
    ['vision', 'passing', 'dribbling', 'shooting', 'composure'].forEach(a => attrs[a] = Math.min(99, attrs[a] + 12));
  } else if (['LM', 'RM', 'LW', 'RW'].includes(position)) {
    ['pace', 'acceleration', 'dribbling', 'crossing', 'stamina'].forEach(a => attrs[a] = Math.min(99, attrs[a] + 12));
  } else if (['ST', 'CF'].includes(position)) {
    ['shooting', 'heading', 'pace', 'strength', 'positioning', 'composure'].forEach(a => attrs[a] = Math.min(99, attrs[a] + 15));
  }
  return attrs;
}

export function calculatePotential(age, height, weight, nationality, position) {
  let potential = Math.floor(Math.random() * 26) + 55;

  if (age <= 16) potential += 12;
  else if (age <= 17) potential += 8;
  else if (age <= 18) potential += 5;
  else if (age <= 19) potential += 2;
  else if (age >= 25) potential -= 5;

  if (height >= 195) potential -= 2;
  if (height <= 165) potential += 2;

  const idealWeight = (height - 100) * 0.9;
  if (weight > idealWeight + 10) potential -= 3;

  const posBonus = {
    gk: 0, cb: 1, lb: 2, rb: 2,
    cdm: 1, cm: 3, cam: 3, lm: 2, rm: 2,
    lw: 3, rw: 3, st: 3, cf: 2,
  };
  potential += posBonus[position] || 0;

  const strongNations = ['Brasil','Argentina','França','Espanha','Alemanha','Inglaterra','Itália','Portugal','Holanda','Bélgica','Uruguai','Croácia'];
  if (strongNations.includes(nationality)) potential += 3;

  return Math.min(99, Math.max(40, potential));
}

export function simulateMatchEvents(player, opponent, minutes, position, difficulty = 'normal') {
  const events = [];
  const playerClub = CLUBS.find(c => c.id === player.clubId);
  const opponentClub = CLUBS.find(c => c.id === opponent.clubId) || { name: opponent.name, reputation: 70 };
  const diffMultipliers = { easy: 1.15, normal: 1.0, hard: 0.85, legend: 0.7 };
  const diffMult = diffMultipliers[difficulty] || 1.0;
  const playerStrength = (player.overall + playerClub.reputation) / 2 * diffMult;
  const oppStrength = (opponent.overall || 70) + opponentClub.reputation / 2;
  const strengthDiff = playerStrength - oppStrength;
  let playerGoals = 0;
  let opponentGoals = 0;
  let playerEvents = [];
  let matchStats = { shots: 0, shotsOnTarget: 0, passes: 0, tackles: 0, saves: 0, cards: 0 };
  for (let m = 1; m <= minutes; m++) {
    if (Math.random() < 0.008 + (strengthDiff * 0.0001)) {
      const isPlayerTeam = Math.random() < 0.5 + (strengthDiff * 0.005);
      if (isPlayerTeam) {
        playerGoals++;
        const scorer = Math.random() < 0.3 ? player.name : `${playerClub.name} (Jogador)`;
        events.push({ minute: m, type: 'goal', team: 'player', text: `⚽ GOL! ${scorer} marca para ${playerClub.name}`, isPlayerGoal: scorer === player.name });
        if (scorer === player.name) {
          playerEvents.push({ type: 'goal', minute: m });
          matchStats.shots++;
          matchStats.shotsOnTarget++;
        }
      } else {
        opponentGoals++;
        events.push({ minute: m, type: 'goal', team: 'opponent', text: `⚽ GOL! ${opponentClub.name} marca` });
      }
    }
    const playerEventChance = 0.02 + (player.overall / 5000);
    if (Math.random() < playerEventChance) {
      const eventType = getPositionEventType(position);
      if (eventType) {
        events.push({ minute: m, type: eventType.type, team: 'player', text: eventType.text, isPlayerEvent: true });
        playerEvents.push({ type: eventType.type, minute: m });
        if (eventType.type === 'shotOnTarget') { matchStats.shots++; matchStats.shotsOnTarget++; }
        if (eventType.type === 'save') { matchStats.saves++; }
        if (eventType.type === 'tackle') { matchStats.tackles++; }
        if (eventType.type === 'keyPass') { matchStats.passes++; }
      }
    }
    if (Math.random() < 0.003) {
      const isYellow = Math.random() < 0.85;
      const isPlayer = Math.random() < 0.3;
      events.push({ minute: m, type: isYellow ? 'yellowCard' : 'redCard', team: isPlayer ? 'player' : 'opponent', text: isYellow ? `🟨 Cartão amarelo para ${isPlayer ? player.name : opponentClub.name}` : `🟥 Cartão vermelho!`, isPlayerCard: isPlayer });
      if (isPlayer) {
        playerEvents.push({ type: isYellow ? 'yellowCard' : 'redCard', minute: m });
        matchStats.cards++;
      }
    }
    if (Math.random() < 0.005 && m > 60) {
      events.push({ minute: m, type: 'substitution', team: 'player', text: `🔄 Substituição no ${playerClub.name}` });
    }
  }
  const rating = calculateMatchRating(playerEvents, position, minutes);
  return { playerGoals, opponentGoals, events: events.sort((a, b) => a.minute - b.minute), playerEvents, rating, result: playerGoals > opponentGoals ? 'win' : playerGoals < opponentGoals ? 'loss' : 'draw', stats: matchStats };
}

function getPositionEventType(position) {
  const events = {
    GK: [{ type: 'save', text: '🧤 Grande defesa do goleiro!' }, { type: 'save', text: '🧤 Defesa espetacular!' }],
    CB: [{ type: 'tackle', text: '💪 Desarme perfeito!' }, { type: 'interception', text: '🛡️ Interceptação crucial!' }, { type: 'aerial', text: '👤 Cabeceio defensivo!' }],
    LB: [{ type: 'tackle', text: '💪 Desarme na lateral!' }, { type: 'crossing', text: '⚡ Cruzamento perigoso!' }],
    RB: [{ type: 'tackle', text: '💪 Desarme na lateral!' }, { type: 'crossing', text: '⚡ Cruzamento perigoso!' }],
    CDM: [{ type: 'tackle', text: '💪 Desarme no meio!' }, { type: 'interception', text: '🛡️ Interceptação!' }, { type: 'keyPass', text: '🔑 Passe decisivo!' }],
    CM: [{ type: 'keyPass', text: '🔑 Passe decisivo!' }, { type: 'dribble', text: '✨ Drible elegante!' }, { type: 'tackle', text: '💪 Recuperação de bola!' }],
    CAM: [{ type: 'keyPass', text: '🔑 Passe em profundidade!' }, { type: 'dribble', text: '✨ Drible mágico!' }, { type: 'assist', text: '🎯 Assistência! Que passe!' }],
    LM: [{ type: 'crossing', text: '⚡ Cruzamento da esquerda!' }, { type: 'dribble', text: '✨ Finta na ponta!' }, { type: 'assist', text: '🎯 Assistência!' }],
    RM: [{ type: 'crossing', text: '⚡ Cruzamento da direita!' }, { type: 'dribble', text: '✨ Finta na ponta!' }, { type: 'assist', text: '🎯 Assistência!' }],
    LW: [{ type: 'dribble', text: '✨ Arrancada pela esquerda!' }, { type: 'shotOnTarget', text: '🎯 Chute no gol!' }, { type: 'assist', text: '🎯 Assistência!' }],
    RW: [{ type: 'dribble', text: '✨ Arrancada pela direita!' }, { type: 'shotOnTarget', text: '🎯 Chute no gol!' }, { type: 'assist', text: '🎯 Assistência!' }],
    ST: [{ type: 'shotOnTarget', text: '🎯 Grande chance!' }, { type: 'heading', text: '👤 Cabeceio perigoso!' }, { type: 'dribble', text: '✨ Finta do centroavante!' }],
    CF: [{ type: 'shotOnTarget', text: '🎯 Chute perigoso!' }, { type: 'keyPass', text: '🔑 Passe para o gol!' }, { type: 'dribble', text: '✨ Drible no ataque!' }],
  };
  const posEvents = events[position] || events.CM;
  return posEvents[Math.floor(Math.random() * posEvents.length)];
}

function calculateMatchRating(playerEvents, position, minutes) {
  let rating = 6.0;
  playerEvents.forEach(e => {
    switch (e.type) {
      case 'goal': rating += 1.5; break;
      case 'assist': rating += 1.0; break;
      case 'save': rating += 0.5; break;
      case 'tackle': rating += 0.3; break;
      case 'interception': rating += 0.3; break;
      case 'keyPass': rating += 0.4; break;
      case 'dribble': rating += 0.2; break;
      case 'shotOnTarget': rating += 0.3; break;
      case 'yellowCard': rating -= 0.5; break;
      case 'redCard': rating -= 2.0; break;
    }
  });
  if (position === 'GK') {
    const saves = playerEvents.filter(e => e.type === 'save').length;
    if (saves >= 3) rating += 0.5;
  }
  return Math.min(10, Math.max(4, Math.round(rating * 10) / 10));
}

export function applyTraining(player, trainingType, difficulty = 'normal') {
  const multipliers = { easy: 1.5, normal: 1.0, hard: 0.7, legend: 0.4 };
  const mult = multipliers[difficulty] || 1.0;
  const improvements = {};
  let totalImprovement = 0;
  const newAttributes = { ...player.attributes };
  trainingType.attributes.forEach(attr => {
    if (newAttributes[attr] !== undefined && newAttributes[attr] < 99) {
      const baseGain = Math.random() * 2 + 0.5;
      const gain = Math.round(baseGain * mult * 10) / 10;
      const newVal = Math.min(99, newAttributes[attr] + gain);
      improvements[attr] = Math.round((newVal - newAttributes[attr]) * 10) / 10;
      newAttributes[attr] = newVal;
      totalImprovement += improvements[attr];
    }
  });
  const newOverall = calculateOverall(newAttributes, player.position);
  const energyCost = trainingType.energyCost;
  let newEnergy = player.energy;
  if (energyCost > 0) {
    newEnergy = Math.max(0, player.energy - energyCost);
  } else {
    newEnergy = Math.min(100, player.energy - energyCost);
  }
  return { improvements, totalImprovement, energyCost, newAttributes, newOverall, newEnergy };
}

export function calculateWeeklySalary(overall, reputation, clubBudget) {
  const base = 1000;
  const overallBonus = overall * 50;
  const repBonus = reputation * 20;
  const clubBonus = clubBudget * 10;
  return Math.round((base + overallBonus + repBonus + clubBonus) / 100) * 100;
}

export function calculateTransferValue(overall, age, potential) {
  const base = overall * 100000;
  const ageFactor = age < 23 ? 1.5 : age < 28 ? 1.2 : age < 32 ? 0.8 : 0.4;
  const potentialFactor = potential > 85 ? 1.3 : potential > 75 ? 1.1 : 1.0;
  return Math.round((base * ageFactor * potentialFactor) / 100000) * 100000;
}

export function checkMilestones(player, career) {
  const achieved = [];
  CAREER_MILESTONES.forEach(m => {
    const req = m.requirement;
    let met = false;
    if (req.type === 'matches') met = (player.matches || 0) >= req.value;
    else if (req.type === 'goals') met = (player.goals || 0) >= req.value;
    else if (req.type === 'assists') met = (player.assists || 0) >= req.value;
    else if (req.type === 'titles') met = (career.titles?.length || 0) >= req.value;
    else if (req.type === 'transfers') met = (career.transfers || 0) >= req.value;
    else if (req.type === 'nationalTeam') met = career.nationalTeam?.called || false;
    else if (req.type === 'worldCup') met = career.titles?.some(t => t.competition === 'world_cup');
    else if (req.type === 'champions') met = career.titles?.some(t => t.competition === 'champions');
    else if (req.type === 'ballonDor') met = career.awards?.some(a => a.type === 'ballon_dor');
    if (met) achieved.push(m.id);
  });
  return achieved;
}

export function generateSeasonCalendar(clubId, year) {
  const club = CLUBS.find(c => c.id === clubId);
  const opponents = CLUBS.filter(c => c.id !== clubId && c.country === club.country);
  const calendar = [];
  let month = 0;
  let day = 15;
  for (let round = 1; round <= 19; round++) {
    const opp = opponents[round % opponents.length];
    calendar.push({ id: `match_${round}`, date: { day, month, year }, type: 'league', competition: club.league, round, opponent: opp, home: round % 2 === 0, played: false });
    day += 7;
    if (day > 28) { day = 5; month++; if (month > 11) { month = 0; year++; } }
  }
  for (let cupRound = 1; cupRound <= 4; cupRound++) {
    const opp = opponents[Math.floor(Math.random() * opponents.length)];
    calendar.push({ id: `cup_${cupRound}`, date: { day: Math.floor(Math.random() * 20) + 5, month: cupRound + 2, year }, type: 'cup', competition: 'Copa do Brasil', round: cupRound, opponent: opp, home: Math.random() > 0.5, played: false });
  }
  if (club.reputation > 80) {
    for (let contRound = 1; contRound <= 6; contRound++) {
      const contOpps = CLUBS.filter(c => c.country !== 'Brasil');
      const opp = contOpps[Math.floor(Math.random() * contOpps.length)];
      calendar.push({ id: `continental_${contRound}`, date: { day: Math.floor(Math.random() * 20) + 5, month: (contRound + 4) % 12, year }, type: 'continental', competition: 'Libertadores', round: contRound, opponent: opp, home: contRound % 2 === 0, played: false });
    }
  }
  return calendar.sort((a, b) => { const dateA = a.date.month * 30 + a.date.day; const dateB = b.date.month * 30 + b.date.day; return dateA - dateB; });
}

export function saveGame(state) {
  const data = { player: state.player, career: state.career, finances: state.finances, sponsors: state.sponsors, settings: state.settings, timestamp: Date.now() };
  localStorage.setItem('futebolCareer_save', JSON.stringify(data));
  return true;
}

export function loadGame() {
  const data = localStorage.getItem('futebolCareer_save');
  if (!data) return null;
  try { return JSON.parse(data); } catch { return null; }
}

export function deleteSave() {
  localStorage.removeItem('futebolCareer_save');
}
export function calculatePotential(position, age = 16, nationality = 'Brasil') {
  // Base aleatória entre 60 e 85
  let potential = Math.floor(Math.random() * 26) + 60;

  // Modificador por idade (quanto mais novo, mais potencial)
  if (age <= 16) potential += 15;
  else if (age <= 18) potential += 10;
  else if (age <= 20) potential += 5;
  else if (age <= 22) potential += 2;
  else if (age >= 30) potential -= 15;
  else if (age >= 28) potential -= 10;
  else if (age >= 25) potential -= 5;

  // Modificador por posição
  const positionBonus = {
    'gk': 0, 'cb': 2, 'lb': 3, 'rb': 3,
    'cdm': 2, 'cm': 5, 'cam': 5, 'lm': 4, 'rm': 4,
    'lw': 5, 'rw': 5, 'st': 5, 'cf': 4,
  };
  potential += positionBonus[position] || 0;

  // Modificador por nacionalidade (países com forte tradição)
  const strongNations = ['Brasil', 'Argentina', 'França', 'Espanha', 'Alemanha', 'Inglaterra', 'Itália', 'Portugal', 'Holanda', 'Bélgica', 'Uruguai', 'Croácia'];
  if (strongNations.includes(nationality)) potential += 3;

  // Cap entre 40 e 99
  return Math.min(99, Math.max(40, potential));
}
export function assignInitialClub(overall, potential, nationality) {
  let targetTier = 3;
  const combinedScore = overall + (potential - overall) * 0.5;

  if (combinedScore >= 70) targetTier = 1;
  else if (combinedScore >= 55) targetTier = 2;

  let eligibleClubs = CLUBS.filter(club => club.tier === targetTier);
  if (eligibleClubs.length === 0) {
    eligibleClubs = CLUBS.filter(club => club.tier <= targetTier + 1);
  }

  const sameCountryClubs = eligibleClubs.filter(club => club.country === nationality);
  const finalPool = sameCountryClubs.length > 0 && Math.random() < 0.6
    ? sameCountryClubs
    : eligibleClubs;

  const selectedClub = finalPool[Math.floor(Math.random() * finalPool.length)] || CLUBS[0];
  return selectedClub;
}


function calculateInitialWage(overall, potential, age, club) {
  // Salário base
  let baseWage = 1000;
  
  // Multiplicador por overall
  if (overall >= 80) baseWage = 50000;
  else if (overall >= 70) baseWage = 15000;
  else if (overall >= 60) baseWage = 5000;
  else if (overall >= 50) baseWage = 2000;
  
  // Bônus por potencial
  if (potential >= 90) baseWage *= 2;
  else if (potential >= 80) baseWage *= 1.5;
  
  // Redutor por idade (jovens ganham menos)
  if (age <= 17) baseWage *= 0.3;
  else if (age <= 19) baseWage *= 0.6;
  else if (age <= 21) baseWage *= 0.8;
  
  // Multiplicador pelo orçamento/reputação do clube
  const clubMultiplier = Math.max(0.5, club.budget / 50000000);
  baseWage *= clubMultiplier;
  
  // Variação aleatória de ±20%
  const variance = 0.8 + Math.random() * 0.4;
  baseWage *= variance;
  
  return Math.floor(baseWage);
}
