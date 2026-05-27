---
description: Este artículo es una página de recopilación para la reTerminal E Serie.
title: reTerminal E Serie
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /reterminal_e10xx_main_page
sku: 100017057,100073581
sidebar_position: 1
last_update:
  date: 04/28/2026
  author: Citric
createdAt: '2025-07-25'
updatedAt: '2026-04-28'
url: https://wiki.seeedstudio.com/es/reterminal_e10xx_main_page/
---
# Descripción general de la pantalla de tinta electrónica reTerminal E Serie

## Introducción

La reTerminal E Serie es la familia de terminales de pantalla de tinta electrónica basados en ESP32-S3 de Seeed Studio, diseñados específicamente para **visualización de información siempre encendida y de bajo consumo**. La gama abarca cuatro modelos — **E1001, E1002, E1003, E1004** — que cubren paneles monocromos y a todo color de 7,3" a 13,3", con opciones de interacción táctil y autonomía de batería de varios meses. Todos comparten la misma pila de software (SenseCraft HMI, Home Assistant, Arduino y más), por lo que solo tienes que aprenderla una vez y luego elegir el factor de forma que se adapte a tu escenario.

A diferencia de las pantallas tradicionales que consumen energía de forma continua, la reTerminal E Serie solo consume corriente al volver a dibujar el contenido, lo que la hace ideal para marcos de fotos digitales, paneles de control de hogar inteligente, señalización para comercios, paneles de salas de reuniones, pantallas para aulas y otros casos de uso siempre encendidos.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/206.png" style={{width:1000, height:'auto'}}/></div>

## Matriz de productos de un vistazo

Cuatro modelos, un ecosistema. Elige según **tamaño de pantalla**, **color frente a monocromo**, **táctil** y **autonomía de batería**:

