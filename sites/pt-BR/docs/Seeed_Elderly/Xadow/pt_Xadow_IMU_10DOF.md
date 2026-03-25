---
description: Xadow - IMU 10DOF
title: Xadow - IMU 10DOF
keywords:
  - Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Xadow_IMU_10DOF
last_update:
  date: 1/13/2023
  author: shuxu hu
createdAt: '2023-02-03'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Xadow_IMU_10DOF/
---

![](https://files.seeedstudio.com/wiki/Xadow_IMU_10DOF/img/Xadow-imu-10dof-shao.JPG)

Xadow - IMU 10DOF é uma combinação de [Xadow - IMU 9DOF](https://wiki.seeedstudio.com/pt-br/Xadow_IMU_9DOF) e [Xadow - Barometer BMP180](https://wiki.seeedstudio.com/pt-br/Xadow_Barometer_BMP180). Este módulo é baseado em MPU-9250 e BMP180, o MPU-9250 é um dispositivo de rastreamento de movimento de 9 eixos que combina um giroscópio de 3 eixos, acelerômetro de 3 eixos, magnetômetro de 3 eixos e um Digital Motion Processor (DMP), e o BMP180 é um sensor de pressão digital de alta precisão e ultrabaixo consumo para aplicações de consumo. Este módulo é muito adequado para aplicações em smartphones, tablets e dispositivos vestíveis.

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Xadow-IMU-10DOF-p-2446.html)

## Especificações
---
- Interface I2C
- Endereço I2C do MPU-9250 selecionável
- Baixo consumo de energia
- I2C Modo Rápido de 400kHz para comunicação com todos os registradores
- Sensores de taxa angular de saída digital nos eixos X, Y e Z (giroscópios) com faixa de escala completa programável pelo usuário de ±250, ±500, ±1000 e ±2000°/s
- Acelerômetro de 3 eixos com saída digital e faixa de escala completa programável de ±2g, ±4g, ±8g e ±16g
- Magnetômetro de saída digital com faixa de escala completa de ±4800uT
- Barômetro de saída digital com faixa de 300 ~ 1100hPa (+9000m ~ -500m em relação ao nível do mar)
- Dimensões: 25,43mm x 20,35mm

## Função da Interface
---
![](https://files.seeedstudio.com/wiki/Xadow_IMU_10DOF/img/Xadow-IMU_10DOF_Interface.png)

- ①: Pad de seleção de endereço I2C do MPU-9250 (padrão 0x68)
- ②: Contato inferior FPC de 12 pinos

## Uso
---
Forneceremos um exemplo aqui para mostrar como usar este sensor.

**Instalação de Hardware**

![](https://files.seeedstudio.com/wiki/Xadow_IMU_10DOF/img/Xadow-IMU_10DOF_installation.png)

:::note
    Ao conectar o Xadow - IMU 10DOF à Xadow - Main Board, você deve se atentar à direção da conexão. O método de conexão é que o canto chanfrado de um módulo Xadow precisa ser conectado ao ângulo reto de outro módulo (veja os quatro cantos de cada módulo Xadow).
:::
**Parte de Software**
1. Baixe a biblioteca em [https://github.com/Seeed-Studio/Seeed_Arduino_IMU10DOF](https://github.com/Seeed-Studio/IMU_10DOF)
2. Descompacte na pasta libraries da IDE do Arduino pelo caminho
2. Abra o código diretamente pelo caminho: **File -> Example -> IMU_10DOF_Test**
2. Envie o código. Observe que você deve selecionar o tipo correto de placa e a porta COM.

Você pode ver:

![](https://files.seeedstudio.com/wiki/Xadow_IMU_10DOF/img/Imu-10dof-test.png)

**Orientação dos Eixos**

O diagrama abaixo mostra a orientação dos eixos de sensibilidade e a polaridade da rotação.

![](https://files.seeedstudio.com/wiki/Xadow_IMU_10DOF/img/Imu-10dof-dir-axes.png)


## Visualizador de Esquemático Online

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Xadow_IMU_10DOF/res/Xadow_-_IMU_10DOF_v1.0_sch_pcb.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>


## Recursos
---
- [Arquivo eagle Xadow - IMU 10DOF v1.0](https://files.seeedstudio.com/wiki/Xadow_IMU_10DOF/res/Xadow_-_IMU_10DOF_v1.0_sch_pcb.zip)
- [Biblioteca IMU 10DOF](https://files.seeedstudio.com/wiki/Xadow_IMU_10DOF/res/IMU_10DOF_Library.zip)
- [Folha de dados do BMP180](https://files.seeedstudio.com/wiki/Xadow_IMU_10DOF/res/BMP180.pdf)
- [Folha de dados do MPU-9250](https://files.seeedstudio.com/wiki/Xadow_IMU_10DOF/res/MPU-9250A_Product_Specification.pdf)

## Suporte Técnico e Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
