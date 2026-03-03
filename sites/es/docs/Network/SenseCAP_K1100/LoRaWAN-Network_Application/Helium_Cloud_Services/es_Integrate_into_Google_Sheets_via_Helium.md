---
description: Google Sheets Integrado
title: Google Sheets Integrado
keywords:
- SenseCap
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Integrate_into_Google_Sheets_via_Helium
last_update:
  date: 1/13/2023
  author: shuxu hu
---
# Integrar en Google Sheets a través de Helium

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/83.jpg" /></div>

Google Sheets es una aplicación basada en web que permite a los usuarios crear, actualizar y modificar hojas de cálculo y compartir los datos en línea en tiempo real.

La aplicación de hojas de cálculo en línea Google Sheets permite a los usuarios crear, editar y formatear hojas de cálculo en línea para organizar y analizar información. Google Sheets a menudo se compara con Microsoft Excel, ya que ambas aplicaciones se utilizan para propósitos similares. Google Sheets es esencialmente la versión basada en la nube de Google de las características básicas de Microsoft Excel.

Gracias a las capacidades de integración de Helium, podemos guardar fácilmente los datos de sensores a través de Google Sheets y hacer algunos análisis de datos simples en consecuencia.

## Actualizable a Sensores Industriales

Con el [controlador S2110](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html) de SenseCAP y el [registrador de datos S2100](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html), puedes convertir fácilmente el Grove en un sensor LoRaWAN®. Seeed no solo te ayuda con la creación de prototipos, sino que también te ofrece la posibilidad de expandir tu proyecto con la serie SenseCAP de [sensores industriales](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP) robustos.

La carcasa IP66, configuración Bluetooth, compatibilidad con la red global LoRaWAN®, batería incorporada de 19 Ah, y el poderoso soporte de la APP hacen que el [SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP~LoRaWAN%20Device&product_module=Device) sea la mejor opción para aplicaciones industriales. La serie incluye sensores para humedad del suelo, temperatura y humedad del aire, intensidad de luz, CO2, EC, y una estación meteorológica 8 en 1. Prueba el último SenseCAP S210x para tu próximo proyecto industrial exitoso.

<table style={{marginLeft: 'auto', marginRight: 'auto'}}>
  <tbody>
    <tr><td colspan="4" bgcolor="#0e3c49" align="center"><font color="white" size="4"><strong>Sensor Industrial SenseCAP</strong></font></td></tr>
    <tr>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html" target="_blank"><div align="center"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2100.png" /></div></a></td>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html" target="_blank"><div align="center"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2101&S2103.png" /></div></a></td>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-S2102-LoRaWAN-Light-Intensity-Sensor-p-5355.html" target="_blank"><div align="center"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2102.png" /></div></a></td>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-S2103-LoRaWAN-CO2-Temperature-and-Humidity-Sensor-p-5356.html" target="_blank"><div align="center"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2101&S2103.png" /></div></a></td>
    </tr>
    <tr>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html" target="_blank"><strong>S2100 <br /> Registrador de Datos</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html" target="_blank"><strong>S2101 <br /> Temp. y Humedad del Aire</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2102-LoRaWAN-Light-Intensity-Sensor-p-5355.html" target="_blank"><strong>S2102 <br /> Luz</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2103-LoRaWAN-CO2-Temperature-and-Humidity-Sensor-p-5356.html" target="_blank"><strong>S2103 <br /> Temp. y Humedad del Aire y CO2</strong></a></td>
    </tr>
    <tr>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-S2104-LoRaWAN-Soil-Temperature-and-Moisture-Sensor-p-5357.html" target="_blank"><div align="center"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2104.png" /></div></a></td>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-S2105-LoRaWAN-Soil-Temperature-Moisture-and-EC-Sensor-p-5358.html" target="_blank"><div align="center"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2105.png" /></div></a></td>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html" target="_blank"><div align="center"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2110.png" /></div></a></td>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/sensecap-s2120-lorawan-8-in-1-weather-sensor-p-5436.html" target="_blank"><div align="center"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2120.png" /></div></a></td>
    </tr>
    <tr>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2104-LoRaWAN-Soil-Temperature-and-Moisture-Sensor-p-5357.html" target="_blank"><strong>S2104 <br /> Humedad y Temp. del Suelo</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2105-LoRaWAN-Soil-Temperature-Moisture-and-EC-Sensor-p-5358.html" target="_blank"><strong>S2105 <br /> Humedad y Temp. del Suelo y EC</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html" target="_blank"><strong>S2110 <br /> Controlador LoRaWAN®</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/sensecap-s2120-lorawan-8-in-1-weather-sensor-p-5436.html" target="_blank"><strong>S2120 <br /> Estación Meteorológica 8 en 1</strong></a></td>
    </tr>
  </tbody>
