---
description: N3uron es una plataforma Industrial Edge completa para IIoT y DataOps, que permite una integración fluida entre las plantas industriales y aplicaciones de terceros, tanto locales como en la nube. Junto con la Computadora R1000, mejora las capacidades de control en el edge y ofrece una integración sólida con la nube para una disponibilidad de datos sin interrupciones en toda la organización.

title: reComputer R1000 with N3uron
keywords:
  - Edge
  - reComputer R1000
  - N3uron
image: https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png
slug: /es/recomputer_r1000_n3uron
last_update:
  date: 02/16/2025
  author: Erick González
---

## ¿Qué es N3uron?

N3uron es una plataforma Industrial Edge completa para IIoT y DataOps que permite una integración fluida entre las plantas industriales y aplicaciones de terceros, ya sea en local o en la nube.  
Con N3uron, puedes crear fácilmente canales de datos bidireccionales entre los sistemas OT e IT y desacoplar dispositivos de aplicaciones consolidando, modelando, procesando y visualizando todos tus datos operativos en una única fuente de verdad, haciendo que toda esta información esté disponible en toda la organización.

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/n3uron/n3uron1.png" alt="pir" width="700" height="auto" /></div>

- **Modular**: Es completamente modular, con casi cincuenta módulos que los usuarios pueden combinar según sus necesidades, adquiriendo solo los estrictamente necesarios para sus aplicaciones.

- **Multiplataforma**: N3uron puede ejecutarse en la mayoría de las versiones de Windows y distribuciones de Linux, así como en arquitecturas ARM como Raspberry Pi.

- **Licencia ilimitada**: N3uron ofrece un modelo de licencia sin restricciones, permitiendo el uso ilimitado en términos de etiquetas, usuarios, dispositivos y conexiones, todo a un precio accesible.

- **Basado en la web**: Una vez instalado, solo necesitas un navegador web para acceder al nodo.

- **Despliegue y desarrollo rápidos**: N3uron puede instalarse en menos de un minuto y su entorno de desarrollo facilita la creación rápida de modelos de datos, especialmente al utilizar plantillas.

- **Extremadamente eficiente**: Un solo nodo puede gestionar fácilmente cientos de miles de etiquetas, manteniendo bajos requisitos de hardware.

- **Arquitectura escalable y versátil**: Desde su concepción, N3uron fue diseñado para implementar arquitecturas distribuidas con cientos o miles de nodos sin complicaciones. Los usuarios pueden conectar múltiples nodos rápidamente utilizando N3uron Links, escalando su arquitectura de manera sencilla según sus necesidades.


## Primeros Pasos

Antes de comenzar este proyecto, es posible que necesites preparar tu hardware y software con anticipación, como se describe aquí.

### Preparación de Hardware

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
              <strong><span><font color={'FFFFFF'} size={"4"}> Consíguelo Ya! 🖱️</font></span></strong>
          </a></div></td>
        </tr>
    </table>
    </div>

## Instalación

N3uron se puede instalar fácilmente con nuestro script de instalación automatizado en un solo paso. Simplemente ejecuta el siguiente comando en la terminal de tu reComputer R1000:

```sh
sudo curl -fsSL https://get.n3uron.com/install.sh | sudo bash
``` 
<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/n3uron/Image_3.gif" alt="pir" width="600" height="auto" /></div>

En unos segundos, N3uron estará instalado y en funcionamiento.