<div class="table-center">
  <table align="center">
    <tr>
      <th>reTerminal E1001</th>
      <th>reTerminal E1002</th>
      <th>reTerminal E1003</th>
      <th>reTerminal E1004</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/24.jpg" style={{width:240, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/25.jpg" style={{width:240, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/e1003/2-reTerminal-E1003-Epaper-Display.jpg" style={{width:240, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/e1004/2-reterminal-e1004-epaper-display.jpg" style={{width:240, height:'auto'}}/></div></td>
    </tr>
    <tr>
      <td align="center"><strong>7,5" monocromo</strong><br/>escala de grises de 4 niveles<br/>batería de ~3 meses</td>
      <td align="center"><strong>7,3" a todo color</strong><br/>E Ink® Spectra™ 6<br/>batería de ~3 meses</td>
      <td align="center"><strong>10,3" monocromo</strong><br/>escala de grises de 16 niveles + táctil<br/>batería de ~6 meses</td>
      <td align="center"><strong>13,3" a todo color</strong><br/>E Ink® Spectra™ 6<br/>batería de ~6 meses</td>
    </tr>
    <tr>
      <td align="center"><a href="https://www.seeedstudio.com/reTerminal-E1001-p-6534.html" target="_blank" rel="noopener noreferrer"><strong>Comprar E1001</strong></a><br/><a href="https://wiki.seeedstudio.com/es/getting_started_with_reterminal_e1001" target="_blank" rel="noopener noreferrer">Wiki →</a></td>
      <td align="center"><a href="https://www.seeedstudio.com/reTerminal-E1002-p-6533.html" target="_blank" rel="noopener noreferrer"><strong>Comprar E1002</strong></a><br/><a href="https://wiki.seeedstudio.com/es/getting_started_with_reterminal_e1002" target="_blank" rel="noopener noreferrer">Wiki →</a></td>
      <td align="center"><a href="https://www.seeedstudio.com/reTerminal-E1003-p-6731.html" target="_blank" rel="noopener noreferrer"><strong>Comprar E1003</strong></a><br/><a href="https://wiki.seeedstudio.com/es/getting_started_with_reterminal_e1003" target="_blank" rel="noopener noreferrer">Wiki →</a></td>
      <td align="center"><a href="https://www.seeedstudio.com/reTerminal-E1004-p-6692.html" target="_blank" rel="noopener noreferrer"><strong>Comprar E1004</strong></a><br/><a href="https://wiki.seeedstudio.com/es/getting_started_with_reterminal_e1004" target="_blank" rel="noopener noreferrer">Wiki →</a></td>
    </tr>
  </table>
</div>

## Comparación de especificaciones

Los cuatro modelos comparten la misma plataforma ESP32-S3, conectividad inalámbrica Wi-Fi 4 / Bluetooth 5.0, sensor de temperatura/humedad y zumbador integrados, entrada USB-C 5 V / 1 A y rango de funcionamiento de 0–40 °C, todo en una carcasa metálica. Las diferencias se encuentran principalmente en el **panel de visualización**, el **comportamiento de refresco**, la **batería**, la **expansión** y las **certificaciones**:

<div class="table-center">
	<table align="center">
		<tr>
			<th align="center">Elemento</th>
			<th align="center">reTerminal E1001</th>
			<th align="center">reTerminal E1002</th>
			<th align="center">reTerminal E1003</th>
			<th align="center">reTerminal E1004</th>
		</tr>
		<tr>
			<td align="center"><strong>Tamaño de pantalla</strong></td>
			<td align="center">7,5"</td>
			<td align="center">7,3"</td>
			<td align="center">10,3"</td>
			<td align="center">13,3"</td>
		</tr>
		<tr>
			<td align="center"><strong>Tipo de pantalla</strong></td>
			<td align="center">Monocromo<br/>(escala de grises de 4 niveles)</td>
			<td align="center">A todo color<br/>(E Ink® Spectra™ 6)</td>
			<td align="center">Monocromo<br/>(escala de grises de 16 niveles)</td>
			<td align="center">A todo color<br/>(E Ink® Spectra™ 6)</td>
		</tr>
		<tr>
			<td align="center"><strong>Resolución</strong></td>
			<td align="center">800 × 480</td>
			<td align="center">800 × 480</td>
			<td align="center">1404 × 1872</td>
			<td align="center">1200 × 1600</td>
		</tr]
		<tr>
			<td align="center"><strong>Refresco parcial</strong></td>
			<td align="center">✅</td>
			<td align="center">❌</td>
			<td align="center">✅</td>
			<td align="center">❌</td>
		</tr>
		<tr>
			<td align="center"><strong>Frecuencia de refresco</strong></td>
			<td align="center">2–5 s</td>
			<td align="center">15–20 s</td>
			<td align="center">2–3 s</td>
			<td align="center">~20 s</td>
		</tr>
		<tr>
			<td align="center"><strong>Táctil</strong></td>
			<td align="center">—</td>
			<td align="center">—</td>
			<td align="center">✅ Pantalla táctil capacitiva<br/>(SenseCraft HMI v1.1.2+)</td>
			<td align="center">—</td>
		</tr>
		<tr>
			<td align="center"><strong>Procesador</strong></td>
			<td align="center" colspan="4">ESP32-S3 con 8 MB PSRAM</td>
		</tr>
		<tr>
			<td align="center"><strong>Almacenamiento</strong></td>
			<td align="center">32 MB Flash<br/>microSD hasta 32 GB</td>
			<td align="center">32 MB Flash<br/>microSD hasta 32 GB</td>
			<td align="center">32 MB Flash<br/>microSD hasta 32 GB</td>
			<td align="center">32 MB Flash<br/>microSD hasta 32 GB<br/>(<strong>16 GB incluida</strong>)</td>
		</tr>
		<tr>
			<td align="center"><strong>Conectividad inalámbrica</strong></td>
			<td align="center" colspan="4">2,4 GHz Wi-Fi 802.11 b/g/n + Bluetooth 5.0</td>
		</tr>
		<tr>
			<td align="center"><strong>Sensores integrados</strong></td>
			<td align="center" colspan="4">Sensor de temperatura y humedad</td>
		</tr>
		<tr>
			<td align="center"><strong>Audio</strong></td>
			<td align="center" colspan="4">Zumbador (alerta sonora) · Micrófono reservado en E1001 / E1002 / E1003</td>
		</tr>
		<tr>
			<td align="center"><strong>Batería</strong></td>
			<td align="center">2000 mAh<br/>~3 meses</td>
			<td align="center">2000 mAh<br/>~3 meses</td>
			<td align="center">3000 mAh<br/>~6 meses</td>
			<td align="center">5000 mAh<br/>~6 meses</td>
		</tr>
		<tr>
			<td align="center"><strong>Supervisión de batería</strong></td>
			<td align="center" colspan="4">✅ supervisión integrada del voltaje de la batería</td>
		</tr>
		<tr>
			<td align="center"><strong>Entrada de alimentación</strong></td>
			<td align="center" colspan="4">USB-C 5 V / 1 A</td>
		</tr>
		<tr>
			<td align="center"><strong>Temp. de trabajo</strong></td>
			<td align="center" colspan="4">0–40 °C</td>
		</tr>
		<tr>
			<td align="center"><strong>Carcasa</strong></td>
			<td align="center" colspan="4">Metal</td>
		</tr>
		<tr>
			<td align="center"><strong>Dimensiones</strong></td>
			<td align="center">176 × 120 × 53 mm<br/>(17 mm sin soporte)</td>
			<td align="center">176 × 120 × 53 mm<br/>(17 mm sin soporte)</td>
			<td align="center">224 × 187 × 18,6 mm</td>
			<td align="center">376 × 311 × 40 mm</td>
		</tr>
		<tr>
			<td align="center"><strong>Expansión</strong></td>
			<td align="center">Conector de 8 pines<br/>UART / I²C / GPIO</td>
			<td align="center">Conector de 8 pines<br/>UART / I²C / GPIO</td>
			<td align="center">Conector de pines<br/>UART / I²C / GPIO</td>
			<td align="center">Cabecera 2 × 4<br/>UART / I²C / GPIO / ADC</td>
		</tr>
		<tr>
			<td align="center"><strong>Certificaciones</strong></td>
			<td align="center">FCC / CE / TELEC<br/>PSE / RoHS / UKCA</td>
			<td align="center">FCC / CE / TELEC<br/>PSE / RoHS / UKCA</td>
			<td align="center">FCC / CE</td>
			<td align="center">FCC / CE</td>
		</tr>
		<tr>
			<td align="center"><strong>PVP recomendado</strong></td>
			<td align="center">&#36;69.00</td>
			<td align="center">&#36;99.00</td>
			<td align="center">&#36;159.90</td>
			<td align="center">&#36;279.90</td>
		</tr>
	</table>
</div>

## Cómo elegir

Utiliza la siguiente guía rápida para reducir la elección a un modelo. Si se aplican varias filas, la **última fila que coincida** suele ser la elección correcta.

<div class="table-center">
	<table align="center">
		<tr>
			<th align="center">Si tu prioridad es…</th>
			<th align="center">Modelo recomendado</th>
			<th align="center">Por qué</th>
		</tr>
		<tr>
			<td>Coste más bajo / panel de información con mucho texto / refresco parcial rápido</td>
			<td align="center"><strong>E1001</strong></td>
			<td>7,5" monocromo con escala de grises de 4 niveles, refresco parcial y frecuencia de refresco de 2–5 s.</td>
		</tr>
		<tr>
			<td>Mismo factor de forma que el E1001 pero quieres contenido vívido y a todo color</td>
			<td align="center"><strong>E1002</strong></td>
			<td>Panel a todo color Spectra™ 6 de 7,3" — galería, recetas, tablas de tareas para niños, señalización para comercios. Nota: el color completo sacrifica el refresco parcial a cambio de unos gráficos más ricos (~15–20 s por refresco completo).</td>
		</tr>
		<tr>
			<td>Interacción táctil / paneles de control interactivos / gran lector monocromo</td>
			<td align="center"><strong>E1003</strong></td>
			<td>10,3" con escala de grises de 16 niveles, pantalla táctil capacitiva (HMI v1.1.2+) y batería de 6 meses.</td>
		</tr>
		<tr>
			<td>Pantalla a color más grande, más nítida y de calidad para marcos de fotos</td>
			<td align="center"><strong>E1004</strong></td>
			<td>Pantalla ePaper Spectra™ 6 en color de 13,3", 1200×1600, batería de 5000 mAh, tarjeta microSD de 16 GB preinstalada.</td>
		</tr>
		<tr>
			<td>Necesito integración con Home Assistant / ESPHome hoy</td>
			<td align="center"><strong>E1001 / E1002 / E1004</strong></td>
			<td>La compatibilidad directa con Home Assistant está disponible en E1001, E1002 y E1004. ESPHome en E1003 está planificado.</td>
		</tr>
		<tr>
			<td>Quiero un panel TRMNL con E-Ink</td>
			<td align="center"><strong>E1001 / E1002</strong></td>
			<td>Ambos cuentan con compatibilidad oficial. Actualmente, el E1002 funciona en modo monocromo bajo TRMNL.</td>
		</tr>
		<tr>
			<td>La duración de la batería es el factor más importante</td>
			<td align="center"><strong>E1003 / E1004</strong></td>
			<td>Hasta 6 meses de duración de batería con los ajustes de refresco predeterminados.</td>
		</tr>
	</table>
</div>

## reTerminal E1001

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/24.jpg" style={{width:700, height:'auto'}}/></div><br />

<div class="get_one_now_container" style={{textAlign: 'center'}}>
  <a class="get_one_now_item" href="https://wiki.seeedstudio.com/es/getting_started_with_reterminal_e1001" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"3"}>reTerminal E1001 Wiki</font></span></strong>
  </a>
  <a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-E1001-p-6534.html" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}>Consigue uno ahora</font></span></strong>
  </a>
