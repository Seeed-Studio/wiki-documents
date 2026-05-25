---
title: Grove - Adaptador PS/2
nointro: null
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/pt-br/Grove-PS_2_Adapter/
slug: /Grove-PS_2_Adapter
last_update:
  date: 01/09/2022
  author: gunengyu
createdAt: '2023-01-09'
updatedAt: '2026-03-12'
url: https://wiki.seeedstudio.com/pt-br/Grove-PS_2_Adapter/
---
 ![](https://files.seeedstudio.com/wiki/Grove-PS_2_Adapter/img/PS221_sensor.jpg)

O Adaptador PS/2 permite que você conecte um dispositivo PS2 às placas principais Arduino/Seeeduino. Com a ajuda da biblioteca PS2Keyboard/PS2MouseN, você pode criar uma ponte entre esses dispositivos PS2 e o Arduino/Seeeduino.

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Grove-PS%262-Adapter-p-966.html)

## Recursos

---

* Interface Grove padrão

* Interface PS/2 padrão

## Especificação

---
<table  cellspacing="0" width="80%">
<tr>
<th scope="col"> Item</th>
<th scope="col"> Mín</th>
<th scope="col"> Típico</th>
<th scope="col"> Máx</th>
<th scope="col"> Unidade</th>
</tr>
<tr>
<th scope="row"> Tensão</th>
<td> 4.75</td>
<td> 5.0</td>
<td> 5.25</td>
<td> V</td>
</tr>
<tr>
<th scope="row"> Corrente</th>
<td colspan="3"> 100</td>
<td> mA</td>
</tr>
<tr>
<th scope="row"> Modo de Comunicação</th>
<td colspan="3"> Protocolo de Comunicação PS/2</td>
<td> /</td>
</tr>
<tr>
<th scope="row"> Frequência de Clock</th>
<td> 10</td>
<td> 15</td>
<td> 33</td>
<td> KHZ</td>
</tr>
</table>

## Ideias de Aplicação

---

* Entrada de mouse e teclado PS/2

## Uso

---
O conector PS/2 é um conector Mini-DIN de 6 pinos usado para conectar teclado e mouse a um sistema de computador compatível com PC. Os projetos PS/2 nas interfaces de teclado e mouse são eletricamente semelhantes e empregam o mesmo protocolo de comunicação. Hoje, esse conector foi substituído pelo USB, mas, como no Arduino/Seeeduino, também é uma boa escolha usar o conector PS/2, pois é mais conveniente e barato quando você precisa de um mouse ou teclado.

Um conector PS/2 possui 6 pinos, como você pode ver no diagrama a seguir. O pino 1 e o pino 6 não estão conectados. O pino 3 é para o terra, e o pino 4 é para alimentação. Os outros 2 pinos são para clock e dados.

 ![](https://files.seeedstudio.com/wiki/Grove-PS_2_Adapter/img/MiniDIN-6_Connector.svg.png)

<table  cellspacing="0" width="702">
<tr>
<th scope="col"> Pino</th>
<th scope="col"> Nome</th>
<th scope="col"> Função</th>
<th scope="col"> Corresponde à Interface Grove</th>
</tr>
<tr>
<th scope="row"> 1</th>
<td> +DATA</td>
<td> Dados</td>
<td> DATA</td>
</tr>
<tr>
<th scope="row"> 2</th>
<td> NC</td>
<td> Reservado</td>
<td> -</td>
</tr>
<tr>
<th scope="row"> 3</th>
<td> GND</td>
<td> Linha GND</td>
<td> GND</td>
</tr>
<tr>
<th scope="row"> 4</th>
<td> Vcc</td>
<td> +5DCV</td>
<td> VCC</td>
</tr>
<tr>
<th scope="row"> 5</th>
<td> +CLK</td>
<td> Frequência de clock</td>
<td> CLK</td>
</tr>
<tr>
<th scope="row"> 6</th>
<td> NC</td>
<td> Reservado</td>
<td> -</td>
</tr>
</table>

1.Conecte o mouse ou teclado PS/2 ao Grove-PS/2 Adapter e, em seguida, conecte o Grove ao D5/D6 do [Grove - Base Shield](https://www.seeedstudio.com/depot/grove-base-shield-p-754.html?cPath=132_134). Você pode alterar a porta digital como quiser. Mas não se esqueça de alterar o número da porta na definição do código de demonstração ao mesmo tempo.

:::note
     O pino 5 é o pino de dados do mouse, o pino 6 é o pino de clock.
:::
 2.Conecte o Base Shield ao Arduino/Seeeduino e conecte o Arduino/Seeeduino ao PC por meio de um cabo USB.

![](https://files.seeedstudio.com/wiki/Grove-PS_2_Adapter/img/PS2_sensorss.jpg)

3.Baixe a [biblioteca PS2 Adapter](https://files.seeedstudio.com/wiki/Grove-PS_2_Adapter/res/PS2_Adapter_Library.zip), descompacte e coloque-a na pasta libraries da IDE Arduino pelo caminho: ..\arduino-1.0\libraries.

4.Reinicie a IDE Arduino, abra um dos códigos de demonstração, por exemplo ps2_mouse, diretamente pelo caminho: File -&gt; Example -&gt;PS2_Adapter-&gt;ps2_kbd.

```
/*
 * an Arduino sketch to interface with a ps/2 keyboard.
 * Also uses serial protocol to talk back to the host
 * and report what it finds. Used the ps2 library.
 */

#include <ps2.h>

/*
 * Pin 5 is the ps2 data pin, pin 6 is the clock pin
 * Feel free to use whatever pins are convenient.
 */

PS2 kbd(6, 5);

void kbd_init()
{
    char ack;

    kbd.write(0xff);  // send reset code
    ack = kbd.read();  // byte, kbd does self test
    ack = kbd.read();  // another ack when self test is done
}

void setup()
{
    Serial.begin(9600);
    kbd_init();
}

/*
 * get a keycode from the kbd and report it back to the
 * host via the serial line.
 */
void loop()
{
    unsigned char code;

    for (;;) { /* ever */
    /* read a keycode */
        code = kbd.read();
    /* send the data back up */
        Serial.println(code, HEX);
        // delay(20);  /* twiddle */
    }
}
```

Por favor, clique [aqui](https://www.seeedstudio.com/wiki/Upload_Code) se você não souber como fazer o upload.
 Após enviar o firmware para a MCU, você pode verificar o status por meio de um Serial Monitor (taxa de baud 9600):

 ![](https://files.seeedstudio.com/wiki/Grove-PS_2_Adapter/img/Result.jpg)

 Os valores de saída X, Y mudam correspondentemente enquanto o mouse se move.

## Visualizador de Esquemático Online

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-PS_2_Adapter/res/Grove-PS2_Adapter_eagle_file.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

---

* [Arquivo Eagle do Grove - PS/2 Adapter](https://files.seeedstudio.com/wiki/Grove-PS_2_Adapter/res/Grove-PS2_Adapter_eagle_file.zip)

* [Biblioteca PS2 Adapter](https://files.seeedstudio.com/wiki/Grove-PS_2_Adapter/res/PS2_Adapter_Library.zip)

## Suporte Técnico & Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
