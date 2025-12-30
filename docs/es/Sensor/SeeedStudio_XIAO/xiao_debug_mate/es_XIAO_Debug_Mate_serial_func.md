---
description: Esta página explica cómo usar la función de monitor UART del XIAO Debug Mate.
title: Monitor UART
image: https://files.seeedstudio.com/wiki/xiao_debug_mate/main_uart.webp
slug: /es/xiao_debug_mate_serial
sidebar_position: 3
last_update:
  date: 10/22/2025
  author: Citric
---

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/main_uart.jpg" style={{width:800, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-Debug-Mate-p-6588.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
    </a>
</div>

## Introducción

Bienvenido a la documentación del Monitor UART del XIAO Debug Mate.

Esta página proporciona una guía clara sobre cómo usar el Debug Mate para el monitoreo de datos serie. Encontrarás instrucciones paso a paso para la configuración del hardware, herramientas de software recomendadas y explicaciones de conceptos relevantes para ayudarte a aprovechar al máximo las funciones de monitoreo UART en escenarios de desarrollo y depuración.

## Conceptos a Entender Antes de Usar el Monitor Serie

Antes de profundizar, aclaremos dos conceptos fundamentales que son esenciales para trabajar con comunicación serie.

### Comunicación Serie

La comunicación serie es un método de envío de datos un bit a la vez, secuencialmente, a través de un solo canal de comunicación. Piénsalo como coches viajando por una carretera de un solo carril uno tras otro. En el mundo de los microcontroladores, esto se implementa más comúnmente usando un protocolo llamado **UART** (Transmisor-Receptor Asíncrono Universal). Es la forma principal en que los desarrolladores obtienen mensajes de depuración, lecturas de sensores y actualizaciones de estado de sus dispositivos.

### RX/TX

Estos son los dos pines que hacen posible la comunicación serie:

*   **TX (Transmit):** Este es el pin de "envío". El microcontrolador usa este pin para enviar datos.
*   **RX (Receive):** Este es el pin de "recepción". El microcontrolador usa este pin para escuchar datos entrantes.

<!-- <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/uart_communica_logic.gif" style={{width:800, height:'auto'}}/></div> -->

