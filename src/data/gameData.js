// ============================================
// BLOCO 1 - DADOS PRINCIPAIS DO FOOTBALL CAREER SIMULATOR
// ============================================

export const POSITIONS = [
  { id: 'gk', name: 'Goleiro', abbr: 'GK', category: 'goalkeeper' },
  { id: 'cb', name: 'Zagueiro', abbr: 'CB', category: 'defense' },
  { id: 'lb', name: 'Lateral Esquerdo', abbr: 'LB', category: 'defense' },
  { id: 'rb', name: 'Lateral Direito', abbr: 'RB', category: 'defense' },
  { id: 'cdm', name: 'Volante', abbr: 'CDM', category: 'midfield' },
  { id: 'cm', name: 'Meio-Campista', abbr: 'CM', category: 'midfield' },
  { id: 'cam', name: 'Meia Ofensivo', abbr: 'CAM', category: 'midfield' },
  { id: 'lm', name: 'Meia Esquerdo', abbr: 'LM', category: 'midfield' },
  { id: 'rm', name: 'Meia Direito', abbr: 'RM', category: 'midfield' },
  { id: 'lw', name: 'Ponta Esquerda', abbr: 'LW', category: 'attack' },
  { id: 'rw', name: 'Ponta Direita', abbr: 'RW', category: 'attack' },
  { id: 'st', name: 'Centroavante', abbr: 'ST', category: 'attack' },
  { id: 'cf', name: 'Segundo Atacante', abbr: 'CF', category: 'attack' },
];

export const ATTRIBUTES = {
  physical: [
    { id: 'pace', name: 'Velocidade', icon: '⚡' },
    { id: 'acceleration', name: 'Aceleração', icon: '💨' },
    { id: 'stamina', name: 'Resistência', icon: '🔋' },
    { id: 'strength', name: 'Força', icon: '💪' },
    { id: 'agility', name: 'Agilidade', icon: '🤸' },
    { id: 'jumping', name: 'Impulsão', icon: '⬆️' },
  ],
  technical: [
    { id: 'dribbling', name: 'Drible', icon: '🎯' },
    { id: 'passing', name: 'Passe', icon: '🎾' },
    { id: 'shooting', name: 'Finalização', icon: '⚽' },
    { id: 'heading', name: 'Cabeceio', icon: '👤' },
    { id: 'finishing', name: 'Precisão', icon: '🎯' },
    { id: 'crossing', name: 'Cruzamento', icon: '↗️' },
    { id: 'freeKick', name: 'Falta', icon: '🚩' },
    { id: 'longShots', name: 'Chute de Longe', icon: '🚀' },
  ],
  mental: [
    { id: 'vision', name: 'Visão', icon: '👁️' },
    { id: 'composure', name: 'Compostura', icon: '🧘' },
    { id: 'concentration', name: 'Concentração', icon: '🧠' },
    { id: 'decisions', name: 'Decisões', icon: '🎲' },
    { id: 'workRate', name: 'Taxa de Trabalho', icon: '⚙️' },
    { id: 'teamwork', name: 'Trabalho em Equipe', icon: '🤝' },
  ],
  defensive: [
    { id: 'marking', name: 'Marcação', icon: '🛡️' },
    { id: 'tackling', name: 'Desarme', icon: '🦶' },
    { id: 'positioning', name: 'Posicionamento', icon: '📍' },
    { id: 'interceptions', name: 'Interceptações', icon: '✋' },
  ],
  goalkeeper: [
    { id: 'reflexes', name: 'Reflexos', icon: '⚡' },
    { id: 'handling', name: 'Manuseio', icon: '🧤' },
    { id: 'oneOnOne', name: 'Um contra Um', icon: '🥅' },
    { id: 'aerialAbility', name: 'Aéreo', icon: '☁️' },
    { id: 'communication', name: 'Comunicação', icon: '📢' },
  ],
};

export const NATIONALITIES = [
  'Brasil', 'Argentina', 'Uruguai', 'Paraguai', 'Chile', 'Colômbia', 'Peru', 'Equador', 'Venezuela', 'Bolívia',
  'Espanha', 'Portugal', 'França', 'Itália', 'Alemanha', 'Inglaterra', 'Holanda', 'Bélgica', 'Suíça', 'Áustria',
  'Croácia', 'Sérvia', 'Polônia', 'Suécia', 'Dinamarca', 'Noruega', 'Finlândia', 'Ucrânia', 'Rússia', 'Romênia',
  'Grécia', 'Turquia', 'Hungria', 'República Tcheca', 'Eslovênia', 'Eslováquia', 'Bulgária', 'Bósnia', 'Montenegro', 'Albânia',
  'Estados Unidos', 'México', 'Canadá', 'Costa Rica', 'Panamá', 'Honduras', 'Jamaica',
  'Japão', 'Coreia do Sul', 'China', 'Austrália', 'Irã', 'Arábia Saudita', 'Catar', 'Emirados Árabes Unidos',
  'Egito', 'Marrocos', 'Nigéria', 'Senegal', 'Gana', 'Camarões', 'Costa do Marfim', 'Tunísia', 'Argélia', 'África do Sul',
];

// ============================================
// CLUBES POR LIGA (NÚMERO REAL DE TIMES)
// ============================================

