---
description: Primeros pasos con XIAO ePaper Display Board(ESP32-S3) - EE05
sku: 100057220
title: Primeros pasos con EE05
image: https://files.seeedstudio.com/wiki/Epaper/EE05/22_2.webp
slug: /epaper_ee05
sidebar_position: 4
last_update:
  date: 09/22/2026
  author: Nemo
createdAt: '2026-04-07'
url: https://wiki.seeedstudio.com/es/epaper_ee05/
updatedAt: '2026-09-22'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Steppers from '@site/src/components/utils/Stepper';

# Primeros pasos con XIAO ePaper Display Board - EE05

<div class="table-center">
<table align="center">
    <tr>
        <th>XIAO ePaper Display Board EE05</th>
    </tr>
    <tr>
    <td><div align="center"><img width ={300} src="https://files.seeedstudio.com/wiki/Epaper/EE05/22_2.jpg"/></div>
    <div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ePaper-Display-Board-EE05-p-6755.html" target="_blank">
                <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
        </a>
    </div></td>
    </tr>
 </table>
</div>

## Introducción

Impulsada por el **XIAO ESP32-S3 Plus**, la placa de pantalla EE05 es compatible con una amplia gama de pantallas ePaper de 24 pines y permite el diseño e implementación de interfaces de usuario sin código con SenseCraft Seeedash. Con IO de extensión y un interruptor de alimentación para conector de batería, es ideal para aplicaciones de pantalla inteligente de bajo consumo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE05/4.jpg" style={{width:800, height:'auto'}}/></div>

### Características

- **Impulsada por XIAO ESP32-S3 Plus:** Funciona inmediatamente cuando se conecta a una pantalla ePaper compatible.
- **Compatibilidad versátil de pantalla:** Compatible con una amplia gama de pantallas ePaper de 24 pines para distintos requisitos de proyecto.
- **Puerto de extensión IO:** Permite la conexión de sensores adicionales, como sensores de temperatura y humedad, para una funcionalidad mejorada.
- **Conector BAT con interruptor:** Proporciona una conexión de batería sencilla e integra un interruptor, lo que permite una gestión de energía eficiente y ahorro energético.
- **Diseño e implementación de UI sin código con SenseCraft Seeedash:** Diseña e implementa paneles personalizados sin esfuerzo con SenseCraft Seeedash, nuestra nueva plataforma sin código impulsada por IA. Crea tu interfaz mediante simples elementos de arrastrar y soltar, elige entre nuestras ricas plantillas o deja que la IA te ayude. Conecta datos en tiempo real desde APIs web y luego implementa tu panel terminado en la pantalla ePaper con solo unos clics. Desde el diseño hasta la configuración de datos y la implementación, todo sucede de forma fluida en una única plataforma.

### Especificaciones

| Parámetro | Descripción |
|---|---|
| **Procesador** | XIAO ESP32-S3 Plus |
| **Conector ePaper** | SPI FPC 24 pines 0,5 mm |
| **Conector de batería** | JST 2,0 mm |
| **Interruptor** | Interruptor deslizante de alimentación por hardware |
| **Fuente de alimentación** | Batería de litio de 3,7 V / USB Type-C |
| **Botón** | 1x botón de reinicio (montado lateralmente) <br/> 3x botones de usuario (montados lateralmente) |

### Aplicaciones

- **Panel de control para hogar inteligente**: Muestra información en tiempo real como actualizaciones meteorológicas, eventos del calendario y notificaciones de varios dispositivos de hogar inteligente.
- **Monitorización de energía**: Muestra datos de consumo energético de contadores inteligentes, ayudando a los propietarios a seguir y gestionar su uso de energía de forma más eficiente.
- **Alertas de seguridad**: Muestra alertas y notificaciones sobre eventos de seguridad, como detección de movimiento o activación de sensores de puertas/ventanas.
- **Marco de fotos digital**: Crea un marco de fotos digital con WiFi que pueda mostrar imágenes desde tu red de hogar inteligente.

## Descripción general del hardware

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE05/EE05_Pin.png" style={{width:900, height:'auto'}}/></div>

### Pantallas ePaper compatibles

La EE05 es compatible con una variedad de pantallas ePaper SPI de 24 pines, incluidas, entre otras:

