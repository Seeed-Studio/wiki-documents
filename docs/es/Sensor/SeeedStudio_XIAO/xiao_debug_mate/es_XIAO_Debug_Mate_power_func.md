---
description: Crea una página de documentación con contenido enriquecido.
title: Medidor de Potencia
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /es/xiao_debug_mate_power
sidebar_position: 4
last_update:
  date: 10/22/2025
  author: Citric
---

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/32.jpg" style={{width:800, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="/es/xiao_debug_mate_power" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
    </a>
</div>

## Introducción

La función de Medidor de Potencia del XIAO Debug Mate transforma tu dispositivo en una herramienta versátil y de alta precisión para medir voltaje, corriente y consumo de energía. Con una interfaz gráfica intuitiva y actualizaciones de datos en tiempo real, puedes monitorear fácilmente el consumo de energía de tu placa XIAO u otro hardware conectado durante todas las etapas de desarrollo. Ya sea que estés optimizando para operación de ultra bajo consumo o verificando la estabilidad del sistema bajo carga, el Medidor de Potencia proporciona información clara y precisa al alcance de tus dedos. Esta sección te guiará a través de sus capacidades clave y cómo obtener el máximo provecho de esta función.

## Consejos para Usar el Medidor de Potencia

Para asegurar mediciones precisas y proteger tu dispositivo, por favor revisa estos consejos importantes antes de usar la función de análisis de potencia.

### Voltaje de Entrada Seguro

El XIAO Debug Mate en sí debe ser alimentado por una fuente USB estándar de **5V/1A**. Usar cargadores con potencia insuficiente, excesiva o no compatibles puede resultar en operación inestable o riesgo de dañar el dispositivo.

