---
description: Grove Base Cape para BeagleBone® v2
title: Grove Base Cape para BeagleBone® v2
keywords:
  - Beagle_Bone
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove_Base_Cape_for_BeagleBone_v2
sku: 103030035
last_update:
  date: 1/10/2022
  author: jianjing Huang
createdAt: '2023-01-10'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Grove_Base_Cape_for_BeagleBone_v2/
---


![](https://files.seeedstudio.com/wiki/Grove_Base_Cape_for_BeagleBone_v2/img/Grove_Base_Cape_for_BeagleBone_v2_product_view_1200.jpg)

**Grove Base Cape para BeagleBone®** v2 é uma placa de expansão do sistema Grove para a plataforma BeagleBone®. Esta cape torna conveniente conectar muitos transdutores (sensores e atuadores) disponíveis como módulos Grove à plataforma BeagleBone®. As placas também incluem uma EEPROM Serial de 256 kb. Ela economizará muito esforço para você no processo de desenvolvimento de produto com um design sem solda e portas compactas plug-and-play.

A cape fornece 12 conectores Grove fáceis de usar para fazer plug-and-play com a grande família de módulos Grove. Os conectores incluem 2x UART, 2x ADC, 4x E/S Digitais e 4x I2C que fazem interface com os pinos da sua placa BeagleBone®, oferecendo quase tudo que você precisa. Há duas chaves usadas para redefinir o endereço I2C em caso de conflitos de endereço. A placa também integra uma chave para transição de tensão - de 5 V normal para 3,3 V e vice-versa.

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Grove-Base-Cape-for-Beaglebone-v2.0-p-2644.html)

## Recursos

---

* Conexão mais fácil entre sua BeagleBone® e Módulos Grove.
* Sem necessidade de solda
* Economiza seu tempo e dinheiro

## Especificações

---
<table>
  <tbody><tr>
      <td> Tensão de saída </td>
      <td> 3.3 V ou 5 V(comutável)</td>
      </tr>
    <tr>
      <td> Corrente máxima de saída </td>
      <td> 500 mA a 3.3V, 500 mA a 5V</td>
      </tr>
    <tr>
      <td> Portas Grove Digitais </td>
      <td> 6 , compartilham os mesmos pinos com UART1(rotulado) e UART4(rotulado)</td>
      </tr>
    <tr>
      <td> Portas Grove Analógicas </td>
      <td> 2</td>
      </tr>
    <tr>
      <td> Portas Grove I<sup>2</sup>C </td>
      <td> 4</td>
      </tr>
    <tr>
      <td> Portas Grove UART </td>
      <td> 2 (UART1, UART4)</td>
      </tr>
    <tr>
      <td> EEPROM </td>
      <td> 256kb (Modelo: CAT24C256WI)</td>
      </tr>
    <tr>
      <td> Dimensões </td>
      <td> 70 mm(Comprimento) × 50 mm(Largura)</td>
      </tr></tbody></table>

### Lista de peças

<table>
  <tbody><tr>
      <th>Nome das peças </th>
      <th> Quantidade</th>
      </tr>
    <tr>
      <td>Grove Base Cape para BeagleBone® v2 </td>
      <td> 1 PEÇA</td>
      </tr></tbody></table>

## Visão geral do hardware