</div><br />

El reTerminal E1001 incorpora una pantalla ePaper monocroma de 7,5 pulgadas con capacidad de escala de grises de 4 niveles. Con su resolución de 800×480, ofrece texto nítido e imágenes claras consumiendo muy poca energía. La pantalla monocroma es perfecta para aplicaciones en las que la legibilidad del texto y la duración de la batería son prioridades.

### Características clave

- Pantalla ePaper monocroma de 7,5 pulgadas con escala de grises de 4 niveles
- Resolución de 800×480
- Consumo de energía ultrabajo para una mayor duración de la batería
- Perfecto para aplicaciones con mucho texto como calendarios, listas de tareas y paneles de información

## reTerminal E1002

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/25.jpg" style={{width:700, height:'auto'}}/></div><br />

<div class="get_one_now_container" style={{textAlign: 'center'}}>
  <a class="get_one_now_item" href="https://wiki.seeedstudio.com/es/getting_started_with_reterminal_e1002" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}>reTerminal E1002 Wiki</font></span></strong>
  </a>
  <a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-E1002-p-6533.html" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}>Consigue uno ahora</font></span></strong>
  </a>
</div><br />

El reTerminal E1002 incorpora una vívida pantalla ePaper en color de 7,3 pulgadas con tecnología ACeP (Advanced Color ePaper). Esta pantalla en color ofrece los mismos beneficios de eficiencia energética de la tecnología ePaper, a la vez que permite contenido visualmente más atractivo con múltiples colores, lo que la hace ideal para aplicaciones en las que la diferenciación visual y el atractivo estético son importantes.

