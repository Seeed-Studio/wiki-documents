---
description: Conecta tu Seeed Studio IoT Button V2 a Home Assistant usando la integración Seeed HA Discovery para un control perfecto del hogar inteligente.
title: Conectar IoT Button a Home Assistant vía Seeed HA Discovery
keywords:
  - IoT Button
  - Home Assistant
  - Seeed HA Discovery
  - ESP32-C6
  - Smart Home
image: https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/button_buzzer.webp
slug: /iot_button_v2_ha_discovery
last_update:
  date: 12/17/2025
  author: Citric
---

# Conectar IoT Button V2 a Home Assistant vía Seeed HA Discovery

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Button_HA_Discovery/1.png" style={{width:800, height:'auto'}}/></div>

El Seeed Studio IoT Button V2 es un interruptor inteligente versátil alimentado por ESP32-C6, que ofrece indicadores LED RGB personalizables, activadores de eventos programables y capacidades de carga USB-C. En este proyecto, te guiaremos a través de la conexión de tu IoT Button V2 a Home Assistant usando la integración Seeed HA Discovery - una solución que facilita la conexión de dispositivos ESP32 a Home Assistant con descubrimiento automático y comunicación en tiempo real vía WebSocket.

Comparado con usar ESPHome, esta solución está diseñada específicamente para casos de uso de botones compatibles con sueño profundo. ESPHome actualmente solo soporta sueño ligero para el IoT Button V2, lo que lleva a un mayor consumo de energía con el tiempo y requiere que despiertes el dispositivo con una pulsación dedicada antes de que la pulsación real del botón pueda activar entidades de manera confiable. Con este firmware y la integración Seeed HA Discovery, el botón puede entrar correctamente en sueño profundo y despertar directamente con la interacción del botón, evitando estas limitaciones y proporcionando una experiencia más receptiva y eficiente en energía.

## Introducción

Este proyecto te guiará a través de tres fases principales: flashear el firmware a tu IoT Button V2 usando un flasheador basado en web, instalar la integración Seeed HA Discovery vía HACS (Home Assistant Community Store), y descubrir tu botón en Home Assistant para automatización del hogar inteligente.

### Materiales Requeridos

<div class="table-center">
  <table align="center">
    <tr>
      <th>Seeed Studio IoT Button V2</th>
      <th>Home Assistant Green</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/button.jpg" style={{width:250, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/ha.png" style={{width:210, height:'auto'}}/></div></td>
    </tr>
    <tr>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-IoT-Button-p-6419.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
        </a>
      </div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Home-Assistant-Green-p-5792.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
        </a>
      </div></td>
    </tr>
  </table>
</div>

Home Assistant Green es la forma más fácil y centrada en la privacidad de automatizar tu hogar. Ofrece una configuración sin esfuerzo y te permite controlar todos los dispositivos inteligentes con un solo sistema, donde todos los datos se almacenan localmente por defecto. Esta placa se beneficia del próspero ecosistema de Home Assistant y será mejorada cada mes por código abierto.

Recomendamos usar Home Assistant Green como el host de Home Assistant para este tutorial, o puedes usar cualquier host de Home Assistant con un Supervisor.

:::tip instalar Home Assistant
También hemos escrito cómo instalar Home Assistant para algunos productos de Seeed Studio, por favor consúltalos.

