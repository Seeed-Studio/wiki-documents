---
title: XIAO nRF54LM20A Sense con Arduino
description: Este artículo presenta cómo desarrollar Seeed Studio XIAO nRF54LM20A Sense con el Arduino IDE.
keywords:
  - xiao
  - nrf54lm20a
  - Arduino
image: https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/Seeed-Studio-XIAO-nRF54LM20A-Sense.webp
slug: /xiao_nrf54lm20a_with_arduino
sku: 100018440
last_update:
  date: 06/22/2026
  author: Brandy
createdAt: '2025-07-15'
updatedAt: '2026-07-16'
url: https://wiki.seeedstudio.com/es/xiao_nrf54lm20a_with_arduino/
---

# Seeed Studio XIAO nRF54LM20A Sense con Arduino

Esta sección te guía a través de la preparación de hardware y software necesaria para el desarrollo con Arduino. Siguiendo los pasos a continuación, configurarás tu entorno de desarrollo, configurarás el Arduino IDE y prepararás tu placa XIAO para la programación. Una vez completada la configuración, podrás compilar, cargar y probar rápidamente los ejemplos de sketches proporcionados.

## Primeros pasos

### Preparación de hardware

Necesitas preparar lo siguiente:

- 1 x [Seeed Studio XIAO nRF54LM20A Sense](https://www.seeedstudio.com/Seeed-Studio-XIAO-nRF54LM20A-Sense-p-6840.html)
- 1 x Ordenador
- 1 x Cable USB tipo C

<div className="table-center">
  <table align="center">
    <tr>
      <th>Seeed Studio XIAO nRF54LM20A Sense</th>
    </tr>
    <tr>
      <td>
        <div style={{textAlign: 'center'}}>
          <img
            src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/1X1A9197.jpg"
            style={{width: 400, height: 'auto'}}
          />
        </div>
      </td>
    </tr>
    <tr>
      <td>
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
      </td>
    </tr>
  </table>
</div>


### Software

El XIAO nRF54LM20A es compatible con el desarrollo mediante el Arduino IDE. Antes de comenzar, instala y configura el Arduino IDE.

:::tip
Si es la primera vez que usas Arduino, te recomendamos encarecidamente que consultes [Getting Started with Arduino](https://wiki.seeedstudio.com/es/Getting_Started_with_Arduino/).
:::

- **Paso 1.** Descarga e instala la versión estable de Arduino IDE de acuerdo con tu sistema operativo.

  <div class="download_arduino_container" style={{textAlign: 'center'}}>
      <a class="download_arduino_item" href="https://www.arduino.cc/en/software"><strong><span><font color={'FFFFFF'} size={"4"}>Download Arduino IDE</font></span></strong></a>
  </div>
  <br></br>

- **Paso 2.** Inicia la aplicación Arduino.

- **Paso 3.** Abre **Arduino IDE** > **Settings**, busca **Additional Boards Manager URLs** y añade la siguiente URL:

```shell
https://raw.githubusercontent.com/lolren/nrf54-arduino-core/main/package_nrf54l15clean_index.json
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/M20A_ARDUINO/1.png" style={{width:800, height:'auto'}}/></div>

- **Paso 4.** Ve a **Tools** > **Board** > **Boards Manager**, busca **nRF54L15 Boards** e instálalo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/M20A_ARDUINO/2.png" style={{width:800, height:'auto'}}/></div>

- **Paso 5.** Después de conectar la placa, selecciona la siguiente placa en el Arduino IDE:

**Tools** > **Board** > **nRF54L15 Boards** > **XIAO nRF54LM20A**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/M20A_ARDUINO/3.png" style={{width:800, height:'auto'}}/></div>

### Cargar programa

El siguiente ejemplo utiliza un sencillo programa de parpadeo.

**Paso 1.** Selecciona el código de ejemplo **Blink** para realizar la prueba.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/M20A_ARDUINO/4.png" style={{width:800, height:'auto'}}/></div>

**Paso 2.** Haz clic en **Upload** para compilar y cargar el sketch.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/M20A_ARDUINO/6.png" style={{width:800, height:'auto'}}/></div><br/>

Demostración del efecto:

Después de cargar el programa y pulsar el botón de reinicio, el indicador L parpadeará a intervalos de 1 segundo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/M20A_ARDUINO/7.gif" style={{width:800, height:'auto'}}/></div>

## Agradecimientos especiales

Agradecimientos especiales a **lolren** por contribuir con la adaptación de Arduino para XIAO nRF54LM20A. El código y el README son claros y útiles. Si deseas aprender más sobre cómo usar XIAO nRF54LM20A con Arduino, consulta los enlaces de GitHub que aparecen a continuación.

- [Repositorio del núcleo de Arduino](https://github.com/lolren/nrf54-arduino-core)
- [Página principal de GitHub del autor](https://github.com/lolren)


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