export const CLUBS = [
  // === BRASIL - SÉRIE A (20 times) ===
  { id: 'fla', name: 'Flamengo', country: 'Brasil', league: 'Brasileirão Série A', tier: 1, reputation: 95, budget: 150000000, color: '#C22A2A' },
  { id: 'pal', name: 'Palmeiras', country: 'Brasil', league: 'Brasileirão Série A', tier: 1, reputation: 93, budget: 120000000, color: '#006437' },
  { id: 'sao', name: 'São Paulo', country: 'Brasil', league: 'Brasileirão Série A', tier: 1, reputation: 90, budget: 100000000, color: '#DC0000' },
  { id: 'cor', name: 'Corinthians', country: 'Brasil', league: 'Brasileirão Série A', tier: 1, reputation: 88, budget: 90000000, color: '#000000' },
  { id: 'cam', name: 'Atlético-MG', country: 'Brasil', league: 'Brasileirão Série A', tier: 1, reputation: 87, budget: 85000000, color: '#000000' },
  { id: 'flu', name: 'Fluminense', country: 'Brasil', league: 'Brasileirão Série A', tier: 1, reputation: 86, budget: 80000000, color: '#800020' },
  { id: 'gre', name: 'Grêmio', country: 'Brasil', league: 'Brasileirão Série A', tier: 1, reputation: 85, budget: 75000000, color: '#0077CC' },
  { id: 'intb', name: 'Internacional', country: 'Brasil', league: 'Brasileirão Série A', tier: 1, reputation: 84, budget: 70000000, color: '#C22A2A' },
  { id: 'bot', name: 'Botafogo', country: 'Brasil', league: 'Brasileirão Série A', tier: 1, reputation: 83, budget: 65000000, color: '#000000' },
  { id: 'vas', name: 'Vasco da Gama', country: 'Brasil', league: 'Brasileirão Série A', tier: 1, reputation: 82, budget: 60000000, color: '#000000' },
  { id: 'cru', name: 'Cruzeiro', country: 'Brasil', league: 'Brasileirão Série A', tier: 1, reputation: 81, budget: 55000000, color: '#003DA5' },
  { id: 'bah', name: 'Bahia', country: 'Brasil', league: 'Brasileirão Série A', tier: 1, reputation: 78, budget: 45000000, color: '#003DA5' },
  { id: 'for', name: 'Fortaleza', country: 'Brasil', league: 'Brasileirão Série A', tier: 1, reputation: 77, budget: 40000000, color: '#003DA5' },
  { id: 'cap', name: 'Athletico-PR', country: 'Brasil', league: 'Brasileirão Série A', tier: 1, reputation: 76, budget: 38000000, color: '#C22A2A' },
  { id: 'cea', name: 'Ceará', country: 'Brasil', league: 'Brasileirão Série A', tier: 1, reputation: 75, budget: 35000000, color: '#000000' },
  { id: 'vit', name: 'Vitória', country: 'Brasil', league: 'Brasileirão Série A', tier: 1, reputation: 74, budget: 32000000, color: '#C22A2A' },
  { id: 'juv', name: 'Juventude', country: 'Brasil', league: 'Brasileirão Série A', tier: 1, reputation: 73, budget: 30000000, color: '#006437' },
  { id: 'mir', name: 'Mirassol', country: 'Brasil', league: 'Brasileirão Série A', tier: 1, reputation: 72, budget: 28000000, color: '#FFD700' },
  { id: 'san', name: 'Santos', country: 'Brasil', league: 'Brasileirão Série A', tier: 1, reputation: 80, budget: 50000000, color: '#FFFFFF' },
  { id: 'rbb', name: 'Red Bull Bragantino', country: 'Brasil', league: 'Brasileirão Série A', tier: 1, reputation: 79, budget: 48000000, color: '#C22A2A' },

  // === BRASIL - SÉRIE B (20 times) ===
  { id: 'spt', name: 'Sport', country: 'Brasil', league: 'Brasileirão Série B', tier: 2, reputation: 72, budget: 25000000, color: '#C22A2A' },
  { id: 'crb', name: 'CRB', country: 'Brasil', league: 'Brasileirão Série B', tier: 2, reputation: 70, budget: 22000000, color: '#DC0000' },
  { id: 'goi', name: 'Goiás', country: 'Brasil', league: 'Brasileirão Série B', tier: 2, reputation: 71, budget: 23000000, color: '#006437' },
  { id: 'pay', name: 'Paysandu', country: 'Brasil', league: 'Brasileirão Série B', tier: 2, reputation: 68, budget: 18000000, color: '#003DA5' },
  { id: 'ope', name: 'Operário', country: 'Brasil', league: 'Brasileirão Série B', tier: 2, reputation: 67, budget: 17000000, color: '#000000' },
  { id: 'nov', name: 'Novorizontino', country: 'Brasil', league: 'Brasileirão Série B', tier: 2, reputation: 69, budget: 20000000, color: '#FFD700' },
  { id: 'amg', name: 'América-MG', country: 'Brasil', league: 'Brasileirão Série B', tier: 2, reputation: 73, budget: 26000000, color: '#006437' },
  { id: 'vil', name: 'Vila Nova', country: 'Brasil', league: 'Brasileirão Série B', tier: 2, reputation: 66, budget: 16000000, color: '#DC0000' },
  { id: 'rem', name: 'Remo', country: 'Brasil', league: 'Brasileirão Série B', tier: 2, reputation: 65, budget: 15000000, color: '#003DA5' },
  { id: 'fer', name: 'Ferroviária', country: 'Brasil', league: 'Brasileirão Série B', tier: 2, reputation: 64, budget: 14000000, color: '#800020' },
  { id: 'cha', name: 'Chapecoense', country: 'Brasil', league: 'Brasileirão Série B', tier: 2, reputation: 65, budget: 15000000, color: '#006437' },
  { id: 'itu', name: 'Ituano', country: 'Brasil', league: 'Brasileirão Série B', tier: 2, reputation: 62, budget: 12000000, color: '#000000' },
  { id: 'pon', name: 'Ponte Preta', country: 'Brasil', league: 'Brasileirão Série B', tier: 2, reputation: 68, budget: 18000000, color: '#000000' },
  { id: 'guar', name: 'Guarani', country: 'Brasil', league: 'Brasileirão Série B', tier: 2, reputation: 66, budget: 16000000, color: '#006437' },
  { id: 'ava', name: 'Avaí', country: 'Brasil', league: 'Brasileirão Série B', tier: 2, reputation: 67, budget: 17000000, color: '#003DA5' },
  { id: 'cric', name: 'Criciúma', country: 'Brasil', league: 'Brasileirão Série B', tier: 2, reputation: 64, budget: 14000000, color: '#FFD700' },
  { id: 'tup', name: 'Amazonas', country: 'Brasil', league: 'Brasileirão Série B', tier: 2, reputation: 60, budget: 10000000, color: '#FFD700' },
  { id: 'athl', name: 'Athletic', country: 'Brasil', league: 'Brasileirão Série B', tier: 2, reputation: 55, budget: 8000000, color: '#000000' },
  { id: 'corb', name: 'Coritiba', country: 'Brasil', league: 'Brasileirão Série B', tier: 2, reputation: 72, budget: 24000000, color: '#006437' },
  { id: 'ceab', name: 'Ceará SC', country: 'Brasil', league: 'Brasileirão Série B', tier: 2, reputation: 71, budget: 22000000, color: '#000000' },

  // === BRASIL - SÉRIE C (20 times) ===
  { id: 'abc', name: 'ABC', country: 'Brasil', league: 'Brasileirão Série C', tier: 3, reputation: 54, budget: 7000000, color: '#000000' },
  { id: 'alt', name: 'Altos', country: 'Brasil', league: 'Brasileirão Série C', tier: 3, reputation: 53, budget: 6500000, color: '#DC0000' },
  { id: 'bsp', name: 'Botafogo-SP', country: 'Brasil', league: 'Brasileirão Série C', tier: 3, reputation: 52, budget: 6000000, color: '#C22A2A' },
  { id: 'csa', name: 'CSA', country: 'Brasil', league: 'Brasileirão Série C', tier: 3, reputation: 51, budget: 5500000, color: '#003DA5' },
  { id: 'fig', name: 'Figueirense', country: 'Brasil', league: 'Brasileirão Série C', tier: 3, reputation: 50, budget: 5000000, color: '#000000' },
  { id: 'man', name: 'Manaus', country: 'Brasil', league: 'Brasileirão Série C', tier: 3, reputation: 49, budget: 4500000, color: '#006437' },
  { id: 'sjo', name: 'São José', country: 'Brasil', league: 'Brasileirão Série C', tier: 3, reputation: 48, budget: 4000000, color: '#003DA5' },
  { id: 'vol', name: 'Volta Redonda', country: 'Brasil', league: 'Brasileirão Série C', tier: 3, reputation: 47, budget: 3800000, color: '#FFD700' },
  { id: 'ypi', name: 'Ypiranga', country: 'Brasil', league: 'Brasileirão Série C', tier: 3, reputation: 46, budget: 3500000, color: '#006437' },
  { id: 'fvc', name: 'Ferroviário', country: 'Brasil', league: 'Brasileirão Série C', tier: 3, reputation: 45, budget: 3200000, color: '#800020' },
  { id: 'tom', name: 'Tombense', country: 'Brasil', league: 'Brasileirão Série C', tier: 3, reputation: 48, budget: 4000000, color: '#C22A2A' },
  { id: 'nau', name: 'Náutico', country: 'Brasil', league: 'Brasileirão Série C', tier: 3, reputation: 52, budget: 5500000, color: '#C22A2A' },
  { id: 'con', name: 'Confiança', country: 'Brasil', league: 'Brasileirão Série C', tier: 3, reputation: 46, budget: 3500000, color: '#003DA5' },
  { id: 'flor', name: 'Floresta', country: 'Brasil', league: 'Brasileirão Série C', tier: 3, reputation: 45, budget: 3200000, color: '#006437' },
  { id: 'sou', name: 'Sousa', country: 'Brasil', league: 'Brasileirão Série C', tier: 3, reputation: 43, budget: 2800000, color: '#000000' },
  { id: 'ser', name: 'Sergipe', country: 'Brasil', league: 'Brasileirão Série C', tier: 3, reputation: 42, budget: 2500000, color: '#C22A2A' },
  { id: 'lusa', name: 'Portuguesa', country: 'Brasil', league: 'Brasileirão Série C', tier: 3, reputation: 50, budget: 5000000, color: '#C22A2A' },
  { id: 'ret', name: 'Retrô', country: 'Brasil', league: 'Brasileirão Série C', tier: 3, reputation: 44, budget: 3000000, color: '#FFD700' },
  { id: 'aná', name: 'Anápolis', country: 'Brasil', league: 'Brasileirão Série C', tier: 3, reputation: 42, budget: 2500000, color: '#006437' },
  { id: 'moto', name: 'Moto Club', country: 'Brasil', league: 'Brasileirão Série C', tier: 3, reputation: 40, budget: 2000000, color: '#C22A2A' },

  // === ESPANHA - LA LIGA (20 times) ===
  { id: 'rma', name: 'Real Madrid', country: 'Espanha', league: 'La Liga', tier: 1, reputation: 96, budget: 200000000, color: '#FFFFFF' },
  { id: 'bar', name: 'Barcelona', country: 'Espanha', league: 'La Liga', tier: 1, reputation: 95, budget: 190000000, color: '#A50044' },
  { id: 'atm', name: 'Atlético de Madrid', country: 'Espanha', league: 'La Liga', tier: 1, reputation: 90, budget: 130000000, color: '#CB3524' },
  { id: 'sev', name: 'Sevilla', country: 'Espanha', league: 'La Liga', tier: 1, reputation: 82, budget: 70000000, color: '#FFFFFF' },
  { id: 'val', name: 'Valencia', country: 'Espanha', league: 'La Liga', tier: 1, reputation: 80, budget: 60000000, color: '#FFFFFF' },
  { id: 'bet', name: 'Real Betis', country: 'Espanha', league: 'La Liga', tier: 1, reputation: 79, budget: 55000000, color: '#00954C' },
  { id: 'soc', name: 'Real Sociedad', country: 'Espanha', league: 'La Liga', tier: 1, reputation: 81, budget: 65000000, color: '#0067B1' },
  { id: 'ath', name: 'Athletic Bilbao', country: 'Espanha', league: 'La Liga', tier: 1, reputation: 83, budget: 75000000, color: '#EE2523' },
  { id: 'vil', name: 'Villarreal', country: 'Espanha', league: 'La Liga', tier: 1, reputation: 78, budget: 50000000, color: '#FFE667' },
  { id: 'cel', name: 'Celta de Vigo', country: 'Espanha', league: 'La Liga', tier: 1, reputation: 76, budget: 42000000, color: '#7B1F3E' },
  { id: 'get', name: 'Getafe', country: 'Espanha', league: 'La Liga', tier: 1, reputation: 74, budget: 35000000, color: '#003DA5' },
  { id: 'osa', name: 'Osasuna', country: 'Espanha', league: 'La Liga', tier: 1, reputation: 73, budget: 32000000, color: '#C22A2A' },
  { id: 'ray', name: 'Rayo Vallecano', country: 'Espanha', league: 'La Liga', tier: 1, reputation: 72, budget: 30000000, color: '#FFFFFF' },
  { id: 'mall', name: 'Mallorca', country: 'Espanha', league: 'La Liga', tier: 1, reputation: 71, budget: 28000000, color: '#C22A2A' },
  { id: 'ala', name: 'Alavés', country: 'Espanha', league: 'La Liga', tier: 1, reputation: 70, budget: 25000000, color: '#003DA5' },
  { id: 'lasp', name: 'Las Palmas', country: 'Espanha', league: 'La Liga', tier: 1, reputation: 69, budget: 22000000, color: '#FFD700' },
  { id: 'gir', name: 'Girona', country: 'Espanha', league: 'La Liga', tier: 1, reputation: 75, budget: 40000000, color: '#C22A2A' },
  { id: 'esp', name: 'Espanyol', country: 'Espanha', league: 'La Liga', tier: 1, reputation: 72, budget: 30000000, color: '#FFFFFF' },
  { id: 'leg', name: 'Leganés', country: 'Espanha', league: 'La Liga', tier: 1, reputation: 70, budget: 25000000, color: '#003DA5' },
  { id: 'vall', name: 'Valladolid', country: 'Espanha', league: 'La Liga', tier: 1, reputation: 68, budget: 20000000, color: '#800020' },

  // === ESPANHA - LA LIGA 2 (22 times) ===
  { id: 'zar', name: 'Zaragoza', country: 'Espanha', league: 'La Liga 2', tier: 2, reputation: 65, budget: 14000000, color: '#FFFFFF' },
  { id: 'mal', name: 'Málaga', country: 'Espanha', league: 'La Liga 2', tier: 2, reputation: 64, budget: 13000000, color: '#003DA5' },
  { id: 'tfe', name: 'Tenerife', country: 'Espanha', league: 'La Liga 2', tier: 2, reputation: 63, budget: 12000000, color: '#FFFFFF' },
  { id: 'leva', name: 'Levante', country: 'Espanha', league: 'La Liga 2', tier: 2, reputation: 68, budget: 20000000, color: '#C22A2A' },
  { id: 'eibar', name: 'Eibar', country: 'Espanha', league: 'La Liga 2', tier: 2, reputation: 66, budget: 15000000, color: '#000000' },
  { id: 'sportg', name: 'Sporting Gijón', country: 'Espanha', league: 'La Liga 2', tier: 2, reputation: 65, budget: 14000000, color: '#C22A2A' },
  { id: 'racing', name: 'Racing Santander', country: 'Espanha', league: 'La Liga 2', tier: 2, reputation: 64, budget: 13000000, color: '#006437' },
  { id: 'elche', name: 'Elche', country: 'Espanha', league: 'La Liga 2', tier: 2, reputation: 67, budget: 17000000, color: '#FFFFFF' },
  { id: 'burgos', name: 'Burgos', country: 'Espanha', league: 'La Liga 2', tier: 2, reputation: 60, budget: 10000000, color: '#000000' },
  { id: 'alba', name: 'Albacete', country: 'Espanha', league: 'La Liga 2', tier: 2, reputation: 62, budget: 11000000, color: '#000000' },
  { id: 'mirand', name: 'Mirandés', country: 'Espanha', league: 'La Liga 2', tier: 2, reputation: 61, budget: 10000000, color: '#C22A2A' },
  { id: 'huesca', name: 'Huesca', country: 'Espanha', league: 'La Liga 2', tier: 2, reputation: 63, budget: 12000000, color: '#003DA5' },
  { id: 'oviedo', name: 'Oviedo', country: 'Espanha', league: 'La Liga 2', tier: 2, reputation: 64, budget: 13000000, color: '#003DA5' },
  { id: 'cartag', name: 'Cartagena', country: 'Espanha', league: 'La Liga 2', tier: 2, reputation: 60, budget: 9000000, color: '#FFFFFF' },
  { id: 'ferrol', name: 'Racing Ferrol', country: 'Espanha', league: 'La Liga 2', tier: 2, reputation: 58, budget: 8000000, color: '#006437' },
  { id: 'eldens', name: 'Eldense', country: 'Espanha', league: 'La Liga 2', tier: 2, reputation: 56, budget: 7000000, color: '#003DA5' },
  { id: 'castel', name: 'Castellón', country: 'Espanha', league: 'La Liga 2', tier: 2, reputation: 59, budget: 8500000, color: '#FFFFFF' },
  { id: 'deport', name: 'Deportivo La Coruña', country: 'Espanha', league: 'La Liga 2', tier: 2, reputation: 66, budget: 15000000, color: '#003DA5' },
  { id: 'cordob', name: 'Córdoba', country: 'Espanha', league: 'La Liga 2', tier: 2, reputation: 62, budget: 11000000, color: '#FFFFFF' },
  { id: 'granad', name: 'Granada', country: 'Espanha', league: 'La Liga 2', tier: 2, reputation: 70, budget: 22000000, color: '#C22A2A' },
  { id: 'cadiz', name: 'Cádiz', country: 'Espanha', league: 'La Liga 2', tier: 2, reputation: 69, budget: 20000000, color: '#FFD700' },
  { id: 'almeri', name: 'Almería', country: 'Espanha', league: 'La Liga 2', tier: 2, reputation: 68, budget: 18000000, color: '#C22A2A' },

  // === INGLATERRA - PREMIER LEAGUE (20 times) ===
  { id: 'mci', name: 'Manchester City', country: 'Inglaterra', league: 'Premier League', tier: 1, reputation: 97, budget: 250000000, color: '#6CABDD' },
  { id: 'liv', name: 'Liverpool', country: 'Inglaterra', league: 'Premier League', tier: 1, reputation: 94, budget: 180000000, color: '#C8102E' },
  { id: 'ars', name: 'Arsenal', country: 'Inglaterra', league: 'Premier League', tier: 1, reputation: 92, budget: 160000000, color: '#EF0107' },
  { id: 'mun', name: 'Manchester United', country: 'Inglaterra', league: 'Premier League', tier: 1, reputation: 88, budget: 140000000, color: '#DA291C' },
  { id: 'che', name: 'Chelsea', country: 'Inglaterra', league: 'Premier League', tier: 1, reputation: 87, budget: 135000000, color: '#034694' },
  { id: 'tot', name: 'Tottenham', country: 'Inglaterra', league: 'Premier League', tier: 1, reputation: 85, budget: 120000000, color: '#FFFFFF' },
  { id: 'new', name: 'Newcastle', country: 'Inglaterra', league: 'Premier League', tier: 1, reputation: 84, budget: 110000000, color: '#241F20' },
  { id: 'avl', name: 'Aston Villa', country: 'Inglaterra', league: 'Premier League', tier: 1, reputation: 82, budget: 95000000, color: '#95BFE5' },
  { id: 'whu', name: 'West Ham', country: 'Inglaterra', league: 'Premier League', tier: 1, reputation: 80, budget: 85000000, color: '#7A263A' },
  { id: 'bri', name: 'Brighton', country: 'Inglaterra', league: 'Premier League', tier: 1, reputation: 79, budget: 80000000, color: '#0057B8' },
  { id: 'cry', name: 'Crystal Palace', country: 'Inglaterra', league: 'Premier League', tier: 1, reputation: 75, budget: 55000000, color: '#003DA5' },
  { id: 'ful', name: 'Fulham', country: 'Inglaterra', league: 'Premier League', tier: 1, reputation: 74, budget: 50000000, color: '#000000' },
  { id: 'eve', name: 'Everton', country: 'Inglaterra', league: 'Premier League', tier: 1, reputation: 76, budget: 60000000, color: '#003DA5' },
  { id: 'bre', name: 'Brentford', country: 'Inglaterra', league: 'Premier League', tier: 1, reputation: 73, budget: 45000000, color: '#C22A2A' },
  { id: 'bou', name: 'Bournemouth', country: 'Inglaterra', league: 'Premier League', tier: 1, reputation: 72, budget: 40000000, color: '#C22A2A' },
  { id: 'wol', name: 'Wolves', country: 'Inglaterra', league: 'Premier League', tier: 1, reputation: 74, budget: 50000000, color: '#FFD700' },
  { id: 'not', name: "Nottingham Forest", country: 'Inglaterra', league: 'Premier League', tier: 1, reputation: 73, budget: 45000000, color: '#C22A2A' },
  { id: 'ips', name: 'Ipswich Town', country: 'Inglaterra', league: 'Premier League', tier: 1, reputation: 70, budget: 35000000, color: '#003DA5' },
  { id: 'lei', name: 'Leicester', country: 'Inglaterra', league: 'Premier League', tier: 1, reputation: 75, budget: 55000000, color: '#003DA5' },
  { id: 'sou', name: 'Southampton', country: 'Inglaterra', league: 'Premier League', tier: 1, reputation: 74, budget: 50000000, color: '#C22A2A' },

  // === INGLATERRA - CHAMPIONSHIP (24 times) ===
  { id: 'lee', name: 'Leeds United', country: 'Inglaterra', league: 'Championship', tier: 2, reputation: 75, budget: 45000000, color: '#FFFFFF' },
  { id: 'sun', name: 'Sunderland', country: 'Inglaterra', league: 'Championship', tier: 2, reputation: 72, budget: 35000000, color: '#EB172B' },
  { id: 'mid', name: 'Middlesbrough', country: 'Inglaterra', league: 'Championship', tier: 2, reputation: 71, budget: 32000000, color: '#E21A23' },
  { id: 'wba', name: 'West Bromwich', country: 'Inglaterra', league: 'Championship', tier: 2, reputation: 73, budget: 38000000, color: '#091453' },
  { id: 'nor', name: 'Norwich', country: 'Inglaterra', league: 'Championship', tier: 2, reputation: 70, budget: 30000000, color: '#FFF200' },
  { id: 'bur', name: 'Burnley', country: 'Inglaterra', league: 'Championship', tier: 2, reputation: 74, budget: 40000000, color: '#800020' },
  { id: 'sheu', name: 'Sheffield United', country: 'Inglaterra', league: 'Championship', tier: 2, reputation: 73, budget: 38000000, color: '#C22A2A' },
  { id: 'brist', name: 'Bristol City', country: 'Inglaterra', league: 'Championship', tier: 2, reputation: 68, budget: 25000000, color: '#C22A2A' },
  { id: 'covent', name: 'Coventry', country: 'Inglaterra', league: 'Championship', tier: 2, reputation: 69, budget: 28000000, color: '#003DA5' },
  { id: 'millw', name: 'Millwall', country: 'Inglaterra', league: 'Championship', tier: 2, reputation: 67, budget: 22000000, color: '#003DA5' },
  { id: 'prest', name: 'Preston', country: 'Inglaterra', league: 'Championship', tier: 2, reputation: 66, budget: 20000000, color: '#000000' },
  { id: 'qpr', name: 'QPR', country: 'Inglaterra', league: 'Championship', tier: 2, reputation: 68, budget: 25000000, color: '#FFFFFF' },
  { id: 'stoke', name: 'Stoke City', country: 'Inglaterra', league: 'Championship', tier: 2, reputation: 70, budget: 30000000, color: '#C22A2A' },
  { id: 'swans', name: 'Swansea', country: 'Inglaterra', league: 'Championship', tier: 2, reputation: 69, budget: 28000000, color: '#000000' },
  { id: 'watr', name: 'Watford', country: 'Inglaterra', league: 'Championship', tier: 2, reputation: 71, budget: 32000000, color: '#FFD700' },
  { id: 'black', name: 'Blackburn', country: 'Inglaterra', league: 'Championship', tier: 2, reputation: 69, budget: 28000000, color: '#003DA5' },
  { id: 'oxfor', name: 'Oxford United', country: 'Inglaterra', league: 'Championship', tier: 2, reputation: 64, budget: 15000000, color: '#FFD700' },
  { id: 'lut', name: 'Luton', country: 'Inglaterra', league: 'Championship', tier: 2, reputation: 70, budget: 30000000, color: '#FF6600' },
  { id: 'plym', name: 'Plymouth', country: 'Inglaterra', league: 'Championship', tier: 2, reputation: 62, budget: 12000000, color: '#006437' },
  { id: 'ports', name: 'Portsmouth', country: 'Inglaterra', league: 'Championship', tier: 2, reputation: 63, budget: 14000000, color: '#003DA5' },
  { id: 'sheffw', name: 'Sheffield Wednesday', country: 'Inglaterra', league: 'Championship', tier: 2, reputation: 67, budget: 22000000, color: '#003DA5' },
  { id: 'derby', name: 'Derby County', country: 'Inglaterra', league: 'Championship', tier: 2, reputation: 66, budget: 20000000, color: '#FFFFFF' },
  { id: 'hull', name: 'Hull City', country: 'Inglaterra', league: 'Championship', tier: 2, reputation: 65, budget: 18000000, color: '#FFD700' },
  { id: 'cardi', name: 'Cardiff', country: 'Inglaterra', league: 'Championship', tier: 2, reputation: 66, budget: 20000000, color: '#003DA5' },

  // === ALEMANHA - BUNDESLIGA (18 times) ===
  { id: 'bay', name: 'Bayern de Munique', country: 'Alemanha', league: 'Bundesliga', tier: 1, reputation: 96, budget: 220000000, color: '#DC052D' },
  { id: 'bvb', name: 'Borussia Dortmund', country: 'Alemanha', league: 'Bundesliga', tier: 1, reputation: 90, budget: 140000000, color: '#FDE100' },
  { id: 'lev', name: 'Bayer Leverkusen', country: 'Alemanha', league: 'Bundesliga', tier: 1, reputation: 88, budget: 120000000, color: '#E32219' },
  { id: 'rbl', name: 'RB Leipzig', country: 'Alemanha', league: 'Bundesliga', tier: 1, reputation: 86, budget: 110000000, color: '#DD0741' },
  { id: 'eint', name: 'Eintracht Frankfurt', country: 'Alemanha', league: 'Bundesliga', tier: 1, reputation: 83, budget: 90000000, color: '#000000' },
  { id: 'wol', name: 'Wolfsburg', country: 'Alemanha', league: 'Bundesliga', tier: 1, reputation: 80, budget: 75000000, color: '#65FF00' },
  { id: 'mgl', name: "Borussia M'gladbach", country: 'Alemanha', league: 'Bundesliga', tier: 1, reputation: 79, budget: 70000000, color: '#000000' },
  { id: 'scf', name: 'Freiburg', country: 'Alemanha', league: 'Bundesliga', tier: 1, reputation: 78, budget: 65000000, color: '#E30613' },
  { id: 'hsv', name: 'Hamburgo', country: 'Alemanha', league: 'Bundesliga', tier: 1, reputation: 77, budget: 60000000, color: '#FFFFFF' },
  { id: 's04', name: 'Schalke 04', country: 'Alemanha', league: 'Bundesliga', tier: 1, reputation: 76, budget: 55000000, color: '#004D9E' },
  { id: 'stut', name: 'Stuttgart', country: 'Alemanha', league: 'Bundesliga', tier: 1, reputation: 78, budget: 65000000, color: '#C22A2A' },
  { id: 'hoff', name: 'Hoffenheim', country: 'Alemanha', league: 'Bundesliga', tier: 1, reputation: 75, budget: 55000000, color: '#003DA5' },
  { id: 'mainz', name: 'Mainz 05', country: 'Alemanha', league: 'Bundesliga', tier: 1, reputation: 73, budget: 45000000, color: '#C22A2A' },
  { id: 'augs', name: 'Augsburg', country: 'Alemanha', league: 'Bundesliga', tier: 1, reputation: 72, budget: 40000000, color: '#006437' },
  { id: 'werder', name: 'Werder Bremen', country: 'Alemanha', league: 'Bundesliga', tier: 1, reputation: 74, budget: 50000000, color: '#006437' },
  { id: 'heiden', name: 'Heidenheim', country: 'Alemanha', league: 'Bundesliga', tier: 1, reputation: 70, budget: 30000000, color: '#C22A2A' },
  { id: 'unionb', name: 'Union Berlin', country: 'Alemanha', league: 'Bundesliga', tier: 1, reputation: 76, budget: 55000000, color: '#C22A2A' },
  { id: 'bochu', name: 'Bochum', country: 'Alemanha', league: 'Bundesliga', tier: 1, reputation: 71, budget: 35000000, color: '#003DA5' },

  // === ALEMANHA - 2. BUNDESLIGA (18 times) ===
  { id: 'kol', name: 'Colônia', country: 'Alemanha', league: '2. Bundesliga', tier: 2, reputation: 75, budget: 45000000, color: '#E32219' },
  { id: 'her', name: 'Hertha Berlin', country: 'Alemanha', league: '2. Bundesliga', tier: 2, reputation: 74, budget: 40000000, color: '#005CA9' },
  { id: 'h96', name: 'Hannover 96', country: 'Alemanha', league: '2. Bundesliga', tier: 2, reputation: 72, budget: 35000000, color: '#00A650' },
  { id: 'kai', name: 'Kaiserslautern', country: 'Alemanha', league: '2. Bundesliga', tier: 2, reputation: 70, budget: 28000000, color: '#E30613' },
  { id: 'pad', name: 'Paderborn', country: 'Alemanha', league: '2. Bundesliga', tier: 2, reputation: 68, budget: 22000000, color: '#000000' },
  { id: 'darmst', name: 'Darmstadt', country: 'Alemanha', league: '2. Bundesliga', tier: 2, reputation: 69, budget: 25000000, color: '#003DA5' },
  { id: 'karls', name: 'Karlsruher', country: 'Alemanha', league: '2. Bundesliga', tier: 2, reputation: 67, budget: 20000000, color: '#003DA5' },
  { id: 'nurnb', name: 'Nürnberg', country: 'Alemanha', league: '2. Bundesliga', tier: 2, reputation: 69, budget: 25000000, color: '#C22A2A' },
  { id: 'elver', name: 'Elversberg', country: 'Alemanha', league: '2. Bundesliga', tier: 2, reputation: 60, budget: 10000000, color: '#000000' },
  { id: 'greuth', name: 'Greuther Fürth', country: 'Alemanha', league: '2. Bundesliga', tier: 2, reputation: 66, budget: 18000000, color: '#006437' },
  { id: 'magdeb', name: 'Magdeburg', country: 'Alemanha', league: '2. Bundesliga', tier: 2, reputation: 65, budget: 16000000, color: '#003DA5' },
  { id: 'hansa', name: 'Hansa Rostock', country: 'Alemanha', league: '2. Bundesliga', tier: 2, reputation: 64, budget: 15000000, color: '#003DA5' },
  { id: 'brauns', name: 'Braunschweig', country: 'Alemanha', league: '2. Bundesliga', tier: 2, reputation: 63, budget: 14000000, color: '#FFD700' },
  { id: 'fortun', name: 'Fortuna Düsseldorf', country: 'Alemanha', league: '2. Bundesliga', tier: 2, reputation: 68, budget: 22000000, color: '#C22A2A' },
  { id: 'hambur', name: 'Hamburger SV', country: 'Alemanha', league: '2. Bundesliga', tier: 2, reputation: 73, budget: 35000000, color: '#FFFFFF' },
  { id: 'schal', name: 'Schalke 04', country: 'Alemanha', league: '2. Bundesliga', tier: 2, reputation: 72, budget: 32000000, color: '#004D9E' },
  { id: 'st.pau', name: 'St. Pauli', country: 'Alemanha', league: '2. Bundesliga', tier: 2, reputation: 67, budget: 20000000, color: '#C22A2A' },
  { id: 'ulm', name: 'SSV Ulm', country: 'Alemanha', league: '2. Bundesliga', tier: 2, reputation: 58, budget: 8000000, color: '#000000' },

  // === ITÁLIA - SERIE A (20 times) ===
  { id: 'juv', name: 'Juventus', country: 'Itália', league: 'Serie A', tier: 1, reputation: 93, budget: 160000000, color: '#000000' },
  { id: 'inm', name: 'Inter de Milão', country: 'Itália', league: 'Serie A', tier: 1, reputation: 92, budget: 155000000, color: '#010E80' },
  { id: 'acm', name: 'AC Milan', country: 'Itália', league: 'Serie A', tier: 1, reputation: 89, budget: 130000000, color: '#FB090B' },
  { id: 'nap', name: 'Napoli', country: 'Itália', league: 'Serie A', tier: 1, reputation: 87, budget: 110000000, color: '#12A0D7' },
  { id: 'rom', name: 'Roma', country: 'Itália', league: 'Serie A', tier: 1, reputation: 86, budget: 105000000, color: '#8E1F2F' },
  { id: 'laz', name: 'Lazio', country: 'Itália', league: 'Serie A', tier: 1, reputation: 84, budget: 95000000, color: '#6DADE6' },
  { id: 'ata', name: 'Atalanta', country: 'Itália', league: 'Serie A', tier: 1, reputation: 83, budget: 85000000, color: '#1E3D94' },
  { id: 'fio', name: 'Fiorentina', country: 'Itália', league: 'Serie A', tier: 1, reputation: 80, budget: 70000000, color: '#482E92' },
  { id: 'bol', name: 'Bologna', country: 'Itália', league: 'Serie A', tier: 1, reputation: 78, budget: 60000000, color: '#A21C26' },
  { id: 'tor', name: 'Torino', country: 'Itália', league: 'Serie A', tier: 1, reputation: 76, budget: 50000000, color: '#8E1F2F' },
  { id: 'udi', name: 'Udinese', country: 'Itália', league: 'Serie A', tier: 1, reputation: 74, budget: 42000000, color: '#000000' },
  { id: 'mon', name: 'Monza', country: 'Itália', league: 'Serie A', tier: 1, reputation: 72, budget: 35000000, color: '#C22A2A' },
  { id: 'gen', name: 'Genoa', country: 'Itália', league: 'Serie A', tier: 1, reputation: 73, budget: 38000000, color: '#FFFFFF' },
  { id: 'ver', name: 'Hellas Verona', country: 'Itália', league: 'Serie A', tier: 1, reputation: 71, budget: 32000000, color: '#FFCC00' },
  { id: 'emp', name: 'Empoli', country: 'Itália', league: 'Serie A', tier: 1, reputation: 70, budget: 28000000, color: '#0067B1' },
  { id: 'lec', name: 'Lecce', country: 'Itália', league: 'Serie A', tier: 1, reputation: 69, budget: 25000000, color: '#C22A2A' },
  { id: 'par', name: 'Parma', country: 'Itália', league: 'Serie A', tier: 1, reputation: 71, budget: 30000000, color: '#FFCC00' },
  { id: 'como', name: 'Como', country: 'Itália', league: 'Serie A', tier: 1, reputation: 68, budget: 22000000, color: '#003DA5' },
  { id: 'ven', name: 'Venezia', country: 'Itália', league: 'Serie A', tier: 1, reputation: 67, budget: 20000000, color: '#006437' },

  // === ITÁLIA - SERIE B (20 times) ===
  { id: 'sas', name: 'Sassuolo', country: 'Itália', league: 'Serie B', tier: 2, reputation: 72, budget: 35000000, color: '#006437' },
  { id: 'sam', name: 'Sampdoria', country: 'Itália', league: 'Serie B', tier: 2, reputation: 71, budget: 32000000, color: '#003DA5' },
  { id: 'cre', name: 'Cremonese', country: 'Itália', league: 'Serie B', tier: 2, reputation: 68, budget: 22000000, color: '#C22A2A' },
  { id: 'pal', name: 'Palermo', country: 'Itália', league: 'Serie B', tier: 2, reputation: 70, budget: 28000000, color: '#C22A2A' },
  { id: 'barib', name: 'Bari', country: 'Itália', league: 'Serie B', tier: 2, reputation: 69, budget: 25000000, color: '#FFFFFF' },
  { id: 'pisa', name: 'Pisa', country: 'Itália', league: 'Serie B', tier: 2, reputation: 66, budget: 18000000, color: '#000000' },
  { id: 'cat', name: 'Catanzaro', country: 'Itália', league: 'Serie B', tier: 2, reputation: 64, budget: 14000000, color: '#FFD700' },
  { id: 'mod', name: 'Modena', country: 'Itália', league: 'Serie B', tier: 2, reputation: 65, budget: 16000000, color: '#FFD700' },
  { id: 'breb', name: 'Brescia', country: 'Itália', league: 'Serie B', tier: 2, reputation: 67, budget: 20000000, color: '#003DA5' },
  { id: 'spe', name: 'Spezia', country: 'Itália', league: 'Serie B', tier: 2, reputation: 66, budget: 18000000, color: '#FFFFFF' },
  { id: 'citt', name: 'Cittadella', country: 'Itália', league: 'Serie B', tier: 2, reputation: 63, budget: 12000000, color: '#C22A2A' },
  { id: 'fros', name: 'Frosinone', country: 'Itália', league: 'Serie B', tier: 2, reputation: 68, budget: 22000000, color: '#FFD700' },
  { id: 'sud', name: 'Sudtirol', country: 'Itália', league: 'Serie B', tier: 2, reputation: 62, budget: 10000000, color: '#FFFFFF' },
  { id: 'regg', name: 'Reggiana', country: 'Itália', league: 'Serie B', tier: 2, reputation: 61, budget: 9000000, color: '#C22A2A' },
  { id: 'ces', name: 'Cesena', country: 'Itália', league: 'Serie B', tier: 2, reputation: 63, budget: 12000000, color: '#000000' },
  { id: 'manb', name: 'Mantova', country: 'Itália', league: 'Serie B', tier: 2, reputation: 60, budget: 8000000, color: '#C22A2A' },
  { id: 'sal', name: 'Salernitana', country: 'Itália', league: 'Serie B', tier: 2, reputation: 67, budget: 20000000, color: '#8E1F2F' },
  { id: 'juvs', name: 'Juve Stabia', country: 'Itália', league: 'Serie B', tier: 2, reputation: 59, budget: 7500000, color: '#FFD700' },
  { id: 'carr', name: 'Carrarese', country: 'Itália', league: 'Serie B', tier: 2, reputation: 58, budget: 7000000, color: '#003DA5' },
  { id: 'samb', name: 'Sampdoria', country: 'Itália', league: 'Serie B', tier: 2, reputation: 65, budget: 15000000, color: '#003DA5' },

  // === FRANÇA - LIGUE 1 (18 times) ===
  { id: 'psg', name: 'Paris Saint-Germain', country: 'França', league: 'Ligue 1', tier: 1, reputation: 95, budget: 230000000, color: '#004170' },
  { id: 'om', name: 'Olympique de Marseille', country: 'França', league: 'Ligue 1', tier: 1, reputation: 86, budget: 110000000, color: '#00BFFF' },
  { id: 'ol', name: 'Olympique Lyonnais', country: 'França', league: 'Ligue 1', tier: 1, reputation: 84, budget: 95000000, color: '#FFFFFF' },
  { id: 'asm', name: 'AS Monaco', country: 'França', league: 'Ligue 1', tier: 1, reputation: 85, budget: 100000000, color: '#C22A2A' },
  { id: 'lil', name: 'Lille', country: 'França', league: 'Ligue 1', tier: 1, reputation: 82, budget: 80000000, color: '#C22A2A' },
  { id: 'ren', name: 'Rennes', country: 'França', league: 'Ligue 1', tier: 1, reputation: 80, budget: 70000000, color: '#C22A2A' },
  { id: 'nice', name: 'Nice', country: 'França', league: 'Ligue 1', tier: 1, reputation: 79, budget: 65000000, color: '#000000' },
  { id: 'str', name: 'Strasbourg', country: 'França', league: 'Ligue 1', tier: 1, reputation: 76, budget: 50000000, color: '#0067B1' },
  { id: 'len', name: 'Lens', country: 'França', league: 'Ligue 1', tier: 1, reputation: 78, budget: 60000000, color: '#FFD700' },
  { id: 'nan', name: 'Nantes', country: 'França', league: 'Ligue 1', tier: 1, reputation: 75, budget: 45000000, color: '#FFD700' },
  { id: 'bre', name: 'Brest', country: 'França', league: 'Ligue 1', tier: 1, reputation: 74, budget: 40000000, color: '#C22A2A' },
  { id: 'mon', name: 'Montpellier', country: 'França', league: 'Ligue 1', tier: 1, reputation: 73, budget: 38000000, color: '#FF6600' },
  { id: 'reim', name: 'Reims', country: 'França', league: 'Ligue 1', tier: 1, reputation: 72, budget: 35000000, color: '#C22A2A' },
  { id: 'tfc', name: 'Toulouse', country: 'França', league: 'Ligue 1', tier: 1, reputation: 71, budget: 32000000, color: '#660033' },
  { id: 'aux', name: 'Auxerre', country: 'França', league: 'Ligue 1', tier: 1, reputation: 70, budget: 28000000, color: '#FFFFFF' },
  { id: 'leha', name: 'Le Havre', country: 'França', league: 'Ligue 1', tier: 1, reputation: 69, budget: 25000000, color: '#0067B1' },
  { id: 'saint', name: 'Saint-Étienne', country: 'França', league: 'Ligue 1', tier: 1, reputation: 71, budget: 30000000, color: '#006437' },
  { id: 'angers', name: 'Angers', country: 'França', league: 'Ligue 1', tier: 1, reputation: 68, budget: 22000000, color: '#000000' },

  // === FRANÇA - LIGUE 2 (20 times) ===
  { id: 'lor', name: 'Lorient', country: 'França', league: 'Ligue 2', tier: 2, reputation: 70, budget: 28000000, color: '#FF6600' },
  { id: 'metz', name: 'Metz', country: 'França', league: 'Ligue 2', tier: 2, reputation: 69, budget: 25000000, color: '#8E1F2F' },
  { id: 'parisfc', name: 'Paris FC', country: 'França', league: 'Ligue 2', tier: 2, reputation: 68, budget: 22000000, color: '#003DA5' },
  { id: 'gfe', name: 'Grenoble', country: 'França', league: 'Ligue 2', tier: 2, reputation: 66, budget: 18000000, color: '#0067B1' },
  { id: 'est', name: 'Estac Troyes', country: 'França', league: 'Ligue 2', tier: 2, reputation: 65, budget: 16000000, color: '#003DA5' },
  { id: 'caen', name: 'Caen', country: 'França', league: 'Ligue 2', tier: 2, reputation: 67, budget: 20000000, color: '#C22A2A' },
  { id: 'gui', name: 'Guingamp', country: 'França', league: 'Ligue 2', tier: 2, reputation: 66, budget: 18000000, color: '#C22A2A' },
  { id: 'rod', name: 'Rodez', country: 'França', league: 'Ligue 2', tier: 2, reputation: 64, budget: 14000000, color: '#C22A2A' },
  { id: 'pau', name: 'Pau', country: 'França', league: 'Ligue 2', tier: 2, reputation: 63, budget: 12000000, color: '#003DA5' },
  { id: 'ajacc', name: 'Ajaccio', country: 'França', league: 'Ligue 2', tier: 2, reputation: 62, budget: 11000000, color: '#000000' },
  { id: 'bast', name: 'Bastia', country: 'França', league: 'Ligue 2', tier: 2, reputation: 65, budget: 15000000, color: '#0067B1' },
  { id: 'ami', name: 'Amiens', country: 'França', league: 'Ligue 2', tier: 2, reputation: 64, budget: 14000000, color: '#FFFFFF' },
  { id: 'ann', name: 'Annecy', country: 'França', league: 'Ligue 2', tier: 2, reputation: 61, budget: 10000000, color: '#C22A2A' },
  { id: 'dun', name: 'Dunkerque', country: 'França', league: 'Ligue 2', tier: 2, reputation: 60, budget: 9000000, color: '#003DA5' },
  { id: 'lava', name: 'Laval', country: 'França', league: 'Ligue 2', tier: 2, reputation: 62, budget: 11000000, color: '#FF6600' },
  { id: 'clerm', name: 'Clermont', country: 'França', league: 'Ligue 2', tier: 2, reputation: 67, budget: 20000000, color: '#C22A2A' },
  { id: 'mar', name: 'Martigues', country: 'França', league: 'Ligue 2', tier: 2, reputation: 58, budget: 8000000, color: '#0067B1' },
  { id: 'red', name: 'Red Star', country: 'França', league: 'Ligue 2', tier: 2, reputation: 59, budget: 8500000, color: '#006437' },
  { id: 'pfc', name: 'Pau FC', country: 'França', league: 'Ligue 2', tier: 2, reputation: 63, budget: 12000000, color: '#003DA5' },
  { id: 'quev', name: 'Quevilly-Rouen', country: 'França', league: 'Ligue 2', tier: 2, reputation: 60, budget: 9000000, color: '#000000' },

  // === PORTUGAL - PRIMEIRA LIGA (18 times) ===
  { id: 'ben', name: 'Benfica', country: 'Portugal', league: 'Primeira Liga', tier: 1, reputation: 88, budget: 120000000, color: '#C22A2A' },
  { id: 'por', name: 'Porto', country: 'Portugal', league: 'Primeira Liga', tier: 1, reputation: 89, budget: 130000000, color: '#003DA5' },
  { id: 'scp', name: 'Sporting CP', country: 'Portugal', league: 'Primeira Liga', tier: 1, reputation: 87, budget: 115000000, color: '#006437' },
  { id: 'braga', name: 'Braga', country: 'Portugal', league: 'Primeira Liga', tier: 1, reputation: 80, budget: 70000000, color: '#C22A2A' },
  { id: 'vitoria', name: 'Vitória de Guimarães', country: 'Portugal', league: 'Primeira Liga', tier: 1, reputation: 74, budget: 42000000, color: '#000000' },
  { id: 'fam', name: 'Famalicão', country: 'Portugal', league: 'Primeira Liga', tier: 1, reputation: 72, budget: 35000000, color: '#FFD700' },
  { id: 'boav', name: 'Boavista', country: 'Portugal', league: 'Primeira Liga', tier: 1, reputation: 71, budget: 32000000, color: '#000000' },
  { id: 'casap', name: 'Casa Pia', country: 'Portugal', league: 'Primeira Liga', tier: 1, reputation: 70, budget: 28000000, color: '#000000' },
  { id: 'estor', name: 'Estoril', country: 'Portugal', league: 'Primeira Liga', tier: 1, reputation: 69, budget: 25000000, color: '#FFD700' },
  { id: 'arou', name: 'Arouca', country: 'Portugal', league: 'Primeira Liga', tier: 1, reputation: 68, budget: 22000000, color: '#FFD700' },
  { id: 'morei', name: 'Moreirense', country: 'Portugal', league: 'Primeira Liga', tier: 1, reputation: 67, budget: 20000000, color: '#006437' },
  { id: 'rioav', name: 'Rio Ave', country: 'Portugal', league: 'Primeira Liga', tier: 1, reputation: 66, budget: 18000000, color: '#006437' },
  { id: 'gil', name: 'Gil Vicente', country: 'Portugal', league: 'Primeira Liga', tier: 1, reputation: 65, budget: 16000000, color: '#C22A2A' },
  { id: 'santac', name: 'Santa Clara', country: 'Portugal', league: 'Primeira Liga', tier: 1, reputation: 64, budget: 15000000, color: '#C22A2A' },
  { id: 'nation', name: 'Nacional', country: 'Portugal', league: 'Primeira Liga', tier: 1, reputation: 63, budget: 14000000, color: '#000000' },
  { id: 'estrel', name: 'Estrela da Amadora', country: 'Portugal', league: 'Primeira Liga', tier: 1, reputation: 62, budget: 12000000, color: '#C22A2A' },
  { id: 'avs', name: 'AVS', country: 'Portugal', league: 'Primeira Liga', tier: 1, reputation: 61, budget: 10000000, color: '#FFD700' },
  { id: 'faren', name: 'Farense', country: 'Portugal', league: 'Primeira Liga', tier: 1, reputation: 60, budget: 9000000, color: '#000000' },

  // === HOLANDA - EREDIVISIE (18 times) ===
  { id: 'ajx', name: 'Ajax', country: 'Holanda', league: 'Eredivisie', tier: 1, reputation: 86, budget: 100000000, color: '#C22A2A' },
  { id: 'psv', name: 'PSV Eindhoven', country: 'Holanda', league: 'Eredivisie', tier: 1, reputation: 85, budget: 95000000, color: '#FF6600' },
  { id: 'fey', name: 'Feyenoord', country: 'Holanda', league: 'Eredivisie', tier: 1, reputation: 84, budget: 90000000, color: '#C22A2A' },
  { id: 'az', name: 'AZ Alkmaar', country: 'Holanda', league: 'Eredivisie', tier: 1, reputation: 78, budget: 55000000, color: '#C22A2A' },
  { id: 'twe', name: 'Twente', country: 'Holanda', league: 'Eredivisie', tier: 1, reputation: 76, budget: 45000000, color: '#C22A2A' },
  { id: 'utr', name: 'Utrecht', country: 'Holanda', league: 'Eredivisie', tier: 1, reputation: 74, budget: 38000000, color: '#C22A2A' },
  { id: 'nec', name: 'NEC Nijmegen', country: 'Holanda', league: 'Eredivisie', tier: 1, reputation: 72, budget: 32000000, color: '#006437' },
  { id: 'spa', name: 'Sparta Rotterdam', country: 'Holanda', league: 'Eredivisie', tier: 1, reputation: 71, budget: 28000000, color: '#FFFFFF' },
  { id: 'goa', name: 'Go Ahead Eagles', country: 'Holanda', league: 'Eredivisie', tier: 1, reputation: 70, budget: 25000000, color: '#FFD700' },
  { id: 'hera', name: 'Heracles Almelo', country: 'Holanda', league: 'Eredivisie', tier: 1, reputation: 69, budget: 22000000, color: '#000000' },
  { id: 'forts', name: 'Fortuna Sittard', country: 'Holanda', league: 'Eredivisie', tier: 1, reputation: 68, budget: 20000000, color: '#FFD700' },
  { id: 'pec', name: 'PEC Zwolle', country: 'Holanda', league: 'Eredivisie', tier: 1, reputation: 67, budget: 18000000, color: '#003DA5' },
  { id: 'alm', name: 'Almere City', country: 'Holanda', league: 'Eredivisie', tier: 1, reputation: 66, budget: 16000000, color: '#000000' },
  { id: 'rkc', name: 'RKC Waalwijk', country: 'Holanda', league: 'Eredivisie', tier: 1, reputation: 65, budget: 15000000, color: '#FFD700' },
  { id: 'hee', name: 'Heerenveen', country: 'Holanda', league: 'Eredivisie', tier: 1, reputation: 70, budget: 25000000, color: '#003DA5' },
  { id: 'gron', name: 'Groningen', country: 'Holanda', league: 'Eredivisie', tier: 1, reputation: 69, budget: 22000000, color: '#006437' },
  { id: 'nacb', name: 'NAC Breda', country: 'Holanda', league: 'Eredivisie', tier: 1, reputation: 68, budget: 20000000, color: '#FFD700' },
  { id: 'wille', name: 'Willem II', country: 'Holanda', league: 'Eredivisie', tier: 1, reputation: 67, budget: 18000000, color: '#C22A2A' },

  // === ARGENTINA - PRIMERA DIVISIÓN (28 times) ===
  { id: 'boca', name: 'Boca Juniors', country: 'Argentina', league: 'Primera División', tier: 1, reputation: 90, budget: 100000000, color: '#003DA5' },
  { id: 'riv', name: 'River Plate', country: 'Argentina', league: 'Primera División', tier: 1, reputation: 91, budget: 110000000, color: '#FFFFFF' },
  { id: 'rac', name: 'Racing Club', country: 'Argentina', league: 'Primera División', tier: 1, reputation: 84, budget: 70000000, color: '#00BFFF' },
  { id: 'slo', name: 'San Lorenzo', country: 'Argentina', league: 'Primera División', tier: 1, reputation: 82, budget: 60000000, color: '#C22A2A' },
  { id: 'ind', name: 'Independiente', country: 'Argentina', league: 'Primera División', tier: 1, reputation: 83, budget: 65000000, color: '#C22A2A' },
  { id: 'hur', name: 'Huracán', country: 'Argentina', league: 'Primera División', tier: 1, reputation: 78, budget: 45000000, color: '#FFFFFF' },
  { id: 'vel', name: 'Vélez Sarsfield', country: 'Argentina', league: 'Primera División', tier: 1, reputation: 80, budget: 50000000, color: '#003DA5' },
  { id: 'estu', name: 'Estudiantes', country: 'Argentina', league: 'Primera División', tier: 1, reputation: 81, budget: 55000000, color: '#FFFFFF' },
  { id: 'lan', name: 'Lanús', country: 'Argentina', league: 'Primera División', tier: 1, reputation: 79, budget: 48000000, color: '#8E1F2F' },
  { id: 'god', name: 'Godoy Cruz', country: 'Argentina', league: 'Primera División', tier: 1, reputation: 75, budget: 38000000, color: '#003DA5' },
  { id: 'tig', name: 'Tigre', country: 'Argentina', league: 'Primera División', tier: 1, reputation: 74, budget: 35000000, color: '#003DA5' },
  { id: 'newell', name: "Newell's Old Boys", country: 'Argentina', league: 'Primera División', tier: 1, reputation: 76, budget: 40000000, color: '#000000' },
  { id: 'ban', name: 'Banfield', country: 'Argentina', league: 'Primera División', tier: 1, reputation: 73, budget: 32000000, color: '#006437' },
  { id: 'arg', name: 'Argentinos Juniors', country: 'Argentina', league: 'Primera División', tier: 1, reputation: 75, budget: 38000000, color: '#C22A2A' },
  { id: 'ros', name: 'Rosario Central', country: 'Argentina', league: 'Primera División', tier: 1, reputation: 77, budget: 42000000, color: '#FFD700' },
  { id: 'cen', name: 'Central Córdoba', country: 'Argentina', league: 'Primera División', tier: 1, reputation: 71, budget: 28000000, color: '#000000' },
  { id: 'plat', name: 'Platense', country: 'Argentina', league: 'Primera División', tier: 1, reputation: 70, budget: 25000000, color: '#FFFFFF' },
  { id: 'sarm', name: 'Sarmiento', country: 'Argentina', league: 'Primera División', tier: 1, reputation: 68, budget: 20000000, color: '#006437' },
  { id: 'def', name: 'Defensa y Justicia', country: 'Argentina', league: 'Primera División', tier: 1, reputation: 74, budget: 35000000, color: '#FFD700' },
  { id: 'bel', name: 'Belgrano', country: 'Argentina', league: 'Primera División', tier: 1, reputation: 72, budget: 30000000, color: '#003DA5' },
  { id: 'inst', name: 'Instituto', country: 'Argentina', league: 'Primera División', tier: 1, reputation: 69, budget: 22000000, color: '#C22A2A' },
  { id: 'tall', name: 'Talleres', country: 'Argentina', league: 'Primera División', tier: 1, reputation: 80, budget: 50000000, color: '#003DA5' },
  { id: 'sanm', name: 'San Martín SJ', country: 'Argentina', league: 'Primera División', tier: 1, reputation: 67, budget: 18000000, color: '#000000' },
  { id: 'gim', name: 'Gimnasia LP', country: 'Argentina', league: 'Primera División', tier: 1, reputation: 73, budget: 32000000, color: '#FFFFFF' },
  { id: 'barc', name: 'Barracas Central', country: 'Argentina', league: 'Primera División', tier: 1, reputation: 66, budget: 16000000, color: '#C22A2A' },
  { id: 'atl', name: 'Atlético Tucumán', country: 'Argentina', league: 'Primera División', tier: 1, reputation: 72, budget: 30000000, color: '#003DA5' },
  { id: 'comu', name: 'Comu', country: 'Argentina', league: 'Primera División', tier: 1, reputation: 65, budget: 15000000, color: '#000000' },
  { id: 'dep', name: 'Deportivo Riestra', country: 'Argentina', league: 'Primera División', tier: 1, reputation: 64, budget: 14000000, color: '#C22A2A' },

  // === TURQUIA - SÜPER LIG (20 times) ===
  { id: 'gal', name: 'Galatasaray', country: 'Turquia', league: 'Süper Lig', tier: 1, reputation: 85, budget: 110000000, color: '#FFD700' },
  { id: 'fener', name: 'Fenerbahçe', country: 'Turquia', league: 'Süper Lig', tier: 1, reputation: 84, budget: 105000000, color: '#003DA5' },
  { id: 'bes', name: 'Beşiktaş', country: 'Turquia', league: 'Süper Lig', tier: 1, reputation: 82, budget: 90000000, color: '#000000' },
  { id: 'tra', name: 'Trabzonspor', country: 'Turquia', league: 'Süper Lig', tier: 1, reputation: 79, budget: 65000000, color: '#8E1F2F' },
  { id: 'bas', name: 'Başakşehir', country: 'Turquia', league: 'Süper Lig', tier: 1, reputation: 76, budget: 50000000, color: '#FF6600' },
  { id: 'kay', name: 'Kayserispor', country: 'Turquia', league: 'Süper Lig', tier: 1, reputation: 72, budget: 35000000, color: '#C22A2A' },
  { id: 'ant', name: 'Antalyaspor', country: 'Turquia', league: 'Süper Lig', tier: 1, reputation: 71, budget: 32000000, color: '#C22A2A' },
  { id: 'kony', name: 'Konyaspor', country: 'Turquia', league: 'Süper Lig', tier: 1, reputation: 73, budget: 38000000, color: '#006437' },
  { id: 'siva', name: 'Sivasspor', country: 'Turquia', league: 'Süper Lig', tier: 1, reputation: 70, budget: 28000000, color: '#C22A2A' },
  { id: 'ala', name: 'Alanyaspor', country: 'Turquia', league: 'Süper Lig', tier: 1, reputation: 69, budget: 25000000, color: '#FF6600' },
  { id: 'gaz', name: 'Gaziantep', country: 'Turquia', league: 'Süper Lig', tier: 1, reputation: 68, budget: 22000000, color: '#C22A2A' },
  { id: 'hat', name: 'Hatayspor', country: 'Turquia', league: 'Süper Lig', tier: 1, reputation: 67, budget: 20000000, color: '#8E1F2F' },
  { id: 'adana', name: 'Adana Demirspor', country: 'Turquia', league: 'Süper Lig', tier: 1, reputation: 71, budget: 30000000, color: '#003DA5' },
  { id: 'kas', name: 'Kasımpaşa', country: 'Turquia', league: 'Süper Lig', tier: 1, reputation: 66, budget: 18000000, color: '#003DA5' },
  { id: 'sams', name: 'Samsunspor', country: 'Turquia', league: 'Süper Lig', tier: 1, reputation: 65, budget: 16000000, color: '#C22A2A' },
  { id: 'bod', name: 'Bodrum FK', country: 'Turquia', league: 'Süper Lig', tier: 1, reputation: 63, budget: 12000000, color: '#006437' },
  { id: 'eyu', name: 'Eyüpspor', country: 'Turquia', league: 'Süper Lig', tier: 1, reputation: 64, budget: 14000000, color: '#FFD700' },
  { id: 'rize', name: 'Çaykur Rizespor', country: 'Turquia', league: 'Süper Lig', tier: 1, reputation: 62, budget: 11000000, color: '#006437' },
  { id: 'göz', name: 'Göztepe', country: 'Turquia', league: 'Süper Lig', tier: 1, reputation: 68, budget: 22000000, color: '#C22A2A' },
  { id: 'koc', name: 'Kocaelispor', country: 'Turquia', league: 'Süper Lig', tier: 1, reputation: 61, budget: 10000000, color: '#000000' },
];

