---
description: ADC de 8 Canales y 12 Bits para Raspberry Pi (STM32F030)
title: ADC de 8 Canales y 12 Bits para Raspberry Pi (STM32F030)
keywords:
- Pi_HAT
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/8-Channel_12-Bit_ADC_for_Raspberry_Pi-STM32F030
last_update:
  date: 1/11/2023
  author: jianjing Huang
---


![](https://files.seeedstudio.com/wiki/8-Channel_12-Bit_ADC_for_Raspberry_Pi-STM32F030/img/main.jpg)

El ADC es un accesorio común para Raspberry Pi. Hoy en día muchos MCUs baratos tienen ADC integrado, por lo que fabricamos este ADC de 8 canales basado en STM32F030, que es un MCU ARM Cortex M0 rentable y de bajo consumo. Extraemos 8 canales ADC del MCU, e integramos 4 conectores Grove analógicos para que también puedas usar módulos Grove analógicos con él.

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/8-Channel-12-Bit-ADC-for-Raspberry-Pi(STM32F030).html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## Características

- Unidad de cálculo CRC
- Controlador de acceso directo a memoria (DMA) de 5 canales
- RTC de calendario con alarma y activación periódica desde Stop/Standby
- Temporizadores
  - Temporizador de control avanzado
  - Temporizadores de propósito general y temporizadores básicos
  - Temporizadores watchdog independientes y del sistema
  - Temporizador SysTick
- Reloj de tiempo real (RTC)
- Depuración por cable serie (SWD)
- Compatible con Raspberry Pi 3B/3B+/4

## Especificaciones

|Elemento|Valor|
|---|---|
|Voltaje de Alimentación de Operación|3.3V|
|Resolución ADC|12 bit|
|Frecuencia Máxima de Reloj|48 MHz|
|Tamaño de Memoria de Programa|16kB|
|Tamaño de RAM de Datos|4 kB|
|Ancho de Bus de Datos|32 bit|
|Temperatura de Operación|-40～85℃|
|Interfaces de Comunicación|I2C|
|Dirección I2C|0x04(por defecto)|
|Tamaño|L: 65mm W: 55mm H: 18mm|
|Peso|25.9g|
|Tamaño del Paquete|L: 140mm W: 75mm H: 25mm|
|Peso Bruto|45g|

## Aplicaciones típicas

- Medición de temperatura
- Bienes de consumo

## Descripción general del hardware

### Distribución de pines

**Descripción general**

![](https://files.seeedstudio.com/wiki/8-Channel_12-Bit_ADC_for_Raspberry_Pi-STM32F030/img/280-pin.jpg)

**GPIO**

La misma distribución de pines que la Raspberry Pi.

![](https://files.seeedstudio.com/wiki/8-Channel_12-Bit_ADC_for_Raspberry_Pi-STM32F030/img/280-pin-5.jpg)

**SWD**

Utilizamos el puerto SWD para grabar el firmware en esta placa. Además, puedes ver el pin 9/pin 10/pin 11 en esta sección. Esos tres pines no son utilizados por ningún puerto Grove, puedes usarlos libremente sin preocuparte por conflictos de pines.

![](https://files.seeedstudio.com/wiki/8-Channel_12-Bit_ADC_for_Raspberry_Pi-STM32F030/img/280-pin-1.jpg)

**Puerto analógico Grove**

Como no hay un ADC integrado en la Raspberry Pi, la placa ADC basada en STM32 permite que el sensor analógico funcione con tu Raspberry Pi.

Hay 4 conectores analógicos grove en esta placa, de modo que esta placa ADC puede trabajar directamente con módulos grove utilizando [Grove - Universal 4 Pin Buckled 5cm Cable](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-5cm-Cable-5-PCs-Pac-p-925.html).

El sensor analógico introduce el voltaje analógico en el ADC de 12 bits. Después de que el ADC convierte los datos analógicos a datos digitales, introduce los datos digitales a la Raspberry Pi a través de la interfaz I2C.

![](https://files.seeedstudio.com/wiki/8-Channel_12-Bit_ADC_for_Raspberry_Pi-STM32F030/img/280-pin-4.jpg)

**Puertos de cabecera de pines hembra**

Igual que el puerto analógico Grove pero esta parte en lugar de usar [Grove - Universal 4 Pin Buckled 5cm Cable](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-5cm-Cable-5-PCs-Pac-p-925.html) necesitas usar [Breadboard Jumper Wire Pack](https://www.seeedstudio.com/Breadboard-Jumper-Wire-Pack-200mm-100m-p-1032.html).

8 puertos de conexión analógicos, A0 ~ A7.

![](https://files.seeedstudio.com/wiki/8-Channel_12-Bit_ADC_for_Raspberry_Pi-STM32F030/img/280-pin-3.jpg)

**Terminal de tornillo**

Igual que arriba pero con diferente método de conexión. Este grupo de conectores de pines incluye el pin analógico A0 ~ A7, Vcc y GND.

![](https://files.seeedstudio.com/wiki/8-Channel_12-Bit_ADC_for_Raspberry_Pi-STM32F030/img/280-pin-2.jpg)

## Plataformas compatibles

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" /></div> | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |

## Comenzando

### Hardware

**Materiales requeridos**

|Raspberry pi|ADC de 8 Canales y 12 Bits para Raspberry Pi (STM32F030)(STM32F030)|
|------------|-------------|
|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg)|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/8-Channel_12-Bit_ADC_for_Raspberry_Pi-STM32F030/img/thumbnail.jpg" /></div>|
|[Obtener UNO Ahora](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[Obtener UNO Ahora](https://www.seeedstudio.com/8-Channel-12-Bit-ADC-for-Raspberry-Pi(STM32F030).html)|

- **Paso 1**. Inserta el ADC de 8 Canales y 12 Bits para Raspberry Pi (STM32F030) en la Raspberry Pi.
- **Paso 2**. Conecta la Raspberry Pi a la PC a través del cable USB.

![](https://files.seeedstudio.com/wiki/8-Channel_12-Bit_ADC_for_Raspberry_Pi-STM32F030/img/connection1.jpg)

### Software

:::caution
Si estás usando **Raspberry Pi con Raspberrypi OS >= Bullseye**, tienes que usar esta línea de comandos **solo con Python3**.
:::

- **Paso 1**. Descarga el archivo fuente clonando la biblioteca grove.py.

```
cd ~
git clone https://github.com/Seeed-Studio/grove.py

```

- **Paso 2**. Instalar la biblioteca grove.py

```
cd grove.py
# Python2
sudo pip install .
# Python3
sudo pip3 install .
```

- **Paso 3**. Ejecuta los siguientes comandos para ejecutar el código.

```
cd grove.py/grove
python3 adc_8chan_12bit.py 

```

A continuación se muestra el código adc_8chan_12bit.py.

```python

import time
from grove.i2c import Bus

ADC_DEFAULT_IIC_ADDR = 0X04

ADC_CHAN_NUM = 8

REG_RAW_DATA_START = 0X10
REG_VOL_START = 0X20
REG_RTO_START = 0X30

REG_SET_ADDR = 0XC0


class Pi_hat_adc():
    def __init__(self,bus_num=1,addr=ADC_DEFAULT_IIC_ADDR):
        self.bus=Bus(bus_num)
        self.addr=addr

    
    #get all raw adc data,THe max value is 4095,cause it is 12 Bit ADC
    def get_all_adc_raw_data(self):
        array = []
        for i in range(ADC_CHAN_NUM):  
            data=self.bus.read_i2c_block_data(self.addr,REG_RAW_DATA_START+i,2)
            val=data[1]<<8|data[0]
            array.append(val)
        return array
    
    def get_nchan_adc_raw_data(self,n):
        data=self.bus.read_i2c_block_data(self.addr,REG_RAW_DATA_START+n,2)
        val =data[1]<<8|data[0]
        return val
    #get all data with unit mv.
    def get_all_vol_milli_data(self):
        array = []
        for i in range(ADC_CHAN_NUM):  
            data=self.bus.read_i2c_block_data(self.addr,REG_VOL_START+i,2)
            val=data[1]<<8|data[0]
            array.append(val)
        return array
    
    def get_nchan_vol_milli_data(self,n):
        data=self.bus.read_i2c_block_data(self.addr,REG_VOL_START+n,2)
        val =data[1]<<8|data[0]
        return val

    #get all data ratio,unit is 0.1%
    def get_all_ratio_0_1_data(self):
        array = []
        for i in range(ADC_CHAN_NUM):  
            data=self.bus.read_i2c_block_data(self.addr,REG_RTO_START+i,2)
            val=data[1]<<8|data[0]
            array.append(val)
        return array
    
    def get_nchan_ratio_0_1_data(self,n):
        data=self.bus.read_i2c_block_data(self.addr,REG_RTO_START+n,2)
        val =data[1]<<8|data[0]
        return val


ADC = Pi_hat_adc()
def main():
    raw_data=ADC.get_all_adc_raw_data()
    vol_data=ADC.get_all_vol_milli_data()
    ratio_data=ADC.get_all_ratio_0_1_data()
    print("raw data for each channel:(1-8chan)(12 bit-max=4096):")
    print(raw_data)
    print("voltage for each channel:(unit:mv,max=3300mv):")
    print(vol_data)
    print ("ratio for each channel(unit 0.1%,max=100.0%):")
    print(ratio_data)

    print(" ")
    print("NOTICE!!!:")
    print("The default setting of ADC PIN is floating_input.")
    print(" ")

if __name__ == '__main__':
    main()


```

:::tip
    Si todo va bien, podrás ver el siguiente resultado
:::

```python

pi@raspberrypi:~/grove.py/grove $ python3 adc_8chan_12bit.py 
raw data for each channel:(1-8chan)(12 bit-max=4096):
[2177, 2098, 2064, 2038, 2127, 2066, 2172, 2145]
voltage for each channel:(unit:mv,max=3300mv):
[1599, 1741, 1668, 1658, 1644, 1787, 1694, 1677]
ratio for each channel(unit 0.1%,max=100.0%):
[521, 544, 514, 504, 500, 559, 524, 505]
 
NOTICE!!!:
The default setting of ADC PIN is floating_input.
 


```

### Ejemplo

:::caution
Si estás usando **Raspberry Pi con Raspberrypi OS >= Bullseye**, tienes que usar esta línea de comandos **solo con Python3**.
:::

Tomaremos el [Grove - Sound Sensor](https://wiki.seeedstudio.com/es/Grove-Sound_Sensor/) como ejemplo para presentarte cómo usar esta placa.

Conexión de hardware

- **Paso 1**. Conecta el ADC de 8 Canales y 12 Bits para Raspberry Pi (STM32F030) en la Raspberry Pi.
- **Paso 2**. Conecta el Grove - Sound Sensor al puerto A0 del módulo ADC.
- **Paso 3**. Conecta la Raspberry Pi a la PC a través del cable USB.

Diagrama de conexión de hardware

![](https://files.seeedstudio.com/wiki/8-Channel_12-Bit_ADC_for_Raspberry_Pi-STM32F030/img/connection2.jpg)

Escribe el siguiente comando ++python grove_sound_sensor.py 0++ en la interfaz de línea de comandos.

```cpp

pi@raspberrypi:~/grove.py/grove $ python3 grove_sound_sensor.py 0
Detecting sound...
Sound value: 433
Sound value: 342
Sound value: 443
Sound value: 300
Sound value: 632
Sound value: 258
Sound value: 591
Sound value: 267
Sound value: 871
^CTraceback (most recent call last):
  File "grove_sound_sensor.py", line 67, in <module>
    main()
  File "grove_sound_sensor.py", line 64, in main
    time.sleep(.3)
KeyboardInterrupt

```

Puedes salir de este programa simplemente presionando `ctrl`+`c`.

## Visor Esquemático Online

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/8-Channel_12-Bit_ADC_for_Raspberry_Pi-STM32F030/res/8-Channel%2012-Bit%20ADC%20for%20Raspberry%20Pi%20(STM32F030).zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

<br />

:::noteNota de Cambio de Producto:

Debido a que los chips de la serie ST32 están agotados globalmente, los precios han aumentado varias veces y no hay una fecha de entrega clara. No tenemos más opción que cambiar al chip MM32. Los modelos de reemplazo específicos son los siguientes: STM32F030F4P6TR es reemplazado por MM32F031F6P6. Después del reemplazo del chip, las funciones del producto, características, métodos de uso y códigos permanecen sin cambios. Cabe señalar que la versión del firmware ha cambiado, y el firmware de fábrica ha sido ajustado según los diferentes chips. Si necesitas volver a grabar el firmware, por favor descarga el firmware correspondiente al chip.
:::

## Recursos

- **[Zip]** [ADC de 12 Bits de 8 Canales para Raspberry Pi (STM32F030) (STM32F030) Archivos Eagle](https://files.seeedstudio.com/wiki/8-Channel_12-Bit_ADC_for_Raspberry_Pi-STM32F030/res/8-Channel%2012-Bit%20ADC%20for%20Raspberry%20Pi%20(STM32F030).zip)

- **[Zip]** [MM32F031F6P6-Firmware](https://files.seeedstudio.com/wiki/8-Channel_12-Bit_ADC_for_Raspberry_Pi-STM32F030/res/MM32F031F6P6_firmware.zip)

- **[Zip]** [ADC de 12 Bits de 8 Canales para Raspberry Pi (STM32F030) (STM32F030) Biblioteca de Software](https://github.com/Seeed-Studio/grove.py)

- **[PDF]** [Hoja de Datos STM32F030](https://files.seeedstudio.com/wiki/8-Channel_12-Bit_ADC_for_Raspberry_Pi-STM32F030/res/STM32.pdf)

- **[PDF]** [MM32F031F6P6_Datasheet.pdf](https://files.seeedstudio.com/wiki/8-Channel_12-Bit_ADC_for_Raspberry_Pi-STM32F030/res/MM32F031F6P6_Datasheet.pdf)

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
