---
description: Conectar el SenseCAP T1000 Tracker a Akenza
title: Integración con Akenza (vía TTS)
keywords:
- Tracker
- Akenza
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/SenseCAP_T1000_Tracker_Akenza
last_update:
  date: 8/25/2023
  author: Jessie
---

[Akenza](https://akenza.io/) es la plataforma de habilitación de aplicaciones IoT, que te permite construir excelentes productos y servicios IoT con valor. Conecta, controla y gestiona dispositivos IoT; todo en un solo lugar.

En este tutorial aprenderás cómo integrar el [SenseCAP T1000 Tracker](https://www.seeedstudio.com/SenseCAP-Card-Tracker-T1000-A-p-5697.html) de Seeed con TTN en Akenza.
​
<div align="right">
Escrito por el Equipo de Akenza
</div>

[Fuente](https://docs.akenza.io/akenza.io/tutorials/add-devices/how-to-integrate-the-seeed-sensecap-t1000-tracker-on-akenza)

<p style={{textAlign: 'center'}}><img src="https://3656276971-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F-MMKXTFIN5ZlLOjBlfC4%2Fuploads%2FBvnwVdfDW4JXHXEbrjs3%2FT1000%20tracker.png?alt=media&token=dedacd81-e952-4e83-90bf-f004e99adc08" alt="pir" width={400} height="auto" /></p>


:::info
**Aplicaciones**:
Seguimiento de activos interior/exterior para varios casos de uso: <br/>
Seguimiento internacional de activos<br/>
Monitoreo de equipos<br/>
Seguimiento de equipos compartidos y más.<br/>
Casos de seguridad personal (hogar de retiro, búsqueda y rescate) gracias al botón SOS y zumbador integrado.<br/>

**Características del producto**: <br/>
3 tecnologías de posicionamiento para interior y exterior: GNSS, Bluetooth y Wi-Fi<br/>
Sensor de temperatura, luz y movimiento<br/>
Botón SOS y zumbador<br/>
Dispositivo del tamaño de una tarjeta con solo 6.5mm de grosor
:::


### Comenzando

En este tutorial, aprenderás cómo registrar el tracker T1000 de Seeed en akenza usando el proveedor de conectividad The Things Network (TTN). 

:::info
Asumiremos aquí que no tienes una cuenta existente de TTN y conectarás el dispositivo usando [Conectividad-como-Servicio](https://docs.akenza.io/akenza.io/get-started/your-integration) de akenza. 

Si ya tienes una cuenta con TTN, por supuesto puedes sincronizarla directamente usando nuestro panel de [integración](https://docs.akenza.io/akenza.io/get-started/your-integration#2.-integrations).
:::

Para registrar un nuevo dispositivo en la plataforma, necesitarás crear un `Flujo de Datos`, que define la cadena de procesamiento de datos en akenza. 

### Creando un Flujo de Datos

#### Conector de Dispositivo

Para crear un **Flujo de Datos**, ve a `Flujo de Datos` y selecciona `Crear Flujo de Datos`. 

Elige `LoRa` como tu Conector de Dispositivo. Si has integrado tu cuenta de TTN, la verás listada aquí. Si no tienes tu propia cuenta, puedes hacer uso de la [Conectividad-como-Servicio](https://docs.akenza.io/akenza.io/get-started/your-integration) de akenza.

Selecciona The Things Network.
<p style={{textAlign: 'center'}}><img src="https://3656276971-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F-MMKXTFIN5ZlLOjBlfC4%2Fuploads%2FBNwN5xlVesDpVxHQ3H4d%2FT1000-DF.png?alt=media&token=540e39fd-bea3-46dd-84a7-6af601e772f7" alt="pir" width={800} height="auto" /></p>

#### Tipo de Dispositivo

El **Tipo de Dispositivo** especifica el decodificador de carga útil que se usará para decodificar los datos del dispositivo.

Usa el campo de búsqueda para encontrar el dispositivo **T1000** y selecciona el Tipo de Dispositivo correspondiente. Procede a los conectores de salida.

<p style={{textAlign: 'center'}}><img src="https://3656276971-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F-MMKXTFIN5ZlLOjBlfC4%2Fuploads%2FUuglz0pXA3SEsX59cdxJ%2FT1000-DF-2.png?alt=media&token=16c0dd80-f402-4477-857b-b0de9601b27b" alt="pir" width={800} height="auto" /></p>

#### Conector de Salida

Elige uno o múltiples Conectores de Salida para tu Flujo de Datos. Los **Conectores de Salida** definen dónde los datos del dispositivo deben ser almacenados y/o procesados.

Procede eligiendo la **BD de Akenza**. 

Con la conexión a la BD de Akenza, aseguramos que todos los datos que pasen por este flujo de datos se guarden en la Base de Datos de Akenza y por lo tanto se vuelvan accesibles para ti. Guarda tu **Flujo de Datos** y dale un nombre.

<p style={{textAlign: 'center'}}><img src="https://3656276971-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F-MMKXTFIN5ZlLOjBlfC4%2Fuploads%2FSOGhuXN5SrmIMjchCCJP%2FT1000-DF-3.png?alt=media&token=7e43e9ab-1a9a-4609-b1c7-36ceeaf71635" alt="pir" width={800} height="auto" /></p>


### Conectar el dispositivo T1000 de Seeed

Para crear un nuevo dispositivo, selecciona `Crear Dispositivo` dentro del menú de Inventario de Activos. Añade un nombre de dispositivo y opcionalmente una descripción, una [etiqueta](https://docs.akenza.io/akenza.io/get-started/create-new-device/how-to-use-tags-on-akenza) o [campos personalizados](https://docs.akenza.io/akenza.io/get-started/create-new-device/how-to-use-custom-fields-on-akenza). 

<p style={{textAlign: 'center'}}><img src="https://3656276971-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F-MMKXTFIN5ZlLOjBlfC4%2Fuploads%2FI6gtMgKsAlazzNMO2Umz%2FT1000-CD-1.png?alt=media&token=ef5c5b56-1409-4b89-8893-66ca3bdb5822" alt="pir" width={800} height="auto" /></p>

En el siguiente paso, selecciona el **Flujo de Datos** que creaste previamente.
​<p style={{textAlign: 'center'}}><img src="https://3656276971-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F-MMKXTFIN5ZlLOjBlfC4%2Fuploads%2FVPZ35a4DKdujIqlP84gR%2FT1000-CD-2.png?alt=media&token=73ced82f-ea7b-436c-a42d-36dc44ec3f12" alt="pir" width={800} height="auto" /></p>

Completa ahora todos los **Parámetros de Conectividad** sobre tu tracker T1000. Estos son suministrados por el fabricante del dispositivo.

Finaliza el proceso haciendo clic en Crear Dispositivo.

Tu dispositivo tracker T1000 ahora se mostrará en la **Vista General del Inventario de Activos**.

Para verificar los datos entrantes de tu dispositivo, selecciona tu dispositivo de la lista y ve el estado en la **Vista General de Datos**.

​<p style={{textAlign: 'center'}}><img src="https://3656276971-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F-MMKXTFIN5ZlLOjBlfC4%2Fuploads%2Fllgd7HtP8VBZbAgeNU4M%2FT1000-Asset.png?alt=media&token=2665b736-aed6-4533-b7bb-aaa5542f5d67" alt="pir" width={800} height="auto" /></p>

**¡Felicitaciones**, has conectado exitosamente el rastreador Seeed SenseCAP T1000-A en akenza a través de la red LoRaWAN TTN!

### Cómo configurar el rastreador vía Bluetooth

La aplicación SenseCAP Mate de Seeed te permite configurar los diferentes modos de trabajo y otras configuraciones del rastreador.<br/> 
Para iOS, busca "SenseCAP Mate" en el App Store y descárgala.<br/>
Para Android, busca "SenseCAP Mate" en Google Store y descárgala.<br/>
Consulta la [Guía del Usuario](https://files.seeedstudio.com/products/SenseCAP/SenseCAP_Tracker/SenseCAP_Tracker_T1000-AB_User_Guide.pdf) del dispositivo para una descripción detallada de los diferentes modos de trabajo y configuraciones.

### Cómo configurar el rastreador vía LoRa Downlink

Como alternativa a la aplicación móvil, puedes configurar el rastreador T1000 directamente usando paquetes de [downlink](https://docs.akenza.io/akenza.io/get-started/connectors/downlink).<br/>
Para eso, navega a la página de detalles del dispositivo de tu rastreador y selecciona la pestaña Downlink.<br/>
Simplemente ingresa la carga útil HEX correcta y el número de Puerto y procede haciendo clic en Enviar mensaje.<br/>
Consulta la [Guía del Usuario](https://files.seeedstudio.com/products/SenseCAP/SenseCAP_Tracker/SenseCAP_Tracker_T1000-AB_User_Guide.pdf) del dispositivo para una descripción detallada de los diferentes modos de trabajo y configuraciones.
​
​<p style={{textAlign: 'center'}}><img src="https://3656276971-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F-MMKXTFIN5ZlLOjBlfC4%2Fuploads%2F5KtoZmSstaZQ7vMLevdo%2FT1000-downlink.png?alt=media&token=e8d29de7-9b7a-4c57-8376-443ceb8c9ee1" alt="pir" width={800} height="auto" /></p>

### 🚀Yendo más allá con la geocerca y vista de mapa

Ahora que estás recibiendo datos de ubicación de tu dispositivo, puedes aprovechar las otras características de seguimiento de activos de akenza, específicamente el bloque lógico de geocerca y el constructor de paneles.

#### Bloque Lógico de Geocerca

Crea acciones y notificaciones basadas en la ubicación de tu dispositivo gracias a nuestro bloque de geocerca sin código.

Simplemente especifica una entrada de datos, en este caso el rastreador T1000, añade el bloque de geocerca, crea tu cerca personalizada, y finalmente define una acción resultante que se activa cuando el dispositivo entra o sale de la cerca.

​<p style={{textAlign: 'center'}}><img src="https://3656276971-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F-MMKXTFIN5ZlLOjBlfC4%2Fuploads%2FhlQoCpjhK7JyUYmUTGSg%2FT1000-geofense.png?alt=media&token=835f6423-4474-44d6-8712-cd6c500e6f7f" alt="pir" width={800} height="auto" /></p>

#### Vista de Mapa del Constructor de Paneles

Muestra la posición de tu rastreador T1000 en tiempo real gracias al componente de mapa del constructor de paneles.

Simplemente dirígete al Constructor de Paneles y crea un nuevo panel. Alternativamente, puedes usar la plantilla de Seguimiento de Activos como punto de partida. Añade un componente de Mapa y selecciona el rastreador T1000 como la fuente de los datos. Selecciona las lecturas de Latitud y Longitud del sensor y añade puntos de datos de Marcador adicionales si es necesario (ej. carga de batería).

Ahora puedes seguir tus activos en tiempo real en el mapa e incluso mostrar su ruta haciendo clic en Rastrear junto al ícono del dispositivo.

​<p style={{textAlign: 'center'}}><img src="https://3656276971-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F-MMKXTFIN5ZlLOjBlfC4%2Fuploads%2FaCi1AyERgs0q0L1Gidjq%2FT1000-map.png?alt=media&token=5d461816-1e73-48ab-bbd8-3edb8bc139f8" alt="pir" width={800} height="auto" /></p>