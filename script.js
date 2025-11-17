// ===================================
// BASE DE DATOS DE EXPLICACIONES
// ===================================

const explicacionesIndicadores = {
    "estabilidad_politica": {
        nombre: "Estabilidad Política y Ausencia de Violencia/Terrorismo",
        explicacion: "Mide la probabilidad de que el gobierno sea desestabilizado por medios inconstitucionales o violentos, incluyendo terrorismo. Valores más altos indican mayor estabilidad.",
        fuente: "Worldwide Governance Indicators (WGI) - Banco Mundial",
        sistema_biologico: "Sistema Inmunológico",
        rango: "0-100 (percentil)"
    },
    "corrupcion": {
        nombre: "Índice de Percepción de Corrupción",
        explicacion: "Mide el nivel percibido de corrupción en el sector público. Valores más altos indican menor corrupción y mayor transparencia institucional.",
        fuente: "Transparencia Internacional",
        sistema_biologico: "Sistema Linfático",
        rango: "0-100 (0 = muy corrupto, 100 = muy transparente)"
    },
    "efectividad_gubernamental": {
        nombre: "Efectividad Gubernamental",
        explicacion: "Evalúa la calidad de los servicios públicos, la capacidad administrativa y el grado de independencia respecto a presiones políticas. Refleja la competencia del gobierno.",
        fuente: "Worldwide Governance Indicators (WGI) - Banco Mundial",
        sistema_biologico: "Cerebro / Sistema Nervioso",
        rango: "0-100 (percentil)"
    },
    "libertad_prensa": {
        nombre: "Libertad de Prensa",
        explicacion: "Mide el grado de libertad disponible para periodistas y medios de comunicación. Una prensa libre es esencial para la transparencia y la rendición de cuentas.",
        fuente: "Reporteros Sin Fronteras / Freedom House",
        sistema_biologico: "Sistema Nervioso",
        rango: "0-100 (0 = sin libertad, 100 = libertad total)"
    },
    "confianza_instituciones": {
        nombre: "Nivel de Confianza en las Instituciones",
        explicacion: "Refleja el grado de confianza de los ciudadanos en instituciones como el gobierno, policía, justicia y parlamento. Alta confianza fortalece la legitimidad del sistema.",
        fuente: "Encuestas nacionales (Latinobarómetro, Eurobarómetro)",
        sistema_biologico: "Cerebro",
        rango: "0-100% (porcentaje de ciudadanos que confían)"
    },
    "crecimiento_pib": {
        nombre: "Crecimiento del PIB",
        explicacion: "Tasa anual de crecimiento del Producto Interno Bruto. Indica la expansión o contracción de la economía. Un crecimiento sostenido refleja salud económica.",
        fuente: "Banco Mundial / FMI",
        sistema_biologico: "Corazón / Sistema Circulatorio",
        rango: "-10% a +15% (puede variar)"
    },
    "inflacion": {
        nombre: "Inflación",
        explicacion: "Mide el aumento generalizado de precios. Una inflación controlada (2-3%) es saludable; inflación alta erosiona el poder adquisitivo y genera inestabilidad.",
        fuente: "Bancos Centrales / Banco Mundial",
        sistema_biologico: "Sistema Circulatorio",
        rango: "0-20% anual (varía según contexto)"
    },
    "gini": {
        nombre: "Coeficiente de Gini",
        explicacion: "Mide la desigualdad en la distribución del ingreso. 0 = igualdad perfecta, 1 = máxima desigualdad. Valores bajos indican distribución más equitativa de recursos.",
        fuente: "Banco Mundial / OCDE",
        sistema_biologico: "Sistema Digestivo / Circulatorio",
        rango: "0.20-0.65 (típicamente)"
    },
    "pobreza": {
        nombre: "Tasa de Pobreza",
        explicacion: "Porcentaje de población viviendo bajo el umbral de pobreza nacional o internacional ($2.15/día). Refleja la capacidad del sistema de satisfacer necesidades básicas.",
        fuente: "Banco Mundial / CEPAL",
        sistema_biologico: "Sistema Digestivo",
        rango: "0-60% (varía por país)"
    },
    "infraestructura": {
        nombre: "Gasto Público en Infraestructura",
        explicacion: "Inversión gubernamental en carreteras, puentes, puertos, telecomunicaciones. Infraestructura robusta facilita el flujo de bienes, servicios y personas.",
        fuente: "Ministerios de Economía / Banco Mundial",
        sistema_biologico: "Corazón / Sistema Muscular",
        rango: "2-8% del PIB (típicamente)"
    },
    "salud": {
        nombre: "Gasto Público en Salud",
        explicacion: "Porcentaje del PIB destinado a servicios de salud pública. Refleja la prioridad del sistema en el bienestar físico de la población.",
        fuente: "OMS / Banco Mundial",
        sistema_biologico: "Sistema Linfático",
        rango: "4-12% del PIB"
    },
    "educacion": {
        nombre: "Gasto Público en Educación",
        explicacion: "Porcentaje del PIB invertido en educación pública. Una alta inversión asegura el desarrollo de capital humano y continuidad del sistema.",
        fuente: "UNESCO / Banco Mundial",
        sistema_biologico: "Sistema Reproductivo",
        rango: "3-7% del PIB"
    },
    "escolaridad": {
        nombre: "Años Promedio de Escolaridad",
        explicacion: "Número promedio de años de educación formal completados por adultos (25+ años). Refleja el nivel educativo de la población y su capacidad productiva.",
        fuente: "Índice de Desarrollo Humano (IDH) - ONU",
        sistema_biologico: "Sistema Reproductivo",
        rango: "4-14 años"
    },
    "cohesion_social": {
        nombre: "Nivel de Cohesión Social",
        explicacion: "Grado de integración, solidaridad y pertenencia en la sociedad. Alta cohesión reduce conflictos y fortalece la cooperación ciudadana.",
        fuente: "Índices nacionales / OCDE",
        sistema_biologico: "Simbiosis / Comunicación Celular",
        rango: "0-100 (índice compuesto)"
    },
    "ambiente": {
        nombre: "Gasto en Protección Ambiental",
        explicacion: "Inversión pública en protección del medio ambiente, gestión de residuos y sostenibilidad. Previene la acumulación de 'toxinas' ambientales.",
        fuente: "Ministerios de Ambiente / OCDE",
        sistema_biologico: "Sistema Urinario",
        rango: "0.5-2.5% del PIB"
    },
    "calidad_aire_agua": {
        nombre: "Calidad del Aire y Agua",
        explicacion: "Medición de contaminantes en el aire (PM2.5, PM10) y acceso a agua potable segura. Refleja la salud ambiental del sistema.",
        fuente: "OMS / Environmental Performance Index",
        sistema_biologico: "Sistema Urinario / Respiratorio",
        rango: "0-100 (índice compuesto)"
    },
    "resiliencia": {
        nombre: "FM Global Resilience Index",
        explicacion: "Evalúa la capacidad de un país para resistir y recuperarse de desastres naturales y choques económicos. Mide exposición, sensibilidad y capacidad adaptativa.",
        fuente: "FM Global",
        sistema_biologico: "Resiliencia Adaptativa",
        rango: "0-100 (mayor = más resiliente)"
    },
    "estabilidad_constitucional": {
        nombre: "Estabilidad Constitucional",
        explicacion: "Duración y respeto de la constitución vigente. Una constitución estable proporciona el 'código genético' duradero del sistema político.",
        fuente: "Análisis constitucional / Índices de democracia",
        sistema_biologico: "Estructura Celular / ADN",
        rango: "Años de vigencia / Número de reformas"
    },
    "participacion_ciudadana": {
        nombre: "Nivel de Participación Ciudadana",
        explicacion: "Mide el involucramiento activo de ciudadanos en procesos democráticos: votación, consultas, asociaciones civiles. Mayor participación fortalece la democracia.",
        fuente: "Registros electorales / Índices de democracia",
        sistema_biologico: "Autoorganización",
        rango: "30-95% (participación electoral)"
    },
    "autonomia_local": {
        nombre: "Autonomía Local",
        explicacion: "Grado de descentralización y capacidad de gobiernos locales para tomar decisiones y gestionar recursos propios. Facilita la autoorganización territorial.",
        fuente: "Índices de descentralización / OCDE",
        sistema_biologico: "Autoorganización",
        rango: "0-100 (índice de descentralización)"
    },
    "confianza_interpersonal": {
        nombre: "Confianza Interpersonal",
        explicacion: "Nivel de confianza entre ciudadanos. Alta confianza facilita la cooperación social y reduce costos de transacción en la sociedad.",
        fuente: "World Values Survey / Encuestas nacionales",
        sistema_biologico: "Simbiosis",
        rango: "0-100% (% que confía en otros)"
    },
    "innovacion_politica": {
        nombre: "Innovación Política",
        explicacion: "Capacidad del sistema para generar nuevas políticas, reformas creativas y soluciones adaptativas a problemas emergentes. Refleja la 'neuroplasticidad' del sistema.",
        fuente: "Índices de innovación / Número de reformas",
        sistema_biologico: "Neuroplasticidad / Intuición",
        rango: "Medición cualitativa o cuantitativa"
    }
};