</table>

## Crear Formulario de Google

Si no te has registrado para una cuenta de Google antes de aprender este tutorial, por favor completa tu cuenta de Google [aquí](https://accounts.google.com/signup/v2/webcreateaccount?biz=false&flowName=GlifWebSignIn&flowEntry=SignUp&hl=en-GB) primero.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/67.png" /></div>

Una vez que hayas completado el registro de tu cuenta, por favor inicia sesión en la [página de Google Forms](https://docs.google.com/forms/u/0/). Luego, simplemente crea un nuevo Formulario de Google.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/68.png" /></div>

Recomendamos configurar las preguntas como "Respuesta corta".

Aquí, crearé una tabla usando el Módulo Vision AI como ejemplo. Esta tabla debería tener dos conjuntos de datos, uno para el número de personas detectadas y su nivel de confianza.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/K1100/69.png" /></div>

:::note
    Respuesta Corta necesita ser seleccionada para cada nueva etiqueta de sensor creada.
:::
Dirígete a la pestaña de respuestas y dile al formulario que quieres que tus resultados se envíen a Google Sheets haciendo clic en el botón de Google Sheets.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/K1100/70.png" /></div>

Simplemente ingresa el título del Formulario de Google en la nueva ventana emergente y haz clic en el botón **Crear** en la parte inferior derecha.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/K1100/71.png" /></div>

Asegúrate de que hemos creado las columnas requeridas.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/72.png" /></div>

## Hacer el Formulario Público

Regresa a nuestra página de configuración del formulario y haz clic en el botón **Enviar** en la esquina superior derecha para obtener el enlace para compartir el formulario.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/73.png" /></div>

Obtendrás un enlace para compartir como este.

`https://docs.google.com/forms/d/e/1FAIpQLSce9ozQMVwdgIYXYyutRPeE5opGba6724QGEN_I_dvoEH_Muw/viewform?usp=sf_link`

Solo necesitamos el ID del formulario, así que vamos a eliminar el prefijo `https://docs.google.com/forms/d/e/` y el sufijo `/viewform?usp=sf_link`. Deberíamos quedarnos con una cadena grande que no contenga barras diagonales.

`1FAIpQLSce9ozQMVwdgIYXYyutRPeE5opGba6724QGEN_I_dvoEH_Muw`

Por favor registra este ID, que será usado en la integración de Helium.

## Agregar Integración de Google Sheets en Helium

Regresa a Helium y agrega una integración de Google Sheets en Console, ve a Integraciones en el menú del lado izquierdo. Selecciona la integración a agregar - en este caso, la integración de Google Sheets como se muestra a continuación.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/74.png" /></div>

Haz clic en **Agregar Integración** en la nueva página.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/K1100/75.png" /></div>

En la nueva página, ingresamos el ID del formulario que obtuvimos arriba en el campo correspondiente y hacemos clic en **Obtener Campos del Formulario de Google** para verificar si el ID es correcto. Si, después de hacer clic en él, podemos obtener el contenido de las etiquetas en las columnas del formulario, el enlace es correcto.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/76.png" /></div>

Haz clic en **Generar Cuerpo de Función con Campos Anteriores** en la parte inferior y Helium generará automáticamente el decodificador requerido para nosotros.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/77.png" /></div>

:::tip
En este punto, no tienes que apresurarte a hacer clic en el botón Agregar Integración a la derecha, ya que la integración aún necesita una pequeña modificación para acomodar los valores del sensor que hemos transmitido.
:::

## Crea tu Decodificador

Hemos preparado el código para el decodificador completo requerido para importar todos los sensores del kit a Google Sheets, por favor consulta la tabla a continuación.

Antes de usar el código del decodificador para el sensor correspondiente, por favor asegúrate de haber seguido el tutorial anterior para crear y compartir el Formulario de Google. Y si quieres usar el código proporcionado por nosotros directamente, **la etiqueta del sensor en tu formulario también debe coincidir con el código**.

<table align="center">
  <tbody><tr>
      <th>Tipo de Sensor</th>
      <th>Dirección de Descarga</th>
    </tr>
    <tr>
      <td align="center">Sensor de luz integrado de Wio Terminal</td>
      <td align="center"><a href="https://github.com/limengdu/Seeed-Studio-LoRaWAN-Dev-Kit/blob/main/Google-sheets-decoder/light.js">Descargar</a></td>
    </tr>
    <tr>
      <td align="center">Sensor IMU integrado de Wio Terminal</td>
      <td align="center"><a href="https://github.com/limengdu/Seeed-Studio-LoRaWAN-Dev-Kit/blob/main/Google-sheets-decoder/IMU.js">Descargar</a></td>
    </tr>
    <tr>
      <td align="center">Sensor de Humedad del Suelo</td>
      <td align="center"><a href="https://github.com/limengdu/Seeed-Studio-LoRaWAN-Dev-Kit/blob/main/decoder/soil-moisture-data-decoder.js">Descargar</a></td>
    </tr>
    <tr>
      <td align="center">Sensor de Gas VOC y eCO2 (SGP30)</td>
      <td align="center"><a href="https://github.com/limengdu/Seeed-Studio-LoRaWAN-Dev-Kit/blob/main/Google-sheets-decoder/sgp30.js">Descargar</a></td>
    </tr>
    <tr>
      <td align="center">Sensor de Temp&amp;Humedad (SHT40)</td>
      <td align="center"><a href="https://github.com/limengdu/Seeed-Studio-LoRaWAN-Dev-Kit/blob/main/Google-sheets-decoder/sht40.js">Descargar</a></td>
    </tr>
    <tr>
      <td align="center">Módulo Vision AI</td>
      <td align="center"><a href="https://github.com/limengdu/Seeed-Studio-LoRaWAN-Dev-Kit/blob/main/Google-sheets-decoder/visionai.js">Descargar</a></td>
    </tr>
  </tbody></table>

:::note
El decodificador utilizado por Google Forms no puede ser usado con el decodificador proporcionado en [Conectando a Helium](https://wiki.seeedstudio.com/es/Connecting-to-Helium/#write-decoders-function-for-different-sensors).
:::
Continuando desde el paso anterior, necesitamos copiar y reemplazar el área de código de Helium con el codec del sensor que estás usando, y luego simplemente hacer clic en Add Integration en el lado derecho.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/78.png" /></div>

Por supuesto, no olvides que necesitamos agregar la integración del decodificador y Google Forms al **Flow**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/79.png" /></div>

## Subir código para enviar datos a Helium

Por favor sigue las instrucciones en el [tutorial Conectando a Helium](https://wiki.seeedstudio.com/es/Connecting-to-Helium/#upload-code-send-data-to-helium) para subir el código y enviar los valores de tu sensor a Helium.

Una vez que los datos hayan comenzado a enviarse, puedes ver una actualización en vivo de los datos desde Google Sheets.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/81.png" /></div>

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/84.png" /></div>

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/85.png" /></div>

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/86.png" /></div>

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/87.png" /></div>

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/88.png" /></div>

También puedes hacer lo que hice arriba, agregar una variedad de estilos de tabla a Google Sheets para hacerlo más intuitivo y más fácil para que veas los datos o entiendas las tendencias en tus datos.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/K1100/80.png" /></div>

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
