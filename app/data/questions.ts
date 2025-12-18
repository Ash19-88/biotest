export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  category: 'respiratorio' | 'circulatorio' | 'integracion';
  explanation?: string;
}

export const questions: Question[] = [
  // ========== SISTEMA RESPIRATORIO (1-44) ==========
  {
    id: 1,
    question: "¿Cuál es la función principal del sistema respiratorio?",
    options: [
      "Transportar nutrientes por el cuerpo",
      "Incorporar oxígeno y eliminar dióxido de carbono",
      "Producir hormonas reguladoras",
      "Filtrar y purificar la sangre"
    ],
    correctAnswer: 1,
    category: "respiratorio",
    explanation: "El sistema respiratorio se encarga del intercambio gaseoso: toma O₂ del aire y elimina CO₂ del cuerpo mediante los pulmones."
  },
  {
    id: 2,
    question: "¿Qué diferencia hay entre respiración externa y celular?",
    options: [
      "La externa es involuntaria, la celular es voluntaria",
      "La externa usa O₂, la celular usa CO₂",
      "La externa ocurre en pulmones, la celular en mitocondrias",
      "La externa produce energía, la celular intercambia gases"
    ],
    correctAnswer: 2,
    category: "respiratorio",
    explanation: "Respiración externa: intercambio O₂/CO₂ en pulmones. Respiración celular: producción de energía (ATP) en mitocondrias usando O₂."
  },
  {
    id: 3,
    question: "Además de los pulmones, ¿qué otras estructuras forman parte del sistema respiratorio?",
    options: [
      "Hígado y páncreas",
      "Riñones y vejiga",
      "Vías respiratorias, diafragma y caja torácica",
      "Estómago e intestinos"
    ],
    correctAnswer: 2,
    category: "respiratorio",
    explanation: "El sistema incluye: vías respiratorias (nariz, faringe, laringe, tráquea, bronquios), músculos (diafragma, intercostales), caja torácica y pleuras."
  },
  {
    id: 4,
    question: "¿Qué función tiene la nariz y la cavidad nasal?",
    options: [
      "Solo permitir el paso del aire",
      "Filtrar, calentar, humedecer el aire y permitir el olfato",
      "Producir sonidos y la voz",
      "Transportar oxígeno a la sangre"
    ],
    correctAnswer: 1,
    category: "respiratorio",
    explanation: "Los cilios nasales filtran partículas, los capilares calientan el aire, el moco lo humedece, y los receptores permiten el olfato."
  },
  {
    id: 5,
    question: "¿Qué son los senos paranasales y para qué sirven?",
    options: [
      "Huesos que protegen el cerebro",
      "Cavidades que producen lágrimas",
      "Cavidades conectadas a la nariz que producen moco",
      "Estructuras que producen hormonas"
    ],
    correctAnswer: 2,
    category: "respiratorio",
    explanation: "Son cavidades en los huesos craneales que producen moco para humedecer el aire, aligerar el cráneo y resonar la voz."
  },
  {
    id: 6,
    question: "¿Qué es la faringe y qué sistemas comparte?",
    options: [
      "Solo respiratorio - conduce aire",
      "Solo digestivo - conduce alimentos",
      "Respiratorio y digestivo - conduce aire y alimentos",
      "Circulatorio - transporta sangre"
    ],
    correctAnswer: 2,
    category: "respiratorio",
    explanation: "La faringe (garganta) es un conducto compartido: por delante va a laringe (respiración), por detrás a esófago (digestión)."
  },
  {
    id: 7,
    question: "¿Qué es la laringe y qué contiene?",
    options: [
      "Un saco donde se almacena aire",
      "Un órgano tubular con cuerdas vocales",
      "Un filtro para impurezas",
      "Un músculo para la respiración"
    ],
    correctAnswer: 1,
    category: "respiratorio",
    explanation: "La laringe conecta faringe con tráquea. Contiene las cuerdas vocales que vibran con el aire para producir sonidos."
  },
  {
    id: 8,
    question: "¿Cuál es la función de la epiglotis?",
    options: [
      "Producir la voz",
      "Filtrar el aire",
      "Actuar como 'tapa' para evitar que alimentos entren a la tráquea",
      "Humidificar el aire"
    ],
    correctAnswer: 2,
    category: "respiratorio",
    explanation: "La epiglotis es un cartílago que se cierra sobre la glotis al tragar, dirigiendo alimentos al esófago y no a la tráquea."
  },
  {
    id: 9,
    question: "¿Qué es la tráquea y cómo se mantiene abierta?",
    options: [
      "Un músculo que se contrae",
      "Un conducto flexible de músculo",
      "Un conducto con anillos de cartílago en forma de C",
      "Un saco elástico"
    ],
    correctAnswer: 2,
    category: "respiratorio",
    explanation: "La tráquea tiene 15-20 anillos cartilaginosos en forma de C que evitan su colapso durante la inspiración."
  },
  {
    id: 10,
    question: "¿Cómo se protege la tráquea de impurezas?",
    options: [
      "Con válvulas que se cierran",
      "Con células secretoras de ácido",
      "Con moco y cilios que atrapan partículas",
      "Con músculos que expulsan impurezas"
    ],
    correctAnswer: 2,
    category: "respiratorio",
    explanation: "El epitelio ciliado pseudoestratificado produce moco que atrapa partículas, y los cilios las desplazan hacia la faringe para ser tragadas o expulsadas."
  },
  {
    id: 11,
    question: "¿Qué son los bronquios?",
    options: [
      "Pequeños sacos de aire",
      "Músculos respiratorios",
      "Dos ramas principales que entran a cada pulmón",
      "Vasos sanguíneos pulmonares"
    ],
    correctAnswer: 2,
    category: "respiratorio",
    explanation: "Los bronquios principales (derecho e izquierdo) se originan de la bifurcación traqueal y entran a los pulmones, ramificándose en bronquiolos."
  },
  {
    id: 12,
    question: "¿Qué son los bronquiolos?",
    options: [
      "Las ramas más grandes de los bronquios",
      "Pequeñas ramificaciones que conducen a los alvéolos",
      "Estructuras que producen moco",
      "Vasos sanguíneos alrededor de los alvéolos"
    ],
    correctAnswer: 1,
    category: "respiratorio",
    explanation: "Los bronquiolos son las ramificaciones más pequeñas (menos de 1mm) que terminan en los sacos alveolares."
  },
  {
    id: 13,
    question: "¿Qué son los alvéolos y cuál es su función?",
    options: [
      "Músculos que expanden los pulmones",
      "Sacos microscópicos donde ocurre el intercambio gaseoso",
      "Células que producen moco",
      "Válvulas que regulan el flujo de aire"
    ],
    correctAnswer: 1,
    category: "respiratorio",
    explanation: "Los alvéolos (300-500 millones por pulmón) son sacos de pared delgada rodeados de capilares donde ocurre la hematosis (intercambio O₂/CO₂)."
  },
  {
    id: 14,
    question: "¿Cómo están formados los pulmones?",
    options: [
      "Por tejido muscular estriado",
      "Por millones de alvéolos y tejido elástico",
      "Principalmente por cartílago",
      "Por tejido óseo esponjoso"
    ],
    correctAnswer: 1,
    category: "respiratorio",
    explanation: "Los pulmones son órganos esponjosos, elásticos, formados por árbol bronquial, alvéolos y tejido conectivo, recubiertos por pleuras."
  },
  {
    id: 15,
    question: "¿Qué son las pleuras y para qué sirven?",
    options: [
      "Válvulas cardiacas",
      "Membranas que recubren los pulmones y evitan fricción",
      "Músculos respiratorios",
      "Vasos sanguíneos pulmonares"
    ],
    correctAnswer: 1,
    category: "respiratorio",
    explanation: "La pleura visceral cubre los pulmones, la parietal cubre la cavidad torácica. Entre ambas hay líquido pleural que reduce la fricción."
  },
  {
    id: 16,
    question: "¿Qué es la ventilación pulmonar?",
    options: [
      "El intercambio de gases en los alvéolos",
      "El transporte de oxígeno en la sangre",
      "El proceso de entrada y salida de aire de los pulmones",
      "La producción de energía en las células"
    ],
    correctAnswer: 2,
    category: "respiratorio",
    explanation: "Ventilación = inspiración (entrada de aire) + espiración (salida de aire). Permite renovar el aire alveolar."
  },
  {
    id: 17,
    question: "Describe el proceso de inspiración:",
    options: [
      "Diafragma se relaja, costillas bajan",
      "Diafragma se contrae, costillas suben",
      "Solo los músculos intercostales trabajan",
      "Es un proceso pasivo sin músculos"
    ],
    correctAnswer: 1,
    category: "respiratorio",
    explanation: "Inspiración: diafragma se contrae (desciende), intercostales externos contraen (elevan costillas) → ↑volumen torácico → ↓presión → aire entra."
  },
  {
    id: 18,
    question: "Describe el proceso de espiración:",
    options: [
      "Diafragma se contrae activamente",
      "Es siempre un proceso activo",
      "Diafragma se relaja, costillas bajan pasivamente",
      "Requiere contracción muscular forzada"
    ],
    correctAnswer: 2,
    category: "respiratorio",
    explanation: "Espiración tranquila: diafragma e intercostales se relajan → ↓volumen torácico → ↑presión → aire sale pasivamente."
  },
  {
    id: 19,
    question: "¿Qué músculo es el principal de la respiración?",
    options: [
      "Intercostales externos",
      "Diafragma",
      "Abdominales",
      "Pectorales"
    ],
    correctAnswer: 1,
    category: "respiratorio",
    explanation: "El diafragma (cúpula muscular) es el principal músculo inspiratorio. Su contracción aumenta el diámetro vertical del tórax."
  },
  {
    id: 20,
    question: "¿Qué son los músculos intercostales y qué hacen?",
    options: [
      "Músculos del abdomen que ayudan a la espiración",
      "Músculos entre costillas que las elevan o deprimen",
      "Músculos del cuello para respirar",
      "Músculos de la espalda para postura"
    ],
    correctAnswer: 1,
    category: "respiratorio",
    explanation: "Intercostales externos: elevan costillas (inspiración). Intercostales internos: deprimen costillas (espiración forzada)."
  },
  {
    id: 21,
    question: "¿Dónde ocurre el intercambio de gases?",
    options: [
      "En los bronquios",
      "En la tráquea",
      "En los alvéolos",
      "En la laringe"
    ],
    correctAnswer: 2,
    category: "respiratorio",
    explanation: "En la membrana alveolocapilar (alvéolo + capilar sanguíneo) por difusión simple según gradiente de presión."
  },
  {
    id: 22,
    question: "¿Por qué el O₂ pasa de los alvéolos a la sangre?",
    options: [
      "Por bombeo activo de la hemoglobina",
      "Porque la presión de O₂ es mayor en los alvéolos",
      "Porque la sangre lo atrae químicamente",
      "Por contracción de los capilares"
    ],
    correctAnswer: 1,
    category: "respiratorio",
    explanation: "PO₂ alveolar ≈ 104 mmHg > PO₂ capilar ≈ 40 mmHg → difusión de O₂ hacia la sangre hasta equilibrarse."
  },
  {
    id: 23,
    question: "¿Por qué el CO₂ pasa de la sangre a los alvéolos?",
    options: [
      "Porque los alvéolos lo producen",
      "Porque la presión de CO₂ es mayor en la sangre",
      "Por expulsión activa de los glóbulos rojos",
      "Porque el O₂ lo desplaza"
    ],
    correctAnswer: 1,
    category: "respiratorio",
    explanation: "PCO₂ capilar ≈ 45 mmHg > PCO₂ alveolar ≈ 40 mmHg → difusión de CO₂ hacia los alvéolos para ser exhalado."
  },
  {
    id: 24,
    question: "¿De qué factores depende la cantidad de O₂ que pasa a la sangre?",
    options: [
      "Solo del volumen de aire inspirado",
      "Diferencia de presión, superficie alveolar y ventilación",
      "Solo de la frecuencia cardiaca",
      "Solo de la temperatura ambiental"
    ],
    correctAnswer: 1,
    category: "respiratorio",
    explanation: "Depende de: 1) Gradiente de presión O₂, 2) Superficie alveolocapilar (~70m²), 3) Volumen respiratorio minuto, 4) Ventilación alveolar."
  },
  {
    id: 25,
    question: "¿Cómo se transporta mayormente el oxígeno en la sangre?",
    options: [
      "Disuelto en plasma (97%)",
      "Unido a hemoglobina (97%)",
      "Como bicarbonato (60%)",
      "Unido a albúmina (40%)"
    ],
    correctAnswer: 1,
    category: "respiratorio",
    explanation: "97-98% unido a hemoglobina (Hb) como oxihemoglobina (HbO₂). 2-3% disuelto en plasma."
  },
  {
    id: 26,
    question: "¿Cómo se transporta mayormente el dióxido de carbono en la sangre?",
    options: [
      "Disuelto en plasma (70%)",
      "Unido a hemoglobina (23%)",
      "Como bicarbonato (70%)",
      "Unido a plaquetas (7%)"
    ],
    correctAnswer: 2,
    category: "respiratorio",
    explanation: "70% como bicarbonato (HCO₃⁻), 23% unido a Hb como carboaminohemoglobina, 7% disuelto en plasma."
  },
  {
    id: 27,
    question: "¿Qué es la hemoglobina y por qué es importante?",
    options: [
      "Una enzima digestiva",
      "Una proteína muscular",
      "Una proteína en glóbulos rojos que transporta gases",
      "Una hormona respiratoria"
    ],
    correctAnswer: 2,
    category: "respiratorio",
    explanation: "Proteína tetramérica con 4 grupos hemo (Fe²⁺) que se une reversiblemente a O₂ y CO₂. Capacidad: 1.34 mL O₂/g Hb."
  },
  {
    id: 28,
    question: "¿Qué es la neumonía?",
    options: [
      "Inflamación de la garganta",
      "Inflamación de los pulmones que afecta alvéolos",
      "Dilatación de los bronquios",
      "Pérdida de elasticidad pulmonar"
    ],
    correctAnswer: 1,
    category: "respiratorio",
    explanation: "Infección/inflamación del parénquima pulmonar (alvéolos). Causas: bacterias (S. pneumoniae), virus, hongos. Llena alvéolos de exudado."
  },
  {
    id: 29,
    question: "Síntomas principales de la neumonía:",
    options: [
      "Solo tos seca",
      "Fiebre, tos productiva, dolor torácico, disnea",
      "Solo dificultad para tragar",
      "Pérdida de voz sin otros síntomas"
    ],
    correctAnswer: 1,
    category: "respiratorio",
    explanation: "Fiebre alta, escalofríos, tos con esputo purulento, dolor pleurítico, taquipnea, taquicardia, signos de consolidación pulmonar."
  },
  {
    id: 30,
    question: "¿Qué es el enfisema pulmonar?",
    options: [
      "Infección bronquial aguda",
      "Dilatación y destrucción permanente de alvéolos",
      "Acumulación de líquido en pulmones",
      "Espasmo de los bronquios"
    ],
    correctAnswer: 1,
    category: "respiratorio",
    explanation: "EPOC: destrucción de paredes alveolares → grandes bullas, ↓ superficie intercambio, ↓ elasticidad → atrapamiento aéreo."
  },
  {
    id: 31,
    question: "Principal causa del enfisema:",
    options: [
      "Infecciones virales infantiles",
      "Consumo de tabaco (90% casos)",
      "Ejercicio excesivo",
      "Alergias alimentarias"
    ],
    correctAnswer: 1,
    category: "respiratorio",
    explanation: "Tabaco → inflamación crónica → liberación de elastasas (destruyen elastina) + ↓ alfa-1-antitripsina (protector) → destrucción alveolar."
  },
  {
    id: 32,
    question: "Síntomas del enfisema avanzado:",
    options: [
      "Disnea de esfuerzo, tórax en tonel, cianosis",
      "Solo tos ocasional",
      "Fiebre intermitente",
      "Dolor abdominal"
    ],
    correctAnswer: 0,
    category: "respiratorio",
    explanation: "Disnea progresiva, tos crónica, sibilancias, tórax hiperinsuflado (en tonel), uso de músculos accesorios, cianosis, dedos en palillo de tambor."
  },
  {
    id: 33,
    question: "¿Qué es la laringitis?",
    options: [
      "Inflamación de los pulmones",
      "Inflamación de la mucosa laríngea",
      "Obstrucción traqueal",
      "Infección bronquial"
    ],
    correctAnswer: 1,
    category: "respiratorio",
    explanation: "Inflamación de la laringe (cuerdas vocales). Causas: virus (80%), bacterias, irritantes, reflujo, abuso vocal."
  },
  {
    id: 34,
    question: "Síntomas de la laringitis:",
    options: [
      "Disfonía (ronquera), odinofagia, tos, estridor",
      "Fiebre alta y escalofríos",
      "Dolor torácico intenso",
      "Hemorragias nasales"
    ],
    correctAnswer: 0,
    category: "respiratorio",
    explanation: "Ronquera o afonía, dolor de garganta, tos irritativa, estridor (ruido inspiratorio), disnea en casos graves (edema glótico)."
  },
  {
    id: 35,
    question: "¿Cómo se relacionan los sistemas respiratorio y circulatorio?",
    options: [
      "No se relacionan, son independientes",
      "El respiratorio provee O₂, el circulatorio lo transporta",
      "El circulatorio produce O₂ para el respiratorio",
      "Solo se relacionan durante el ejercicio"
    ],
    correctAnswer: 1,
    category: "respiratorio",
    explanation: "Respiratorio: intercambio gases. Circulatorio: transporte gases + nutrientes. Pulmones oxigenan sangre, corazón la bombea a tejidos."
  },
  {
    id: 36,
    question: "¿Qué ocurre en los capilares alveolares?",
    options: [
      "Solo pasa O₂ a la sangre",
      "Solo pasa CO₂ a los alvéolos",
      "Intercambio bidireccional: O₂ entra, CO₂ sale",
      "La sangre se almacena temporalmente"
    ],
    correctAnswer: 2,
    category: "respiratorio",
    explanation: "Hematosis: O₂ difunde de alvéolo a sangre (oxigenación), CO₂ difunde de sangre a alvéolo (eliminación). Membrana: 0.5-1 μm de grosor."
  },
  {
    id: 37,
    question: "¿Qué es la hematosis?",
    options: [
      "Producción de glóbulos rojos",
      "Intercambio gaseoso en los alvéolos",
      "Transporte de oxígeno por la hemoglobina",
      "Proceso de coagulación sanguínea"
    ],
    correctAnswer: 1,
    category: "respiratorio",
    explanation: "Proceso de oxigenación sanguínea en pulmones: sangre venosa (PO₂ 40 mmHg) → sangre arterial (PO₂ 100 mmHg)."
  },
  {
    id: 38,
    question: "¿Por qué es importante la ventilación alveolar?",
    options: [
      "Solo para mantener los pulmones inflados",
      "Para renovar aire alveolar y mantener gradientes de presión",
      "Para producir sonidos al hablar",
      "Para calentar el aire inspirado"
    ],
    correctAnswer: 1,
    category: "respiratorio",
    explanation: "Mantiene PO₂ alveolar alta (≈104 mmHg) y PCO₂ baja (≈40 mmHg) para permitir difusión eficiente. Sin ventilación → hipoxia + hipercapnia."
  },
  {
    id: 39,
    question: "Recorrido del aire desde nariz hasta alvéolos:",
    options: [
      "Nariz → laringe → corazón → pulmones",
      "Nariz → faringe → laringe → tráquea → bronquios → bronquiolos → alvéolos",
      "Boca → esófago → estómago → pulmones",
      "Nariz → senos paranasales → oídos → pulmones"
    ],
    correctAnswer: 1,
    category: "respiratorio",
    explanation: "Vías conductoras: nariz/fosas nasales → faringe → laringe → tráquea → bronquios → bronquiolos → conductos alveolares → alvéolos (intercambio)."
  },
  {
    id: 40,
    question: "Función de cada parte del recorrido aéreo:",
    options: [
      "Todas tienen la misma función",
      "Nariz: filtra; Faringe/Laringe: conducen; Tráquea/Bronquios: conducen+filtran; Alvéolos: intercambio",
      "Solo los alvéolos son importantes",
      "Todas intercambian gases"
    ],
    correctAnswer: 1,
    category: "respiratorio",
    explanation: "Zona conductora: acondicionamiento aire (filtro, calienta, humedece). Zona respiratoria (alvéolos): intercambio gases. Transición: bronquiolos."
  },
  {
    id: 41,
    question: "Escenario: Un niño se atraganta con un caramelo. ¿Qué estructura respiratoria está bloqueada?",
    options: [
      "Esófago - impide la digestión",
      "Laringe o tráquea - impide paso de aire a pulmones",
      "Bronquios - reduce intercambio gaseoso",
      "Faringe - solo dificulta la deglución"
    ],
    correctAnswer: 1,
    category: "respiratorio",
    explanation: "Obstrucción vía aérea superior (laringe/tráquea). La epiglotis no cerró a tiempo. Sin aire → hipoxia cerebral en 4-6 min → daño irreversible/muerte."
  },
  {
    id: 42,
    question: "Escenario: Persona hiperventila por ansiedad. ¿Qué ocurre a nivel de gases?",
    options: [
      "Aumenta O₂ y CO₂ en sangre",
      "Disminuye O₂, aumenta CO₂",
      "Aumenta O₂, disminuye CO₂ (hipocapnia)",
      "No cambian los gases"
    ],
    correctAnswer: 2,
    category: "respiratorio",
    explanation: "Hiperventilación → excesiva eliminación CO₂ → ↓PCO₂ sanguínea (hipocapnia) → alcalosis respiratoria → vasoconstricción cerebral → mareo, parestesias."
  },
  {
    id: 43,
    question: "Escenario: Fumador con enfisema tiene tórax en 'barril'. ¿Por qué?",
    options: [
      "Por músculos pectorales desarrollados",
      "Por acumulación de líquido en pleura",
      "Por atrapamiento aéreo e hiperinsuflación pulmonar",
      "Por deformación ósea congénita"
    ],
    correctAnswer: 2,
    category: "respiratorio",
    explanation: "Destrucción alveolar → pérdida retracción elástica → atrapamiento aire espiración → hiperinsuflación crónica → aumento diámetro anteroposterior torácico."
  },
  {
    id: 44,
    question: "Escenario: Buceador asciende rápido con dolor articular. ¿Qué tiene?",
    options: [
      "Neumonía por agua contaminada",
      "Enfermedad por descompresión (embolia gaseosa)",
      "Hipotermia severa",
      "Intoxicación por oxígeno"
    ],
    correctAnswer: 1,
    category: "respiratorio",
    explanation: "A profundidad: N₂ se disuelve en tejidos. Ascenso rápido: ↓ presión → N₂ forma burbujas en tejidos/vasos → embolia gaseosa → dolor (bends), disnea, neuro síntomas."
  },

  // ========== SISTEMA CIRCULATORIO (45-84) ==========
  {
    id: 45,
    question: "¿Qué sistema es el encargado de transportar oxígeno y nutrientes a todas las células?",
    options: [
      "Sistema respiratorio",
      "Sistema circulatorio o cardiovascular",
      "Sistema digestivo",
      "Sistema nervioso"
    ],
    correctAnswer: 1,
    category: "circulatorio",
    explanation: "El sistema circulatorio transporta O₂, nutrientes, hormonas, recoge desechos y regula temperatura."
  },
  {
    id: 46,
    question: "¿Cuáles son los tres componentes principales del sistema circulatorio?",
    options: [
      "Cerebro, pulmones, riñones",
      "Corazón, vasos sanguíneos, sangre",
      "Huesos, músculos, tendones",
      "Estómago, intestinos, hígado"
    ],
    correctAnswer: 1,
    category: "circulatorio",
    explanation: "1) Corazón (bomba), 2) Vasos (arterias, venas, capilares), 3) Sangre (medio de transporte)."
  },
  {
    id: 47,
    question: "¿Cuál es la función principal del corazón?",
    options: [
      "Filtrar la sangre",
      "Producir hormonas",
      "Actuar como bomba para impulsar la sangre",
      "Almacenar oxígeno"
    ],
    correctAnswer: 2,
    category: "circulatorio",
    explanation: "El corazón es una bomba muscular doble: lado derecho bombea a pulmones, lado izquierdo al resto del cuerpo."
  },
  {
    id: 48,
    question: "¿Qué es una arritmia?",
    options: [
      "Obstrucción de una arteria",
      "Inflamación del pericardio",
      "Alteración del ritmo o frecuencia cardíaca",
      "Dilatación de las cavidades cardíacas"
    ],
    correctAnswer: 2,
    category: "circulatorio",
    explanation: "Arritmia = disritmia. Cualquier ritmo diferente del sinusal normal (60-100 lpm en reposo)."
  },
  {
    id: 49,
    question: "¿Qué puede causar una arritmia?",
    options: [
      "Solo causas genéticas",
      "Fallas en el sistema eléctrico del corazón",
      "Solo ejercicio intenso",
      "Solo envejecimiento"
    ],
    correctAnswer: 1,
    category: "circulatorio",
    explanation: "Causas: problemas sistema conducción (SA, AV, His), isquemia, alteraciones electrolíticas, fármacos, cardiopatías estructurales."
  },
  {
    id: 50,
    question: "Síntomas de arritmia de pulso lento (bradicardia):",
    options: [
      "Ansiedad y palpitaciones",
      "Cansancio y puede perder el conocimiento",
      "Dolor torácico intenso",
      "Fiebre y escalofríos"
    ],
    correctAnswer: 1,
    category: "circulatorio",
    explanation: "Bradicardia (<60 lpm): fatiga, mareo, síncope, confusión. Tratamiento: marcapasos si sintomática."
  },
  {
    id: 51,
    question: "Síntomas de arritmia de pulso rápido (taquicardia):",
    options: [
      "Solo sudoración",
      "Palpitaciones, mareo, dolor torácico, disnea",
      "Solo aumento de peso",
      "Solo cambios en la piel"
    ],
    correctAnswer: 1,
    category: "circulatorio",
    explanation: "Taquicardia (>100 lpm): palpitaciones, ansiedad, mareo, angina, disnea, síncope. Puede evolucionar a fibrilación ventricular."
  },
  {
    id: 52,
    question: "¿Qué tipo de arritmia puede provocar muerte súbita?",
    options: [
      "Taquicardia sinusal",
      "Bradicardia sinusal",
      "Arritmias ventriculares rápidas (fibrilación ventricular)",
      "Extrasístoles aisladas"
    ],
    correctAnswer: 2,
    category: "circulatorio",
    explanation: "Fibrilación ventricular: actividad eléctrica caótica → no bombeo efectivo → paro cardiorrespiratorio en segundos. Requiere RCP + DEA."
  },
  {
    id: 53,
    question: "¿Qué genera la energía eléctrica del corazón?",
    options: [
      "El músculo cardíaco directamente",
      "El nódulo sinoauricular (marcapasos natural)",
      "El cerebro a través de nervios",
      "Las válvulas cardíacas"
    ],
    correctAnswer: 1,
    category: "circulatorio",
    explanation: "Nódulo SA (Keith-Flack): en desembocadura vena cava superior. Frecuencia intrínseca: 60-100 lpm. Inicia cada latido."
  },
  {
    id: 54,
    question: "¿Qué hace el nódulo sinoauricular?",
    options: [
      "Bombea sangre a los pulmones",
      "Genera impulsos que contraen las aurículas",
      "Filtra la sangre venosa",
      "Regula la presión arterial"
    ],
    correctAnswer: 1,
    category: "circulatorio",
    explanation: "Nódulo SA: despolarización espontánea → impulso eléctrico → contracción auricular → sangre a ventrículos."
  },
  {
    id: 55,
    question: "¿Qué es el nódulo auriculoventricular (AV)?",
    options: [
      "Bomba sangre al cuerpo",
      "Retrasa impulso para que ventrículos se llenen",
      "Produce hormonas cardíacas",
      "Filtra la sangre arterial"
    ],
    correctAnswer: 1,
    category: "circulatorio",
    explanation: "Nódulo AV (Aschoff-Tawara): en tabique interauricular. Retrasa impulso 0.1s → permite llenado ventricular completo antes de contracción."
  },
  {
    id: 56,
    question: "¿Qué función tiene el haz de His?",
    options: [
      "Conduce impulso a ventrículos para su contracción",
      "Bombea sangre a coronarias",
      "Produce sonidos cardíacos",
      "Regula frecuencia cardíaca"
    ],
    correctAnswer: 0,
    category: "circulatorio",
    explanation: "Haz de His: desde nódulo AV, se divide en ramas derecha/izquierda → fibras de Purkinje → contracción ventricular sincronizada."
  },
  {
    id: 57,
    question: "¿Qué es el circuito mayor (sistémico)?",
    options: [
      "Circulación coronaria",
      "Circulación que lleva sangre oxigenada a todo el cuerpo",
      "Circulación portal",
      "Circulación fetal"
    ],
    correctAnswer: 1,
    category: "circulatorio",
    explanation: "Ventrículo izquierdo → aorta → arterias sistémicas → capilares tejidos (O₂→células, CO₂→sangre) → venas → vena cava → aurícula derecha."
  },
  {
    id: 58,
    question: "¿Qué es el circuito menor (pulmonar)?",
    options: [
      "Circulación cerebral",
      "Circulación que lleva sangre a pulmones para oxigenarse",
      "Circulación hepática",
      "Circulación renal"
    ],
    correctAnswer: 1,
    category: "circulatorio",
    explanation: "Ventrículo derecho → arteria pulmonar → pulmones (capilares alveolares: CO₂→alvéolos, O₂→sangre) → venas pulmonares → aurícula izquierda."
  },
  {
    id: 59,
    question: "¿Por dónde sale la sangre oxigenada del corazón?",
    options: [
      "Por la vena cava",
      "Por la arteria pulmonar",
      "Por la aorta, desde ventrículo izquierdo",
      "Por las venas pulmonares"
    ],
    correctAnswer: 2,
    category: "circulatorio",
    explanation: "Aorta: arteria más grande del cuerpo. Sale de ventrículo izquierdo, lleva sangre oxigenada (95-100% saturación O₂) a todo el organismo."
  },
  {
    id: 60,
    question: "¿Por dónde regresa la sangre oxigenada de los pulmones al corazón?",
    options: [
      "Por la aorta",
      "Por la arteria pulmonar",
      "Por las venas pulmonares, a aurícula izquierda",
      "Por la vena cava"
    ],
    correctAnswer: 2,
    category: "circulatorio",
    explanation: "4 venas pulmonares (2 de cada pulmón) → aurícula izquierda → ventrículo izquierdo → aorta. Únicas venas con sangre oxigenada."
  },
  {
    id: 61,
    question: "¿Qué es un bypass coronario?",
    options: [
      "Cirugía para reparar válvulas",
      "Cirugía que crea nueva ruta alrededor de arteria obstruida",
      "Dispositivo para arritmias",
      "Medicamento para presión arterial"
    ],
    correctAnswer: 1,
    category: "circulatorio",
    explanation: "CABG: toma vena safena/arteria mamaria → anastomosis proximal (aorta) y distal (después obstrucción) → puentea lesión coronaria."
  },
  {
    id: 62,
    question: "¿Por qué se usa vaso del mismo tipo en bypass?",
    options: [
      "Solo por disponibilidad",
      "Para compatibilidad: soportar presión y evitar rechazo",
      "Porque es más barato",
      "Por tradición quirúrgica"
    ],
    correctAnswer: 1,
    category: "circulatorio",
    explanation: "Arterias (mamaria, radial): mejor permeabilidad (90% a 10 años). Venas (safena): menor permeabilidad (50% a 10 años) por diferencia estructural."
  },
  {
    id: 63,
    question: "Problema si se usa vena en lugar de arteria para bypass:",
    options: [
      "No hay problema, son iguales",
      "Puede no soportar presión arterial y fallar",
      "Cura más rápido",
      "Es más efectivo"
    ],
    correctAnswer: 1,
    category: "circulatorio",
    explanation: "Venas: paredes más delgadas, menos musculares. En sistema arterial (alta presión) → pueden dilatarse, formar aneurismas, ocluirse."
  },
  {
    id: 64,
    question: "¿Qué son las arterias?",
    options: [
      "Vasos que llevan sangre al corazón",
      "Vasos que llevan sangre desde corazón a tejidos",
      "Vasos de intercambio",
      "Vasos de almacenamiento"
    ],
    correctAnswer: 1,
    category: "circulatorio",
    explanation: "Arterias: paredes gruesas (túnica íntima, media, adventicia), elásticas, musculares. Llevan sangre oxigenada (excepto pulmonar). Presión alta."
  },
  {
    id: 65,
    question: "¿Qué son las venas?",
    options: [
      "Vasos que llevan sangre desde corazón",
      "Vasos que devuelven sangre al corazón",
      "Vasos de intercambio inmediato",
      "Vasos que producen sangre"
    ],
    correctAnswer: 1,
    category: "circulatorio",
    explanation: "Venas: paredes más delgadas, menos elásticas, válvulas semilunares. Llevan sangre desoxigenada (excepto pulmonares). Presión baja."
  },
  {
    id: 66,
    question: "¿Qué son los capilares?",
    options: [
      "Vasos grandes de conducción",
      "Vasos diminutos de intercambio gases/nutrientes",
      "Válvulas del corazón",
      "Células sanguíneas"
    ],
    correctAnswer: 1,
    category: "circulatorio",
    explanation: "Capilares: 1 célula de grosor (endotelio). Diámetro ≈ 8 μm (justo para glóbulos rojos). Red extensa (~100,000 km). Sitio de intercambio."
  },
  {
    id: 67,
    question: "¿Cuál es la arteria principal del cuerpo?",
    options: [
      "Arteria pulmonar",
      "Aorta (sale de ventrículo izquierdo)",
      "Arteria carótida",
      "Arteria femoral"
    ],
    correctAnswer: 1,
    category: "circulatorio",
    explanation: "Aorta: 2.5-3.5 cm diámetro. Porciones: ascendente, arco aórtico, torácica, abdominal. Da todas las arterias sistémicas."
  },
  {
    id: 68,
    question: "¿Qué son las arterias coronarias?",
    options: [
      "Arterias del cerebro",
      "Arterias que irrigan el músculo cardíaco",
      "Arterias de los pulmones",
      "Arterias del hígado"
    ],
    correctAnswer: 1,
    category: "circulatorio",
    explanation: "Coronarias: nacen de senos aórticos. Derecha: irriga AD, VD, parte posterior. Izquierda (tronco): ramas descendente anterior y circunfleja."
  },
  {
    id: 69,
    question: "¿Qué son las vénulas?",
    options: [
      "Arterias pequeñas",
      "Venias pequeñas que recogen sangre de capilares",
      "Células sanguíneas",
      "Válvulas venosas"
    ],
    correctAnswer: 1,
    category: "circulatorio",
    explanation: "Vénulas: diámetro 20-100 μm. Recolectan sangre de capilares → convergen en venas mayores. Paredes muy delgadas, pueden ser sitios de inflamación."
  },
  {
    id: 70,
    question: "¿De qué está compuesta la sangre?",
    options: [
      "Solo glóbulos rojos",
      "Plasma (55%) y elementos formes (45%)",
      "Solo agua y sales",
      "Solo proteínas"
    ],
    correctAnswer: 1,
    category: "circulatorio",
    explanation: "Plasma (agua 92%, proteínas 7%, otros 1%) + Elementos formes (eritrocitos, leucocitos, trombocitos). Volumen: ~5 L en adulto."
  },
  {
    id: 71,
    question: "¿Qué transportan los glóbulos rojos (eritrocitos)?",
    options: [
      "Hormonas",
      "Oxígeno unido a hemoglobina",
      "Grasas",
      "Anticuerpos"
    ],
    correctAnswer: 1,
    category: "circulatorio",
    explanation: "Eritrocitos: 4-6 millones/μL. Sin núcleo, forma bicóncava. Contienen hemoglobina (280 millones moléculas/eritrocito). Vida: 120 días."
  },
  {
    id: 72,
    question: "¿Cuál es la función de los glóbulos blancos (leucocitos)?",
    options: [
      "Transporte de oxígeno",
      "Defensa inmunitaria",
      "Coagulación",
      "Transporte de nutrientes"
    ],
    correctAnswer: 1,
    category: "circulatorio",
    explanation: "Leucocitos: 4,000-11,000/μL. Tipos: neutrófilos (infecciones bacterianas), linfocitos (inmunidad específica), monocitos, eosinófilos, basófilos."
  },
  {
    id: 73,
    question: "¿Cuál es la función de las plaquetas (trombocitos)?",
    options: [
      "Transportar CO₂",
      "Coagulación y hemostasia",
      "Transportar hormonas",
      "Defensa contra virus"
    ],
    correctAnswer: 1,
    category: "circulatorio",
    explanation: "Plaquetas: 150,000-400,000/μL. Fragmentos de megacariocitos. Adherencia, agregación, liberación factores coagulación → tapón hemostático."
  },
  {
    id: 74,
    question: "¿Qué es el plasma sanguíneo?",
    options: [
      "Parte celular de la sangre",
      "Parte líquida con agua, proteínas, nutrientes",
      "Tipo de glóbulo blanco",
      "Proteína de transporte"
    ],
    correctAnswer: 1,
    category: "circulatorio",
    explanation: "Plasma: líquido amarillento. Proteínas: albúmina (presión oncótica), globulinas (inmunidad), fibrinógeno (coagulación). Solutos: electrolitos, gases, nutrientes."
  },
  {
    id: 75,
    question: "Nombra las cuatro cámaras del corazón:",
    options: [
      "2 ventrículos y 2 aurículas",
      "3 aurículas y 1 ventrículo",
      "4 ventrículos",
      "4 aurículas"
    ],
    correctAnswer: 0,
    category: "circulatorio",
    explanation: "Aurícula derecha (sangre venosa), aurícula izquierda (sangre oxigenada), ventrículo derecho (a pulmones), ventrículo izquierdo (al cuerpo)."
  },
  {
    id: 76,
    question: "¿Qué función tienen las aurículas?",
    options: [
      "Bombear sangre a distancia",
      "Recibir sangre y pasarla a ventrículos",
      "Filtrar la sangre",
      "Producir impulsos eléctricos"
    ],
    correctAnswer: 1,
    category: "circulatorio",
    explanation: "Aurículas: cámaras de recepción. Paredes delgadas. AD: recibe venas cavas. AI: recibe venas pulmonares. Durante sístole auricular llenan ventrículos."
  },
  {
    id: 77,
    question: "¿Qué función tienen los ventrículos?",
    options: [
      "Solo recibir sangre",
      "Bombear sangre a pulmones y cuerpo",
      "Filtrar impurezas",
      "Almacenar sangre"
    ],
    correctAnswer: 1,
    category: "circulatorio",
    explanation: "Ventrículos: cámaras de eyección. Paredes musculares gruesas. VD: pared más delgada (baja presión pulmonar). VI: pared muy gruesa (alta presión sistémica)."
  },
  {
    id: 78,
    question: "¿Qué son los tabiques del corazón?",
    options: [
      "Válvulas de entrada",
      "Paredes que separan aurículas y ventrículos",
      "Vasos coronarios",
      "Músculos papilares"
    ],
    correctAnswer: 1,
    category: "circulatorio",
    explanation: "Tabique interauricular: separa aurículas. Tabique interventricular: separa ventrículos. Evitan mezcla sangre oxigenada/desoxigenada."
  },
  {
    id: 79,
    question: "¿Para qué sirven las válvulas cardíacas?",
    options: [
      "Producir sonidos cardíacos",
      "Prevenir reflujo de sangre",
      "Generar impulsos eléctricos",
      "Bombear sangre activamente"
    ],
    correctAnswer: 1,
    category: "circulatorio",
    explanation: "Válvulas atrioventriculares (tricúspide, mitral): evitan reflujo aurícula→ventrículo. Semilunares (pulmonar, aórtica): evitan reflujo arterias→ventrículos."
  },
  {
    id: 80,
    question: "Nombra las cuatro válvulas del corazón:",
    options: [
      "Tricúspide, mitral, pulmonar, aórtica",
      "Aórtica, carótida, pulmonar, renal",
      "Mitral, tricúspide, coronaria, pulmonar",
      "Aórtica, pulmonar, venosa, arterial"
    ],
    correctAnswer: 0,
    category: "circulatorio",
    explanation: "Tricúspide (AD→VD), mitral o bicúspide (AI→VI), pulmonar (VD→arteria pulmonar), aórtica (VI→aorta)."
  },
  {
    id: 81,
    question: "¿Qué es la RCP y para qué sirve?",
    options: [
      "Cirugía cardiaca",
      "Reanimación cardiopulmonar para mantener circulación",
      "Medicamento para arritmias",
      "Dispositivo de monitoreo"
    ],
    correctAnswer: 1,
    category: "circulatorio",
    explanation: "RCP: compresiones torácicas + ventilaciones. Mantiene 25-33% flujo cardiaco normal → perfusión cerebral/coronaria hasta restablecer circulación espontánea."
  },
  {
    id: 82,
    question: "Ritmo de compresiones en RCP:",
    options: [
      "60-80 por minuto",
      "100-120 por minuto",
      "140-160 por minuto",
      "40-60 por minuto"
    ],
    correctAnswer: 1,
    category: "circulatorio",
    explanation: "100-120 compresiones/minuto. Profundidad: 5-6 cm adultos. Permitir retroceso completo tórax. Proporción 30:2 (compresiones:ventilaciones)."
  },
  {
    id: 83,
    question: "¿Por qué es importante la descompresión completa en RCP?",
    options: [
      "Para no cansarse",
      "Para que corazón se llene de sangre para siguiente compresión",
      "Para evitar fracturas costales",
      "Para tomar aire el reanimador"
    ],
    correctAnswer: 1,
    category: "circulatorio",
    explanation: "Retroceso completo → presión intratorácica negativa → retorno venoso → llenado cardiaco → gasto cardiaco en siguiente compresión."
  },
  {
    id: 84,
    question: "¿Qué es un DEA y cómo funciona?",
    options: [
      "Desfibrilador que analiza ritmo y da descarga si necesario",
      "Marcapasos permanente",
      "Monitor de presión",
      "Bomba de insulina"
    ],
    correctAnswer: 0,
    category: "circulatorio",
    explanation: "DEA: detecta ritmos desfibrilables (FV, TV sin pulso). Da descarga (150-200 J bifásica) → despolariza miocardio masivamente → permite que nódulo SA retome ritmo sinusal."
  },
  {
    id: 85,
    question: "¿Qué es la necrosis?",
    options: [
      "Crecimiento celular excesivo",
      "Muerte celular patológica por isquemia/trauma",
      "División celular rápida",
      "Inflamación reversible"
    ],
    correctAnswer: 1,
    category: "circulatorio",
    explanation: "Necrosis: muerte celular por lesión (isquemia, toxinas, trauma). Inflamación, pérdida integridad membrana, liberación enzimas → digestión autolítica."
  },
  {
    id: 86,
    question: "¿Qué es la anemia?",
    options: [
      "Exceso de glóbulos rojos",
      "Disminución glóbulos rojos o hemoglobina",
      "Aumento de glóbulos blancos",
      "Disminución de plaquetas"
    ],
    correctAnswer: 1,
    category: "circulatorio",
    explanation: "Anemia: Hb <13 g/dL (hombres), <12 g/dL (mujeres). Síntomas: palidez, fatiga, disnea, taquicardia. Causas: deficiencia hierro, B12, hemólisis, sangrado."
  },
  {
    id: 87,
    question: "Causas principales de anemia:",
    options: [
      "Solo infecciones",
      "Deficiencias nutricionales, enfermedades crónicas, herencia",
      "Solo ejercicio",
      "Solo envejecimiento"
    ],
    correctAnswer: 1,
    category: "circulatorio",
    explanation: "Hierro (anemia ferropénica), B12/folato (anemia megaloblástica), enfermedades crónicas (renal, cáncer), hemolíticas (esferocitosis, falciforme), aplásica."
  },
  {
    id: 88,
    question: "¿Qué es la congestión venosa?",
    options: [
      "Exceso de sangre arterial",
      "Acumulación sangre en sistema venoso por retorno dificultoso",
      "Aumento presión arterial",
      "Dilatación arterial"
    ],
    correctAnswer: 1,
    category: "circulatorio",
    explanation: "Congestión pasiva: falla ventricular derecha → ↑presión venosa → edema (pulmonar, periférico), hepatomegalia congestiva, ingurgitación yugular."
  },
  {
    id: 89,
    question: "¿Dónde se manifiesta comúnmente la congestión venosa?",
    options: [
      "Solo en cerebro",
      "Pulmones, hígado, extremidades inferiores",
      "Solo en riñones",
      "Solo en piel"
    ],
    correctAnswer: 1,
    category: "circulatorio",
    explanation: "IC derecha: edema maleolar (pies/tobillos), hepatomegalia, ascitis. IC izquierda: congestión pulmonar (edema, disnea, ortopnea)."
  },

  // ========== INTEGRACIÓN SISTEMAS (90-95) ==========
  {
    id: 90,
    question: "¿Cómo se relacionan alvéolos y capilares sanguíneos?",
    options: [
      "No se relacionan",
      "Los capilares rodean alvéolos para intercambio gases",
      "Los alvéolos producen sangre",
      "Los capilares conducen aire"
    ],
    correctAnswer: 1,
    category: "integracion",
    explanation: "Unidad alveolocapilar: alvéolo + capilar + membrana basal compartida (0.2-0.5 μm). Superficie total intercambio: ~70 m² (cancha tenis)."
  },
  {
    id: 91,
    question: "Recorrido O₂ desde nariz a célula del pie:",
    options: [
      "Nariz → estómago → corazón → pie",
      "Nariz → vías respiratorias → alvéolos → sangre → corazón izquierdo → aorta → arterias → capilares pie → célula",
      "Directo de pulmones a pie",
      "Nariz → cerebro → pie"
    ],
    correctAnswer: 1,
    category: "integracion",
    explanation: "Vías aéreas → hematosis (alvéolo-capilar) → sangre oxigenada → venas pulmonares → AI → VI → aorta → ilíacas → femorales → poplíteas → tibiales → capilares pie → difusión a célula."
  },
  {
    id: 92,
    question: "Recorrido CO₂ desde célula muscular a exhalación:",
    options: [
      "Célula → linfa → piel",
      "Célula → capilar → vena → AD → VD → arteria pulmonar → pulmones → alvéolo → vías aéreas → exhalación",
      "Directo de músculo a aire",
      "Célula → riñón → orina"
    ],
    correctAnswer: 1,
    category: "integracion",
    explanation: "CO₂ célula → capilar → vénulas → venas → vena cava → AD → VD → arteria pulmonar → capilar pulmonar → difusión a alvéolo → bronquiolos → bronquios → tráquea → laringe → faringe → nariz/boca → exhalación."
  },
  {
    id: 93,
    question: "Escenario: Deshidratación → desmayo. Explicación:",
    options: [
      "Solo cansancio muscular",
      "↓volumen plasma → ↓presión arterial → ↑FC compensatoria → si insuficiente → ↓flujo cerebral → síncope",
      "Exceso de azúcar",
      "Alergia al sol"
    ],
    correctAnswer: 1,
    category: "integracion",
    explanation: "Deshidratación → hemoconcentración → ↓volumen intravascular → ↓retorno venoso → ↓gasto cardiaco → ↓presión arterial → barorreceptores → ↑FC y vasoconstricción → si persiste hipovolemia → hipoperfusión cerebral → síncope."
  },
  {
    id: 94,
    question: "Escenario: Dolor pecho al subir escaleras. ¿Qué patología?",
    options: [
      "Reflujo gastroesofágico",
      "Angina de pecho por enfermedad coronaria",
      "Neumonía",
      "Ansiedad sola"
    ],
    correctAnswer: 1,
    category: "integracion",
    explanation: "Enfermedad coronaria (aterosclerosis) → ↓flujo sangre miocardio. Ejercicio: ↑ demanda O₂ miocardio. Isquemia → dolor anginoso (opresivo, retroesternal)."
  },
  {
    id: 95,
    question: "¿Cómo se relacionan directamente sistemas respiratorio y circulatorio?",
    options: [
      "Son sistemas independientes",
      "Circulatorio lleva O₂ de pulmones a tejidos y CO₂ de tejidos a pulmones",
      "Respiratorio bombea sangre",
      "Circulatorio produce O₂"
    ],
    correctAnswer: 1,
    category: "integracion",
    explanation: "Integración funcional: 1) Pulmones (respiratorio) oxigenan sangre, 2) Corazón (circulatorio) bombea sangre oxigenada a tejidos, 3) Tejidos usan O₂/producen CO₂, 4) Sangre lleva CO₂ a pulmones para eliminación."
  }
];


