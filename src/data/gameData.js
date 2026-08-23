export const POSITIONS = [
  { id: 'GK', name: 'Goleiro', abbr: 'GK', category: 'defense' },
  { id: 'CB', name: 'Zagueiro', abbr: 'ZAG', category: 'defense' },
  { id: 'LB', name: 'Lateral Esquerdo', abbr: 'LE', category: 'defense' },
  { id: 'RB', name: 'Lateral Direito', abbr: 'LD', category: 'defense' },
  { id: 'CDM', name: 'Volante', abbr: 'VOL', category: 'midfield' },
  { id: 'CM', name: 'Meio-Campista', abbr: 'MC', category: 'midfield' },
  { id: 'CAM', name: 'Meia Ofensivo', abbr: 'MO', category: 'midfield' },
  { id: 'LM', name: 'Ponta Esquerda', abbr: 'PE', category: 'attack' },
  { id: 'RM', name: 'Ponta Direita', abbr: 'PD', category: 'attack' },
  { id: 'LW', name: 'Extremo Esquerdo', abbr: 'EE', category: 'attack' },
  { id: 'RW', name: 'Extremo Direito', abbr: 'ED', category: 'attack' },
  { id: 'ST', name: 'Centroavante', abbr: 'CA', category: 'attack' },
  { id: 'CF', name: 'Segundo Atacante', abbr: 'SA', category: 'attack' },
];

export const ATTRIBUTES = {
  physical: [
    { id: 'pace', name: 'Velocidade', icon: 'Zap' },
    { id: 'acceleration', name: 'Aceleração', icon: 'Zap' },
    { id: 'stamina', name: 'Resistência', icon: 'BatteryFull' },
    { id: 'strength', name: 'Força', icon: 'Dumbbell' },
    { id: 'agility', name: 'Agilidade', icon: 'Wind' },
    { id: 'jumping', name: 'Impulsão', icon: 'ArrowUp' },
  ],
  technical: [
    { id: 'dribbling', name: 'Drible', icon: 'Footprints' },
    { id: 'passing', name: 'Passe', icon: 'Share2' },
    { id: 'shooting', name: 'Finalização', icon: 'Target' },
    { id: 'heading', name: 'Cabeceio', icon: 'CircleDot' },
    { id: 'longShots', name: 'Chute de Longe', icon: 'Target' },
    { id: 'freeKick', name: 'Falta', icon: 'Flag' },
    { id: 'penalty', name: 'Pênalti', icon: 'Circle' },
    { id: 'crossing', name: 'Cruzamento', icon: 'Share2' },
  ],
  mental: [
    { id: 'vision', name: 'Visão', icon: 'Eye' },
    { id: 'positioning', name: 'Posicionamento', icon: 'MapPin' },
    { id: 'composure', name: 'Composure', icon: 'Brain' },
    { id: 'leadership', name: 'Liderança', icon: 'Crown' },
    { id: 'workRate', name: 'Raça', icon: 'Flame' },
    { id: 'decisions', name: 'Decisões', icon: 'Lightbulb' },
  ],
  defensive: [
    { id: 'tackling', name: 'Desarme', icon: 'Shield' },
    { id: 'marking', name: 'Marcação', icon: 'Shield' },
    { id: 'interception', name: 'Interceptação', icon: 'Shield' },
    { id: 'aerial', name: 'Aéreo', icon: 'ArrowUp' },
  ],
  goalkeeper: [
    { id: 'reflexes', name: 'Reflexos', icon: 'Eye' },
    { id: 'handling', name: 'Manuseio', icon: 'Hand' },
    { id: 'positioningGK', name: 'Posicionamento', icon: 'MapPin' },
    { id: 'kicking', name: 'Chutada', icon: 'Footprints' },
    { id: 'oneOnOne', name: 'Um contra Um', icon: 'User' },
  ],
};