Si prefieres una instalación manual, consulta nuestra [sección de Knowledge Base](https://docs.n3uron.com/docs/platform-installation-upgrade#linux-setup) para más información.

## Uso

N3uron fue diseñado con una arquitectura orientada a microservicios, en la que cada módulo se ejecuta como un proceso independiente y Bootstrap es el servicio central que gestiona el resto de los procesos. Por defecto, el [módulo WebUI](https://docs.n3uron.com/docs/platform-web-user-interface) se activa automáticamente, lo que permite su acceso tan pronto como finaliza la instalación. Funcionalidades adicionales pueden habilitarse creando nuevas instancias de módulos.

Cada módulo requiere una licencia válida para ejecutarse en modo de producción. Si un módulo no encuentra una licencia válida, funcionará en modo de demostración durante dos horas. Para reiniciar el período de demostración, es necesario reiniciar el módulo.

Veamos un ejemplo paso a paso de cómo N3uron facilita la recolección de datos a través del [Cliente OPC UA](https://docs.n3uron.com/docs/opc-ua-client) y cómo estos datos pueden publicarse sin interrupciones en un broker MQTT utilizando el [módulo Cliente MQTT](https://docs.n3uron.com/docs/mqtt), permitiendo la transmisión continua de datos a través de MQTT.

### Configurar Cliente OPC UA

- **Paso 1**: Abre tu navegador favorito en otra máquina dentro de la red local para acceder a la WebUI de N3uron. Usa la dirección IP del reComputer R1000 y el puerto configurado para la WebUI (por defecto, 8003 para HTTP o 8443 para HTTPS).

Usuarios predeterminados de N3uron WebUI.

<div class="table-center">

|            |   Acceso completo |  Acceso de solo lectura |  
|---         |     ---           |        ---              |
|  Usuario:  |    admin          |       user              |
|  Contraseña: |    n3uron       |       n3uron           |

</div>

- **Paso 2**: Abre la WebUI de N3uron y navega a Configuración → Módulos. Haz clic en el menú y luego crea un **Nuevo Módulo**, al que llamaremos **OpcUaClient**.

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/n3uron/n3uron4.png" alt="pir" width="600" height="auto" /></div>

- **Paso 3**: Selecciona **OpcUaClient** como el tipo de módulo y luego haz clic en el botón **Guardar** para instanciar el módulo.

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/n3uron/n3uron5.png" alt="pir" width="600" height="auto" /></div>

- **Paso 4**: El módulo recién creado aparecerá en la sección de Módulos. Navega a su configuración y crea un **Nuevo Cliente**, al que llamaremos **DataSim**.

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/n3uron/n3uron6.png" alt="pir" width="600" height="auto" /></div>

- **Paso 5**: Configura el Cliente OPC UA para conectarse al punto de acceso de DataSim de la siguiente manera:

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

- **Paso 6**: Navega a la sección **OPC Browser** dentro del módulo y selecciona el cliente **DataSim** que creaste previamente.

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/n3uron/n3uron8.png" alt="pir" width="600" height="auto" /></div>

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/n3uron/n3uron9.png" alt="pir" width="600" height="auto" /></div>

### Crear una etiqueta

- **Paso 1**: Arrastra y suelta el objeto deseado desde el navegador a la sección del modelo de datos.
<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/n3uron/gif2.gif" alt="pir" width="600" height="auto" /></div>

- **Paso 2**: Ahora puedes encontrar la etiqueta recién creada en Configuración → Etiquetas y ver su valor en la [sección de Tiempo Real](https://docs.n3uron.com/docs/platform-visualizing-real-time-values).

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/n3uron/n3uron10.png" alt="pir" width="600" height="auto" /></div>

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/n3uron/n3uron11.png" alt="pir" width="600" height="auto" /></div>

### Crear una plantilla

[Las plantillas](https://docs.n3uron.com/docs/platform-templates) permiten aprovechar principios de diseño de datos orientados a objetos en N3uron, reduciendo drásticamente el tiempo invertido en la implementación de nuevos proyectos.

Al crear y utilizar [plantillas](https://docs.n3uron.com/docs/platform-templates), los usuarios pueden generar nuevas instancias para construir rápidamente estructuras de datos complejas y configuraciones de comunicación. Cualquier cambio en la definición de la plantilla se hereda automáticamente en todas sus instancias, ahorrando tiempo en la modificación de rutas y configuraciones.

Solo arrastra y suelta el objeto deseado en la sección de plantillas y comienza a construir tu plantilla usando [propiedades personalizadas](https://docs.n3uron.com/docs/platform-templates-custom-properties), [herencia](https://docs.n3uron.com/docs/platform-templates-inheritance) y [más](https://docs.n3uron.com/docs/platform-templates-nesting).

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/n3uron/gif3.gif" alt="pir" width="600" height="auto" /></div>

### Configurar el Cliente MQTT

**Paso 1**: Ve a Configuración → Módulos, haz clic en el menú y luego crea un **Nuevo Módulo** llamado **MqttClient**.

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/n3uron/n3uron12.png" alt="pir" width="600" height="auto" /></div>

- **Paso 2**: Selecciona **MqttClient** como el tipo de módulo y luego haz clic en **Guardar**.

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/n3uron/n3uron13.png" alt="pir" width="600" height="auto" /></div>

- **Paso 3**: Navega al nuevo módulo y crea una **Nueva Conexión** llamada **HiveMQ**.

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/n3uron/n3uron14.png" alt="pir" width="600" height="auto" /></div>

- **Paso 4**: Configura la conexión para utilizar el broker público de HiveMQ:

```sh
Broker URL: broker.hivemq.com
Port: 1883
```

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/n3uron/n3uron15.png" alt="pir" width="600" height="auto" /></div>

- **Paso 5**: Crea un **Nuevo Publicador** y establece un tema de destino, por ejemplo, "/n3/recomputer".

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/n3uron/n3uron16.png" alt="pir" width="600" height="auto" /></div>

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/n3uron/n3uron17.png" alt="pir" width="600" height="auto" /></div>

- **Paso 6**: Crea un **Filtro de Etiquetas** para coincidir con todas las etiquetas en este nodo. El filtro de etiquetas es la forma en que indicamos al módulo qué etiquetas deben publicarse en el broker. Haz clic en **Guardar** para aplicar todos los cambios y recargar el módulo.

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/n3uron/n3uron18.png" alt="pir" width="600" height="auto" /></div>

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/n3uron/n3uron19.png" alt="pir" width="600" height="auto" /></div>


- **Paso 7**: Dirígete a la sección de Diagnóstico y habilita los registros en tiempo real para el módulo MqttClient. Espera a ver los registros generados por el módulo cada vez que publique nuevos datos en el broker.

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/n3uron/n3uron20.png" alt="pir" width="600" height="auto" /></div>

### Instanciar un módulo WebVision

**Paso 1:** Abre N3uron y navega al menú de Configuración.

**Paso 2:** Haz clic en Módulos y luego crea un nuevo módulo. Esta instancia puede recibir cualquier nombre (excepto aquellos con caracteres especiales como ‘.’, ‘/’, etc.), aunque se recomienda que los usuarios asignen nombres similares al del módulo que están instanciando para facilitar su identificación. En este ejemplo, se ha seleccionado el módulo WebVision y se ha nombrado WebVision.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reComputer-R1000/n3uron/Image_5.gif" /></center>

**Paso 3:** Navega a la configuración principal de WebVision y elige la configuración de servidor adecuada. Los ajustes predeterminados deberían ser suficientes para la mayoría de los casos de uso. Para más detalles, consulta el siguiente enlace: [Configuración Inicial de WebVision](https://docs.n3uron.com/docs/web-vision-configuration).

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reComputer-R1000/n3uron/Image_6.png" /></center>

**Paso 4:** Una vez que el módulo WebVision ha sido instanciado, el primer paso es asignar permisos a los roles previamente creados en la sección de Roles de la WebUI. Por defecto, existen dos roles: Administrador para acceso administrativo y Usuario para acceso regular. Puedes agregar usuarios a estos roles o crear nuevos según sea necesario. Una vez establecidos los roles, configura los permisos para los roles de Diseñador y Visor según corresponda.

Además, establece una ruta de filtro de etiquetas para cada rol. El acceso a la ruta del filtro de etiquetas determina qué etiquetas del modelo de datos estarán disponibles para la visualización por el rol correspondiente. En este caso, asignaremos la ruta completa del modelo de etiquetas a ambos roles.

### Instanciar un módulo WebVision

**Paso 1:** Abre N3uron y navega al menú de Configuración.

**Paso 2:** Haz clic en Módulos y luego crea un nuevo módulo. Esta instancia puede recibir cualquier nombre (excepto aquellos con caracteres especiales como ‘.’, ‘/’, etc.), aunque se recomienda que los usuarios asignen nombres similares al del módulo que están instanciando para facilitar su identificación. En este ejemplo, se ha seleccionado el módulo WebVision y se ha nombrado WebVision.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reComputer-R1000/n3uron/Image_5.gif" /></center>

**Paso 3:** Navega a la configuración principal de WebVision y elige la configuración de servidor adecuada. Los ajustes predeterminados deberían ser suficientes para la mayoría de los casos de uso. Para más detalles, consulta el siguiente enlace: [Configuración Inicial de WebVision](https://docs.n3uron.com/docs/web-vision-configuration).

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reComputer-R1000/n3uron/Image_6.png" /></center>

**Paso 4:** Una vez que el módulo WebVision ha sido instanciado, el primer paso es asignar permisos a los roles previamente creados en la sección de Roles de la WebUI. Por defecto, existen dos roles: Administrador para acceso administrativo y Usuario para acceso regular. Puedes agregar usuarios a estos roles o crear nuevos según sea necesario. Una vez establecidos los roles, configura los permisos para los roles de Diseñador y Visor según corresponda.

Además, establece una ruta de filtro de etiquetas para cada rol. El acceso a la ruta del filtro de etiquetas determina qué etiquetas del modelo de datos estarán disponibles para la visualización por el rol correspondiente. En este caso, asignaremos la ruta completa del modelo de etiquetas a ambos roles.

- **Administrador:**
    - Diseñador: Editar
    - Visor: Ver
    - Ruta de filtro de etiquetas:
        - Modo: Incluir
        - Ruta: /
        - Patrón Regex: .*
- **Usuario:**
    - Diseñador: Ninguno
    - Visor: Ver
    - Ruta de filtro de etiquetas:
        - Modo: Incluir
        - Ruta: /
        - Patrón Regex: .*

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reComputer-R1000/n3uron/Image_7.gif" /></center>

- Enlaces útiles
  - [Configuración de Usuarios y Roles](https://docs.n3uron.com/docs/platform-security-users-and-roles)
  - [Configuración de Acceso](https://docs.n3uron.com/docs/web-vision-configuration#access-configuration)

**Paso 5:** Para probar nuestra pantalla inicial de WebVision, creemos una etiqueta. Ve a la WebUI, selecciona **Configuración**, y luego haz clic en **Etiqueta**. En la sección **Modelo**, haz clic en el menú y selecciona **Nueva Etiqueta**. Nómbrala **TestTag**, selecciona el tipo **Número**, otórgale permisos de **Lectura-Escritura**, inicialízala en 0 (opcional) y guarda los cambios.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reComputer-R1000/n3uron/Image_8.gif" /></center>

**Paso 6:** Luego, navega a WebVision en la sección de Configuración y haz clic en **Abrir Diseñador**.
Inicia sesión con tus **credenciales de Administrador**.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reComputer-R1000/n3uron/Image_9.png" /></center>

**Paso 7:** En la sección de Plantillas, crea un nuevo Contenedor llamado **Main**. Luego, configúralo como el contenedor de inicio. Esto establecerá **Main** como la pantalla inicial de WebVision. Aparecerá con un asterisco (*) junto a su nombre.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reComputer-R1000/n3uron/Image_10.gif" /></center>

**Paso 8:** Cambia el color de fondo del contenedor **Main**.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reComputer-R1000/n3uron/Image_11.gif" /></center>

**Paso 9:** Dentro del contenedor **Main**, navega a **Componentes** y agrega un nuevo componente. Para este ejemplo, selecciona el componente **Gauge**.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reComputer-R1000/n3uron/Image_12.gif" /></center>

**Paso 10:** Dentro del componente **Gauge**, selecciona la etiqueta que proporcionará los valores que se mostrarán en el componente.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reComputer-R1000/n3uron/Image_13.gif" /></center>

**Paso 11:** Luego, navega a WebVision en la sección de Configuración y haz clic en **Abrir UI**.
Inicia sesión con tus **credenciales de Administrador**.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reComputer-R1000/n3uron/Image_14.png" /></center>

**Paso 12:** Para probar nuestro diseño simple, navega a la WebUI y selecciona **Datos > Tiempo Real**. Cambia el valor de **TestTag**. Luego, regresa a la UI de WebVision y verifica si el valor mostrado en el componente **Gauge** se ha actualizado.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reComputer-R1000/n3uron/Image_15.gif" /></center>


### Explora más sobre WebVision

Hay mucho por descubrir en WebVision para mejorar tu experiencia con el reComputer R1000. Para obtener más detalles, consulta nuestra [Base de conocimientos sobre WebVision](https://docs.n3uron.com/docs/web-vision-configuration).

Lo que has visto es solo el comienzo. Aprovecha las infinitas posibilidades que ofrece su impresionante gama de casi 50 módulos. Atrévete a soñar en grande, innova y lleva tus proyectos a nuevas alturas con las avanzadas funcionalidades de N3uron. Para una exploración más profunda de esta potente plataforma, visita [https://n3uron.com/](https://n3uron.com/) y embárcate en un emocionante viaje de descubrimiento.