### Características clave

- Pantalla ePaper en color de 7,3 pulgadas con tecnología ACeP
- Resolución de 800×480
- Representación de color rica manteniendo un bajo consumo de energía
- Perfecto para galerías, paneles de control coloridos y aplicaciones orientadas al contenido visual

## reTerminal E1003

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/e1003/2-reTerminal-E1003-Epaper-Display.jpg" style={{width:700, height:'auto'}}/></div><br />

<div class="get_one_now_container" style={{textAlign: 'center'}}>
  <a class="get_one_now_item" href="https://wiki.seeedstudio.com/es/getting_started_with_reterminal_e1003" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}>reTerminal E1003 Wiki</font></span></strong>
  </a>
  <a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-E1003-p-6731.html" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}>Consigue uno ahora</font></span></strong>
  </a>
</div><br />

El reTerminal E1003 es una pantalla ePaper monocroma de código abierto de 10,3 pulgadas que incorpora 16 niveles de escala de grises y una alta resolución de 1404×1872 píxeles, con hasta 6 meses de duración de batería. La interacción táctil es actualmente compatible con el firmware SenseCraft HMI v1.1.2. Impulsado por ESP32-S3, es compatible de forma nativa con el diseño de interfaz sin código de SenseCraft HMI, mientras que Arduino y PlatformIO están disponibles para un desarrollo adicional.

