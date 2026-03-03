---
description: Conectar el Botón IoT de Seeed Studio a ESPHome
title: Conectar el Botón IoT de Seeed Studio a ESPHome
keywords:
  - ESPHOME
  - IoT Button
  - ESP32-C6
image: https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/button_buzzer.webp
slug: /iot_button_for_esphome
last_update:
  date: 03/14/2025
  author: qiuyu wei, Citric
---

# Conectar el Botón IoT de Seeed Studio a ESPHome

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/button_buzzer.jpg" style={{width:600, height:'auto'}}/></div>

En este tutorial, te mostraremos cómo conectar el Botón IoT de Seeed Studio a Home Assistant usando ESPHome. Aprenderás cómo configurar el botón para detectar diferentes patrones de pulsación (clic simple, doble clic y pulsación larga) y activar diferentes acciones en tu hogar inteligente.

:::note
Si sigues este Wiki para conectar el Botón IoT a ESPHome, ten en cuenta la posible limitación:

**Activación Manual y Retraso de Reconexión:** Cada vez que quieras usar el botón, necesitas activarlo manualmente presionándolo. Después de activarse, el dispositivo necesitará reconectarse a la red, lo que puede tomar un breve período antes de que el botón pueda usarse nuevamente.

Si eliges el Botón IoT V2, habrá una función adicional de detección de energía en ESPHome sobre la generación anterior.
:::

## Materiales Requeridos

<div class="table-center">
  <table align="center">
    <tr>
      <th>Botón IoT de Seeed Studio</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/button.jpg" style={{width:250, height:'auto'}}/></div></td>
    </tr>
    <tr>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-IoT-Button-p-6419.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> Consigue Uno Ahora 🖱️</font></span></strong>
        </a>
      </div></td>
    </tr>
  </table>
</div>

El Seeed Studio IoT Button es un botón inteligente versátil con un chip ESP32-C6 integrado. Es un dispositivo completo e independiente que puede integrarse con Home Assistant para controlar varios dispositivos y activar automatizaciones. Con su chip ESP32-C6, ofrece bajo consumo de energía y conectividad confiable sin requerir placas de desarrollo adicionales.

## Instalar ESPHome en Home Assistant

 **Paso 1**. **Haz clic en Configuración** --> **Complemento** --> **TIENDA DE COMPLEMENTOS**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/1.png" style={{width:1000, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/1.5.png" style={{width:1000, height:'auto'}}/></div>

**Paso 2**. Busca **ESPHome**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/2.png" style={{width:1000, height:'auto'}}/></div>

**Paso 3**. Haz clic en **INSTALAR**, luego haz clic en **INICIAR**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/3.png" style={{width:1000, height:'auto'}}/></div>

**Paso 4**. Instalación exitosa

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/4.png" style={{width:1000, height:'auto'}}/></div>

## Agregar el IoT Button a ESPHome

**Paso 5**. Haz clic en **+NUEVO DISPOSITIVO**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/5.png" style={{width:1000, height:'auto'}}/></div>

**Paso 6**. Haz clic en **SIGUIENTE** y asigna a tu dispositivo un nombre de tu elección. Recomendamos usar "seeedstudio-iot-button" o algo similar.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/6.png" style={{width:600, height:'auto'}}/></div>

**Paso 7**. Selecciona tu tipo de dispositivo

Para el IoT Button con su ESP32-C6 integrado, selecciona "ESP32" como tipo de dispositivo. Modificaremos la configuración más tarde para especificar la variante correcta de ESP32.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/7.png" style={{width:580, height:'auto'}}/></div>

**Paso 8**. Dispositivo agregado exitosamente, finalmente haz clic en **OMITIR**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/8.png" style={{width:600, height:'auto'}}/></div>

## Configurar el IoT Button

### Usar Web Flasher (Método Recomendado)

La forma más fácil de comenzar con el IoT Button es usar la herramienta Web Flasher para instalar el firmware ESPHome precompilado directamente desde tu navegador.