// ============================================
// BLOCO 2 - LIGAS E COMPETIÇÕES
// ============================================

export const LEAGUES = [
  // Brasil
  { id: 'bra-a', name: 'Brasileirão Série A', country: 'Brasil', tier: 1, teams: 20, format: 'pontos-corridos', reputation: 85 },
  { id: 'bra-b', name: 'Brasileirão Série B', country: 'Brasil', tier: 2, teams: 20, format: 'pontos-corridos', reputation: 70 },
  { id: 'bra-c', name: 'Brasileirão Série C', country: 'Brasil', tier: 3, teams: 20, format: 'pontos-corridos', reputation: 55 },
  // Espanha
  { id: 'esp-a', name: 'La Liga', country: 'Espanha', tier: 1, teams: 20, format: 'pontos-corridos', reputation: 92 },
  { id: 'esp-b', name: 'La Liga 2', country: 'Espanha', tier: 2, teams: 22, format: 'pontos-corridos', reputation: 75 },
  // Inglaterra
  { id: 'eng-a', name: 'Premier League', country: 'Inglaterra', tier: 1, teams: 20, format: 'pontos-corridos', reputation: 95 },
  { id: 'eng-b', name: 'Championship', country: 'Inglaterra', tier: 2, teams: 24, format: 'pontos-corridos', reputation: 78 },
  // Alemanha
  { id: 'ger-a', name: 'Bundesliga', country: 'Alemanha', tier: 1, teams: 18, format: 'pontos-corridos', reputation: 91 },
  { id: 'ger-b', name: '2. Bundesliga', country: 'Alemanha', tier: 2, teams: 18, format: 'pontos-corridos', reputation: 74 },
  // Itália
  { id: 'ita-a', name: 'Serie A', country: 'Itália', tier: 1, teams: 20, format: 'pontos-corridos', reputation: 90 },
  { id: 'ita-b', name: 'Serie B', country: 'Itália', tier: 2, teams: 20, format: 'pontos-corridos', reputation: 72 },
  // França
  { id: 'fra-a', name: 'Ligue 1', country: 'França', tier: 1, teams: 18, format: 'pontos-corridos', reputation: 84 },
  { id: 'fra-b', name: 'Ligue 2', country: 'França', tier: 2, teams: 20, format: 'pontos-corridos', reputation: 70 },
  // Portugal
  { id: 'por-a', name: 'Primeira Liga', country: 'Portugal', tier: 1, teams: 18, format: 'pontos-corridos', reputation: 80 },
  // Holanda
  { id: 'ned-a', name: 'Eredivisie', country: 'Holanda', tier: 1, teams: 18, format: 'pontos-corridos', reputation: 78 },
  // Argentina
  { id: 'arg-a', name: 'Primera División', country: 'Argentina', tier: 1, teams: 28, format: 'pontos-corridos', reputation: 82 },
  // Turquia
  { id: 'tur-a', name: 'Süper Lig', country: 'Turquia', tier: 1, teams: 20, format: 'pontos-corridos', reputation: 76 },
];

