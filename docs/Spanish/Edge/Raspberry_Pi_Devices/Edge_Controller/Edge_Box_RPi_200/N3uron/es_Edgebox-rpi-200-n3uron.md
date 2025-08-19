---
description: EdgeBox RPi 200 con N3uron
title: EdgeBox RPi 200 con N3uron
keywords:
  - Edge
  - EdgeBox-RPi-200
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Edgebox-rpi-200-n3uron
last_update:
  date: 02/13/2025
  author: Erick González
---

## ¿Qué es N3uron?

N3uron es una plataforma industrial completa para Edge Computing en IIoT y DataOps que permite la integración fluida entre el piso de planta industrial y aplicaciones de terceros, ya sea en las instalaciones o en la nube.
Con N3uron, puedes crear fácilmente canalizaciones de datos bidireccionales entre los sistemas OT e IT, desacoplando los dispositivos de las aplicaciones mediante la consolidación, modelado, procesamiento y visualización de todos los datos operativos en una única fuente de verdad, haciendo que estos datos estén disponibles en toda la organización.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Edge_Box/n3uron/n3uron1.png" alt="pir" width="700" height="auto" /></div>

- **Modular**: Totalmente modular, con casi cincuenta módulos, los usuarios pueden apilar los necesarios según sus necesidades del proyecto, adquiriendo solo los estrictamente necesarios para sus aplicaciones.

- **Multiplataforma**: N3uron puede ejecutarse en la mayoría de versiones de Windows y distribuciones de Linux, así como en arquitecturas ARM como Raspberry Pi.

- **Licencia ilimitada**: N3uron ofrece un modelo de licencia ilimitado, permitiendo un uso sin restricciones en términos de tags, usuarios, dispositivos y conexiones, todo a un precio accesible.

- **Basado en la web**: Una vez instalado, solo necesitas un navegador web para acceder al nodo.

- **Despliegue y desarrollo rápidos**: N3uron puede instalarse en menos de un minuto, y su entorno de desarrollo facilita la creación rápida de modelos de datos, especialmente al utilizar plantillas.

- **Extremadamente eficiente**: Un solo nodo puede gestionar sin problemas cientos de miles de tags, manteniendo requisitos de hardware bajos.

- **Arquitectura escalable y versátil**: Desde su concepción, N3uron fue diseñado para desplegar arquitecturas distribuidas con cientos o miles de nodos. Los usuarios pueden conectar múltiples nodos rápidamente utilizando N3uron Links, escalando su arquitectura según sus necesidades.

## Edgebox-RPI-200

<div align="center"><img width ={500} src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-102991599_edgebox-rpi-200-first.jpg"/></div>

La serie EdgeBox-RPI-200 son controladores de computación perimetral industrial todo en uno basados en Raspberry Pi, que combinan múltiples propósitos industriales. Diseñados como hardware industrial de alta escalabilidad y robustez, montados con una gran cantidad de recursos de E/S y respaldados por el sólido ecosistema de software industrial de Raspberry Pi, son una elección ideal para soluciones de automatización inteligente e Internet Industrial de las Cosas (IIoT).

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/EdgeBox-RPi-200-CM4104016-p-5486.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consíguelo Ya! 🖱️</font></span></strong>
    </a>
</div>

## Requisitos previos

