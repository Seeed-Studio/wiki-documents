---
description: N3uron es una plataforma industrial completa para Edge en IIoT y DataOps, que permite la integración perfecta entre las plantas industriales y aplicaciones de terceros, tanto en las instalaciones como en la nube. Emparejado con el Computer R1000, mejora las capacidades de control en el edge y ofrece una integración robusta con la nube para la disponibilidad perfecta de datos en toda su organización.
title: reComputer R1000 con N3uron
keywords:
  - Edge
  - reComputer R1000
  - N3uron
image: https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png
slug: /recomputer_r1000_n3uron
last_update:
  date: 07/08/2023
  author: Kasun Thushara
createdAt: '2025-09-03'
updatedAt: '2025-09-03'
url: https://wiki.seeedstudio.com/es/recomputer_r1000_n3uron/
---

## ¿Qué es N3uron?

N3uron es una plataforma industrial completa para Edge en IIoT y DataOps que permite la integración perfecta entre la planta industrial y aplicaciones de terceros, ya sea en las instalaciones o en la nube.
Con N3uron, puede crear fácilmente pipelines de datos bidireccionales entre sistemas OT e IT y desacoplar dispositivos de aplicaciones consolidando, modelando, procesando y visualizando todos sus datos operacionales en una única fuente de verdad y, en última instancia, haciendo que todos estos datos estén disponibles en toda la organización.

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/n3uron/n3uron1.png" alt="pir" width="700" height="auto" /></div>

- **Modular**: Es completamente modular, con casi cincuenta módulos, los usuarios pueden apilar según sea necesario para satisfacer las necesidades de su proyecto, adquiriendo solo los estrictamente necesarios para sus aplicaciones.

- **Multiplataforma**: N3uron puede ejecutarse en la mayoría de versiones de Windows y distribuciones Linux, así como en arquitecturas ARM como Raspberry Pi.

- **Licencia ilimitada**: N3uron cuenta con un modelo de licenciamiento ilimitado, ofreciendo uso sin restricciones en términos de etiquetas, usuarios, dispositivos y conexiones, todo a un precio asequible.

- **Basado en web**: Una vez instalado, todo lo que necesita para acceder al nodo es un navegador web.

- **Despliegue y desarrollo rápido**: N3uron se puede instalar en menos de un minuto, y su entorno de desarrollo facilita la creación rápida de modelos de datos, especialmente cuando se utilizan plantillas.

- **Extremadamente eficiente**: Un solo nodo puede manejar fácilmente varios cientos de miles de etiquetas, manteniendo bajos requisitos de hardware.

- **Arquitectura escalable y versátil**: Desde su concepción, N3uron fue diseñado para desplegar sin problemas arquitecturas distribuidas con varios cientos o miles de nodos. Los usuarios pueden conectar múltiples nodos rápidamente usando N3uron Links, escalando sin esfuerzo su arquitectura para adaptarse a sus necesidades.

## Comenzando

Antes de comenzar este proyecto, es posible que necesite preparar su hardware y software con anticipación como se describe aquí.

### Preparación del Hardware

<div class="table-center">
 <table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg">reComputer R1000</th>
    </tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png" style={{width:300, height:'auto'}}/></div></td>
    </tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
       <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-R1025-10-p-5895.html" target="_blank">
          <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
      </a></div></td>
    </tr>
  </table>
</div>

## Instalación

N3uron se puede instalar fácilmente con nuestro script de instalación automatizada de un solo paso, simplemente ejecuta el siguiente comando en tu terminal de reComputer R1000:

```sh
sudo curl -fsSL https://get.n3uron.com/install.sh | sudo bash
```

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/n3uron/Image_3.gif" alt="pir" width="600" height="auto" /></div>

En unos segundos tendrás N3uron instalado y funcionando.