---
![](https://files.seeedstudio.com/wiki/Grove_Base_Cape_for_BeagleBone_v2/img/Grove_Base_Cape_for_BeagleBone_v2_hardware_overview_1200.jpg)

**Chave de tensão de saída**, é uma chave para controlar a tensão de saída para as portas Grove.

**Botão USER**, é um botão que pode ser usado como botão USER da BeagleBone®.

**Chave de endereço da cape**, é uma chave para escolher o endereço da cape (útil apenas quando várias capes estão conectadas) para evitar colisão de endereço I2C. Para detalhes sobre o uso de mais capes, visite [https://beagleboard.org/Support/bone101/#capes](https://beagleboard.org/Support/bone101/#capes) e [http://elinux.org/BeagleBone_Community#Capes](http://elinux.org/BeagleBone_Community#Capes). Você pode usar esta chave para escolher o endereço de **00**(binário, puxado para baixo para configurações de fábrica) a **11**(binário, na Grove Base Cape para BeagleBone v2) que correspondem de 0x54 a 0x57 para todas as capes.

**Pino de proteção contra gravação**, é usado para desativar a proteção contra gravação da EEPROM de uma cape se esses pinos estiverem conectados. Por padrão, ele não está conectado.

**Amplificador operacional LMV324**, é um amplificador operacional de saída rail-to-rail de baixa tensão para controlar a tensão analógica. [Leia mais](http://www.ti.com/lit/ds/symlink/lmv324.pdf)

**TXB0108PW**, é um tradutor bidirecional de nível de tensão de 8 bits. [Leia mais](http://www.electroensaimada.com/uploads/9/0/8/9/9089783/txb0108.pdf).

**Nota** você pode encontrar dois entalhes(canto arredondado com furos) em uma das extremidades da Grove Base Cape para BeagleBone® v2.0. Esta extremidade corresponde à extremidade com o mesmo entalhe na BeagleBone® Green. Você pode usar esses entalhes para garantir a orientação correta.

## Primeiros passos

Nesta seção, mostraremos um exemplo básico de uso desta placa. Você pode encontrar mais demonstrações na página [BeagleBone® Recipes](https://www.seeedstudio.com/recipe/index.php?query=beaglebone). Basta adicionar a Grove Base Cape para BeagleBone® v2 a esses projetos para tornar a conexão por fios conveniente.

### Leitura sugerida

* [BeagleBone® Green](/pt-br/BeagleBone_Green)

* [Comunidade BeagleBone®](https://beagleboard.org/)

* [BeagleBone® 101](https://beagleboard.org/support/bone101)

* [BoneScript](https://beagleboard.org/support/bonescript)

### Materiais necessários

* Grove Base Cape para BeagleBone® v2 × 1

* [Grove - Button](https://www.seeedstudio.com/item_detail.html?p_id=766) × 1

* [BeagleBone® Green](https://www.seeedstudio.com/item_detail.html?p_id=2504) (totalmente compatível com BeagleBone® Black sem saída HDMI)

* Cabo USB (tipo A para tipo B, para Arduino) × 1 ou cabo USB (Tipo-A para micro Tipo-B, para Seeeduino) × 1

* [Cabo Grove](https://www.seeedstudio.com/depot/Grove-Universal-4-Pin-Buckled-5cm-Cable-5-PCs-Pack-p-925.html?cPath=98_106_57) × 1

### Trabalho de codificação

1.Conecte a BeagleBone® Green ao seu PC ou MAC por cabo USB. Clique em [http://192.168.7.2:3000/ide.html](http://192.168.7.2:3000/ide.html) para abrir o Cloud9 IDE.

2.Conecte Grove - Button(P) à Grove Base Cape para BeagleBone® v2 com cabo Grove. Conecte o cabo Grove ao pino GPIO 51.

![](https://files.seeedstudio.com/wiki/Grove_Base_Cape_for_BeagleBone_v2/img/Grove_Base_Cape_for_BeagleBone_v2_wiki_demo_1200.jpg)

3.Copie o código a seguir para o Cloud9, salve-o em um arquivo **.js**.

```
var b = require('bonescript');
b.pinMode('P9_16', b.INPUT);//GPIO 51 correspond to P9_16. More details at https://beagleboard.org/Support/bone101/#headers

setInterval(check,1000);

function check(){
    b.digitalRead('P9_16', checkButton);
}

function checkButton(x) {
    console.log(x.value);
    if(x.value == 1){
        console.log("you are pressing Grove button");
    }
    else{
        console.log("you are not pressing Grove button");
    }
}
```

4.Clique em **Run** no Cloud9 IDE para executar o programa na BeagleBone® Green.

5.Espere cerca de 10 segundos para ver a saída na parte inferior do Cloud9 IDE. A saída provavelmente se parecerá com a captura de tela a seguir:

![](https://files.seeedstudio.com/wiki/Grove_Base_Cape_for_BeagleBone_v2/img/Grove_Base_Cape_for_BeagleBone_v2_wiki_demo_result_600_s.png)

## Visualizador de esquemático online

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove_Base_Cape_for_BeagleBone_v2/res/Grove_Base_Cape_for_BeagleBone_v2.0_Schematics.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

---

* [Esquemático EAGLE &amp; arquivos de PCB e Esquemático em formato PDF](https://files.seeedstudio.com/wiki/Grove_Base_Cape_for_BeagleBone_v2/res/Grove_Base_Cape_for_BeagleBone_v2.0_Schematics.zip)

* [BeagleBone® Green](/pt-br/BeagleBone_Green)

* [Comunidade BeagleBone®](https://beagleboard.org/)

* [BeagleBone® 101](https://beagleboard.org/support/bone101)

* [BoneScript](https://beagleboard.org/support/bonescript)

* [Cloud9](https://c9.io/)

* [Folha de dados TXB0108PW](http://www.electroensaimada.com/uploads/9/0/8/9/9089783/txb0108.pdf)

* [Folha de dados LMV324](http://www.ti.com/lit/ds/symlink/lmv324.pdf)

* Mais demos em [https://www.seeedstudio.com/recipe/index.php?query=beaglebone](https://www.seeedstudio.com/recipe/index.php?query=beaglebone) e [https://www.seeedstudio.com/recipe/index.php?query=beaglebone](https://www.seeedstudio.com/recipe/index.php?query=beaglebone)

## Suporte técnico & discussão de produtos

Obrigado por escolher nossos produtos! Estamos aqui para fornecer a você diferentes formas de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

