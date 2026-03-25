---
description: Xadow - Bússola
title: Xadow - Bússola
keywords:
  - Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Xadow_Compass
last_update:
  date: 1/13/2023
  author: shuxu hu
createdAt: '2023-02-03'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Xadow_Compass/
---
![](https://files.seeedstudio.com/wiki/Xadow_Compass/img/X_compass_01.jpg)

Xadow Compass é uma bússola digital de 3 eixos que faz parte da família Xadow. O módulo é baseado em um sensor magnético de baixo campo HMC5883. Ele oferece precisão de direção de bússola de 1° a 2° e utiliza o barramento serial I2C para se comunicar com o seu microcontrolador. Xadow Compass é uma ferramenta útil para ajudar você a obter informações de direção.

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Xadow-Compass-p-1669.html)

## Especificação
---
- Tensão de operação: 3,3 V
- Linearidade: 0,1(Máx) ±% FS
- Resolução: 10 miligauss
- Faixa dinâmica magnética: ±1 ~ ±8 gauss
- Endereço IIC:
  - Endereço de 7 bits: 0x1E
  - Endereço de leitura de 8 bits: 0x3D
  - Endereço de escrita de 8 bits: 0x3C
- Temperatura de operação: -30 ~ +85 °C
- Dimensões: 25,43 mm x 20,35 mm

## Demonstração
---
Esta demonstração vai mostrar como ler dados brutos, como calibrar os dados com o seu ângulo de declinação magnética local e como obter o ângulo de direção.

**Obter a declinação magnética local**

Primeiro, antes de qualquer ação que você vá realizar, você precisa preparar um parâmetro que será usado na demonstração. Essa é a sua declinação magnética local.
- Você pode encontrá-la em graus através da [página da web de declinação magnética](http://www.magnetic-declination.com/). Por exemplo, a minha é -2°37’, que corresponde a -2,617 grau.
- Em seguida, converta de grau para radianos, e assim você obtém o "declinationAngle". Por exemplo, no meu caso, declinationAngle = -2.617 / （2*π）= -0.0456752665 rad. Três algarismos significativos são suficientes. Portanto, eu o reduziria para -0.0456 rad. E este é o parâmetro com o qual você irá substituir o valor de "declinationAngle" no código de demonstração.

**Baixar código**
- Conclua a instalação de hardware:
:::note
    Ao conectar Xadow Compass à Xadow Main Board, você deve se atentar à direção da conexão. O método de conexão é que o canto chanfrado de um módulo Xadow deve ser conectado ao ângulo reto de outro módulo (observe os quatro cantos de cada módulo Xadow).
:::
- Baixe o arquivo de biblioteca: [Digital Compass Library](https://github.com/Seeed-Studio/Grove_3Axis_Digital_Compass) e instale-o na sua biblioteca do Arduino. Veja [How to install Arduino Library](https://wiki.seeedstudio.com/pt-br/How_to_install_Arduino_Library) para aprender o método de instalação.
- Abra a demonstração pelo caminho: File -> Example -> Digital Compass -> HMC5883L_Example. Substitua o valor da variável "declinationAngle" por aquele que você já calculou.

![](https://files.seeedstudio.com/wiki/Xadow_Compass/img/Xadow_Compass_Code.jpg)

- Faça o upload do código. Verifique o resultado de saída abrindo o monitor serial.

![](https://files.seeedstudio.com/wiki/Xadow_Compass/img/Digital_Compass2.jpg)


## Visualizador de Esquemático Online

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Xadow_Compass/res/Xadow_Compass_Eagle_File.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>



## Recursos
---
- [3-Axis Digital Compass HMC5883 Datasheet](https://files.seeedstudio.com/wiki/Xadow_Compass/res/HMC5883.pdf)
- [Arquivo Eagle do Xadow Compass](https://files.seeedstudio.com/wiki/Xadow_Compass/res/Xadow_Compass_Eagle_File.zip)
- [Arquivo de Biblioteca do Xadow Compass](https://github.com/Seeed-Studio/Grove_3Axis_Digital_Compass)

## Suporte Técnico e Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que a sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