- **[Introducción a Home Assistant en ODYSSEY-X86](https://wiki.seeedstudio.com/es/ODYSSEY-X86-Home-Assistant/)**
- **[Introducción a Home Assistant en reTerminal](https://wiki.seeedstudio.com/es/reTerminal_Home_Assistant/)**
- **[Introducción a Home Assistant en LinkStar H68K/reRouter CM4](https://wiki.seeedstudio.com/es/h68k-ha-esphome/)**

Si no estás usando un producto de Seeed Studio, también puedes verificar y aprender cómo instalar Home Assistant para otros productos en el sitio web oficial de Home Assistant.

- **[Instalación de Home Assistant](https://www.home-assistant.io/installation/)**
:::

### Preparación Preliminar

Antes de comenzar este proyecto, asegúrate de tener lo siguiente:

- Una instancia de Home Assistant en funcionamiento (Home Assistant OS, Container, o Core)
- HACS (Home Assistant Community Store) instalado en tu Home Assistant
- Una computadora con navegador Google Chrome o Microsoft Edge (requerido para flasheo de firmware basado en web)
- El nombre de tu red WiFi (SSID) y contraseña
- Tu IoT Button V2 y un cable USB-C para conexión

:::tip
Si aún no has instalado HACS, por favor sigue la [guía oficial de instalación de HACS](https://hacs.xyz/docs/setup/download/) para configurarlo primero. HACS es requerido para instalar la integración Seeed HA Discovery.
:::

## Flashear Firmware al IoT Button V2

[Seeed HA Discovery](https://github.com/limengdu/Seeed-Homeassistant-Discovery) es una solución completa para conectar fácilmente dispositivos ESP32/nRF52840 a Home Assistant, y el primer paso es flashear el firmware apropiado a tu IoT Button V2.

:::caution
El flasheador de firmware basado en web es **solo compatible con IoT Button V2**. Actualmente no es compatible para uso con IoT Button V1.
:::

### Paso 1. Acceder al Flasheador Web

Abre el navegador Google Chrome o Microsoft Edge y navega al Flasheador Web de Seeed HA Discovery:

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://limengdu.github.io/Seeed-Homeassistant-Discovery/flasher/" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Flashear Ahora 🖱️</font></span></strong>
    </a>
</div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Button_HA_Discovery/2.png" style={{width:1000, height:'auto'}}/></div>

:::note
Web Serial está disponible en [navegadores Google Chrome y Microsoft Edge (pero no en tu dispositivo iOS)](https://esphome.github.io/esp-web-tools/). Asegúrate de estar usando un navegador compatible en una computadora de escritorio o portátil.
:::

### Paso 2. Conectar tu IoT Button V2

:::caution
Si estás usando firmware Zigbee/ESPHome, por favor nota si el dispositivo entra automáticamente en modo de sueño. Si el dispositivo entra en modo de sueño, podrías no poder localizar su puerto serie. Asegúrate de que el LED azul del dispositivo esté encendido y permanezca despierto antes de flashear el firmware.
:::

**Paso 2.1.** Conecta tu IoT Button V2 a tu computadora usando un cable USB-C.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Button_HA_Discovery/3.jpg" style={{width:600, height:'auto'}}/></div>

**Paso 2.2.** En la página del flasheador web, localiza la opción de firmware **IoT Button V2** y haz clic en el botón **"Connect"**.

**Paso 2.3.** Aparecerá una ventana emergente del navegador mostrando los puertos serie disponibles. Selecciona el puerto correspondiente a tu IoT Button V2 (usualmente etiquetado como USB JTAG o serial) y haz clic en **"Connect"**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Button_HA_Discovery/5.png" style={{width:1000, height:'auto'}}/></div>

### Paso 3. Flashear el Firmware

**Paso 3.1.** Una vez conectado, haz clic en el botón **"Install IoT Button V2"** para comenzar el proceso de carga del firmware.

**Paso 3.2.** Luego necesitas elegir si borrar el dispositivo. Si solo quieres actualizar el firmware del dispositivo sin perder las credenciales de red, puedes dejar esta opción sin marcar y hacer clic en Next. Si estás cambiando desde otro firmware, recomiendo encarecidamente marcar este botón durante tu primer flasheo de firmware.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Button_HA_Discovery/7.png" style={{width:600, height:'auto'}}/></div>

El flasheador borrará el firmware existente y cargará el nuevo firmware Seeed HA Discovery. Este proceso típicamente toma 1-2 minutos. No desconectes tu dispositivo durante este proceso.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Button_HA_Discovery/8.png" style={{width:1000, height:'auto'}}/></div>

**Paso 3.3.** Cuando veas el mensaje "Installation complete!", tu firmware ha sido flasheado exitosamente.

### Entendiendo las Características del Firmware

El firmware del IoT Button V2 con funcionalidad de sueño profundo ofrece varias características clave:

**Gestión de Energía:**

- El componente deep_sleep puede usarse para entrar automáticamente en un modo de sueño profundo en el ESP32 después de cierta cantidad de tiempo. Esto es especialmente útil con nodos que operan con baterías y por lo tanto necesitan conservar tanta energía como sea posible[[1]](https://esphome.io/components/deep_sleep/).
- El botón entra en modo de sueño ligero después de 3 minutos de inactividad para conservar energía de la batería
- El despertar del sueño se activa presionando el botón

**Eventos del Botón:**

- **Pulsación Simple**: Activa evento de clic simple en Home Assistant
- **Pulsación Doble**: Activa evento de doble clic en Home Assistant  
- **Pulsación Larga**: Activa evento de pulsación larga (típicamente 1+ segundos)
- **Pulsación Triple**: Entra en modo desarrollador, donde el dispositivo permanece despierto por 3 minutos, permitiéndote flashear firmware sin perder la conexión del puerto serie
- **Pulsación Larga (6+ segundos)**: Después de que el LED parpadee, suelta el botón para iniciar el modo de reconfiguración de red, permitiéndote configurar una nueva red Wi-Fi

**Retroalimentación LED:**

- El LED RGB proporciona retroalimentación visual para pulsaciones de botón y estado de conexión
- Colores LED personalizables para diferentes estados

**Monitoreo de Batería:**

- Lectura de voltaje basada en ADC para estimación del nivel de batería
- Reporte de estado de batería en tiempo real a Home Assistant

<svg
viewBox="0 0 800 450"
width="100%"
height="auto"
style={{ fontFamily: 'sans-serif', maxWidth: '800px', margin: '0 auto', display: 'block' }}
>
{/* Background for Dark Mode Support */}
<rect x="0" y="0" width="800" height="450" rx="12" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1" />

{/* Header */}
<text x="400" y="35" textAnchor="middle" fontSize="18" fontWeight="bold" fill="#1e293b">
    IoT Button V2: Ciclo de Vida y Eventos
</text>

{/* --- ACTIVE STATE (Top Center) --- */}
<g transform="translate(300, 60)">
    <rect x="0" y="0" width="200" height="90" rx="10" fill="#dbeafe" stroke="#2563eb" strokeWidth="2" />
    <text x="100" y="25" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#1e3a8a">ESTADO ACTIVO</text>
    <line x1="20" y1="35" x2="180" y2="35" stroke="#93c5fd" strokeWidth="1" />
    <text x="100" y="55" textAnchor="middle" fontSize="11" fill="#1e40af">Evaluar Tipo de Presión</text>
    <text x="100" y="70" textAnchor="middle" fontSize="11" fill="#1e40af">Enviar Evento API a HA</text>
</g>

{/* --- DEEP SLEEP STATE (Bottom Center) --- */}
<g transform="translate(300, 320)">
    <rect x="0" y="0" width="200" height="80" rx="10" fill="#1e293b" stroke="#475569" strokeWidth="2" />
    <text x="100" y="30" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#ffffff">SUEÑO PROFUNDO</text>
    <text x="100" y="50" textAnchor="middle" fontSize="11" fill="#94a3b8">Ultra Bajo Consumo</text>
    <text x="100" y="65" textAnchor="middle" fontSize="10" fill="#94a3b8">Esperando Activación GPIO</text>
</g>

{/* --- WIFI CONFIG (Left Side) --- */}
<g transform="translate(50, 180)">
    <rect x="0" y="0" width="180" height="90" rx="10" fill="#f3e8ff" stroke="#9333ea" strokeWidth="2" />
    <text x="90" y="25" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#6b21a8">CONFIG WIFI</text>
    <line x1="20" y1="35" x2="160" y2="35" stroke="#d8b4fe" strokeWidth="1" />
    <text x="90" y="55" textAnchor="middle" fontSize="10" fill="#7e22ce">Modo AP Activo</text>
    <text x="90" y="70" textAnchor="middle" fontSize="10" fill="#7e22ce">Reconfigurar Red</text>
</g>

{/* --- DEVELOPER MODE (Right Side) --- */}
<g transform="translate(570, 180)">
    <rect x="0" y="0" width="180" height="90" rx="10" fill="#ffedd5" stroke="#ea580c" strokeWidth="2" />
    <text x="90" y="25" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#9a3412">MODO DESARROLLADOR</text>
    <line x1="20" y1="35" x2="160" y2="35" stroke="#fdba74" strokeWidth="1" />
    <text x="90" y="55" textAnchor="middle" fontSize="10" fill="#c2410c">Actualizaciones OTA Habilitadas</text>
    <text x="90" y="70" textAnchor="middle" fontSize="10" fill="#c2410c">Tiempo límite: 3 Minutos</text>
</g>

{/* --- TRANSITIONS --- */}

{/* Active -> Config (Left) */}
<path d="M300 105 L230 105 L230 160 L140 160 L140 180" fill="none" stroke="#9333ea" strokeWidth="2" markerEnd="url(#arrowPurple)" />
<rect x="160" y="130" width="60" height="20" rx="4" fill="#ffffff" stroke="#9333ea" strokeWidth="1"/>
<text x="190" y="144" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#7e22ce">Mantener 6s</text>

{/* Active -> Dev (Right) */}
<path d="M500 105 L570 105 L570 160 L660 160 L660 180" fill="none" stroke="#ea580c" strokeWidth="2" markerEnd="url(#arrowOrange)" />
<rect x="580" y="130" width="60" height="20" rx="4" fill="#ffffff" stroke="#ea580c" strokeWidth="1"/>
<text x="610" y="144" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#c2410c">3x Clic</text>

{/* Active -> Sleep (Center Down) */}
<path d="M380 150 L380 310" fill="none" stroke="#64748b" strokeWidth="2" strokeDasharray="5,5" markerEnd="url(#arrowGrey)" />
<text x="350" y="240" textAnchor="middle" fontSize="10" fill="#64748b">Tarea Completada</text>

{/* Sleep -> Active (Wakeup) */}
<path d="M420 320 L420 160" fill="none" stroke="#10b981" strokeWidth="2" markerEnd="url(#arrowGreen)" />
<rect x="380" y="200" width="80" height="20" rx="4" fill="#ecfdf5" stroke="#10b981" />
<text x="420" y="214" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#047857">Despertar</text>

{/* Config -> Sleep */}
<path d="M140 270 L140 360 L290 360" fill="none" stroke="#64748b" strokeWidth="2" strokeDasharray="5,5" markerEnd="url(#arrowGrey)" />
<text x="140" y="320" textAnchor="middle" fontSize="10" fill="#64748b" transform="rotate(-90, 130, 320)">Finalizado</text>

{/* Dev -> Sleep */}
<path d="M660 270 L660 360 L510 360" fill="none" stroke="#64748b" strokeWidth="2" strokeDasharray="5,5" markerEnd="url(#arrowGrey)" />
<text x="675" y="320" textAnchor="middle" fontSize="10" fill="#64748b" transform="rotate(90, 675, 320)">Tiempo agotado</text>

{/* LED Legend */}
<g transform="translate(50, 420)">
    <circle cx="10" cy="5" r="4" fill="#22c55e" />
    <text x="20" y="9" fontSize="10" fill="#475569">Presión (Verde)</text>
    <circle cx="100" cy="5" r="4" fill="#f97316" />
    <text x="110" y="9" fontSize="10" fill="#475569">Modo Desarrollador (Naranja)</text>
</g>

<defs>
    <marker id="arrowGreen" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto" markerUnits="strokeWidth">
    <path d="M0,0 L0,6 L9,3 z" fill="#10b981" />
    </marker>
    <marker id="arrowGrey" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto" markerUnits="strokeWidth">
    <path d="M0,0 L0,6 L9,3 z" fill="#64748b" />
    </marker>
    <marker id="arrowOrange" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto" markerUnits="strokeWidth">
    <path d="M0,0 L0,6 L9,3 z" fill="#ea580c" />
    </marker>
    <marker id="arrowPurple" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto" markerUnits="strokeWidth">
    <path d="M0,0 L0,6 L9,3 z" fill="#9333ea" />
    </marker>
</defs>
</svg>

## Instalar la Integración Seeed HA Discovery

Ahora que tu IoT Button V2 tiene el firmware apropiado, el siguiente paso es instalar la integración Seeed HA Discovery en Home Assistant a través de HACS.

### Paso 4. Instalar HACS (Si No Está Ya Instalado)

Si aún no has instalado HACS:

**Paso 4.1.** Instala la Tienda de la Comunidad de Home Assistant (HACS) para habilitar la instalación de plugins de Seeed HA Discovery dentro de Home Assistant.

**Paso 4.2.** Sigue la guía oficial de instalación de HACS en https://www.hacs.xyz/docs/use/download/download/#to-download-hacs

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Button_HA_Discovery/11.png" style={{width:1000, height:'auto'}}/></div>

**Paso 4.3.** Es posible que necesites reiniciar Home Assistant para que HACS se integre completamente en tu sistema.

### Paso 5. Agregar el Repositorio Seeed HA Discovery

**Paso 5.1.** Navega al repositorio de GitHub de Seeed HA Discovery:

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/limengdu/Seeed-Homeassistant-Discovery" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}>Ir al Repositorio</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

**Paso 5.2.** En la sección README, localiza el área ⚡ **Instalación con Un Clic** y haz clic en el botón **ABRIR REPOSITORIO HACS EN MI HA**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Button_HA_Discovery/9.png" style={{width:800, height:'auto'}}/></div>

:::tip
Este botón te redirigirá automáticamente a tu instancia de Home Assistant y abrirá la página de adición de repositorio HACS.
:::

**Paso 5.3.** Aparecerá una página de redirección mostrando tu URL de Home Assistant. Verifica que la dirección de Home Assistant detectada sea correcta (debe coincidir con la dirección IP o nombre de dominio de tu Home Assistant).

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Button_HA_Discovery/10.png" style={{width:600, height:'auto'}}/></div>

- Si la dirección es correcta, haz clic en **Abrir enlace** para continuar

- Si la dirección es incorrecta, ingresa manualmente tu URL correcta de Home Assistant en el formato: `http://TU_IP_HA:8123` o `https://TU_DOMINIO_HA`

**Paso 5.4.** Home Assistant se abrirá y mostrará el diálogo de adición de repositorio HACS con la URL del repositorio Seeed HA Discovery ya completada.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Button_HA_Discovery/4.png" style={{width:1000, height:'auto'}}/></div>

**Paso 5.5.** Haz clic en **Descargar** en la esquina inferior derecha para agregar el repositorio a HACS. Asegúrate de estar usando la versión más reciente del plugin. Después de que el script de instalación haya terminado, necesitas reiniciar Home Assistant para aplicar los cambios. Puedes reiniciar Home Assistant a través de la interfaz yendo a Settings > System > Restart

:::note
Si el botón de un clic no funciona, puedes agregar manualmente el repositorio:

1. Abriendo HACS en la barra lateral de tu Home Assistant

2. Haciendo clic en el botón de menú (tres puntos) en la esquina inferior derecha

3. Seleccionando "Custom repositories"

4. Ingresando `https://github.com/limengdu/Seeed-Homeassistant-Discovery` y seleccionando la categoría "Integration"
:::

## Configurar WiFi y Descubrir el IoT Button

Con la integración instalada, ahora puedes configurar tu IoT Button V2 para conectarse a tu red WiFi y descubrirlo en Home Assistant.

### Paso 6. Configurar WiFi en el IoT Button V2

**Paso 6.1.** Después de flashear el firmware, tu IoT Button V2 creará un punto de acceso WiFi (AP) para la configuración inicial. El nombre del AP será típicamente `Seeed_IoT_Button_V2_AP`.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Button_HA_Discovery/12.png" style={{width:400, height:'auto'}}/></div>

**Paso 6.2.** Usando tu smartphone o computadora, conéctate a este punto de acceso WiFi.

**Paso 6.3.** Un portal cautivo debería abrirse automáticamente. Si no, abre un navegador web y navega a `http://192.168.4.1`.

**Paso 6.4.** En el portal de configuración, ingresa las credenciales de tu red WiFi doméstica:

:::note
Ten en cuenta que el IoT Button actualmente no es compatible con redes que operan en bandas de frecuencia 5G.
:::

- **SELECTED NETWORK**: El nombre de tu red WiFi
- **PASSWORD**: Tu contraseña WiFi

**Paso 6.5.** Haz clic en **"Connect"** para guardar la configuración.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Button_HA_Discovery/17.png" style={{width:400, height:'auto'}}/></div>

**Paso 6.6.** El IoT Button V2 se reiniciará y se conectará a tu red WiFi. El LED RGB mostrará color azul.

### Paso 7. Agregar IoT Button en Home Assistant

**Paso 7.1.** Después del reinicio, haz clic en Settings en la barra lateral para abrir el menú de configuración. Dentro del menú de configuración, navega a **Devices & Services**.

**Paso 7.2.** Si tu IoT Button V2 está conectado exitosamente a tu red WiFi, el dispositivo será descubierto automáticamente por Home Assistant después de conectarse al WiFi. Si el dispositivo no es detectado automáticamente, también puedes agregarlo manualmente haciendo clic en "Add Integration" en la esquina inferior derecha, buscando "Seeed HA Discovery" e ingresando la dirección IP del dispositivo.

:::tip
La dirección IP del dispositivo se puede obtener desde el registro del puerto serie o desde el backend del router.
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Button_HA_Discovery/20.png" style={{width:1000, height:'auto'}}/></div>

**Paso 7.3.** Sigue las indicaciones en pantalla para completar la configuración de la integración. Es posible que necesites asignar el botón a un área en tu hogar.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Button_HA_Discovery/21.png" style={{width:500, height:'auto'}}/></div>

**Paso 7.4.** Una vez configurado, tu IoT Button V2 aparecerá en tu panel de Home Assistant con entidades disponibles para eventos de botón, estado de batería y control de LED.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Button_HA_Discovery/1.png" style={{width:1000, height:'auto'}}/></div>

### Paso 8. Crear Automatizaciones

Ahora que tu IoT Button está conectado, puedes crear automatizaciones en Home Assistant:

**Paso 8.1.** Navega a **Settings > Automations & Scenes**.

**Paso 8.2.** Haz clic en **"Create Automation"** y selecciona **"Start with an empty automation"**.

**Paso 8.3.** Para el **Trigger**, selecciona tu dispositivo IoT Button y elige el tipo de evento (presión simple, doble presión o presión larga).

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Button_HA_Discovery/22.png" style={{width:1000, height:'auto'}}/></div>

**Paso 8.4.** Para la **Action**, elige qué quieres que suceda (por ejemplo, encender luces, activar escenas, enviar notificaciones).

**Paso 8.5.** Guarda tu automatización y pruébala presionando tu IoT Button!

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
