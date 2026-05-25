---
title: LCD_16-2_Characters-Green_Yellow_back_light
nointro: null
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/pt-br/LCD_8-2_Characters-Blue_back_light/
slug: /LCD_16-2_Characters-Green_Yellow_back_light
last_update:
  date: 02/03/2022
  author: matthew
createdAt: '2023-02-06'
updatedAt: '2026-03-13'
url: https://wiki.seeedstudio.com/pt-br/LCD_16-2_Characters-Green_Yellow_back_light/
---

![](http://bz.seeedstudio.com/depot/images/product/lcd1621n.jpg)

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/lcd-162-characters-green-yellow-back-light-p-62.html?cPath=163_164)

## Cuidados

---

1. O painel de LCD é feito de vidro. Qualquer choque mecânico (por exemplo, queda de um local alto) irá danificar o módulo de LCD.

2. Não aplique força excessiva na superfície do display, o que pode fazer com que a cor do display mude de forma anormal.

3. O polarizador no LCD é facilmente arranhado. Se possível, não remova o filme protetor do LCD até a última etapa da instalação.

4. Nunca tente desmontar ou retrabalhar o módulo de LCD.

5. Limpe o LCD apenas com Álcool Isopropílico ou Álcool Etílico. Outros solventes (por exemplo, água) podem danificar o LCD.

6. Ao montar o módulo de LCD, certifique-se de que ele esteja livre de torções, empenamentos e distorções.

7. Garanta espaço suficiente (com almofada) entre o gabinete e o painel de LCD para evitar que força externa seja aplicada sobre ele, caso contrário poderá causar danos ao LCD ou degradar o resultado de exibição.

8. Segure o módulo de LCD apenas pelas laterais. Nunca segure o módulo de LCD aplicando força sobre o `heat seal` ou TAB.

9. Nunca aplique força aos componentes do módulo de LCD. Isso pode causar danos invisíveis ou reduzir a confiabilidade.

10. O módulo de LCD pode ser facilmente danificado por eletricidade estática. Tenha cuidado para manter um ambiente de trabalho antiestático ideal para proteger o módulo de LCD.

11. Ao retirar o filme protetor do LCD, a carga estática pode causar um padrão de exibição anormal. Isso é normal e voltará ao normal em pouco tempo.

12. Tome cuidado para não se ferir com a borda afiada do painel de LCD.

13. Nunca opere o módulo de LCD excedendo as classificações absolutas máximas.

14. Mantenha a linha de sinal o mais curta possível para evitar que sinais ruidosos sejam aplicados ao módulo de LCD.

15. Nunca aplique sinal ao módulo de LCD sem fonte de alimentação.

16. O `IC chip` (por exemplo, TAB ou COG) é sensível à luz. Um ambiente com iluminação forte pode possivelmente causar mau funcionamento. Recomenda-se uma estrutura de carcaça vedada à luz.

17. A confiabilidade do módulo de LCD pode ser reduzida por choque térmico.

18. Ao armazenar o módulo de LCD, evite exposição à luz solar direta, alta umidade, alta temperatura ou baixa temperatura. Esses fatores podem danificar ou degradar o módulo de LCD.

## Esquemático

---

### Diagrama de Blocos

