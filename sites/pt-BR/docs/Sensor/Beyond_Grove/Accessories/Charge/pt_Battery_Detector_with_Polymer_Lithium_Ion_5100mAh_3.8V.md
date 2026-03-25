---
description: Detector de Bateria com Íon de Lítio Polimérico 5100mAh 3,8V
title: Detector de Bateria com Íon de Lítio Polimérico 5100mAh 3,8V
keywords:
  - Acessórios carga
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Battery_Detector_with_Polymer_Lithium_Ion_5100mAh_3.8V
last_update:
  date: 1/13/2023
  author: jianjing Huang
createdAt: '2023-01-13'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Battery_Detector_with_Polymer_Lithium_Ion_5100mAh_3.8V/
---


![](https://files.seeedstudio.com/wiki/Battery_Detector_with_Polymer_Lithium_Ion_5100mAh_3.8V/img/Battery_Detector_with_Polymer_Lithium_Ion_5100mAh_3.8V_700_s.jpg)

O Detector de Bateria com Íon de Lítio Polimérico 5100mAh 3,8V contém dois itens: uma bateria de íon de lítio de 1050 mAh e um detector de energia de bateria para medir a energia restante em uma bateria de íon de lítio.

A bateria de íon de lítio é muito fina, leve e econômica. Ela fornece uma tensão de 3,8 V (nominal). Você também pode carregá-la com um carregador especializado que tenha corrente máxima de entrada de 5100 mA e tensão máxima de entrada de 4,2 V. Esta bateria vem com um conector JST 2.0 pré-instalado, o que é prático para conectar e desconectar. Ela também possui proteção contra sobrecorrente integrada para proteger contra curto-circuito na saída. **Ainda assim, tenha cuidado e não faça uso inadequado da bateria. Nunca a carregue ou utilize sem supervisão.**

O detector de energia de bateria pode detectar a faixa de tensão de entrada de 3–4,2 volts. Há três soquetes JST (JST 1.0, JST 2.0 e JST 2.0) e duas ilhas de solda para bateria que se adaptam a baterias com conectores diferentes. Ao conectar uma bateria a este detector de energia, os quatro LEDs on-board indicarão a energia restante em porcentagem (0–25%, 26–50%, 51–75%, 76–100%). Outro LED acenderá se você conectar o conector da bateria de forma invertida.

[![](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://www.seeedstudio.com/Battery-Detector-with-Polymer-Lithium-Ion-5100mAh-38V-p-2647.html)

:::note

1. Apenas uma bateria pode ser testada de forma confiável ao mesmo tempo.

2. Este detector de energia de bateria será danificado se a tensão de entrada estiver acima de 9 volts.

3. Nunca utilize a bateria enquanto ela estiver sendo carregada.
:::

Rastreador de Versão
----------------

| Revisão do produto                                                     | Data de lançamento | Status de suporte | Notas |
|-------------------------------------------------------------------------|--------------------|-------------------|-------|
| Battery Detector with Polymer Lithium Ion 1050mAh 3.8V(current version) | Maio de 2016       | Suportado         | Nenhuma  |

Recursos
--------

**Para a bateria**

- Com conector JST 2.0 pré-instalado
- Proteção contra curto-circuito para o circuito de saída
- Econômica

**Para o detector de energia de bateria**

- Indicação visual da energia restante de uma bateria
- Diferentes soquetes JST para diferentes conectores de bateria

Especificações
--------------

**Para a bateria**

| Parâmetro                 | Valor                                       |
|---------------------------|---------------------------------------------|
| Capacidade                | 5100 mAh                                    |
| Tensão nominal de saídaCC | 3,8 volts                                   |
| Conector                  | JST 2.0                                     |
| Corrente máxima de carga  | 2500 mA                                     |
| Proteção                  | Proteção contra curto-circuito para o circuito de saída |
| Peso                      | 76 g, o pacote inteiro pesa 91 g.          |
| Dimensões                 | 59,8(largura)×10,8(altura)×59,5(profundidade) mm     |

**Para o detector de energia de bateria**

| Parâmetro        | Valor                                                                                                                                     |
|------------------|-------------------------------------------------------------------------------------------------------------------------------------------|
| Tensão de entrada | 3 – 4,2V                                                                                                                                  |
| Corrente de operação | 15 mA                                                                                                                                     |
| Modo de indicação | Quatro LEDs (detalharemos isso mais tarde)                                                                                                       |
| Soquetes          | Três soquetes para diferentes conectores de bateria e duas ilhas de solda para bateria (detalharemos isso mais tarde)                                    |
| Dimensões         | 30(largura)×25(profundidade) mm                                                                                                                    |
| CN1185            | [Datasheet](https://files.seeedstudio.com/wiki/Battery_Detector_with_Polymer_Lithium_Ion_5100mAh_3.8V/res/CN1185_Datasheet.pdf)                                      |
| Peso              | 3,2 g                                                                                                                                     |
| Notas             | Conecte apenas uma única bateria a este módulo; A tensão de entrada para este módulo deve ser inferior a 9 volts, caso contrário, ele será danificado. |

Plataformas suportadas (apenas para a bateria)
------------------------

<table>
<tr>
<td>
Plataforma
</td>
<td>
Seeeduino/Arduino
</td>
<td>
Rasberry Pi
</td>
<td>
Beaglebone
</td>
<td>
LinkIt ONE
</td>
</tr>
<tr>
<td>
Status de suporte
</td>
<td>
Suportado
</td>
<td>
Não suportado
</td>
<td>
Suportado(apenas com Grove Base Cape for Beaglebone v2)
</td>
<td>
Não suportado
</td>
</tr>
<tr>
<td>
Notas
</td>
<td colspan="5">
Se nenhum número de versão for mencionado para uma plataforma específica, isso significa que este produto suporta todas as versões dessa plataforma.
</td>
</tr>
</table>

Visão Geral de Hardware
-----------------

![](https://files.seeedstudio.com/wiki/Battery_Detector_with_Polymer_Lithium_Ion_5100mAh_3.8V/img/Battery_kit-3.7V_520mAh_Battery_power_detector_components_description_1200_s.jpg)

- **CN1185**, um circuito de monitoramento de tensão.
- **Ilhas de solda para bateria**, para soldar os terminais da bateria.

### **Conteúdo da embalagem**(partes principais)

| Nome das partes         | Quantidade |
|------------------------|-----------|
| Bateria de íon de lítio         | 1 peça  |
| Detector de energia de bateria | 1 peça  |

Primeiros Passos
---------------

Conecte a bateria e o detector de energia de bateria como na imagem a seguir. Você pode ver que os LEDs *ON* indicam a energia real restante.

![](https://files.seeedstudio.com/wiki/Battery_Detector_with_Polymer_Lithium_Ion_5100mAh_3.8V/img/Battery_Detector_with_Polymer_Lithium_Ion_5100mAh_3.8V_700_s.jpg)

<!-- [[|600px|none|Front view ]] -->

## Visualizador Online de Esquemático

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Battery_Detector_with_Polymer_Lithium_Ion_5100mAh_3.8V/res/110060467_Battery_Detector_with_Polymer_Lithium_Ion_5100mAh_3.8V_Battery_Power_Detector.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

Recursos
---------

- [Arquivo de Esquemático(Eagle)](https://files.seeedstudio.com/wiki/Battery_Detector_with_Polymer_Lithium_Ion_5100mAh_3.8V/res/110060467_Battery_Detector_with_Polymer_Lithium_Ion_5100mAh_3.8V_Battery_Power_Detector.zip)
- [CN1185 Datasheet](https://files.seeedstudio.com/wiki/Battery_Detector_with_Polymer_Lithium_Ion_5100mAh_3.8V/res/CN1185_Datasheet.pdf)
- [Datasheet da Bateria](https://files.seeedstudio.com/wiki/Battery_Detector_with_Polymer_Lithium_Ion_5100mAh_3.8V/res/Battery_Detector_with_Polymer_Lithium_Ion_5100mAh_3.8V_Battery_Datasheet.pdf)
- [Certificações e Relatório de Teste desta Bateria](https://files.seeedstudio.com/wiki/Battery_Detector_with_Polymer_Lithium_Ion_5100mAh_3.8V/res/Certifications_and_Test_Report.zip)

<!-- This Markdown file was created from https://www.seeedstudio.com/wiki/Battery_Detector_with_Polymer_Lithium_Ion_5100mAh_3.8V -->

## Suporte Técnico & Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
