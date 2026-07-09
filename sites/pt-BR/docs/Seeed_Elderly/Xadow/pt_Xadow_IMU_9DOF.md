---
description: Xadow - IMU 9DOF
title: Xadow - IMU 9DOF
keywords:
  - Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Xadow_IMU_9DOF
last_update:
  date: 1/13/2023
  author: shuxu hu
createdAt: '2023-02-03'
updatedAt: '2026-03-13'
url: https://wiki.seeedstudio.com/pt-br/Xadow_IMU_9DOF/
---

![](https://files.seeedstudio.com/wiki/Xadow_IMU_9DOF/img/Xadow_9dof.jpg)
Xadow - IMU 9DOF é um módulo de rastreamento de movimento de 9 eixos de alto desempenho, que é baseado no MPU-9150. O MPU-9150 é o primeiro dispositivo integrado de rastreamento de movimento de 9 eixos do mundo, projetado para os requisitos de baixo consumo de energia, baixo custo e alto desempenho de equipamentos eletrônicos de consumo, incluindo smartphones, tablets e sensores vestíveis. O MPU-9150 possui três ADCs de 16 bits para digitalizar as saídas do giroscópio, três ADCs de 16 bits para digitalizar as saídas do acelerômetro e três ADCs de 13 bits para digitalizar as saídas do magnetômetro.

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Xadow-IMU-9DOF-p-1776.html)

## Especificação
---
- Interface I2C
- Baixo custo
- I2C Modo Rápido de 400kHz para comunicação com todos os registradores
- Sensores de taxa angular de saída digital dos eixos X, Y e Z (giroscópios) com faixa de escala completa programável pelo usuário de ±250, ±500, ±1000 e ±2000°/s
- Acelerômetro digital de 3 eixos com faixa de escala completa programável de ±2g, ±4g, ±8g e ±16g
- Sensor magnético Hall monolítico de silício de 3 eixos com concentrador magnético


## Função da Interface
---
![](https://files.seeedstudio.com/wiki/Xadow_IMU_9DOF/img/Xadow_-_IMU_9DOF.jpg)

- ①: Contato inferior FPC de 12 pinos
- ②: Resistor de seleção de endereço: R4, R5 (o endereço padrão é 0x68)
  - Endereço é 0x68: R4 não é soldado.
  - Endereço é 0x69: R5 não é soldado.

## Uso
---
Com base na biblioteca, podemos exibir o valor de Accle & Gyro & Magnet no monitor serial. Agora vamos mostrar como usar o módulo.

**Instalação de Hardware**

![](https://files.seeedstudio.com/wiki/Xadow_IMU_9DOF/img/IMU_9DOF.jpg)

A instalação de hardware é muito fácil, ele pode ser conectado ao Xadow - Main Board pelo cabo FPC.

**Parte de Software**
1. Baixe a biblioteca [libraries.zip](https://github.com/Seeed-Studio/Grove_IMU_9DOF);
2. Descompacte as bibliotecas na pasta libraries da IDE do Arduino pelo caminho: ..\arduino-1.0.5\libraries.
3. Descompacte o arquivo IMU_9D0F_Demo na pasta libraries da IDE do Arduino pelo caminho: ..\arduino-1.0.5\libraries.
4. Abra o código diretamente pelo caminho: File -> Example -> IMU_9D0F_Demo
5. Envie o código. Observe que você deve selecionar o tipo correto de placa e a porta COM.
6. Você pode ver:

![](https://files.seeedstudio.com/wiki/Xadow_IMU_9DOF/img/9DOF_Serial_Monitor.jpg)

Em estado estático, o valor de saída do eixo Z é cerca de 0,98g, então você pode se basear nisso para testar se o seu sensor pode funcionar normalmente.

**Orientação dos Eixos**

O diagrama abaixo mostra a orientação dos eixos de sensibilidade e a polaridade da rotação.

![](https://files.seeedstudio.com/wiki/Xadow_IMU_9DOF/img/MPU9150.jpg)


## Visualizador de Esquemático Online

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Xadow_IMU_9DOF/res/Xadow-IMU_9DOF_v1.0.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>



## Recursos
---
- [Xadow_IMU_9DOF_Eagle_File.zip](https://files.seeedstudio.com/wiki/Xadow_IMU_9DOF/res/Xadow-IMU_9DOF_v1.0.zip)
- [Xadow_IMU_9DOF_Sch_PDF File](https://files.seeedstudio.com/wiki/Xadow_IMU_9DOF/res/Sch_Of_Xadow-IMU_9DOF_v1.0.pdf)
- [MPU_9150_Datasheet.pdf](https://files.seeedstudio.com/wiki/Xadow_IMU_9DOF/res/MPU-9150.pdf)

## Suporte Técnico & Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer a você diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