export const NATIONALITIES = [
  'Brasil', 'Argentina', 'Portugal', 'Espanha', 'França', 'Alemanha', 'Itália',
  'Inglaterra', 'Holanda', 'Bélgica', 'Uruguai', 'Colômbia', 'Chile', 'México',
  'Estados Unidos', 'Japão', 'Coreia do Sul', 'Nigéria', 'Senegal', 'Marrocos',
  'Croácia', 'Polônia', 'Suécia', 'Dinamarca', 'Suíça', 'Áustria', 'República Tcheca',
];

export const CLUBS = [
  { id: 'pal', name: 'Palmeiras', country: 'Brasil', league: 'Brasileirão', tier: 1, reputation: 85, budget: 80, color: '#006437' },
  { id: 'fla', name: 'Flamengo', country: 'Brasil', league: 'Brasileirão', tier: 1, reputation: 86, budget: 85, color: '#C52613' },
  { id: 'sao', name: 'São Paulo', country: 'Brasil', league: 'Brasileirão', tier: 1, reputation: 82, budget: 70, color: '#E31937' },
  { id: 'cor', name: 'Corinthians', country: 'Brasil', league: 'Brasileirão', tier: 1, reputation: 81, budget: 65, color: '#000000' },
  { id: 'gre', name: 'Grêmio', country: 'Brasil', league: 'Brasileirão', tier: 1, reputation: 80, budget: 60, color: '#0D80BF' },
  { id: 'int', name: 'Internacional', country: 'Brasil', league: 'Brasileirão', tier: 1, reputation: 79, budget: 58, color: '#E31937' },
  { id: 'cru', name: 'Cruzeiro', country: 'Brasil', league: 'Brasileirão', tier: 1, reputation: 78, budget: 55, color: '#2F529F' },
  { id: 'atl', name: 'Atlético-MG', country: 'Brasil', league: 'Brasileirão', tier: 1, reputation: 83, budget: 72, color: '#000000' },
  { id: 'bot', name: 'Botafogo', country: 'Brasil', league: 'Brasileirão', tier: 1, reputation: 77, budget: 50, color: '#000000' },
  { id: 'vas', name: 'Vasco', country: 'Brasil', league: 'Brasileirão', tier: 1, reputation: 76, budget: 45, color: '#000000' },
  { id: 'flu', name: 'Fluminense', country: 'Brasil', league: 'Brasileirão', tier: 1, reputation: 78, budget: 55, color: '#8B1A2D' },
  { id: 'bah', name: 'Bahia', country: 'Brasil', league: 'Brasileirão', tier: 1, reputation: 72, budget: 35, color: '#0067A5' },
  { id: 'for', name: 'Fortaleza', country: 'Brasil', league: 'Brasileirão', tier: 1, reputation: 71, budget: 32, color: '#E31937' },
  { id: 'cap', name: 'Athletico-PR', country: 'Brasil', league: 'Brasileirão', tier: 1, reputation: 75, budget: 42, color: '#E31937' },
  { id: 'red', name: 'Red Bull Bragantino', country: 'Brasil', league: 'Brasileirão', tier: 1, reputation: 73, budget: 38, color: '#E31937' },
  { id: 'cui', name: 'Cuiabá', country: 'Brasil', league: 'Brasileirão', tier: 1, reputation: 65, budget: 20, color: '#006437' },
  { id: 'goi', name: 'Goiás', country: 'Brasil', league: 'Brasileirão', tier: 2, reputation: 62, budget: 15, color: '#006437' },
  { id: 'vit', name: 'Vitória', country: 'Brasil', league: 'Brasileirão', tier: 2, reputation: 60, budget: 12, color: '#E31937' },
  { id: 'san', name: 'Santos', country: 'Brasil', league: 'Brasileirão', tier: 2, reputation: 74, budget: 40, color: '#000000' },
  { id: 'spa', name: 'Sport', country: 'Brasil', league: 'Brasileirão', tier: 2, reputation: 63, budget: 16, color: '#E31937' },

  { id: 'rea', name: 'Real Madrid', country: 'Espanha', league: 'La Liga', tier: 1, reputation: 92, budget: 95, color: '#FEBE10' },
  { id: 'bar', name: 'Barcelona', country: 'Espanha', league: 'La Liga', tier: 1, reputation: 91, budget: 90, color: '#A50044' },
  { id: 'atm', name: 'Atlético Madrid', country: 'Espanha', league: 'La Liga', tier: 1, reputation: 87, budget: 80, color: '#CB3524' },
  { id: 'mci', name: 'Manchester City', country: 'Inglaterra', league: 'Premier League', tier: 1, reputation: 93, budget: 98, color: '#6CABDD' },
  { id: 'liv', name: 'Liverpool', country: 'Inglaterra', league: 'Premier League', tier: 1, reputation: 90, budget: 88, color: '#C8102E' },
  { id: 'ars', name: 'Arsenal', country: 'Inglaterra', league: 'Premier League', tier: 1, reputation: 88, budget: 85, color: '#EF0107' },
  { id: 'mun', name: 'Manchester United', country: 'Inglaterra', league: 'Premier League', tier: 1, reputation: 86, budget: 82, color: '#DA291C' },
  { id: 'che', name: 'Chelsea', country: 'Inglaterra', league: 'Premier League', tier: 1, reputation: 85, budget: 80, color: '#034694' },
  { id: 'bay', name: 'Bayern Munich', country: 'Alemanha', league: 'Bundesliga', tier: 1, reputation: 91, budget: 92, color: '#DC052D' },
  { id: 'bvb', name: 'Borussia Dortmund', country: 'Alemanha', league: 'Bundesliga', tier: 1, reputation: 84, budget: 75, color: '#FDE100' },
  { id: 'juv', name: 'Juventus', country: 'Itália', league: 'Serie A', tier: 1, reputation: 86, budget: 78, color: '#000000' },
  { id: 'mil', name: 'AC Milan', country: 'Itália', league: 'Serie A', tier: 1, reputation: 85, budget: 75, color: '#FB090B' },
  { id: 'intm', name: 'Inter de Milão', country: 'Itália', league: 'Serie A', tier: 1, reputation: 87, budget: 80, color: '#010E80' },
  { id: 'psg', name: 'Paris Saint-Germain', country: 'França', league: 'Ligue 1', tier: 1, reputation: 89, budget: 95, color: '#004170' },
  { id: 'ben', name: 'Benfica', country: 'Portugal', league: 'Primeira Liga', tier: 1, reputation: 82, budget: 60, color: '#E31937' },
  { id: 'por', name: 'Porto', country: 'Portugal', league: 'Primeira Liga', tier: 1, reputation: 81, budget: 58, color: '#004FC4' },
  { id: 'ajx', name: 'Ajax', country: 'Holanda', league: 'Eredivisie', tier: 1, reputation: 80, budget: 55, color: '#D2122E' },
];