**Paso 1**: Visita el sitio web [Seeed Studio IoT Button Firmware Flasher](https://gadgets.seeed.cc/).

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/iot_button_zigbee/3.png" style={{width:800, height:'auto'}}/></div>

**Paso 2**: Conecta tu IoT Button a tu computadora usando un cable USB.

**Paso 3**: Haz clic en el botón "Install" en la página del Web Flasher.

**Paso 4**: Selecciona el puerto USB correcto del diálogo emergente.

**Paso 5**: El navegador descargará automáticamente y flasheará el firmware a tu dispositivo.

**Paso 6**: Después de que el flasheo esté completo, el IoT Button creará su propia red WiFi. Conéctate a la red WiFi llamada "seeedstudio-iot-button" desde tu computadora o smartphone.

**Paso 7**: Una vez conectado, tu dispositivo debería abrir automáticamente una página de configuración. Si no, abre un navegador y navega a `http://192.168.4.1`.

**Paso 8**: En la página de configuración:

- Ingresa el nombre de tu red WiFi doméstica (SSID) y contraseña
- Asegúrate de que sea la misma red a la que está conectado tu Home Assistant
- Haz clic en "Save" para aplicar la configuración

**Paso 9**: El IoT Button se reiniciará y se conectará a tu red WiFi doméstica.

**Paso 10**: En Home Assistant, ve a Configuración > Dispositivos y Servicios. Deberías ver una notificación de que se ha descubierto un nuevo dispositivo ESPHome. Haz clic en "Configure" para agregar el dispositivo a Home Assistant.

**Paso 11**: Sigue las indicaciones para completar la configuración. El IoT Button ahora aparecerá en tu panel de Home Assistant con tres interruptores virtuales correspondientes a las diferentes acciones del botón.

### Método Alternativo: Usar el Panel de ESPHome

Si prefieres usar el panel de ESPHome para tener más control sobre la configuración, sigue los pasos a continuación.

### Agregar la Configuración de ESPHome

**Paso 1**. La tarjeta del dispositivo correspondiente aparecerá en la página de ESPHome, luego haz clic en **EDITAR**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/9.png" style={{width:1000, height:'auto'}}/></div>

**Paso 2**. Reemplaza toda la configuración con el siguiente código:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/10.png" style={{width:1000, height:'auto'}}/></div>

Debido a las frecuentes actualizaciones del código, por favor haz clic en el botón publicado a continuación para acceder al programa Yaml.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://github.com/Seeed-Studio/xiao-esphome-projects/blob/main/projects/seeedstudio-iot-button/seeedstudio-iot-button.yaml" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}>IoT Button V1 Yaml 🖱️</font></span></strong>
    </a>
    <a class="get_one_now_item" href="https://github.com/Seeed-Studio/xiao-esphome-projects/blob/main/projects/seeedstudio-iot-button/seeedstudio-iot-button-v2.yaml" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}>IoT Button V2 Yaml 🖱️</font></span></strong>
    </a>
</div>

:::note
Asegúrate de reemplazar "Your_WiFi_SSID" y "Your_WiFi_Password" con tus credenciales WiFi reales. La configuración WiFi debe coincidir con la red donde está ejecutándose tu servidor Home Assistant para asegurar la conectividad adecuada.
:::

### Entendiendo la Configuración

Desglosemos las partes clave de esta configuración:

1. **Configuración ESP32**:
   - Especifica la variante ESP32-C6 y el tipo de placa para el chip integrado del Botón IoT
   - Establece el tamaño de flash a 4MB
   - Utiliza el framework ESP-IDF que es requerido para ESP32-C6

2. **Configuración del Botón**:
   - Se conecta al GPIO9 donde el botón físico está cableado internamente
   - Invertido: True significa que el pin está en alto cuando no se presiona y va a bajo cuando se presiona
   - Configura tres patrones de presión diferentes:
     - Un solo clic corto (presionar y soltar rápidamente)
     - Doble clic (dos presiones rápidas)
     - Presión larga (mantener por 1-2.5 segundos)

3. **Interruptores Virtuales**:
   - Crea tres interruptores de plantilla que aparecerán en Home Assistant
   - Cada interruptor corresponde a un patrón de presión de botón diferente
   - Estos interruptores pueden ser utilizados en automatizaciones para controlar otros dispositivos

**Paso 3**. Después de completar la configuración, haz clic en **INSTALL** en la esquina superior derecha y luego selecciona **Plug into this computer**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/12.png" style={{width:1000, height:'auto'}}/></div>

**Paso 4**. Espera a que el proceso de compilación se complete. Luego haz clic en **Download project**, selecciona **Factory format** para descargar el archivo del proyecto, y después haz clic en **Open ESPHome Web**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/13.png" style={{width:1000, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/13.2.png" style={{width:1000, height:'auto'}}/></div>

**Paso 5**. Conecta el Botón IoT a tu computadora vía USB. Haz clic en **CONNECT** y selecciona el puerto serie correcto.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/13.3.png" style={{width:1000, height:'auto'}}/></div>

**Paso 6**. Haz clic en **INSTALL** para flashear el firmware a tu Botón IoT.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/15.png" style={{width:1000, height:'auto'}}/></div>

**Paso 7**. Si todo va bien, verás un mensaje de instalación exitosa.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/16.png" style={{width:1000, height:'auto'}}/></div>

## Añadiendo el Botón IoT a Home Assistant

**Paso 16**. Regresa a Home Assistant. Haz clic en **Settings** y luego selecciona **Devices & services**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/17.png" style={{width:1000, height:'auto'}}/></div>