export const UartDiagram = () => (
  <div
    style={{
      fontFamily: "'Segoe UI', sans-serif",
      backgroundColor: "#f4f4f9",
      padding: "20px",
      borderRadius: "12px",
      boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
      maxWidth: "800px",
      margin: "20px auto",
      textAlign: "center"
    }}
  >
    <h3 style={{ color: "#333", marginBottom: "10px" }}>Lógica de Comunicación UART</h3>
    <div style={{ color: "#666", fontSize: "0.9em", marginBottom: "20px" }}>
      La Regla de Oro: <strong>TX</strong> (Transmitir) debe conectarse a <strong>RX</strong> (Recibir)
    </div>

    <svg viewBox="0 0 600 350" style={{ width: "100%", height: "auto", display: "block" }}>
      <defs>
        <marker id="arrowhead-blue" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
          <polygon points="0 0, 10 3.5, 0 7" fill="#3498db" />
        </marker>
        <marker id="arrowhead-orange" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
          <polygon points="0 0, 10 3.5, 0 7" fill="#e67e22" />
        </marker>
        <filter id="dropShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur in="SourceAlpha" stdDeviation="3" />
          <feOffset dx="2" dy="2" result="offsetblur" />
          <feComponentTransfer>
            <feFuncA type="linear" slope="0.3" />
          </feComponentTransfer>
          <feMerge>
            <feMergeNode />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#f0f0f0" strokeWidth="1" />
        </pattern>
      </defs>

      <rect width="100%" height="100%" fill="url(#grid)" />

      {/* Device A */}
      <g transform="translate(50, 50)">
        <rect x="0" y="0" width="120" height="200" rx="10" ry="10" fill="#ffffff" stroke="#333" strokeWidth="2" filter="url(#dropShadow)" />
        <text x="60" y="30" textAnchor="middle" fontWeight="bold" fill="#333">Dispositivo A</text>
        <text x="60" y="50" textAnchor="middle" fontSize="12" fill="#777">(MCU/PC)</text>

        {/* A Pins */}
        <g transform="translate(120, 80)">
          <circle cx="0" cy="0" r="6" fill="#333" />
          <text x="-15" y="4" textAnchor="end" fontSize="14" fontWeight="bold" fill="#333">TX</text>
          <text x="-15" y="18" textAnchor="end" fontSize="10" fill="#999">Transmitir</text>
        </g>
        <g transform="translate(120, 120)">
          <circle cx="0" cy="0" r="6" fill="#333" />
          <text x="-15" y="4" textAnchor="end" fontSize="14" fontWeight="bold" fill="#333">RX</text>
          <text x="-15" y="18" textAnchor="end" fontSize="10" fill="#999">Recibir</text>
        </g>
        <g transform="translate(120, 170)">
          <circle cx="0" cy="0" r="6" fill="#333" />
          <text x="-15" y="5" textAnchor="end" fontSize="14" fontWeight="bold" fill="#333">GND</text>
        </g>
      </g>

      {/* Device B */}
      <g transform="translate(430, 50)">
        <rect x="0" y="0" width="120" height="200" rx="10" ry="10" fill="#ffffff" stroke="#333" strokeWidth="2" filter="url(#dropShadow)" />
        <text x="60" y="30" textAnchor="middle" fontWeight="bold" fill="#333">Dispositivo B</text>
        <text x="60" y="50" textAnchor="middle" fontSize="12" fill="#777">(Sensor)</text>

        {/* B Pins */}
        <g transform="translate(0, 80)">
          <circle cx="0" cy="0" r="6" fill="#333" />
          <text x="15" y="4" textAnchor="start" fontSize="14" fontWeight="bold" fill="#333">TX</text>
          <text x="15" y="18" textAnchor="start" fontSize="10" fill="#999">Transmitir</text>
        </g>
        <g transform="translate(0, 120)">
          <circle cx="0" cy="0" r="6" fill="#333" />
          <text x="15" y="4" textAnchor="start" fontSize="14" fontWeight="bold" fill="#333">RX</text>
          <text x="15" y="18" textAnchor="start" fontSize="10" fill="#999">Recibir</text>
        </g>
        <g transform="translate(0, 170)">
          <circle cx="0" cy="0" r="6" fill="#333" />
          <text x="15" y="5" textAnchor="start" fontSize="14" fontWeight="bold" fill="#333">GND</text>
        </g>
      </g>

      {/* Connections */}
      <path id="lineAtoB" d="M 176 130 C 250 130, 350 170, 424 170" fill="none" stroke="#e67e22" strokeWidth="3" markerEnd="url(#arrowhead-orange)" />
      <path id="lineBtoA" d="M 424 130 C 350 130, 250 170, 176 170" fill="none" stroke="#3498db" strokeWidth="3" markerEnd="url(#arrowhead-blue)" />
      <path d="M 176 220 L 424 220" fill="none" stroke="#333" strokeWidth="3" strokeDasharray="5,5" />

      {/* Animated Packets */}
      <circle r="5" fill="#e67e22">
        <animateMotion repeatCount="indefinite" dur="1.5s" keyPoints="0;1" keyTimes="0;1">
          <mpath href="#lineAtoB" />
        </animateMotion>
      </circle>
      <circle r="5" fill="#3498db">
        <animateMotion repeatCount="indefinite" dur="1.5s" begin="0.75s" keyPoints="0;1" keyTimes="0;1">
          <mpath href="#lineBtoA" />
        </animateMotion>
      </circle>

      {/* Labels */}
      <text x="300" y="110" textAnchor="middle" fontSize="12" fill="#e67e22" fontWeight="bold">Flujo de Datos (TX &rarr; RX)</text>
      <text x="300" y="200" textAnchor="middle" fontSize="12" fill="#3498db" fontWeight="bold">Flujo de Datos (RX &larr; TX)</text>
      <text x="300" y="240" textAnchor="middle" fontSize="12" fill="#333">Tierra Común (GND)</text>
    </svg>

    <div style={{ display: "flex", justifyContent: "center", gap: "20px", marginTop: "15px", fontSize: "0.85em", color: "#555" }}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <div style={{ width: "10px", height: "10px", borderRadius: "50%", marginRight: "5px", background: "#e67e22" }}></div>
        <span>Naranja: A a B</span>
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <div style={{ width: "10px", height: "10px", borderRadius: "50%", marginRight: "5px", background: "#3498db" }}></div>
        <span>Azul: B a A</span>
      </div>
    </div>
  </div>
);