- [1.54-inch E-paper - Dotmatix 200x200](https://www.seeedstudio.com/1-54-Monochrome-ePaper-Display-with-200x200-Pixels-p-5776.html)
- [2.13-inch E-Paper -Flexible Monochrome 212x104](https://www.seeedstudio.com/2-13-Flexible-Monochrome-ePaper-Display-with-212x104-Pixels-p-5781.html)
- [2.13-inch E-Paper - Quadruple 212x104](https://www.seeedstudio.com/2-13-Quadruple-Color-ePaper-Display-with-122x250-Pixels-p-5779.html)
- [2.9 inch E-paper - Monocolor 128x296](https://www.seeedstudio.com/2-9-Monochrome-ePaper-Display-with-296x128-Pixels-p-5782.html)
- [4.2-inch E-Paper - Monocolor 400x300](https://www.seeedstudio.com/4-2-Monochrome-ePaper-Display-with-400x300-Pixels-p-5784.html)
- [4.26-inch E-Paper - Monocolor 800x480](https://www.seeedstudio.com/4-26-Monochrome-SPI-ePaper-Display-p-6398.html)
- [5.83-inch E-paper - Monocolor 648x480](https://www.seeedstudio.com/5-83-Monochrome-ePaper-Display-with-648x480-Pixels-p-5785.html)
- [7.5-inch Monochrome ePaper Display with 800x480 Pixels](https://www.seeedstudio.com/7-5-Monochrome-ePaper-Display-with-800x480-Pixels-p-5788.html)

### Botones

La EE05 incorpora 3 botones de usuario y 1 botón de reinicio, todos montados lateralmente para facilitar el acceso:

- **Key1 / Key2 / Key3**: Tres botones de usuario programables para interacciones y navegación personalizadas. Están asignados respectivamente a **D1 (GPIO2)**, **D2 (GPIO3)** y **D9 (GPIO8)** del XIAO ESP32-S3 Plus, cada uno con una resistencia de pull-up externa de 10k (activos en nivel BAJO cuando se presionan).
- **RESET**: Botón de reinicio por hardware conectado al pin EN para reiniciar el dispositivo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE05/EE05_Buttons.jpg" style={{width:700, height:'auto'}}/></div>

### Puerto de extensión IO

La EE05 incluye un puerto de extensión IO que te permite conectar sensores y módulos adicionales, ampliando las capacidades de la placa más allá de la funcionalidad de pantalla. Puedes conectar sensores como sensores de temperatura y humedad, sensores de movimiento u otros periféricos I2C/SPI para construir proyectos más avanzados.

### Conector de batería

La placa está equipada con un conector de batería JST de 2,0 mm y un interruptor deslizante de alimentación por hardware, lo que facilita alimentar el dispositivo con una batería de litio de 3,7 V para aplicaciones portátiles y de bajo consumo.

:::note
Los siguientes fenómenos son comportamientos normales inherentes al propio firmware de SenseCraft Seeedash:

- Diseño de bajo consumo optimizado para aplicaciones de pantalla ePaper
- La duración de la batería depende de la frecuencia de actualización (normalmente 3 meses con una carga completa usando la configuración predeterminada)
- Un icono de batería baja aparece en la pantalla cuando el nivel de batería cae por debajo del 20%
:::

## Primeros pasos con SenseCraft Seeedash

:::note
Esta guía utiliza como ejemplo la **pantalla ePaper monocroma de 7,5 pulgadas (800 x 480)**. Todas las capturas de pantalla de esta sección muestran este modelo de pantalla. Si utilizas un modelo de pantalla diferente, simplemente selecciona el firmware de tu pantalla en el Paso 2; todos los demás pasos son idénticos.
:::

:::caution
El kit DIY XIAO EE05 se envía sin firmware específico de pantalla preinstalado. Cuando conectes por primera vez una pantalla y enciendas la placa, **es probable que la pantalla permanezca en negro; esto es normal y no es un defecto**. Primero debes flashear el firmware correspondiente a tu modelo de pantalla usando el SenseCraft Seeedash Firmware Flasher. Después de flashear, aparecerán la pantalla de bienvenida y la interfaz de configuración.
:::

### Requisitos previos

- XIAO ePaper Display Board - EE05
- Una pantalla ePaper compatible
- Cable USB Type-C
- Un ordenador con un navegador web (se recomiendan Chrome o Edge)

### Instalación del equipo

**Paso 1. Conectar la pantalla y la alimentación**

1. Conecta tu pantalla ePaper al conector FPC de 24 pines de la placa EE05. Asegúrate de que el conector esté bloqueado de forma segura.
2. Conecta la placa EE05 a tu ordenador usando un cable USB Type-C.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE05/Connect.gif" style={{width:800, height:'auto'}}/></div>

:::tip
Si estás alimentando la placa mediante batería, asegúrate de que el interruptor deslizante de hardware esté en la posición **ON**.
:::

**Paso 2. Flashear el firmware de la pantalla**

Antes de poder usar SenseCraft Seeedash, necesitas flashear el firmware para tu modelo específico de pantalla.

1. Abre el sitio web de [SenseCraft Seeedash](https://sensecraft.seeed.cc/hmi) en tu navegador.
2. Haz clic en **Tools** en la barra lateral izquierda y luego selecciona **Firmware Flasher**.
3. En el desplegable **Device**, selecciona **XIAO EE05 DIY Kit** y luego elige tu modelo de pantalla de la lista (por ejemplo, "7.5 inch Monochrome ePaper Display with 800*480").
4. Haz clic en el botón **Flash**, selecciona el puerto serie de tu placa EE05 e inicia el proceso de flasheo del firmware.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE05/EE05_HMI_6.png" style={{width:800,height:'auto'}}/></div>

:::tip
Si el puerto serie no aparece, intenta presionar el botón **RESET** en la placa o usar un cable USB diferente (asegúrate de que admita transferencia de datos y no solo carga).
:::

**Paso 3. Pantalla de bienvenida**

Una vez completado el flasheo del firmware, la placa se reiniciará automáticamente. Deberías ver la pantalla de bienvenida de SenseCraft Seeedash, seguida de la interfaz de configuración de Wi-Fi.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE05/EE05_HMI_1.png" style={{width:300,height:'auto'}}/></div>

### Configuración de red

**Paso 4. Conectarse a Wi-Fi**

Usa tu teléfono móvil para escanear el código QR que se muestra en la pantalla. Sigue las indicaciones en tu teléfono para introducir el SSID y la contraseña de tu red Wi-Fi local y conectar la EE05 a Internet.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE02/Step_4.png" style={{width:600,height:'auto'}}/></div>

**Paso 5. Vincular dispositivo**

Una vez que la configuración de red sea correcta, la pantalla se actualizará de nuevo y mostrará un **Pair Code** único. Necesitarás este código para el siguiente paso.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE05/EE05_HMI_2.png" style={{width:300,height:'auto'}}/></div>

### Vinculación a la plataforma y actualización

**Paso 6. Vincular el dispositivo en SenseCraft Seeedash**

Ve a la [plataforma SenseCraft Seeedash](https://sensecraft.seeed.cc/hmi/device). Inicia sesión en tu cuenta. Navega a la sección de gestión de dispositivos y selecciona **New Device**. Introduce el Pair Code que se muestra en tu pantalla E-ink.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE02/9.png" style={{width:800, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE02/8.png" style={{width:500, height:'auto'}}/></div>

**Paso 7. Crear y enviar una nueva interfaz**

En la plataforma SenseCraft Seeedash, selecciona la plantilla adecuada para la pantalla de 7,5 pulgadas para crear una nueva interfaz o subir una imagen.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE02/10.png" style={{width:800, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE05/EE05_HMI_4.png" style={{width:500, height:'auto'}}/></div>

**Paso 8. Aplica tus imágenes**

Una vez terminado, haz clic en el botón "Apply" y selecciona tu dispositivo EE05.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE05/EE05_HMI_5.png" style={{width:800, height:'auto'}}/></div>

**Paso 9. Mostrar en la pantalla**

Finalmente, el EE05 recibirá los datos y actualizará la pantalla de 7,5 pulgadas con tu nuevo contenido.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE05/EE05_HMI_3.png" style={{width:300, height:'auto'}}/></div>

## Primeros pasos con Arduino

### Instalar la biblioteca Seeed GFX2

:::tip
Esta biblioteca tiene la misma función que la biblioteca TFT y **no** es compatible con ella. Si has instalado la biblioteca TFT u otras bibliotecas de pantalla similares, desinstálalas primero.
:::

Descarga e instala la biblioteca Seeed GFX2 desde GitHub.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE02/14.png" style={{width:800, height:'auto'}}/></div>

<div align="center">
<a href="https://github.com/Seeed-Studio/Seeed_GFX2" target="_blank">
<p style={{textAlign: 'center'}}><button type="button" className="download" style={{backgroundColor: '#00A418', borderRadius: '8px', border: 'none', color: '#fff', padding: '12px 24px', textAlign: 'center', textDecoration: 'none', display: 'inline-block', fontSize: '16px', margin: '4px 2px', cursor: 'pointer'}}>Haz clic aquí para descargar</button></p>
</a>
</div>

Después de descargar la biblioteca, ve a **Sketch** -> **Include Library** -> **Add .ZIP Library** y selecciona la biblioteca descargada.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE02/15.png" style={{width:500, height:'auto'}}/></div>


### Configurar y grabar el programa

Como se muestra en la imagen, navega hasta el ejemplo mediante este menú:
File → Examples → Seeed_GFX2 → ePaper Displays → Expansion Board Series → ESP32 Series → XIAO ePaper Display Board - EE05 → 7.5-inch ePaper - Monochrome 800x480 → HelloWorld

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE05/EE05_Arduino_2.png" style={{width:800, height:'auto'}}/></div>

:::note
Esta guía utiliza la **pantalla ePaper monocroma de 7,5 pulgadas (800 x 480)** como ejemplo. Si tienes una pantalla diferente, abre en su lugar la carpeta de ejemplo que coincida con el modelo de tu propio panel bajo `EE05`.
:::

Después de eso, ve a **Tools** -> **Board** -> **XIAO ESP32S3 Plus** y **Tools** -> **Port** -> **Select the port your board is connected to**. 

Ten en cuenta que PSRAM debe estar habilitado.
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE02/17.png" style={{width:400, height:'auto'}}/></div>

Luego haz clic en **Upload** para subir el código.
¡Ahora verás la respuesta en tu pantalla de epaper! A continuación se muestra el resultado del ejemplo HelloWorld.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE05/EE05_Arduino_1.png" style={{width:500, height:'auto'}}/></div>

## Descripción general del software

### Ejemplo de prueba de botones

El EE05 tiene tres botones de usuario (serigrafía: Key1 / Key2 / Key3) que puedes usar en tus proyectos. Según el esquema, se asignan a D1 (GPIO2), D2 (GPIO3) y D9 (GPIO8), con resistencias pull-up externas de 10k a 3,3 V; al presionar un botón se lleva el pin a LOW. Aquí tienes un sencillo ejemplo de prueba de botones:

```cpp
#define KEY1_PIN  2  // Key1 -> D1 (GPIO2)
#define KEY2_PIN  3  // Key2 -> D2 (GPIO3)
#define KEY3_PIN  8  // Key3 -> D9 (GPIO8)

void setup() {
  Serial.begin(115200);
  pinMode(KEY1_PIN, INPUT_PULLUP);
  pinMode(KEY2_PIN, INPUT_PULLUP);
  pinMode(KEY3_PIN, INPUT_PULLUP);
}

void loop() {
  if (digitalRead(KEY1_PIN) == LOW) {
    Serial.println("Key1 (GPIO2) pressed");
    delay(200);
  }
  if (digitalRead(KEY2_PIN) == LOW) {
    Serial.println("Key2 (GPIO3) pressed");
    delay(200);
  }
  if (digitalRead(KEY3_PIN) == LOW) {
    Serial.println("Key3 (GPIO8) pressed");
    delay(200);
  }
}
```

## Recursos

- **[PDF]** [Esquemático de la XIAO ePaper Display Board Ex05](https://files.seeedstudio.com/wiki/Epaper/EE05/XIAO_ePaper_Display_Board_Ex05_V1.0.pdf)
- **[ZIP]** [Seeed Studio XIAO ePaper Display EE05 SCH&PCB](https://files.seeedstudio.com/wiki/Epaper/EE05/XIAO_ePaper_Display_Board_EE05_V1.11_SCH&PCB_260420.zip)
- **[GitHub]** [Biblioteca Seeed_GFX2](https://github.com/Seeed-Studio/Seeed_GFX2)
- **[Website]** [SenseCraft Seeedash](https://sensecraft.seeed.cc/hmi)

## Resolución de problemas

**P1: La pantalla no muestra nada después de subir el código.**

- **Comprueba el cable FPC**: Asegúrate de que el cable FPC de la ePaper esté insertado en la orientación correcta y bien bloqueado en el conector.
- **Verifica que PSRAM esté habilitado**: Asegúrate de haber seleccionado "OPI PSRAM" en Tools → PSRAM en el Arduino IDE.
- **Comprueba la selección del modelo de pantalla**: Verifica que hayas seleccionado el ejemplo correcto para tu modelo específico de pantalla.

**P2: Los colores están invertidos o la pantalla muestra patrones anormales.**

- **Selecciona el modelo exacto**: Diferentes tamaños de pantalla o revisiones de IC requieren configuraciones específicas. Asegúrate de estar usando el ejemplo correcto para el modelo de tu pantalla.
- **Comprueba la fuente de alimentación**: Para pantallas más grandes (como la de 7,5 pulgadas), asegúrate de que tu fuente de alimentación pueda proporcionar corriente suficiente durante la actualización de la pantalla.

**P3: La placa no se enciende cuando se conecta a una batería.**

- **Interruptor de hardware**: Verifica que el interruptor deslizante de hardware en la placa esté en la posición **ON**.
- **Conexión de la batería**: Comprueba la polaridad del conector JST de 2,0 mm para asegurarte de que coincide con el diseño de la placa.
- **Carga de la batería**: Asegúrate de que la batería tenga suficiente carga. Intenta cargar la batería mediante USB-C.

**P4: El flasheador de firmware SenseCraft Seeedash no detecta mi placa.**

- **Pulsa RESET**: Intenta pulsar el botón RESET en la placa mientras el flasheador está buscando el dispositivo.
- **Comprueba el cable USB**: Asegúrate de estar usando un cable USB que admita transferencia de datos (no solo carga).

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