<svg viewBox="0 0 800 520" width="100%" height="auto" style={{ backgroundColor: '#ffffff', borderRadius: '8px', padding: '10px', fontFamily: 'sans-serif' }}>
  <defs>
    <marker id="arrowGreen" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
      <path d="M0,0 L0,6 L9,3 z" fill="#2f9e44" />
    </marker>
    <marker id="arrowRed" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
      <path d="M0,0 L0,6 L9,3 z" fill="#e03131" />
    </marker>
    <filter id="dropShadow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#000000" floodOpacity="0.15" />
    </filter>
  </defs>

  {/* Title */}
  <text x="400" y="40" textAnchor="middle" fontSize="22" fontWeight="bold" fill="#333333">Requisitos de Fuente de Alimentación</text>

  {/* Central Device: XIAO Debug Mate - Moved down to align with taller boxes */}
  <g transform="translate(300, 175)">
    <rect x="0" y="0" width="200" height="140" rx="10" fill="#343a40" filter="url(#dropShadow)" />
    <rect x="10" y="10" width="180" height="120" rx="5" fill="#495057" />
    <text x="100" y="50" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#ffffff">XIAO Debug Mate</text>
    <text x="100" y="75" textAnchor="middle" fontSize="12" fill="#adb5bd">Entrada USB-C</text>

    {/* Port Graphic */}
    <rect x="70" y="90" width="60" height="20" rx="4" fill="#212529" stroke="#868e96" strokeWidth="2" />
    <line x1="80" y1="100" x2="120" y2="100" stroke="#868e96" strokeWidth="2" />
  </g>

  {/* Left Side: The CORRECT Way - Increased Height */}
  <g transform="translate(50, 120)">
    {/* Height increased from 200 to 250 */}
    <rect x="0" y="0" width="200" height="250" rx="8" fill="#ebfbee" stroke="#2f9e44" strokeWidth="2" strokeDasharray="5,5" />

    {/* Header */}
    <rect x="0" y="0" width="200" height="40" rx="8" fill="#2f9e44" />
    <rect x="0" y="20" width="200" height="20" fill="#2f9e44" />
    <text x="100" y="28" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#ffffff">RECOMENDADO</text>

    {/* Icon */}
    <circle cx="100" cy="90" r="25" fill="#ffffff" stroke="#2f9e44" strokeWidth="2" />
    <path d="M90 90 L100 90 L100 80 M100 90 L110 90" stroke="#2f9e44" strokeWidth="3" strokeLinecap="round" />

    <text x="100" y="145" textAnchor="middle" fontSize="24" fontWeight="bold" fill="#2b8a3e">5V / 1A</text>
    <text x="100" y="170" textAnchor="middle" fontSize="14" fill="#2b8a3e">Fuente Estándar</text>

    {/* Result Tag - Moved down */}
    <g transform="translate(40, 210)">
      <rect x="0" y="0" width="120" height="24" rx="12" fill="#40c057" />
      <text x="60" y="17" textAnchor="middle" fontSize="12" fontWeight="bold" fill="white">Operación Estable</text>
    </g>
  </g>

  {/* Right Side: The WRONG Way - Increased Height to fix overflow */}
  <g transform="translate(550, 120)">
    {/* Height increased from 200 to 250 */}
    <rect x="0" y="0" width="200" height="250" rx="8" fill="#fff5f5" stroke="#e03131" strokeWidth="2" strokeDasharray="5,5" />

    {/* Header */}
    <rect x="0" y="0" width="200" height="40" rx="8" fill="#e03131" />
    <rect x="0" y="20" width="200" height="20" fill="#e03131" />
    <text x="100" y="28" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#ffffff">EVITAR</text>

    {/* Warning Icons */}
    <circle cx="100" cy="90" r="25" fill="#ffffff" stroke="#e03131" strokeWidth="2" />
    <text x="100" y="98" textAnchor="middle" fontSize="24" fontWeight="bold" fill="#e03131">!</text>

    {/* Bad Specs - Spaced out vertically */}
    <text x="100" y="140" textAnchor="middle" fontSize="14" fill="#c92a2a" fontWeight="bold">Exceso de potencia (&gt;5V)</text>
    <text x="100" y="165" textAnchor="middle" fontSize="14" fill="#c92a2a" fontWeight="bold">Potencia insuficiente</text>
    <text x="100" y="190" textAnchor="middle" fontSize="14" fill="#c92a2a" fontWeight="bold">No compatible</text>

    {/* Result Tag - Moved down */}
    <g transform="translate(40, 215)">
      <rect x="0" y="0" width="120" height="24" rx="12" fill="#fa5252" />
      <text x="60" y="17" textAnchor="middle" fontSize="11" fontWeight="bold" fill="white">Riesgo de Daño</text>
    </g>
  </g>

  {/* Connecting Arrows - Adjusted Y to new center (245) */}
  {/* Green Arrow */}
  <path d="M250 245 L290 245" stroke="#2f9e44" strokeWidth="4" markerEnd="url(#arrowGreen)" />

  {/* Red Arrow with X */}
  <path d="M550 245 L510 245" stroke="#e03131" strokeWidth="4" markerEnd="url(#arrowRed)" />
  <line x1="525" y1="235" x2="535" y2="255" stroke="#e03131" strokeWidth="3" />
  <line x1="535" y1="235" x2="525" y2="255" stroke="#e03131" strokeWidth="3" />

  {/* Bottom Note - Widened Box to fix overflow */}
  <g transform="translate(100, 430)">
    {/* Width increased from 400 to 600 */}
    <rect x="0" y="0" width="600" height="50" rx="4" fill="#f8f9fa" stroke="#dee2e6" strokeWidth="1" />
    <circle cx="30" cy="25" r="10" fill="#1c7ed6" />
    <text x="30" y="31" textAnchor="middle" fontSize="14" fontWeight="bold" fill="white">i</text>
    <text x="50" y="20" fontSize="12" fill="#495057" fontWeight="bold">Consejo:</text>
    {/* Text alignment adjusted for wider box */}
    <text x="50" y="35" fontSize="12" fill="#495057">Usa un puerto USB estándar de PC o un adaptador de pared de alta calidad de 5V/1A.</text>
  </g>