Si prefieres una instalación manual, echa un vistazo a nuestra [sección de Base de Conocimientos](https://docs.n3uron.com/docs/platform-installation-upgrade#linux-setup) para más información.

## Uso

N3uron fue diseñado con una arquitectura orientada a microservicios en la que cada módulo se ejecuta como un proceso independiente y Bootstrap es el servicio principal que gestiona el resto de los procesos. Por defecto, el [módulo WebUI](https://docs.n3uron.com/docs/platform-web-user-interface) se activa automáticamente, haciéndolo accesible tan pronto como se completa la instalación, las funcionalidades adicionales se habilitan creando nuevas instancias de módulos.

Cada módulo requiere una licencia válida para ejecutarse en modo producción. Si un módulo no encuentra una licencia válida, se ejecutará en modo demo durante dos horas. Para reiniciar el período de demo, el módulo debe ser reiniciado.

Veamos un ejemplo paso a paso de cómo N3uron facilita la recolección de datos a través del [Cliente OPC UA](https://docs.n3uron.com/docs/opc-ua-client) y cómo estos datos pueden ser publicados sin problemas a un Broker MQTT usando el [módulo Cliente MQTT](https://docs.n3uron.com/docs/mqtt), habilitando el envío continuo de datos vía MQTT.

### Configurar Cliente OPC UA

- **Paso 1** : Por favor abre tu navegador favorito en una máquina diferente en la red local para acceder a la WebUI de N3uron, usa la dirección IP del reComputer R1000 y el puerto que fue configurado para la WebUI (por defecto 8003 para HTTP o 8443 para HTTPS).

Usuarios por defecto de la WebUI de N3uron.

<div class="table-center">

|            |   Acceso completo |  Acceso de solo lectura |  
|---         |     ---           |        ---              |
|  Usuario:  |    admin          |       user              |
|  Contraseña: |    n3uron       |       n3uron            |

</div>

- **Paso 2**: Abre la WebUI de N3uron y navega a Config→Modules, haz clic en el menú y luego crea un **Nuevo Módulo**, lo llamaremos **OpcUaClient**.

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/n3uron/n3uron4.png" alt="pir" width="600" height="auto" /></div>

- **Paso 3**: Selecciona **OpcUaClient** como el tipo de módulo, luego, haz clic en el botón **Save** de abajo para instanciar el módulo.

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/n3uron/n3uron5.png" alt="pir" width="600" height="auto" /></div>

- **Paso 4**: El módulo recién creado aparecerá bajo Modules, navega a su configuración y crea un **Nuevo Cliente**, lo llamaremos **DataSim**.

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/n3uron/n3uron6.png" alt="pir" width="600" height="auto" /></div>

- **Paso 5**: Configura el Cliente OPC UA para conectarse a nuestro endpoint DataSim de la siguiente manera:

```sh
Endpoint URL: opc.tcp://datasim.n3uron.com:4840
Security Mode: None
Security Policy: None

Authentication:
 Enabled: Yes
 User: sunn3rgy
 Password: n3uron

```

Haz clic en **Guardar** para aplicar los cambios y recargar el módulo.
<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/n3uron/n3uron7.png" alt="pir" width="600" height="auto" /></div>

- **Paso 5**: Navega a la sección OPC Browser dentro del módulo y selecciona el cliente DataSim creado previamente.

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/n3uron/n3uron8.png" alt="pir" width="600" height="auto" /></div>

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/n3uron/n3uron9.png" alt="pir" width="600" height="auto" /></div>

### Crear una etiqueta

- **Paso 1**: Arrastra y suelta el objeto deseado desde el navegador a la sección del modelo de datos.

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/n3uron/gif2.gif" alt="pir" width="600" height="auto" /></div>

- **Paso 2**: Ahora puedes encontrar la etiqueta recién creada en Config→Tags y ver su valor en la [sección de Tiempo Real](https://docs.n3uron.com/docs/platform-visualizing-real-time-values).

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/n3uron/n3uron10.png" alt="pir" width="600" height="auto" /></div>

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/n3uron/n3uron11.png" alt="pir" width="600" height="auto" /></div>

### Crear una plantilla

Las [Plantillas](https://docs.n3uron.com/docs/platform-templates) ofrecen la capacidad de aprovechar los principios de diseño de datos orientados a objetos en N3uron. Permitiendo a los usuarios reducir drásticamente la cantidad de tiempo invertido en desplegar un nuevo proyecto.

Al crear y usar [Plantillas](https://docs.n3uron.com/docs/platform-templates), los usuarios pueden generar nuevas instancias para construir rápidamente estructuras de datos complejas y configuraciones de comunicación. Cualquier cambio en la definición de la plantilla es entonces heredado por todas las instancias, ahorrando drásticamente tiempo al realizar cambios de enrutamiento.

Simplemente arrastra y suelta el objeto deseado en la sección de plantillas y comienza a construir tu plantilla usando [propiedades personalizadas](https://docs.n3uron.com/docs/platform-templates-custom-properties), [herencia](https://docs.n3uron.com/docs/platform-templates-inheritance) y [más](https://docs.n3uron.com/docs/platform-templates-nesting).

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/n3uron/gif3.gif" alt="pir" width="600" height="auto" /></div>

### Configurar Cliente MQTT

**Paso 1**: Ve a Config→Modules, haz clic en el menú y luego crea un **Nuevo Módulo** llamado MqttClient.

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/n3uron/n3uron12.png" alt="pir" width="600" height="auto" /></div>

- **Paso 2**: Selecciona MqttClient como el tipo de módulo, luego haz clic en Guardar.

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/n3uron/n3uron13.png" alt="pir" width="600" height="auto" /></div>

- **Paso 3**: Navega al nuevo módulo y crea una **Nueva Conexión** llamada HiveMQ.

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/n3uron/n3uron14.png" alt="pir" width="600" height="auto" /></div>

- **Paso 4**: Configura la conexión para usar el broker público HiveMQ:

```sh
Broker URL: broker.hivemq.com
Port: 1883
```

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/n3uron/n3uron15.png" alt="pir" width="600" height="auto" /></div>

- **Paso 5**: Crear un nuevo Publisher y establecer un tema de destino, por ejemplo "/n3/recomputer".

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/n3uron/n3uron16.png" alt="pir" width="600" height="auto" /></div>

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/n3uron/n3uron17.png" alt="pir" width="600" height="auto" /></div>

- **Paso 6**: Crear un **Tag Filter** para coincidir con todas las etiquetas en este nodo, el Tag Filter es cómo le decimos al módulo qué etiquetas deben publicarse en el broker. Hacer clic en **Save** para aplicar todos los cambios y recargar el módulo.

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/n3uron/n3uron18.png" alt="pir" width="600" height="auto" /></div>

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/n3uron/n3uron19.png" alt="pir" width="600" height="auto" /></div>

- **Paso 7**: Dirigirse a Diagnostics y habilitar los logs en tiempo real para el módulo MqttClient, esperar a ver los logs emitidos por el módulo cada vez que publique nuevos datos al broker.

 <div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/n3uron/n3uron20.png" alt="pir" width="600" height="auto" /></div>

### Instanciar un módulo WebVision

**Paso 1:** Abrir N3uron y navegar al menú Config.

**Paso 2:** Hacer clic en Modules, luego crear un nuevo módulo. Esta instancia puede recibir cualquier nombre (excepto nombres con caracteres especiales como '.', '/', etc.), aunque se recomienda a los usuarios nombrar las instancias de manera similar al nombre del módulo que se está instanciando para facilitar la identificación. En este ejemplo, el módulo WebVision ha sido seleccionado y también ha sido nombrado WebVision.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reComputer-R1000/n3uron/Image_5.gif" /></center>

**Paso 3:** Navegar a la configuración principal de WebVision y elegir la configuración de servidor apropiada. La configuración predeterminada debería ser suficiente para la mayoría de casos de uso. Para más detalles, consultar el siguiente enlace: [WebVision Initial Configuration](https://docs.n3uron.com/docs/web-vision-configuration).

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reComputer-R1000/n3uron/Image_6.png" /></center>

**Paso 4:** Una vez que el módulo WebVision ha sido instanciado, el primer paso es asignar permisos a los roles previamente creados en la sección Roles de WebUI. Por defecto, existen dos roles: Administrator para acceso administrativo y User para acceso regular. Puedes agregar usuarios a estos roles o crear nuevos según sea necesario. Una vez establecidos los roles, configurar permisos para los roles Designer y Viewer en consecuencia.
Adicionalmente, establecer una ruta de filtro de etiquetas para cada rol. El acceso a la ruta del filtro de etiquetas determina qué etiquetas del modelo de etiquetas serán accesibles para visualización por el rol correspondiente. En este caso, asignaremos la ruta completa del modelo de etiquetas a ambos roles.

- Administrator:
  - Designer: Edit
  - Viewer: View
  - TagFilterPath:
    - Mode: Include
    - Path: /
    - Regex pattern: .*
- User:
  - Designer: None
  - Viewer: View
  - TagFilterPath:
    - Mode: Include
    - Path: /
    - Regex pattern: .*

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reComputer-R1000/n3uron/Image_7.gif" /></center>

- Enlaces útiles

  - [Users and Roles Configuration](https://docs.n3uron.com/docs/platform-security-users-and-roles)

  - [Access Configuration](https://docs.n3uron.com/docs/web-vision-configuration#access-configuration)

**Paso 5:** Para probar nuestra pantalla inicial de WebVision, creemos una etiqueta. Ir a WebUI, seleccionar **Config**, y luego hacer clic en **Tag**. En la sección **Model**, hacer clic en el menú y elegir **New Tag**. Nombrarla **TestTag**, por ejemplo, seleccionar el tipo como **Number**, otorgarle **permiso Read-Write**, inicializarla a 0 (opcional) y luego guardar la configuración.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reComputer-R1000/n3uron/Image_8.gif" /></center>

**Paso 6:** A continuación, navegar a WebVision en la sección Config y hacer clic en **Open Designer**.
Iniciar sesión usando las **credenciales de Administrator**.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reComputer-R1000/n3uron/Image_9.png" /></center>

**Paso 7:** En la sección Templates, crear un nuevo Container llamado Main. Luego, designar este contenedor como el startup. Esto establecerá Main como nuestra pantalla inicial de WebVision. Aparecerá con un símbolo de asterisco (*) al lado.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reComputer-R1000/n3uron/Image_10.gif" /></center>

**Paso 8:** Cambiar el color de fondo del contenedor Main.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reComputer-R1000/n3uron/Image_11.gif" /></center>

**Paso 9:** Dentro del contenedor Main, navegar a Components y agregar un nuevo componente. Para este ejemplo, seleccionar el componente Gauge.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reComputer-R1000/n3uron/Image_12.gif" /></center>

**Paso 10:** Dentro del componente Gauge, seleccionar la etiqueta que proporcionará los valores mostrados en el componente gauge.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reComputer-R1000/n3uron/Image_13.gif" /></center>

**Paso 11:** A continuación, navegar a WebVision en la sección Config y hacer clic en Open UI.
Iniciar sesión usando las credenciales de Administrator.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reComputer-R1000/n3uron/Image_14.png" /></center>

**Paso 12:** Para probar nuestro diseño simple, navegar a WebUI y seleccionar Data > Realtime. Cambiar el valor de TestTag. Después, regresar a la UI de WebVision y verificar si el valor mostrado por el componente Gauge ha sido actualizado.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reComputer-R1000/n3uron/Image_15.gif" /></center>

Hay mucho que explorar sobre WebVision para mejorar tu experiencia con reComputer R1000. Para más detalles, consulta nuestra [Base de Conocimientos sobre WebVision](https://docs.n3uron.com/docs/web-vision-configuration).

Lo que has visto es solo el comienzo. Abraza las posibilidades ilimitadas que ofrece su impresionante conjunto de casi 50 módulos. Atrévete a soñar en grande, innovar y llevar tus proyectos a nuevas alturas con las características de vanguardia de N3uron. Para una inmersión más profunda en esta poderosa plataforma, visita [https://n3uron.com/](https://n3uron.com/) y embárcate en un emocionante viaje de descubrimiento!
