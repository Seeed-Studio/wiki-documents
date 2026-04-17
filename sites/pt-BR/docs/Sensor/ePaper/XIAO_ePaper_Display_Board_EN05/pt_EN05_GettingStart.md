---
description: Introdução à XIAO ePaper Display Board(nRF52840) - EN05
sku: TBD
title: Introdução à XIAO ePaper Display Board(nRF52840) - EN05
sidebar_position: 1
slug: /epaper_en05
last_update:
  date: 04/08/2026
  author: Jackson.Li
createdAt: '2026-04-08'
url: https://wiki.seeedstudio.com/pt-br/epaper_en05/
updatedAt: '2026-04-08'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Steppers from '@site/src/components/utils/Stepper';

# Introdução à XIAO ePaper Display EN05

<div class="table-center">
<table align="center">
    <tr>
        <th>XIAO ePaper Display Board EN05</th>
    </tr>
    <tr>
    <td><div align="center"><img width ={300} src="https://files.seeedstudio.com/wiki/Epaper/EN05/3.jpg"/></div>

    <div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/catalogsearch/result/?q=EN05" target="_blank">
                <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
        </a>
    </div></td>
    </tr>
 </table>
</div>

## Introdução

Alimentada pelo **XIAO nRF52840 Plus**, a placa de display EN05 é uma placa controladora de ePaper de ultra baixo consumo, projetada especificamente para displays ePaper de 24 pinos. Com uma chave de hardware para energia, ela é ideal para projetos alimentados por bateria, como etiquetas eletrônicas de prateleira, crachás inteligentes e quadros de informação IoT portáteis.

### Recursos

- **Alimentada por XIAO nRF52840 Plus:** Recursos integrados de Bluetooth 5.0 para comunicação sem fio.
- **Botões fáceis de usar:** Inclui 1 botão Reset montado na lateral e 3 botões de usuário (Botão 3 mapeado para D9) para interações personalizadas (por exemplo, despertar / página anterior / próxima página).
- **Design de baixo consumo:** Conector de bateria JST 2,0 mm integrado com uma chave deslizante de hardware e desligamento automático dos periféricos durante o modo de suspensão do MCU.
- **Design traseiro plano:** PCB preto fosco com parte traseira plana (sem pinos longos) para fácil fixação.

### Especificações

| Parâmetro | Descrição |
|---|---|
| **Processador** | XIAO nRF52840 Plus |
| **Sem fio** | Bluetooth 5.0 |
| **Conector ePaper** | SPI FPC 24 pinos 0,5 mm |
| **Conector de bateria** | JST 2,0 mm (bateria Li 3,7 V) |
| **Chave** | Chave deslizante de energia em hardware |
| **Botões** | 1x botão Reset (montado na lateral) <br/> 3x botões de usuário (montados na lateral) |
| **Espessura da PCB** | 1,2 mm |

## Visão geral de hardware

### Displays ePaper compatíveis

A EN05 é compatível com uma variedade de displays ePaper SPI de 24 pinos, incluindo, mas não se limitando a:

- [Display E-paper de 1,54" - Matriz de pontos 200x200](https://www.seeedstudio.com/1-54-Monochrome-ePaper-Display-with-200x200-Pixels-p-5776.html)
- [Display E-Paper de 2,13" - Flexível Monocromático 212x104](https://www.seeedstudio.com/2-13-Flexible-Monochrome-ePaper-Display-with-212x104-Pixels-p-5781.html)
- [Display E-Paper de 2,13" - Quádruplo 212x104](https://www.seeedstudio.com/2-13-Quadruple-Color-ePaper-Display-with-122x250-Pixels-p-5779.html)
- [Display E-paper de 2,9" - Monocromático 128x296](https://www.seeedstudio.com/2-9-Monochrome-ePaper-Display-with-296x128-Pixels-p-5782.html)
- [Display E-Paper de 4,2" - Monocromático 400x300](https://www.seeedstudio.com/4-2-Monochrome-ePaper-Display-with-400x300-Pixels-p-5784.html)
- [Display E-Paper de 4,26" - Monocromático 800x480](https://www.seeedstudio.com/4-26-Monochrome-SPI-ePaper-Display-p-6398.html)
- [Display E-paper de 5,83" - Monocromático 648x480](https://www.seeedstudio.com/5-83-Monochrome-ePaper-Display-with-648x480-Pixels-p-5785.html)
- [Display ePaper monocromático de 7,5" com 800x480 pixels](https://www.seeedstudio.com/7-5-Monochrome-ePaper-Display-with-800x480-Pixels-p-5788.html)



## Visão geral de software

### Instalar a biblioteca Seeed GFX

:::tip
Esta biblioteca tem a mesma função que a biblioteca TFT e não é compatível com ela. Se você instalou a biblioteca TFT ou outras bibliotecas de display semelhantes, desinstale-as primeiro.
:::

Baixe e instale a biblioteca Seeed GFX a partir do GitHub.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/fix1.jpg" style={{width:800, height:'auto'}}/></div>

<div align="center">
<a href="https://github.com/Seeed-Studio/Seeed_Arduino_LCD" target="_blank">
<p style={{textAlign: 'center'}}><button type="button" className="download" style={{backgroundColor: '#00A418', borderRadius: '8px', border: 'none', color: '#fff', padding: '12px 24px', textAlign: 'center', textDecoration: 'none', display: 'inline-block', fontSize: '16px', margin: '4px 2px', cursor: 'pointer'}}>Clique aqui para baixar</button></p>
</a>
</div>

Role para baixo e abra este link.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/fix2.jpg" style={{width:800, height:'auto'}}/></div>

Selecione o tipo do seu dispositivo e algum código será gerado. Copie esse código e iremos utilizá-lo mais tarde.

:::tip
Se você fizer a escolha errada, a tela não exibirá nada.

Portanto, certifique-se de selecionar o tipo correto de dispositivo ou componente.
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN05/1.jpg" style={{width:800, height:'auto'}}/></div>

Após baixar a biblioteca, vá em **Sketch** -> **Include Library** -> **Add .ZIP Library** e selecione a biblioteca baixada.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/51.png" style={{width:800, height:'auto'}}/></div>

## Primeiros passos

Aqui, usamos um display monocromático de 7,5" como exemplo. Os passos são idênticos para outras telas compatíveis; você só precisa selecionar o identificador de tamanho de tela apropriado no driver.

### Configurar e gravar o programa
Selecione o exemplo mostrado na figura

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE05/a_1.jpg" style={{width:800, height:'auto'}}/></div>

Crie um novo arquivo "driver.h" e cole esse código nele. O código deve ser parecido com:

```cpp
#define BOARD_SCREEN_COMBO 502 // 7.5 inch monochrome ePaper Screen (UC8179)
#define USE_XIAO_EPAPER_DISPLAY_BOARD_EN05
```

Depois disso, vá em **Tools** -> **Board** -> **Seeed nRF52 Boards** -> **Seeed XIAO nRF52840 Sense** e **Tools** -> **Port** -> **Selecione a porta à qual sua placa está conectada**.

Em seguida, clique em **Upload** para enviar o código.
Agora você verá o resultado na tela ePaper!

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN05/2.jpg" style={{width:500, height:'auto'}}/></div>

## Recursos

- **[PDF]** [Esquemático da XIAO ePaper Display Board Ex05](https://files.seeedstudio.com/wiki/Epaper/EE05/XIAO_ePaper_Display_Board_Ex05_V1.0.pdf)

## Solução de problemas

**P1: A tela não exibe nada após o upload do código.**
- **Verifique o cabo FPC**: Certifique-se de que o cabo FPC do ePaper está inserido na orientação correta e firmemente travado no conector.
- **Verifique a configuração do driver**: Confira `driver.h` para garantir que o `BOARD_SCREEN_COMBO` correto esteja selecionado para o tamanho específico da sua tela.

**P2: A placa não liga quando conectada a uma bateria.**
- **Chave de hardware**: Verifique se a chave deslizante de hardware na placa está alternada para a posição ON.
- **Conexão da bateria**: Verifique a polaridade do conector JST 2,0 mm.

## Suporte técnico e discussão sobre o produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer suporte e garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
