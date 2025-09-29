---
description: ADC de 16 bits y 4 canales para Raspberry Pi (ADS1115)
title: ADC de 16 bits y 4 canales para Raspberry Pi (ADS1115)
keywords:
- Pi_HAT
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/4-Channel_16-Bit_ADC_for_Raspberry_Pi-ADS1115
last_update:
  date: 1/11/2023
  author: jianjing Huang
---


![](https://files.seeedstudio.com/wiki/4-Channel_16-Bit_ADC_for_Raspberry_Pi-ADS1115/img/main.jpg)

El convertidor analógico-digital (ADC) es un accesorio común para Raspberry Pi. Este es un ADC de 4 canales basado en el ADS1115 de Texas Instruments, que es un chip ADC de 16 bits de precisión y bajo consumo. Hemos hecho este ADC en un factor de forma compacto de Raspberry Pi Zero e integrado un conector Grove analógico para que también puedas usar módulos Grove analógicos con él.

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/4-Channel-16-Bit-ADC-for-Raspberry-Pi-ADS1115.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## Versión

| Versión del Producto  | Cambios                                                                                               | Fecha de Lanzamiento |
|------------------|-------------------------------------------------------------------------------------------------------|---------------|
| ADC de 16 bits y 4 canales para Raspberry Pi (ADS1115) | Inicial                                                                                               | Sep 2018      |

## Característica

- Bajo consumo de corriente:
  - Modo Continuo: Solo 150μA
  - Modo de Disparo Único: Apagado Automático
- Amplio rango de voltaje de alimentación
- Multiplexor de entrada (MUX) que proporciona dos entradas diferenciales o cuatro entradas de extremo único.
- Comparador programable
- Referencia de voltaje interna de baja deriva
- Oscilador interno
- PGA interno
- Velocidad de datos programable: 8SPS a 860SPS
- Interfaz serie compatible con I2C
- Compatible con Raspberry Pi 3B/3B+/4

## Especificación

|Elemento|Valor|
|---|---|
|Voltaje de Alimentación|3.3V / 5V|
|Corriente de entrada analógica|100mA(momentáneo)<br />10mA(continuo)|
|Temperatura de almacenamiento|-60～150℃|
|Temperatura máxima de unión|150℃|
|Interfaz|I2C|
|Dirección I2C|0x48(predeterminado)<br />0x49~0x4B(configurable)|
|Tamaño|L: 65mm A: 30mm H: 20mm|
|Peso|36.5g|
|Tamaño del paquete|L: 140mm A: 78mm H: 27mm|
|Peso bruto|37g|

Hay 4 posibles direcciones I2C para este grove, desde 0x48 hasta 0x4B. La dirección I2C predeterminada es 0x48. Puedes cambiar la dirección I2C realizando algunas soldaduras.

![](https://files.seeedstudio.com/wiki/4-Channel_16-Bit_ADC_for_Raspberry_Pi-ADS1115/img/pinout1.png)

:::note
Si SDA (dirección correspondiente 0x4A) se usa como la dirección del dispositivo, mantén la línea SDA en bajo durante al menos 100 ns después de que la línea SCL baje para asegurar que el dispositivo decodifique la dirección correctamente durante la comunicación I2C.
:::

## Aplicaciones típicas

- Instrumentación portátil
- Bienes de consumo
- Monitoreo de batería
- Medición de temperatura
- Automatización de fábrica y controles de proceso

## Descripción general del hardware

### Distribución de pines

![](https://files.seeedstudio.com/wiki/4-Channel_16-Bit_ADC_for_Raspberry_Pi-ADS1115/img/pinout.png)

## Plataformas compatibles

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" /></div> | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |

## Comenzando

### Hardware

**Materiales requeridos**

|Raspberry pi|ADC de 4 Canales y 16 Bits para Raspberry Pi(ADS1115)|
|------------|-------------|
|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/4-Channel_16-Bit_ADC_for_Raspberry_Pi-ADS1115/img/thumbnail.jpg)|
|[Obtener UNO Ahora](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[Obtener UNO Ahora](https://www.seeedstudio.com/4-Channel-16-Bit-ADC-for-Raspberry-Pi-ADS1115.html)|

### Software

En esta sección, te mostraremos cómo instalar el controlador y cómo habilitar I2C.

**Habilitar I2C**
Como I2C no está activado por defecto, necesitamos configurar I2C manualmente.

- **Paso 1**. Enciende la Raspberry Pi.
- **Paso 2**. Abre raspi-config escribiendo el siguiente comando en la terminal.

```cpp

sudo raspi-config

```

- **Paso 3**. Navega hacia abajo hasta 5 Interfacing Options y presiona "enter" para seleccionar.

![](https://files.seeedstudio.com/wiki/4-Channel_16-Bit_ADC_for_Raspberry_Pi-ADS1115/img/rasp1.png)

- **Paso 4**. Navega hacia abajo hasta P5 I2C y presiona "enter" para seleccionar.

![](https://files.seeedstudio.com/wiki/4-Channel_16-Bit_ADC_for_Raspberry_Pi-ADS1115/img/rasp2.png)

- **Paso 4**. Selecciona "Yes" para habilitarlo.

![](https://files.seeedstudio.com/wiki/4-Channel_16-Bit_ADC_for_Raspberry_Pi-ADS1115/img/rasp3.png)

- **Paso 5**. Selecciona "Ok".

![](https://files.seeedstudio.com/wiki/4-Channel_16-Bit_ADC_for_Raspberry_Pi-ADS1115/img/rasp4.png)

- **Paso 6**. Selecciona "Finish" para guardar los cambios.

![](https://files.seeedstudio.com/wiki/4-Channel_16-Bit_ADC_for_Raspberry_Pi-ADS1115/img/rasp5.png)

**Instalación**

- Para verificar que I2C está habilitado en Raspberry Pi.

Navega al archivo `config.txt` ejecutando lo siguiente en la terminal:

```sh
cd /boot
sudo nano config.txt
```

- Asegúrate de que haya una línea que indique `dtparam=i2c_arm=on` en el archivo.

- La velocidad I2C predeterminada es 100 kHz. Puedes aumentarla a 400 kHz agregando la siguiente línea al archivo de configuración:

```sh
dtparam=i2c_arm_baudrate=400000
```

- Luego, para usar el ads1115-overlay, añade lo siguiente a `config.txt`:

```sh
dtoverlay=ads1115
```

- Después de eso necesitas proporcionar parámetros al overlay para configurar el controlador. Para habilitar los 4 canales del ADC en modo single-ended, añade lo siguiente:

```sh
dtparam=cha_enable
dtparam=chb_enable
dtparam=chc_enable
dtparam=chd_enable
```

- Guarda el archivo y reinicia tu raspberry pi.

Si reinicias el sistema con esos cambios en `config.txt` verás los siguientes módulos del kernel:

- Ejecuta lo siguiente para verificar los módulos del kernel:

```sh
lsmod | grep ads
```

<div align="center"><img src="https://files.seeedstudio.com/wiki/4-Channel_16-Bit_ADC_for_Raspberry_Pi-ADS1115/img/1.png"/></div>

:::note
 Tenga en cuenta que el ADS1115 utiliza el mismo kernel que el ADS1015.
:::

Podemos ver que el ADS1115 ya está ahí y puede ser utilizado por Industrial IO.

- Navegue a la carpeta Industrial IO:

```sh
cd /sys/bus/iio/devices/iio\:device0/
```

<div align="center"><img src="https://files.seeedstudio.com/wiki/4-Channel_16-Bit_ADC_for_Raspberry_Pi-ADS1115/img/2.png"/></div>

- Ahora puedes acceder fácilmente a estos archivos de configuración de hardware:

```sh
cat in_voltage0-voltage1_raw
```

<div align="center"><img src="https://files.seeedstudio.com/wiki/4-Channel_16-Bit_ADC_for_Raspberry_Pi-ADS1115/img/3.png"/></div>

Los canales 0 y 1 usan una escala de 0.1875mV. La diferencia de potencial medida es **17670 * 0.1875mv = 3.3V**

¡Este método de agregar kernel te permite desarrollar tu propio script de shell o python usando el ADS1115!

## Visor de Esquemático en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/4-Channel_16-Bit_ADC_for_Raspberry_Pi-ADS1115/res/4-Channel%2016-Bit%20ADC%20for%20Raspberry%20Pi(ADS1115).zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- **[Zip]** [Archivos Eagle del ADC de 16 Bits y 4 Canales para Raspberry Pi (ADS1115)](https://files.seeedstudio.com/wiki/4-Channel_16-Bit_ADC_for_Raspberry_Pi-ADS1115/res/4-Channel%2016-Bit%20ADC%20for%20Raspberry%20Pi(ADS1115).zip)

- **[Zip]** [Librería de Software del ADC de 16 Bits y 4 Canales para Raspberry Pi (ADS1115)](https://github.com/Seeed-Studio/pi-hats/archive/master.zip)

- **[PDF]** [Hoja de Datos ADS1115](https://files.seeedstudio.com/wiki/4-Channel_16-Bit_ADC_for_Raspberry_Pi-ADS1115/res/ADS1115.pdf)

## Soporte Técnico y Discusión de Productos

.

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
