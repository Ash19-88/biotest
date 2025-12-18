# Quiz de Biología - Sistemas Respiratorio y Circulatorio

## 📖 Descripción

Aplicación web educativa interactiva para estudiantes de 4to de secundaria que desean aprender y practicar sobre los sistemas respiratorio y circulatorio del cuerpo humano. Incluye 95 preguntas con explicaciones detalladas y tres modalidades de estudio.

## 🚀 Características Principales

### 🎯 Modalidades de Estudio
- **Solo Sistema Respiratorio** - 44 preguntas específicas
- **Solo Sistema Circulatorio** - 45 preguntas específicas  
- **Quiz Completo** - 95 preguntas combinadas

### 📊 Sistema de Aprendizaje
- ✅ Retroalimentación inmediata después de cada respuesta
- 💡 Explicaciones detalladas para entender conceptos
- 📈 Sistema de puntuación con porcentaje de aciertos
- 🔄 Posibilidad de reiniciar quizzes
- 🏆 Pantalla de resultados con recomendaciones

### 🎨 Interfaz de Usuario
- 📱 Diseño completamente responsive
- 🎨 Paleta de colores optimizada para la vista
- 🔤 Textos con buen contraste y legibilidad
- ⚡ Animaciones suaves y profesionales
- 🖱️ Interacción intuitiva y fluida

## 🏗️ Arquitectura Técnica

### Stack Tecnológico
- **Frontend:** Next.js 14 con App Router
- **Lenguaje:** TypeScript
- **Estilos:** Tailwind CSS v4
- **Iconos:** React Icons
- **Hosting:** Vercel (recomendado)

### Estructura del Proyecto
```
app/
├── page.tsx                    # Página principal
├── respiratorio/               # Quiz solo respiratorio
├── circulatorio/              # Quiz solo circulatorio
├── completo/                  # Quiz completo
├── components/                # Componentes React
│   ├── WelcomeScreen.tsx     # Pantalla de bienvenida
│   └── quiz/                 # Componentes del quiz
├── data/                      # Datos del quiz
│   └── questions.ts          # 95 preguntas
└── globals.css               # Estilos globales
```

## 🎨 Paleta de Colores

### Colores Principales
| Sistema | Color Principal | Código HEX | Uso |
|---------|----------------|------------|-----|
| Primario | Azul Profesional | `#0ea5e9` | Elementos principales |
| Respiratorio | Verde Saludable | `#22c55e` | Sistema respiratorio |
| Circulatorio | Rojo Vital | `#ef4444` | Sistema circulatorio |

### Colores de Fondo y Texto
| Elemento | Color | Código HEX | Propósito |
|----------|-------|------------|-----------|
| Fondo Principal | Gris Muy Claro | `#f8fafc` | Fondo de la aplicación |
| Texto Principal | Gris Oscuro | `#1e293b` | Textos principales |
| Tarjetas | Blanco Puro | `#ffffff` | Fondo de tarjetas |
| Bordes | Gris Claro | `#e2e8f0` | Bordes suaves |

## 📊 Base de Datos de Preguntas

### Distribución de Preguntas
| Categoría | Cantidad | Temas Cubiertos |
|-----------|----------|-----------------|
| Sistema Respiratorio | 44 preguntas | Anatomía, fisiología, patologías |
| Sistema Circulatorio | 45 preguntas | Corazón, vasos, sangre, patologías |
| Integración | 6 preguntas | Relación entre sistemas |
| **Total** | **95 preguntas** | **Cobertura completa** |

### Estructura de una Pregunta
```typescript
{
  id: 1,
  question: "¿Cuál es la función principal del sistema respiratorio?",
  options: [
    "Transportar nutrientes por el cuerpo",
    "Incorporar oxígeno y eliminar dióxido de carbono",
    "Producir hormonas reguladoras", 
    "Filtrar y purificar la sangre"
  ],
  correctAnswer: 1, // Índice de la respuesta correcta (0-3)
  category: "respiratorio",
  explanation: "El sistema respiratorio se encarga del intercambio gaseoso..."
}
```