![](https://files.seeedstudio.com/wiki/LCD_16-2_Characters-Green_Yellow_back_light/img/LCD-wbl-block-162.JPG)

## Especificação

---

* Modo de Exibição do LCD: STN, Positivo, Transflexivo

* Cor de Exibição: Azul Escuro/ Amarelo Esverdeado

* Ângulo de Visão: 6H

* Método de Acionamento: 1/16 duty, 1/5 bias

* Luz de Fundo: Retroiluminação LED Amarelo-Esverdeada

* Dimensão Externa: 80*36*15.8 MÁX

:::note

1. O tom de cor pode mudar ligeiramente devido à Temperatura e à Condição de Acionamento.<br />
2. A Cor é definida como a cor inativa/de fundo
:::

### Características AC

V<sub>ss</sub>=0V,V<sub>DD</sub>=5V,T<sub>OP</sub>=25℃

<table>
<tr>
<th>Item</th>
<th>Símbolo</th>
<th>MÍN</th>
<th>TÍP</th>
<th>MÁX</th>
<th>Unidade</th>
</tr>
<tr>
<td width="200px">Tempo de ciclo E</td>
<td width="100px">tc</td>
<td width="100px">1500</td>
<td width="100px">-</td>
<td width="100px">-</td>
<td width="100px">ns</td>
</tr>
<tr>
<td>Largura de nível alto de E</td>
<td>twh</td>
<td>700</td>
<td>-</td>
<td>-</td>
<td>ns</td>
</tr>
<tr>
<td>Largura de nível baixo de E</td>
<td>twl</td>
<td>700</td>
<td>-</td>
<td>-</td>
<td>ns</td>
</tr>
<tr>
<td>Tempo de subida de E</td>
<td>tr</td>
<td>-</td>
<td>-</td>
<td>18</td>
<td>ns</td>
</tr>
<tr>
<td>Tempo de descida de E</td>
<td>tf</td>
<td>-</td>
<td>-</td>
<td>18</td>
<td>ns</td>
</tr>
<tr>
<td>Tempo de configuração de endereço</td>
<td>tas</td>
<td>5</td>
<td>-</td>
<td>-</td>
<td>ns</td>
</tr>
<tr>
<td>Tempo de configuração de endereço</td>
<td>tasu</td>
<td>210</td>
<td>-</td>
<td>-</td>
<td>ns</td>
</tr>
<tr>
<td>Tempo de retenção de endereço</td>
<td>tah</td>
<td>15</td>
<td>-</td>
<td>-</td>
<td>ns</td>
</tr>
<tr>
<td>Tempo de configuração de dados</td>
<td>tdsw</td>
<td>300</td>
<td>-</td>
<td>-</td>
<td>ns</td>
</tr>
<tr>
<td>Tempo de atraso de dados</td>
<td>td</td>
<td>-</td>
<td>-</td>
<td>480</td>
<td>ns</td>
</tr>
<tr>
<td>Tempo de retenção de dados (escrita)</td>
<td>tdhw</td>
<td>15</td>
<td>-</td>
<td>-</td>
<td>ns</td>
</tr>
<tr>
<td>Tempo de retenção de dados (leitura)</td>
<td>tdhr</td>
<td>30</td>
<td>-</td>
<td>-</td>
<td>ns</td>
</tr>
</table>
<table>
<tr>
<td>
<div align="center">
<img width={1000} src="https://files.seeedstudio.com/wiki/LCD_16-2_Characters-Green_Yellow_back_light/img/LCD-module-WTiming.jpg" />
</div>
</td>
<td>
<div align="center">
<img width={1000} src="https://files.seeedstudio.com/wiki/LCD_16-2_Characters-Green_Yellow_back_light/img/LCD-module-RTiming.jpg" />
</div>
</td>
</tr>
<tr>
<td><strong>Diagrama de Tempo de Escrita do Host</strong></td>
<td><strong>Diagrama de Tempo de Leitura do Host</strong></td>
</tr>
</table>

## Definição de pinos e Classificação

---
<table>
<tr>
<th>Nº do Pino</th>
<th>Nome do Pino</th>
<th>I/O</th>
<th>Descrições</th>
</tr>
<tr>
<td width="100px">1</td>
<td width="100px">VSS</td>
<td width="100px">Alimentação</td>
<td width="500px">Fonte de alimentação negativa, Terra (0V)</td>
</tr>
<tr>
<td>2</td>
<td>VDD</td>
<td>Alimentação</td>
<td>Fonte de alimentação positiva</td>
</tr>
<tr>
<td>3</td>
<td>V0</td>
<td>Alimentação</td>
<td>Referência de contraste do LCD</td>
</tr>
<tr>
<td>4</td>
<td>RS</td>
<td>Entrada</td>
<td>
* RS=ALTO:DB0-DB7=Dados de RAM de exibição
* RS=BAIXO:DB0-DB7=Dados de instrução
</td>
</tr>
<tr>
<td>5</td>
<td>R/W</td>
<td>Entrada</td>
<td>
No modo de leitura R/W=ALTO
Dados lidos do módulo de LCD, os dados aparecem em DB0-DB7 e podem ser lidos pelo host enquanto E=H e o dispositivo está sendo selecionado

No modo de escrita R/W=BAIXO;
Dados escritos no módulo de LCD, os dados que aparecem em DB0-DB7 serão escritos no módulo de LCD em E=H-&gt;L e o dispositivo está sendo selecionado.
</td>
</tr>
<tr>
<td>6</td>
<td>E</td>
<td>Entrada</td>
<td></td>
</tr>
<tr>
<td>7</td>
<td>DB0</td>
<td>I/O</td>
<td>Barramento de dados; terminal I/O de três estados para dados de exibição ou dados de instrução</td>
</tr>
<tr>
<td>8</td>
<td>DB1</td>
<td>I/O</td>
<td>Barramento de dados; terminal I/O de três estados para dados de exibição ou dados de instrução</td>
</tr>
<tr>
<td>9</td>
<td>DB2</td>
<td>I/O</td>
<td>Barramento de dados; terminal I/O de três estados para dados de exibição ou dados de instrução</td>
</tr>
<tr>
<td>10</td>
<td>DB3</td>
<td>I/O</td>
<td>Barramento de dados; terminal I/O de três estados para dados de exibição ou dados de instrução</td>
</tr>
<tr>
<td>11</td>
<td>DB4</td>
<td>I/O</td>
<td>Barramento de dados; terminal I/O de três estados para dados de exibição ou dados de instrução</td>
</tr>
<tr>
<td>12</td>
<td>DB5</td>
<td>I/O</td>
<td>Barramento de dados; terminal I/O de três estados para dados de exibição ou dados de instrução</td>
</tr>
<tr>
<td>13</td>
<td>DB6</td>
<td>I/O</td>
<td>Barramento de dados; terminal I/O de três estados para dados de exibição ou dados de instrução</td>
</tr>
<tr>
<td>14</td>
<td>DB7</td>
<td>I/O</td>
<td>Barramento de dados; terminal I/O de três estados para dados de exibição ou dados de instrução</td>
</tr>
<tr>
<td>15</td>
<td>CS1</td>
<td>entrada</td>
<td>Seleção de Chip, Quando CS1=1(*1) Habilita o acesso ao Lado Esquerdo (64 colunas) do módulo de LCD</td>
</tr>
<tr>
<td>16</td>
<td>CS2</td>
<td>Entrada</td>
<td>Seleção de Chip, Quando CS2=1(*1) Habilita o acesso ao Lado Direito (64 colunas) do módulo de LCD</td>
</tr>
<tr>
<td>17</td>
<td>/RST</td>
<td>Entrada</td>
<td>Sinal de reset /RST = L, Display desligado, registrador da linha inicial de exibição torna-se 0, nenhum comando ou dado de instrução pode ser aceito /RST = H Funcionamento normal</td>
</tr>
<tr>
<td>18</td>
<td>VOUT</td>
<td>Saída</td>
<td>Saída do `Power Booster` para V0</td>
</tr>
<tr>
<td>19</td>
<td>BLA</td>
<td>Alimentação</td>
<td>Alimentação Positiva para a retroiluminação LED</td>
</tr>
<tr>
<td>20</td>
<td>BLK</td>
<td>Alimentação</td>
<td>Alimentação Negativa para a retroiluminação LED</td>
</tr>
</table>

Nota:

Dados de exibição ou de instrução podem ser escritos individualmente ou ao mesmo tempo nos controladores/`drivers` do módulo de LCD.

Somente leia dados de exibição ou de instrução de um dos controladores/`drivers` no módulo de LCD por vez, caso contrário pode ocorrer colisão inesperada de dados.

## Dimensões Mecânicas

---
Dimensão Externa:98.0*60.0*13.7MÁX
(Veja o Desenho de contorno anexo para detalhes)

## Uso

---

### Registradores Internos

Existem três registradores em cada seção do módulo de LCD. Cada um deles pode ser controlado de forma independente.

**Registrador de Endereço de Página (X)**

O registrador de endereço X designa páginas da RAM interna de dados de exibição. A função de contagem não está disponível. O endereço deve ser definido por instrução.

**Contador de Endereço de Coluna (Y)**

O contador de endereço Y designa o endereço da RAM interna de dados de exibição. Ele pode ser definido por instrução e é incrementado automaticamente em 1 pelas operações de leitura ou escrita de dados de exibição.

**Registrador de Linha Inicial de Exibição (Z)**

O registrador de endereço Z indica os dados da RAM de exibição para a linha superior do LCD. Ele pode ser usado para rolar o padrão de exibição no LCD.

### Programação

---
**Configuração Básica**

Para acionar o módulo de LCD corretamente e fornecer exibição normal, utilize a seguinte configuração

* Linha inicial de exibição (endereço Z)=0

* Exibição do LCD = ligada

:::note

1. Essas configurações/comandos devem ser enviados ao módulo de LCD durante a inicialização.<br />
2. Veja a seção Comandos de Exibição para detalhes.
:::

**Ajustando o contraste de exibição do LCD**

Um resistor variável deve ser conectado ao módulo de LCD para fornecer uma referência para V0. Ajustar o VR resultará na alteração do contraste de exibição do LCD. O valor recomendado de VR é de 25k a 50k.

![](https://files.seeedstudio.com/wiki/LCD_16-2_Characters-Green_Yellow_back_light/img/VFD-lcd-module-162.JPG)

**Reiniciando o módulo de LCD**

O módulo de LCD deve ser inicializado definindo o terminal /RST em nível baixo ao ligar a alimentação.

Quando /RST é puxado para baixo, o módulo de LCD irá:

* Desligar a exibição

* O registrador da linha inicial de exibição torna-se 0. (Endereço Z=0)

Enquanto /RST estiver em nível baixo, nenhuma instrução pode ser aceita, exceto leitura de status. Portanto, execute outras instruções após certificar-se de que DB4=0 (`clear /RST`) e DB7=0 (`ready`) pela instrução de leitura de status. As condições da fonte de alimentação na energização inicial são as seguintes:

<table>
<tr>
<th>Item</th>
<th>Símbolo</th>
<th>Mín</th>
<th>Típ</th>
<th>Máx</th>
<th>Unidade</th>
</tr>
<tr>
<td width="200px">Tempo de reset</td>
<td width="100px">trs</td>
<td width="100px">2.0</td>
<td width="100px">-</td>
<td width="100px">-</td>
<td width="100px">us</td>
</tr>
<tr>
<td>Tempo de subida</td>
<td>tr</td>
<td>-</td>
<td>-</td>
<td>150</td>
<td>ns</td>
</tr>
</table>

![](https://files.seeedstudio.com/wiki/LCD_16-2_Characters-Green_Yellow_back_light/img/VFD-lcd-module-trtx.jpg)

## Recursos

* [Folha de dados](https://bz.seeedstudio.com/depot/datasheet/LMB162ABC-Manual-Rev0.2.pdf)

## Suporte Técnico e Discussão sobre o Produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes formas de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