export const COMPETITIONS = [
  // Competições de Clubes
  { id: 'ucl', name: 'UEFA Champions League', type: 'continental', tier: 1, reputation: 100, prizePool: 2000000000, format: 'mata-mata', frequency: 'anual' },
  { id: 'uel', name: 'UEFA Europa League', type: 'continental', tier: 2, reputation: 90, prizePool: 500000000, format: 'mata-mata', frequency: 'anual' },
  { id: 'uecl', name: 'UEFA Conference League', type: 'continental', tier: 3, reputation: 75, prizePool: 250000000, format: 'mata-mata', frequency: 'anual' },
  { id: 'libertadores', name: 'Copa Libertadores', type: 'continental', tier: 1, reputation: 95, prizePool: 300000000, format: 'mata-mata', frequency: 'anual' },
  { id: 'sulamericana', name: 'Copa Sul-Americana', type: 'continental', tier: 2, reputation: 80, prizePool: 100000000, format: 'mata-mata', frequency: 'anual' },
  { id: 'mundial', name: 'Mundial de Clubes', type: 'mundial', tier: 1, reputation: 98, prizePool: 500000000, format: 'mata-mata', frequency: 'anual' },
  // Competições Nacionais
  { id: 'copa-bra', name: 'Copa do Brasil', country: 'Brasil', type: 'nacional', tier: 2, reputation: 80, prizePool: 80000000, format: 'mata-mata', frequency: 'anual' },
  { id: 'copa-esp', name: 'Copa del Rey', country: 'Espanha', type: 'nacional', tier: 2, reputation: 82, prizePool: 70000000, format: 'mata-mata', frequency: 'anual' },
  { id: 'fa-cup', name: 'FA Cup', country: 'Inglaterra', type: 'nacional', tier: 2, reputation: 85, prizePool: 60000000, format: 'mata-mata', frequency: 'anual' },
  { id: 'dfb-pokal', name: 'DFB-Pokal', country: 'Alemanha', type: 'nacional', tier: 2, reputation: 80, prizePool: 50000000, format: 'mata-mata', frequency: 'anual' },
  { id: 'copa-ita', name: 'Coppa Italia', country: 'Itália', type: 'nacional', tier: 2, reputation: 78, prizePool: 45000000, format: 'mata-mata', frequency: 'anual' },
  { id: 'copa-fra', name: 'Coupe de France', country: 'França', type: 'nacional', tier: 2, reputation: 75, prizePool: 40000000, format: 'mata-mata', frequency: 'anual' },
  { id: 'copa-por', name: 'Taça de Portugal', country: 'Portugal', type: 'nacional', tier: 2, reputation: 72, prizePool: 25000000, format: 'mata-mata', frequency: 'anual' },
  { id: 'copa-ned', name: 'KNVB Cup', country: 'Holanda', type: 'nacional', tier: 2, reputation: 70, prizePool: 20000000, format: 'mata-mata', frequency: 'anual' },
  { id: 'copa-arg', name: 'Copa Argentina', country: 'Argentina', type: 'nacional', tier: 2, reputation: 75, prizePool: 30000000, format: 'mata-mata', frequency: 'anual' },
  { id: 'copa-tur', name: 'Turkish Cup', country: 'Turquia', type: 'nacional', tier: 2, reputation: 68, prizePool: 15000000, format: 'mata-mata', frequency: 'anual' },
  // Competições de Seleções
  { id: 'copa-america', name: 'Copa América', type: 'selecoes', tier: 1, reputation: 90, prizePool: 100000000, format: 'mata-mata', frequency: 'quadrienal' },
  { id: 'euro', name: 'Eurocopa', type: 'selecoes', tier: 1, reputation: 92, prizePool: 150000000, format: 'mata-mata', frequency: 'quadrienal' },
  { id: 'copa-africa', name: 'Copa Africana', type: 'selecoes', tier: 1, reputation: 78, prizePool: 50000000, format: 'mata-mata', frequency: 'biennal' },
  { id: 'copa-asia', name: 'Copa da Ásia', type: 'selecoes', tier: 1, reputation: 76, prizePool: 40000000, format: 'mata-mata', frequency: 'quadrienal' },
  { id: 'copa-oro', name: 'Copa Ouro', type: 'selecoes', tier: 1, reputation: 72, prizePool: 30000000, format: 'mata-mata', frequency: 'biennal' },
  { id: 'copa-mundo', name: 'Copa do Mundo', type: 'selecoes', tier: 1, reputation: 100, prizePool: 500000000, format: 'mata-mata', frequency: 'quadrienal' },
];

