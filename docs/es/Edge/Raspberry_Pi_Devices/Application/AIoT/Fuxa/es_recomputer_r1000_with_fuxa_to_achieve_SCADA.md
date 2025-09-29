---
description: Este artículo presenta principalmente cómo usar fuxa para lograr SCADA.

title: reComputer R1000 con fuxa para lograr SCADA
keywords:
  - Edge Controller
  - reComputer R1000
  - fuxa
  - SCADA
image: https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png
slug: /es/reComputer_r1000_fuxa_achieve_scada
last_update:
  date: 10/8/2024
  author: ShuishengPeng
---

## Introducción

FUXA es un software de Visualización de Procesos (SCADA/HMI/Dashboard) basado en web. Con FUXA puedes crear visualizaciones de procesos modernas con diseños individuales para tus máquinas y visualización de datos en tiempo real. Soporta Modbus RTU/TCP, Protocolo Siemens S7, OPC-UA, BACnet IP, MQTT, y otros protocolos.

Este artículo presenta principalmente cómo usar fuxa para lograr SCADA. En el artículo, fuxa recibe datos de `node-red` y `OPC UA Simulator`, y los muestra usando `chart` y `Circular Gauge`; al mismo tiempo, dibuja una serie de patrones para simular procesos industriales.

## Comenzando

Antes de iniciar este proyecto, es posible que necesites preparar tu hardware y software con anticipación como se describe aquí.

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

### Preparación del Software