Se planea la publicación futura como código abierto de la biblioteca relacionada con el tacto, lo que proporcionará mayor flexibilidad para personalizar los paneles. Se compartirán más actualizaciones pronto. También está planificada la compatibilidad del controlador ESPHome para el E1003 en una versión futura.

### Características clave

- Pantalla ePaper monocroma de 10,3 pulgadas con compatibilidad de interacción táctil en el firmware HMI v1.1.2
- Escala de grises de 16 niveles con alta resolución de 1404×1872
- Hasta 6 meses de duración de batería con funcionamiento de consumo ultrabajo
- Compatibilidad nativa con SenseCraft HMI más compatibilidad con Arduino y PlatformIO, con compatibilidad con el controlador ESPHome planificada

## reTerminal E1004

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/e1004/2-reterminal-e1004-epaper-display.jpg" style={{width:700, height:'auto'}}/></div><br />

<div class="get_one_now_container" style={{textAlign: 'center'}}>
  <a class="get_one_now_item" href="https://wiki.seeedstudio.com/es/getting_started_with_reterminal_e1004" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}>reTerminal E1004 Wiki</font></span></strong>
  </a>
  <a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-E1004-p-6692.html" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}>Consigue uno ahora</font></span></strong>
  </a>
</div><br />

El reTerminal E1004 incorpora una pantalla ePaper en color de 13,3 pulgadas y hasta 6 meses de duración de batería. Impulsado por ESP32-S3, es compatible con SenseCraft HMI para la creación de paneles sin código y la carga de imágenes, y también es compatible con Home Assistant, Arduino y ESP-IDF para flujos de trabajo de desarrollo avanzados.

### Características clave

- Pantalla ePaper en color de 13,3 pulgadas
- Hasta 6 meses de duración de batería para escenarios siempre encendidos
- Plataforma ESP32-S3 con compatibilidad sin código de SenseCraft HMI
- Compatible con Home Assistant, Arduino y ESP-IDF

## SenseCraft HMI — La plataforma sin código predeterminada

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://sensecraft.seeed.cc/hmi" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> SenseCraft HMI 🖱️</font></span></strong>
    </a>
    <a class="get_one_now_item" href="https://wiki.seeedstudio.com/es/sensecraft_hmi_overview" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> SenseCraft HMI Wiki</font></span></strong>
  </a>
</div><br />

Cada dispositivo de la Serie reTerminal E se envía con el firmware **SenseCraft HMI** listo para usar, de modo que puedes empezar a trabajar sin escribir ni una sola línea de código. La aplicación web gestiona el inicio de sesión, el diseño del panel y la implementación inalámbrica en tu dispositivo:

- **Generador de IA**: describe un panel en texto plano y deja que la IA lo diseñe por ti.
- **Galería**: envía imágenes y presentaciones directamente al panel para casos de uso como marcos digitales.
- **Lienzo**: arrastra y suelta widgets para crear paneles personalizados.
- **Contenido RSS / web**: trae noticias en vivo, clima, calendario o cualquier fuente web a la pantalla.
- **Interacción táctil**: totalmente compatible en el E1003 a partir del firmware HMI v1.1.2.

Si necesitas más control del que te ofrece el flujo de trabajo sin código, cada dispositivo también expone el ESP32-S3 subyacente, por lo que puedes pasar a los tutoriales de aplicaciones que aparecen a continuación en cualquier momento.

## Aplicaciones y tutoriales

Más allá de SenseCraft HMI, la Serie reTerminal E se integra con varias plataformas estándar de la industria y herramientas visuales de diseño de interfaces. La siguiente matriz te indica, para cada tutorial, qué modelos cubre actualmente.