### Temas Cubiertos
#### Sistema Respiratorio
1. **Anatomía:** Nariz, faringe, laringe, tráquea, bronquios, pulmones
2. **Fisiología:** Inspiración, espiración, intercambio gaseoso
3. **Transporte de gases:** Oxihemoglobina, CO₂ en sangre
4. **Patologías:** Neumonía, enfisema, laringitis
5. **Escenarios clínicos:** Atragantamiento, hiperventilación, etc.

#### Sistema Circulatorio
1. **Anatomía cardíaca:** Aurículas, ventrículos, válvulas
2. **Sistema de conducción:** Nódulo SA, nódulo AV, haz de His
3. **Circulación:** Mayor (sistémica) y menor (pulmonar)
4. **Componentes sanguíneos:** Glóbulos rojos, blancos, plaquetas, plasma
5. **Patologías:** Arritmias, anemia, congestión venosa
6. **Emergencias:** RCP, DEA

## 🛠️ Instalación y Configuración

### Prerrequisitos
- Node.js 18.0 o superior
- npm 9.0 o superior
- Git

### Instalación Paso a Paso

1. **Clonar el repositorio**
```bash
git clone https://github.com/tu-usuario/biologia-quiz.git
cd biologia-quiz
```

2. **Instalar dependencias**
```bash
npm install
# o usando yarn
yarn install
```

3. **Ejecutar en modo desarrollo**
```bash
npm run dev
# La aplicación estará disponible en:
# http://localhost:3000
```

4. **Construir para producción**
```bash
npm run build
npm start
```

### Scripts Disponibles
| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Inicia servidor de desarrollo |
| `npm run build` | Construye la aplicación para producción |
| `npm start` | Inicia la aplicación en producción |
| `npm run lint` | Ejecuta ESLint para verificar código |

## 🌐 Despliegue en Vercel

