---
description: Módulo Bluetooth V4.0 HM-11 BLE
title: Módulo Bluetooth V4.0 HM-11 BLE
keywords:
  - Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Bluetooth_V4.0_HM_11_BLE_Module
sku: 317030001
last_update:
  date: 1/13/2023
  author: shuxu hu
createdAt: '2023-02-03'
updatedAt: '2026-03-13'
url: https://wiki.seeedstudio.com/pt-br/Bluetooth_V4.0_HM_11_BLE_Module/
---
![](https://files.seeedstudio.com/wiki/Bluetooth_V4.0_HM_11_BLE_Module/img/HM-11%20BLE%20Module.jpg)

Este é um módulo BLE SMD usado em nossos BLE Bee e Xadow BLE. Ele é baseado no chip TI CC2541, permite construir nós de rede robustos com baixo custo total de materiais e é altamente adequado para sistemas de consumo de energia ultrabaixo. O módulo é pequeno e fácil de usar, com o firmware pré-programado do fabricante, você pode rapidamente criar comunicações BLE por meio de seus comandos AT. Suporta comunicações BLE com iphone, ipad e Android 4.3.

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Bluetooth-V4.0-HM-11-BLE-Module-p-1803.html)

## Recursos

---
- Protocolo Bluetooth: Especificação Bluetooth V4.0 BLE

- Frequência de operação: banda ISM de 2,4 GHz

- Forma de interface: uma porta serial

- Em ambiente aberto, dentro de 30 metros, pode realizar comunicação entre módulos

- Enviar e receber sem limite de bytes entre módulos

- Método de modulação: GFSK (Gaussian Frequency Shift Keying)

- Potência de transmissão: - DBM, 23-6 DBM, 0 DBM, 6 DBM, pode ser modificada pelo comando AT

- usa chip TI CC2541, espaço de configuração de 256 KB, suporta comando AT, o usuário pode, conforme necessário, alterar o papel (modo mestre, escravo) e a taxa de baud da porta serial, nome do dispositivo, parâmetros de pareamento como senhas, uso ágil.

- fonte de alimentação: + 3,3 VDC 50 mA

- temperatura de trabalho: - 5 ~ + 65 graus centígrados

## Especificação

---
<table>
<tr>
<th>Specification</th>
<th>Value</th>
</tr>
<tr>
<td>Microprocessor</td>
<td>CC2541</td>
</tr>
<tr>
<td>Resources</td>
<td>Suporta comando AT, o usuário pode, conforme necessário, alterar o papel (modo mestre, escravo) e a taxa de baud da porta serial, nome do equipamento, parâmetros de pareamento como senha, uso flexível.</td>
</tr>
<tr>
<td>Outline Dimension</td>
<td>13.5mm x 18.5mm x 2.3mm</td>
</tr>
<tr>
<td>Power supply</td>
<td>3.3V</td>
</tr>
<tr>
<td>Communication Protocol</td>
<td>Uart(3.3V LVTTL)</td>
</tr>
<tr>
<td>IO counts</td>
<td>2</td>
</tr>
<tr>
<td>Key input IO</td>
<td>1</td>
</tr>
<tr>
<td>LED Indicators IO</td>
<td>1</td>
</tr>
<tr>
<td>Connectivity</td>
<td>Soquete compatível com XBee</td>
</tr>
</table>

## Características Elétricas

---
<table>
<tr>
<th>Specification</th>
<th>Min</th>
<th>Typ</th>
<th>Max</th>
<th>Unit</th>
</tr>
<tr>
<td>Max Input Voltage</td>
<td>-0.3</td>
<td></td>
<td>3.6</td>
<td>V</td>
</tr>
<tr>
<td>Working Input Voltage</td>
<td>2.0</td>
<td>3.3</td>
<td>3.6</td>
<td>V</td>
</tr>
<tr>
<td>Transmit Current</td>
<td></td>
<td>15</td>
<td></td>
<td>mA</td>
</tr>
<tr>
<td>Receive Current</td>
<td></td>
<td>8.5</td>
<td></td>
<td>mA</td>
</tr>
<tr>
<td>Deep Sleep Current</td>
<td></td>
<td>600</td>
<td></td>
<td>uA</td>
</tr>
<tr>
<td>Operating Temperature</td>
<td>-40</td>
<td></td>
<td>+65</td>
<td>°C</td>
</tr>
</table>

## Definição dos Pinos