// ============================================
// BLOCO 3 - TRAÇOS E CARACTERÍSTICAS DO JOGADOR
// ============================================

export const TRAITS = [
  // Traços Positivos
  { id: 'leader', name: 'Líder Natural', category: 'mental', description: 'Inspira companheiros em momentos difíceis', effect: { teamwork: +5, composure: +3 }, rarity: 'rare' },
  { id: 'clutch', name: 'Jogador de Decisão', category: 'mental', description: 'Melhora em jogos importantes e finais', effect: { composure: +7, decisions: +5 }, rarity: 'epic' },
  { id: 'workhorse', name: 'Guerreiro', category: 'mental', description: 'Nunca desiste, alta resistência', effect: { stamina: +5, workRate: +5 }, rarity: 'common' },
  { id: 'technician', name: 'Técnico', category: 'technical', description: 'Excelente controle de bola', effect: { dribbling: +5, passing: +3 }, rarity: 'common' },
  { id: 'sniper', name: 'Atirador', category: 'technical', description: 'Precisão excepcional nos chutes', effect: { finishing: +5, longShots: +5 }, rarity: 'rare' },
  { id: 'speedster', name: 'Velocista', category: 'physical', description: 'Extremamente rápido', effect: { pace: +7, acceleration: +5 }, rarity: 'common' },
  { id: 'tank', name: 'Tanque', category: 'physical', description: 'Força e resistência impressionantes', effect: { strength: +5, stamina: +3 }, rarity: 'common' },
  { id: 'aerial', name: 'Especialista Aéreo', category: 'physical', description: 'Domina jogadas aéreas', effect: { jumping: +5, heading: +5 }, rarity: 'rare' },
  { id: 'playmaker', name: 'Armador', category: 'technical', description: 'Visão de jogo excepcional', effect: { vision: +7, passing: +5 }, rarity: 'rare' },
  { id: 'wall', name: 'Muralha', category: 'defensive', description: 'Difícil de passar na defesa', effect: { tackling: +5, positioning: +5 }, rarity: 'rare' },
  { id: 'sweeper', name: 'Limpador', category: 'defensive', description: 'Antecipa passes e intercepta', effect: { interceptions: +7, positioning: +3 }, rarity: 'rare' },
  { id: 'setpiece', name: 'Cobrador de Falta', category: 'technical', description: 'Especialista em faltas e pênaltis', effect: { freeKick: +7, finishing: +2 }, rarity: 'epic' },
  { id: 'crosser', name: 'Cruzador', category: 'technical', description: 'Cruzamentos precisos', effect: { crossing: +7, vision: +2 }, rarity: 'common' },
  { id: 'dribbler', name: 'Driblador', category: 'technical', description: 'Habilidoso em dribles', effect: { dribbling: +7, agility: +3 }, rarity: 'common' },
  { id: 'tackler', name: 'Desarmador', category: 'defensive', description: 'Desarmes limpos e eficientes', effect: { tackling: +7, marking: +3 }, rarity: 'common' },
  { id: 'organizer', name: 'Organizador', category: 'goalkeeper', description: 'Comanda a defesa com precisão', effect: { communication: +7, positioning: +3 }, rarity: 'rare' },
  { id: 'reflex', name: 'Reflexo de Gato', category: 'goalkeeper', description: 'Reflexos sobre-humanos', effect: { reflexes: +7, oneOnOne: +3 }, rarity: 'epic' },
  { id: 'penalty', name: 'Especialista em Pênaltis', category: 'goalkeeper', description: 'Excelente em defesas de pênalti', effect: { reflexes: +5, composure: +3 }, rarity: 'rare' },
  // Traços Negativos
  { id: 'injury-prone', name: 'Fragilidade Física', category: 'negative', description: 'Mais propenso a lesões', effect: { injuryRisk: +20 }, rarity: 'common' },
  { id: 'hothead', name: 'Cabeça Quente', category: 'negative', description: 'Mais propenso a cartões', effect: { discipline: -10 }, rarity: 'common' },
  { id: 'lazy', name: 'Preguiçoso', category: 'negative', description: 'Taxa de trabalho baixa', effect: { workRate: -5, stamina: -3 }, rarity: 'common' },
  { id: 'inconsistent', name: 'Inconsistente', category: 'negative', description: 'Desempenho varia muito', effect: { consistency: -15 }, rarity: 'common' },
  { id: 'nervous', name: 'Nervoso', category: 'negative', description: 'Perde compostura sob pressão', effect: { composure: -5, decisions: -3 }, rarity: 'common' },
];

// ============================================
// BLOCO 4 - EVENTOS E CENÁRIOS DA CARREIRA
// ============================================

export const CAREER_EVENTS = [
  // Eventos Positivos
  { id: 'scout-spot', name: 'Olheiro Interessado', type: 'positive', description: 'Um olheiro de um clube maior está observando você', probability: 0.15, effects: { morale: +10, reputation: +5 } },
  { id: 'fan-favorite', name: 'Ídolo da Torcida', type: 'positive', description: 'A torcida começou a cantar seu nome', probability: 0.10, effects: { morale: +15, contractBonus: 50000 } },
  { id: 'media-praise', name: 'Elogio da Mídia', type: 'positive', description: 'Jornalistas elogiaram sua última atuação', probability: 0.20, effects: { morale: +10, reputation: +3 } },
  { id: 'mentor', name: 'Mentor Encontrado', type: 'positive', description: 'Um veterano do time está te ajudando a evoluir', probability: 0.08, effects: { experience: +20, composure: +2 } },
  { id: 'sponsorship', name: 'Patrocinador', type: 'positive', description: 'Uma marca quer patrocinar você', probability: 0.05, effects: { money: +100000, reputation: +10 } },
  { id: 'comeback', name: 'Retorno Heroico', type: 'positive', description: 'Você voltou de uma lesão e jogou muito bem', probability: 0.10, effects: { morale: +20, reputation: +8 } },
  { id: 'hat-trick', name: 'Hat-Trick', type: 'positive', description: 'Você marcou três gols em uma partida', probability: 0.03, effects: { morale: +25, reputation: +10, money: +50000 } },
  { id: 'assist-king', name: 'Rei das Assistências', type: 'positive', description: 'Três assistências em um jogo', probability: 0.04, effects: { morale: +20, vision: +2 } },
  { id: 'clean-sheet', name: 'Paredão', type: 'positive', description: 'Goleiro sem sofrer gols em 5 jogos seguidos', probability: 0.05, effects: { morale: +15, reflexes: +2 } },
  { id: 'captain', name: 'Braçadeira de Capitão', type: 'positive', description: 'Você foi nomeado capitão do time', probability: 0.06, effects: { morale: +20, leadership: +5, reputation: +10 } },
  // Eventos Negativos
  { id: 'injury-minor', name: 'Lesão Leve', type: 'negative', description: 'Entorse no tornozelo, 2 semanas fora', probability: 0.12, effects: { health: -10, morale: -10, weeksOut: 2 } },
  { id: 'injury-major', name: 'Lesão Grave', type: 'negative', description: 'Ruptura de ligamentos, 3 meses fora', probability: 0.04, effects: { health: -30, morale: -25, weeksOut: 12 } },
  { id: 'red-card', name: 'Cartão Vermelho', type: 'negative', description: 'Expulso na última partida', probability: 0.08, effects: { morale: -15, reputation: -5, suspension: 3 } },
  { id: 'media-criticism', name: 'Crítica da Mídia', type: 'negative', description: 'Jornalistas criticaram sua performance', probability: 0.15, effects: { morale: -10, reputation: -3 } },
  { id: 'bench', name: 'No Banco', type: 'negative', description: 'Você foi para o banco de reservas', probability: 0.18, effects: { morale: -15, reputation: -5 } },
  { id: 'transfer-rumor', name: 'Rumor de Transferência', type: 'negative', description: 'Especulações sobre sua saída do clube', probability: 0.10, effects: { morale: -8, focus: -5 } },
  { id: 'coach-conflict', name: 'Conflito com Técnico', type: 'negative', description: 'Desentendimento com o treinador', probability: 0.07, effects: { morale: -20, playTime: -10 } },
  { id: 'teammate-conflict', name: 'Conflito com Companheiro', type: 'negative', description: 'Briga no vestiário com outro jogador', probability: 0.06, effects: { morale: -15, teamwork: -5 } },
  { id: 'financial-crisis', name: 'Crise Financeira do Clube', type: 'negative', description: 'O clube está com problemas de caixa', probability: 0.05, effects: { morale: -10, salaryDelay: true } },
  { id: 'doping-accusation', name: 'Acusação de Doping', type: 'negative', description: 'Você foi acusado de uso de substâncias', probability: 0.01, effects: { morale: -30, reputation: -20, suspension: 8 } },
  // Eventos Neutros
  { id: 'new-coach', name: 'Novo Técnico', type: 'neutral', description: 'O clube contratou um novo treinador', probability: 0.10, effects: { morale: 0, tacticsChange: true } },
  { id: 'teammate-transfer', name: 'Saída de Companheiro', type: 'neutral', description: 'Um jogador importante foi vendido', probability: 0.12, effects: { morale: -5, teamStrength: -5 } },
  { id: 'new-signing', name: 'Reforço Contratado', type: 'neutral', description: 'O clube trouxe um novo jogador', probability: 0.12, effects: { morale: +3, competition: +5 } },
  { id: 'international-duty', name: 'Convocação', type: 'neutral', description: 'Você foi convocado para a seleção', probability: 0.08, effects: { morale: +10, fatigue: +10 } },
  { id: 'contract-renewal', name: 'Renovação de Contrato', type: 'neutral', description: 'O clube quer renovar seu contrato', probability: 0.15, effects: { morale: +5, negotiation: true } },
];

// ============================================
// BLOCO 5 - CONFIGURAÇÕES DE JOGO
// ============================================

export const GAME_CONFIG = {
  // Progressão do Jogador
  playerProgression: {
    baseXPPerMatch: 100,
    bonusXPWin: 50,
    bonusXPMOTM: 100,
    bonusXPGoal: 25,
    bonusXPAssist: 20,
    bonusXPCleanSheet: 30,
    maxAttributeValue: 99,
    peakAge: { min: 26, max: 30 },
    declineAge: 32,
    retirementAge: { min: 35, max: 40 },
  },
  // Sistema de Moral
  moraleSystem: {
    maxMorale: 100,
    minMorale: 0,
    baseMorale: 70,
    moraleEffects: {
      high: { threshold: 80, performanceBonus: 0.10 },
      medium: { threshold: 50, performanceBonus: 0.00 },
      low: { threshold: 20, performanceBonus: -0.10 },
      critical: { threshold: 0, performanceBonus: -0.20 },
    },
  },
  // Sistema de Lesões
  injurySystem: {
    minorInjuryChance: 0.05,
    majorInjuryChance: 0.01,
    recoveryRate: 0.10,
    injuryProneMultiplier: 2.0,
  },
  // Sistema de Transferências
  transferSystem: {
    minReleaseClause: 5000000,
    maxReleaseClauseMultiplier: 3.0,
    transferWindow: { start: '01/07', end: '31/08' },
    loanWindow: { start: '01/01', end: '31/01' },
    maxLoanDuration: 2,
    buyOptionChance: 0.30,
  },
  // Sistema Financeiro
  financialSystem: {
    baseSalary: { min: 5000, max: 50000 },
    salaryMultiplier: {
      tier1: 5.0,
      tier2: 2.5,
      tier3: 1.0,
    },
    bonusGoal: 10000,
    bonusAssist: 5000,
    bonusCleanSheet: 8000,
    bonusMOTM: 15000,
    bonusTitle: 100000,
  },
  // Sistema de Reputação
  reputationSystem: {
    maxReputation: 100,
    reputationGainWin: 2,
    reputationGainMOTM: 3,
    reputationGainGoal: 1,
    reputationLossDefeat: -1,
    reputationLossRedCard: -5,
  },
};

// ============================================
// BLOCO 6 - NOMES DE JOGADORES IA (GERAÇÃO)
// ============================================

export const FIRST_NAMES = {
  brasil: ['Gabriel', 'Matheus', 'Lucas', 'Pedro', 'João', 'Rafael', 'Felipe', 'Bruno', 'Thiago', 'Vinícius', 'Rodrigo', 'Arthur', 'Davi', 'Miguel', 'Enzo', 'Gustavo', 'Leonardo', 'Daniel', 'André', 'Marcos', 'Carlos', 'José', 'Antônio', 'Francisco', 'Paulo', 'Ricardo', 'Fernando', 'Eduardo', 'Marcelo', 'Alexandre', 'Julio', 'Renato', 'Roberto', 'Diego', 'William', 'Igor', 'Vitor', 'Samuel', 'Henrique', 'Otávio', 'Everton', 'Douglas', 'Wesley', 'Nathan', 'Yuri', 'Caio', 'Luan', 'Murilo', 'Ruan', 'Kauê'],
  argentina: ['Lionel', 'Sergio', 'Ángel', 'Gonzalo', 'Javier', 'Carlos', 'Pablo', 'Martín', 'Nicolás', 'Juan', 'Rodrigo', 'Ezequiel', 'Facundo', 'Lucas', 'Mateo', 'Thiago', 'Emiliano', 'Franco', 'Maximiliano', 'Leandro', 'Marcos', 'Diego', 'Gabriel', 'Julián', 'Enzo', 'Alexis', 'Lautaro', 'Paulo', 'Cristian', 'Walter', 'Mauro', 'Ramiro', 'Ignacio', 'Tomás', 'Joaquín', 'Bruno', 'Agustín', 'Federico', 'Alan', 'Damián'],
  espanha: ['Sergio', 'Jordi', 'Gerard', 'Andrés', 'Iker', 'David', 'Fernando', 'Juan', 'Pedro', 'Álvaro', 'Marco', 'Dani', 'Pablo', 'Marcos', 'Raúl', 'Iñigo', 'Mikel', 'Ander', 'Asier', 'Aitor', 'Unai', 'Jon', 'Igor', 'Adrián', 'Santi', 'Rodri', 'Ferran', 'Ansu', 'Gavi', 'Nico', 'Yeremy', 'Bryan', 'Eric', 'Alejandro', 'Hugo', 'Diego', 'José', 'Manuel', 'Antonio', 'Luis'],
  inglaterra: ['Harry', 'Jack', 'Declan', 'Bukayo', 'Jude', 'Phil', 'Marcus', 'Trent', 'Jordan', 'Kyle', 'John', 'James', 'Luke', 'Ben', 'Aaron', 'Reece', 'Conor', 'Mason', 'Jadon', 'Raheem', 'Tammy', 'Callum', 'Foden', 'Grealish', 'Rice', 'Saka', 'Bellingham', 'Walker', 'Stones', 'Maguire', 'Shaw', 'Rashford', 'Sancho', 'Mount', 'Gallagher', 'Palmer', 'Gordon', 'Watkins', 'Kane', 'Sterling'],
  alemanha: ['Manuel', 'Thomas', 'Joshua', 'Leroy', 'Jamal', 'Kai', 'Timo', 'İlkay', 'Leon', 'Serge', 'Julian', 'Toni', 'Mats', 'Antonio', 'Niclas', 'David', 'Florian', 'Jonas', 'Maximilian', 'Niklas', 'Robin', 'Lukas', 'Marc', 'Kevin', 'Emre', 'Jonathan', 'Benjamin', 'Nico', 'Chris', 'Dennis', 'Marcel', 'Philipp', 'Leroy', 'Kai', 'Timo', 'İlkay', 'Joshua', 'Jamal', 'Florian', 'Wirtz'],
  italia: ['Gianluigi', 'Marco', 'Lorenzo', 'Nicolò', 'Federico', 'Ciro', 'Jorginho', 'Leonardo', 'Alessandro', 'Matteo', 'Manuel', 'Lorenzo', 'Andrea', 'Daniele', 'Giorgio', 'Claudio', 'Simone', 'Francesco', 'Antonio', 'Roberto', 'Stefano', 'Luca', 'Giacomo', 'Davide', 'Mattia', 'Riccardo', 'Tommaso', 'Gabriel', 'Christian', 'Bryan', 'Sandro', 'Emerson', 'Nicolò', 'Federico', 'Gianluca', 'Pietro', 'Samuele', 'Filippo', 'Edoardo', 'Vincenzo'],
  frança: ['Kylian', 'Antoine', 'Ousmane', 'Aurélien', 'Eduardo', 'Kingsley', 'Randal', 'Dayot', 'Ibrahima', 'Jules', 'Théo', 'Mike', 'Hugo', 'Olivier', 'Karim', 'Paul', 'N\'Golo', 'Adrien', 'Benjamin', 'Wissam', 'Corentin', 'Moussa', 'Tanguy', 'Steven', 'Presnel', 'Lucas', 'Benjamin', 'Raphaël', 'Alphonse', 'Youssouf', 'Randal', 'Bradley', 'Warren', 'Manu', 'Leny', 'Desire', 'Elye', 'Mathys', 'Désiré', 'Rayan'],
  portugal: ['Cristiano', 'Bruno', 'Bernardo', 'João', 'Rúben', 'Diogo', 'Rafael', 'André', 'Gonçalo', 'Pedro', 'Ricardo', 'Nuno', 'Mário', 'Fábio', 'Luís', 'Tiago', 'Miguel', 'Hugo', 'Paulo', 'Sérgio', 'José', 'António', 'Manuel', 'Francisco', 'Duarte', 'Tomás', 'Afonso', 'Dinis', 'Guilherme', 'Martim', 'Santiago', 'Lucas', 'Gabriel', 'Davi', 'Rodrigo', 'Samuel', 'Diogo', 'Gonçalo', 'Rafael', 'André'],
  holanda: ['Virgil', 'Frenkie', 'Memphis', 'Cody', 'Nathan', 'Steven', 'Daley', 'Matthijs', 'Donny', 'Wout', 'Denzel', 'Donyell', 'Xavi', 'Teun', 'Noa', 'Jurriën', 'Tyrell', 'Jerdy', 'Kenneth', 'Justin', 'Quinten', 'Brian', 'Davy', 'Stefan', 'Jasper', 'Mark', 'Maarten', 'Tim', 'Kevin', 'Luuk', 'Guus', 'Tijjani', 'Joey', 'Ian', 'Devyne', 'Mats', 'Ryan', 'Bart', 'Sven', 'Rick'],
};

