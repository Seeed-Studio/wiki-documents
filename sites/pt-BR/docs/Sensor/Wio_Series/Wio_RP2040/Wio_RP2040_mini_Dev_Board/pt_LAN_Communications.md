---
title: LAN_Communications
nointro: null
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/pt-br/LAN_Communications/
slug: /LAN_Communications
sku: 102991555
last_update:
  date: 01/11/2022
  author: gunengyu
createdAt: '2023-01-12'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/LAN_Communications/
---

### 1. Configure o servidor LAN

Este projeto requer que o Servidor e a placa de controle principal funcionem na mesma rede local. O princípio: configurar um PC como servidor, conectar a placa de controle principal ao Servidor através da rede local e, em seguida, o PC e a placa se comunicam por meio de uma porta fixa.
Primeiro, baixe e instale o assistente de depuração de rede (software Net Assistant network debugging assistant neste projeto).
Se a instalação for bem-sucedida, abra o software, selecione "TCP Server" no canto superior esquerdo para definir o "Protocol" e, em seguida, defina o "Local host addr" e o "Local host port" abaixo. Se tudo estiver pronto, clique em "Open" para entrar no Servidor.

![image.png](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/demo_8.png)
### 2. Depurar o programa MicroPython
Insira o seguinte código no editor de código:
```python
import network
import usocket
from machine import Pin, I2C, ADC, UART, SPI, PWM
from time import sleep

N1 = network.WLAN_SPI(network.STA_IF)
N1.active(True)

print("API list:")
dir(N1)

print("wifi list:")
lis = N1.scan()
for q in lis:
    print(q)

N1.connect("CHCK","depot0510")
if N1.isconnected():
    print("    ip               gateway           netmask            MAC            ssid")
    print(N1.ifconfig())
    s=usocket.socket()
    addr=('192.168.9.243',9999)
    s.connect(addr)
    s.send('Hello! Wio RP2040')
```
Preencha a linha 17 (o nome e a senha do WiFi) e a linha 22 (o endereço IP e o número da porta do servidor do computador). Em seguida, execute o programa; você deverá ver a mensagem enviada pela placa de controle principal no registro de dados (Data log) do assistente de depuração de rede.

![image.png](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/demo_9.png)

---

Se você quiser executar outros códigos após rodar um programa com funções de rede, clique no botão "RUN" na placa de controle principal para reiniciar. Após reiniciar, a placa de controle principal poderá executar outros programas.

---

## Suporte Técnico & Discussão de Produto
 se você tiver qualquer problema técnico, envie a questão em nosso [fórum](http://forum.seeedstudio.com/). 
Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