</svg>

### Rango de Medición Seguro

El medidor de potencia es un instrumento de alta precisión diseñado para medir corriente desde **1µA hasta 1A**. Mantiene una precisión de **±1%** en el rango de 10µA a 1A. Exceder el límite de 1A puede dañar el circuito de medición.

### Discrepancia en el Consumo de Energía: Medidor vs. Batería

Cuando mides el consumo de energía de una placa XIAO con el Debug Mate, la medición se toma desde la línea de alimentación de 5V. Esta energía luego pasa a través del regulador de voltaje interno del XIAO (LDO) para producir 3.3V para el chip. Este regulador en sí consume una pequeña cantidad de energía.

<svg viewBox="0 0 800 450" width="100%" height="auto" style={{ backgroundColor: '#ffffff', borderRadius: '8px', padding: '10px', fontFamily: 'sans-serif' }}>
  <defs>
    <marker id="arrowFlow" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
      <path d="M0,0 L0,6 L9,3 z" fill="#495057" />
    </marker>
    <filter id="shadow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#000000" floodOpacity="0.15" />
    </filter>
  </defs>

  {/* Title */}
  <text x="400" y="40" textAnchor="middle" fontSize="22" fontWeight="bold" fill="#333333">Lógica de Medición de Potencia: Pre-Regulador</text>

  {/* --- SECTION 1: The Measurement Device (Debug Mate) --- */}
  {/* Moved Left to x=20 to create space */}
  <g transform="translate(20, 100)">
    {/* Device Body */}
    <rect x="0" y="0" width="160" height="200" rx="10" fill="#343a40" filter="url(#shadow)" />
    <text x="80" y="30" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#ffffff">Debug Mate</text>

    {/* Screen */}
    <rect x="20" y="50" width="120" height="60" rx="4" fill="#212529" stroke="#495057" strokeWidth="2" />
    <text x="80" y="80" textAnchor="middle" fontSize="20" fontWeight="bold" fill="#40c057" fontFamily="monospace">50.0 mA</text>
    <text x="80" y="100" textAnchor="middle" fontSize="10" fill="#868e96">VALOR MOSTRADO</text>

    {/* Probe Line Out - Extended length to cross the gap */}
    <line x1="160" y1="140" x2="280" y2="140" stroke="#fa5252" strokeWidth="6" />

    {/* 5V Label - Centered in the new gap */}
    <text x="220" y="130" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#fa5252">Línea 5V</text>

    {/* Measurement Point Indicator - Centered in the new gap */}
    <circle cx="220" cy="140" r="6" fill="#fa5252" stroke="#fff" strokeWidth="2" />
    <text x="220" y="165" textAnchor="middle" fontSize="11" fill="#fa5252" fontWeight="bold">Punto de Medición</text>
  </g>

  {/* --- SECTION 2: The XIAO Board --- */}
  {/* Moved Right to x=300 to fix overlap */}
  <g transform="translate(300, 80)">
    {/* PCB Outline */}
    <rect x="0" y="0" width="480" height="240" rx="15" fill="#ebfbee" stroke="#2f9e44" strokeWidth="3" />
    <text x="20" y="30" fontSize="16" fontWeight="bold" fill="#2b8a3e">Placa XIAO</text>

    {/* Component: LDO Regulator */}
    <g transform="translate(50, 90)">
      <rect x="0" y="0" width="100" height="100" rx="4" fill="#e9ecef" stroke="#adb5bd" strokeWidth="2" />
      <text x="50" y="30" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#495057">LDO</text>
      <text x="50" y="50" textAnchor="middle" fontSize="10" fill="#868e96">Regulador de Voltaje</text>

      {/* Heat/Loss visualization */}
      <path d="M30 70 Q40 60 50 70 T70 70" stroke="#fd7e14" strokeWidth="2" fill="none" />
      <path d="M30 80 Q40 70 50 80 T70 80" stroke="#fd7e14" strokeWidth="2" fill="none" />
      <text x="50" y="120" textAnchor="middle" fontSize="11" fill="#fd7e14" fontWeight="bold">Autoconsumo</text>
      <text x="50" y="135" textAnchor="middle" fontSize="10" fill="#fd7e14">(~5mA de Pérdida)</text>
    </g>

    {/* Component: MCU (The Chip) */}
    <g transform="translate(280, 60)">
      <rect x="0" y="0" width="140" height="140" rx="8" fill="#343a40" filter="url(#shadow)" />
      <rect x="10" y="10" width="120" height="120" rx="4" fill="#212529" />
      <text x="70" y="70" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#ced4da">MCU / Chip</text>
      <text x="70" y="90" textAnchor="middle" fontSize="12" fill="#adb5bd">Carga Real</text>
      <text x="70" y="110" textAnchor="middle" fontSize="14" fill="#40c057" fontWeight="bold">~45 mA</text>
    </g>

    {/* Internal Connections */}
    {/* 5V Input to LDO - Dashed line inside board */}
    <line x1="0" y1="140" x2="50" y2="140" stroke="#fa5252" strokeWidth="4" strokeDasharray="4,4" opacity="0.6" />

    {/* 3.3V LDO to MCU */}
    <line x1="150" y1="140" x2="280" y2="140" stroke="#fab005" strokeWidth="6" markerEnd="url(#arrowFlow)" />
    {/* Moved text up slightly to avoid overlap with line */}
    <text x="215" y="125" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#fab005">Línea 3.3V</text>
  </g>

  {/* --- SECTION 3: The Equation / Explanation --- */}
  <g transform="translate(100, 360)">
    <rect x="0" y="0" width="600" height="70" rx="8" fill="#f1f3f5" stroke="#dee2e6" strokeWidth="1" />

    {/* Equation Parts */}
    <text x="300" y="25" textAnchor="middle" fontSize="14" fill="#495057" fontWeight="bold">¿Por qué la lectura es más alta?</text>

    <g transform="translate(60, 45)">
      <text x="0" y="0" fontSize="16" fontWeight="bold" fill="#343a40">Valor Mostrado</text>
      <text x="140" y="0" fontSize="16" fontWeight="bold" fill="#868e96">=</text>
      <text x="170" y="0" fontSize="16" fontWeight="bold" fill="#2b8a3e">Consumo del Chip</text>
      <text x="330" y="0" fontSize="16" fontWeight="bold" fill="#868e96">+</text>
      <text x="360" y="0" fontSize="16" fontWeight="bold" fill="#fd7e14">Sobrecarga del Regulador</text>
    </g>
  </g>