<UartDiagram />

La regla más importante a recordar es que debes **conectar de forma cruzada** estos pines entre dispositivos. El pin TX de un dispositivo debe conectarse al pin RX del otro, y viceversa. Es como una conversación: la boca de una persona (TX) habla al oído de la otra persona (RX).

## Primeros Pasos

El XIAO Debug Mate puede monitorear datos serie de dos maneras: directamente en su pantalla LCD integrada o pasando los datos a una computadora. Esta guía cubre ambas.

### Preparación del Software (para Monitoreo en PC)

Si eliges ver los datos serie en tu computadora, necesitarás una aplicación "terminal serie" o "monitor serie". El XIAO Debug Mate aparecerá como un puerto COM estándar en tu PC. Aquí tienes algunas opciones de software populares:

*   **Monitor Serie de PlatformIO:** Si estás usando VS Code con PlatformIO, simplemente puedes hacer clic en el botón "Serial Monitor" en la barra de estado.
*   **Monitor Serie del IDE de Arduino:** El monitor clásico y simple integrado en el IDE de Arduino.
*   **PuTTY:** Un emulador de terminal ligero y muy popular para Windows.
*   **CoolTerm:** Un terminal serie fácil de usar y rico en funciones para Windows, macOS y Linux.
*   **minicom / screen:** Herramientas potentes basadas en línea de comandos para usuarios de Linux y macOS.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/23.png" style={{width:1000, height:'auto'}}/></div>

### Preparación del Hardware

El XIAO Debug Mate ofrece tres formas flexibles de conectar tu dispositivo objetivo para el monitoreo serie.

#### Para Placas XIAO (Plug-and-Play)

Este es el método más fácil para monitorear una placa XIAO. El Debug Mate está diseñado para escuchar el puerto `Serial1` del XIAO (`D6` y `D7`) por defecto.

1.  Simplemente conecta tu placa XIAO directamente en los conectores hembra en la parte frontal del XIAO Debug Mate.
2.  La conexión se hace automáticamente. No se necesitan cables adicionales.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/connect_xiao.gif" style={{width:600, height:'auto'}}/></div>

#### Para Dispositivos Grove UART

El conector Grove dedicado permite una conexión limpia y segura a cualquier módulo Grove basado en UART.

1.  Toma tu dispositivo Grove UART (por ejemplo, un Grove GPS o Grove MP3 V4).
2.  Usa un cable Grove estándar para conectarlo al puerto Grove en el lado derecho del XIAO Debug Mate.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/24.jpg" style={{width:800, height:'auto'}}/></div>

#### Para Otros Dispositivos UART

:::danger Instrucciones de Conexión del Pin de Alimentación
Si necesitas conectar los pines de alimentación de 3.3V de las dos placas de desarrollo depende de si tu otro dispositivo está alimentado por el Debug Mate. Si el otro dispositivo está alimentado a través de su propia conexión USB independiente, no debes conectar los pines de 3.3V del dispositivo y el Debug Mate. Hacerlo puede dañar el dispositivo.
:::

Puedes monitorear cualquier dispositivo con pines TX y RX accesibles, como otra placa de desarrollo o un circuito personalizado.

Hay dos formas principales de hacer esto:

*   **Opción 1: Usando los Headers Principales:** Conecta los pines TX y RX de tu dispositivo a los headers hembra del XIAO Debug Mate usando cables DuPont. Recuerda hacer la conexión cruzada: TX del Dispositivo -> RX del Debug Mate (Pin D7 en el header) y RX del Dispositivo -> TX del Debug Mate (Pin D6 en el header).

*   **Opción 2: Usando el Puerto Grove:** Usa un **cable de conversión Grove a DuPont**. Conecta el conector Grove al Debug Mate y conecta los extremos DuPont individuales a los pines TX, RX, VCC y GND de tu dispositivo. Esta es a menudo una conexión más estable y confiable.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/25.jpg" style={{width:800, height:'auto'}}/></div>

El siguiente diagrama muestra las definiciones de pines para la interfaz Grove.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/39.png" style={{width:400, height:'auto'}}/></div>