**Paso 17**. Deberías ver una notificación sobre un nuevo dispositivo descubierto. Haz clic en **CONFIGURE**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/18.png" style={{width:1000, height:'auto'}}/></div>

**Paso 18**. Sigue las indicaciones para añadir el Botón IoT a Home Assistant. Puedes seleccionar a qué área pertenece el dispositivo y hacer clic en **FINISH**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/19.png" style={{width:1000, height:'auto'}}/></div>

**Paso 19**. El Botón IoT y sus tres interruptores virtuales ahora aparecerán en tu panel de control de Home Assistant.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/20.png" style={{width:1000, height:'auto'}}/></div>

## Creando Automatizaciones con el Botón IoT

Ahora que tu Botón IoT está configurado, puedes crear automatizaciones para controlar dispositivos en tu hogar inteligente. Vamos a crear una automatización simple que encienda una luz cuando presiones el botón.

**Paso 20**. En Home Assistant, ve a **Settings** > **Automations & scenes**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/21.png" style={{width:1000, height:'auto'}}/></div>

**Paso 21**. Haz clic en **CREATE AUTOMATION**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/22.png" style={{width:1000, height:'auto'}}/></div>

**Paso 22**. Configura tu automatización:

1. **Name**: Dale a tu automatización un nombre descriptivo, como "IoT Button Single Press - Turn On Light"
2. **Trigger**: Selecciona "State" como tipo de disparador
   - Entity: Selecciona "Switch 1" (para presión simple)
   - From: "off"
   - To: "on"
3. **Action**: Elige el dispositivo que quieres controlar
   - Por ejemplo, selecciona una luz y configúrala para que se encienda

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/23.png" style={{width:1000, height:'auto'}}/></div>

**Paso 23**. Haz clic en **SAVE** para crear la automatización.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/24.png" style={{width:1000, height:'auto'}}/></div>

## Uso Avanzado: Controlando Diferentes Dispositivos con Diferentes Patrones de Presión

Una de las características poderosas de la configuración del Botón IoT es la capacidad de detectar diferentes patrones de presión. Aquí tienes algunas ideas para usar cada patrón:

1. **Presión Simple (Switch 1)**:
   - Encender/apagar luces en la habitación actual
   - Alternar un dispositivo usado frecuentemente

2. **Presión Doble (Switch 2)**:
   - Activar una escena (ej., "Noche de Película" que atenúa las luces y enciende la TV)
   - Controlar un grupo de dispositivos simultáneamente

3. **Presión Larga (Switch 3)**:
   - Activar características de seguridad (armar/desarmar alarma)
   - Disparar rutinas de emergencia
   - Apagar múltiples dispositivos a la vez

Para configurar estas automatizaciones avanzadas, crea automatizaciones adicionales siguiendo los pasos anteriores, pero selecciona el interruptor apropiado (Switch 1, 2, o 3) como disparador y configura las acciones deseadas.

## Solución de Problemas

Si encuentras problemas con tu Botón IoT, aquí tienes algunos pasos comunes de solución de problemas:

1. **El botón no se conecta al WiFi**:
   - Verifica tus credenciales de WiFi en la configuración de ESPHome
   - Asegúrate de que tu red WiFi sea de 2.4GHz (ESP32-C6 soporta tanto 2.4GHz como 5GHz, pero 2.4GHz típicamente tiene mejor alcance)

2. **El botón no aparece en Home Assistant**:
   - Verifica que el botón y Home Assistant estén en la misma red
   - Reinicia el complemento de ESPHome y Home Assistant

3. **Las presiones del botón no se detectan**:
   - Verifica la configuración del pin GPIO (GPIO9 para el Botón IoT estándar)
   - Revisa los registros en ESPHome para ver si las presiones del botón están siendo detectadas

4. **Las automatizaciones no se disparan**:
   - Verifica que la automatización esté habilitada
   - Verifica que las condiciones del disparador coincidan exactamente (cambios de estado de "off" a "on")

## Solución de problemas

### P1: ¿Por qué mi dispositivo sigue desconectándose y no puede conectarse a internet después de reemplazar la batería? Puedo confirmar que la batería está cargada

Después de que la batería ha sido removida, debido a la estrategia de protección del chip de la batería 18650, necesita ser activada un poco por un cable de alimentación USB cargado para funcionar correctamente.

## Recursos

- **[GITHUB]** [Repositorio Github del Seeed IoT Button](https://github.com/Seeed-Studio/xiao-esphome-projects/tree/main/projects/seeedstudio-iot-button)
- **[PDF]** [PDF del esquemático del Seeed IoT Button](https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/Seeed_IoT_Button_SCH.pdf)
- **[SCH&PCB]** [Esquemático y PCB del Seeed IoT Button](https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/Seeed_IoT_Button_SCH&PCB.zip)

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