### Frameworks de hogar inteligente y paneles de control

<div class="table-center">
	<table align="center">
		<tr>
			<th>Tutorial</th>
			<th>Qué hace</th>
			<th>E1001</th>
			<th>E1002</th>
			<th>E1003</th>
			<th>E1004</th>
		</tr>
		<tr>
			<td><a href="https://wiki.seeedstudio.com/es/reterminal_e10xx_with_esphome">ESPHome — Basic Usage</a></td>
			<td>Conecta el dispositivo a Home Assistant y dibuja gráficos sencillos con YAML.</td>
			<td align="center">✅</td>
			<td align="center">✅</td>
			<td align="center">Planificado</td>
			<td align="center">a través de Home Assistant</td>
		</tr>
		<tr>
			<td><a href="https://wiki.seeedstudio.com/es/reterminal_e10xx_with_esphome_advanced">ESPHome — Advanced Usage</a></td>
			<td>Botones, zumbador, monitorización de batería, suspensión profunda, paneles multipágina.</td>
			<td align="center">✅</td>
			<td align="center">✅</td>
			<td align="center">Planificado</td>
			<td align="center">a través de Home Assistant</td>
		</tr>
		<tr>
			<td><a href="https://wiki.seeedstudio.com/es/reterminal_e10xx_trmnl">Works with TRMNL</a></td>
			<td>Implementa paneles E-Ink a través de la plataforma TRMNL.</td>
			<td align="center">✅</td>
			<td align="center">✅ <em>(modo mono)</em></td>
			<td align="center">—</td>
			<td align="center">—</td>
		</tr>
	</table>
</div>

### Herramientas de diseño de interfaz visual / sin código

<div class="table-center">
	<table align="center">
		<tr>
			<th>Tutorial</th>
			<th>Qué hace</th>
			<th>E1001</th>
			<th>E1002</th>
			<th>E1003</th>
			<th>E1004</th>
		</tr>
		<tr>
			<td><a href="https://wiki.seeedstudio.com/es/reterminal_e10xx_with_squareline_vision">Work with SquareLine Vision</a></td>
			<td>Diseña interfaces LVGL con arrastrar y soltar en el navegador y luego exporta código listo para compilar.</td>
			<td align="center">✅</td>
			<td align="center">✅</td>
			<td align="center">—</td>
			<td align="center">—</td>
		</tr>
		<tr>
			<td><a href="https://wiki.seeedstudio.com/es/reterminal_e10xx_with_eezstudio">Trabajar con EEZ Studio</a></td>
			<td>Diseña pantallas HMI de forma visual y despliega a través de Arduino IDE.</td>
			<td align="center">✅</td>
			<td align="center">✅</td>
			<td align="center">—</td>
			<td align="center">—</td>
		</tr>
		<tr>
			<td><a href="https://wiki.seeedstudio.com/es/reterminal_e10xx_with_lopaka">Trabajar con Lopaka</a></td>
			<td>Herramienta de dibujo basada en la web que exporta código para diseños de ePaper monocromos y en color.</td>
			<td align="center">✅</td>
			<td align="center">✅</td>
			<td align="center">—</td>
			<td align="center">—</td>
		</tr>
	</table>
</div>

### Desarrollo basado en código

