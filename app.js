/* ==========================================================================
   BASE DE DATOS DE PLATAFORMAS (CONTENIDO DIDÁCTICO)
   ========================================================================== */
const platformsData = {
  classroom: {
    title: 'Google Classroom',
    badge: 'Básico • Gestión',
    headerBg: 'linear-gradient(135deg, #0f9d58, #1b5e20)',
    iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36" fill="white">
                <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm1 14.5a1.5 1.5 0 1 1-1.5-1.5 1.5 1.5 0 0 1 1.5 1.5zm.5-5.5a1.5 1.5 0 0 1-1.5 1.5h-1a1 1 0 0 1 0-2h1A1.5 1.5 0 0 1 13.5 11z"/>
              </svg>`,
    tutorial: [
      {
        num: 1,
        title: 'Crear tu clase',
        desc: 'Inicia sesión en Classroom con tu cuenta docente. En la esquina superior derecha, haz clic en el botón <strong>"+"</strong> y selecciona <strong>"Crear clase"</strong>. Escribe un título descriptivo como <em>"Ciencias Naturales - 3° Primaria"</em>.'
      },
      {
        num: 2,
        title: 'Invitar a tus alumnos',
        desc: 'En la pestaña "Personas", puedes invitar a tus estudiantes mediante su correo electrónico institucional, o copiar el <strong>"Código de clase"</strong> en la pantalla principal para enviárselo a las familias por tus canales habituales (WhatsApp, correo).'
      },
      {
        num: 3,
        title: 'Crear tu primera tarea',
        desc: 'Dirígete a "Trabajo de clase", haz clic en <strong>"Crear" &rarr; "Tarea"</strong>. Redacta instrucciones muy claras y cortas, adecuadas para la lectura de niños pequeños, dividiéndolas en pasos numerados.'
      },
      {
        num: 4,
        title: 'Subir material de apoyo interactivo',
        desc: 'Haz clic en el icono de adjunto para sumar links de juegos interactivos, videos cortitos de YouTube explicativos o fichas de PDF. Establece una fecha límite amigable de entrega.'
      }
    ],
    pedagogy: [
      {
        tag: 'Lectoescritura',
        title: 'Bitácora Semanal de Cuentos',
        desc: 'Crea una tarea permanente llamada "Mi Rincón de Lectura". Cada viernes, los niños subirán una foto del dibujo que hicieron sobre el libro semanal y un comentario muy corto de lo que más les gustó.'
      },
      {
        tag: 'Vínculo Familiar',
        title: 'Audios de Motivación de Lunes',
        desc: 'Usa el "Tablón de anuncios" para saludar a tus alumnos cada lunes. Graba y sube un video o audio breve animándolos e indicándoles las metas divertidas de la semana escolar.'
      }
    ],
    resources: [
      {
        title: 'Guía Oficial de Soporte de Google',
        desc: 'Manual completo para docentes sobre la configuración y solución de problemas en Classroom.',
        url: 'https://support.google.com/edu/classroom/'
      },
      {
        title: 'Centro de Aprendizaje de Google Workspace',
        desc: 'Cursos gratuitos y tutoriales rápidos sobre Classroom para escuelas de primaria.',
        url: 'https://teachercenter.withgoogle.com/'
      }
    ]
  },
  canva: {
    title: 'Canva para Educación',
    badge: 'Intermedio • Diseño',
    headerBg: 'linear-gradient(135deg, #00c4cc, #7d2ae8)',
    iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36" fill="white">
                <path d="M12 2c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10-4.48-10-10-10zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
              </svg>`,
    tutorial: [
      {
        num: 1,
        title: 'Solicitar cuenta educativa',
        desc: 'Ingresa a Canva.com y regístrate con tu correo docente institucional. Aplica para la verificación en la sección "Educación". Así desbloquearás gratuitamente miles de plantillas y recursos premium sin marcas de agua.'
      },
      {
        num: 2,
        title: 'Elegir una plantilla didáctica',
        desc: 'Usa el buscador de Canva escribiendo palabras clave como <em>"ficha interactiva primaria"</em>, <em>"diploma niños"</em> o <em>"flashcard silabario"</em>. Elige el formato visual que se alinee con tu lección.'
      },
      {
        num: 3,
        title: 'Personalizar el contenido visual',
        desc: 'Haz doble clic en los textos para modificarlos. Puedes cambiar los colores y arrastrar dibujos divertidos desde la barra "Elementos". Asegúrate de usar tipografías legibles como <em>Open Sans</em> o <em>Dyslexic</em>.'
      },
      {
        num: 4,
        title: 'Guardar e Imprimir',
        desc: 'Haz clic en <strong>"Compartir" &rarr; "Descargar"</strong>. Selecciona la opción <strong>"PDF para impresión"</strong> para obtener la mejor calidad física. Imprímelo para tu salón o compártelo digitalmente.'
      }
    ],
    pedagogy: [
      {
        tag: 'Motivación',
        title: 'Diplomas de Estrella Semanal',
        desc: 'Diseña una plantilla de diploma escolar rápida. Premia cada semana a diferentes niños de forma rotativa por logros pequeños pero vitales: "El más colaborador", "Super puntual", o "Gran compañero".'
      },
      {
        tag: 'Inclusión Visual',
        title: 'Flashcards de Vocabulario en Mayúscula',
        desc: 'Para alumnos de 1er o 2do grado con retos de lectura, diseña tarjetas visuales. Coloca una imagen gigante a todo color arriba y la palabra en letras imprentas mayúsculas abajo.'
      }
    ],
    resources: [
      {
        title: 'Canva Educación - Recursos Oficiales',
        desc: 'Accede a la página de registro y tutoriales detallados para docentes de Canva.',
        url: 'https://www.canva.com/education/'
      },
      {
        title: 'Plantillas de Fichas de Primaria gratis',
        desc: 'Galería de plantillas prediseñadas y listas para usar con tus estudiantes.',
        url: 'https://www.canva.com/es_es/educacion/plantillas/'
      }
    ]
  },
  kahoot: {
    title: 'Kahoot!',
    badge: 'Fácil • Gamificación',
    headerBg: 'linear-gradient(135deg, #46178f, #864cbf)',
    iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36" fill="white">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2zm0-4h-2V7h2z"/>
              </svg>`,
    tutorial: [
      {
        num: 1,
        title: 'Registrarse como Docente',
        desc: 'Ve a Kahoot.com, haz clic en "Sign up" y selecciona la opción <strong>"Teacher" (Profesor)</strong>, seguida de "School" (Escuela). Usa la versión básica totalmente gratuita.'
      },
      {
        num: 2,
        title: 'Crear tu Kahoot',
        desc: 'Haz clic en el botón superior derecho <strong>"Create" (Crear) &rarr; "Kahoot"</strong>. Escribe tu primera pregunta didáctica en la parte superior (ej: <em>"¿Cuál es el planeta más cercano al Sol?"</em>).'
      },
      {
        num: 3,
        title: 'Agregar respuestas y tiempo',
        desc: 'Escribe de 2 a 4 opciones de respuesta y marca la correcta con un círculo de verificación. Elige un tiempo límite adecuado (30 o 60 segundos es ideal para primaria) y añade imágenes ilustrativas.'
      },
      {
        num: 4,
        title: 'Lanzar el juego presencial',
        desc: 'Haz clic en "Start" para proyectar el juego en el pizarrón. Indica a los estudiantes que abran <strong>kahoot.it</strong> en sus dispositivos escolares, digiten el PIN numérico de la pantalla y elijan un nombre escolar.'
      }
    ],
    pedagogy: [
      {
        tag: 'Evaluación Formativa',
        title: 'Juego de Saberes Previos',
        desc: 'Antes de iniciar un tema complejo (ej. Fracciones), realiza un Kahoot rápido de 5 preguntas sobre sumas sencillas para identificar de manera divertida qué nivel de partida tiene el grupo.'
      },
      {
        tag: 'Participación Activa',
        title: 'Competencia sana de Matemáticas',
        desc: 'Realiza mini competencias de cálculo mental a mitad de la clase para refrescar la concentración de los niños. Prémialos con elogios públicos e incentivos cooperativos.'
      }
    ],
    resources: [
      {
        title: 'Guía de Inicio Rápido de Kahoot!',
        desc: 'Aprende los fundamentos de creación y juego interactivo paso a paso.',
        url: 'https://kahoot.com/library/quick-start-guide/'
      },
      {
        title: 'Biblioteca de Kahoots para Primaria',
        desc: 'Busca miles de cuestionarios ya listos de Geografía, Historia y Matemáticas clasificados por grados.',
        url: 'https://kahoot.com/explore/'
      }
    ]
  },
  padlet: {
    title: 'Padlet',
    badge: 'Fácil • Colaboración',
    headerBg: 'linear-gradient(135deg, #ff5e5b, #ff8243)',
    iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36" fill="white">
                <path d="M4 6H2v14a2 2 0 0 0 2 2h14v-2H4zm16-4H8a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm-1 9H9V9h10zm0-4H9V5h10z"/>
              </svg>`,
    tutorial: [
      {
        num: 1,
        title: 'Crear tu primer muro',
        desc: 'Crea tu cuenta gratuita en Padlet.com y haz clic en <strong>"Hacer un Padlet"</strong>. Selecciona la estructura de <strong>"Muro"</strong> (para contenidos libres) o <strong>"Estantería"</strong> (para ordenar por materias/secciones).'
      },
      {
        num: 2,
        title: 'Configurar un entorno amigable',
        desc: 'Personaliza tu muro dándole un título motivante como <em>"¡Nuestras Manualidades Recicladas!"</em>. Elige un fondo de pantalla infantil colorido y activa la opción para que los alumnos escriban sus nombres.'
      },
      {
        num: 3,
        title: 'Activar moderación de seguridad',
        desc: 'En la sección de ajustes, es fundamental activar la opción <strong>"Exigir aprobación"</strong>. De este modo, ninguna publicación de los estudiantes aparecerá públicamente hasta que tú la apruebes.'
      },
      {
        num: 4,
        title: 'Compartir con código QR o enlace',
        desc: 'Haz clic en "Compartir" y genera un <strong>Código QR</strong>. Proyéctalo en la pantalla del salón para que los niños lo escaneen con las tablets escolares o copia el enlace directo para Classroom.'
      }
    ],
    pedagogy: [
      {
        tag: 'Proyectos',
        title: 'Galería de Ciencias Naturales',
        desc: 'Para un proyecto escolar sobre plantas, pide a tus alumnos que capturen fotos del crecimiento de su semilla en casa y la suban al Padlet con una grabación de voz breve explicando sus cuidados diarios.'
      },
      {
        tag: 'Lluvia de Ideas',
        title: 'Muro Virtual de Sentimientos',
        desc: 'Crea un Padlet semanal de tutoría socioemocional. Los niños pueden subir un dibujo, un sticker o escribir una oración corta respondiendo a la consigna de inicio de semana: <em>"¿Cómo me siento hoy?"</em>.'
      }
    ],
    resources: [
      {
        title: 'Centro de Soporte Oficial de Padlet',
        desc: 'Preguntas frecuentes y tutoriales visuales avanzados sobre la administración de muros.',
        url: 'https://padlet.help'
      },
      {
        title: 'Galería de Ejemplos Pedagógicos',
        desc: 'Revisa muros compartidos públicamente por docentes de todo el mundo para inspirar tus clases.',
        url: 'https://padlet.com/gallery'
      }
    ]
  }
};