</svg>

Por lo tanto, el valor de potencia mostrado en el Debug Mate será ligeramente **mayor** que la potencia real consumida por el XIAO si fuera alimentado directamente por una batería de 3.3V. Este es un comportamiento normal y esperado para cualquier medición tomada "pre-regulador".

### Calibración y Verificación

Cada XIAO Debug Mate es calibrado individualmente para voltaje y corriente en fábrica. Estos datos de calibración se almacenan en una sección protegida contra escritura de la memoria (EEPROM) y no se ven afectados por las actualizaciones de firmware.

:::danger
No intentes borrar o alterar manualmente estos datos de calibración. Hacerlo destruirá la calibración de fábrica y puede deshabilitar permanentemente la funcionalidad de medición de potencia.
:::

## Introducción

Para acceder al medidor de potencia, navega al **icono del Medidor de Potencia** (abajo a la derecha) en el menú principal y **presiona el botón**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/33.jpg" style={{width:600, height:'auto'}}/></div>

### Introducción: Entendiendo las Tres Interfaces del Medidor de Potencia

La función del Medidor de Potencia proporciona tres interfaces de usuario (UI) distintas, cada una adaptada para una etapa específica del proceso de desarrollo. Puedes cambiar instantáneamente entre estas vistas para obtener los datos que necesitas, ya sea una instantánea de alta precisión, una lectura de bajo consumo o un análisis a largo plazo.