### Hardware
* [EdgeBox-RPI-200](https://www.seeedstudio.com/EdgeBox-RPi-200-CM4104016-p-5486.html) 

### Software
* [Plataforma Industrial IIoT & DataOps N3uron](https://n3uron.com/)

## Instalación

N3uron se puede instalar fácilmente con nuestro script de instalación automatizada en un solo paso, simplemente ejecute el siguiente comando en la terminal de su EdgeBox:

```sh
sudo curl -fsSL https://get.n3uron.com/install.sh | sudo bash
``` 
<div align="center"><img src="https://files.seeedstudio.com/wiki/Edge_Box/n3uron/gif1.gif" alt="pir" width="600" height="auto" /></div>

En unos segundos, tendrá N3uron instalado, en funcionamiento y listo para usar.

Si prefiere una instalación manual, consulte nuestra [sección de Base de Conocimientos](https://docs.n3uron.com/docs/platform-installation-upgrade#linux-setup) para obtener más información.

## Uso

N3uron fue diseñado con una arquitectura orientada a microservicios en la que cada módulo se ejecuta como un proceso independiente y **Bootstrap** es el servicio central que gestiona el resto de los procesos. Por defecto, el [módulo WebUI](https://docs.n3uron.com/docs/platform-web-user-interface) se activa automáticamente, haciéndolo accesible tan pronto como finaliza la instalación. Funcionalidades adicionales pueden habilitarse creando nuevas instancias de módulos.

Cada módulo requiere una licencia válida para ejecutarse en modo de producción. Si un módulo no encuentra una licencia válida, funcionará en modo demostración durante dos horas. Para reiniciar el período de demostración, el módulo debe reiniciarse.

Veamos un ejemplo paso a paso de cómo N3uron facilita la recopilación de datos a través del [Cliente OPC UA](https://docs.n3uron.com/docs/opc-ua-client) y cómo estos datos pueden publicarse de manera fluida en un **broker MQTT** utilizando el [módulo Cliente MQTT](https://docs.n3uron.com/docs/mqtt), permitiendo un flujo continuo de datos mediante MQTT.

### Configurar Cliente OPC UA

- **Paso 1**: Abra su navegador favorito en una máquina diferente dentro de la red local para acceder a la WebUI de N3uron. Use la dirección IP del EdgeBox-RPI-200 y el puerto configurado para la WebUI (por defecto 8003 para HTTP o 8443 para HTTPS).

Usuarios predeterminados de la WebUI de N3uron:

<div class="table-center">

|            |   Acceso completo |  Solo lectura |  
|---         |     ---       |        ---        |
|  Usuario:  |    admin      |       user        |
|  Contraseña: |    n3uron     |       n3uron      |

</div>

- **Paso 2**: Abra la WebUI de N3uron y navegue a **Config → Módulos**, haga clic en el menú y luego cree un **Nuevo Módulo**, lo llamaremos **OpcUaClient**.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Edge_Box/n3uron/n3uron4.png" alt="pir" width="600" height="auto" /></div>

- **Paso 3**: Seleccione **OpcUaClient** como tipo de módulo y haga clic en el botón **Guardar** para instanciar el módulo.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Edge_Box/n3uron/n3uron5.png" alt="pir" width="600" height="auto" /></div>


- **Paso 4**: El módulo recién creado aparecerá en la sección de Módulos, navegue a su configuración y cree un **Nuevo Cliente**, lo llamaremos **DataSim**.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Edge_Box/n3uron/n3uron6.png" alt="pir" width="600" height="auto" /></div>

- **Paso 5**: Configure el Cliente OPC UA para conectarse a nuestro endpoint DataSim de la siguiente manera:

```sh
URL del Endpoint: opc.tcp://datasim.n3uron.com:4840
Modo de Seguridad: Ninguno
Política de Seguridad: Ninguna

Autenticación:
	Habilitado: Sí
	Usuario: sunn3rgy
	Contraseña: n3uron
```

Haga clic en **Guardar** para aplicar los cambios y recargar el módulo.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Edge_Box/n3uron/n3uron7.png" alt="pir" width="600" height="auto" /></div>

- **Paso 6**: Navega a la sección **OPC Browser** dentro del módulo y selecciona el cliente **DataSim** previamente creado.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Edge_Box/n3uron/n3uron8.png" alt="pir" width="600" height="auto" /></div>

<div align="center"><img src="https://files.seeedstudio.com/wiki/Edge_Box/n3uron/n3uron9.png" alt="pir" width="600" height="auto" /></div>

### Crear una etiqueta

- **Paso 1**: Arrastra y suelta el objeto deseado desde el explorador a la sección del modelo de datos.
<div align="center"><img src="https://files.seeedstudio.com/wiki/Edge_Box/n3uron/gif2.gif" alt="pir" width="600" height="auto" /></div>

- **Paso 2**: Ahora puedes encontrar la etiqueta recién creada en **Config→Tags** y ver su valor en la [sección de Valores en Tiempo Real](https://docs.n3uron.com/docs/platform-visualizing-real-time-values).

<div align="center"><img src="https://files.seeedstudio.com/wiki/Edge_Box/n3uron/n3uron10.png" alt="pir" width="600" height="auto" /></div>

<div align="center"><img src="https://files.seeedstudio.com/wiki/Edge_Box/n3uron/n3uron11.png" alt="pir" width="600" height="auto" /></div>


---

### Crear una plantilla

[Las plantillas](https://docs.n3uron.com/docs/platform-templates) ofrecen la capacidad de aprovechar principios de diseño de datos orientados a objetos en N3uron, permitiendo a los usuarios reducir drásticamente el tiempo invertido en la implementación de un nuevo proyecto.

Al crear y utilizar [plantillas](https://docs.n3uron.com/docs/platform-templates), los usuarios pueden generar nuevas instancias para construir rápidamente estructuras de datos complejas y configuraciones de comunicación. Cualquier cambio en la definición de la plantilla se hereda automáticamente en todas sus instancias, ahorrando tiempo al realizar cambios en la configuración.

Simplemente arrastre y suelte el objeto deseado en la sección de plantillas y comience a construir su plantilla usando [propiedades personalizadas](https://docs.n3uron.com/docs/platform-templates-custom-properties), [herencia](https://docs.n3uron.com/docs/platform-templates-inheritance) y [más](https://docs.n3uron.com/docs/platform-templates-nesting).

<div align="center"><img src="https://files.seeedstudio.com/wiki/Edge_Box/n3uron/gif3.gif" alt="pir" width="600" height="auto" /></div>

### Configurar Cliente MQTT

- **Paso 1**: Vaya a **Config→Módulos**, haga clic en el menú y luego cree un **Nuevo Módulo** llamado **MqttClient**.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Edge_Box/n3uron/n3uron12.png" alt="pir" width="600" height="auto" /></div>

- **Paso 2**: Seleccione **MqttClient** como tipo de módulo y haga clic en **Guardar**.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Edge_Box/n3uron/n3uron13.png" alt="pir" width="600" height="auto" /></div>

- **Paso 3**: Navegue al nuevo módulo y cree una **Nueva Conexión** llamada **HiveMQ**.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Edge_Box/n3uron/n3uron14.png" alt="pir" width="600" height="auto" /></div>


- **Paso 4**: Configure la conexión para usar el broker público de HiveMQ:

```sh
URL del Broker: broker.hivemq.com
Puerto: 1883
``` 
<div align="center"><img src="https://files.seeedstudio.com/wiki/Edge_Box/n3uron/n3uron15.png" alt="pir" width="600" height="auto" /></div>


- **Paso 5**: Cree un nuevo Publicador y establezca un tema de destino, por ejemplo "/n3/edgebox".

<div align="center"><img src="https://files.seeedstudio.com/wiki/Edge_Box/n3uron/n3uron16.png" alt="pir" width="600" height="auto" /></div>

<div align="center"><img src="https://files.seeedstudio.com/wiki/Edge_Box/n3uron/n3uron17.png" alt="pir" width="600" height="auto" /></div>

- **Paso 6**: Cree un **Filtro de Etiquetas** para coincidir con todas las etiquetas en este nodo. El Filtro de Etiquetas es la forma en que indicamos al módulo qué etiquetas deben ser publicadas en el broker. Haga clic en **Guardar** para aplicar todos los cambios y recargar el módulo.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Edge_Box/n3uron/n3uron18.png" alt="pir" width="600" height="auto" /></div>

<div align="center"><img src="https://files.seeedstudio.com/wiki/Edge_Box/n3uron/n3uron19.png" alt="pir" width="600" height="auto" /></div>


- **Paso 7**: Vaya a Diagnósticos y habilite los registros en tiempo real para el módulo MqttClient. Espere a ver los registros emitidos por el módulo cada vez que publique nuevos datos en el broker.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Edge_Box/n3uron/n3uron20.png" alt="pir" width="600" height="auto" /></div>



### Instanciar un módulo WebVision

- **Paso 1**: Abra N3uron y navegue al menú **Config**.

- **Paso 2**: Haga clic en **Módulos**, luego cree un nuevo módulo. Esta instancia puede tener cualquier nombre (excepto nombres con caracteres especiales como ‘.’, ‘/’, etc.), aunque se recomienda nombrarlas de manera similar al módulo instanciado para facilitar su identificación. En este ejemplo, el módulo WebVision ha sido seleccionado y nombrado **WebVision**.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/Edge_Box/n3uron/Image_5.gif" /></center>

- **Paso 3**: Navegue a la configuración principal de WebVision y seleccione las configuraciones del servidor adecuadas. La configuración predeterminada suele ser suficiente para la mayoría de los casos. Para más detalles, consulte el siguiente enlace: [Configuración Inicial de WebVision](https://docs.n3uron.com/docs/web-vision-configuration).

<center><img width={1000} src="https://files.seeedstudio.com/wiki/Edge_Box/n3uron/Image_6.png" /></center>

- **Paso 4**: Una vez instanciado el módulo WebVision, el primer paso es asignar permisos a los roles previamente creados en la sección **Roles** de WebUI. Por defecto, existen dos roles: **Administrador** para acceso administrativo y **Usuario** para acceso regular. Puede agregar usuarios a estos roles o crear nuevos según sea necesario.

**Configuración de permisos:**

- **Administrador:**
  - **Designer:** Editar
  - **Viewer:** Ver
  - **TagFilterPath:**
    - **Modo:** Incluir
    - **Ruta:** /
    - **Patrón Regex:** .*

- **Usuario:**
  - **Designer:** Ninguno
  - **Viewer:** Ver
  - **TagFilterPath:**
    - **Modo:** Incluir
    - **Ruta:** /
    - **Patrón Regex:** .*

<center><img width={1000} src="https://files.seeedstudio.com/wiki/Edge_Box/n3uron/Image_7.gif" /></center>

**Enlaces útiles:**

- [Configuración de Usuarios y Roles](https://docs.n3uron.com/docs/platform-security-users-and-roles)
- [Configuración de Acceso](https://docs.n3uron.com/docs/web-vision-configuration#access-configuration)


- **Paso 5**: Para probar nuestra pantalla inicial de WebVision, vamos a crear una etiqueta. Vaya a la WebUI, seleccione **Config**, y luego haga clic en **Tag**. En la sección **Model**, haga clic en el menú y seleccione **Nueva Etiqueta**. Nómbrela **TestTag**, por ejemplo, seleccione el tipo **Número**, asígnele **permiso de lectura y escritura**, inicialícela en 0 (opcional) y luego guarde la configuración.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/Edge_Box/n3uron/Image_8.gif" /></center>

- **Paso 6**: A continuación, navegue a WebVision en la sección Config y haga clic en **Abrir Diseñador**. Inicie sesión con sus **credenciales de Administrador**.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/Edge_Box/n3uron/Image_9.png" /></center>

- **Paso 7**: En la sección Plantillas, cree un nuevo Contenedor llamado **Main**. Luego, desígnelo como el inicio. Esto configurará Main como nuestra pantalla inicial de WebVision y aparecerá con un asterisco (*) al lado.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/Edge_Box/n3uron/Image_10.gif" /></center>

- **Paso 8**: Cambie el color de fondo del contenedor Main.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/Edge_Box/n3uron/Image_11.gif" /></center>

- **Paso 9**: Dentro del contenedor Main, navegue a Componentes y agregue un nuevo componente. Para este ejemplo, seleccione el componente **Gauge**.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/Edge_Box/n3uron/Image_12.gif" /></center>

- **Paso 10**: Dentro del componente Gauge, seleccione la etiqueta que proporcionará los valores mostrados en el componente.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/Edge_Box/n3uron/Image_13.gif" /></center>

- **Paso 11**: Luego, navegue a WebVision en la sección Config y haga clic en **Abrir UI**. Inicie sesión con sus **credenciales de Administrador**.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/Edge_Box/n3uron/Image_14.png" /></center>

- **Paso 12**: Para probar nuestro diseño, navegue a la WebUI y seleccione **Data > Realtime**. Cambie el valor de **TestTag**. Luego, regrese a la UI de WebVision y verifique si el valor mostrado en el componente Gauge se ha actualizado.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/Edge_Box/n3uron/Image_15.gif" /></center>

### Explora más sobre WebVision

Hay mucho más por descubrir sobre WebVision para mejorar tu experiencia con Edge Box. Para más detalles, consulta nuestra [Base de Conocimientos sobre WebVision](https://docs.n3uron.com/docs/web-vision-configuration).

Lo que has visto es solo el comienzo. Aprovecha las infinitas posibilidades que ofrece su impresionante conjunto de casi 50 módulos. Atrévete a soñar en grande, innovar y llevar tus proyectos a nuevos niveles con las avanzadas características de N3uron. Para explorar más a fondo esta poderosa plataforma, visita [https://n3uron.com/](https://n3uron.com/) y embárcate en un emocionante viaje de descubrimiento.
