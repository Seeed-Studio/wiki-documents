---
description: Grove - Acelerômetro Digital de 3 Eixos (LIS3DHTR)
title: Grove - Acelerômetro Digital de 3 Eixos (LIS3DHTR)
keywords:
  - Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove-3-Axis-Digital-Accelerometer-LIS3DHTR
sku: 114020121
last_update:
  date: 1/5/2023
  author: shuxu hu
createdAt: '2023-01-16'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Grove-3-Axis-Digital-Accelerometer-LIS3DHTR/
---


<!-- ![](https://files.seeedstudio.com/products/114020121/img/114020121wiki.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/114020121/img/114020121wiki.png" alt="pir" width={600} height="auto" /></p>

Grove - 3-Axis Digital Accelerometer(LIS3DHTR) é um acelerômetro de 3 eixos de baixo custo em um conjunto de produtos Grove. Ele é baseado no chip LIS3DHTR, que fornece múltiplas faixas de medição e seleção de interfaces. É incrível que um acelerômetro de 3 eixos tão pequeno possa suportar interfaces I2C, SPI e ADC GPIO, o que significa que você pode escolher qualquer forma de se conectar à sua placa de desenvolvimento. Além disso, este acelerômetro também pode monitorar a temperatura ambiente para ajustar o erro causado por ela.  

<!-- <p style="text-align:center"><a href="https://www.seeedstudio.com/Grove-3-Axis-Digital-Accelerometer-LIS3DHTR-p-4533.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/get_one_now_small.png" width="200" height="38"  border=0 /></a></p>  -->
[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Grove-3-Axis-Digital-Accelerometer-LIS3DHTR-p-4533.html)

## Recursos

- Faixa de medição: ±2g, ±4g, ±8g, ±16g, múltiplas opções de faixa.
- Múltiplas opções de interface: interface Grove I2C, interface SPI, interface ADC.
- Temperatura ajustável: capaz de ajustar e corrigir o erro causado pela temperatura.
- Fonte de alimentação de 3/5V.

## Especificação

|Item|Valor|
|---|---|
|Fonte de alimentação|3/5V|
|Interfaces|I2C/SPI/GPIO ADC|
|Endereço I2C|Padrão 0x19, pode ser alterado para 0x18 ao conectar o pino SDO ao GND|
|Entrada de alimentação ADC GPIO|0-3.3V|
|Interrupção|Um pino de interrupção reservado|
|Configuração do modo SPI|Conecte o pino CS ao GND|

## Plataformas Suportadas
<!-- | Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) | -->
|Arduino|Raspberry Pi|
|---|---|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg" alt="pir" width={200} height="auto" /></p>|

## Primeiros Passos

### Brincar com o Seeeduino XIAO usando a interface Grove I2C

#### Materiais Necessários