export const LAST_NAMES = {
  brasil: ['Silva', 'Santos', 'Oliveira', 'Souza', 'Rodrigues', 'Ferreira', 'Almeida', 'Costa', 'Pereira', 'Carvalho', 'Gomes', 'Martins', 'Araújo', 'Melo', 'Barbosa', 'Ribeiro', 'Alves', 'Lima', 'Monteiro', 'Mendes', 'Nunes', 'Cardoso', 'Rocha', 'Neves',   'Moreira', 'Barros', 'Freitas', 'Pinto', 'Cruz', 'Borges', 'Andrade', 'Vieira', 'Moura', 'Dias', 'Campos', 'Teixeira', 'Farias', 'Cunha', 'Rezende', 'Peixoto', 'Guimarães', 'Machado', 'Nascimento', 'Bezerra', 'Braga', 'Correia', 'Leite', 'Franco', 'Medeiros', 'Pacheco', 'Fonseca', 'Moraes', 'Ramos', 'Aguiar', 'Siqueira', 'Tavares', 'Brito', 'Paiva', 'Cavalcanti', 'Drumond', 'Figueiredo', 'Lopes', 'Marques', 'Queiroz'],
  argentina: ['Martínez', 'Rodríguez', 'González', 'Fernández', 'López', 'Gómez', 'Sánchez', 'Pérez', 'García', 'Romero', 'Álvarez', 'Torres', 'Ruiz', 'Ramírez', 'Flores', 'Benítez', 'Acosta', 'Medina', 'Herrera', 'Agüero', 'Di María', 'Mascherano', 'Higuaín', 'Pastore', 'Dybala', 'Icardi', 'Milito', 'Riquelme', 'Aimar', 'Saviola', 'Crespo', 'Batistuta', 'Maradona', 'Messi', 'Kempes', 'Passarella', 'Bilardo', 'Bianchi', 'Menotti', 'Sabella'],
  espanha: ['García', 'Rodríguez', 'González', 'Fernández', 'López', 'Martínez', 'Sánchez', 'Pérez', 'Gómez', 'Martín', 'Jiménez', 'Ruiz', 'Hernández', 'Díaz', 'Moreno', 'Álvarez', 'Romero', 'Alonso', 'Gutiérrez', 'Navarro', 'Torres', 'Domínguez', 'Vázquez', 'Ramos', 'Casillas', 'Iniesta', 'Xavi', 'Busquets', 'Piqué', 'Alba', 'Carvajal', 'Asensio', 'Morata', 'Olmo', 'Pedri', 'Gavi', 'Yamal', 'Williams', 'Oyarzabal', 'Merino'],
  inglaterra: ['Smith', 'Jones', 'Williams', 'Brown', 'Taylor', 'Davies', 'Evans', 'Wilson', 'Thomas', 'Johnson', 'Roberts', 'Robinson', 'Thompson', 'Wright', 'Walker', 'White', 'Edwards', 'Hughes', 'Green', 'Hall', 'Lewis', 'Harris', 'Clarke', 'Patel', 'Jackson', 'Wood', 'Turner', 'Martin', 'Cooper', 'Hill', 'Ward', 'Morris', 'Moore', 'Clark', 'Lee', 'King', 'Baker', 'Harrison', 'Morgan', 'Allen'],
  alemanha: ['Müller', 'Schmidt', 'Schneider', 'Fischer', 'Weber', 'Meyer', 'Wagner', 'Becker', 'Schulz', 'Hoffmann', 'Koch', 'Bauer', 'Richter', 'Klein', 'Wolf', 'Schröder', 'Neuer', 'Kroos', 'Goretzka', 'Kimmich', 'Gnabry', 'Sané', 'Musiala', 'Wirtz', 'Havertz', 'Ter Stegen', 'Gündoğan', 'Can', 'Hummels', 'Rüdiger', 'Tah', 'Andrich', 'Mittelestädt', 'Henrichs', 'Anton', 'Raum', 'Fuhrich', 'Beier', 'Undav', 'Pavlovic'],
  italia: ['Rossi', 'Russo', 'Ferrari', 'Esposito', 'Bianchi', 'Romano', 'Colombo', 'Ricci', 'Marino', 'Greco', 'Bruno', 'Galli', 'Costa', 'Conti', 'Giordano', 'Mancini', 'Lombardi', 'Moretti', 'Barbieri', 'Fontana', 'Donnarumma', 'Bastoni', 'Calafiori', 'Dimarco', 'Frattesi', 'Barella', 'Jorginho', 'Locatelli', 'Fagioli', 'Raspadori', 'Scamacca', 'Retegui', 'Kean', 'Chiesa', 'Berardi', 'Orsolini', 'El Shaarawy', 'Immobile', 'Immobile', 'Verratti'],
  frança: ['Martin', 'Bernard', 'Dubois', 'Thomas', 'Robert', 'Richard', 'Petit', 'Durand', 'Leroy', 'Moreau', 'Simon', 'Laurent', 'Lefebvre', 'Michel', 'Garcia', 'Roux', 'Bonnet', 'André', 'François', 'Mercier', 'Mbappé', 'Dembélé', 'Griezmann', 'Pogba', 'Kanté', 'Varane', 'Upamecano', 'Konaté', 'Hernández', 'Tchouaméni', 'Camavinga', 'Kolo Muani', 'Thuram', 'Coman', 'Maignan', 'Lloris', 'Benzema', 'Giroud', 'Martial', 'Sissoko'],
  portugal: ['Silva', 'Santos', 'Ferreira', 'Costa', 'Oliveira', 'Pereira', 'Martins', 'Rodrigues', 'Almeida', 'Carvalho', 'Gomes', 'Lopes', 'Marques', 'Ribeiro', 'Pinto', 'Alves', 'Nunes', 'Mendes', 'Cardoso', 'Rocha', 'Ronaldo', 'Fernandes', 'Silva', 'Dias', 'Cancelo', 'Leão', 'Félix', 'Neto', 'Jota', 'Palhinha', 'Vitinha', 'Neves', 'Semedo', 'Dalot', 'Guerreiro', 'Raphinha', 'B.Silva', 'B.Fernandes', 'Pepe', 'Patrício'],
  holanda: ['De Jong', 'De Ligt', 'Van Dijk', 'Depay', 'Gakpo', 'Dumfries', 'De Vrij', 'Blind', 'Ake', 'Timber', 'Malen', 'Weghorst', 'Bergwijn', 'Klaassen', 'De Roon', 'Schouten', 'Reijnders', 'Gravenberch', 'Simons', 'Frimpong', 'Geertruida', 'Hartman', 'Bakayoko', 'Brobbey', 'Lang', ' Til', 'Wieffer', 'Veerman', 'Meeuwis', 'Van de Ven', 'Zirkzee', 'Dijksteel', 'Obispo', 'Bazoer', 'Koopmeiners', 'Wijnaldum', 'Strootman', 'Sneijder', 'Robben', 'Van Persie'],
};

// ============================================
// BLOCO 7 - POSIÇÕES E ATRIBUTOS DO JOGADOR
// ============================================

export const PLAYER_POSITIONS = [
  { id: 'gk', name: 'Goleiro', abbreviation: 'GK', category: 'goalkeeper', attributes: ['reflexes', 'handling', 'positioning', 'communication', 'oneOnOne', 'kicking'] },
  { id: 'cb', name: 'Zagueiro', abbreviation: 'CB', category: 'defender', attributes: ['marking', 'tackling', 'heading', 'positioning', 'strength', 'jumping', 'passing', 'vision'] },
  { id: 'lb', name: 'Lateral Esquerdo', abbreviation: 'LB', category: 'defender', attributes: ['pace', 'stamina', 'crossing', 'tackling', 'marking', 'dribbling', 'passing', 'vision'] },
  { id: 'rb', name: 'Lateral Direito', abbreviation: 'RB', category: 'defender', attributes: ['pace', 'stamina', 'crossing', 'tackling', 'marking', 'dribbling', 'passing', 'vision'] },
  { id: 'dm', name: 'Volante', abbreviation: 'DM', category: 'midfielder', attributes: ['tackling', 'passing', 'vision', 'positioning', 'strength', 'stamina', 'composure', 'workRate'] },
  { id: 'cm', name: 'Meio-Campista', abbreviation: 'CM', category: 'midfielder', attributes: ['passing', 'vision', 'dribbling', 'stamina', 'tackling', 'positioning', 'composure', 'workRate'] },
  { id: 'am', name: 'Meia Ofensivo', abbreviation: 'AM', category: 'midfielder', attributes: ['passing', 'vision', 'dribbling', 'finishing', 'agility', 'composure', 'creativity', 'longShots'] },
  { id: 'lm', name: 'Meia Esquerda', abbreviation: 'LM', category: 'midfielder', attributes: ['pace', 'crossing', 'dribbling', 'passing', 'stamina', 'vision', 'finishing', 'agility'] },
  { id: 'rm', name: 'Meia Direita', abbreviation: 'RM', category: 'midfielder', attributes: ['pace', 'crossing', 'dribbling', 'passing', 'stamina', 'vision', 'finishing', 'agility'] },
  { id: 'lw', name: 'Ponta Esquerda', abbreviation: 'LW', category: 'forward', attributes: ['pace', 'dribbling', 'crossing', 'finishing', 'agility', 'acceleration', 'vision', 'longShots'] },
  { id: 'rw', name: 'Ponta Direita', abbreviation: 'RW', category: 'forward', attributes: ['pace', 'dribbling', 'crossing', 'finishing', 'agility', 'acceleration', 'vision', 'longShots'] },
  { id: 'st', name: 'Centroavante', abbreviation: 'ST', category: 'forward', attributes: ['finishing', 'heading', 'strength', 'positioning', 'pace', 'composure', 'dribbling', 'jumping'] },
  { id: 'cf', name: 'Segundo Atacante', abbreviation: 'CF', category: 'forward', attributes: ['finishing', 'vision', 'dribbling', 'passing', 'positioning', 'composure', 'agility', 'longShots'] },
];

export const PLAYER_ATTRIBUTES = {
  // Técnicos
  finishing: { name: 'Finalização', category: 'technical', description: 'Precisão nos chutes ao gol' },
  passing: { name: 'Passe', category: 'technical', description: 'Precisão e alcance dos passes' },
  dribbling: { name: 'Drible', category: 'technical', description: 'Controle de bola em movimento' },
  crossing: { name: 'Cruzamento', category: 'technical', description: 'Precisão nos cruzamentos' },
  longShots: { name: 'Chute de Longe', category: 'technical', description: 'Precisão em chutes de distância' },
  freeKick: { name: 'Cobrança de Falta', category: 'technical', description: 'Precisão em faltas e escanteios' },
  heading: { name: 'Cabeceio', category: 'technical', description: 'Precisão e força no cabeceio' },
  // Mentais
  vision: { name: 'Visão', category: 'mental', description: 'Capacidade de enxergar passes' },
  composure: { name: 'Compostura', category: 'mental', description: 'Mantém a calma sob pressão' },
  decisions: { name: 'Decisões', category: 'mental', description: 'Qualidade das escolhas em campo' },
  concentration: { name: 'Concentração', category: 'mental', description: 'Foco durante toda a partida' },
  aggression: { name: 'Agressividade', category: 'mental', description: 'Intensidade nos duelos' },
  anticipation: { name: 'Antecipação', category: 'mental', description: 'Prever jogadas adversárias' },
  workRate: { name: 'Taxa de Trabalho', category: 'mental', description: 'Esfôrço defensivo e ofensivo' },
  teamwork: { name: 'Trabalho em Equipe', category: 'mental', description: 'Joga para o coletivo' },
  leadership: { name: 'Liderança', category: 'mental', description: 'Inspira companheiros' },
  // Físicos
  pace: { name: 'Velocidade', category: 'physical', description: 'Velocidade em linha reta' },
  acceleration: { name: 'Aceleração', category: 'physical', description: 'Capacidade de ganhar velocidade' },
  agility: { name: 'Agilidade', category: 'physical', description: 'Mudanças rápidas de direção' },
  strength: { name: 'Força', category: 'physical', description: 'Força em duelos corporais' },
  stamina: { name: 'Resistência', category: 'physical', description: 'Capacidade de manter o ritmo' },
  jumping: { name: 'Salto', category: 'physical', description: 'Altura no salto' },
  balance: { name: 'Equilíbrio', category: 'physical', description: 'Estabilidade com a bola' },
  // Defensivos
  marking: { name: 'Marcação', category: 'defensive', description: 'Acompanhar adversários' },
  tackling: { name: 'Desarme', category: 'defensive', description: 'Roubar a bola sem falta' },
  interceptions: { name: 'Interceptação', category: 'defensive', description: 'Cortar passes adversários' },
  positioning: { name: 'Posicionamento', category: 'defensive', description: 'Estar no lugar certo' },
  // Goleiro
  reflexes: { name: 'Reflexos', category: 'goalkeeper', description: 'Reação a finalizações' },
  handling: { name: 'Manuseio', category: 'goalkeeper', description: 'Segurar a bola com segurança' },
  communication: { name: 'Comunicação', category: 'goalkeeper', description: 'Organizar a defesa' },
  oneOnOne: { name: 'Um contra Um', category: 'goalkeeper', description: 'Sair bem nas jogadas face a face' },
  kicking: { name: 'Chutão', category: 'goalkeeper', description: 'Precisão nos chutes de meta' },
};

// ============================================
// BLOCO 8 - FORMAÇÕES TÁTICAS
// ============================================

export const FORMATIONS = [
  {
    id: '4-3-3',
    name: '4-3-3 Clássico',
    positions: ['gk', 'lb', 'cb', 'cb', 'rb', 'dm', 'cm', 'cm', 'lw', 'st', 'rw'],
    description: 'Equilibrado, forte nos lados',
    style: 'balanced',
  },
  {
    id: '4-3-3-att',
    name: '4-3-3 Ofensivo',
    positions: ['gk', 'lb', 'cb', 'cb', 'rb', 'cm', 'cm', 'am', 'lw', 'st', 'rw'],
    description: 'Mais criativo no meio',
    style: 'attacking',
  },
  {
    id: '4-2-3-1',
    name: '4-2-3-1',
    positions: ['gk', 'lb', 'cb', 'cb', 'rb', 'dm', 'dm', 'lm', 'am', 'rm', 'st'],
    description: 'Sólido defensivamente, criativo no meio',
    style: 'balanced',
  },
  {
    id: '4-4-2',
    name: '4-4-2 Clássico',
    positions: ['gk', 'lb', 'cb', 'cb', 'rb', 'lm', 'cm', 'cm', 'rm', 'st', 'st'],
    description: 'Tradicional, bom em contra-ataques',
    style: 'balanced',
  },
  {
    id: '4-4-2-diamond',
    name: '4-4-2 Losango',
    positions: ['gk', 'lb', 'cb', 'cb', 'rb', 'dm', 'lm', 'rm', 'am', 'st', 'st'],
    description: 'Controle central, laterais ofensivos',
    style: 'attacking',
  },
  {
    id: '3-5-2',
    name: '3-5-2',
    positions: ['gk', 'cb', 'cb', 'cb', 'lwb', 'dm', 'cm', 'cm', 'rwb', 'st', 'st'],
    description: 'Forte no meio, alas trabalhadores',
    style: 'balanced',
  },
  {
    id: '3-4-3',
    name: '3-4-3 Ofensivo',
    positions: ['gk', 'cb', 'cb', 'cb', 'lm', 'cm', 'cm', 'rm', 'lw', 'st', 'rw'],
    description: 'Muito ofensivo, arriscado defensivamente',
    style: 'attacking',
  },
  {
    id: '5-3-2',
    name: '5-3-2 Defensivo',
    positions: ['gk', 'lwb', 'cb', 'cb', 'cb', 'rwb', 'dm', 'cm', 'cm', 'st', 'st'],
    description: 'Muito sólido na defesa',
    style: 'defensive',
  },
  {
    id: '4-1-4-1',
    name: '4-1-4-1',
    positions: ['gk', 'lb', 'cb', 'cb', 'rb', 'dm', 'lm', 'cm', 'cm', 'rm', 'st'],
    description: 'Controle do meio-campo',
    style: 'balanced',
  },
  {
    id: '4-5-1',
    name: '4-5-1 Defensivo',
    positions: ['gk', 'lb', 'cb', 'cb', 'rb', 'dm', 'lm', 'cm', 'cm', 'rm', 'st'],
    description: 'Fechado, forte em transições',
    style: 'defensive',
  },
  {
    id: '3-4-2-1',
    name: '3-4-2-1',
    positions: ['gk', 'cb', 'cb', 'cb', 'lwb', 'dm', 'dm', 'rwb', 'am', 'am', 'st'],
    description: 'Criativo com dois meias ofensivos',
    style: 'attacking',
  },
  {
    id: '4-2-2-2',
    name: '4-2-2-2',
    positions: ['gk', 'lb', 'cb', 'cb', 'rb', 'dm', 'dm', 'am', 'am', 'st', 'st'],
    description: 'Compacto, bom pressão alta',
    style: 'balanced',
  },
];

