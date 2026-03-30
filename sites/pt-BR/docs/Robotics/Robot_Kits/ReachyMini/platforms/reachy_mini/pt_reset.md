---
description: Guia para redefinir o wireless do Reachy Mini usando o app nRF Connect ou um navegador com Bluetooth Web API para redefinir o hotspot Wi‑Fi ou o daemon.
title: Redefinir Reachy Mini via Bluetooth
slug: /reachymini_platforms_reachy_mini_reset
keywords:
  - reset
  - bluetooth
  - nrf connect
  - hotspot
  - daemon
  - wireless
  - troubleshoot
last_update:
  date: 02/27/2026
  author: Tienjuiwong
translation:
  skip:
    - zh-CN
createdAt: '2026-02-27'
updatedAt: '2026-03-16'
url: https://wiki.seeedstudio.com/pt-br/reachymini_platforms_reachy_mini_reset/
---

# Painel simples de Bluetooth para smartphone

Com um smartphone e um navegador compatível com Bluetooth Web API (baseado em Chrome/Opera/Edge), basta ir até 👉 [Bluetooth tool](https://pollen-robotics.github.io/reachy_mini/) e redefinir o hotspot, verificar o status da rede ou realizar outras tarefas.

Se o seu dispositivo/navegador não for compatível, verifique a outra solução.


# Guia ReachyMini nRF Connect

O wireless do Reachy Mini emite um sinal Bluetooth que permite redefinir o hotspot Wi‑Fi ou o daemon.

## 1. Instalar o nRF Connect
- **Android**: [Baixar aqui](https://play.google.com/store/apps/details?id=no.nordicsemi.android.mcp&hl=en-US&pli=1)
- **iOS**: [Baixar aqui](https://apps.apple.com/us/app/nrf-connect-for-mobile/id1054362403)


## 2. Escanear e conectar
1. Abra o nRF Connect.
2. Procure dispositivos e selecione **ReachyMini**.
![bluetooth_1.jpg](https://github.com/pollen-robotics/reachy_mini/raw/develop/docs/assets/bluetooth_1.jpg)
3. Conecte-se ao dispositivo.



## 3. Serviço desconhecido e seção WRITE
- Navegue até o **Unknown Service**.
- Localize a seção **WRITE**.
- Você também pode usar a seção **READ** acima para verificar a resposta do robô.
![bluetooth_2.jpg](https://github.com/pollen-robotics/reachy_mini/raw/develop/docs/assets/bluetooth_2.jpg)



## 4. Enviando comandos
Os comandos são enviados como **strings hexadecimais**. Use [esta ferramenta](https://www.rapidtables.com/convert/number/ascii-to-hex.html) para converter ASCII para hex, se necessário.
Os comandos também podem ser enviados usando o formato de texto original, como "STATUS" ou "CMD_HOTSPOT".

**Antes de enviar qualquer comando, certifique-se de enviar primeiro o código PIN.**

### Comandos disponíveis
| Comando                | Valor hex (enviar após `0x`)      |
|------------------------|-----------------------------------|
| STATUS                 | 535441545553                      |
| PIN_00018              | 50494E5F3030303138                |
| CMD_HOTSPOT            | 434D445F484F5453504F54            |
| CMD_RESTART_DAEMON     | 434D445F524553544152545F4441454D4F4E |
| CMD_SOFTWARE_RESET     | 434D445F534F4654574152455F5245534554 |


### Código PIN

O PIN são os **últimos 5 dígitos** do número de série do robô. Por exemplo, se o número de série for `xxxxxxxx4918400018`, o PIN será `00018`, então envie `PIN_00018` ou o valor hex correspondente.

### Comandos disponíveis
| Comando                | Valor hex (enviar após `0x`)      |
|------------------------|-----------------------------------|
| STATUS                 | 535441545553                      |
| PIN_00018              | 50494E5F3030303138                |
| CMD_HOTSPOT            | 434D445F484F5453504F54            |
| CMD_RESTART_DAEMON     | 434D445F524553544152545F4441454D4F4E |
| CMD_SOFTWARE_RESET     | 434D445F534F4654574152455F5245534554 |

Observação: Se você usar o comando de software reset, o robô será reiniciado e você precisará esperar cerca de 5 minutos até que ele fique disponível novamente.

### Dicas

É uma boa prática salvar os comandos para uso futuro.
![bluetooth_3.jpg](https://github.com/pollen-robotics/reachy_mini/raw/develop/docs/assets/bluetooth_3.jpg)
![bluetooth_4.jpg](https://github.com/pollen-robotics/reachy_mini/raw/develop/docs/assets/bluetooth_4.jpg)