:::caution Recordatorio Crucial
Siempre asegúrate de que el pin TX de tu dispositivo esté conectado a un pin receptor en el Debug Mate, y el pin RX del dispositivo esté conectado a un pin transmisor.
:::

Gracias a su diseño versátil, el XIAO Debug Mate te permite **conectar hasta dos dispositivos UART simultáneamente**: uno a través del socket XIAO y otro a través del puerto Grove. Luego puedes alternar entre monitorear cada dispositivo usando el menú en pantalla.

Esta poderosa característica **elimina el doloroso proceso de recablear repetidamente** al depurar sistemas complejos que involucran múltiples dispositivos serie.

## Operando el Monitor Serie

El XIAO Debug Mate cuenta con una herramienta serie versátil que puede usarse tanto para monitoreo en el dispositivo como basado en PC. Esta guía te llevará a través de su navegación y funciones.


<div class="table-center">
<iframe width="700" height="400" src="https://files.seeedstudio.com/wiki/xiao_debug_mate/uart.mp4?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

### Navegación Básica y Controles

Antes de explorar las características, es crucial entender cómo navegar la interfaz. Todas las operaciones se realizan usando la rueda de desplazamiento y el botón.

1.  **Entrando al Menú:** Desde la pantalla principal, usa la **rueda de desplazamiento** para resaltar el **ícono de Herramienta Serie** (abajo-izquierda). **Presiona el botón** para entrar al menú serie.

2.  **Controles Principales:**
    *   **Rueda de Desplazamiento:** Usada para mover un cursor o alternar entre modos principales.
    *   **Presión Corta del Botón:** Usada para confirmar una selección o activar el cursor de configuración.
    *   **Presión Larga del Botón:** Usada para salir de un menú o regresar.

Hay dos estados principales de interacción:

*   **Sin Cursor Activo:** En este estado, girar la rueda de desplazamiento alterna entre las funciones principales (por ejemplo, Modo Passthrough vs. Modo Monitor).
*   **Cursor Activo:** Después de una presión corta, aparece un cursor en la parte superior de la pantalla. Ahora, la rueda de desplazamiento mueve este cursor, permitiéndote seleccionar una configuración para cambiar.

#### Guía de Navegación Rápida

| Acción | Función |
| :--- | :--- |
| **Rueda de Desplazamiento (sin cursor)** | Alternar entre modos Passthrough y Monitor. |
| **Presión Corta del Botón** | Activar el cursor de selección para Fuente/Velocidad de Baudios. |
| **Presión Larga del Botón** | Regresar al menú anterior. |

### Los Dos Modos de Monitoreo

Con los controles básicos entendidos, ahora puedes alternar fácilmente entre los dos modos de operación principales. Simplemente gira la **rueda de desplazamiento** (mientras no hay cursor activo) para alternar entre ellos.

#### 1. Modo Passthrough (a PC)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/26.jpg" style={{width:600, height:'auto'}}/></div>

Este es el modo predeterminado, diseñado para reenviar todos los datos serie de la fuente seleccionada directamente a tu computadora para visualización en un terminal serie basado en PC.

*   **Pantalla en Dispositivo:** La pantalla muestra información de estado, no los datos en sí.
    *   **Arriba-Izquierda:** La fuente serie activa (por ejemplo, `XIAO`).
    *   **Arriba-Derecha:** La velocidad de baudios actual (por ejemplo, `9600`).
    *   **Centro:** Los indicadores `RX` y `TX` (desde la perspectiva del Debug Mate) se animarán para mostrar el flujo de datos hacia y desde la PC.

#### 2. Modo Monitor (en LCD)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/27.jpg" style={{width:600, height:'auto'}}/></div>

Este modo captura y muestra datos serie directamente en la pantalla LCD del Debug Mate. Los datos **no** se reenvían a la PC en este modo.

*   **Pantalla en Dispositivo:** La pantalla está dividida en dos ventanas para mostrar el tráfico de datos.
    *   `Ventana RX`: Muestra datos recibidos **desde el socket XIAO/Grove**.
    *   `Ventana TX`: Muestra datos recibidos **desde la PC**.

:::caution
El Debug Mate no puede mostrar datos de ambas fuentes simultáneamente. Debes seleccionar la fuente activa usando el menú de configuración.
:::