export const COMPETITIONS = [
  { id: 'brasileirao', name: 'Brasileirão', country: 'Brasil', type: 'league', teams: 20, reputation: 75 },
  { id: 'copa_brasil', name: 'Copa do Brasil', country: 'Brasil', type: 'cup', teams: 64, reputation: 70 },
  { id: 'libertadores', name: 'Libertadores', country: 'América do Sul', type: 'continental', teams: 32, reputation: 85 },
  { id: 'sulamericana', name: 'Sul-Americana', country: 'América do Sul', type: 'continental', teams: 32, reputation: 72 },
  { id: 'premier', name: 'Premier League', country: 'Inglaterra', type: 'league', teams: 20, reputation: 90 },
  { id: 'laliga', name: 'La Liga', country: 'Espanha', type: 'league', teams: 20, reputation: 88 },
  { id: 'bundesliga', name: 'Bundesliga', country: 'Alemanha', type: 'league', teams: 18, reputation: 86 },
  { id: 'seriea', name: 'Serie A', country: 'Itália', type: 'league', teams: 20, reputation: 87 },
  { id: 'ligue1', name: 'Ligue 1', country: 'França', type: 'league', teams: 18, reputation: 80 },
  { id: 'champions', name: 'Champions League', country: 'Europa', type: 'continental', teams: 32, reputation: 95 },
  { id: 'europa', name: 'Europa League', country: 'Europa', type: 'continental', teams: 32, reputation: 82 },
  { id: 'world_cup', name: 'Copa do Mundo', country: 'Mundial', type: 'international', teams: 32, reputation: 98 },
  { id: 'copa_america', name: 'Copa América', country: 'América', type: 'international', teams: 16, reputation: 80 },
  { id: 'euro', name: 'Eurocopa', country: 'Europa', type: 'international', teams: 24, reputation: 88 },
];

