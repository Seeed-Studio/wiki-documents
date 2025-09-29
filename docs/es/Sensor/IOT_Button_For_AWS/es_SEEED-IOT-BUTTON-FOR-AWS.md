---
description: SEEED IOT BUTTON FOR AWS
title: SEEED IOT BUTTON FOR AWS
keywords:
- IOT_Button_For_AWS
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/SEEED-IOT-BUTTON-FOR-AWS
last_update:
  date: 1/13/2023
  author: jianjing Huang
---


![](https://files.seeedstudio.com/wiki/Seeed-IOT-BUTTON-FOR-AWS/img/Side.png)

El Seeed IoT Button For AWS es un botón programable basado en Wi-Fi que es fácil de configurar y simple de usar. Puedes usar el Seeed IoT Button For AWS para capturar comentarios rápidos de los clientes sin abrumarlos con cuestionarios que consumen mucho tiempo. Está diseñado para empresas y desarrolladores para integrarse fácilmente con flujos de trabajo y sistemas empresariales existentes usando el [servicio AWS IoT 1-Click](https://docs.aws.amazon.com/iot-1-click/latest/developerguide/what-is-1click.html). Y este IoT Button es completamente compatible con la aplicación oficial AWS IoT 1-Click para iOS y Android. La batería para este dispositivo es una batería recargable de iones de litio NCR18650B. Por favor, ten en cuenta que no hay batería incluida en el paquete, aunque la batería está disponible en tiendas de conveniencia regulares y el cliente necesita prepararla por sí mismo. Y lo que proponemos es Panasonic NCR18650B 3.6V 3400mAh. Hay un soporte para este IoT Button. El cliente puede pegarlo en la pared u otra superficie y fácilmente colocar el IoT Button dentro y sacarlo del soporte. El Seeed IoT Button for AWS soporta tres tipos de clics: simple, doble y pulsación larga, y 3 LEDs para diferentes indicaciones.

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Seeed-IoT-Button-for-AWS-p-4527.html" target="_blank"><img src="https://github.com/SeeedDocument/wiki_english/raw/master/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## Características

- Eventos de Clic Simple/Doble/Pulsación Larga
- LED de Estado de Alimentación/Evento/Configuración Wi-Fi Integrado
- Equipado con Realtek RTL8720DN, Wi-Fi de banda dual 2.4Ghz / 5Ghz
- Batería NCR18650B Removible y Recargable
- Protección e indicación de polaridad inversa de batería
- Carga USB Tipo-C
- Soporte Adhesivo

## Especificaciones

|Parámetro|Valor|
|---|---|
|Tamaño|92\*32\*25mm|
|MCU|Realteak, RTL8720DNL 20MHz Cortex M0; 200MHz Cortex M4F|
|Flash|4MB |
|Botón| 100,000 Ciclos|
|LED|RGB|
|Wi-Fi|802.11 a/b/g/n 2.4GHz & 5GHz|
|Bluetooth|BLE 5.0|
|Batería|Batería recargable de iones de litio 3.6V 18650|
|Interfaz de Carga|USB Tipo-C|
|Corriente de Carga|500mA|
|Tiempo de carga|4-6 Horas(Según la capacidad de la batería)|
|Protección de Batería|Sobrecarga, Sobrecorriente, Sobredescarga, Protección de polaridad inversa|
|Actualización de Firmware|Soporta OTA|

## Descripción General del Hardware

<div align="center">
<figure>
  <p style={{textAlign: 'center'}}><a href="https://files.seeedstudio.com/wiki/Seeed-IOT-BUTTON-FOR-AWS/img/Seeed_IOT_Button_HardwareOverview.png" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-IOT-BUTTON-FOR-AWS/img/Seeed_IOT_Button_HardwareOverview.png" /></a></p>
</figure>
</div>

### Indicaciones de Estado LED

<table style={{borderCollapse: 'collapse', borderSpacing: 0}} className="tg"><tbody><tr><th style={{fontFamily: 'Arial, sans-serif', fontSize: 14, fontWeight: 'bold', padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', backgroundColor: '#9b9b9b', color: '#ffffff', textAlign: 'center', verticalAlign: 'top'}}>Estado del LED de Alimentación</th><th style={{fontFamily: 'Arial, sans-serif', fontSize: 14, fontWeight: 'bold', padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', backgroundColor: '#9b9b9b', color: '#ffffff', textAlign: 'center', verticalAlign: 'top'}}>Indicación</th></tr><tr><td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>Batería Invertida</td><td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>Rojo</td></tr><tr><td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>Batería Cargando</td><td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>Verde ENCENDIDO</td></tr><tr><td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>Batería Terminó de Cargar</td><td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>Verde APAGADO</td></tr><tr><td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'black', fontWeight: 'bold', backgroundColor: '#9b9b9b', color: '#ffffff', textAlign: 'center', verticalAlign: 'top'}}>Estado del LED de Evento</td><td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'black', fontWeight: 'bold', backgroundColor: '#9b9b9b', color: '#ffffff', textAlign: 'center', verticalAlign: 'top'}}>Indicación</td></tr><tr><td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'black', textAlign: 'left', verticalAlign: 'top'}}>Rojo Siempre</td><td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'black', textAlign: 'left', verticalAlign: 'top'}}>El certificado no ha sido grabado o el certificado es inválido</td></tr><tr><td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'black', textAlign: 'left', verticalAlign: 'top'}}>Blanco parpadea -&gt; Verde</td><td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'black', textAlign: 'left', verticalAlign: 'top'}}>Evento enviado exitosamente</td></tr><tr><td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'black', textAlign: 'left', verticalAlign: 'top'}}>Blanco parpadea -&gt; Rojo</td><td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'black', textAlign: 'left', verticalAlign: 'top'}}>Evento falló al enviarse</td></tr><tr><td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'black', textAlign: 'left', verticalAlign: 'top'}}>Blanco parpadea -&gt; Naranja</td><td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'black', textAlign: 'left', verticalAlign: 'top'}}>Conexión Wi-Fi falló, por favor verifique el router o cambie la configuración de red</td></tr><tr><td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'black', textAlign: 'left', verticalAlign: 'top'}}>Blanco parpadea -&gt; Púrpura</td><td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'black', textAlign: 'left', verticalAlign: 'top'}}>La conexión al servidor falló, por favor verifique el entorno de red</td></tr><tr><td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'black', fontWeight: 'bold', backgroundColor: '#9b9b9b', color: '#ffffff', textAlign: 'center', verticalAlign: 'top'}}>Estado del LED de Configuración Wi-Fi</td><td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'black', fontWeight: 'bold', backgroundColor: '#9b9b9b', color: '#ffffff', textAlign: 'center', verticalAlign: 'top'}}>Indicación</td></tr><tr><td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'black', textAlign: 'left', verticalAlign: 'top'}}>Azul parpadeando</td><td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'black', textAlign: 'left', verticalAlign: 'top'}}>Configuración de red BLE</td></tr></tbody></table>

## Comenzando

### Encendido

El primer paso para comenzar es encender el botón IoT. Hay dos formas de encender los botones:

#### Método 1 - USB Tipo-C

Simplemente conecta el cable USB Tipo-C al puerto USB para encender el dispositivo. Deberías ver que el LED indicador de alimentación parpadea **Verde** una vez.

:::note
Después de que la luz verde parpadee una vez, también deberías ver el LED parpadear una luz verde con un brillo muy bajo. Puedes verlo en un entorno más oscuro.
:::

#### Método 2 - Usando Batería

También puedes usar la batería para encender el botón IoT. Abre la carcasa (consulta el gif a continuación) e inserta la batería. Una vez que la batería esté instalada, también necesitarás conectar el botón IoT a una computadora o un adaptador de corriente a través de USB Tipo-C **una vez** para inicializar el circuito de la batería. Deberías ver que el LED indicador de alimentación está **Verde**. Ahora puedes quitar la conexión USB y el LED se apagará y todo estará listo.

:::note
Cuando el LED de Estado de Alimentación está rojo, ¡indica que la batería está invertida!
:::

#### Cómo Sacar la Carcasa

El siguiente gif demuestra cómo sacar la carcasa usando la Herramienta de Apertura de Palanca de Plástico Triangular proporcionada en el paquete.

<div align="center"><img width ="{250}" src="https://files.seeedstudio.com/wiki/Seeed-IOT-BUTTON-FOR-AWS/img/takingApart.gif"/></div>

### Configurando Wi-Fi en el Botón

1.Descarga la aplicación más reciente AWS IoT 1-Click desde Apple App Store o Google Play Store

2.Inicia la **Aplicación AWS IoT 1-Click** y regístrate con una cuenta de Amazon AWS

:::note
Por favor asegúrate de que el Bluetooth esté activado, o aparecerá un error como se muestra.
:::

<div align="center"><img width ="{250}" src="https://files.seeedstudio.com/wiki/Seeed-IOT-BUTTON-FOR-AWS/img/Bluetooth-error.jpg"/></div>

3.Presiona **Reclamar con ID de Dispositivo** en la Aplicación. Presiona **Escanear** en la aplicación y Escanea el **DSN** desde la parte inferior del Botón IoT Seeed para AWS.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Seeed-IOT-BUTTON-FOR-AWS/img/05.png"/></div>

4.Presiona **Configurar**

5.Presiona tu **Botón IoT Seeed para AWS** durante 7 segundos hasta que la luz azul parpadee

<div align="center"><img width ="{250}" src="https://files.seeedstudio.com/wiki/Seeed-IOT-BUTTON-FOR-AWS/img/07-1.png"/></div>

6.Selecciona una red Wi-Fi de la lista de redes. Esta es la red Wi-Fi que quieres que usen tus botones

<div align="center"><img width ="{250}" src="https://files.seeedstudio.com/wiki/Seeed-IOT-BUTTON-FOR-AWS/img/08.png"/></div>

7.Ingresa la contraseña (si la hay) para la red Wi-Fi y Continúa

<div align="center"><img width ="{250}" src="https://files.seeedstudio.com/wiki/Seeed-IOT-BUTTON-FOR-AWS/img/09.png"/></div>

8.Espera hasta que aparezca configuración exitosa en la Aplicación y presiona **Finalizar**. La configuración está completa

<div align="center"><img width ="{500}" src="https://files.seeedstudio.com/wiki/Seeed-IOT-BUTTON-FOR-AWS/img/10.png"/></div>

¡Ahora puedes comenzar a jugar con tu servicio AWS 1-Click!

Por favor asegúrate de actualizar al firmware más reciente siguiendo [**esto**](https://wiki.seeedstudio.com/es/SEEED-IOT-BUTTON-FOR-AWS/#ota-update).

### Instrucciones de Operación

- **Clic Simple:** Enviar evento de clic simple

- **Doble-Clic:** Enviar evento de doble clic

- **Presión Larga(2s~5s):** Enviar evento de presión larga
  
- **Presión Larga(>7s):** Entrar al modo de configuración de red BLE. En este modo, otros eventos están bloqueados. Si necesitas salir manualmente del modo de distribución BLE, puedes mantenerlo presionado por más de 7s nuevamente, y saldrá automáticamente en dos minutos.

## Actualización OTA

Mantén presionado **15s** para comenzar a buscar nuevas actualizaciones de versión:

1. **Mantén presionado (>7s)**, el LED de Configuración Wi-Fi comienza a parpadear. Si se suelta ahora entrará en modo de configuración de red.

2. Continúa **manteniendo presionado >8s (total > 15s)**, el LED de Estado de Evento comienza a parpadear en azul y entra en modo OTA.

**Cuando es la versión más reciente**, el LED de Estado de Evento parpadea de **Azul** a **Verde**. Para más información, consulta la tabla a continuación:

<table style={{borderCollapse: 'collapse', borderSpacing: 0}} className="tg"><tbody><tr><th style={{backgroundColor: '#9b9b9b', borderColor: '#000000', borderStyle: 'solid', borderWidth: 1, color: '#ffffff', fontFamily: 'Arial, sans-serif', fontSize: 14, fontWeight: 'bold', overflow: 'hidden', padding: '10px 5px', textAlign: 'center', verticalAlign: 'middle', wordBreak: 'normal'}}>Estado del LED de Evento</th><th style={{backgroundColor: '#9b9b9b', borderColor: '#000000', borderStyle: 'solid', borderWidth: 1, color: '#ffffff', fontFamily: 'Arial, sans-serif', fontSize: 14, fontWeight: 'bold', overflow: 'hidden', padding: '10px 5px', textAlign: 'center', verticalAlign: 'middle', wordBreak: 'normal'}}>Indicación</th></tr><tr><td style={{borderColor: 'black', borderStyle: 'solid', borderWidth: 1, fontFamily: 'Arial, sans-serif', fontSize: 14, overflow: 'hidden', padding: '10px 5px', textAlign: 'left', verticalAlign: 'middle', wordBreak: 'normal'}}>Parpadea azul -&gt; Verde</td><td style={{borderColor: 'black', borderStyle: 'solid', borderWidth: 1, fontFamily: 'Arial, sans-serif', fontSize: 14, overflow: 'hidden', padding: '10px 5px', textAlign: 'left', verticalAlign: 'middle', wordBreak: 'normal'}}>Actualización enviada exitosamente</td></tr><tr><td style={{borderColor: 'black', borderStyle: 'solid', borderWidth: 1, fontFamily: 'Arial, sans-serif', fontSize: 14, overflow: 'hidden', padding: '10px 5px', textAlign: 'left', verticalAlign: 'middle', wordBreak: 'normal'}}>Parpadea azul -&gt; Rojo</td><td style={{borderColor: 'black', borderStyle: 'solid', borderWidth: 1, fontFamily: 'Arial, sans-serif', fontSize: 14, overflow: 'hidden', padding: '10px 5px', textAlign: 'left', verticalAlign: 'middle', wordBreak: 'normal'}}>Envío de actualización falló</td></tr><tr><td style={{borderColor: 'black', borderStyle: 'solid', borderWidth: 1, fontFamily: 'Arial, sans-serif', fontSize: 14, overflow: 'hidden', padding: '10px 5px', textAlign: 'left', verticalAlign: 'middle', wordBreak: 'normal'}}>Parpadea azul -&gt; Naranja</td><td style={{borderColor: 'black', borderStyle: 'solid', borderWidth: 1, fontFamily: 'Arial, sans-serif', fontSize: 14, overflow: 'hidden', padding: '10px 5px', textAlign: 'left', verticalAlign: 'middle', wordBreak: 'normal'}}>Falló la conexión Wi-Fi, por favor verifica el router o cambia la configuración de red</td></tr><tr><td style={{borderColor: 'black', borderStyle: 'solid', borderWidth: 1, fontFamily: 'Arial, sans-serif', fontSize: 14, overflow: 'hidden', padding: '10px 5px', textAlign: 'left', verticalAlign: 'middle', wordBreak: 'normal'}}>Parpadea azul -&gt; Púrpura</td><td style={{borderColor: 'black', borderStyle: 'solid', borderWidth: 1, fontFamily: 'Arial, sans-serif', fontSize: 14, overflow: 'hidden', padding: '10px 5px', textAlign: 'left', verticalAlign: 'middle', wordBreak: 'normal'}}>Falló la conexión al servidor, por favor verifica el entorno de red</td></tr></tbody></table>

## Preguntas Frecuentes

**P1.** El SN (Número de Serie) de la carcasa exterior está borrado.

También hay una etiqueta de SN de respaldo dentro de la carcasa del botón AWS, debajo de la batería.

<div align="center"><img width ="{250}" src="https://files.seeedstudio.com/wiki/Seeed-IOT-BUTTON-FOR-AWS/img/SN.png"/></div>

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarle diferentes tipos de soporte para asegurar que su experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
