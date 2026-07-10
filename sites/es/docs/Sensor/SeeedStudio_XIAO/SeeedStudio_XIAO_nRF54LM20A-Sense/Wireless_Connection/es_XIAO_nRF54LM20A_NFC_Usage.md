---
title: NFC para XIAO nRF54LM20A Sense
description: ''
keywords:
  - xiao
  - nrf54lm20a
  - nfc
image: https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/XIAO_nRF54LM20A_NFC.webp
slug: /xiao_nrf54lm20a_with_nfc
sku: 100018440
last_update:
  date: 05/13/2026
  author: Zeller
createdAt: '2025-05-25'
updatedAt: '2026-06-15'
url: https://wiki.seeedstudio.com/es/xiao_nrf54lm20a_with_nfc/
---

# NFC para XIAO nRF54LM20A Sense

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/XIAO_nRF54LM20A_NFC.png" style={{width:400, height:'auto'}}/></div>

<div className="table-center">
  <table align="center">
        <div className="get_one_now_container" style={{textAlign: 'center'}}>
          <a
            className="get_one_now_item"
            href="https://www.seeedstudio.com/Seeed-Studio-XIAO-nRF54LM20A-Sense-p-6840.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>
              <span>
                <font color="#FFFFFF" size="4">
                  Consigue uno ahora 🖱️
                </font>
              </span>
            </strong>
          </a>
        </div>
  </table>
</div>

<br/>
Near Field Communication (NFC) es una tecnología para la transferencia inalámbrica de pequeñas cantidades de datos entre dos dispositivos. Utiliza protocolos de comunicación muy simples y, por lo tanto, permite una conexión más rápida que Bluetooth® Low Energy. Sin embargo, debido a que NFC utiliza inducción magnética para habilitar la comunicación, los dispositivos deben estar muy cerca (< 10 cm) para conectarse.】

