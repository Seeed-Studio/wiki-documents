---
title: Sistema de posicionamiento en interiores por Bluetooth con LoRaWAN
description: Una solución fiable de posicionamiento en interiores que utiliza el SenseCAP Tracker. Combina Bluetooth para el seguimiento preciso de la ubicación con LoRaWAN para la transmisión de datos de largo alcance, lo que permite un despliegue sencillo.
keywords:
  - Bluetooth
  - LoRaWAN
  - SenseCAP Tracker
  - Posicionamiento en interiores
  - Seguimiento de activos
  - SOS
  - Seguridad en el campus
slug: /solutions/indoor-positioning-bluetooth-lorawan-tracker
sidebar_position: 1
last_update:
  date: 05/31/2026
  author: Spencer
createdAt: '2025-09-10'
updatedAt: '2026-06-01'
url: https://wiki.seeedstudio.com/es/solutions/indoor-positioning-bluetooth-lorawan-tracker/
---

## Introducción

### Descripción general

El posicionamiento en interiores es un desafío común para muchas industrias. Aunque existen sistemas de alta precisión como UWB, pueden ser costosos y complejos. Esta solución ofrece una alternativa flexible y rentable combinando dos potentes tecnologías inalámbricas: **Bluetooth Low Energy (BLE)** para la detección de ubicación y **LoRaWAN** para la transmisión de datos de largo alcance y bajo consumo.

El sistema se basa en el [SenseCAP T1000 Tracker](/es/SenseCAP_T1000_tracker/Introduction) y admite dos modos de posicionamiento distintos, lo que te permite equilibrar la precisión con la duración de la batería según tus necesidades:

1. **Seguimiento de alta precisión (trilateración):** Cuando un rastreador detecta señales de **tres o más** balizas BLE, puede calcular sus coordenadas precisas (x, y) en un mapa. Este modo es ideal para rastrear el movimiento de activos o personal, proporcionando actualizaciones de ubicación precisas de forma periódica o cada vez que se produce movimiento.

2. **Posicionamiento basado en zonas (proximidad):** Cuando un rastreador está dentro del alcance de solo una o dos balizas, identifica su ubicación en función de la proximidad a la baliza más cercana. Este modo es perfecto para casos de uso más simples como registros automáticos, confirmar que un activo está en una sala designada o ahorrar batería informando la ubicación con menor frecuencia.

Al admitir ambos métodos, esta solución proporciona un sistema versátil y fácil de desplegar para una amplia gama de aplicaciones de seguimiento en interiores, desde la simple detección de presencia hasta una supervisión más detallada basada en coordenadas.

:::tip Despliega en minutos con SenseCraft Solution