// ===================================
// DATOS GLOBALES
// ===================================

const indicadoresPaises = {
    Suecia: { vitalidad: 90, estabilidad: 95, adaptabilidad: 88 },
    Dinamarca: { vitalidad: 92, estabilidad: 93, adaptabilidad: 90 },
    Chile: { vitalidad: 75, estabilidad: 70, adaptabilidad: 80 },
    Colombia: { vitalidad: 65, estabilidad: 60, adaptabilidad: 70 },
    España: { vitalidad: 80, estabilidad: 85, adaptabilidad: 78 }
};

// ===================================
// SIMULADOR BÁSICO
// ===================================

function calcularIndicadores(auto, resi, dive) {
    const vitalidad = Math.round((auto + dive) / 2);
    const estabilidad = Math.round((resi + auto) / 2);
    const adaptabilidad = Math.round((resi + dive) / 2);
    return { vitalidad, estabilidad, adaptabilidad };
}

function actualizarSimulador() {
    const auto = parseInt(document.getElementById('autoorganizacion').value);
    const resi = parseInt(document.getElementById('resiliencia').value);
    const dive = parseInt(document.getElementById('diversidad').value);
    
    document.getElementById('val-autoorganizacion').textContent = auto;
    document.getElementById('val-resiliencia').textContent = resi;
    document.getElementById('val-diversidad').textContent = dive;
    
    const indicadores = calcularIndicadores(auto, resi, dive);
    document.getElementById('indicador-vitalidad').textContent = indicadores.vitalidad;
    document.getElementById('indicador-estabilidad').textContent = indicadores.estabilidad;
    document.getElementById('indicador-adaptabilidad').textContent = indicadores.adaptabilidad;
}

