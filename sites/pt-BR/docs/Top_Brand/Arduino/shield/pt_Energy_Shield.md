---
description: Energy_Shield
title: Energy Shield
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Energy_Shield
sku: 106030000
last_update:
  date: 01/11/2023
  author: Eico
no_comments: false
createdAt: '2023-02-15'
updatedAt: '2026-03-13'
url: https://wiki.seeedstudio.com/pt-br/Energy_Shield/
---
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Energy_Shield/img/Energy_Shield.jpg" alt="pir" width={600} height="auto" /></p>

Energy Shield é um shield de energia baseado em bateria LiPo que mantém seu projeto funcionando. Ele mantém sua bateria carregada sempre que existir uma fonte de alimentação disponível. Aceita uma ampla variedade de fontes de alimentação, desde células solares comuns via conector JST e USB via porta USB no microcontrolador, até adaptadores DC de 9V e 12V via conector DC Jack no seu Arduino. Enquanto isso, ele não apenas fornece energia para o seu projeto com Arduino; com uma porta USB padrão presente no shield, também é capaz de salvar seus dispositivos elétricos móveis de baterias descarregadas, como telefone celular, mp3 e tablet.

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/energy-shield-p-1373.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## Recursos

- Aceita ampla faixa de entradas de energia
- Proteção contra sobretensão
- Eficiência de conversão de energia alta, acima de 85%
- Indicadores de LED abrangentes para status de carregamento e funcionamento

## Especificações

**Especificações de Saída de Energia**

<table align="center">
  <tbody>
  <tr>
    <td><h3>Item</h3></td>
    <td><h3>Mín</h3></td>
    <td><h3>Típico</h3></td>
    <td><h3>Máx</h3></td>
    <td><h3>Unidade</h3></td>
  </tr>
  <tr>
    <td><h4>Tensão</h4></td>
    <td><h4>4.9</h4></td>
    <td><h4>5</h4></td>
    <td><h4>5.1</h4></td>
    <td><h4>V</h4></td>
  </tr>
  <tr>
    <td><h4>Corrente</h4></td>
    <td><h4>5</h4></td>
    <td><h4>/</h4></td>
    <td><h4>750</h4></td>
    <td><h4>mA</h4></td>
  </tr>
  </tbody></table>

**Especificações de Entrada de Energia via Conector JST**

| Item               | Min | Típico | Max | Unidade |
|--------------------|-----|--------|-----|---------|
| Tensão Efetiva     | 4.5 | 5      | 5.5 | V       |
| Corrente           | 1   | /      | 800 | mA      |
| Tensão de Proteção | /   | /      | 12  | V       |

<table align="center">
  <tbody>
  <tr>
    <td><h3>Item</h3></td>
    <td><h3>Mín</h3></td>
    <td><h3>Típico</h3></td>
    <td><h3>Máx</h3></td>
    <td><h3>Unidade</h3></td>
  </tr>
  <tr>
    <td><h4>Tensão Efetiva</h4></td>
    <td><h4>4.5</h4></td>
    <td><h4>5</h4></td>
    <td><h4>5.5</h4></td>
    <td><h4>V</h4></td>
  </tr>
  <tr>
    <td><h4>Corrente</h4></td>
    <td><h4>1</h4></td>
    <td><h4>/</h4></td>
    <td><h4>800</h4></td>
    <td><h4>mA</h4></td>
  </tr>
  <tr>
    <td><h4>Tensão de Proteção</h4></td>
    <td><h4>/</h4></td>
    <td><h4>/</h4></td>
    <td><h4>12</h4></td>
    <td><h4>V</h4></td>
  </tr>
  </tbody></table>

**Explicação do Modo de Funcionamento**

Energy Shield pode puxar corrente de três portas diferentes para carregar a bateria, incluindo o conector JST, a porta USB no Arduino e o conector DC Jack. As faixas de tensão variam conforme abaixo:
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Energy_Shield/img/Working_Mode_Explanation.jpg" alt="pir" width={600} height="auto" /></p>

Quando a tensão de entrada está abaixo de 6,6 V, você pode alternar o modo de funcionamento do Energy Shield entre “Charge” e “ON” por meio da chave seletora de modo de trabalho. Em condição “Charge”, a bateria LiPo não fornece saída, mas apenas puxa corrente de qualquer fonte de alimentação existente. Em condição “ON”, a bateria é carregada e também fornece energia para todo o sistema.

Entretanto, quando a tensão de entrada excede 6,6 V, o Energy Shield é forçado a entrar no modo “Charge”, independentemente da posição da chave.

## Visão Geral de Hardware