**Navegación:**
*   **Cambiar UIs:** Simplemente **gira la rueda de desplazamiento** para alternar entre las tres pantallas del medidor de potencia. No hay cursor; toda la página cambia.
*   **Reiniciar Datos:** Las estadísticas en UI 3 se borran solo cuando **mantienes presionado el botón** para regresar al menú principal.

#### UI 1: Panel de Alta Precisión

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/10.jpg" style={{width:600, height:'auto'}}/></div>

Esta es la vista predeterminada, diseñada para retroalimentación inmediata de alta resolución.

*   **Lo que Muestra:**
    *   `U`: Voltaje Instantáneo (V) hasta 4 decimales.
    *   `I`: Corriente Instantánea (A) hasta 4 decimales.
    *   `P`: Potencia Instantánea (W) hasta 4 decimales.

*   **Propósito y Caso de Uso:**
    Esta UI es tu opción principal para **depuración en tiempo real y verificaciones básicas de cordura**. Su alta precisión te permite ver incluso pequeñas fluctuaciones en el consumo de potencia. Usa esta pantalla para verificar rápidamente:
    *   Si el dispositivo está consumiendo la cantidad esperada de corriente cuando está inactivo.
    *   El impacto inmediato de potencia al encender un periférico (como una pantalla o sensor).
    *   La estabilidad de tu fuente de alimentación de 5V.


#### UI 2: Vista Multi-Unidad para Bajo Consumo

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/11.jpg" style={{width:600, height:'auto'}}/></div>

Esta vista está optimizada para la observación intuitiva de proyectos de bajo consumo.

*   **Lo que Muestra:**
    *   `U`: Voltaje Instantáneo (V).
    *   `I`: Corriente Instantánea, escalada automáticamente y mostrada en **Amperios (A)**, **miliamperios (mA)** y **microamperios (µA)**.
    *   `P`: Potencia Instantánea, escalada automáticamente y mostrada en **Vatios (W)** y **milivatios (mW)**.

*   **Propósito y Caso de Uso:**
    Al desarrollar dispositivos alimentados por batería o energéticamente eficientes, la corriente puede caer al rango de microamperios. Esta UI **elimina la necesidad de conversión manual de unidades**, permitiéndote entender instantáneamente la magnitud del consumo de potencia de tu dispositivo. Es perfecta para:
    *   Verificar que tu dispositivo ha entrado exitosamente en modo de sueño profundo (la corriente debería estar en el rango de µA).
    *   Comparar el consumo de potencia de diferentes optimizaciones de código sin tener que calcular mentalmente las unidades.

#### UI 3: Análisis Estadístico y Estimación de Batería

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/12.jpg" style={{width:600, height:'auto'}}/></div>

Esta vista está diseñada para pruebas a largo plazo y validación del producto final.

*   **Lo que Muestra:**
    *   `Min/Max`: La **Corriente (A)** y **Potencia (W)** mínima y máxima registradas durante la sesión.
    *   `Total`: La **Energía (Wh)** y **Carga (Ah)** acumuladas.
    *   `Time`: El tiempo transcurrido desde que comenzó la sesión de medición.

*   **Operación:**
    El temporizador y la acumulación de datos **inician automáticamente** cuando entras por primera vez a esta pantalla. Cambiar a UI 1 o UI 2 **no** reiniciará los datos, permitiéndote verificar valores en tiempo real mientras una prueba a largo plazo está ejecutándose. Los datos solo se borran cuando sales al menú principal.