function inicializarSimulador() {
    const rangos = ['autoorganizacion', 'resiliencia', 'diversidad'];
    rangos.forEach(id => {
        const elemento = document.getElementById(id);
        if (elemento) {
            elemento.addEventListener('input', actualizarSimulador);
        }
    });
    actualizarSimulador();
}

// ===================================
// SIMULADOR AVANZADO
// ===================================

function calcularIndicadoresAvanzados() {
    // Obtener valores de todos los indicadores avanzados
    const indicadores = {
        // Gobernanza
        estabilidad_politica: parseInt(document.getElementById('estabilidad_politica')?.value || 50),
        corrupcion: parseInt(document.getElementById('corrupcion')?.value || 50),
        efectividad_gubernamental: parseInt(document.getElementById('efectividad_gubernamental')?.value || 50),
        libertad_prensa: parseInt(document.getElementById('libertad_prensa')?.value || 50),
        confianza_instituciones: parseInt(document.getElementById('confianza_instituciones')?.value || 50),
        
        // Economía
        crecimiento_pib: parseInt(document.getElementById('crecimiento_pib')?.value || 50),
        inflacion: parseInt(document.getElementById('inflacion')?.value || 50),
        gini: parseInt(document.getElementById('gini')?.value || 50),
        pobreza: parseInt(document.getElementById('pobreza')?.value || 50),
        infraestructura: parseInt(document.getElementById('infraestructura')?.value || 50),
        
        // Bienestar
        salud: parseInt(document.getElementById('salud')?.value || 50),
        educacion: parseInt(document.getElementById('educacion')?.value || 50),
        escolaridad: parseInt(document.getElementById('escolaridad')?.value || 50),
        cohesion_social: parseInt(document.getElementById('cohesion_social')?.value || 50),
        
        // Sostenibilidad
        ambiente: parseInt(document.getElementById('ambiente')?.value || 50),
        calidad_aire_agua: parseInt(document.getElementById('calidad_aire_agua')?.value || 50),
        resiliencia_fm: parseInt(document.getElementById('resiliencia_fm')?.value || 50),
        estabilidad_constitucional: parseInt(document.getElementById('estabilidad_constitucional')?.value || 50),
        
        // Participación
        participacion_ciudadana: parseInt(document.getElementById('participacion_ciudadana')?.value || 50),
        autonomia_local: parseInt(document.getElementById('autonomia_local')?.value || 50),
        confianza_interpersonal: parseInt(document.getElementById('confianza_interpersonal')?.value || 50),
        innovacion_politica: parseInt(document.getElementById('innovacion_politica')?.value || 50)
    };
    
    // Cálculo ponderado por categorías
    // VITALIDAD: Economía + Bienestar + Innovación
    const vitalidad = Math.round(
        (indicadores.crecimiento_pib * 0.15) +
        (indicadores.infraestructura * 0.10) +
        (indicadores.salud * 0.15) +
        (indicadores.educacion * 0.15) +
        (indicadores.escolaridad * 0.10) +
        (indicadores.cohesion_social * 0.10) +
        (indicadores.innovacion_politica * 0.15) +
        ((100 - indicadores.pobreza) * 0.10)
    );
    
    // ESTABILIDAD: Gobernanza + Sostenibilidad + Constitucional
    const estabilidad = Math.round(
        (indicadores.estabilidad_politica * 0.20) +
        (indicadores.corrupcion * 0.15) +
        (indicadores.efectividad_gubernamental * 0.15) +
        (indicadores.confianza_instituciones * 0.10) +
        (indicadores.estabilidad_constitucional * 0.15) +
        (indicadores.resiliencia_fm * 0.15) +
        ((100 - indicadores.inflacion) * 0.10)
    );
    
    // ADAPTABILIDAD: Resiliencia + Participación + Flexibilidad
    const adaptabilidad = Math.round(
        (indicadores.resiliencia_fm * 0.20) +
        (indicadores.participacion_ciudadana * 0.15) +
        (indicadores.autonomia_local * 0.15) +
        (indicadores.innovacion_politica * 0.15) +
        (indicadores.libertad_prensa * 0.10) +
        (indicadores.confianza_interpersonal * 0.10) +
        ((100 - indicadores.gini) * 0.10) +
        (indicadores.ambiente * 0.05)
    );
    
    return { vitalidad, estabilidad, adaptabilidad };
}