export const SPONSORS = [
  { id: 'nike', name: 'Nike', type: 'boots', bonus: 5000, reputation: 90 },
  { id: 'adidas', name: 'Adidas', type: 'boots', bonus: 5000, reputation: 90 },
  { id: 'puma', name: 'Puma', type: 'boots', bonus: 3000, reputation: 75 },
  { id: 'new_balance', name: 'New Balance', type: 'boots', bonus: 2500, reputation: 70 },
  { id: 'under_armour', name: 'Under Armour', type: 'boots', bonus: 2000, reputation: 65 },
  { id: 'red_bull', name: 'Red Bull', type: 'energy', bonus: 4000, reputation: 85 },
  { id: 'gatorade', name: 'Gatorade', type: 'energy', bonus: 3000, reputation: 80 },
  { id: 'pepsi', name: 'Pepsi', type: 'beverage', bonus: 3500, reputation: 82 },
  { id: 'coca_cola', name: 'Coca-Cola', type: 'beverage', bonus: 4000, reputation: 88 },
  { id: 'ea_sports', name: 'EA Sports', type: 'gaming', bonus: 6000, reputation: 92 },
  { id: 'bet365', name: 'Bet365', type: 'betting', bonus: 8000, reputation: 70 },
  { id: 'apple', name: 'Apple', type: 'tech', bonus: 10000, reputation: 95 },
  { id: 'samsung', name: 'Samsung', type: 'tech', bonus: 8000, reputation: 90 },
  { id: 'rolex', name: 'Rolex', type: 'luxury', bonus: 15000, reputation: 95 },
  { id: 'audi', name: 'Audi', type: 'car', bonus: 12000, reputation: 90 },
  { id: 'mercedes', name: 'Mercedes-Benz', type: 'car', bonus: 15000, reputation: 95 },
];

export const TRAINING_TYPES = [
  { id: 'physical', name: 'Físico', description: 'Melhora velocidade, força e resistência', icon: 'Dumbbell', energyCost: 25, attributes: ['pace', 'acceleration', 'stamina', 'strength', 'agility', 'jumping'] },
  { id: 'technical', name: 'Técnico', description: 'Melhora drible, passe e finalização', icon: 'Footprints', energyCost: 25, attributes: ['dribbling', 'passing', 'shooting', 'heading', 'longShots', 'freeKick', 'penalty', 'crossing'] },
  { id: 'tactical', name: 'Tático', description: 'Melhora visão, posicionamento e decisões', icon: 'Brain', energyCost: 20, attributes: ['vision', 'positioning', 'composure', 'decisions', 'workRate'] },
  { id: 'defensive', name: 'Defensivo', description: 'Melhora desarme, marcação e interceptação', icon: 'Shield', energyCost: 25, attributes: ['tackling', 'marking', 'interception', 'aerial'] },
  { id: 'goalkeeper', name: 'Goleiro', description: 'Melhora reflexos e posicionamento', icon: 'Hand', energyCost: 25, attributes: ['reflexes', 'handling', 'positioningGK', 'kicking', 'oneOnOne'] },
  { id: 'set_pieces', name: 'Bolas Paradas', description: 'Melhora faltas, pênaltis e escanteios', icon: 'Flag', energyCost: 15, attributes: ['freeKick', 'penalty', 'crossing'] },
  { id: 'recovery', name: 'Recuperação', description: 'Recupera energia sem melhorar atributos', icon: 'BatteryCharging', energyCost: -40, attributes: [] },
];

