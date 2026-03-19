---
description: Escudo_Bluetooth_V2
title: Bluetooth Shield V2
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Bluetooth_Shield_V2
sku: 113030019
last_update:
  date: 01/11/2023
  author: Eico
no_comments: false
createdAt: '2023-02-15'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Bluetooth_Shield_V2/
---
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Bluetooth_Shield_V2/img/Bluetooth_Shiled_v2.JPG" alt="pir" width={600} height="auto" /></p>

O Bluetooth Shield integra um módulo Bluetooth Serial. Ele pode ser facilmente usado com Arduino/Seeedstudio para comunicação serial sem fio transparente. Você pode escolher dois pinos do Arduino de D0 a D7 como portas seriais por software para se comunicar com o Bluetooth Shield (D0 e D1 são portas seriais por hardware). O shield também possui dois conectores Grove (um Digital e outro Analógico) para você instalar módulos Grove.

## Recursos

---
- Tensão de entrada: 3,3 V
- Taxa de transmissão: 9600, 19200, 38400, 57600, 115200, 230400, 460800
- Compatível com Seeeduino/Arduino
- Até 10 m de distância de comunicação em ambiente interno sem obstáculos
- Interface UART (TTL) com taxa de transmissão programável
- Taxa de transmissão padrão: 9600, bits de dados: 8, bit de parada: 1, paridade: Sem paridade
- PINCODE padrão: ”1234”
- Conjunto completo de comandos de configuração
- Antena PCB integrada na placa

## Função da interface

---

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Bluetooth_Shield_V2/img/Bluetooth_Shield_V2.0_K.jpg" alt="pir" width={600} height="auto" /></p>

<table align="center">
  <tbody>
  <tr>
    <td><h3>Tipo de Pad</h3></td>
    <td><h3>Descrição</h3></td>
  </tr>
  <tr>
    <td><h4>BT_IO</h4></td>
    <td><h4>A porta IO do módulo Bluetooth pode ser controlada: ler, escrever.</h4></td>
  </tr>
  <tr>
    <td><h4>BT_RX</h4></td>
    <td><h4>Entrada de dados UART do módulo Bluetooth.</h4></td>
  </tr>  
  <tr>
    <td><h4>BT_TX</h4></td>
    <td><h4>Saída de dados UART do módulo Bluetooth.</h4></td>
  </tr>
  <tr>
    <td><h4>Dois conectores Grove</h4></td>
    <td><h4>Um é Digital (D8 e D9), o outro é I2C/Analógico (A4 e A5).</h4></td>
  </tr>
  </tbody></table>

## Demonstração

### 1：Conexão de dois Bluetooth Shield

Esta demonstração mostrará como conectar dois Bluetooth Shield.

Você precisa de duas placas [Seeeduino V3.0](https://www.seeedstudio.com/depot/seeeduino-v30-atmega-328p-p-669.html?cPath=6_7),
Um Bluetooth Shield como Mestre e o outro como Escravo.

**Instalação de hardware**

como a seguir:
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Bluetooth_Shield_V2/img/Bluetooth_shield_demo_image0.png" alt="pir" width={600} height="auto" /></p>

certifique-se da conexão correta dos jumpers
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Bluetooth_Shield_V2/img/Bluetooth_shield_demo_image4.jpg" alt="pir" width={600} height="auto" /></p>

**Baixar código e fazer upload**

1. Você pode baixar o código no GitHub, clique [aqui](https://github.com/Seeed-Studio/Bluetooth_Shield_V2_Demo_Code/archive/master.zip), depois extraia-o para a pasta libraries do Arduino.

2. Abra o Arduino IDE, abra File -&gt; Examples -&gt; Bluetooth_Shield_V2_Demo_Code -&gt; Master_Button, então você pode abrir o código do Mestre

3. Abra o Arduino IDE, abra File -&gt; Examples -&gt; Bluetooth_Shield_V2_Demo_Code -&gt; Slave_led, então você pode abrir o código do Escravo

4. Clique em Upload para enviar o código. Se você tiver qualquer problema sobre como começar a usar o Arduino, clique [aqui](/pt-br/Getting_Started_with_Seeeduino) para obter ajuda.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Bluetooth_Shield_V2/img/Bluetooth_ide_1.jpg" alt="pir" width={600} height="auto" /></p>

**Verificar o resultado**

1. Depois de terminar o upload do código tanto para o Mestre quanto para o Escravo, reinicie os dois dispositivos ao mesmo tempo

2. Você pode ver o LED piscar, indicando que os dispositivos estão inicializando e conectando.

3. Após alguns segundos, o LED acende, indicando que Mestre e Escravo foram conectados.

!!!Note
    Se o fenômeno acima não for observado, tente desconectar a alimentação e conectar novamente.

### 2：Conectar a um smartphone

Esta demonstração mostrará como conectar o Bluetooth Shield a um smartphone.

Precisamos de um Seeeduino V3.0 e de um smartphone com função Bluetooth.

Via um aplicativo Bluetooth SPP

**Instalação de hardware**
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Bluetooth_Shield_V2/img/Bluetooth_shield_demo_image1.png" alt="pir" width={600} height="auto" /></p>

**Baixar código e fazer upload**

1. Você pode baixar o código no GitHub, clique [aqui](https://github.com/Seeed-Studio/Bluetooth_Shield_V2_Demo_Code/archive/master.zip), depois extraia-o para a pasta libraries do Arduino.

2. Abra o Arduino IDE, File -&gt; Examples -&gt; Bluetooth_Shield_V2_Demo_Code -&gt; Slave_Temperature, então você pode abrir o código

3. Clique em Upload para enviar o código. Se você tiver qualquer problema sobre como começar a usar o Arduino, clique [aqui](/pt-br//Getting_Started_with_Seeeduino) para obter ajuda.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Bluetooth_Shield_V2/img/Bluetooth_Shield_Demo2.jpg" alt="pir" width={600} height="auto" /></p>

**Baixar um app SPP**

Aqui usamos um telefone Android, o meu é um Xiaomi 2A. Abra a Google Play, pesquise por bluetooth spp e você encontrará muitos resultados.
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Bluetooth_Shield_V2/img/Bluetooth_Shield_Find_spp.png" alt="pir" width={600} height="auto" /></p>

A maioria desses aplicativos é útil, apenas escolha um e faça um teste.

**Obter temperatura**

Depois de instalar um app SPP, tente conectá-lo ao SeeedBTSlave, o código PIN é: "0000"
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Bluetooth_Shield_V2/img/Bluetooth_Shield_App_1.png" alt="pir" width={600} height="auto" /></p>

Quando a conexão estiver ok, envie 't' para o SeeedBTSlave e você poderá obter a temperatura:
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Bluetooth_Shield_V2/img/Bluetooth_Shield_get_temp.png" alt="pir" width={600} height="auto" /></p>

## Recursos

* [Esquemático e layout em formato Eagle](https://files.seeedstudio.com/wiki/Bluetooth_Shield_V2/res/Buletooth_Shield_v2.0_sch_pcb.zip)

- [Datasheet do módulo](https://files.seeedstudio.com/wiki/Bluetooth_Shield_V2/res/Bluetooth_en.pdf)

## Suporte técnico e discussão sobre o produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes formas de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