### Método 1: Interfaz Web (Recomendado)
1. Subir el código a GitHub
2. Visitar [vercel.com](https://vercel.com)
3. Conectar cuenta de GitHub
4. Importar el repositorio
5. Vercel detectará automáticamente Next.js
6. Hacer clic en "Deploy"

### Método 2: CLI de Vercel
```bash
# Instalar CLI de Vercel
npm install -g vercel

# Iniciar sesión
vercel login

# Desplegar
vercel

# Para producción
vercel --prod
```

### Configuración de Vercel
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": ".next",
  "devCommand": "npm run dev",
  "installCommand": "npm install",
  "framework": "nextjs"
}
```

## 🎮 Guía de Uso

### Para Estudiantes
1. **Acceder a la aplicación:** Visitar la URL desplegada
2. **Pantalla principal:** Leer introducción sobre ambos sistemas
3. **Elegir modalidad:**
   - **Para práctica específica:** Elegir solo respiratorio o circulatorio
   - **Para examen completo:** Elegir quiz completo
4. **Responder preguntas:**
   - Leer cuidadosamente cada pregunta
   - Seleccionar una de las 4 opciones
   - Esperar feedback inmediato
   - Leer explicación si es necesario
5. **Ver resultados:**
   - Revisar puntuación final
   - Ver porcentaje de aciertos
   - Leer recomendaciones
   - Reiniciar si se desea

### Para Profesores
1. **Uso en clase:** Proyectar la aplicación para ejercicios grupales
2. **Evaluación:** Usar el quiz completo como examen práctico
3. **Personalización:** Modificar `questions.ts` para agregar preguntas
4. **Seguimiento:** Los estudiantes pueden practicar individualmente

## 📱 Responsive Design

### Breakpoints Optimizados
| Dispositivo | Ancho Mínimo | Ancho Máximo | Características |
|------------|--------------|--------------|-----------------|
| Móvil | 320px | 640px | Navegación vertical, botones grandes |
| Tablet | 641px | 1024px | Diseño adaptable, dos columnas |
| Desktop | 1025px | - | Tres columnas, diseño expandido |

### Características Responsive
- ✅ Textos que se ajustan automáticamente
- ✅ Imágenes optimizadas para cada dispositivo
- ✅ Menús adaptables
- ✅ Botones con tamaños apropiados
- ✅ Grillas flexibles

## 🔧 Personalización

### Agregar Nuevas Preguntas
1. Abrir `app/data/questions.ts`
2. Agregar nuevo objeto al array `questions`:
```typescript
{
  id: 96, // Siguiente número disponible
  question: "Tu nueva pregunta aquí",
  options: ["Opción A", "Opción B", "Opción C", "Opción D"],
  correctAnswer: 0, // Índice de la respuesta correcta
  category: "respiratorio" | "circulatorio" | "integracion",
  explanation: "Explicación detallada aquí"
}
```

### Modificar Colores
1. Editar `app/globals.css`
2. Modificar variables CSS en `:root`:
```css
:root {
  --color-respiratorio-500: #22c55e; /* Verde respiratorio */
  --color-circulatorio-500: #ef4444; /* Rojo circulatorio */
  --color-primary-500: #0ea5e9;     /* Azul principal */
}
```

### Cambiar Estilos de Componentes
1. Localizar el componente en `app/components/`
2. Modificar estilos inline o clases
3. Para cambios globales, modificar `globals.css`

## 🐛 Solución de Problemas

### Problemas Comunes y Soluciones

| Problema | Posible Causa | Solución |
|----------|---------------|----------|
| Error al instalar | Versión antigua de Node.js | Actualizar Node.js a versión 18+ |
| Tailwind no funciona | Configuración incorrecta | Verificar `globals.css` y `tailwind.config.js` |
| Preguntas no cargan | Error en `questions.ts` | Verificar sintaxis del archivo |
| Estilos no se aplican | Cache del navegador | Limpiar cache o usar modo incógnito |
| Error en despliegue | Configuración de Vercel | Verificar `vercel.json` |

### Comandos de Depuración
```bash
# Verificar versión de Node.js
node --version

# Verificar instalación de dependencias
npm list --depth=0

# Limpiar cache de npm
npm cache clean --force

# Reinstalar dependencias
rm -rf node_modules package-lock.json
npm install
```

## 📈 Métricas y Analytics

### Métricas de Uso (Recomendadas)
1. **Google Analytics:** Para tracking de usuarios
2. **Vercel Analytics:** Para performance y errores
3. **Hotjar:** Para heatmaps y grabaciones de sesiones

### Configuración de Google Analytics
1. Agregar en `app/layout.tsx`:
```tsx
import Script from 'next/script'