*   **Propósito y Caso de Uso:**
    Esta UI es esencial para **validación pre-despliegue**. Antes de comprometerte con una batería, puedes simular la carga de trabajo del dispositivo y usar esta pantalla para:
    *   Identificar la corriente pico (`Max A`) para asegurar que tu batería y circuitería de potencia puedan manejar la carga.
    *   Usar la carga total consumida (`Total Ah`) para estimar con precisión la vida útil de la batería que puedes esperar de una batería de capacidad específica (mAh).

#### **Nota Importante sobre la Estimación de Vida Útil de la Batería**

Ten en cuenta un detalle crítico al usar UI 3 para cálculos de batería:

El XIAO Debug Mate mide la potencia consumida desde la **entrada de alimentación de 5V** hacia el XIAO. Esta alimentación de 5V se convierte luego a 3.3V por el IC de gestión de potencia integrado del XIAO (PMIC/LDO). Este proceso de conversión no es 100% eficiente y el PMIC en sí consume una pequeña cantidad de potencia.

Cuando alimentas un XIAO directamente con una batería Li-Po, típicamente lo conectas a las almohadillas de batería de 3.3V en la parte posterior, evitando el circuito de conversión de 5V a 3.3V.

Por lo tanto, el consumo de potencia medido por el Debug Mate será **ligeramente mayor** que la potencia real consumida desde una batería de 3.3V. El valor que mides es una excelente y segura **estimación de límite superior** para tus cálculos de vida útil de la batería.

### Midiendo el Consumo de Potencia de un XIAO

Este es el caso de uso más directo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/connect_xiao.gif" style={{width:600, height:'auto'}}/></div>

1.  Simplemente conecta tu placa XIAO directamente en los conectores hembra en la parte frontal del XIAO Debug Mate.
2.  El Debug Mate alimentará automáticamente el XIAO y comenzará a medir su consumo total de potencia.

### Midiendo un XIAO y sus Periféricos

Puedes medir el consumo de potencia combinado de una placa XIAO y cualquier sensor o módulo conectado.

Conecta tu periférico (por ejemplo, un sensor) a los pines I/O en los conectores que rodean el socket del XIAO.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/35.jpg" style={{width:800, height:'auto'}}/></div>

:::danger CRÍTICO
1. Para ser incluido en la medición, el periférico **debe** ser alimentado desde un **pin de 5V** en el conector. La potencia consumida desde el pin de 3.3V es suministrada por el regulador interno del XIAO y **no** será medida por el Debug Mate.

2. **No** conectes el periférico al puerto Grove del Debug Mate para medición de potencia, ya que su línea de alimentación está separada del circuito de medición del XIAO.
:::

### Midiendo Otros Microcontroladores

El medidor de potencia no está limitado a la serie XIAO. Puedes medir cualquier placa de desarrollo que pueda ser alimentada por 5V.

1.  Usa cables DuPont para conectar tu placa objetivo a los **pines 5V y GND** en los conectores hembra del XIAO Debug Mate.
2.  Asegúrate de que todo tu sistema objetivo (la placa del microcontrolador y todos los periféricos que deseas medir) esté alimentado exclusivamente a través de esta conexión de 5V desde el Debug Mate.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/34.jpg" style={{width:800, height:'auto'}}/></div>

**Ejemplo: Midiendo un Seeeduino V4.2**

1.  Conecta el **pin 5V** del Seeeduino V4.2 al **pin 5V** en el header del Debug Mate.
2.  Conecta un **pin GND** del Seeeduino V4.2 a un **pin GND** en el header del Debug Mate.
3.  Enciende el Debug Mate. Ahora suministrará 5V a la placa Seeeduino y medirá su consumo total de corriente.

## Solución de Problemas

### P1: ¿El consumo de energía de la interfaz Grove también está incluido en las estadísticas?

**No** conectes el periférico al puerto Grove del Debug Mate para medición de energía, ya que su línea de alimentación está separada del circuito de medición XIAO.

<div class="table-center">
  <div class="button_tech_support_container">
  <a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
  <a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
  </div>

  <div class="button_tech_support_container">
  <a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
  <a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
  </div>
</div>