/* ==========================================================================
   CUESTIONARIO Y LOGICA DEL QUIZ (BASE DE DATOS DE PREGUNTAS)
   ========================================================================== */
const quizQuestions = [
  {
    question: "Un docente de 2° grado de primaria quiere repasar las tablas de multiplicar de forma lúdica y competitiva en los últimos 10 minutos de clase presencial. ¿Cuál plataforma es la más adecuada?",
    options: [
      { letter: "A", text: "Google Classroom, programando una tarea de matemáticas escrita." },
      { letter: "B", text: "Kahoot!, proyectando un cuestionario de trivia interactiva en tiempo real." },
      { letter: "C", text: "Padlet, creando un muro colaborativo donde cada niño escriba los resultados." }
    ],
    correct: 1, // Letra B
    explanation: "Kahoot! es perfecto para actividades rápidas, competitivas y en tiempo real al finalizar un tema de clase, motivando a los niños a consolidar aprendizajes a través de la gamificación directa."
  },
  {
    question: "Deseas diseñar una ficha didáctica colorida e interactiva con pictogramas, utilizando una tipografía especial adaptada para infantes con dislexia en 3° de primaria. ¿Qué herramienta te ofrece plantillas listas y flexibilidad de diseño para esto?",
    options: [
      { letter: "A", text: "Canva para Educación." },
      { letter: "B", text: "Google Classroom." },
      { letter: "C", text: "Padlet." }
    ],
    correct: 0, // Letra A
    explanation: "Canva para Educación cuenta con miles de plantillas listas y tipografías accesibles (como Dyslexie) que facilitan enormemente el diseño de material didáctico adaptado, inclusivo y visualmente hermoso."
  },
  {
    question: "Estás coordinando un proyecto grupal de Ciencias sobre reciclaje y quieres que tus estudiantes suban fotos de sus manualidades caseras y graben notas de voz breves explicando su proceso escolar. ¿Cuál plataforma facilita esta recopilación multimedia y colaborativa?",
    options: [
      { letter: "A", text: "Kahoot!." },
      { letter: "B", text: "Google Classroom." },
      { letter: "C", text: "Padlet (usando un muro colaborativo con moderación activa)." }
    ],
    correct: 2, // Letra C
    explanation: "Padlet permite a los estudiantes subir notas de voz, fotos, videos y enlaces en un formato de muro visual interactivo sumamente intuitivo para proyectos escolares transversales."
  },
  {
    question: "Para asegurar un ambiente digital seguro en primaria al usar un muro colaborativo donde los niños escriben comentarios públicos, ¿qué acción de seguridad es indispensable aplicar en Padlet?",
    options: [
      { letter: "A", text: "No permitir que nadie suba fotos bajo ninguna circunstancia." },
      { letter: "B", text: "Activar la opción de 'Exigir aprobación' (moderación previa del docente) en los ajustes del muro." },
      { letter: "C", text: "Dejar el Padlet completamente público sin contraseñas ni control de contenidos." }
    ],
    correct: 1, // Letra B
    explanation: "Activar la moderación previa o 'Exigir aprobación' en Padlet asegura que tú como docente revises cualquier publicación escolar antes de ser visible para los demás niños del salón, previniendo contenido no deseado."
  },
  {
    question: "Quieres organizar los materiales de estudio de Lenguaje y Matemáticas por materias, programar entregas semanales con rúbricas sencillas y enviar recordatorios directamente a los correos institucionales de los padres de familia. ¿Cuál es tu herramienta principal?",
    options: [
      { letter: "A", text: "Canva." },
      { letter: "B", text: "Google Classroom." },
      { letter: "C", text: "Kahoot!." }
    ],
    correct: 1, // Letra B
    explanation: "Google Classroom es la herramienta ideal de gestión de aula virtual, centralizando asignaciones escolares, retroalimentación formativa y comunicación escolar formal en un solo ecosistema seguro."
  }
];

