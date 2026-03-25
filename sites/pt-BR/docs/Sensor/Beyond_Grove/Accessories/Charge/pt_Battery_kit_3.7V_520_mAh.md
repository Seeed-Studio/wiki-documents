---
title: Kit de bateria 3,7V 520mAh
nointro: null
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/pt-br/Battery_kit_3.7V_520_mAh/
slug: /Battery_kit_3.7V_520_mAh
last_update:
  date: 02/03/2022
  author: gunengyu
createdAt: '2023-02-06'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Battery_kit_3.7V_520_mAh/
---

![](https://files.seeedstudio.com/wiki/Battery-kit-3.7V_520-mAh/img/Battery_kit-3.7V_520mAh_Product_View_960.jpg)

O kit de bateria 3,7V 520mAh contém dois itens: uma bateria de íons de lítio de 520mAh e um detector de energia de bateria para medir a energia restante em uma bateria de íons de lítio.

A bateria de íons de lítio é muito fina, leve e econômica. Ela fornece tensão de 3,7 V (nominal). Você também pode carregá‑la com um carregador especializado que tenha corrente de entrada máxima de 520 mA e tensão de entrada máxima de 4,2 V. Esta bateria vem com um conector JST 1.0 pré-fixado, o que facilita conectar e desconectar. Ela também possui proteção contra sobrecorrente integrada para proteger contra curto‑circuito na saída. **Ainda assim, tenha cautela e não abuse da bateria durante o uso. Nunca carregue ou use sem supervisão.**

O detector de energia da bateria pode detectar a faixa de tensão de entrada de 3–4,2 volts. Existem três soquetes JST (JST 1.0, JST 2.0 e JST 2.0) e duas ilhas de soldagem de bateria que se adaptam a baterias com conectores diferentes. Ao conectar uma bateria a este detector de energia, os quatro LEDs on-board indicarão a energia restante em porcentagem (0–25%, 26–50%, 51–75%, 76–100%). Outro LED acenderá se você conectar o conector da bateria na direção errada.

**Nota** que há apenas uma bateria confiável para ser testada ao mesmo tempo.

**Nota** que este detector de energia de bateria será danificado se a tensão de entrada estiver acima de 9 volts.

**Nota** nunca use a bateria enquanto ela estiver sendo carregada.

###  Rastreador de Versão ###



|Versão do produto | Data de lançamento |Status de suporte | Notas|
|---|---|---|---|
| Kit de bateria 3,7V 520 mAh (primeira versão)|  Maio de 2016 | Suportado | Nenhuma|

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png) ](https://www.seeedstudio.com/depot/Battery-kit37V-520mAh-p-2646.html)

##  Recursos ##

**Para a bateria**

- Com conector JST 1.0 pré-fixado

- Proteção contra curto-circuito para o circuito de saída

- Econômica

**Para o detector de energia da bateria**

- Indicação visual da energia restante de uma bateria

- Diferentes soquetes JST para diferentes conectores de bateria

##  Especificações ##

**Para a bateria**

|Item|Valor|
|--|--|
 |Capacidade  |520 mAh|
 |Tensão nominal de saída (CC) | 3,7 volts|
| Conector  | JST 1.0|
  |Corrente máxima de carga|  520 mA|
|  Proteção | Proteção contra curto-circuito para o circuito de saída|
 |Peso | 11 g|
  |Dimensões |  50 (largura)×2,5 (altura)×41 (profundidade) mm|

**Para o detector de energia da bateria**

|Item|Valor|
|---|---|
 |Tensão de entrada | 3 – 4,2 V|
 |Corrente de operação |15 mA|
 |Forma de indicação   |Quatro LEDs (detalharemos mais tarde)|
|Soquetes   |Três soquetes para conectores de bateria diferentes e duas ilhas de soldagem de bateria (detalharemos mais tarde)|
 |Dimensões |  30 (largura)×25 (profundidade) mm|
 |CN1185| [Datasheet](https://files.seeedstudio.com/wiki/Battery-kit-3.7V_520-mAh/res/CN1185_Datasheet.pdf)|
|  Peso | 3,2 g|
 |Notas | Conecte apenas uma única bateria a este módulo; a tensão de entrada deste módulo deve ser inferior a 9 volts, caso contrário irá danificar este módulo.|

###  Plataforma suportada (apenas para a bateria) ###



|Plataforma |Seeeduino/Arduino|  Rasberry Pi |  Beaglebone | LinkIt ONE|
|--|--|--|--|--|
 |Status de suporte| Suportado|  Não suportado | Suportado (apenas com [Grove Base Cape for Beaglebone](https://seeeddoc.github.io/Grove_Base_Cape_for_BeagleBone_v2/)) | Não suportado|
 |Notas|  Se nenhum número de versão for apresentado para uma plataforma específica, isso significa que este produto suporta todas as versões dentro dessa plataforma.|||||

##  Visão Geral de Hardware  ##

Esta seção mostra descrições dos componentes no detector de energia da bateria.

![](https://files.seeedstudio.com/wiki/Battery-kit-3.7V_520-mAh/img/Battery_kit-3.7V_520mAh_Battery_power_detector_components_description_1200_s.jpg)

- **CN1185**, um circuito de monitoramento de tensão.

- **Ilhas de soldagem da bateria**, para soldar os fios da bateria.

### Conteúdo da embalagem (partes principais)  ###


|Nome das partes|    Quantidade|
|---|
  |Bateria de íons de lítio|  1 peça|
  |Detector de energia da bateria | 1 peça|

##  Primeiros Passos  ##

Conecte a bateria e o detector de energia da bateria conforme a imagem a seguir. Você verá que os LEDs acesos indicam a energia real restante.

![](https://files.seeedstudio.com/wiki/Battery-kit-3.7V_520-mAh/img/Battery_kit-3.7V_520mAh_Battery_power_demo_1200_s.jpg)


## Visualizador Online de Esquemático

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Battery-kit-3.7V_520-mAh/res/Battery_kit-3.7V_520mAh_Schematics.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>


##  Recursos ##

- **[Eagle]**[Arquivo de esquemático (Eagle)](https://files.seeedstudio.com/wiki/Battery-kit-3.7V_520-mAh/res/Battery_kit-3.7V_520mAh_Schematics.zip)
- **[PDF]**[Detector de Bateria v1.0 pcb](https://files.seeedstudio.com/wiki/Battery-kit-3.7V_520-mAh/res/Battery%20Detector%20v1.0pcb.pdf)
- **[PDF]**[Detector de Bateria v1.0 sch](https://files.seeedstudio.com/wiki/Battery-kit-3.7V_520-mAh/res/Battery%20Detector%20v1.0.pdf)
- **[Datasheet]**[CN1185 Datasheet](https://files.seeedstudio.com/wiki/Battery-kit-3.7V_520-mAh/res/CN1185_Datasheet.pdf)
- **[Datasheet]**[Datasheet da Bateria](https://files.seeedstudio.com/wiki/Battery-kit-3.7V_520-mAh/res/Lithium-ion_Battery_3.7V-520mAH_Datasheet.pdf)

## Suporte Técnico & Discussão sobre o Produto
 se você tiver qualquer problema técnico, envie a questão para o nosso [fórum](http://forum.seeedstudio.com/). 
Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja o mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>