// ============================================
// BLOCO 9 - SELEÇÕES NACIONAIS
// ============================================

export const NATIONAL_TEAMS = [
  // América do Sul
  { id: 'bra', name: 'Brasil', confederation: 'CONMEBOL', reputation: 95, rank: 1 },
  { id: 'arg', name: 'Argentina', confederation: 'CONMEBOL', reputation: 94, rank: 2 },
  { id: 'uru', name: 'Uruguai', confederation: 'CONMEBOL', reputation: 88, rank: 3 },
  { id: 'col', name: 'Colômbia', confederation: 'CONMEBOL', reputation: 85, rank: 4 },
  { id: 'chi', name: 'Chile', confederation: 'CONMEBOL', reputation: 80, rank: 5 },
  { id: 'par', name: 'Paraguai', confederation: 'CONMEBOL', reputation: 78, rank: 6 },
  { id: 'ecu', name: 'Equador', confederation: 'CONMEBOL', reputation: 77, rank: 7 },
  { id: 'per', name: 'Peru', confederation: 'CONMEBOL', reputation: 75, rank: 8 },
  { id: 'ven', name: 'Venezuela', confederation: 'CONMEBOL', reputation: 70, rank: 9 },
  { id: 'bol', name: 'Bolívia', confederation: 'CONMEBOL', reputation: 65, rank: 10 },
  // Europa
  { id: 'fra', name: 'França', confederation: 'UEFA', reputation: 95, rank: 1 },
  { id: 'esp', name: 'Espanha', confederation: 'UEFA', reputation: 94, rank: 2 },
  { id: 'eng', name: 'Inglaterra', confederation: 'UEFA', reputation: 93, rank: 3 },
  { id: 'ger', name: 'Alemanha', confederation: 'UEFA', reputation: 92, rank: 4 },
  { id: 'por', name: 'Portugal', confederation: 'UEFA', reputation: 91, rank: 5 },
  { id: 'ita', name: 'Itália', confederation: 'UEFA', reputation: 90, rank: 6 },
  { id: 'ned', name: 'Holanda', confederation: 'UEFA', reputation: 89, rank: 7 },
  { id: 'bel', name: 'Bélgica', confederation: 'UEFA', reputation: 88, rank: 8 },
  { id: 'cro', name: 'Croácia', confederation: 'UEFA', reputation: 87, rank: 9 },
  { id: 'sui', name: 'Suíça', confederation: 'UEFA', reputation: 82, rank: 10 },
  { id: 'den', name: 'Dinamarca', confederation: 'UEFA', reputation: 81, rank: 11 },
  { id: 'aut', name: 'Áustria', confederation: 'UEFA', reputation: 79, rank: 12 },
  { id: 'pol', name: 'Polônia', confederation: 'UEFA', reputation: 78, rank: 13 },
  { id: 'tur', name: 'Turquia', confederation: 'UEFA', reputation: 78, rank: 14 },
  { id: 'srb', name: 'Sérvia', confederation: 'UEFA', reputation: 77, rank: 15 },
  { id: 'ukr', name: 'Ucrânia', confederation: 'UEFA', reputation: 76, rank: 16 },
  { id: 'cze', name: 'Rep. Tcheca', confederation: 'UEFA', reputation: 76, rank: 17 },
  { id: 'wal', name: 'País de Gales', confederation: 'UEFA', reputation: 75, rank: 18 },
  { id: 'swe', name: 'Suécia', confederation: 'UEFA', reputation: 75, rank: 19 },
  { id: 'nor', name: 'Noruega', confederation: 'UEFA', reputation: 74, rank: 20 },
  // África
  { id: 'mar', name: 'Marrocos', confederation: 'CAF', reputation: 82, rank: 1 },
  { id: 'sen', name: 'Senegal', confederation: 'CAF', reputation: 81, rank: 2 },
  { id: 'tun', name: 'Tunísia', confederation: 'CAF', reputation: 78, rank: 3 },
  { id: 'egy', name: 'Egito', confederation: 'CAF', reputation: 78, rank: 4 },
  { id: 'nga', name: 'Nigéria', confederation: 'CAF', reputation: 77, rank: 5 },
  { id: 'alg', name: 'Argélia', confederation: 'CAF', reputation: 76, rank: 6 },
  { id: 'cmr', name: 'Camarões', confederation: 'CAF', reputation: 75, rank: 7 },
  { id: 'gha', name: 'Gana', confederation: 'CAF', reputation: 74, rank: 8 },
  { id: 'civ', name: 'Costa do Marfim', confederation: 'CAF', reputation: 74, rank: 9 },
  { id: 'rsa', name: 'África do Sul', confederation: 'CAF', reputation: 70, rank: 10 },
  // Ásia
  { id: 'jpn', name: 'Japão', confederation: 'AFC', reputation: 82, rank: 1 },
  { id: 'kor', name: 'Coreia do Sul', confederation: 'AFC', reputation: 81, rank: 2 },
  { id: 'irn', name: 'Irã', confederation: 'AFC', reputation: 78, rank: 3 },
  { id: 'aus', name: 'Austrália', confederation: 'AFC', reputation: 77, rank: 4 },
  { id: 'qat', name: 'Catar', confederation: 'AFC', reputation: 75, rank: 5 },
  { id: 'ksa', name: 'Arábia Saudita', confederation: 'AFC', reputation: 74, rank: 6 },
  { id: 'chn', name: 'China', confederation: 'AFC', reputation: 72, rank: 7 },
  { id: 'uae', name: 'Emirados Árabes', confederation: 'AFC', reputation: 70, rank: 8 },
  { id: 'irq', name: 'Iraque', confederation: 'AFC', reputation: 69, rank: 9 },
  { id: 'uzb', name: 'Uzbequistão', confederation: 'AFC', reputation: 67, rank: 10 },
  // América do Norte
  { id: 'usa', name: 'Estados Unidos', confederation: 'CONCACAF', reputation: 78, rank: 1 },
  { id: 'mex', name: 'México', confederation: 'CONCACAF', reputation: 80, rank: 2 },
  { id: 'can', name: 'Canadá', confederation: 'CONCACAF', reputation: 75, rank: 3 },
  { id: 'crc', name: 'Costa Rica', confederation: 'CONCACAF', reputation: 72, rank: 4 },
  { id: 'jam', name: 'Jamaica', confederation: 'CONCACAF', reputation: 68, rank: 5 },
  { id: 'hon', name: 'Honduras', confederation: 'CONCACAF', reputation: 66, rank: 6 },
  { id: 'pan', name: 'Panamá', confederation: 'CONCACAF', reputation: 65, rank: 7 },
  // Oceania
  { id: 'nzl', name: 'Nova Zelândia', confederation: 'OFC', reputation: 68, rank: 1 },
];

// ============================================
// BLOCO 10 - TIPOS DE CONTRATO E CLÁUSULAS
// ============================================

export const CONTRACT_TYPES = [
  { id: 'rookie', name: 'Contrato de Estreante', minDuration: 1, maxDuration: 3, salaryMultiplier: 0.3, releaseClauseMultiplier: 1.5, signingBonus: 0 },
  { id: 'standard', name: 'Contrato Padrão', minDuration: 2, maxDuration: 4, salaryMultiplier: 1.0, releaseClauseMultiplier: 2.0, signingBonus: 50000 },
  { id: 'premium', name: 'Contrato Premium', minDuration: 3, maxDuration: 5, salaryMultiplier: 2.0, releaseClauseMultiplier: 2.5, signingBonus: 200000 },
  { id: 'star', name: 'Contrato de Estrela', minDuration: 3, maxDuration: 5, salaryMultiplier: 4.0, releaseClauseMultiplier: 3.0, signingBonus: 1000000 },
  { id: 'legend', name: 'Contrato de Lenda', minDuration: 1, maxDuration: 2, salaryMultiplier: 5.0, releaseClauseMultiplier: 1.0, signingBonus: 2000000 },
];

export const CONTRACT_CLAUSES = [
  { id: 'release-clause', name: 'Cláusula de Rescisão', description: 'Valor fixo para rescisão unilateral' },
  { id: 'loyalty-bonus', name: 'Bônus de Fidelidade', description: 'Pagamento ao completar cada temporada' },
  { id: 'appearance-bonus', name: 'Bônus por Jogos', description: 'Pagamento a cada X jogos disputados' },
  { id: 'goal-bonus', name: 'Bônus por Gols', description: 'Pagamento a cada gol marcado' },
  { id: 'assist-bonus', name: 'Bônus por Assistências', description: 'Pagamento a cada assistência' },
  { id: 'clean-sheet-bonus', name: 'Bônus por Clean Sheet', description: 'Pagamento a cada jogo sem sofrer gols' },
  { id: 'title-bonus', name: 'Bônus por Títulos', description: 'Pagamento ao conquistar um título' },
  { id: 'relegation-escape', name: 'Cláusula de Rebaixamento', description: 'Permite sair de graça em caso de rebaixamento' },
  { id: 'promotion-bonus', name: 'Bônus de Acesso', description: 'Pagamento ao conquistar acesso' },
  { id: 'ballon-dor-bonus', name: 'Bônus Bola de Ouro', description: 'Pagamento caso ganhe prêmio individual' },
];

// ============================================
// BLOCO 11 - TIPOS DE LESÃO
// ============================================

export const INJURY_TYPES = [
  { id: 'strain', name: 'Distensão Muscular', severity: 'minor', minWeeks: 1, maxWeeks: 3, bodyPart: 'muscle', recurrenceRisk: 0.15 },
  { id: 'sprain', name: 'Entorse', severity: 'minor', minWeeks: 2, maxWeeks: 4, bodyPart: 'ankle', recurrenceRisk: 0.20 },
  { id: 'bruise', name: 'Contusão', severity: 'minor', minWeeks: 1, maxWeeks: 2, bodyPart: 'leg', recurrenceRisk: 0.05 },
  { id: 'cut', name: 'Corte/Laceração', severity: 'minor', minWeeks: 1, maxWeeks: 2, bodyPart: 'leg', recurrenceRisk: 0.00 },
  { id: 'groin', name: 'Pubalgia', severity: 'moderate', minWeeks: 3, maxWeeks: 6, bodyPart: 'groin', recurrenceRisk: 0.25 },
  { id: 'hamstring', name: 'Lesão na Coxa', severity: 'moderate', minWeeks: 3, maxWeeks: 8, bodyPart: 'thigh', recurrenceRisk: 0.30 },
  { id: 'calf', name: 'Lesão na Panturrilha', severity: 'moderate', minWeeks: 2, maxWeeks: 5, bodyPart: 'calf', recurrenceRisk: 0.20 },
  { id: 'knee-minor', name: 'Dor no Joelho', severity: 'moderate', minWeeks: 2, maxWeeks: 4, bodyPart: 'knee', recurrenceRisk: 0.15 },
  { id: 'ankle-ligament', name: 'Entorse de Tornozelo (Grave)', severity: 'major', minWeeks: 6, maxWeeks: 12, bodyPart: 'ankle', recurrenceRisk: 0.35 },
  { id: 'acl', name: 'Ruptura de Ligamento Cruzado', severity: 'major', minWeeks: 24, maxWeeks: 36, bodyPart: 'knee', recurrenceRisk: 0.20 },
  { id: 'meniscus', name: 'Lesão de Menisco', severity: 'major', minWeeks: 8, maxWeeks: 16, bodyPart: 'knee', recurrenceRisk: 0.15 },
  { id: 'fracture', name: 'Fratura Óssea', severity: 'major', minWeeks: 12, maxWeeks: 24, bodyPart: 'leg', recurrenceRisk: 0.10 },
  { id: 'shoulder', name: 'Luxação no Ombro', severity: 'major', minWeeks: 6, maxWeeks: 12, bodyPart: 'shoulder', recurrenceRisk: 0.25 },
  { id: 'back', name: 'Problema nas Costas', severity: 'chronic', minWeeks: 4, maxWeeks: 12, bodyPart: 'back', recurrenceRisk: 0.40 },
  { id: 'concussion', name: 'Concussão', severity: 'major', minWeeks: 2, maxWeeks: 6, bodyPart: 'head', recurrenceRisk: 0.10 },
  { id: 'achilles', name: 'Ruptura do Tendão de Aquiles', severity: 'career', minWeeks: 36, maxWeeks: 52, bodyPart: 'ankle', recurrenceRisk: 0.30 },
];

// ============================================
// BLOCO 12 - TIPOS DE TREINO
// ============================================

export const TRAINING_TYPES = [
  { id: 'technical', name: 'Treino Técnico', description: 'Melhora atributos técnicos', focus: ['finishing', 'passing', 'dribbling', 'crossing'], energyCost: 15, xpGain: 50 },
  { id: 'physical', name: 'Treino Físico', description: 'Melhora atributos físicos', focus: ['pace', 'stamina', 'strength', 'agility'], energyCost: 20, xpGain: 50 },
  { id: 'tactical', name: 'Treino Tático', description: 'Melhora atributos mentais e posicionamento', focus: ['positioning', 'vision', 'decisions', 'teamwork'], energyCost: 12, xpGain: 40 },
  { id: 'defensive', name: 'Treino Defensivo', description: 'Melhora atributos defensivos', focus: ['marking', 'tackling', 'interceptions', 'positioning'], energyCost: 15, xpGain: 45 },
  { id: 'setpieces', name: 'Treino de Bolas Paradas', description: 'Melhora cobranças e finalizações', focus: ['freeKick', 'finishing', 'heading', 'longShots'], energyCost: 10, xpGain: 35 },
  { id: 'goalkeeper', name: 'Treino de Goleiro', description: 'Melhora atributos de goleiro', focus: ['reflexes', 'handling', 'positioning', 'oneOnOne'], energyCost: 15, xpGain: 50 },
  { id: 'recovery', name: 'Recuperação', description: 'Recupera energia e reduz risco de lesão', focus: [], energyCost: -30, xpGain: 5 },
  { id: 'intense', name: 'Treino Intenso', description: 'Ganho extra de XP com maior custo de energia', focus: ['all'], energyCost: 30, xpGain: 80 },
  { id: 'rest', name: 'Descanso', description: 'Recupera energia completamente', focus: [], energyCost: -50, xpGain: 0 },
];

// ============================================
// BLOCO 13 - FRASES DA MÍDIA
// ============================================

export const MEDIA_QUOTES = {
  positive: [
    "Que atuação brilhante! Um dos melhores jogos da temporada.",
    "O jogador está em forma espetacular, decisivo em todos os sentidos.",
    "Uma performance de gala que não passará despercebida aos grandes clubes.",
    "Simplesmente imparável hoje. O diferencial do time.",
    "Mostrou porque é considerado uma das maiores promessas do futebol.",
    "Jogou como um verdadeiro campeão. Liderança em campo exemplar.",
    "O torcedor pode estar orgulhoso. Esse jogador entrega tudo em campo.",
    "Um show de técnica e garra. O estádio aplaudiu de pé.",
    "Está jogando o melhor futebol da carreira. Momento mágico!",
    "Decisivo, inteligente e incansável. O completo.",
  ],
  negative: [
    "Atuação decepcionante. Longe do que se espera de um profissional.",
    "Parecia perdido em campo. Precisa urgentemente recuperar a confiança.",
    "Erros primários que custaram caro ao time. Noite para esquecer.",
    "A torcida já começa a perder a paciência com tantas más atuações.",
    "Não justifica a titularidade com performances como esta.",
    "Foi um fantasma em campo. Não tocou na bola direito.",
    "O técnico precisa repensar a escalação. Esse jogador não está rendendo.",
    "Uma sombra do que já foi. A queda de rendimento é preocupante.",
    "Culpado direto pelo resultado negativo. Precisa se retratar.",
    "Jogou com medo, sem vontade. Inaceitável para esse nível.",
  ],
  neutral: [
    "Atuação regular, nem bom nem ruim. Cumpriu sua função.",
    "Teve momentos bons e outros nem tanto. Precisa de mais consistência.",
    "Um jogo trabalhado, sem grandes destaques individuais.",
    "A equipe funcionou bem, mas faltou brilho individual hoje.",
    "Cumpriu o papel defensivo, mas pouco acrescentou no ataque.",
    "Teve uma chance clara, mas não conseguiu converter.",
    "Trabalhou bastante, mas o resultado não acompanhou o esforço.",
    "Partida discreta. O time precisa de mais de seus principais nomes.",
    "Não desequilibrou, mas também não comprometeu. Jogo comum.",
    "Ainda busca seu melhor ritmo. A temporada está só começando.",
  ],
  transfer: [
    "Clubes europeus monitoram de perto a situação do jogador.",
    "O empresário confirmou conversas com grandes clubes do continente.",
    "Pode estar jogando suas últimas partidas pelo clube atual.",
    "A diretoria já prepara uma oferta irrecusável para mantê-lo.",
    "O técnico pediu publicamente a permanência do atleta.",
    "O mercado de transferências esquenta com o nome do jogador.",
    "Uma saída agora parece inevitável. Resta saber o destino.",
    "O clube recusou a primeira proposta, mas a negociação continua.",
    "Torcedores fazem campanha nas redes para que ele fique.",
    "O jogador está em dúvida: renovar ou buscar novos ares?",
  ],
};

// ============================================
// BLOCO 14 - CONQUISTAS E TROFÉUS
// ============================================