function actualizarIndicadoresAvanzados() {
    const resultados = calcularIndicadoresAvanzados();
    
    document.getElementById('indicador-vitalidad-avanzado').textContent = resultados.vitalidad;
    document.getElementById('indicador-estabilidad-avanzado').textContent = resultados.estabilidad;
    document.getElementById('indicador-adaptabilidad-avanzado').textContent = resultados.adaptabilidad;
    
    // Determinar estado general
    const promedio = Math.round((resultados.vitalidad + resultados.estabilidad + resultados.adaptabilidad) / 3);
    let estadoTexto = '';
    let estadoColor = '';
    
    if (promedio >= 80) {
        estadoTexto = '🟢 Excelente - Sistema político muy saludable';
        estadoColor = '#27ae60';
    } else if (promedio >= 65) {
        estadoTexto = '🟡 Bueno - Sistema político saludable con áreas de mejora';
        estadoColor = '#f39c12';
    } else if (promedio >= 50) {
        estadoTexto = '🟠 Regular - Sistema político con desafíos significativos';
        estadoColor = '#e67e22';
    } else {
        estadoTexto = '🔴 Crítico - Sistema político con problemas graves';
        estadoColor = '#e74c3c';
    }
    
    const estadoElement = document.getElementById('estado-general');
    if (estadoElement) {
        estadoElement.textContent = estadoTexto;
        estadoElement.style.color = estadoColor;
        estadoElement.style.fontWeight = 'bold';
    }
}

function actualizarValorIndicador(id) {
    const input = document.getElementById(id);
    const valorSpan = document.getElementById('val-' + id);
    if (input && valorSpan) {
        valorSpan.textContent = input.value;
    }
}

function inicializarSimuladorAvanzado() {
    // Lista de todos los indicadores avanzados
    const indicadoresIds = [
        'estabilidad_politica', 'corrupcion', 'efectividad_gubernamental', 
        'libertad_prensa', 'confianza_instituciones',
        'crecimiento_pib', 'inflacion', 'gini', 'pobreza', 'infraestructura',
        'salud', 'educacion', 'escolaridad', 'cohesion_social',
        'ambiente', 'calidad_aire_agua', 'resiliencia_fm', 'estabilidad_constitucional',
        'participacion_ciudadana', 'autonomia_local', 'confianza_interpersonal', 'innovacion_politica'
    ];
    
    // Agregar event listeners a todos los rangos
    indicadoresIds.forEach(id => {
        const elemento = document.getElementById(id);
        if (elemento) {
            elemento.addEventListener('input', function() {
                actualizarValorIndicador(id);
                actualizarIndicadoresAvanzados();
            });
            // Inicializar valor
            actualizarValorIndicador(id);
        }
    });
    
    // Calcular valores iniciales
    actualizarIndicadoresAvanzados();
}