/* ==========================================================================
   ESTADO GLOBAL DE LA APLICACIÓN
   ========================================================================== */
let appState = {
  theme: 'light',
  currentQuizIndex: 0,
  score: 0,
  teacherName: '',
  selectedOption: null,
  isQuestionAnswered: false
};

/* ==========================================================================
   ELEMENTOS DEL DOM
   ========================================================================== */
const header = document.getElementById('header');
const themeToggleBtn = document.getElementById('theme-toggle');
const menuToggleBtn = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

// Modal
const modalOverlay = document.getElementById('modal-overlay');
const modalCloseBtn = document.getElementById('modal-close');
const modalHero = document.getElementById('modal-hero');
const modalHeroIcon = document.getElementById('modal-hero-icon');
const modalHeroTitle = document.getElementById('modal-hero-title');
const modalHeroBadge = document.getElementById('modal-hero-badge');
const modalTabBtns = document.querySelectorAll('.modal-tab-btn');
const modalPanes = document.querySelectorAll('.modal-pane');
const tutorialStepsContainer = document.getElementById('tutorial-steps-container');
const ideasContainer = document.getElementById('ideas-container');
const linksContainer = document.getElementById('links-container');
const learnMoreBtns = document.querySelectorAll('.learn-more-btn');

// Quiz
const startQuizBtn = document.getElementById('start-quiz-btn');
const teacherNameInput = document.getElementById('teacher-name-input');
const quizViewIntro = document.getElementById('quiz-view-intro');
const quizViewQuestions = document.getElementById('quiz-view-questions');
const quizViewResults = document.getElementById('quiz-view-results');
const quizProgressBar = document.getElementById('quiz-progress-bar');
const quizProgressText = document.getElementById('quiz-progress-text');
const questionNumberHeader = document.getElementById('question-number-header');
const questionText = document.getElementById('question-text');
const quizOptionsContainer = document.getElementById('quiz-options-container');
const quizFeedbackBox = document.getElementById('quiz-feedback-box');
const quizFeedbackTitle = document.getElementById('quiz-feedback-title');
const quizFeedbackText = document.getElementById('quiz-feedback-text');
const nextQuestionBtn = document.getElementById('next-question-btn');
const resultsScoreDisplay = document.getElementById('results-score-display');
const resultsTitleDisplay = document.getElementById('results-title-display');
const printCertificateBtn = document.getElementById('print-certificate-btn');
const restartQuizBtn = document.getElementById('restart-quiz-btn');
const certificateTeacherName = document.getElementById('certificate-teacher-name');
const certificateDate = document.getElementById('certificate-date');
const certificateCode = document.getElementById('certificate-code');
const newsletterForm = document.getElementById('newsletter-form');