export const ACHIEVEMENTS = [
  // Individuais
  { id: 'debut', name: 'Estreia', description: 'Jogue sua primeira partida profissional', category: 'career', rarity: 'common' },
  { id: 'first-goal', name: 'Primeiro Gol', description: 'Marque seu primeiro gol na carreira', category: 'career', rarity: 'common' },
  { id: 'first-assist', name: 'Primeira Assistência', description: 'Dê sua primeira assistência', category: 'career', rarity: 'common' },
  { id: 'hat-trick', name: 'Hat-Trick', description: 'Marque 3 gols em uma partida', category: 'match', rarity: 'rare' },
  { id: 'poker', name: 'Poker', description: 'Marque 4 gols em uma partida', category: 'match', rarity: 'epic' },
  { id: 'five-goals', name: 'Mão na Taça', description: 'Marque 5 gols em uma partida', category: 'match', rarity: 'legendary' },
  { id: 'motm-10', name: 'Destaque', description: 'Seja eleito o melhor em campo 10 vezes', category: 'career', rarity: 'common' },
  { id: 'motm-50', name: 'Figura do Time', description: 'Seja eleito o melhor em campo 50 vezes', category: 'career', rarity: 'rare' },
  { id: 'motm-100', name: 'Lenda do Clube', description: 'Seja eleito o melhor em campo 100 vezes', category: 'career', rarity: 'epic' },
  { id: 'goals-50', name: 'Artilheiro em Ascensão', description: 'Marque 50 gols na carreira', category: 'career', rarity: 'common' },
  { id: 'goals-100', name: 'Centenário de Gols', description: 'Marque 100 gols na carreira', category: 'career', rarity: 'rare' },
  { id: 'goals-300', name: 'Terror das Defesas', description: 'Marque 300 gols na carreira', category: 'career', rarity: 'epic' },
  { id: 'goals-500', name: 'Máquina de Gols', description: 'Marque 500 gols na carreira', category: 'career', rarity: 'legendary' },
  { id: 'assists-50', name: 'Garçom', description: 'Dê 50 assistências na carreira', category: 'career', rarity: 'common' },
  { id: 'assists-100', name: 'Mestre das Assistências', description: 'Dê 100 assistências na carreira', category: 'career', rarity: 'rare' },
  { id: 'assists-200', name: 'Visão de Águia', description: 'Dê 200 assistências na carreira', category: 'career', rarity: 'epic' },
  { id: 'caps-10', name: 'Convocado', description: 'Jogue 10 partidas pela seleção', category: 'international', rarity: 'common' },
  { id: 'caps-50', name: 'Titular da Seleção', description: 'Jogue 50 partidas pela seleção', category: 'international', rarity: 'rare' },
  { id: 'caps-100', name: 'Ídolo Nacional', description: 'Jogue 100 partidas pela seleção', category: 'international', rarity: 'epic' },
  { id: 'ballon-dor', name: 'Bola de Ouro', description: 'Ganhe o prêmio de melhor jogador do mundo', category: 'individual', rarity: 'legendary' },
  { id: 'golden-boot', name: 'Chuteira de Ouro', description: 'Seja o artilheiro da temporada europeia', category: 'individual', rarity: 'legendary' },
  { id: 'best-player-league', name: 'Melhor do Campeonato', description: 'Eleito o melhor jogador da liga', category: 'individual', rarity: 'epic' },
  { id: 'young-player', name: 'Revelação', description: 'Eleito o melhor jogador jovem da liga', category: 'individual', rarity: 'rare' },
  // Coletivos
  { id: 'title-league', name: 'Campeão Nacional', description: 'Ganhe um campeonato nacional', category: 'team', rarity: 'rare' },
  { id: 'title-cup', name: 'Campeão de Copa', description: 'Ganhe uma copa nacional', category: 'team', rarity: 'rare' },
  { id: 'title-ucl', name: 'Rei da Europa', description: 'Ganhe a Champions League', category: 'team', rarity: 'legendary' },
  { id: 'title-uel', name: 'Conquistador da Europa', description: 'Ganhe a Europa League', category: 'team', rarity: 'epic' },
  { id: 'title-libertadores', name: 'Glória Eterna', description: 'Ganhe a Copa Libertadores', category: 'team', rarity: 'legendary' },
  { id: 'title-sulamericana', name: 'Força do Sul', description: 'Ganhe a Copa Sul-Americana', category: 'team', rarity: 'rare' },
  { id: 'title-mundial', name: 'Campeão do Mundo', description: 'Ganhe o Mundial de Clubes', category: 'team', rarity: 'legendary' },
  { id: 'title-world-cup', name: 'Campeão Mundial', description: 'Ganhe a Copa do Mundo pela seleção', category: 'international', rarity: 'legendary' },
  { id: 'title-copa-america', name: 'Campeão da América', description: 'Ganhe a Copa América', category: 'international', rarity: 'epic' },
  { id: 'title-euro', name: 'Campeão Europeu', description: 'Ganhe a Eurocopa', category: 'international', rarity: 'epic' },
  { id: 'promotion', name: 'Subiu de Divisão', description: 'Conquiste o acesso com seu clube', category: 'team', rarity: 'common' },
  { id: 'invincible', name: 'Invencível', description: 'Termine uma temporada sem derrotas', category: 'team', rarity: 'legendary' },
  { id: 'treble', name: 'Tríplice Coroa', description: 'Ganhe 3 títulos em uma temporada', category: 'team', rarity: 'legendary' },
  { id: 'double', name: 'Dobradinha', description: 'Ganhe liga e copa na mesma temporada', category: 'team', rarity: 'epic' },
];

// ============================================
// BLOCO 15 - ESTÁDIOS
// ============================================

export const STADIUMS = [
  // Brasil
  { id: 'maracana', name: 'Maracanã', city: 'Rio de Janeiro', country: 'Brasil', capacity: 78838 },
  { id: 'morumbi', name: 'Morumbi', city: 'São Paulo', country: 'Brasil', capacity: 72000 },
  { id: 'mineirao', name: 'Mineirão', city: 'Belo Horizonte', country: 'Brasil', capacity: 61846 },
  { id: 'arena-corinthians', name: 'Neo Química Arena', city: 'São Paulo', country: 'Brasil', capacity: 49205 },
  { id: 'beira-rio', name: 'Beira-Rio', city: 'Porto Alegre', country: 'Brasil', capacity: 50842 },
  { id: 'arena-gremio', name: 'Arena do Grêmio', city: 'Porto Alegre', country: 'Brasil', capacity: 60540 },
  { id: 'castelao', name: 'Castelão', city: 'Fortaleza', country: 'Brasil', capacity: 63903 },
  { id: 'arena-bahia', name: 'Casa de Apostas Arena Fonte Nova', city: 'Salvador', country: 'Brasil', capacity: 47907 },
  { id: 'allianz-parque', name: 'Allianz Parque', city: 'São Paulo', country: 'Brasil', capacity: 43713 },
  { id: 'mane-garrincha', name: 'Mané Garrincha', city: 'Brasília', country: 'Brasil', capacity: 72788 },
  // Espanha
  { id: 'santiago-bernabeu', name: 'Santiago Bernabéu', city: 'Madrid', country: 'Espanha', capacity: 81044 },
  { id: 'camp-nou', name: 'Camp Nou', city: 'Barcelona', country: 'Espanha', capacity: 99354 },
  { id: 'wanda', name: 'Cívitas Metropolitano', city: 'Madrid', country: 'Espanha', capacity: 68456 },
  { id: 'benito-villamarin', name: 'Benito Villamarín', city: 'Sevilha', country: 'Espanha', capacity: 60721 },
  { id: 'mestalla', name: 'Mestalla', city: 'Valência', country: 'Espanha', capacity: 49430 },
  { id: 'san-mames', name: 'San Mamés', city: 'Bilbao', country: 'Espanha', capacity: 53289 },
  // Inglaterra
  { id: 'old-trafford', name: 'Old Trafford', city: 'Manchester', country: 'Inglaterra', capacity: 74310 },
  { id: 'anfield', name: 'Anfield', city: 'Liverpool', country: 'Inglaterra', capacity: 53394 },
  { id: 'etihad', name: 'Etihad Stadium', city: 'Manchester', country: 'Inglaterra', capacity: 53400 },
  { id: 'emirates', name: 'Emirates Stadium', city: 'Londres', country: 'Inglaterra', capacity: 60704 },
  { id: 'stamford-bridge', name: 'Stamford Bridge', city: 'Londres', country: 'Inglaterra', capacity: 40343 },
  { id: 'tottenham-stadium', name: 'Tottenham Hotspur Stadium', city: 'Londres', country: 'Inglaterra', capacity: 62850 },
  { id: 'olympic-london', name: 'London Stadium', city: 'Londres', country: 'Inglaterra', capacity: 62500 },
  // Alemanha
  { id: 'allianz-arena', name: 'Allianz Arena', city: 'Munique', country: 'Alemanha', capacity: 75000 },
  { id: 'signal-iduna', name: 'Signal Iduna Park', city: 'Dortmund', country: 'Alemanha', capacity: 81365 },
  { id: 'olympiastadion', name: 'Olympiastadion', city: 'Berlim', country: 'Alemanha', capacity: 74667 },
  { id: 'veltins-arena', name: 'Veltins-Arena', city: 'Gelsenkirchen', country: 'Alemanha', capacity: 62271 },
  { id: 'mercedes-benz-arena', name: 'MHP Arena', city: 'Stuttgart', country: 'Alemanha', capacity: 60449 },
  // Itália
  { id: 'san-siro', name: 'San Siro', city: 'Milão', country: 'Itália', capacity: 80018 },
  { id: 'olimpico', name: 'Stadio Olimpico', city: 'Roma', country: 'Itália', capacity: 70634 },
  { id: 'allianz-juventus', name: 'Allianz Stadium', city: 'Turim', country: 'Itália', capacity: 41507 },
  { id: 'diego-maradona', name: 'Diego Armando Maradona', city: 'Nápoles', country: 'Itália', capacity: 54726 },
  { id: 'olimpico-roma', name: 'Stadio Olimpico', city: 'Roma', country: 'Itália', capacity: 70634 },
  // França
  { id: 'parc-des-princes', name: 'Parc des Princes', city: 'Paris', country: 'França', capacity: 47929 },
  { id: 'stade-de-france', name: 'Stade de France', city: 'Saint-Denis', country: 'França', capacity: 80000 },
  { id: 'orange-velodrome', name: 'Orange Vélodrome', city: 'Marselha', country: 'França', capacity: 67394 },
  { id: 'groupama', name: 'Groupama Stadium', city: 'Lyon', country: 'França', capacity: 59186 },
  { id: 'pierre-mauroy', name: 'Pierre Mauroy', city: 'Lille', country: 'França', capacity: 50029 },
  // Portugal
  { id: 'da-luz', name: 'Estádio da Luz', city: 'Lisboa', country: 'Portugal', capacity: 64642 },
  { id: 'do-dragao', name: 'Estádio do Dragão', city: 'Porto', country: 'Portugal', capacity: 50033 },
  { id: 'alvalade', name: 'Estádio José Alvalade', city: 'Lisboa', country: 'Portugal', capacity: 50095 },
  { id: 'braga-municipal', name: 'Estádio Municipal de Braga', city: 'Braga', country: 'Portugal', capacity: 30286 },
  // Holanda
  { id: 'johan-cruyff-arena', name: 'Johan Cruyff Arena', city: 'Amsterdam', country: 'Holanda', capacity: 56090 },
  { id: 'philips-stadion', name: 'Philips Stadion', city: 'Eindhoven', country: 'Holanda', capacity: 36500 },
  { id: 'de-kuip', name: 'De Kuip', city: 'Rotterdam', country: 'Holanda', capacity: 47000 },
  // Argentina
  { id: 'bombonera', name: 'La Bombonera', city: 'Buenos Aires', country: 'Argentina', capacity: 54000 },
  { id: 'monumental', name: 'Monumental', city: 'Buenos Aires', country: 'Argentina', capacity: 83510 },
  { id: 'ciudad-lanus', name: 'Ciudad de Lanús', city: 'Lanús', country: 'Argentina', capacity: 47064 },
  { id: 'cilindro', name: 'El Cilindro', city: 'Avellaneda', country: 'Argentina', capacity: 55553 },
  // Turquia
  { id: 'turk-telekom', name: 'Rams Park', city: 'Istambul', country: 'Turquia', capacity: 52650 },
  { id: 'sukru-saracoglu', name: 'Şükrü Saracoğlu', city: 'Istambul', country: 'Turquia', capacity: 50530 },
  { id: 'vodafone-park', name: 'Vodafone Park', city: 'Istambul', country: 'Turquia', capacity: 41903 },
  { id: 'senol-gunes', name: 'Şenol Güneş', city: 'Trabzon', country: 'Turquia', capacity: 41461 },
];

// ============================================
// BLOCO 16 - UTILITÁRIOS E FUNÇÕES AUXILIARES
// ============================================

export function getTeamById(id) {
  return TEAMS.find(team => team.id === id);
}

export function getTeamsByCountry(country) {
  return TEAMS.filter(team => team.country === country);
}

export function getTeamsByLeague(league) {
  return TEAMS.filter(team => team.league === league);
}

export function getLeagueById(id) {
  return LEAGUES.find(league => league.id === id);
}

export function getCompetitionById(id) {
  return COMPETITIONS.find(comp => comp.id === id);
}

export function getTraitById(id) {
  return TRAITS.find(trait => trait.id === id);
}

export function getRandomTrait(category = null, excludeNegative = false) {
  let pool = TRAITS;
  if (category) pool = pool.filter(t => t.category === category);
  if (excludeNegative) pool = pool.filter(t => t.category !== 'negative');
  return pool[Math.floor(Math.random() * pool.length)];
}

export function getRandomCareerEvent() {
  const roll = Math.random();
  let cumulative = 0;
  for (const event of CAREER_EVENTS) {
    cumulative += event.probability;
    if (roll <= cumulative) return event;
  }
  return null;
}

export function getRandomName(country) {
  const firstNames = FIRST_NAMES[country.toLowerCase()] || FIRST_NAMES.brasil;
  const lastNames = LAST_NAMES[country.toLowerCase()] || LAST_NAMES.brasil;
  const first = firstNames[Math.floor(Math.random() * firstNames.length)];
  const last = lastNames[Math.floor(Math.random() * lastNames.length)];
  return `${first} ${last}`;
}

export function getPositionById(id) {
  return PLAYER_POSITIONS.find(pos => pos.id === id);
}

export function getFormationById(id) {
  return FORMATIONS.find(form => form.id === id);
}

export function getNationalTeamById(id) {
  return NATIONAL_TEAMS.find(nt => nt.id === id);
}

export function getInjuryById(id) {
  return INJURY_TYPES.find(inj => inj.id === id);
}

export function getRandomInjury(severity = null) {
  let pool = INJURY_TYPES;
  if (severity) pool = pool.filter(i => i.severity === severity);
  return pool[Math.floor(Math.random() * pool.length)];
}

export function getTrainingById(id) {
  return TRAINING_TYPES.find(t => t.id === id);
}

export function getAchievementById(id) {
  return ACHIEVEMENTS.find(a => a.id === id);
}

export function getStadiumById(id) {
  return STADIUMS.find(s => s.id === id);
}

export function getStadiumsByCountry(country) {
  return STADIUMS.filter(s => s.country === country);
}

export function formatCurrency(value) {
  if (value >= 1000000000) return `€${(value / 1000000000).toFixed(1)}B`;
  if (value >= 1000000) return `€${(value / 1000000).toFixed(1)}M`;
  if (value >= 1000) return `€${(value / 1000).toFixed(0)}K`;
  return `€${value}`;
}

export function calculateOverall(attributes, positionId) {
  const position = getPositionById(positionId);
  if (!position) return 50;

  let total = 0;
  let count = 0;

  for (const attr of position.attributes) {
    if (attributes[attr] !== undefined) {
      total += attributes[attr];
      count++;
    }
  }

  return count > 0 ? Math.round(total / count) : 50;
}

export function getAgeCategory(age) {
  if (age < 20) return 'jovem';
  if (age < 25) return 'promessa';
  if (age < 30) return 'experiente';
  if (age < 35) return 'veterano';
  return 'lenda';
}

export function getReputationTier(reputation) {
  if (reputation >= 90) return 'world-class';
  if (reputation >= 80) return 'elite';
  if (reputation >= 70) return 'good';
  if (reputation >= 60) return 'average';
  return 'below-average';
}

export function getContractTypeById(id) {
  return CONTRACT_TYPES.find(ct => ct.id === id);
}

export function getClauseById(id) {
  return CONTRACT_CLAUSES.find(c => c.id === id);
}

export function getMediaQuote(type = 'neutral') {
  const quotes = MEDIA_QUOTES[type] || MEDIA_QUOTES.neutral;
  return quotes[Math.floor(Math.random() * quotes.length)];
}

// ============================================
// BLOCO 17 - DADOS DE JOGO COMPLETOS (EXPORT DEFAULT)
// ============================================

const gameData = {
  TEAMS,
  LEAGUES,
  COMPETITIONS,
  TRAITS,
  CAREER_EVENTS,
  GAME_CONFIG,
  FIRST_NAMES,
  LAST_NAMES,
  PLAYER_POSITIONS,
  PLAYER_ATTRIBUTES,
  FORMATIONS,
  NATIONAL_TEAMS,
  CONTRACT_TYPES,
  CONTRACT_CLAUSES,
  INJURY_TYPES,
  TRAINING_TYPES,
  MEDIA_QUOTES,
  ACHIEVEMENTS,
  STADIUMS,
  // Funções utilitárias
  getTeamById,
  getTeamsByCountry,
  getTeamsByLeague,
  getLeagueById,
  getCompetitionById,
  getTraitById,
  getRandomTrait,
  getRandomCareerEvent,
  getRandomName,
  getPositionById,
  getFormationById,
  getNationalTeamById,
  getInjuryById,
  getRandomInjury,
  getTrainingById,
  getAchievementById,
  getStadiumById,
  getStadiumsByCountry,
  formatCurrency,
  calculateOverall,
  getAgeCategory,
  getReputationTier,
  getContractTypeById,
  getClauseById,
  getMediaQuote,
};

export default gameData;