- *Para tutoriales y referencias de NFC para chips de la serie Nordic, consulta [Near Field Communication (NFC)](https://docs.nordicsemi.com/bundle/ncs-3.2.0/page/nrf/protocols/nfc/index.html)*
- *Las especificaciones técnicas de NFC están disponibles en la [NFC Forum specification overview](https://nfc-forum.org/build/specifications)*.

El XIAO nRF54LM20A está equipado con una interfaz NFC reservada para que puedas explorar y utilizar más a fondo las funciones NFC.

:::tip

Este tutorial se basa en VS Code y la extensión nRF Connect. Si eres nuevo en ellas, puedes consultar [XIAO nRF54LM20A nRFConnect SDK Usage](https://wiki.seeedstudio.com/es/xiao_nrf54lm20a_ncs/)

:::

## Preparación de hardware

Antes de comenzar el experimento, necesitas preparar un XIAO nRF54LM20A y una antena NFC de Nordic.

<div className="table-center">
<table align="center">
 <tr>
   <th>Seeed Studio XIAO nRF54LM20A Sense</th>
 </tr>
 <tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/1X1A9197.jpg" style={{width:400, height:'auto'}}/></div></td>
 </tr>
    <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-nRF54LM20A-Sense-p-6840.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
    </a>
   </div></td>
 </tr>
</table>
</div>

:::tip

La antena NFC de Nordic no se vende por separado en Seeed Studio Bazaar, por lo que tendrás que comprarla en otras fuentes.

:::

### Soldar la antena

En el XIAO nRF54LM20A, los pines predeterminados para la antena NFC externa son P1.01 y P1.02, marcados como N1 y N2 en la serigrafía. Consulta el siguiente ejemplo de soldadura.

- Diagrama de preconexión

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/nfc_1.png" style={{width:600, height:'auto'}}/></div>
<br/>
- Diagrama de conexión física

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/nfc_2.jpg" style={{width:600, height:'auto'}}/></div>
<br/>
:::caution

Este proceso de soldadura es bastante desafiante y requiere técnicas de soldadura avanzadas. Como alternativa, puedes optar por conectar el XIAO y la NFC utilizando cables voladores. Presta atención a las medidas de seguridad para evitar lesiones personales y daños al equipo.

Los pines de NFC no distinguen entre positivo y negativo

:::

## Software

:::tip

- Esta sección muestra cómo usar NFC basándose en el código de ejemplo del Nordic Connect SDK.
<!-- - 由于 Platfrom IO 下我们没有编写NFC的设备树支持，所以无法使用 -->

:::

### Registros de texto NFC

Este ejemplo demuestra la lectura de información de texto mediante NFC.

1. Dentro de la extensión, crea una rutina en blanco y elige copiar una rutina existente.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/nfc_3.png" style={{width:800, height:'auto'}}/></div>

2. Escribe nfc y selecciona el ejemplo NFC text Records

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/fix/nfc/1.png" style={{width:800, height:'auto'}}/></div>

3. Selecciona la ruta de almacenamiento

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/fix/nfc/2.png" style={{width:800, height:'auto'}}/></div>

4. Abre el proyecto, añade la configuración de XIAO nRF54LM20A en la extensión correspondiente y compila.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/fix/nfc/3.png" style={{width:800, height:'auto'}}/></div>

5. Abre la terminal e introduce el comando `west flash` para grabar el firmware en el XIAO nRF54LM20A.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/fix/nfc/4.png" style={{width:800, height:'auto'}}/></div>

#### Resultado

Selecciona un teléfono móvil con funcionalidad NFC para intentar este experimento.

1. Para ver la información leída por NFC con más detalle, necesitas descargar la aplicación correspondiente para tu sistema.

- iOS :[NFC Tools](https://apps.apple.com/app/nfc-tools/id1252962749)
- Android：[nRF NFC Toolbox](https://play.google.com/store/apps/details?id=no.nordicsemi.android.nfc)

2. Coloca el área NFC de tu teléfono cerca de la antena NFC para leer la información detallada de NFC.

La información de texto que se muestra en tu teléfono es:

```txt
Hello World!
Hallo Verden!
Witaj świecie!
```

<div className="table-center">
<table align="center">
<tr>
      <td>NFC Tools</td>
      <td>nRF NFC Toolbox</td>
</tr>
 <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/nfc_8.jpg" style={{width:300, height:'auto'}}/></div></td>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/nfc_9.jpg" style={{width:300, height:'auto'}}/></div></td>
 </tr>
</table>
</div>

### NFC Launch App

Esta sección cubre la función NFC. Busca **nRF Toolbox for Bluetooth LE**.

1. Dentro de la extensión, crea un proyecto de ejemplo en blanco, selecciona copiar un ejemplo existente y elige **NFC Launch App**. Configúralo y compílalo haciendo referencia a [NFC Records text](#Registros-de-texto-NFC).

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/nfc_10.png" style={{width:800, height:'auto'}}/></div>

2. Abre el proyecto, añade la configuración de XIAO nRF54LM20A en la extensión correspondiente y compila.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/fix/nfc/5.png" style={{width:800, height:'auto'}}/></div>

3. Abre la terminal, introduce el comando `west flash` para grabarlo en el XIAO nRF54LM20A.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/fix/nfc/6.png" style={{width:800, height:'auto'}}/></div>

#### Resultado

1. Para ver la información leída por NFC con más detalle, necesitas descargar la aplicación correspondiente para tu sistema.

- iOS :[NFC Tools](https://apps.apple.com/app/nfc-tools/id1252962749)
- Android：[nRF NFC Toolbox](https://play.google.com/store/apps/details?id=no.nordicsemi.android.nfc)

2. Acerca el sensor NFC de tu teléfono a la antena NFC. El navegador se iniciará y buscará "no.nordicsemi.android.nrftoolbox", y el registro de lectura se mostrará en nRF NFC Toolbox.

<div className="table-center">
<table align="center">
<tr>
      <td>Chrome</td>
      <td>nRF NFC Toolbox</td>
</tr>
 <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/nfc_12.jpg" style={{width:300, height:'auto'}}/></div></td>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/nfc_13_1.jpg" style={{width:300, height:'auto'}}/></div></td>
 </tr>
</table>
</div>

## Resumen

Las funciones NFC pueden reutilizarse en diversos escenarios, como escritura de datos y activación de bajo consumo. El nRF Connect SDK proporciona códigos de ejemplo correspondientes. Puedes ampliar estos ejemplos para aplicaciones prácticas. Por ejemplo, combinar la activación de bajo consumo por NFC con el control de un motor permite un sencillo cerrojo inteligente para el uso diario.

Además, creemos que has adquirido una comprensión básica de la implementación de NFC en el XIAO nRF54LM20A a través de los ejemplos anteriores. Esperamos tus ideas creativas y tus contribuciones a la comunidad de código abierto.

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