export const MATCH_EVENTS = {
  goal: { icon: 'Target', color: '#22c55e', weight: 1 },
  assist: { icon: 'Share2', color: '#3b82f6', weight: 0.8 },
  yellowCard: { icon: 'Square', color: '#f59e0b', weight: 0.3 },
  redCard: { icon: 'Square', color: '#ef4444', weight: 0.05 },
  substitution: { icon: 'RefreshCw', color: '#10b981', weight: 0.5 },
  save: { icon: 'Hand', color: '#3b82f6', weight: 1.2 },
  cleanSheet: { icon: 'Shield', color: '#22c55e', weight: 0.5 },
  keyPass: { icon: 'Share2', color: '#3b82f6', weight: 0.6 },
  tackle: { icon: 'Shield', color: '#22c55e', weight: 0.7 },
  interception: { icon: 'Shield', color: '#22c55e', weight: 0.6 },
  dribble: { icon: 'Footprints', color: '#10b981', weight: 0.5 },
  shotOnTarget: { icon: 'Target', color: '#f59e0b', weight: 0.4 },
  shotOffTarget: { icon: 'Target', color: '#ef4444', weight: 0.3 },
  foul: { icon: 'AlertTriangle', color: '#f59e0b', weight: 0.2 },
  injury: { icon: 'HeartOff', color: '#ef4444', weight: 0.05 },
};

export const CAREER_MILESTONES = [
  { id: 'debut', name: 'Estreia Profissional', description: 'Jogue sua primeira partida oficial', requirement: { type: 'matches', value: 1 } },
  { id: 'first_goal', name: 'Primeiro Gol', description: 'Marque seu primeiro gol', requirement: { type: 'goals', value: 1 } },
  { id: 'first_assist', name: 'Primeira Assistência', description: 'Dê sua primeira assistência', requirement: { type: 'assists', value: 1 } },
  { id: 'ten_goals', name: 'Artilheiro em Potência', description: 'Marque 10 gols na carreira', requirement: { type: 'goals', value: 10 } },
  { id: 'fifty_matches', name: 'Veterano', description: 'Jogue 50 partidas', requirement: { type: 'matches', value: 50 } },
  { id: 'hundred_matches', name: 'Centenário', description: 'Jogue 100 partidas', requirement: { type: 'matches', value: 100 } },
  { id: 'first_title', name: 'Primeiro Título', description: 'Venha sua primeira competição', requirement: { type: 'titles', value: 1 } },
  { id: 'five_titles', name: 'Colecionador', description: 'Venha 5 competições', requirement: { type: 'titles', value: 5 } },
  { id: 'first_transfer', name: 'Nova Casa', description: 'Faça sua primeira transferência', requirement: { type: 'transfers', value: 1 } },
  { id: 'national_team', name: 'Convocação', description: 'Seja convocado para a seleção', requirement: { type: 'nationalTeam', value: 1 } },
  { id: 'world_cup', name: 'Campeão do Mundo', description: 'Vença a Copa do Mundo', requirement: { type: 'worldCup', value: 1 } },
  { id: 'champions', name: 'Rei da Europa', description: 'Vença a Champions League', requirement: { type: 'champions', value: 1 } },
  { id: 'ballon_dor', name: 'Melhor do Mundo', description: 'Ganhe a Bola de Ouro', requirement: { type: 'ballonDor', value: 1 } },
];

export const DIFFICULTY_LEVELS = [
  { id: 'easy', name: 'Fácil', multiplier: 1.5, description: 'Mais fácil evoluir, mais dinheiro' },
  { id: 'normal', name: 'Normal', multiplier: 1.0, description: 'Experiência balanceada' },
  { id: 'hard', name: 'Difícil', multiplier: 0.7, description: 'Evolução lenta, desafio real' },
  { id: 'legend', name: 'Lenda', multiplier: 0.4, description: 'Apenas para os melhores' },
];

export const SEASON_MONTHS = [
  'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
  'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
];