<div class="table-center">
	<table align="center">
		<tr>
			<th>Tutorial</th>
			<th>Qué hace</th>
			<th>E1001</th>
			<th>E1002</th>
			<th>E1003</th>
			<th>E1004</th>
		</tr>
		<tr>
			<td><a href="https://wiki.seeedstudio.com/es/reterminal_e10xx_with_arduino">Arduino — Pantalla ePaper</a></td>
			<td>Renderiza texto, gráficos e imágenes en la pantalla ePaper con las librerías Seeed_GFX o GxEPD2.</td>
			<td align="center">✅</td>
			<td align="center">✅</td>
			<td align="center">✅</td>
			<td align="center">✅</td>
		</tr>
		<tr>
			<td><a href="https://wiki.seeedstudio.com/es/reterminal_e10xx_with_arduino_peripherals">Arduino — Periféricos integrados</a></td>
			<td>Controla el LED integrado, el zumbador, tres botones de usuario, el sensor SHT4x, el monitor de batería y la tarjeta microSD.</td>
			<td align="center">✅</td>
			<td align="center">✅</td>
			<td align="center">✅</td>
			<td align="center">✅</td>
		</tr>
		<tr>
			<td><a href="https://wiki.seeedstudio.com/es/reterminal_e10xx_with_arduino_peripherals_2">Arduino — RTC, Bajo Consumo y Audio</a></td>
			<td>Gestión de tiempo con RTC, deep sleep / light sleep y grabación con micrófono I2S (solo E1001 / E1002 / E1003 para el micrófono).</td>
			<td align="center">✅</td>
			<td align="center">✅</td>
			<td align="center">✅</td>
			<td align="center">✅</td>
		</tr>
	</table>
</div>

:::tip
¿Buscas las instrucciones de inicio por dispositivo (unboxing, configuración de Wi‑Fi, actualización de firmware)? Ve al Wiki del producto enlazado en la matriz anterior:
[E1001](https://wiki.seeedstudio.com/es/getting_started_with_reterminal_e1001) ·
[E1002](https://wiki.seeedstudio.com/es/getting_started_with_reterminal_e1002) ·
[E1003](https://wiki.seeedstudio.com/es/getting_started_with_reterminal_e1003) ·
[E1004](https://wiki.seeedstudio.com/es/getting_started_with_reterminal_e1004).
:::

## Recursos

- [Documentación de SenseCraft HMI](https://wiki.seeedstudio.com/es/sensecraft_hmi_overview/)
- [Hoja de datos del ESP32-S3](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/esp32-s3_datasheet.pdf)
- [Certificado de Radio MIC de reTerminal](https://files.seeedstudio.com/wiki/reterminal_e10xx/res/reTerminal_MIC_Radio_Certificate.pdf)

## Aviso de la FCC

Cualquier cambio o modificación que no haya sido aprobado expresamente por la parte responsable del cumplimiento podría anular la autoridad del usuario para operar el equipo. Este dispositivo cumple con la Parte 15 de las Normas de la FCC. El funcionamiento está sujeto a las siguientes dos condiciones:

(1) este dispositivo no puede causar interferencias perjudiciales, y

(2) este dispositivo debe aceptar cualquier interferencia recibida, incluida la interferencia que pueda causar un funcionamiento no deseado. Este transmisor no debe estar co‑ubicado ni operar en conjunto con ninguna otra antena o transmisor.

Nota: Este equipo ha sido probado y se ha encontrado que cumple con los límites para un dispositivo digital de Clase B, de acuerdo con la Parte 15 de las Normas de la FCC. Estos límites están diseñados para proporcionar una protección razonable contra interferencias perjudiciales en una instalación residencial. Este equipo genera, utiliza y puede irradiar energía de radiofrecuencia y, si no se instala y utiliza de acuerdo con las instrucciones, puede causar interferencias perjudiciales a las comunicaciones por radio. Sin embargo, no hay garantía de que no se produzcan interferencias en una instalación en particular. Si este equipo causa interferencias perjudiciales a la recepción de radio o televisión, lo que puede determinarse apagando y encendiendo el equipo, se recomienda al usuario intentar corregir la interferencia mediante una o más de las siguientes medidas:

– Reorientar o reubicar la antena receptora.

– Aumentar la separación entre el equipo y el receptor.

– Conectar el equipo a una toma de corriente de un circuito diferente al que está conectado el receptor.

– Consultar al distribuidor o a un técnico de radio/TV con experiencia para obtener ayuda. Este dispositivo cumple con los límites de exposición a la radiación de la FCC establecidos para un entorno no controlado. Este dispositivo debe instalarse y operarse con una distancia mínima de 20 cm entre el radiador y su cuerpo.

## Soporte técnico y debate sobre el producto

Gracias por elegir nuestros productos. Estamos aquí para ofrecerte diferentes tipos de soporte y garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