La forma más rápida de poner en marcha este sistema es mediante el **[Sistema de posicionamiento por balizas BLE a nivel de campus](https://www.seeed.cc/solutions/reference-designs/indoor_positioning_ble_lorawan)** en la plataforma **SenseCraft Solution**.

Haz clic en **Deploy**, elige un tamaño de kit (**Starter / Standard / Enterprise**) y SenseCraft Solution te guía en cada paso: instala la aplicación de posicionamiento por ti (sin comandos Docker manuales) y te orienta en la configuración de las balizas, la pasarela y los rastreadores.

👉 **[Deploy this solution →](https://www.seeed.cc/solutions/reference-designs/indoor_positioning_ble_lorawan)**

:::

:::tip Navega a nuestra página del paquete

Consulta nuestra página del paquete [Posicionamiento integrado en interiores y exteriores](https://www.seeedstudio.com/Indoor-Outdoor-Integrated-Positioning.html) para ver todos los productos que necesitas para implementar esta solución.

:::

### Características clave y beneficios

- **Rentable y escalable**: Aprovecha balizas BLE asequibles y evita la necesidad de instalar pasarelas costosas en cada sala.
- **Transmisión de datos de largo alcance**: Una sola pasarela LoRaWAN puede cubrir un edificio o campus completo, reduciendo drásticamente los costos de infraestructura.
- **Alerta SOS instantánea**: Los rastreadores incluyen un botón de pánico que, al presionarse, envía inmediatamente una alerta SOS vía LoRaWAN para una respuesta rápida en emergencias.
- **Gestión inteligente de energía**: Mediante el uso de un acelerómetro integrado, el rastreador puede informar solo cuando se detecta movimiento y enviar señales de "latido" periódicas en otros casos. Esto amplía drásticamente la vida útil de la batería hasta 6 meses con una configuración óptima para muchas aplicaciones de seguimiento de activos.
- **Despliegue sencillo**: La configuración de las balizas BLE y las pasarelas LoRaWAN es sencilla, lo que permite poner en línea tu sistema de posicionamiento rápidamente.
- **Listo para desplegar**: Pon en marcha todo el sistema en minutos: con un solo clic a través de la plataforma [SenseCraft Solution](https://www.seeed.cc/solutions/reference-designs/indoor_positioning_ble_lorawan), o con un único comando Docker si lo alojas tú mismo. La aplicación también es totalmente [open-source](https://github.com/Seeed-Solution/Solution_IndoorPositioning_H5) si deseas personalizarla.

### Casos de uso

<div class="info-section">
    <div class="section-header">
        <h2>Casos de uso</h2>
        <p>Esta solución es ideal para una amplia gama de aplicaciones de seguimiento por zonas y de seguridad:</p>
    </div>
    <ul class="info-list">
        <li class="info-item"><div class="info-icon"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" /></svg></div><div class="info-content"><h3>Seguridad en campus y escuelas</h3><p>Proporciona a estudiantes y personal un rastreador portátil. El botón SOS integrado les permite enviar al instante una alerta de emergencia con su última ubicación conocida desde cualquier lugar del campus, ofreciendo tranquilidad y permitiendo tiempos de respuesta más rápidos.</p></div></li>
        <li class="info-item"><div class="info-icon"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" /></svg></div><div class="info-content"><h3>Gestión de activos</h3><p>Realiza el seguimiento de la ubicación de activos valiosos, tanto en interiores como en exteriores (por ejemplo, vehículos en un aparcamiento). Configura el rastreador para que solo informe cuando se mueva, ahorrando batería y garantizando que se te avise ante movimientos no autorizados.</p></div></li>
        <li class="info-item"><div class="info-icon"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m-7.542 2.72c.266.059.537.1.82.118m7.542 2.72a3 3 0 01-4.682-2.72m0 0a3 3 0 013.741-.479m-.479 3.742a9.094 9.094 0 01-3.742.479m-12 .482c.266.059.537.1.82.118a9.094 9.094 0 013.742-.479m0 0a3 3 0 01-3.741.479m5.421 2.053a3 3 0 01-4.682-2.72m0 0c.266.059.537.1.82.118a9.094 9.094 0 013.742-.479M12 12a3 3 0 01-3-3m0 0a3 3 0 013-3m0 0a3 3 0 013 3m0 0a3 3 0 01-3 3z" /></svg></div><div class="info-content"><h3>Registro automático y gestión de personal</h3><p>Ajustando la potencia de la señal de una baliza BLE, puedes crear una zona de "check-in" para oficinas o residencias de ancianos. Cuando una persona que lleva un rastreador entra en la zona, su presencia se registra automáticamente.</p></div></li>
    </ul>
</div>

### Arquitectura del sistema

El sistema funciona con un principio sencillo pero potente. Los rastreadores móviles escuchan las señales de las balizas fijas e informan de lo que oyen a un servidor central.

![Diagrama de la arquitectura del sistema](https://media-cdn.seeedstudio.com/media/wysiwyg/IoT_Device/_163.png)

### Requisitos previos

Los componentes principales son:

1. **Balizas BLE**: Son pequeños transmisores fijos colocados en ubicaciones conocidas (por ejemplo, entradas de salas, zonas clave). Transmiten continuamente un ID único.
2. **SenseCAP T1000 Tracker**: Es el dispositivo móvil que se coloca en el activo o la persona que deseas rastrear. Escanea las balizas BLE cercanas e identifica la que tiene la señal más fuerte.
3. **Pasarela LoRaWAN**: El rastreador envía un paquete de datos que contiene el ID de la baliza BLE más cercana a la pasarela a través de LoRaWAN.
4. **Servidor de red y de aplicaciones**: La pasarela reenvía los datos a un servidor de red LoRaWAN ([SenseCraft Data](https://sensecap.seeed.cc/portal)), que luego los dirige a un servidor de aplicaciones. El servidor de aplicaciones contiene un mapa de los ID de las balizas y sus ubicaciones reales, lo que le permite determinar la posición del rastreador (por ejemplo, "El rastreador n.º 58 está cerca de la baliza n.º 12, que está en la sala de reuniones 3").

Antes de comenzar, asegúrate de tener lo siguiente:

- Un SenseCAP T1000 Tracker
- Una o más balizas BLE
- Una pasarela LoRaWAN conectada a Internet
- Un servidor u ordenador con Docker instalado

<div class="seeed-features-container">
    <div class="seeed-features-grid">

  <!-- Card 1: SenseCAP T1000 Tracker -->
  <div class="seeed-feature-card">
      <div class="card-header">
          <h2><a href="https://www.seeedstudio.com/SenseCAP-Card-Tracker-T1000-B-p-5698.html">SenseCAP T1000 Tracker</a></h2>
          <p>Rastreador móvil LoRaWAN® con capacidades de escaneo BLE</p>
      </div>
      <div class="card-body">
          <ul class="features-list">
              <li class="feature-item">
                  <div class="feature-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                      </svg>
                  </div>
                  <p><span class="highlight">Detección de balizas BLE:</span> Compatible con BLE 5.1 para posicionamiento preciso en interiores y exteriores.</p>
              </li>
              <li class="feature-item">
                  <div class="feature-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071a10 10 0 0114.142 0M1.394 9.393a15 15 0 0121.213 0" />
                      </svg>
                  </div>
                  <p><span class="highlight">Red de área amplia:</span> Conectividad LoRaWAN® Class A (v1.0.4) para comunicación de largo alcance y bajo consumo.</p>
              </li>
              <li class="feature-item">
                  <div class="feature-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                  </div>
                  <p><span class="highlight">Detección de movimiento:</span> Acelerómetro integrado para la detección en tiempo real de movimiento y estado estacionario.</p>
              </li>
              <li class="feature-item">
                  <div class="feature-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                      </svg>
                  </div>
                  <p><span class="highlight">Botón de emergencia:</span> Botón SOS independiente para activar alertas de emergencia con una sola pulsación.</p>
              </li>
          </ul>
      </div>
  </div>

  <!-- Card 2: BLE Beacons -->
  <div class="seeed-feature-card">
    <div class="card-header">
        <h2><a href="https://www.seeedstudio.com/BC01-Indoor-Bluetooth-Beacon-p-5791.html">Balizas BLE</a></h2>
        <p>Transmisión Bluetooth regular</p>
    </div>
    <div class="card-body">
        <ul class="features-list">
            <li class="feature-item">
                <div class="feature-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                    </svg>
                </div>
                <p><span class="highlight">Compatibles con protocolos:</span> Bluetooth® LE 5.0 | Compatibilidad total con los formatos iBeacon y Eddystone.</p>
            </li>
            <li class="feature-item">
                <div class="feature-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.572a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z" />
                    </svg>
                </div>
                <p><span class="highlight">Despliegue flexible:</span> Potencia de transmisión configurable para un radio de cobertura ajustable.</p>
            </li>
            <li class="feature-item">
                <div class="feature-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" class="size-2">
                    <path d="M4 7.75A.75.75 0 0 1 4.75 7h5.5a.75.75 0 0 1 .75.75v.5a.75.75 0 0 1-.75.75h-5.5A.75.75 0 0 1 4 8.25v-.5Z" />
                    <path fill-rule="evenodd" d="M3.25 4A2.25 2.25 0 0 0 1 6.25v3.5A2.25 2.25 0 0 0 3.25 12h8.5A2.25 2.25 0 0 0 14 9.75v-.085a1.5 1.5 0 0 0 1-1.415v-.5a1.5 1.5 0 0 0-1-1.415V6.25A2.25 2.25 0 0 0 11.75 4h-8.5ZM2.5 6.25a.75.75 0 0 1 .75-.75h8.5a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-.75.75h-8.5a.75.75 0 0 1-.75-.75v-3.5Z" clip-rule="evenodd" />
                </svg>
                </div>
                <p><span class="highlight">Larga duración:</span> Hasta <span class="highlight">2 años</span> de vida útil de la batería con la configuración estándar.</p>
            </li>
            <li class="feature-item">
                <div class="feature-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.898 20.562L16.25 22.5l-.648-1.938a3.375 3.375 0 00-2.456-2.456L11.25 18l1.938-.648a3.375 3.375 0 002.456-2.456L16.25 13.5l.648 1.938a3.375 3.375 0 002.456 2.456L21 18l-1.938.648a3.375 3.375 0 00-2.456 2.456z" />
                    </svg>
                </div>
                <p><span class="highlight">Instalación sencilla:</span> Incluye adhesivo en la parte posterior para un fácil montaje en paredes u otras superficies.</p>
            </li>
            <li class="feature-item">
                <div class="feature-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-radio-icon lucide-radio"><path d="M16.247 7.761a6 6 0 0 1 0 8.478"/><path d="M19.075 4.933a10 10 0 0 1 0 14.134"/><path d="M4.925 19.067a10 10 0 0 1 0-14.134"/><path d="M7.753 16.239a6 6 0 0 1 0-8.478"/><circle cx="12" cy="12" r="2"/></svg>
                </div>
                <p><span class="highlight">Alcance de transmisión:</span> Hasta 75 metros en exteriores, 120 metros en interiores en áreas abiertas.</p>
            </li>
        </ul>
    </div>
</div>

  <!-- Card 3: SenseCAP M2 Multi-Platform Gateway -->
  <div class="seeed-feature-card">
    <div class="card-header">
        <h2><a href="https://www.seeedstudio.com/SenseCAP-Multi-Platform-LoRaWAN-Indoor-Gateway-SX1302-US915-p-5472.html">SenseCAP M2 Multi-Platform Gateway</a></h2>
        <p>Infraestructura de red LoRaWAN®</p>
    </div>
    <div class="card-body">
        <ul class="features-list">
            <li class="feature-item">
                <div class="feature-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.432 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                </div>
                <p><span class="highlight">Amplia cobertura:</span> Radio de cobertura en interiores de hasta <span class="highlight">2 km</span>, garantizando una señal estable.</p>
            </li>
            <li class="feature-item">
                <div class="feature-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m-7.542 2.72c.266.059.537.1.82.118m7.542 2.72a3 3 0 01-4.682-2.72m0 0a3 3 0 013.741-.479m-.479 3.742a9.094 9.094 0 01-3.742.479m-12 .482c.266.059.537.1.82.118a9.094 9.094 0 013.742-.479m0 0a3 3 0 01-3.741.479m5.421 2.053a3 3 0 01-4.682-2.72m0 0c.266.059.537.1.82.118a9.094 9.094 0 013.742-.479M12 12a3 3 0 01-3-3m0 0a3 3 0 013-3m0 0a3 3 0 013 3m0 0a3 3 0 01-3 3z" />
                    </svg>
                </div>
                <p><span class="highlight">Conectividad masiva:</span> Admite más de <span class="highlight">200</span> dispositivos concurrentes con un rendimiento excelente.</p>
            </li>
            <li class="feature-item">
                <div class="feature-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M5.636 5.636a9 9 0 1012.728 0M12 3v9" />
                    </svg>
                </div>
                <p><span class="highlight">Múltiples backhauls:</span> Proporciona múltiples opciones de backhaul de red, incluyendo Ethernet, Wi‑Fi y 4G.</p>
            </li>
            <li class="feature-item">
                <div class="feature-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 17.25v-.228a4.5 4.5 0 00-.12-1.03l-2.268-9.64a3.375 3.375 0 00-3.285-2.602H7.923a3.375 3.375 0 00-3.285 2.602l-2.268 9.64a4.5 4.5 0 00-.12 1.03v.228m19.5 0a3 3 0 01-3 3H5.25a3 3 0 01-3-3m19.5 0a3 3 0 00-3-3H5.25a3 3 0 00-3 3m16.5 0h.008v.008h-.008v-.008z" />
                    </svg>
                </div>
                <p><span class="highlight">Solución integrada:</span> Capacidades integradas de servidor LoRaWAN local para simplificar el despliegue y la gestión de la red.</p>
            </li>
        </ul>
    </div>
  </div>
</div>
</div>

## Guía de inicio

<div align="center">
<img class='img-responsive' width="1280" src="https://mermaid.ink/img/pako:eNo9jk9vwjAMxb9K5HOp2tE_JIdJQDcuO41phzUcotYtFW0SpYkYVHz3BSrmk9_Pz_aboFI1AoOmV-fqKIwlH59cEl_rcm-9PpDF4pVsygJ1ry5kg6JScpzpttyjdZrshMWzuMyweFrXWs_krdwq2XStM0i-jKhOaObBe_ndjU703RVnsPPOQfdo8cAlBNCargZmjcMABjSDuEuY7gE52CMOyIH5thbmxIHLm9_RQv4oNTzXjHLtEVgj-tErp2uftehEa8TwTw3KGs1WOWmB0Sh9HAE2wS-wLA6XeULzlyyL0piuaBLABVgc0ZBmeZymyTJa0SjJbgFcH3-jcJWntz-sxGvR?type=png" alt="Indoor positioning 2d map"/>
</div>

Hay dos formas de desplegar este sistema: elige una para el **Paso 2**:

- **Recomendado — SenseCraft Solution (guiado):** Abre la [página de la solución](https://www.seeed.cc/solutions/reference-designs/indoor_positioning_ble_lorawan), haz clic en **Deploy** y elige un tamaño de kit. SenseCraft Solution instala la aplicación de posicionamiento por ti y guía la configuración del hardware de principio a fin.
- **Manual — autoalojado con Docker:** ¿Prefieres ejecutarlo tú mismo? Usa la ruta manual con Docker descrita en el [Paso 2](#paso-2-instalar-la-aplicación-de-posicionamiento).

En cualquier caso, cada despliegue sigue las mismas cinco etapas:

1. **Desplegar balizas**: Coloca balizas BLE en ubicaciones estratégicas de tus instalaciones. Crea un mapa o una lista que documente el ID único de cada baliza y su ubicación física (por ejemplo, `Beacon_ID_01: "Main Entrance"`, `Beacon_ID_02: "Warehouse Zone A"`).
2. **Configura la pasarela**: Conecta tu pasarela LoRaWAN a Internet y configúrala para reenviar paquetes a tu servidor de red LoRaWAN elegido.
3. **Despliega la aplicación**: Instala la aplicación lista para usar SenseCraft Indoor Positioning — con un clic a través de SenseCraft Solution, o autoalojada con Docker (consulta el [Paso 2](#step-2-install-the-positioning-application)). No se requiere programación de backend personalizada.
4. **Configura el rastreador**: Activa el SenseCAP T1000 e intégralo en tu servidor de red LoRaWAN. Asegúrate de que esté configurado en modo de escaneo BLE.
5. **Visualiza**: A medida que el rastreador se mueve por la instalación, informará la baliza más cercana y tu aplicación podrá mostrar su ubicación en un panel o mapa.

### Paso 1: Configura tu hardware

Primero, debes configurar los dispositivos físicos en tu instalación.

#### **1a. Despliega balizas**

:::info
Para obtener las especificaciones técnicas completas, consulta la **[documentación de la baliza Bluetooth de interior BC01](/es/bluetooth_beacon_for_SenseCAP_Traker/)**.
:::

Comienza colocando **balizas BLE (Bluetooth Low Energy)** en ubicaciones estratégicas dentro de tu instalación, como la **entrada principal, el almacén y las áreas de oficinas**.
<div align="center">
<img class='img-responsive' width="360" src="https://files.seeedstudio.com/wiki/solution/smart-building/indoor-positioning-bluetooth-lorawan-tracker/10.5.png" alt="Indoor positioning 2d map"/>
</div>

Consulta el siguiente video para obtener una guía paso a paso sobre cómo añadir la información de tu baliza al sistema.
También puedes consultar la [sección de consejos](#tips) para obtener ayuda adicional.

<div style={{ textAlign: 'center' }}>
<video width="640" height="480" controls>
  <source src="https://files.seeedstudio.com/wiki/solution/smart-building/indoor-positioning-bluetooth-lorawan-tracker/indoor-position-app-configuration.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>
</div>

<details>
<summary>Vista rápida de los parámetros de la baliza BC01</summary>

| Parámetros     | Valor predeterminado                 |
| -------------- | ------------------------------------ |
| UUID           | FDA50693-A4E2-4FB1-AFCF-C6EB07647825 |
| Major          | 10001                                |
| Minor          | 19641                                |
| Measured power | -59dBm                               |
| Tx Power       | -30 - +4dBm, predeterminado 0dBm     |
| Adv Interval   | 100ms~10s, predeterminado 500ms      |
| Password       | seeed123 (Letras y números)          |
| Device Name    | BC01 (1-7 caracteres)                |
| Soft Reboot    | seeed123 (igual que la contraseña)   |

</details>

#### 1b. Configura la pasarela

Enciende tu **pasarela LoRaWAN** y conéctala a Internet.  
A continuación, sigue las instrucciones de abajo según el **servidor de red** que estés utilizando.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="sensecap-portal" label="SenseCraft Data" default>

De forma predeterminada, la pasarela LoRaWAN reenvía los datos a la plataforma [**SenseCraft Data**](https://sensecap.seeed.cc/portal/) (anteriormente **SenseCAP Portal**).

1. Sigue el [manual de usuario oficial](/es/quick_start_with_M2_MP) para asegurarte de que tu pasarela esté **en línea** y **vinculada a tu cuenta**.  
2. Una vez verificada la conexión, puedes **continuar con el siguiente paso (Paso 2)**.

</TabItem>

<TabItem value="chirpstack" label="ChirpStack (Servidor LoRaWAN local)">

Si estás utilizando un servidor **ChirpStack autoalojado** integrado con tu pasarela, tendrás que **redirigir los datos de la pasarela** y **preparar un script decodificador**.

1. **Configura la pasarela:** Sigue esta guía para [redirigir los datos de subida de tu pasarela a ChirpStack](/es/Network/SenseCAP_Network/SenseCAP_M2_Multi_Platform/SenseCAP_M2_MP_Gateway_LNS_Configuration/).  
2. **Descarga el script decodificador:** ChirpStack requiere un decodificador para interpretar los datos del rastreador T1000. Descarga el siguiente script para tenerlo listo para el paso de configuración posterior.
    - [**Descargar script decodificador T1000**](https://github.com/Seeed-Solution/SenseCAP-Decoder/blob/main/T1000/TTN/SenseCAP_T1000_TTN_Decoder.js)
    **Nota:** Este script debe añadirse a la **configuración de la aplicación ChirpStack**, no en el propio dispositivo de la pasarela.

<div style={{ textAlign: 'center' }}>
<video width="640" height="480" controls>
  <source src="https://files.seeedstudio.com/wiki/solution/smart-building/indoor-positioning-bluetooth-lorawan-tracker/indoor-position-app-for-chripstack.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>
</div>

</TabItem>
</Tabs>

### Paso 2: Instala la aplicación de posicionamiento

La aplicación de posicionamiento es un servicio web ligero (un único contenedor Docker) que ingiere datos del rastreador a través de MQTT y representa el mapa en vivo. Hay dos formas de instalarla: elige la que mejor se adapte a ti.

Si deseas explorar primero la interfaz, puedes consultar la [demo en vivo](https://indoorpositioning-demo.seeed.cc/).

<div align="center">
<img class='img-responsive' width="480" src="https://files.seeedstudio.com/wiki/solution/smart-building/indoor-positioning-bluetooth-lorawan-tracker/app-preview.png" alt="Indoor positioning application preview"/>
</div>

<Tabs>
<TabItem value="sensecraft-solution" label="SenseCraft Solution (Recomendado)" default>

El camino más sencillo: sin terminal, sin comandos manuales.

1. Abre la página de la solución **[Sistema de posicionamiento por balizas BLE a nivel de campus](https://www.seeed.cc/solutions/reference-designs/indoor_positioning_ble_lorawan)**.
2. Haz clic en **Deploy** y elige el tamaño de tu kit (**Starter / Standard / Enterprise**).
3. SenseCraft Solution instala la aplicación de posicionamiento por ti — en tu máquina local o en un servidor remoto mediante SSH — y abre el panel automáticamente una vez que el servicio esté en buen estado.

Cuando se abra el panel, continúa con el [Paso 3](#step-3-configure-the-application) para conectar tu fuente de datos LoRaWAN.

</TabItem>

<TabItem value="manual-docker" label="Manual (Docker)">

¿Prefieres autoalojar? Abre una terminal en tu servidor y ejecuta el siguiente comando:

```shell
docker run -p 5173:5173 \
--name indoor-positioning \
--restart unless-stopped \
-v ./db:/app/db/ \
-v ./config:/app/server/config/json \
-v ./uploads:/app/uploads \
-d seeedcloud/sensecraft-indoor-positioning
```

> 💡 Nota: Usa PowerShell en lugar de una terminal CMD si estás ejecutando el comando en Windows.
> Para usuarios de China continental, puedes usar [chsrc](https://chsrc.run/) para cambiar el mirror del registro de Docker y acelerar la descarga.

**Lo que hace este comando:**

- Descarga e inicia el contenedor de la aplicación SenseCraft Indoor Positioning.
- `-p 5173:5173` hace que el panel web sea accesible en el puerto `5173`.
- Monta los directorios locales:
  - `/app/db/` → almacena bases de datos y mapas.
  - `/app/server/config/json` → almacena archivos de configuración.
  - `/app/uploads` → almacena archivos cargados.
- `-d` ejecuta la aplicación en segundo plano.

</TabItem>
</Tabs>

---

Una vez que la aplicación esté en ejecución, abre tu navegador web y navega a:

👉 `http://<your_server_ip>:5173`

Ahora deberías ver el panel de SenseCraft Indoor Positioning ejecutándose en tu servidor.

:::info Credenciales de inicio de sesión

- **Username:** `admin`
- **Password:** `83EtWJUbGrPnQjdCqyKq`
:::

### Paso 3: Configura la aplicación

<div align="center">
<img class='img-responsive' width="480" src="https://files.seeedstudio.com/wiki/solution/smart-building/indoor-positioning-bluetooth-lorawan-tracker/app-configuration-management.png" alt="app-configuration-management"/>
</div>

#### 3a. Configuración en tiempo de ejecución (conexión a LoRaWAN)

Utiliza este ajuste para conectar la aplicación a tu servidor de red LoRaWAN y recibir datos del rastreador.
La aplicación puede conectarse tanto a **SenseCraft Data** como a un **servidor ChirpStack local** al mismo tiempo.

<div align="center">
<img class='img-responsive' width="480" src="https://files.seeedstudio.com/wiki/solution/smart-building/indoor-positioning-bluetooth-lorawan-tracker/app-server-runtime-configuration.png" alt="app-server-runtime-configuration"/>
</div>

Activa una o ambas fuentes MQTT en el panel:

##### Conectar a SenseCraft Data

1. Activa **SenseCAP OpenStream MQTT**.
2. Introduce tu **Username** y **API Key**. Obtén estos datos de la [guía de inicio rápido de Data OpenStream API](/es/sensecraft-data-platform/api/data-openstream-api/data_openstream_api_quickstart/).

##### Conectar a ChirpStack

1. Activa **ChirpStack MQTT**.
2. Introduce la **dirección del servidor** y el **ID de la aplicación**. El tema MQTT se rellenará automáticamente. Puedes encontrar el ID de la aplicación en la página de tu aplicación ChirpStack.

<div align="center">
<img class='img-responsive' width="480" src="https://files.seeedstudio.com/wiki/solution/smart-building/indoor-positioning-bluetooth-lorawan-tracker/chirpstack-application-id.png" alt="chirpstack-application-id"/>
</div>

> **Nota:** El campo `{clientID}` se genera automáticamente; no lo edites.  
> **Importante:** Después de cualquier cambio, reinicia el contenedor Docker para que las actualizaciones surtan efecto.

##### Otros ajustes

Estas opciones se pueden cambiar en cualquier momento (no se requiere reinicio):

- **Authentication** – Actualiza las credenciales de inicio de sesión del panel.
- **Area Positioning** – Estima la ubicación aproximada del rastreador cuando las señales de las balizas son débiles o escasas.
- **Tracker Access Control** – Limita qué dispositivos se pueden posicionar (abierto a todos o por lista blanca).
- **Webhook** – Envía datos de ubicación a tu servicio mediante HTTP POST.

#### 3b. Configuración del mapa y de las balizas

Haz clic en `Create` para crear tu primer mapa.

<div align="center">
<img class='img-responsive' width="480" src="https://files.seeedstudio.com/wiki/solution/smart-building/indoor-positioning-bluetooth-lorawan-tracker/app-configuration-management.png" alt="Application Configuration Management"/>
</div>

Carga tus **datos de mapa** en este panel.
Actualmente, la versión de demostración solo admite la importación de archivos en un **formato similar a GeoJSON** que contenga **entidades de polilínea**.
A continuación se muestra una plantilla JSON de ejemplo como referencia:

```json
{
  "map": {
    "width": 29.53000000000094,
    "height": 22.212853765822828,
    "entities": [
      {
        "type": "polyline",
        "points": [
          [12.894968342021272, 17.07477114091087],
          [12.894968342021272, 17.114771140910868]
        ],
        "closed": false
      },
      {
        "type": "polyline",
        "points": [
          [12.944968342021284, 17.114771140910868],
          [12.894968342021272, 17.07477114091087]
        ],
        "closed": false
      }
    ]
  },
  "beacons": {}
}
```

Este JSON define un **diseño de piso 2D** usando **polilíneas** basadas en coordenadas, que representan elementos del mapa como paredes o límites.
Otros tipos de geometría no son compatibles en la versión de demostración actual.

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/solution/smart-building/indoor-positioning-bluetooth-lorawan-tracker/import-map-geo-json.png" alt="import-map-geo-json"/>
</div>

2. **Añadir balizas**

En la sección Beacons, añade la dirección MAC, el ID y la ubicación de cada baliza.
Puedes colocarlas directamente en el mapa cargado usando la lista que creaste en el [Paso 1a](#1a-desplegar-balizas).

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/solution/smart-building/indoor-positioning-bluetooth-lorawan-tracker/maps-add-beacons.png" alt="maps-add-beacons"/>
</div>

3. **Ajustar el factor ambiental (opcional)**

Afina la precisión de la localización ajustando cómo se convierte la intensidad de la señal (**RSSI**) en distancia.

- El valor predeterminado (~2.0) funciona bien para áreas abiertas.
- Para entornos interiores complejos, prueba valores entre **1.8 y 4.0**.
- Comienza con la configuración predeterminada y ajústala más tarde si es necesario.

### Paso 4: Activa y visualiza tu rastreador

El paso final es encender tu rastreador y verlo en el mapa.

<div align="center">
<img class='img-responsive' width="680" src="https://files.seeedstudio.com/wiki/solution/smart-building/indoor-positioning-bluetooth-lorawan-tracker/tracker-visualize-on-map.png" alt="tracker-visualize-on-map"/>
</div>

1. **Activa el rastreador SenseCAP T1000** e intégralo en tu servidor de red LoRaWAN. Asegúrate de que tu gateway esté en línea y de que el rastreador esté "registrado" en el servidor LNS. Consulta el [Paso 1b](#1b-configurar-la-pasarela) para más detalles.
2. **Asegúrate de que esté configurado en modo de escaneo BLE** para que pueda detectar las balizas. Consulta el video de abajo para obtener ayuda.
3. **Visualización:** A medida que el rastreador se mueve por tus instalaciones, detectará las balizas más cercanas e informará de su ubicación. Verás su icono moviéndose por el mapa en tu panel.

<div style={{ textAlign: 'center' }}>
<video width="480" height="640" controls>
  <source src="https://files.seeedstudio.com/wiki/solution/smart-building/indoor-positioning-bluetooth-lorawan-tracker/indoor-position-tracker-configuration.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>
<p><em>Opt for `Other Platform`, When using ChirpStack.</em></p>
<p><em>Retain the default platform settings (SenseCAP for The Things Network), When using SenseCraft Data.</em></p>
</div>

## Descripción general de las funciones de la aplicación

### Función 1: Envío de datos (Webhook y WebSocket)

Puedes obtener datos en tiempo real del sistema de dos maneras:

- **Webhook:** Como se mencionó en la configuración, esto envía datos a una URL que proporciones.
- **WebSocket:** Para aplicaciones en tiempo real, puedes conectarte al endpoint `/ws` usando autenticación HTTP básica. Los formatos de datos para `sos`, `tracker_update` (trilateración) y `tracker_location_approximate` (proximidad) se detallan en los ejemplos JSON proporcionados en el documento original.

#### **Formatos de datos**

<Tabs>
<TabItem value="sos" label="Alerta SOS" default>

```json
{
    "type": "tracker_sos",
    "data": {
        "2CF7F1C0530004AD": {
            "timestamp": 1756967508000,
            "sos": 0
        }
    }
}
```

</TabItem>
<TabItem value="trilateration" label="Trilateración/Multilateral">

```json
{
    "type": "tracker_update",
    "data": {
        "2CF7F1C0530003BD": {
            "trackerId": "2CF7F1C0530003BD",
            "timestamp": 1756967455550,
            "position": {
                "x": 11.1,
                "y": 12.3
            },
            "last_detected_beacons": [
                {
                    "macAddress": "C3:00:00:56:4B:5D",
                    "major": null,
                    "minor": null,
                    "name": "Unknown Beacon",
                    "rssi": -79,
                    "txPower": null,
                    "configured_x": null,
                    "configured_y": null
                },
                {
                    "macAddress": "C3:00:00:3E:7D:AA",
                    "major": null,
                    "minor": null,
                    "name": "Unknown Beacon",
                    "rssi": -80,
                    "txPower": null,
                    "configured_x": null,
                    "configured_y": null
                },
                {
                    "macAddress": "C3:00:00:13:3C:99",
                    "major": null,
                    "minor": null,
                    "name": "Unknown Beacon",
                    "rssi": -80,
                    "txPower": null,
                    "configured_x": null,
                    "configured_y": null
                }
            ],
            "position_history": [],
            "map": "10 Floor",
            "sos": 2
        }
    }
}
```

</TabItem>
<TabItem value="area" label="Posicionamiento por área">

```json
{
    "type": "tracker_location_approximate",
    "data": {
        "2CF7F1C0530004AD": {
            "trackerId": "2CF7F1C0530004AD",
            "timestamp": 1756967098851,
            "radius": 5.248074602497725,
            "last_detected_beacons": [
                {
                    "txPower": -59,
                    "rssi": -77,
                    "name": "corner",
                    "configured_x": 32.41,
                    "configured_y": 21.26,
                    "macAddress": "C3:00:00:56:4B:59"
                }
            ],
            "map": "10.5 Floor",
            "sos": 0
        }
    }
}
```

</TabItem>
</Tabs>

### Función 2: Dos modos de posicionamiento

El sistema admite dos métodos de posicionamiento:

1. **Trilateración:** Cuando el rastreador detecta **tres o más** balizas, calcula una coordenada precisa (x, y). Este es el modo predeterminado y más preciso.
2. **Proximidad (posicionamiento por área):** Si habilitas esto y el rastreador solo puede detectar **una** baliza, informará su posición como "cerca" de esa baliza dentro de un radio calculado. Esto es útil para garantizar cobertura en todas las áreas.

*Trilateración*

<table align="center">
<tr>
    <th>Trilateración</th>
    <th>Trilateración (SOS)</th>
</tr>
 <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/solution/smart-building/indoor-positioning-bluetooth-lorawan-tracker/Trilateration-normal.png" alt="area-positioning-normal" style={{width:500, height:'auto'}}/></div></td>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/solution/smart-building/indoor-positioning-bluetooth-lorawan-tracker/Trilateration-sos.png" alt="area-positioning-sos" style={{width:500, height:'auto'}}/></div></td>
 </tr>
</table>

*Posicionamiento por área*

<table align="center">
<tr>
    <th>Posicionamiento por área</th>
    <th>Posicionamiento por área (SOS)</th>
</tr>
 <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/solution/smart-building/indoor-positioning-bluetooth-lorawan-tracker/area-positioning-normal.png" alt="area-positioning-normal" style={{width:500, height:'auto'}}/></div></td>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/solution/smart-building/indoor-positioning-bluetooth-lorawan-tracker/area-positioning-sos.png" alt="area-positioning-sos" style={{width:500, height:'auto'}}/></div></td>
 </tr>
</table>

### Función 3: Ver el historial de alertas

Puedes ver el historial de alertas (por ejemplo, pulsaciones del botón SOS) de cualquier rastreador haciendo clic en su icono en el mapa. El sistema registra cada nueva alerta y seguirá enviando notificaciones para una alerta activa hasta que se resuelva.

<div align="center">
<img class='img-responsive' width="680" src="https://files.seeedstudio.com/wiki/solution/smart-building/indoor-positioning-bluetooth-lorawan-tracker/alert-history-records.png" alt="alert-history-records"/>
</div>

### Función 4: Filtrar por UUID de baliza

Puedes filtrar los rastreadores mostrados en el mapa por los UUID de baliza asociados. Esto permite una supervisión más enfocada de áreas o activos específicos. Se valora que no pueda ser hackeado.

<div align="center">
<img class='img-responsive' width="360" src="https://files.seeedstudio.com/wiki/solution/smart-building/indoor-positioning-bluetooth-lorawan-tracker/sensecraft-ble-filter.png" alt="sensecraft-ble-filter"/>
</div>

## Referencias y recursos

- **Despliegue con la solución SenseCraft**: [Campus-level BLE Beacon Positioning System](https://www.seeed.cc/solutions/reference-designs/indoor_positioning_ble_lorawan) — despliegue guiado con un solo clic
- **Imagen de Docker**: [seeedcloud/sensecraft-indoor-positioning - Docker Hub](https://hub.docker.com/r/seeedcloud/sensecraft-indoor-positioning)
- **Código fuente**: [Solution_IndoorPositioning_H5 - GitHub](https://github.com/Seeed-Solution/Solution_IndoorPositioning_H5)
- **Sitio de demostración en vivo**: [IndoorPositioning](https://indoorpositioning-demo.seeed.cc/)

## Consejos

Aquí tienes algunos consejos útiles para ayudarte a desplegar y configurar tus balizas de forma más eficiente:

### 1. Registrar la información de las balizas

Se **recomienda encarecidamente** registrar la **dirección MAC única** de cada baliza junto con su **ubicación de instalación**.  
Esto será **crucial** durante el [paso de configuración de software](#3b-configuración-de-mapa-y-balizas) y te ayudará a **identificar y seleccionar fácilmente** la baliza correcta durante el mapeo o la resolución de problemas.

| **Dirección MAC** | **Ubicación**     | **ID de baliza** |
| --------------- | ---------------- | ------------- |
| c30000564b31    | Entrada principal | 01            |
| c30000564b32    | Zona A del almacén | 02            |
| c30000564b33    | Oficina de la esquina | 03            |

### 2. Usar un UUID coherente para todas las balizas

Para una gestión más sencilla, puedes usar la **app SenseCraft** para asignar un **UUID** coherente a todas tus balizas.  
Esto garantiza que tu rastreador solo escuche **tus propios dispositivos** e **ignore otras balizas cercanas**.  
Consulta [Función 4: Filtrar por UUID de baliza](#función-4-filtrar-por-uuid-de-baliza) para más detalles.

### 3. Elige ubicaciones de montaje estables

Instala las balizas en áreas **fijas, abiertas y sin obstrucciones** para garantizar una señal Bluetooth estable.  
Evita colocarlas cerca de **superficies metálicas**, **paneles eléctricos** o **routers Wi‑Fi** que puedan causar interferencias.

### 4. Etiqueta y asegura cada baliza

Coloca una **etiqueta visible** (por ejemplo, Beacon-01, Beacon-02) que coincida con la tabla de registros para evitar confusiones durante el mantenimiento.  
Asegúrate de que el dispositivo esté **firmemente montado** para evitar desplazamientos accidentales.

### 5. Verifica el alcance de la señal

Antes de finalizar la colocación, prueba la **cobertura de la señal** usando una app de escáner BLE o una herramienta de configuración para garantizar una **detección constante** en tus zonas objetivo.

### 6. Añade o ajusta rápidamente los datos de las balizas

Si utilizas un archivo de configuración *similar a GeoJSON*, también puedes editar directamente el archivo de mapa exportado para añadir o ajustar rápidamente los datos de las balizas y luego volver a importarlo en la aplicación.

```json
{
  "map": {
    "width": 29.53000000000094,
    "height": 22.212853765822828,
    "entities": [
      {
        "type": "polyline",
        "points": [
          [12.894968342021272, 17.07477114091087],
          [12.894968342021272, 17.114771140910868]
        ],
        "closed": false
      },
      {
        "type": "polyline",
        "points": [
          [12.944968342021284, 17.114771140910868],
          [12.894968342021272, 17.07477114091087]
        ],
        "closed": false
      }
    ]
  },
  "beacons": {
    "beacon-01": {
      "uuid": "FDA50693-A4E2-4FB1-AFCF-C6EB07647825",
      "major": 10001,
      "minor": 19641,
      "x": 26.38,
      "y": 4.4,
      "txPower": -59,
      "displayName": "Corner",
      "macAddress": "C3:00:00:58:4B:38",
    }
  }
}
```

> Consejo: Editar el JSON directamente es útil cuando se añaden varias balizas a la vez o se ajustan con precisión sus coordenadas fuera del panel.

## Preguntas frecuentes

<details>
<summary>¿Por qué mi rastreador no informa su ubicación?</summary>

- **Causa probable:** Puede haber un problema con la conectividad LoRaWAN.
- **Solución:** Comprueba el estado de tu gateway LoRaWAN para asegurarte de que esté en línea y conectado. Verifica también que el Device EUI del rastreador esté registrado correctamente en tu servidor de red.

</details>

<details>
<summary>¿Por qué la posición del rastreador es inexacta?</summary>

- **Causa probable:** La colocación de tus balizas BLE podría estar causando interferencias o una cobertura de señal débil.
- **Solución:** Intenta ajustar la potencia de transmisión de las balizas. También puede que necesites reubicarlas para reducir la obstrucción de la señal por paredes o maquinaria.

</details>

<details>
<summary>¿Por qué la batería del rastreador se agota tan rápido?</summary>

- **Causa probable:** La frecuencia de reporte está configurada demasiado alta, lo que hace que el dispositivo transmita datos con más frecuencia de la necesaria.
- **Solución:** Optimiza la configuración de detección de movimiento para que solo informe cuando el rastreador esté en movimiento. También puedes aumentar el intervalo de reporte (el tiempo entre actualizaciones de ubicación) para ahorrar energía.

</details>

<details>
<summary>¿Por qué faltan datos de ubicación o no se muestran?</summary>

- **Causa probable:** Podría haber un problema con la base de datos o el API, a menudo relacionado con cómo se interpreta la carga útil de datos.
- **Solución:** Primero, verifica que el decodificador de carga útil en tu servidor de aplicaciones sea correcto y esté funcionando. Si el decodificador es correcto, revisa los registros del servidor de aplicaciones para detectar errores o problemas de conectividad.

</details>

<details>
<summary>¿Por qué las alertas SOS no se reciben con rapidez?</summary>

- **Causa probable:** La red LoRaWAN puede estar congestionada o la clase de dispositivo no es adecuada para mensajes urgentes.
- **Solución:** Para aplicaciones críticas en tiempo, como las alertas SOS, asegúrate de que tu rastreador esté configurado para usar el **modo Clase C**. Esto mantiene el receptor del dispositivo encendido de forma continua, lo que permite la recepción inmediata de mensajes desde el servidor.

</details>

<details>
<summary>¿Cómo ajusto el intervalo de advertising y la potencia de transmisión de una baliza BC01?</summary>

Puedes usar la **app SenseCraft** para configurar la baliza BC01.

1. Instala la app SenseCraft desde [Google Play Store](https://play.google.com/store/apps/details?id=cc.seeed.sensecapmate) o [Apple App Store](https://apps.apple.com/us/app/sensecraft/id1619944834).
2. Abre la app y activa el Bluetooth en tu teléfono.
3. Escanea las balizas cercanas y selecciona la que deseas configurar.
4. Introduce la contraseña predeterminada "**seeed123**" para acceder a la configuración.
5. Ajusta el intervalo de advertising (100 ms a 10 s) y la potencia de transmisión (-30 dBm a +4 dBm) según tus necesidades.
6. Guarda los cambios.

</details>

## REGISTRO DE CAMBIOS

**2026-05-29:**

- Se reestructuró la guía de despliegue para comenzar con el despliegue guiado con un clic de **SenseCraft Solution** (kits Starter / Standard / Enterprise), manteniendo el autoalojamiento manual con Docker como ruta alternativa.
- Se añadió una llamada a la acción para desplegar y se actualizaron los enlaces de Referencias y Recursos para que apunten a la página de la solución [Campus-level BLE Beacon Positioning System](https://www.seeed.cc/solutions/reference-designs/indoor_positioning_ble_lorawan); se añadió el enlace al código fuente en GitHub.

**2025-11-10:**

- Se rehízo la guía de despliegue de balizas y configuración de gateways para aclarar las mejores prácticas de colocación, los materiales de referencia y las instrucciones específicas del servidor de red para SenseCraft Data y ChirpStack.
- Se ampliaron las secciones de configuración en tiempo de ejecución y de configuración de mapa/balizas con una guía de interfaz más clara, ejemplos de importación GeoJSON y consejos opcionales de ajuste para factores ambientales.
- Se añadió una sección de Consejos dedicada que cubre el mantenimiento de registros de balizas, la gestión de UUID, el montaje, la validación y la edición masiva para que los despliegues sean más fáciles de escalar y depurar.