|Seeeduino XIAO|Grove Breadboard|Grove - 3-Axis Digital Accelerometer (LIS3DHTR)|
|--------|-----------------------|------------|
|![](https://files.seeedstudio.com/products/102010328/img/seeeduino-XIAO-thumbnail.jpg)|![](https://files.seeedstudio.com/products/103020232/img/103020232-thumbnail.png)|![](https://files.seeedstudio.com/products/114020121/img/114020121wikithumbnail.jpg)|
|[Get one now](https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html)|[Get one now](https://www.seeedstudio.com/Grove-Breadboard-p-4034.html)|[Get one now](https://www.seeedstudio.com/Grove-3-Axis-Digital-Accelerometer-LIS3DHTR-p-4533.html)|

#### Conexão de Hardware

<!-- ![](https://files.seeedstudio.com/products/114020121/img/wiki_hardware_connection.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/114020121/img/wiki_hardware_connection.jpg" alt="pir" width={600} height="auto" /></p>

Conecte o Grove - 3-Axis Digital Accelerometer (LIS3DHTR) à interface I2C do Seeeduino XIAO.

#### Código de Software

```cpp
// This example use I2C.
#include "LIS3DHTR.h"
#include <Wire.h>
LIS3DHTR<TwoWire> LIS; //IIC
#define WIRE Wire

void setup()
{
  Serial.begin(115200);
  while (!Serial)
  {
  };
  LIS.begin(WIRE,0x19); //IIC init
  //LIS.begin(0x19);
  LIS.openTemp();  //If ADC3 is used, the temperature detection needs to be turned off.
  //  LIS.closeTemp();//default
  delay(100);
    LIS.setFullScaleRange(LIS3DHTR_RANGE_2G);
  //  LIS.setFullScaleRange(LIS3DHTR_RANGE_4G);
  //  LIS.setFullScaleRange(LIS3DHTR_RANGE_8G);
  //  LIS.setFullScaleRange(LIS3DHTR_RANGE_16G);
  //  LIS.setOutputDataRate(LIS3DHTR_DATARATE_1HZ);
  //  LIS.setOutputDataRate(LIS3DHTR_DATARATE_10HZ);
  //  LIS.setOutputDataRate(LIS3DHTR_DATARATE_25HZ);
  LIS.setOutputDataRate(LIS3DHTR_DATARATE_50HZ);
  //  LIS.setOutputDataRate(LIS3DHTR_DATARATE_100HZ);
  //  LIS.setOutputDataRate(LIS3DHTR_DATARATE_200HZ);
  //  LIS.setOutputDataRate(LIS3DHTR_DATARATE_1_6KHZ);
  //  LIS.setOutputDataRate(LIS3DHTR_DATARATE_5KHZ);
}
void loop()
{
  if (!LIS)
  {
    Serial.println("LIS3DHTR didn't connect.");
    while (1)
      ;
    return;
  }
  //3 axis
    Serial.print("x:"); Serial.print(LIS.getAccelerationX()); Serial.print("  ");
    Serial.print("y:"); Serial.print(LIS.getAccelerationY()); Serial.print("  ");
    Serial.print("z:"); Serial.println(LIS.getAccelerationZ());
  //ADC
  //    Serial.print("adc1:"); Serial.println(LIS.readbitADC1());
  //    Serial.print("adc2:"); Serial.println(LIS.readbitADC2());
  //    Serial.print("adc3:"); Serial.println(LIS.readbitADC3());

  //temperature
  Serial.print("temp:");
  Serial.println(LIS.getTemperature());
  delay(500); 
}
```

- **Passo 1** Baixe a [biblioteca](https://github.com/Seeed-Studio/Seeed_Arduino_LIS3DHTR/archive/master.zip) do Github e adicione a biblioteca "zip" à sua IDE do Arduino. Consulte [How to install an Arduino Library](https://wiki.seeedstudio.com/pt-br/How_to_install_Arduino_Library/).

- **Passo 2** Encontre o código de exemplo "LIS3DHTR_IIC" e faça o upload para a sua placa. Consulte [How to upload code](https://wiki.seeedstudio.com/pt-br/Upload_Code/).

- **Passo 3** Após fazer o upload do código, você verá a velocidade de aceleração de cada eixo e a temperatura ao redor no monitor serial.

<!-- ![](https://files.seeedstudio.com/products/114020121/img/wiki_result.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/114020121/img/wiki_result.png" alt="pir" width={600} height="auto" /></p>

### Brincar com Raspberry Pi

#### Materiais Necessários

|Raspberry Pi 4B(4GB)|Grove Base Hat para Raspberry Pi|Grove - 3-Axis Digital Accelerometer (LIS3DHTR)|
|--------|-----------------------|-------------------------------------------------------------|
|<p><img src="https://files.seeedstudio.com/products/102110301/img/raspberry-pi-thumbnail.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/products/103030275/img/thumbnail.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/products/114020121/img/114020121wikithumbnail.jpg" alt="pir" width={600} height="auto" /></p>|
|[Get one now](https://www.seeedstudio.com/Raspberry-Pi-4-Computer-Model-B-4GB-p-4077.html)|[Get one now](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi.html)|[Get one now](https://www.seeedstudio.com/Grove-3-Axis-Digital-Accelerometer-LIS3DHTR-p-4533.html)|

#### Conexão de Hardware

<!-- ![](https://files.seeedstudio.com/products/114020121/img/Hardware_connection_raspberry_pi_demo.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/114020121/img/Hardware_connection_raspberry_pi_demo.jpg" alt="pir" width={600} height="auto" /></p>

Conecte o sensor LIS3DHTR a qualquer interface I2C no Grove Base Hat para Raspberry Pi.

#### Código

- **Passo 1** Siga [Setting Software](https://wiki.seeedstudio.com/pt-br/Grove_Base_Hat_for_Raspberry_Pi/#installation) para configurar o ambiente de desenvolvimento e instalar o grove.py no seu Raspberry Pi.
- **Passo 2** Execute os comandos abaixo para rodar o código.

```
virtualenv -p python3 env
source env/bin/activate
#enter commmand
grove_3_axis_digital_accelerometer
```
A seguir está o código grove_3_axis_digital_accelerometer.py:

```python
from __future__ import print_function
from grove.i2c import Bus
import time

# I2C address of the device
H3LIS331DL_DEFAULT_ADDRESS			= 0x19

# H3LIS331DL Register Map
H3LIS331DL_REG_WHOAMI					= 0x0F # Who Am I Register
H3LIS331DL_REG_CTRL1					= 0x20 # Control Register-1
H3LIS331DL_REG_CTRL2					= 0x21 # Control Register-2
H3LIS331DL_REG_CTRL3					= 0x22 # Control Register-3
H3LIS331DL_REG_CTRL4					= 0x23 # Control Register-4
H3LIS331DL_REG_CTRL5					= 0x24 # Control Register-5
H3LIS331DL_REG_REFERENCE				= 0x26 # Reference
H3LIS331DL_REG_STATUS					= 0x27 # Status Register
H3LIS331DL_REG_OUT_X_L					= 0x28 # X-Axis LSB
H3LIS331DL_REG_OUT_X_H					= 0x29 # X-Axis MSB
H3LIS331DL_REG_OUT_Y_L					= 0x2A # Y-Axis LSB
H3LIS331DL_REG_OUT_Y_H					= 0x2B # Y-Axis MSB
H3LIS331DL_REG_OUT_Z_L					= 0x2C # Z-Axis LSB
H3LIS331DL_REG_OUT_Z_H					= 0x2D # Z-Axis MSB

# Accl Datarate configuration
H3LIS331DL_ACCL_PM_PD					= 0x00 # Power down Mode
H3LIS331DL_ACCL_PM_NRMl					= 0x20 # Normal Mode
H3LIS331DL_ACCL_PM_0_5					= 0x40 # Low-Power Mode, ODR = 0.5Hz
H3LIS331DL_ACCL_PM_1					= 0x60 # Low-Power Mode, ODR = 1Hz
H3LIS331DL_ACCL_PM_2					= 0x80 # Low-Power Mode, ODR = 2Hz
H3LIS331DL_ACCL_PM_5					= 0xA0 # Low-Power Mode, ODR = 5Hz
H3LIS331DL_ACCL_PM_10					= 0xC0 # Low-Power Mode, ODR = 10Hz
H3LIS331DL_ACCL_DR_50					= 0x00 # ODR = 50Hz
H3LIS331DL_ACCL_DR_100					= 0x08 # ODR = 100Hz
H3LIS331DL_ACCL_DR_400					= 0x10 # ODR = 400Hz
H3LIS331DL_ACCL_DR_1000					= 0x18 # ODR = 1000Hz

# Accl Data update & Axis configuration
H3LIS331DL_ACCL_LPEN					= 0x00 # Normal Mode, Axis disabled
H3LIS331DL_ACCL_XAXIS					= 0x04 # X-Axis enabled
H3LIS331DL_ACCL_YAXIS					= 0x02 # Y-Axis enabled
H3LIS331DL_ACCL_ZAXIS					= 0x01 # Z-Axis enabled

# Acceleration Full-scale selection
H3LIS331DL_ACCL_BDU_CONT				= 0x00 # Continuous update, Normal Mode, 4-Wire Interface, LSB first
H3LIS331DL_ACCL_BDU_NOT_CONT			= 0x80 # Output registers not updated until MSB and LSB reading
H3LIS331DL_ACCL_BLE_MSB					= 0x40 # MSB first
H3LIS331DL_ACCL_RANGE_400G				= 0x30 # Full scale = +/-400g
H3LIS331DL_ACCL_RANGE_200G				= 0x10 # Full scale = +/-200g
H3LIS331DL_ACCL_RANGE_100G				= 0x00 # Full scale = +/-100g
H3LIS331DL_ACCL_SIM_3					= 0x01 # 3-Wire Interface
H3LIS331DL_RAW_DATA_MAX					= 65536

H3LIS331DL_DEFAULT_RANGE = H3LIS331DL_ACCL_RANGE_100G
H3LIS331DL_SCALE_FS = H3LIS331DL_RAW_DATA_MAX / 4 / ((H3LIS331DL_DEFAULT_RANGE >> 4) + 1)

class H3LIS331DL(object):
	def __init__ (self, address=H3LIS331DL_DEFAULT_ADDRESS):
		self._addr = address
		self._bus  = Bus()
		self.select_datarate()
		self.select_data_config()

	def select_datarate(self):
		"""Select the data rate of the accelerometer from the given provided values"""
		DATARATE_CONFIG = (H3LIS331DL_ACCL_PM_NRMl | H3LIS331DL_ACCL_DR_50 | H3LIS331DL_ACCL_XAXIS | H3LIS331DL_ACCL_YAXIS | H3LIS331DL_ACCL_ZAXIS)
		self._bus.write_byte_data(self._addr, H3LIS331DL_REG_CTRL1, DATARATE_CONFIG)

	def select_data_config(self):
		"""Select the data configuration of the accelerometer from the given provided values"""
		DATA_CONFIG = (H3LIS331DL_DEFAULT_RANGE | H3LIS331DL_ACCL_BDU_CONT)
		self._bus.write_byte_data(self._addr, H3LIS331DL_REG_CTRL4, DATA_CONFIG)

	def read_accl(self):
		"""Read data back from H3LIS331DL_REG_OUT_X_L(0x28), 2 bytes
		X-Axis Accl LSB, X-Axis Accl MSB"""
		data0 = self._bus.read_byte_data(self._addr, H3LIS331DL_REG_OUT_X_L)
		data1 = self._bus.read_byte_data(self._addr, H3LIS331DL_REG_OUT_X_H)

		xAccl = data1 * 256 + data0
		if xAccl > H3LIS331DL_RAW_DATA_MAX / 2:
			xAccl -= H3LIS331DL_RAW_DATA_MAX

		"""Read data back from H3LIS331DL_REG_OUT_Y_L(0x2A), 2 bytes
		Y-Axis Accl LSB, Y-Axis Accl MSB"""
		data0 = self._bus.read_byte_data(self._addr, H3LIS331DL_REG_OUT_Y_L)
		data1 = self._bus.read_byte_data(self._addr, H3LIS331DL_REG_OUT_Y_H)

		yAccl = data1 * 256 + data0
		if yAccl > H3LIS331DL_RAW_DATA_MAX / 2 :
			yAccl -= H3LIS331DL_RAW_DATA_MAX

		"""Read data back from H3LIS331DL_REG_OUT_Z_L(0x2C), 2 bytes
		Z-Axis Accl LSB, Z-Axis Accl MSB"""
		data0 = self._bus.read_byte_data(self._addr, H3LIS331DL_REG_OUT_Z_L)
		data1 = self._bus.read_byte_data(self._addr, H3LIS331DL_REG_OUT_Z_H)

		zAccl = data1 * 256 + data0
		if zAccl > H3LIS331DL_RAW_DATA_MAX / 2 :
			zAccl -= H3LIS331DL_RAW_DATA_MAX

		return {'x' : xAccl, 'y' : yAccl, 'z' : zAccl}

def main():
	h3lis331dl = H3LIS331DL()
	while True:
		h3lis331dl.select_datarate()
		h3lis331dl.select_data_config()
		time.sleep(0.2)
		accl = h3lis331dl.read_accl()
		print("Raw:    X = {0:6}   Y = {1:6}   Z = {2:6}"
			.format(accl['x'], accl['y'], accl['z']))
		print("Accel: AX = {0:6.3}g AY = {1:6.3}g AZ = {2:6.3}g"
			.format(accl['x'] / H3LIS331DL_SCALE_FS, accl['y'] / H3LIS331DL_SCALE_FS, accl['z'] / H3LIS331DL_SCALE_FS))
		time.sleep(.5)

if __name__ == '__main__':
    main()
```
:::tip
Se tudo correr bem, você poderá ver o seguinte resultado
:::

<!-- ![](https://files.seeedstudio.com/products/114020121/img/python_result.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/114020121/img/python_result.png" alt="pir" width={600} height="auto" /></p>

Você pode sair deste programa simplesmente pressionando **ctrl+c**.

## Visualizador de Esquemático Online

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/products/114020121/document/Grove-3-Axis-Digital-Accelerometer-LIS3DHTR_v1.0_190910.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- **[PDF]** [LIS3DHTR_DATASHEET](https://files.seeedstudio.com/products/114020121/document/lis3dh.pdf)
- **[PDF]** [Esquemático de hardware](https://files.seeedstudio.com/products/114020121/document/Grove-3-Axis-Digital-Accelerometer-LIS3DHTR_v1.0_SCH_190910.pdf)
- **[ZiP]** [Biblioteca Grove - 3-Axis Digital Accelerometer (LIS3DHTR)](https://github.com/Seeed-Studio/Seeed_Arduino_LIS3DHTR/archive/master.zip)

## Suporte Técnico & Discussão sobre o Produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
