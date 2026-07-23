---
description: Introdução à XIAO ePaper Display Board(ESP32-S3) - EE05
sku: 100057220
title: Introdução à EE05
image: https://files.seeedstudio.com/wiki/Epaper/EE05/22_2.webp
slug: /epaper_ee05
sidebar_position: 4
last_update:
  date: 04/27/2026
  author: dimo
createdAt: '2026-04-07'
url: https://wiki.seeedstudio.com/pt-br/epaper_ee05/
updatedAt: '2026-04-28'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Steppers from '@site/src/components/utils/Stepper';

# Introdução à XIAO ePaper Display Board - EE05

<div class="table-center">
<table align="center">
    <tr>
        <th>XIAO ePaper Display Board EE05</th>
    </tr>
    <tr>
    <td><div align="center"><img width ={300} src="https://files.seeedstudio.com/wiki/Epaper/EE05/22_2.jpg"/></div>
    <div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ePaper-Display-Board-EE05-p-6755.html" target="_blank">
                <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
        </a>
    </div></td>
    </tr>
 </table>
</div>

## Introdução

Alimentada pelo **XIAO ESP32-S3 Plus**, a placa de display EE05 é compatível com uma ampla variedade de displays ePaper de 24 pinos e permite design e implantação de UI sem código com o SenseCraft HMI. Com IO de extensão e um conector de bateria com chave liga/desliga, é ideal para aplicações de display inteligente de baixo consumo.

### Recursos

- **Alimentada por XIAO ESP32-S3 Plus:** Funciona imediatamente quando conectada a um display ePaper compatível.
- **Suporte versátil a displays:** Compatível com uma ampla gama de displays ePaper de 24 pinos para diferentes requisitos de projeto.
- **Porta de IO de extensão:** Permite a conexão de sensores adicionais, como sensores de temperatura e umidade, para funcionalidade aprimorada.
- **Conector de bateria com chave:** Fornece conexão simples de bateria e integra uma chave, permitindo gerenciamento eficiente de energia e economia de consumo.
- **Design e implantação de UI sem código com SenseCraft HMI:** Projete e implemente painéis personalizados com facilidade usando o SenseCraft HMI, nossa nova plataforma sem código com IA. Crie sua UI por meio de simples elementos de arrastar e soltar, escolha entre nossos ricos modelos ou deixe a IA ajudar você. Conecte dados em tempo real a partir de APIs web e, em seguida, implemente seu painel final em um display ePaper com apenas alguns cliques. Do design à configuração de dados até a implantação, tudo acontece de forma contínua em uma única plataforma.

### Especificações

| Parâmetro | Descrição |
|---|---|
| **Processador** | XIAO ESP32-S3 Plus |
| **Conector ePaper** | SPI FPC 24 pinos 0,5 mm |
| **Conector de bateria** | JST 2,0 mm |
| **Chave** | Chave deslizante de alimentação por hardware |
| **Fonte de alimentação** | Bateria Li 3,7 V / USB Type-C |
| Botão | 1x botão de reset (montado na lateral) <br/> 3x botões de usuário (montados na lateral) |

## Visão geral do hardware

### Displays ePaper compatíveis

A EE05 é compatível com diversos displays ePaper SPI de 24 pinos, incluindo, mas não se limitando a:

- [Display E-paper 1,54" - Matriz de pontos 200x200](https://www.seeedstudio.com/1-54-Monochrome-ePaper-Display-with-200x200-Pixels-p-5776.html)
- [Display E-Paper 2,13" - Flexível monocromático 212x104](https://www.seeedstudio.com/2-13-Flexible-Monochrome-ePaper-Display-with-212x104-Pixels-p-5781.html)
- [Display E-Paper 2,13" - Quádruplo 212x104](https://www.seeedstudio.com/2-13-Quadruple-Color-ePaper-Display-with-122x250-Pixels-p-5779.html)
- [Display E-paper 2,9" - Monocromático 128x296](https://www.seeedstudio.com/2-9-Monochrome-ePaper-Display-with-296x128-Pixels-p-5782.html)
- [Display E-Paper 4,2" - Monocromático 400x300](https://www.seeedstudio.com/4-2-Monochrome-ePaper-Display-with-400x300-Pixels-p-5784.html)
- [Display E-Paper 4,26" - Monocromático 800x480](https://www.seeedstudio.com/4-26-Monochrome-SPI-ePaper-Display-p-6398.html)
- [Display E-paper 5,83" - Monocromático 648x480](https://www.seeedstudio.com/5-83-Monochrome-ePaper-Display-with-648x480-Pixels-p-5785.html)
- [Display ePaper monocromático 7,5" com 800x480 pixels](https://www.seeedstudio.com/7-5-Monochrome-ePaper-Display-with-800x480-Pixels-p-5788.html)



## Visão geral do software

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

Selecione o tipo do seu dispositivo e algum código será gerado. Copie esse código, pois o utilizaremos depois.

:::tip
Se você fizer a escolha errada, a tela não exibirá nada.

Portanto, certifique-se de selecionar o tipo correto de dispositivo ou componente.
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE05/1.jpg" style={{width:800, height:'auto'}}/></div>

Após baixar a biblioteca, vá em **Sketch** -> **Include Library** -> **Add .ZIP Library** e selecione a biblioteca baixada.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/51.png" style={{width:800, height:'auto'}}/></div>

## Primeiros passos

Aqui, usamos um display monocromático de 7,5" como exemplo. As etapas são idênticas para outras telas compatíveis; você só precisa selecionar o identificador de tamanho de tela apropriado no driver.

### Configurar e gravar o programa
Selecione o exemplo mostrado na figura

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE05/a_1.jpg" style={{width:800, height:'auto'}}/></div>

Crie um novo arquivo "driver.h" e cole esse código nele. O código deve ser assim:

```cpp
#define BOARD_SCREEN_COMBO 502 // 7.5 inch monochrome ePaper Screen (UC8179)
#define USE_XIAO_EPAPER_DISPLAY_BOARD_EE05
```

Depois disso, vá em **Tools** -> **Board** -> **XIAO ESP32S3** e **Tools** -> **Port** -> **Selecione a porta à qual sua placa está conectada**.


Observe que o PSRAM deve estar habilitado.
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE03/6.jpg" style={{width:1000, height:'auto'}}/></div>

Em seguida, clique em **Upload** para enviar o código.
Agora você verá o resultado na sua tela ePaper! A seguir estão os resultados dos exemplos de Bitmap.
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE05/a_3.jpg" style={{width:500, height:'auto'}}/></div>

## Recursos

- **[PDF]** [Esquemático da XIAO ePaper Display Board Ex05](https://files.seeedstudio.com/wiki/Epaper/EE05/XIAO_ePaper_Display_Board_Ex05_V1.0.pdf)
- **[ZIP]** [Seeed Studio XIAO ePaper Display EE05 SCH&PCB](https://files.seeedstudio.com/wiki/Epaper/EE05/XIAO_ePaper_Display_Board_EE05_V1.11_SCH&PCB_260420.zip)

## Solução de problemas

**P1: A tela não exibe nada após o upload do código.**
- **Verifique o cabo FPC**: Certifique-se de que o cabo FPC do ePaper esteja inserido na orientação correta e bem travado no conector.
- **Verifique a configuração do driver**: Confira novamente o `driver.h` para garantir que o `BOARD_SCREEN_COMBO` correto esteja selecionado para o tamanho específico da sua tela.

**P2: As cores estão invertidas ou o display mostra padrões anormais.**
- **Selecione o modelo exato**: Diferentes tamanhos de tela ou revisões de CI exigem configurações específicas de driver. Certifique-se de que o número do combo corresponda perfeitamente ao modelo da sua tela.
- **Verifique a fonte de alimentação**: Para telas maiores (como a de 7,5"), certifique-se de que sua fonte de alimentação possa fornecer corrente suficiente durante a atualização da tela.

**P3: A placa não liga quando conectada a uma bateria.**
- **Chave de hardware**: Verifique se a chave deslizante de hardware na placa está alternada para a posição ON.
- **Conexão da bateria**: Verifique a polaridade do conector JST 2,0 mm para garantir que corresponda ao projeto da placa.

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