---------
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Energy_Shield/img/Energy_Shield_Interface_V2.0.jpg" alt="pir" width={600} height="auto" /></p>

**Configuração de Hardware**

U1: CI ISL97516, chip elevador (boost);

U3: CI CN3065, chip de gerenciamento de carga;

U4,U8: CI LM293D, comparadores diferenciais duplos;

Indicador de Carga: acende quando está carregando;

Indicador de Capacidade: indica a vida útil restante da bateria;

Botão SW2: verifica a capacidade da bateria;

**Pinos Usados no Arduino**

Pino Vin: conduz energia do conector DC Jack para carregar a bateria;

Pino de 5V: conduz energia da porta USB para carregar a bateria;

**Outras Interfaces**

Soquete JST: fornecido para fontes de alimentação externas que requerem conector JST, como painel solar;

Soquete da bateria: usado para conectar a bateria LiPo;

Porta USB: saída de 5V para outros dispositivos;

Uso
-----

### 1. Exemplos de Carregamento

Você pode carregar a bateria LiPo com diversas fontes de alimentação externas. Aqui mostramos o uso de duas fontes de alimentação comuns.

**1) Painel Solar**

Painel solar é uma das fontes de energia verde mais comuns que usamos. A saída típica de uma unidade é em torno de 5 V. Nós fornecemos [diversos painéis solares](https://www.seeedstudio.com/s/solar%20panel.html) em nossa loja. Todos eles vêm pré-montados com conectores JST que podem combinar perfeitamente com o Energy Shield.

Conecte o painel solar ao soquete JST no shield como abaixo.

:::note
Certifique-se de que haja luz suficiente para fornecer corrente considerável.
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Energy_Shield/img/Charge_using_Solar_Panel_.jpg" alt="pir" width={600} height="auto" /></p>

Agora, pressione o SW2. Você verá que o LED indicador "Charge" acende. O outro indicador "Capacity" indica a energia restante da bateria. Quando a energia restante está abaixo de 30%, ele fica vermelho. Quando a energia restante está entre 30% e 80%, ele fica amarelo. Caso contrário, fica verde.
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Energy_Shield/img/Remaining_power_indicator.jpg" alt="pir" width={600} height="auto" /></p>

**2) Adaptador de 9V**

Se você estiver usando um adaptador DC para fornecer energia ao seu projeto, então o adaptador de 9 V não será estranho para você. Conectando um adaptador de 9 V ao conector DC Jack do Arduino, você pode executar seu projeto e carregar a bateria simultaneamente.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Energy_Shield/img/Remaining_power_indicator.jpg" alt="pir" width={600} height="auto" /></p>

![](https://files.seeedstudio.com/wiki/Energy_Shield/img/Charge_using_9V_Jack.jpg)

### 2. Shield alimentando o dispositivo

**1) Fornecer Energia para o Arduino**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Energy_Shield/img/Charge_for_Arduino.jpg" alt="pir" width={600} height="auto" /></p>

Coloque a chave seletora de modo de funcionamento na posição "ON". Verifique o LED indicador de alimentação no Arduino para ver se ele está funcionando adequadamente.

**2) Fornecer Energia para Dispositivos Móveis**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Energy_Shield/img/Charge_for_Phone.jpg" alt="pir" width={600} height="auto" /></p>

Use a porta USB padrão no shield para fornecer energia aos dispositivos móveis.

### 3. Eficiência de Conversão

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Energy_Shield/img/Convert_effect.jpg" alt="pir" width={600} height="auto" /></p>

O gráfico acima descreve a eficiência de conversão do circuito elevador (boost) do Energy Shield. O circuito elevador aumenta a tensão da bateria LiPo, que é tipicamente 4,2 V ou 3,7 V com a queda da energia restante, para 5 V e fornece para fora. Você pode notar que essa eficiência de conversão atinge o pico quando a corrente de saída está em torno de 200 mA.

## Visualizador de Esquemático Online

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Energy_Shield/res/Energy_Shield_Eagel_File.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- [Arquivo Eagle do Energy Shield](https://files.seeedstudio.com/wiki/Energy_Shield/res/Energy_Shield_Eagel_File.zip)
- [Folha de Dados do CN3065](http://www.consonance-elec.com/pdf/datasheet/DSE-CN3065.pdf)
- [Folha de Dados do ISL97516](https://files.seeedstudio.com/wiki/Energy_Shield/res/ISL97516.pdf)
- [Folha de Dados do LM293D](https://files.seeedstudio.com/wiki/Energy_Shield/res/LM293D.pdf)

<!-- This Markdown file was created from https://www.seeedstudio.com/wiki/Energy_Shield -->

## Suporte Técnico & Discussão sobre o Produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja o mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
