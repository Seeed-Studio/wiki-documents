---
title: LCD 8*2 Caracteres - Luz de fundo azul
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/pt-br/LCD_8-2_Characters-Blue_back_light/
slug: /LCD_8-2_Characters-Blue_back_light
last_update:
  date: 02/03/2022
  author: gunengyu
createdAt: '2023-02-06'
updatedAt: '2026-03-13'
url: https://wiki.seeedstudio.com/pt-br/LCD_8-2_Characters-Blue_back_light/
---
![](http://bz.seeedstudio.com/depot/images/product/lcd821n.jpg)

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/lcd-82-characters-blue-back-light-p-120.html?cPath=163_164)

## Esquemático

---
![](https://files.seeedstudio.com/wiki/LCD_8-2_Characters-Blue_back_light/img/LCD-bbl-block.JPG)

## Especificações

---

### Valores máximos absolutos

<table>
<tr>
<th>Item</th>
<th>Símbolo</th>
<th>Mín</th>
<th>Máx</th>
<th>Unidade</th>
</tr>
<tr>
<td>Tensão de alimentação (Lógica)</td>
<td>V<sub>DD</sub>-V<sub>SS</sub></td>
<td>-0.3</td>
<td>7.0</td>
<td>V</td>
</tr>
<tr>
<td>Tensão de alimentação (LCD)</td>
<td>V<sub>DD</sub>-V<sub>O</sub></td>
<td>-0.3</td>
<td>13.0</td>
<td>V</td>
</tr>
<tr>
<td>Tensão de entrada</td>
<td>V<sub>I</sub></td>
<td>-0.3</td>
<td>VDD+0.3</td>
<td>V</td>
</tr>
<tr>
<td>Temperatura de operação</td>
<td>T<sub>opr</sub></td>
<td>0</td>
<td>50</td>
<td>℃</td>
</tr>
<tr>
<td>Temperatura de armazenamento</td>
<td>T<sub>stg</sub></td>
<td>-10</td>
<td>60</td>
<td>℃</td>
</tr>
</table>

### Dados mecânicos

<table>
<tr>
<th>Item</th>
<th>Dimensões nominais</th>
<th>Unidade</th>
</tr>
<tr>
<td>Tamanho do módulo (L×A×P)</td>
<td>58.0×32.0×9.5</td>
<td>mm</td>
</tr>
<tr>
<td>Área de visualização (L×A)</td>
<td>36.0×15.0</td>
<td>mm</td>
</tr>
<tr>
<td>Tamanho do caractere (L×A)</td>
<td>2.45×5.0</td>
<td>mm</td>
</tr>
<tr>
<td>Tamanho do ponto (L×A)</td>
<td>0.45×0.5</td>
<td>mm</td>
</tr>
<tr>
<td>Peso</td>
<td></td>
<td>g</td>
</tr>
</table>

### Características elétricas

(V<sub>DD</sub>=5V±0.25V)

<table>
<tr>
<th>Item</th>
<th>Símbolo</th>
<th>Condição de teste</th>
<th>Mín</th>
<th>Típ</th>
<th>Máx</th>
<th>Unidade</th>
</tr>
<tr>
<td>Tensão alta de entrada</td>
<td>V<sub>IH</sub></td>
<td>-</td>
<td>2.2</td>
<td>-</td>
<td>V<sub>DD</sub></td>
<td>V</td>
</tr>
<tr>
<td>Tensão baixa de entrada</td>
<td>V<sub>IL</sub></td>
<td>-</td>
<td>-0.3</td>
<td>-</td>
<td>0.6</td>
<td>V</td>
</tr>
<tr>
<td>Tensão alta de saída</td>
<td>V<sub>OH</sub></td>
<td>I<sub>OH</sub>=0.3mA</td>
<td>2.4</td>
<td>-</td>
<td>-</td>
<td>V</td>
</tr>
<tr>
<td>Tensão baixa de saída</td>
<td>V<sub>OL</sub></td>
<td>I<sub>OL</sub>=1.2mA</td>
<td>0</td>
<td>-</td>
<td>0.4</td>
<td>V</td>
</tr>
<tr>
<td>Corrente de alimentação</td>
<td>I<sub>DD</sub></td>
<td>V<sub>DD</sub>=5.0V</td>
<td>-</td>
<td>1.2</td>
<td>3.0</td>
<td>mA</td>
</tr>
<tr>
<td>Tensão de acionamento do LCD</td>
<td>V<sub>DD</sub> - V<sub>O</sub></td>
<td>Ta=25℃</td>
<td>-</td>
<td>5.0</td>
<td>-</td>
<td>V</td>
</tr>
</table>

### Especificações do backlight de LED (Ta=25℃)

<table>
<tr>
<th>Item</th>
<th>Símbolo</th>
<th>Típ</th>
<th>Máx</th>
<th>Unidade</th>
</tr>
<tr>
<td>Tensão direta</td>
<td>V<sub>f</sub></td>
<td>4.05</td>
<td>4.25</td>
<td>V</td>
</tr>
<tr>
<td>Corrente direta</td>
<td>I<sub>f</sub></td>
<td>60</td>
<td>-</td>
<td>mA</td>
</tr>
<tr>
<td>Comprimento de onda de emissão</td>
<td>λ<sub>p</sub></td>
<td>568</td>
<td>-</td>
<td>nm</td>
</tr>
</table>

## Definição e classificação dos pinos

---
<table>
<tr>
<th>Pino</th>
<th>Símbolo</th>
<th>Nível</th>
<th>Função</th>
</tr>
<tr>
<td>1</td>
<td>V<sub>SS</sub></td>
<td>-</td>
<td>GND(0V)</td>
</tr>
<tr>
<td>2</td>
<td>V<sub>DD</sub></td>
<td>-</td>
<td>Tensão de alimentação para lógica (+5V)</td>
</tr>
<tr>
<td>3</td>
<td>V<sub>O</sub></td>
<td>-</td>
<td>Tensão de acionamento do LCD</td>
</tr>
<tr>
<td>4</td>
<td>RS</td>
<td> H/L</td>
<td>H:Dado
L:Código de instrução</td>
</tr>
<tr>
<td>5</td>
<td>R/W</td>
<td> H/L</td>
<td>H:Leitura
L:Gravação</td>
</tr>
<tr>
<td>6</td>
<td>E</td>
<td> H,H-&gt;L</td>
<td>Sinal de habilitação</td>
</tr>
<tr>
<td>7</td>
<td>DB0</td>
<td> H/L</td>
<td>Linha de barramento de dados</td>
</tr>
<tr>
<td>8</td>
<td>DB1</td>
<td> H/L</td>
</tr>
<tr>
<td>9</td>
<td>DB2</td>
<td> H/L</td>
</tr>
<tr>
<td>10</td>
<td>DB3</td>
<td>H/L</td>
</tr>
<tr>
<td>11</td>
<td>DB4</td>
<td> H/L</td>
</tr>
<tr>
<td>12</td>
<td>DB5</td>
<td> H/L</td>
</tr>
<tr>
<td>13</td>
<td>DB6</td>
<td> H/L</td>
</tr>
<tr>
<td>14</td>
<td>DB7</td>
<td> H/L</td>
</tr>
<tr>
<td>15</td>
<td>LEDA</td>
<td>-</td>
<td>Alimentação do backlight de LED</td>
</tr>
<tr>
<td>16</td>
<td>LEDK</td>
<td>-</td>
</tr>
</table>

## Dimensões mecânicas

![](https://files.seeedstudio.com/wiki/LCD_8-2_Characters-Blue_back_light/img/LCD-bbl-dimen.JPG)

## Recursos

* [Código de demonstração para Arduino](https://www.seeedstudio.com/depot/images/product/LCD0820.pde)

* [Folha de dados](https://www.seeedstudio.com/depot/datasheet/LMB0820-info.pdf)

## Suporte técnico e discussão sobre o produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