/* ==========================================================================
   MANEJADOR DE TEMAS & NAVEGACIÓN
   ========================================================================== */
// Inicializar tema al cargar la página
function initTheme() {
  const savedTheme = localStorage.getItem('theme') || 'light';
  document.documentElement.setAttribute('data-theme', savedTheme);
  appState.theme = savedTheme;
}

// Alternar tema claro / oscuro
function toggleTheme() {
  const nextTheme = appState.theme === 'light' ? 'dark' : 'light';
  document.documentElement.setAttribute('data-theme', nextTheme);
  localStorage.setItem('theme', nextTheme);
  appState.theme = nextTheme;
}

// Efecto Scroll en Navbar
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
  
  // Resaltado de enlaces activos al hacer scroll
  let currentSection = '';
  const sections = document.querySelectorAll('section');
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 160;
    if (window.scrollY >= sectionTop) {
      currentSection = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${currentSection}`) {
      link.classList.add('active');
    }
  });
});

// Menú Móvil
menuToggleBtn.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});

// Cerrar menú al hacer clic en enlaces
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('active');
  });
});

// Event Listeners Temas
themeToggleBtn.addEventListener('click', toggleTheme);

/* ==========================================================================
   MANEJO DEL MODAL DINÁMICO
   ========================================================================== */
// Abrir Modal con contenido dinámico
function openPlatformModal(platformKey) {
  const data = platformsData[platformKey];
  if (!data) return;

  // Cambiar estilo de fondo y colores del Modal Hero
  modalHero.style.background = data.headerBg;
  modalHero.style.setProperty('--modal-header-bg', data.headerBg);
  modalHeroIcon.innerHTML = data.iconSvg;
  modalHeroTitle.textContent = data.title;
  modalHeroBadge.textContent = data.badge;

  // Cargar Pestaña 1: Tutorial Paso a Paso
  tutorialStepsContainer.innerHTML = data.tutorial.map(step => `
    <div class="step-card">
      <div class="step-number">${step.num}</div>
      <div class="step-content">
        <h4>${step.title}</h4>
        <p>${step.desc}</p>
      </div>
    </div>
  `).join('');

  // Cargar Pestaña 2: Ideas Pedagógicas
  ideasContainer.innerHTML = data.pedagogy.map(idea => `
    <div class="idea-card">
      <span class="idea-tag">${idea.tag}</span>
      <h4>${idea.title}</h4>
      <p>${idea.desc}</p>
    </div>
  `).join('');

  // Cargar Pestaña 3: Recursos útiles
  linksContainer.innerHTML = data.resources.map(link => `
    <div class="link-item">
      <div class="link-info">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20">
          <path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"/>
        </svg>
        <div>
          <h4>${link.title}</h4>
          <p>${link.desc}</p>
        </div>
      </div>
      <a href="${link.url}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary" style="padding: 8px 16px; font-size: 0.85rem;">Visitar</a>
    </div>
  `).join('');

  // Resetear pestañas (activar la primera pestaña)
  modalTabBtns.forEach(btn => btn.classList.remove('active'));
  modalTabBtns[0].classList.add('active');
  modalPanes.forEach(pane => pane.classList.remove('active'));
  modalPanes[0].classList.add('active');

  // Mostrar el modal overlay
  modalOverlay.classList.add('active');
  document.body.style.overflow = 'hidden'; // Prevenir scroll de fondo
}

// Cerrar Modal
function closeModal() {
  modalOverlay.classList.remove('active');
  document.body.style.overflow = 'auto'; // Habilitar scroll
}

// Manejadores del modal
learnMoreBtns.forEach(btn => {
  btn.addEventListener('click', (e) => {
    const platform = e.target.getAttribute('data-platform');
    openPlatformModal(platform);
  });
});

// Event Triggers desde enlaces del Footer
document.querySelectorAll('.footer-links a').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const className = e.target.className;
    if (className.includes('classroom')) openPlatformModal('classroom');
    else if (className.includes('canva')) openPlatformModal('canva');
    else if (className.includes('kahoot')) openPlatformModal('kahoot');
    else if (className.includes('padlet')) openPlatformModal('padlet');
  });
});

modalCloseBtn.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', (e) => {
  if (e.target === modalOverlay) closeModal();
});

// Atajo Teclado ESC para cerrar
window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
    closeModal();
  }
});

// Navegación de Pestañas del Modal
modalTabBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const targetPaneId = btn.getAttribute('data-tab');
    
    modalTabBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    
    modalPanes.forEach(pane => {
      pane.classList.remove('active');
      if (pane.getAttribute('id') === targetPaneId) {
        pane.classList.add('active');
      }
    });
  });
});

/* ==========================================================================
   CUESTIONARIO INTERACTIVO & DIPLOMA
   ========================================================================== */
// Iniciar Cuestionario
startQuizBtn.addEventListener('click', () => {
  const name = teacherNameInput.value.trim();
  if (name === '') {
    alert('Por favor, ingresa tu nombre completo para emitir tu diploma al finalizar.');
    teacherNameInput.focus();
    return;
  }

  appState.teacherName = name;
  appState.currentQuizIndex = 0;
  appState.score = 0;
  appState.isQuestionAnswered = false;
  appState.selectedOption = null;

  quizViewIntro.classList.remove('active');
  quizViewQuestions.classList.add('active');
  
  loadQuizQuestion();
});

// Cargar Pregunta
function loadQuizQuestion() {
  const currentQ = quizQuestions[appState.currentQuizIndex];
  
  // Ocultar feedback y botón siguiente
  quizFeedbackBox.style.display = 'none';
  nextQuestionBtn.style.display = 'none';
  appState.isQuestionAnswered = false;
  appState.selectedOption = null;

  // Actualizar indicadores visuales
  const totalQuestions = quizQuestions.length;
  const progressPercent = ((appState.currentQuizIndex) / totalQuestions) * 100;
  quizProgressBar.style.width = `${progressPercent}%`;
  quizProgressText.textContent = `Pregunta ${appState.currentQuizIndex + 1} de ${totalQuestions}`;
  questionNumberHeader.textContent = `Caso Práctico ${appState.currentQuizIndex + 1}`;
  questionText.textContent = currentQ.question;

  // Cargar opciones interactiva
  quizOptionsContainer.innerHTML = currentQ.options.map((opt, index) => `
    <button class="quiz-option-btn" data-index="${index}">
      <span class="quiz-option-letter">${opt.letter}</span>
      <span>${opt.text}</span>
    </button>
  `).join('');

  // Escuchar clics en opciones
  document.querySelectorAll('.quiz-option-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      if (appState.isQuestionAnswered) return;
      const indexSelected = parseInt(e.currentTarget.getAttribute('data-index'));
      handleQuizAnswer(indexSelected, e.currentTarget);
    });
  });
}

// Manejar Respuesta Seleccionada
function handleQuizAnswer(index, btnElement) {
  appState.isQuestionAnswered = true;
  appState.selectedOption = index;
  const currentQ = quizQuestions[appState.currentQuizIndex];
  const optionButtons = document.querySelectorAll('.quiz-option-btn');

  // Evaluar corrección
  if (index === currentQ.correct) {
    appState.score++;
    btnElement.classList.add('correct');
    quizFeedbackTitle.textContent = '¡Excelente Elección Pedagógica!';
    quizFeedbackBox.style.borderLeftColor = 'var(--secondary)';
  } else {
    btnElement.classList.add('incorrect');
    // Resaltar la opción correcta de verde
    optionButtons[currentQ.correct].classList.add('correct');
    quizFeedbackTitle.textContent = 'Oportunidad de Aprendizaje';
    quizFeedbackBox.style.borderLeftColor = 'var(--danger)';
  }

  // Deshabilitar todas las opciones para interactividad
  optionButtons.forEach(btn => btn.setAttribute('disabled', 'true'));

  // Mostrar Caja de Retroalimentación
  quizFeedbackText.textContent = currentQ.explanation;
  quizFeedbackBox.style.display = 'block';

  // Mostrar botón Siguiente
  nextQuestionBtn.style.display = 'block';
  
  // Scroll suave hacia abajo para asegurar que vea el feedback en pantallas móviles
  setTimeout(() => {
    quizFeedbackBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }, 100);
}

// Siguiente pregunta
nextQuestionBtn.addEventListener('click', () => {
  appState.currentQuizIndex++;
  if (appState.currentQuizIndex < quizQuestions.length) {
    loadQuizQuestion();
  } else {
    showQuizResults();
  }
});

// Mostrar Resultados finales y Diploma
function showQuizResults() {
  quizProgressBar.style.width = `100%`;
  quizViewQuestions.classList.remove('active');
  quizViewResults.classList.add('active');

  resultsScoreDisplay.textContent = `${appState.score} / ${quizQuestions.length}`;
  
  // Título e incentivo según el puntaje
  if (appState.score === quizQuestions.length) {
    resultsTitleDisplay.textContent = '🏆 ¡Felicidades! Eres un Docente Digital Innovador';
  } else if (appState.score >= 3) {
    resultsTitleDisplay.textContent = '🌟 ¡Buen trabajo! Tienes sólidas competencias TIC';
  } else {
    resultsTitleDisplay.textContent = '📚 Sigue aprendiendo y mejorando';
  }

  // Configurar Diploma Dinámico
  certificateTeacherName.textContent = appState.teacherName;
  
  // Fecha elegante formateada
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = new Date().toLocaleDateString('es-ES', options);
  certificateDate.textContent = `Fecha de emisión: ${formattedDate}`;

  // ID único aleatorio del certificado
  const randomId = `ED-${Math.floor(100000 + Math.random() * 900000)}-${new Date().getFullYear().toString().substr(-2)}`;
  certificateCode.textContent = `Código de Validación Único: ${randomId}`;
}

// Botón Imprimir Certificado
printCertificateBtn.addEventListener('click', () => {
  window.print();
});

// Reiniciar Quiz
restartQuizBtn.addEventListener('click', () => {
  quizViewResults.classList.remove('active');
  quizViewIntro.classList.add('active');
  teacherNameInput.value = '';
  teacherNameInput.focus();
});

// Newsletter Form prevent refresh
newsletterForm.addEventListener('submit', (e) => {
  e.preventDefault();
  alert('¡Muchas gracias por suscribirte! Te enviaremos hermosas plantillas escolares y guías didácticas semanalmente.');
  newsletterForm.reset();
});

/* ==========================================================================
   INICIALIZACIÓN
   ========================================================================== */
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
});