:::note
Las etiquetas **RX** y **TX** en este documento son siempre **desde la perspectiva del Debug Mate**:  
- **RX** indica datos **recibidos por el Debug Mate** (es decir, señales serie que llegan *al* Debug Mate).  
- **TX** indica datos **enviados por el Debug Mate** (es decir, señales siendo *transmitidas* por el Debug Mate).

Esto significa que **los datos enviados desde el XIAO o dispositivo Grove al Debug Mate aparecerán en la ventana RX**, sin importar qué puerto esté seleccionado como fuente. El contenido mostrado en la ventana RX depende de qué fuente (XIAO/Grove) hayas elegido en la configuración.

**TX** siempre se refiere a datos **originados desde la PC** — cuando escribes y envías mensajes desde un terminal serie en tu computadora, se transmiten a través del TX del Debug Mate a la fuente actualmente seleccionada (XIAO o Grove).  

- En ambos modos "Passthrough" y "Monitor", la PC puede enviar datos al Debug Mate a través de su puerto COM virtual, y el Debug Mate pasará estos mensajes al dispositivo serie objetivo que seleccionaste.  
- Lo que ves en la **ventana TX** es por tanto siempre lo que la PC está enviando a través del Debug Mate, independientemente del modo de monitoreo actual.
:::

### Configurando Fuente y Velocidad de Baudios

Para cambiar la fuente de datos o velocidad de baudios, primero debes activar el cursor de configuración.

1.  **Activar Cursor:** Desde cualquier modo, **presiona el botón una vez**. Un cursor aparecerá en la parte superior de la pantalla.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/28.jpg" style={{width:600, height:'auto'}}/></div>

2.  **Seleccionar Configuración:** Usa el **botón** para mover el cursor entre la fuente (`XIAO`/`Grove`) y la velocidad de baudios.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/29.jpg" style={{width:600, height:'auto'}}/></div>

:::tip
Después de cambiar fuentes, el contenido de la nueva fuente puede no aparecer inmediatamente. Esto es porque la impresora debe esperar a que los datos de la fuente de entrada anterior terminen de imprimirse antes de recibir información de la nueva
:::

3.  **Entrar al Menú:** Para la opción de velocidad de baudios, con la configuración deseada resaltada, **presiona el botón** para abrir su menú de configuración.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/30.jpg" style={{width:600, height:'auto'}}/></div>

4.  **Cambiar Valor:** Usa la **rueda de desplazamiento** para elegir tu velocidad de baudios, y **presiona el botón** para confirmar.

#### El Menú de Velocidad de Baudios e Indicador Visual

El menú de velocidad de baudios te permite seleccionar entre nueve velocidades comunes (4800 a 921600). Como un toque visual único, entrar a este menú también activa la **matriz de 36 LEDs en la parte posterior del dispositivo**, con el patrón de luz cambiando para reflejar la velocidad seleccionada.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/31.jpg" style={{width:800, height:'auto'}}/></div>

### Conceptos Clave y Limitaciones

*   **Un Depurador, No un Puente:** El Debug Mate es una herramienta de diagnóstico, no un puente de comunicación. No reenviará automáticamente datos del puerto XIAO al puerto Grove.
*   **Parámetros Serie Fijos:** Los parámetros serie principales (8-N-1) están fijos en el firmware. Los usuarios avanzados pueden modificar el código de código abierto para cambiarlos.
*   **Monitoreo de Fuente Única:** Solo puedes monitorear activamente una fuente (XIAO o Grove) a la vez.

## Agradecimientos Especiales

Agradecimientos especiales a **啊猫啊狗晒太阳 (Ah Mao Ah Gou Shai Tai Yang)** por la inspiración de diseño para la matriz LED. El diseño del indicador LED a bordo del Debug Mate es una referencia a su excelente proyecto de código abierto. El diseño original es muy creativo y práctico.

Si te gustaría ver el diseño original, puedes revisar el video de demostración y la página principal del autor a través de los enlaces a continuación.

*   [Video de Demostración del Diseño Original](https://www.bilibili.com/video/BV1Sc411273Y/)
*   [Página Principal de Bilibili del Autor](https://space.bilibili.com/1155738723)

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