* Python 3.11 puede ser incompatible con fuxa. Si tu versión de Python es 3.11, por favor considera cambiar a una versión diferente de Python.
- Usando [fuxa](https://github.com/frangoteam/FUXA) en reComputer R1000. Puedes consultar los siguientes pasos para instalar fuxa en reComputer R1000

  ```shell
    ## You need to have installed Node Version 14 || 16 || 18.
    wget https://nodejs.org/dist/v18.20.3/node-v18.20.3-linux-arm64.tar.xz
    tar -xf node-v18.20.3-linux-arm64.tar.xz
    cd node-v18.20.3-linux-arm64
    sudo cp -R * /usr/local/
    node -v
    npm -v
    ## Next install FUXA from npm
    sudo npm install -g --unsafe-perm @frangoteam/fuxa
    sudo fuxa
  ```

- Respecto a cómo usar fuxa para implementar la interacción de datos OPC-UA, puedes consultar esta [wiki](https://wiki.seeedstudio.com/es/reComputer_r1000_fuxa_opc_ua/).
- Respecto a cómo usar fuxa para implementar la interacción de datos con cliente mqtt, puedes consultar esta [wiki](https://wiki.seeedstudio.com/es/reComputer_r1000_fuxa_mqtt_client/).A diferencia de esta wiki, los datos que publicamos en `node-red` son procesados por el módulo `function`, y el módulo `loop` se usa para publicación continua.El código del módulo `function` es el siguiente:

  ```java
  ## On Start
    global.set('firstTank', '10000');
    global.set('secondTank', '0');
    global.set('thirdTank', '0');
  ```

  ```java
  ## On Message
    var firstTank = global.get('firstTank');
    var secondTank = global.get('secondTank');
    var thirdTank = global.get('thirdTank');
    if (firstTank <= 0) {
        global.set('firstTank', 10000);
        global.set('secondTank', 0);
        global.set('thirdTank', 0);
        firstTank=10000;
        secondTank=0;
        thirdTank=0;
    }

    firstTank = firstTank - 3;
    secondTank++;
    thirdTank++;
    thirdTank++;
    global.set('firstTank',firstTank);
    global.set('secondTank',secondTank);
    global.set('thirdTank',thirdTank);
    var data = {
        "firstTank":firstTank,
        "scondTank":secondTank,
        "thirdTank":thirdTank,
    };
    msg.payload = data;
    return msg;
  ```

  Lo principal es encapsular firstTank, secondTank y thirdTank en formato json, y luego hacer que el módulo mqtt-out lo publique.

  <center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/node-red-mqtt.png" /></center>

- Haz clic en el botón `+` en la esquina inferior derecha de fuxa, ingresa `Name`, `Type`, selecciona `Internal`, y finalmente haz clic en `OK` para obtener un nuevo módulo. Este módulo no tiene la función de comunicarse con dispositivos externos, pero nos permite agregar etiquetas personalizadas. Estas etiquetas soportan tres tipos de datos como `boolean`, `number` y `string`, lo que puede facilitar nuestro trabajo posterior.

    <center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/creat_internal.gif" /></center>

### Configuración de Hardware

Usamos cables Ethernet para conectar la PC W10 y reComputer R1000 a un switch para asegurar que estén en el mismo segmento de red.

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/r1000_connection.png" alt="pir" width="500" height="auto" /></div>

## Introducción a la visualización y controles principales

### Gráfico

Hay gráficos de curvas e histogramas disponibles en fuxa. Tomando el gráfico de curvas como ejemplo. Las propiedades de `Chart` son como se muestra en la figura. Puedes configurar el `Name`, `font size`, `data format`, `time format`, `X axis and Y axis styles` de `Chart` y otras propiedades. Lo más importante es `Chart to show`, que determina la fuente de datos que queremos mostrar y el formato de las líneas.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/chart_property.png" /></center>

Hacemos clic en `Chart to show`, luego seleccionamos `New Chart`, aparecerá una nueva ventana emergente, hacemos clic en el botón `+` en la esquina superior derecha de la nueva ventana emergente, ingresamos `Name`, y luego hacemos clic en `OK`, puedes crear exitosamente una nueva configuración de línea. Luego haz clic en la configuración de línea recién creada, después haz clic en `Add Line`, selecciona los datos que quieres mostrar, y finalmente haz clic en `OK`, aparecerá una nueva curva. Se pueden agregar múltiples curvas a través de este proceso. Finalmente haz clic en `OK` para completar la configuración.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/new_chart_line_confiigure.png" /></center>

Usamos `Chart` aquí para mostrar datos de `Prosys OPC UA Simulation Server`. Puedes ver que los datos se muestran exitosamente en forma de gráfico.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/creat_chart.gif" /></center>

### Interruptor

Los atributos del interruptor son como se muestra en la figura. Seleccionamos un dato booleano llamado `swich_1` como el estado del interruptor. Puedes configurar el estado de visualización del `swich` cuando está encendido o apagado, incluyendo configuración de color, visualización de texto, etc.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/swich_property.png" /></center>

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/creat_swich.gif" /></center>

### Forma

Fuxa proporciona una variedad de `shape` para que los usuarios dibujen interfaces de visualización industrial. Cada `shape` tiene tres atributos, a saber `Property`, `Events` y `Actions`.
Entre ellos, `Property` se usa principalmente para configurar el color de `shape`. Al vincular un `Tag`, `shape` muestra diferentes colores según el cambio del valor del `Tag`. Puedes hacer clic en el `+` en la esquina superior derecha para establecer diferentes colores.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/shap_setting_property.png" /></center>

Aquí tomamos un patrón de almacén como ejemplo, llenando su color con `Property`.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/fill_color.gif" /></center>

`Events` tiene principalmente dos contenidos, `Type` representa el tipo de evento, y `Action` representa la acción después de que se active el evento.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/shap_setting_Events.gif" /></center>

`Actions` necesita estar vinculado a un `Tag`, y diferentes valores de `Tag` pueden activar diferentes acciones. Establece los valores de `Min` y `Max`, y luego selecciona la acción deseada en la opción `Type`. Cuando los datos del `Tag` alcanzan el intervalo entre Min y Max, se activará la acción correspondiente.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/shape_setting_actions.png" /></center>

Aquí tomamos un patrón de almacén como ejemplo, controlando su rotación y parada a través de `Actions`.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/turn_use_action.gif" /></center>

### Tubería

Al mostrar procesos industriales, puedes usar `pipe` para representar la dirección del flujo de materiales industriales. Las propiedades de la tubería son como se muestra en la figura.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/pipe_prorety.png" /></center>

La parte `Property` puede establecer el ancho, color y otras propiedades de la tubería. `Actions` también necesita estar vinculado a un `Tag`. Diferentes valores de etiqueta permiten que la tubería tenga diferentes acciones. Hay cuatro acciones principales: `Stop`, `Turn clockwise`, `Turn anticlockwise` y `Hide conten`. Este artículo muestra dos acciones: `Stop` y `Turn clockwise`.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/creat_pipe.gif" /></center>

Para simular el proceso industrial, agregamos patrones como dos tanques y algunas tuberías.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/after_add.gif" /></center>

### Medidor Circular

Además de `charts`, `Circular Gauge` también puede mostrar datos en tiempo real. Hay tres `Circular Gauge` disponibles.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/three_gauge.png" /></center>

Al usarlo, necesitas especificar los datos a mostrar vinculando un `Tag`. Al mismo tiempo, necesitas especificar el rango máximo de datos que el instrumento puede mostrar. También puedes configurar atributos como líneas en el panel del instrumento. Aquí seleccionamos los datos de `Tank1` en el tema `/dev/fromfuxa` para mostrar.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/gauge_show_data.gif" /></center>

Después de eso, los datos de `Tank2` y `Tank3` también se muestran a través del `Circular Gauge` para indicar la capacidad actual de cada tanque.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/add_gauge.gif" /></center>

### Deslizador

Usa el deslizador para ajustar variables como flujo, presión, etc. Sus propiedades se muestran en la figura. Puedes configurar su color y formato. Al usarlo, necesitas vincular un `Tag`. Entonces el deslizador puede ajustar el valor del `Tag` en tiempo real. Aquí vinculamos un tag personalizado `Flow control 1`

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/slider_property.png" /></center>

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/slider.gif" /></center>

### Alarma

En el proceso industrial, ciertos parámetros excesivos (como la presión) pueden causar algunos peligros. En este momento, se necesita una alarma para recordar al personal que puede haber algunos problemas aquí. Fuxa soporta el monitoreo en tiempo real de un cierto valor y activa una alarma cuando el valor alcanza un cierto rango peligroso.
Por defecto, la interfaz de fuxa no abre la barra de alarma. Necesitas configurarla para abrir la barra de alarma.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/start_alarm.gif" /></center>

Después de que se abre la barra de alarma, puedes configurar la alarma. Haz clic en el botón de configuración en la esquina superior izquierda, luego haz clic en `Alarms`, y después haz clic en `+` en la nueva ventana para mostrar la ventana de configuración de alarma. En este momento, un `Tag` necesita ser vinculado, y el sistema monitoreará el valor del `Tag`. `Alarms` tiene cuatro niveles, a saber `High High`, `High`, `Low`, `Message`. Puedes configurar un rango de valor de `Tag` para cada nivel, y cuando el valor del `Tag` alcance este rango, se activarán alertas del nivel correspondiente.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/alarm_show.gif" /></center>

### Demo SCADA

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/final_demo.gif" /></center>

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
