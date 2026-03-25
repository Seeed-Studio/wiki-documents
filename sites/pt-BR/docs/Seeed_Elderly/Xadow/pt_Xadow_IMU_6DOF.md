---
description: Xadow - IMU 6DOF
title: Xadow - IMU 6DOF
keywords:
  - Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Xadow_IMU_6DOF
last_update:
  date: 1/13/2023
  author: shuxu hu
createdAt: '2023-02-03'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Xadow_IMU_6DOF/
---
![](https://files.seeedstudio.com/wiki/Xadow_IMU_6DOF/img/Imu_6dof_01.jpg)

Xadow - IMU 6DOF é um módulo de rastreamento de movimento. Seu design é baseado no sensor MPU6050, que é o primeiro dispositivo integrado de rastreamento de movimento de 6 eixos do mundo, que combina um giroscópio de 3 eixos, um acelerômetro de 3 eixos e um Digital Motion Processor™ (DMP). O MPU6050 possui três conversores analógicos‑digitais (ADCs) de 16 bits para digitalizar as saídas do giroscópio e três ADCs de 16 bits para digitalizar as saídas do acelerômetro, de modo que o Xadow - IMU 6DOF atinge alta precisão de conversão. Para rastreamento preciso de movimentos rápidos e lentos, as partes possuem uma faixa total de medição do giroscópio programável pelo usuário e uma faixa total de medição do acelerômetro programável pelo usuário.

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Xadow-IMU-6DOF-p-1670.html)

## Especificação
---
- Tensão de trabalho: 3,3 V
- Faixa de medição:
  - Faixa total do giroscópio: ±250,. ±500,. ±1000,. ±2000°/s
  - Faixa total do acelerômetro: ±2g, ±4g, ±8g e ±16g.
- Modo de controle: I2C
- Dimensões: 25,43 mm x 20,35 mm

## Demonstração
---
Com base na nossa biblioteca disponível, você pode obter facilmente os valores de aceleração e giroscópio. Agora vamos mostrar como usar o módulo.

**Conexão de hardware:**

![](https://files.seeedstudio.com/wiki/Xadow_IMU_6DOF/img/Xadow-IMU_6DOF_installation.png)

Nota: ao conectar o Xadow IMU 6DOF à Xadow Main Board, a direção da conexão deve ser observada com cuidado. O método de conexão é que o canto sem preenchimento de um módulo Xadow se conecta ao ângulo reto de outro módulo (veja os quatro cantos de cada módulo Xadow).

**Código de teste:**

- Baixe a [biblioteca Xadow - IMU 6DOF  MPU6050](https://github.com/Seeed-Studio/Xadow_IMU_6DOF) do Github e instale o arquivo I2Cdev e o arquivo MPU6050 na sua biblioteca do Arduino. Sobre a instalação da biblioteca, consulte [aqui](https://wiki.seeedstudio.com/pt-br/How_to_install_Arduino_Library) na página do wiki.
- Abra o exemplo: **MPU6050_DMP6 pelo caminho File - >Examples -> MPU6050 ->Examples->MPU6050_DMP6**.

```
#include <I2Cdev.h>//add necessary headfiles
#include <MPU6050.h>//add necessary headfiles
#include <Wire.h>
//====the offset of gyro===========
#define Gx_offset  -1.50
#define Gy_offset  0
#define Gz_offset  0.80
//====the offset of accelerator===========
#define Ax_offset -0.07
#define Ay_offset 0.02
#define Az_offset 0.14
//====================
MPU6050 accelgyro;

int16_t ax,ay,az;//original data;
int16_t gx,gy,gz;//original data;
float Ax,Ay,Az;//Unit g(9.8m/s^2)
float Gx,Gy,Gz;//Unit deg/s


void setup()
{
  Wire.begin();
  Serial.begin(9600);

  Serial.println("Initializing I2C device.....");
  accelgyro.initialize();

  Serial.println("Testing device connections...");
  Serial.println(accelgyro.testConnection() ? "MPU6050 connection successful":"MPU6050 connection failure");
}
void loop()
{

  accelgyro.getMotion6(&ax,&ay,&az,&gx,&gy,&gz);//get the gyro and accelerator
   //==========accelerator================================
   Ax=ax/16384.00;//to get data of unit(g)
   Ay=ay/16384.00;//to get data of unit(g)
   Az=az/16384.00;//to get data of unit(g)
   Serial.println("Acce data.....");
   Serial.print(Ax+Ax_offset);
   Serial.print("   ");
   Serial.print(Ay+Ay_offset);
   Serial.print("   ");
   Serial.println(Az+Az_offset);
   //===============gyro================================
   Gx=gx/131.00;
   Gy=gy/131.00;
   Gz=gz/131.00;
   Serial.println("Gyro data.....");
   Serial.print(Gx+Gx_offset);
   Serial.print("   ");
   Serial.print(Gy+Gy_offset);
   Serial.print("   ");
   Serial.println(Gz+Gz_offset);
  //blinkState=!blinkState;
  //digitalWrite(LED_PIN,blinkState);
  delay(1000);//control time of sampling
}
```

- Envie o código para a Xadow Main Board. Lembre-se de selecionar 'Seeeduino Xadow' em Tools ->Board. Abra o serial monitor para observar o valor de saída do sensor MPU6050.

![](https://files.seeedstudio.com/wiki/Xadow_IMU_6DOF/img/Xadow_IMU_6DOF_result.jpg)

Em estado estático, o valor de saída do eixo Z é cerca de 0,98 g, então você pode usá‑lo como referência para testar se o seu sensor pode funcionar normalmente.

**Orientação dos eixos**
O diagrama abaixo mostra a orientação dos eixos de sensibilidade e a polaridade da rotação.

![](https://files.seeedstudio.com/wiki/Xadow_IMU_6DOF/img/MPU6050_%E8%BD%B4%E5%90%91%E5%AE%9A%E4%BD%8D.png)


## Visualizador online do esquemático

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Xadow_IMU_6DOF/res/Xadow_IMU_6DOF_Eagle_File.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>



## Recursos
---
- [Arquivo Eagle do Xadow - IMU 6DOF](https://files.seeedstudio.com/wiki/Xadow_IMU_6DOF/res/Xadow_IMU_6DOF_Eagle_File.zip)
- [Datasheet do MPU6050](https://files.seeedstudio.com/wiki/Xadow_IMU_6DOF/res/MPU6050.pdf)
- [Arquivo da biblioteca](https://github.com/Seeed-Studio/Xadow_IMU_6DOF)

## Suporte técnico e discussão sobre o produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