---
![](https://files.seeedstudio.com/wiki/Bluetooth_V4.0_HM_11_BLE_Module/img/HM-11_Pinout.jpg)

<table>
<tr>
<th>Pin</th>
<th>Name</th>
<th>Description</th>
</tr>
<tr>
<td>1</td>
<td>UART_RTS</td>
<td>UART</td>
</tr>
<tr>
<td>2</td>
<td>UART_TX</td>
<td>UART</td>
</tr>
<tr>
<td>3</td>
<td>UART_CTS</td>
<td>UART</td>
</tr>
<tr>
<td>4</td>
<td>UART_RX</td>
<td>UART</td>
</tr>
<tr>
<td>5</td>
<td>NC</td>
<td></td>
</tr>
<tr>
<td>6</td>
<td>NC</td>
<td></td>
</tr>
<tr>
<td>7</td>
<td>NV</td>
<td></td>
</tr>
<tr>
<td>8</td>
<td>NV</td>
<td></td>
</tr>
<tr>
<td>9</td>
<td>VCC</td>
<td>Fonte de alimentação 3.3V</td>
</tr>
<tr>
<td>10</td>
<td>NC</td>
<td></td>
</tr>
<tr>
<td>11</td>
<td>RESETB</td>
<td>Reset, ativo em nível baixo por pelo menos 5ms</td>
</tr>
<tr>
<td>12</td>
<td>GND</td>
<td>GND</td>
</tr>
<tr>
<td>13</td>
<td>PIO3</td>
<td>Porta IO, usada para conectar a DHT11/DS18B20</td>
</tr>
<tr>
<td>14</td>
<td>PIO2</td>
<td>Entrada digital, saída</td>
</tr>
<tr>
<td>15</td>
<td>PIO1</td>
<td>Indicador LED</td>
</tr>
<tr>
<td>16</td>
<td>PIO0</td>
<td>Pino de botão</td>
</tr>
</table>

## Comandos AT &amp; Configuração

---
**1） Consultar o endereço MAC nativo
**
Enviar: AT+ADDR?

Após um envio bem-sucedido, retorno: OK+LADD: endereço MAC (endereço com 12 caracteres)

**2） Consultar a taxa de baud
**
Enviar: AT+BAUD?

Após um envio bem-sucedido, retorno: OK+Get: [para1]

Escopo de para1:0 ~ 8. A lista de parâmetros correspondentes é a seguinte:

0 -------- 9600

1 -------- 19200

2 -------- 38400

3 -------- 57600

4 -------- 115200

5 -------- 4800

6 -------- 2400

7 -------- 1200

8 -------- 230400

Padrão: 0(9600)

**3） Definir a taxa de baud
**
Enviar: AT+BAUD[para1]

Após um envio bem-sucedido, retorno: OK+Set:[para1]

Exemplo: enviar: AT + BAUD1, retorno: OK+Set: 2. A taxa de baud é definida como 19200.

Observação: depois de alternar para 1200, o módulo não suportará mais as configurações do comando AT, e pressionar o PIO0 em standby pode restaurar as configurações de fábrica do módulo. Não é recomendado usar essa taxa de baud. Após configurar a taxa de baud, o módulo deve ser energizado novamente para que os novos parâmetros tenham efeito.

**4） dispositivo escravo conectado ao endereço bluetooth especificado
**
Enviar: AT+CON[para1]

Após um envio bem-sucedido, retorno: OK+CONN[para2]

O intervalo de Para2 é: A, E, F

Exemplo: sendo o endereço bluetooth do escravo: 0017EA0943AE, enviando AT+CON0017EA0943AE, o módulo retorna: OK+CONNA ou OK+CONNF ou OK+CONNE.

**5） remover informações de pareamento do dispositivo
**
Enviar: AT+CLEAR

Após um envio bem-sucedido, retorno: OK+CLEAR

Limpa com sucesso as informações de código de endereço do dispositivo que havia sido conectado.

**6） consultar modo de operação do módulo
**
Enviar: AT+MODE?

Após um envio bem-sucedido, retorno: OK+Get: [para]

Para: intervalo de 0 ~ 2. 0 representa modo de transmissão transparente, 1 representa aquisição PIO + controle remoto + transmissão transparente, 2 representa transmissão transparente + modo de controle remoto. O padrão é 0.

**7） definir modo de operação do módulo:
**
Enviar: AT+MODE []

Após um envio bem-sucedido, retorno: OK+Set: [para]

**8） consultar nome do dispositivo
**
Enviar: AT+NAME?

Após um envio bem-sucedido, retorno: OK+NAME [para1]

**9） definir o nome do dispositivo
**
Enviar: AT+NAME [para1]

Após um envio bem-sucedido, retorno: OK+Set: [para1]

Exemplo: Definir o nome do dispositivo como Seeed, enviando AT + NAMESeeed, retorna OK + Set: Seeed. Neste momento, o nome do módulo bluetooth foi alterado para Seeed.
Observação: após a execução do comando, é necessário desligar e ligar a alimentação para que os parâmetros definidos entrem em vigor.

**10） consultar senha de pareamento
**
Enviar: AT+PASS?

Após um envio bem-sucedido, retorno: OK+PASS: [para1]

O intervalo de Para1 é 000000 ~ 999999, o padrão é 000000.

**11） definir senha de pareamento
**
Enviar AT+PASS [para1]

Após um envio bem-sucedido, retorno: OK+Set: [para1]

**12） restaurar configurações de fábrica
**
Enviar AT+RENEW

Após um envio bem-sucedido, retorno: OK+RENEW

Restaura as configurações padrão de fábrica do módulo, as configurações do módulo serão redefinidas, voltando ao estado de fábrica padrão; após 500 ms de atraso o módulo será reiniciado. Se não houver necessidade, use com cuidado.

**13） reset do módulo
**
Enviar: AT+RESET

Após um envio bem-sucedido, retorno: OK+RESET

Após a execução do comando, o módulo atrasará 500 ms antes de reiniciar.

**14） definir modo mestre-escravo
**
Enviar: AT + ROLE [para1]

Após um envio bem-sucedido, retorno: OK+Set: [para1]

## Código de Exemplo

---
//mestre

```
/*

 This example code is in the public domain.

 */
#include <SoftwareSerial.h>

SoftwareSerial mySerial(2, 3); // RX, TX

void setup()
{
    // Open serial communications and wait for port to open:
    Serial.begin(9600);
    while (!Serial) {
        ; // wait for serial port to connect. Needed for Leonardo only
    }


    Serial.println("Goodnight moon!");

    // set the data rate for the SoftwareSerial port
    mySerial.begin(9600);
    // set master
    mySerial.print("AT+ROLE1");
    delay(10000);


}

void loop() // run over and over
{

    // set the data rate for the SoftwareSerial port
    mySerial.print("test I am master  ");
    delay(10000);
    if (mySerial.available())
    Serial.write(mySerial.read());
    if (Serial.available())
    mySerial.write(Serial.read());
}
```

//escravo

```
/*

 This example code is in the public domain.

 */
#include <SoftwareSerial.h>

SoftwareSerial mySerial(2, 3); // RX, TX

void setup()
{
    // Open serial communications and wait for port to open:
    Serial.begin(9600);
    while (!Serial) {
        ; // wait for serial port to connect. Needed for Leonardo only
    }


    Serial.println("Goodnight moon!");

    // set the data rate for the SoftwareSerial port
    mySerial.begin(9600);
    // set slave
    mySerial.print("AT+ROLE0");
    delay(10000);


}

void loop() // run over and over
{

    // set the data rate for the SoftwareSerial port
    mySerial.print("test I am slave ");
    delay(10000);
    if (mySerial.available())
    Serial.write(mySerial.read());
    if (Serial.available())
    mySerial.write(Serial.read());
}
```

## Projetos Relacionados

---

### O que é Grove-Serial Bluetooth

![](https://files.seeedstudio.com/wiki/Bluetooth_V4.0_HM_11_BLE_Module/img/7be197fcaee35992babbffd47462bbc0.image.530x397.jpg)

Serial Bluetooth é projetado para configuração de conexão serial sem fio transparente.

O módulo Bluetooth de porta serial é totalmente qualificado Bluetooth V2.0+EDR(Enhanced Data Rate) modulação de 3Mbps com transceptor de rádio completo de 2,4GHz e banda base.

Ele usa o sistema Bluetooth de chip único CSR Bluecore 04-External com tecnologia CMOS e com AFH (Adaptive Frequency Hopping Feature).

### Controle Remoto IR

![](https://files.seeedstudio.com/wiki/Bluetooth_V4.0_HM_11_BLE_Module/img/Seeed-recipe-66-20140625115150.jpg)

Este projeto usa o Grove - Water Sensor para criar uma solução simples, porém eficaz, para regar plantas.

Com esta demonstração, podemos:

- Integrar todos os comandos de controle remoto em um dispositivo Android

- Fazer a comunicação entre Seeeduino e o painel Android via Bluetooth.

- Controle remoto via IR

[**Eu quero fazer isso.**](https://www.seeedstudio.com/recipe/66-ir-remote.html)

[**Mais Projetos Incríveis com Bluetooth**](https://www.seeedstudio.com/recipe/index.php?query=bluetooth)

## Suporte Técnico & Discussão sobre o Produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte e garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