// ===================================
// SISTEMA DE PESTAÑAS
// ===================================

function inicializarPestanas() {
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetTab = this.getAttribute('data-tab');
            
            // Remover clase active de todos los botones y contenidos
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            // Agregar clase active al botón clickeado y su contenido
            this.classList.add('active');
            const targetContent = document.getElementById('tab-' + targetTab);
            if (targetContent) {
                targetContent.classList.add('active');
            }
        });
    });
}

// ===================================
// TOGGLE SIMULADOR AVANZADO
// ===================================

function inicializarToggleAvanzado() {
    const btnToggle = document.getElementById('toggle-simulador-avanzado');
    const btnVolver = document.getElementById('volver-basico');
    const simuladorAvanzado = document.getElementById('simulador-avanzado');
    const simuladorBasico = document.getElementById('actividad-componentes');
    
    if (btnToggle && simuladorAvanzado) {
        btnToggle.addEventListener('click', function() {
            simuladorAvanzado.classList.remove('oculto');
            simuladorBasico.style.display = 'none';
            
            // Scroll suave al simulador avanzado
            simuladorAvanzado.scrollIntoView({ behavior: 'smooth', block: 'start' });
            
            // Inicializar cálculos
            actualizarIndicadoresAvanzados();
        });
    }
    
    if (btnVolver && simuladorAvanzado && simuladorBasico) {
        btnVolver.addEventListener('click', function() {
            simuladorAvanzado.classList.add('oculto');
            simuladorBasico.style.display = 'block';
            
            // Scroll suave al simulador básico
            simuladorBasico.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    }
}

// ===================================
// SISTEMA DE TOOLTIPS / MODALS
// ===================================

function inicializarTooltips() {
    const modal = document.getElementById('modal-info');
    const closeBtn = document.querySelector('.close-modal');
    const infoIcons = document.querySelectorAll('.info-icon');
    
    infoIcons.forEach(icon => {
        icon.addEventListener('click', function() {
            const indicadorKey = this.getAttribute('data-indicador');
            const info = explicacionesIndicadores[indicadorKey];
            
            if (info) {
                document.getElementById('modal-titulo').textContent = info.nombre;
                document.getElementById('modal-descripcion').textContent = info.explicacion;
                document.getElementById('modal-sistema').textContent = info.sistema_biologico;
                document.getElementById('modal-fuente').textContent = info.fuente;
                document.getElementById('modal-rango').textContent = info.rango;
                
                modal.style.display = 'block';
            }
        });
    });
    
    if (closeBtn) {
        closeBtn.addEventListener('click', function() {
            modal.style.display = 'none';
        });
    }
    
    // Cerrar modal al hacer clic fuera
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
}

// ===================================
// JUEGO DE ANALOGÍAS
// ===================================

function verificarAnalogias() {
    const respuestas = {
        nervioso: 'Gobierno y Comunicación',
        inmunologico: 'Defensa Nacional',
        digestivo: 'Producción y Abastecimiento'
    };
    
    const selNervioso = document.getElementById('select-nervioso').value;
    if (selNervioso === respuestas.nervioso) {
        document.getElementById('feedback-nervioso').textContent = '✓ Correcto. El sistema nervioso coordina y comunica, como el gobierno.';
        document.getElementById('feedback-nervioso').style.color = 'green';
    } else if (selNervioso === '') {
        document.getElementById('feedback-nervioso').textContent = '';
    } else {
        document.getElementById('feedback-nervioso').textContent = '✗ Incorrecto.';
        document.getElementById('feedback-nervioso').style.color = 'red';
    }
    
    const selInmunologico = document.getElementById('select-inmunologico').value;
    if (selInmunologico === respuestas.inmunologico) {
        document.getElementById('feedback-inmunologico').textContent = '✓ Correcto. El sistema inmunológico defiende, como la defensa nacional.';
        document.getElementById('feedback-inmunologico').style.color = 'green';
    } else if (selInmunologico === '') {
        document.getElementById('feedback-inmunologico').textContent = '';
    } else {
        document.getElementById('feedback-inmunologico').textContent = '✗ Incorrecto.';
        document.getElementById('feedback-inmunologico').style.color = 'red';
    }
    
    const selDigestivo = document.getElementById('select-digestivo').value;
    if (selDigestivo === respuestas.digestivo) {
        document.getElementById('feedback-digestivo').textContent = '✓ Correcto. El sistema digestivo provee recursos, como la producción y abastecimiento.';
        document.getElementById('feedback-digestivo').style.color = 'green';
    } else if (selDigestivo === '') {
        document.getElementById('feedback-digestivo').textContent = '';
    } else {
        document.getElementById('feedback-digestivo').textContent = '✗ Incorrecto.';
        document.getElementById('feedback-digestivo').style.color = 'red';
    }
}

function limpiarAnalogias() {
    document.getElementById('select-nervioso').value = '';
    document.getElementById('select-inmunologico').value = '';
    document.getElementById('select-digestivo').value = '';
    document.getElementById('feedback-nervioso').textContent = '';
    document.getElementById('feedback-inmunologico').textContent = '';
    document.getElementById('feedback-digestivo').textContent = '';
}

function inicializarJuegoAnalogias() {
    const btnVerificar = document.getElementById('verificar-analogias');
    if (btnVerificar) {
        btnVerificar.addEventListener('click', verificarAnalogias);
    }
    
    const btnLimpiar = document.getElementById('limpiar-analogias');
    if (btnLimpiar) {
        btnLimpiar.addEventListener('click', limpiarAnalogias);
    }
}

// ===================================
// QUIZ DE CONCEPTOS CLAVE
// ===================================

function verificarQuizConceptos() {
    const respuestas = {
        emergencia: 'A',
        retroalimentacion: 'A',
        resiliencia: 'A'
    };
    
    const selEmergencia = document.getElementById('quiz-emergencia').value;
    if (selEmergencia === respuestas.emergencia) {
        document.getElementById('feedback-emergencia').textContent = '✓ Correcto. La emergencia es la aparición de comportamientos colectivos a partir de interacciones locales.';
        document.getElementById('feedback-emergencia').style.color = 'green';
    } else if (selEmergencia === '') {
        document.getElementById('feedback-emergencia').textContent = '';
    } else {
        document.getElementById('feedback-emergencia').textContent = '✗ Incorrecto.';
        document.getElementById('feedback-emergencia').style.color = 'red';
    }
    
    const selRetro = document.getElementById('quiz-retroalimentacion').value;
    if (selRetro === respuestas.retroalimentacion) {
        document.getElementById('feedback-retroalimentacion').textContent = '✓ Correcto. Es un mecanismo de ajuste de procesos mediante información de resultados.';
        document.getElementById('feedback-retroalimentacion').style.color = 'green';
    } else if (selRetro === '') {
        document.getElementById('feedback-retroalimentacion').textContent = '';
    } else {
        document.getElementById('feedback-retroalimentacion').textContent = '✗ Incorrecto.';
        document.getElementById('feedback-retroalimentacion').style.color = 'red';
    }
    
    const selResi = document.getElementById('quiz-resiliencia').value;
    if (selResi === respuestas.resiliencia) {
        document.getElementById('feedback-resiliencia').textContent = '✓ Correcto. Permite adaptarse y responder a cambios y crisis.';
        document.getElementById('feedback-resiliencia').style.color = 'green';
    } else if (selResi === '') {
        document.getElementById('feedback-resiliencia').textContent = '';
    } else {
        document.getElementById('feedback-resiliencia').textContent = '✗ Incorrecto.';
        document.getElementById('feedback-resiliencia').style.color = 'red';
    }
}

function limpiarQuizConceptos() {
    document.getElementById('quiz-emergencia').value = '';
    document.getElementById('quiz-retroalimentacion').value = '';
    document.getElementById('quiz-resiliencia').value = '';
    document.getElementById('feedback-emergencia').textContent = '';
    document.getElementById('feedback-retroalimentacion').textContent = '';
    document.getElementById('feedback-resiliencia').textContent = '';
}

function inicializarQuizConceptos() {
    const btnVerificar = document.getElementById('verificar-quiz-conceptos');
    if (btnVerificar) {
        btnVerificar.addEventListener('click', verificarQuizConceptos);
    }
    
    const btnLimpiar = document.getElementById('limpiar-quiz-conceptos');
    if (btnLimpiar) {
        btnLimpiar.addEventListener('click', limpiarQuizConceptos);
    }
}

// ===================================
// COMPARACIÓN DE PAÍSES
// ===================================

function compararPaises() {
    const pais1 = document.getElementById('pais1').value;
    const pais2 = document.getElementById('pais2').value;
    const resultado = document.getElementById('resultado-comparacion');
    
    if (!pais1 || !pais2) {
        resultado.innerHTML = '<span style="color:red;">Por favor, selecciona ambos países.</span>';
        return;
    }
    
    if (pais1 === pais2) {
        resultado.innerHTML = '<span style="color:red;">Selecciona dos países diferentes.</span>';
        return;
    }
    
    const ind1 = indicadoresPaises[pais1];
    const ind2 = indicadoresPaises[pais2];
    
    resultado.innerHTML = `
        <table style="width:100%;margin-top:1em;background:#f6f6fa;border-radius:8px;border-collapse:collapse;">
            <tr style="background:#3498db;color:white;">
                <th style="padding:10px;border:1px solid #ddd;">Indicador</th>
                <th style="padding:10px;border:1px solid #ddd;">${pais1}</th>
                <th style="padding:10px;border:1px solid #ddd;">${pais2}</th>
            </tr>
            <tr>
                <td style="padding:8px;border:1px solid #ddd;">Vitalidad</td>
                <td style="padding:8px;border:1px solid #ddd;">${ind1.vitalidad}</td>
                <td style="padding:8px;border:1px solid #ddd;">${ind2.vitalidad}</td>
            </tr>
            <tr>
                <td style="padding:8px;border:1px solid #ddd;">Estabilidad</td>
                <td style="padding:8px;border:1px solid #ddd;">${ind1.estabilidad}</td>
                <td style="padding:8px;border:1px solid #ddd;">${ind2.estabilidad}</td>
            </tr>
            <tr>
                <td style="padding:8px;border:1px solid #ddd;">Adaptabilidad</td>
                <td style="padding:8px;border:1px solid #ddd;">${ind1.adaptabilidad}</td>
                <td style="padding:8px;border:1px solid #ddd;">${ind2.adaptabilidad}</td>
            </tr>
        </table>
    `;
}

function limpiarComparacion() {
    document.getElementById('pais1').value = '';
    document.getElementById('pais2').value = '';
    document.getElementById('resultado-comparacion').innerHTML = '';
}

function inicializarComparacionPaises() {
    const btnComparar = document.getElementById('comparar-paises');
    if (btnComparar) {
        btnComparar.addEventListener('click', compararPaises);
    }
    
    const btnLimpiar = document.getElementById('limpiar-comparacion');
    if (btnLimpiar) {
        btnLimpiar.addEventListener('click', limpiarComparacion);
    }
}

// ===================================
// ESTUDIO DE CASO
// ===================================

function verificarCaso() {
    const decision = document.getElementById('caso-decision').value;
    const feedbackDiv = document.getElementById('feedback-caso');
    let feedback = '';
    
    if (decision === 'dialogo') {
        feedback = '✓ Muy bien. El diálogo y las reformas suelen mejorar la estabilidad y salud política, promoviendo cohesión social.';
        feedbackDiv.style.color = 'green';
    } else if (decision === 'represion') {
        feedback = '✗ La represión puede aumentar el conflicto y debilitar la estabilidad y salud política.';
        feedbackDiv.style.color = 'red';
    } else if (decision === 'inversion') {
        feedback = '✓ Correcto. Invertir en servicios y empleo puede fortalecer la resiliencia y estabilidad del sistema.';
        feedbackDiv.style.color = 'green';
    } else {
        feedback = 'Por favor, selecciona una acción.';
        feedbackDiv.style.color = 'gray';
    }
    
    feedbackDiv.textContent = feedback;
}

function limpiarCaso() {
    document.getElementById('caso-decision').value = '';
    document.getElementById('feedback-caso').textContent = '';
}

function inicializarCaso() {
    const btnVerificar = document.getElementById('verificar-caso');
    if (btnVerificar) {
        btnVerificar.addEventListener('click', verificarCaso);
    }
    
    const btnLimpiar = document.getElementById('limpiar-caso');
    if (btnLimpiar) {
        btnLimpiar.addEventListener('click', limpiarCaso);
    }
}

// ===================================
// PREGUNTA DE REFLEXIÓN
// ===================================

function verificarReflexion() {
    const respuesta = document.getElementById('respuesta-reflexion').value.toLowerCase();
    const feedbackDiv = document.getElementById('feedback-reflexion');
    let feedback = '';
    
    if (respuesta.trim() === '') {
        feedback = 'Por favor, escribe una respuesta antes de enviar.';
        feedbackDiv.style.color = 'gray';
    } else if (
        respuesta.includes('adaptación') || 
        respuesta.includes('adaptacion') ||
        respuesta.includes('dinámico') || 
        respuesta.includes('dinamico') ||
        respuesta.includes('complejidad') || 
        respuesta.includes('orgánico') || 
        respuesta.includes('organico') ||
        respuesta.includes('no lineal') || 
        respuesta.includes('autoorganización') ||
        respuesta.includes('autoorganizacion')
    ) {
        feedback = '✓ Muy bien. Has identificado aspectos clave: la política como sistema vivo, adaptativo y complejo.';
        feedbackDiv.style.color = 'green';
    } else {
        feedback = '✗ Intenta profundizar más en la idea de sistemas vivos, adaptativos y complejos.';
        feedbackDiv.style.color = 'orange';
    }
    
    feedbackDiv.textContent = feedback;
}

function limpiarReflexion() {
    document.getElementById('respuesta-reflexion').value = '';
    document.getElementById('feedback-reflexion').textContent = '';
}

function inicializarReflexion() {
    const btnVerificar = document.getElementById('verificar-reflexion');
    if (btnVerificar) {
        btnVerificar.addEventListener('click', verificarReflexion);
    }
    
    const btnLimpiar = document.getElementById('limpiar-reflexion');
    if (btnLimpiar) {
        btnLimpiar.addEventListener('click', limpiarReflexion);
    }
}

// ===================================
// CONCLUSIONES
// ===================================

function inicializarConclusiones() {
    const btnVerificarAuto = document.getElementById('verificar-autoevaluacion');
    const btnLimpiarAuto = document.getElementById('limpiar-autoevaluacion');
    const feedbackAuto = document.getElementById('feedback-autoevaluacion');
    
    if (btnVerificarAuto) {
        btnVerificarAuto.addEventListener('click', function() {
            const respuesta = document.getElementById('autoevaluacion-respuesta').value.trim();
            if (respuesta.length > 0) {
                feedbackAuto.textContent = '¡Gracias por tu reflexión!';
                feedbackAuto.style.color = '#2c3e50';
            } else {
                feedbackAuto.textContent = 'Por favor, escribe tu reflexión antes de enviar.';
                feedbackAuto.style.color = '#c0392b';
            }
        });
    }
    
    if (btnLimpiarAuto) {
        btnLimpiarAuto.addEventListener('click', function() {
            document.getElementById('autoevaluacion-respuesta').value = '';
            feedbackAuto.textContent = '';
        });
    }
    
    const btnEnviarForo = document.getElementById('enviar-foro');
    const btnLimpiarForo = document.getElementById('limpiar-foro');
    const foroIdea = document.getElementById('foro-idea');
    const foroLista = document.getElementById('foro-lista');
    
    if (btnEnviarForo && foroIdea && foroLista) {
        btnEnviarForo.addEventListener('click', function() {
            const idea = foroIdea.value.trim();
            if (idea.length > 0) {
                const div = document.createElement('div');
                div.className = 'foro-item';
                div.style.padding = '10px';
                div.style.margin = '5px 0';
                div.style.background = '#ecf0f1';
                div.style.borderRadius = '5px';
                div.textContent = idea;
                foroLista.appendChild(div);
                foroIdea.value = '';
            }
        });
    }
    
    if (btnLimpiarForo && foroIdea && foroLista) {
        btnLimpiarForo.addEventListener('click', function() {
            foroIdea.value = '';
            foroLista.innerHTML = '';
        });
    }
}

// ===================================
// INICIALIZACIÓN GLOBAL
// ===================================

document.addEventListener('DOMContentLoaded', function() {
    console.log('Inicializando aplicación...');
    
    // Inicializar todas las actividades
    inicializarSimulador();
    inicializarSimuladorAvanzado();
    inicializarPestanas();
    inicializarToggleAvanzado();
    inicializarTooltips();
    inicializarJuegoAnalogias();
    inicializarQuizConceptos();
    inicializarComparacionPaises();
    inicializarCaso();
    inicializarReflexion();
    inicializarConclusiones();
    
    console.log('Aplicación inicializada correctamente.');
});