export default function Layout({ children }) {
  return (
    <html>
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-TU_ID"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-TU_ID');
          `}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  )
}
```

## 🤝 Contribución

### Guía para Contribuir
1. **Fork el repositorio**
2. **Crear rama de feature**
```bash
git checkout -b feature/nueva-caracteristica
```
3. **Hacer commits descriptivos**
```bash
git commit -m "feat: agregar nueva funcionalidad"
```
4. **Push a la rama**
```bash
git push origin feature/nueva-caracteristica
```
5. **Crear Pull Request**

### Convenciones de Código
- **TypeScript:** Tipado estricto habilitado
- **Formato:** Prettier configurado
- **Linting:** ESLint con reglas de Next.js
- **Commits:** Conventional Commits
- **Importaciones:** Ordenadas y agrupadas

### Áreas de Mejora Potenciales
1. **Nuevas características:**
   - Temporizador para preguntas
   - Modo examen con tiempo limitado
   - Sistema de ranking/leaderboard
   - Modo multiplayer
2. **Mejoras de UI/UX:**
   - Animaciones más avanzadas
   - Temas personalizables
   - Modo offline
   - Soporte para PWA

## 📚 Recursos Educativos

### Para Profundizar en los Temas
1. **Sistema Respiratorio:**
   - Libro: "Anatomía y Fisiología del Aparato Respiratorio"
   - Video: "El viaje del oxígeno" (YouTube)
   - Simulador: "Respiratory System 3D"
2. **Sistema Circulatorio:**
   - Libro: "El Corazón Humano: Estructura y Función"
   - Video: "Circulación Sanguínea Completa"
   - Simulador: "Interactive Heart Anatomy"

### Preguntas Frecuentes de Estudiantes
1. **¿Por qué es importante el diafragma?**
   - Es el principal músculo de la respiración
   - Permite la entrada y salida de aire
2. **¿Cómo funciona el sistema de conducción cardíaca?**
   - El nódulo SA genera el impulso
   - Se transmite a aurículas, luego ventrículos
   - Permite la contracción sincronizada
3. **¿Qué es la hematosis?**
   - Proceso de intercambio gaseoso en los alvéolos
   - O₂ entra a la sangre, CO₂ sale

## 📄 Licencia

Este proyecto está bajo la **Licencia MIT**. Ver archivo `LICENSE` para más detalles.

```text
MIT License

Copyright (c) 2024 [Tu Nombre]

Se concede permiso, libre de cargos, a cualquier persona que obtenga una copia
de este software y de los archivos de documentación asociados...
```

## 👥 Créditos y Agradecimientos

### Desarrollo
- **Desarrollador Principal:** [Tu Nombre]
- **Diseño UI/UX:** [Tu Nombre o colaborador]
- **Contenido Educativo:** Basado en currículo oficial

### Tecnologías
- **Next.js:** Framework de React
- **Tailwind CSS:** Utilidades CSS
- **React Icons:** Biblioteca de iconos
- **Vercel:** Plataforma de hosting

### Contribuidores
- [Lista de contribuidores]

## 📞 Contacto y Soporte

### Canales de Comunicación
- **Issues de GitHub:** Para reportar bugs o solicitar features
- **Email:** soporte@biologiaquiz.com
- **Discord/Slack:** [Enlace al servidor]
- **Twitter/X:** @biologiaquiz

### Política de Soporte
- **Respuesta en:** 24-48 horas hábiles
- **Horario de atención:** Lunes a Viernes, 9am-6pm
- **Prioridad:** Bugs críticos > Features > Mejoras

## 🎓 Uso en Instituciones Educativas

### Para Colegios
1. **Licencia institucional:** Contactar para precios
2. **Personalización:** Agregar logo y colores del colegio
3. **Estadísticas:** Dashboard para profesores
4. **Integración:** Con sistemas LMS como Moodle

### Para Universidades
1. **Versión avanzada:** Con contenido de nivel universitario
2. **API disponible:** Para integración con otras plataformas
3. **Customización completa:** Adaptar a currículo específico

## 🔮 Roadmap Futuro

### Próximas Versiones
**v1.1 (Q1 2024)**
- [ ] Modo examen con temporizador
- [ ] Sistema de progreso por estudiante
- [ ] Exportación de resultados a PDF

**v1.2 (Q2 2024)**
- [ ] Nuevos sistemas del cuerpo humano
- [ ] Modo multiplayer competitivo
- [ ] App móvil nativa

**v2.0 (Q4 2024)**
- [ ] Plataforma completa de aprendizaje
- [ ] IA para preguntas personalizadas
- [ ] Certificados digitales

---

## ✨ ¡Comienza a Aprender!

Visita la aplicación desplegada en: [https://biologia-quiz.vercel.app](https://biologia-quiz.vercel.app)

**🎯 ¡Perfecto para preparar tus exámenes de biología!**

---

*Este proyecto fue desarrollado con ❤️ para facilitar el aprendizaje de biología a estudiantes de secundaria. Si te resulta útil, considera darle una estrella en GitHub.*