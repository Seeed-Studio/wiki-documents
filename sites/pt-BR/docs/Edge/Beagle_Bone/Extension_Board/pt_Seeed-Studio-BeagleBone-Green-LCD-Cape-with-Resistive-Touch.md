---
description: Seeed Studio BeagleBone® Green LCD Cape com Toque Resistivo
title: Seeed Studio BeagleBone® Green LCD Cape com Toque Resistivo
keywords:
  - Beagle_Bone
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Seeed-Studio-BeagleBone-Green-LCD-Cape-with-Resistive-Touch
sku: 104990263,104990262
last_update:
  date: 1/10/2022
  author: jianjing Huang
createdAt: '2023-01-10'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Seeed-Studio-BeagleBone-Green-LCD-Cape-with-Resistive-Touch/
---


![](https://www.seeedstudio.site/media/catalog/product/cache/ef3164306500b1080e8560b2e8b5cc0f/h/t/httpsstatics3.seeedstudio.comseeedimg2016-08ddkssqrw2lfthpq0phlecp1r.jpg)

**Green LCD Cape with Resistive Touch** é projetado para SeeedStudio Beagle bone® Green ou Beagle bone Black com um compacto LCD de 5 polegadas, que é menor do que um de 7 polegadas, mas fornece uma resolução de 800x480 usando uma camada de touchscreen resistivo de 4 fios para interações do usuário. É fácil de configurar apenas conectando o cabeçalho de 2x46 pinos ao SeeedStudioBeaglebone®Green/Beaglebone®Black, que fornece tudo o que o cape requer, como alimentação e sinais de exibição. Além disso, o cape pode ser alimentado pela porta micro USB integrada na parte de trás. Botões abaixo da tela, LEFT, RIGHT, UP, DOWN e ENTER, fornecem uma maneira alternativa de interagir com sua tela. Dois LEDs são usados para indicação de status de energia e usuário.

**5 Polegadas**

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/5-Inch-BeagleBone-Green-LCD-Cape-with-Resistive-Touch-p-2642.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

**7 Polegadas**

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/7-Inch-BeagleBone-Green-LCD-Cape-with-Resistive-Touch-p-2643.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## Recursos

--------

- Resolução de até 800x480 (5 polegadas)  /   1024x600 (7 polegadas)
- Touchscreen resistivo
- 5 botões incluindo LEFT, RIGHT, UP, DOWN e ENTER
- Compatível com Debian
- Retroiluminação ULP
- 4 x furos de montagem de 3 mm
- Fonte de alimentação USB integrada

## Especificações

-------------

| Nome                | Valor                                                                                                  |
|--------------------------|--------------------------------------------------------------------------------------------------------|
| Dimensão            | 200mm x130mm x50mm                                                                                              |
| Peso | P.B. 120g                                  |
|Tensão de trabalho|5V |
|Corrente de trabalho|110mA |
|Potência|0,55W |

## Aplicação

-----------------

Use-o com BeagleBone® para exibir qualquer coisa que você quiser.

## Hardware

-----------------

![](https://www.seeedstudio.site/media/catalog/product/cache/ef3164306500b1080e8560b2e8b5cc0f/h/t/httpsstatics3.seeedstudio.comseeedimg2016-08za8h5rzwtbm1lq3n3oydkcxp.jpg)

**SN74HC245**

- Grande faixa de corrente de acionamento de IO

**Chave de endereço I2C do Cape**

- Chave de configuração de endereço I2C

**CAT4139TD**

- Retroiluminação, corrente e tensão constantes

### Lista de peças

|                            |          |
|----------------------------|----------|
| **Nome**             | Quantidade |
|  Green LCD Cape with Resistive Touch | 1        |

## Primeiros Passos

-----------

***Será mostrado a você como começar passo a passo nesta seção.***

### Preparação

- Placa BeagleBone® Green ou placa BeagleBone® Black (com [instalação](https://beagleboard.org/getting-started) do SO) × 1.
- Cabos USB (tipo A para micro tipo B) × 2.

### Conexão de Hardware

![](https://www.seeedstudio.site/media/catalog/product/cache/ef3164306500b1080e8560b2e8b5cc0f/h/t/httpsstatics3.seeedstudio.comseeedimg2016-086yqt2uwelst8w5mwuaklys12.jpg)

:::note
A placa BeagleBone® Green e o Green LCD Cape with Resistive Touch precisam estar conectados via USB para fornecimento de energia suficiente.
:::

### Configuração de Software

1. Verifique qual porta COM a placa BeagleBone® Green está usando no Gerenciador de Dispositivos

![](https://files.seeedstudio.com/wiki/BBG-LCD-Cape-with-Resistive-Touch/img/com-show.png)

2. Acesse o sistema da placa BeagleBone® Green usando o putty com a porta COM.

![](https://files.seeedstudio.com/wiki/BBG-LCD-Cape-with-Resistive-Touch/img/putty-config.png)

conta: debian, senha: temppwd

![](https://files.seeedstudio.com/wiki/BBG-LCD-Cape-with-Resistive-Touch/img/BBG-start.png)

3. Modifique as configurações em `/boot/uEnv.txt`

```bash
sudo nano /boot/uEnv.txt
```

Para a tela de 7 polegadas:

![](https://files.seeedstudio.com/wiki/BBG-LCD-Cape-with-Resistive-Touch/img/7-inch-config.png)

Para a tela de 5 polegadas:

![](https://files.seeedstudio.com/wiki/BBG-LCD-Cape-with-Resistive-Touch/img/5-inch-config.png)

Para dispositivos de exibição que usam o HDMI do BeagleBone®, descomente `disable_uboot_overlay_video=1`

![](https://files.seeedstudio.com/wiki/BBG-LCD-Cape-with-Resistive-Touch/img/HDMI-config.png)

4. Reinicie o sistema. O LED estará piscando e você verá esta janela

![](https://files.seeedstudio.com/wiki/BeagleBone_Green_HDMI_Cape/img/Bbb_vnc.jpg)

## Recursos

---------

- **[Esquemático]** [Arquivos esquemáticos](https://statics3.seeedstudio.com/assets/file/bazaar/product/5INCH_BBG_00A2_SCH.pdf)

## Suporte Técnico & Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja o mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
