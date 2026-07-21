---
description: Guia para redefinir o Reachy Mini wireless usando o app Reachy Mini Control, Web Bluetooth ou nRF Connect para redefinir o hotspot Wi‑Fi ou o daemon.
title: Redefinir o Reachy Mini via Bluetooth
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
  skip: [zh-CN]
createdAt: '2026-02-27'
updatedAt: '2026-05-19'
url: https://wiki.seeedstudio.com/pt-br/reachymini_platforms_reachy_mini_reset/
---

# Ferramentas de reset e reinicialização via Bluetooth (Wireless)

Se você precisar redefinir o hotspot Wi‑Fi do robô, reiniciar o daemon ou executar outros comandos de manutenção via Bluetooth, use uma das opções abaixo. **Dê preferência ao app oficial Reachy Mini Control** quando estiver em um laptop ou desktop: ele inclui um console Bluetooth e evita ter que alternar entre navegador e app de celular separados.

## 1. Reachy Mini Control — console Bluetooth (recomendado)

Use o app de desktop **Reachy Mini Control** ([download](https://hf.co/reachy-mini/#/download)). O Bluetooth deve estar ativado no seu computador.

1. Abra o **Reachy Mini Control**. Na tela **Connect to Reachy** (antes de iniciar uma sessão), role até o rodapé e clique em **First time WiFi setup**.

[![control-app-first-time-wifi-setup.png](https://github.com/pollen-robotics/reachy_mini/raw/main/docs/assets/control-app-first-time-wifi-setup.png)](https://hf.co/reachy-mini/#/download)

2. No assistente **First Time WiFi Setup**, use o link no rodapé **Try the Bluetooth Console** (por exemplo, se o hotspot não for detectado ou sempre que você quiser acessar o console diretamente).

[![control-app-wifi-wizard-bluetooth-console.png](https://github.com/pollen-robotics/reachy_mini/raw/main/docs/assets/control-app-wifi-wizard-bluetooth-console.png)](https://hf.co/reachy-mini/#/download)

A partir do console Bluetooth você pode redefinir o hotspot, verificar o status da rede e executar o mesmo tipo de comandos que nos outros métodos abaixo.

> **Observação:** Em algumas versões do app o link de entrada pode aparecer como **First time connecting to your WiFi...** em vez de **First time WiFi setup**; ele abre o mesmo fluxo de configuração de Wi‑Fi.

## 2. Dashboard Web Bluetooth (navegador de celular ou desktop)

Com um smartphone ou desktop e um **navegador compatível com Bluetooth** (Chrome, Opera ou Edge), abra a ferramenta independente: [Bluetooth tool](https://pollen-robotics.github.io/reachy_mini/). Você pode redefinir o hotspot, verificar o status da rede e muito mais sem instalar o app de desktop.

Se o seu dispositivo ou navegador não oferecer suporte à Web Bluetooth API, use o app de desktop (acima) ou o método com nRF Connect abaixo.

## 3. nRF Connect (avançado)

O Reachy Mini wireless expõe uma interface Bluetooth GATT para que você possa redefinir o hotspot Wi‑Fi ou o daemon a partir de um cliente BLE genérico.

### 3.1 Instalar o nRF Connect

- **Android**: [Google Play](https://play.google.com/store/apps/details?id=no.nordicsemi.android.mcp&hl=en-US&pli=1)
- **iOS**: [App Store](https://apps.apple.com/us/app/nrf-connect-for-mobile/id1054362403)

### 3.2 Fazer scan e conectar

1. Abra o nRF Connect.
2. Faça o scan dos dispositivos e selecione **ReachyMini**.

[![bluetooth_1.jpg](https://github.com/pollen-robotics/reachy_mini/raw/main/docs/assets/bluetooth_1.jpg)

3. Conecte-se ao dispositivo.

### 3.3 Serviço desconhecido e seção WRITE

- Abra o **Unknown Service**.
- Use a seção **WRITE** para enviar comandos.
- Você pode usar a seção **READ** acima para inspecionar as respostas do robô.

[![bluetooth_2.jpg](https://github.com/pollen-robotics/reachy_mini/raw/main/docs/assets/bluetooth_2.jpg)

### 3.4 Enviando comandos

Os comandos são enviados como **strings hexadecimais** (ou como texto simples, como `STATUS` ou `CMD_HOTSPOT`). Use [este conversor](https://www.rapidtables.com/convert/number/ascii-to-hex.html) se precisar de ASCII → hex.

**Sempre envie o PIN antes de qualquer outro comando.**

#### Código PIN

O PIN são os **últimos 5 dígitos** do número de série do robô. Por exemplo, se o número de série for `xxxxxxxx4918400018`, o PIN é `00018` — envie `PIN_00018` (ou o valor em hex abaixo).

#### Referência de comandos

| Comando                | Valor em hex (após `0x`)            |
|------------------------|-------------------------------------|
| STATUS                 | 535441545553                        |
| PIN_00018              | 50494E5F3030303138                  |
| CMD_HOTSPOT            | 434D445F484F5453504F54              |
| CMD_RESTART_DAEMON     | 434D445F524553544152545F4441454D4F4E |
| CMD_SOFTWARE_RESET     | 434D445F534F4654574152455F5245534554 |

Se você usar **CMD_SOFTWARE_RESET**, o robô será reiniciado e pode levar **cerca de 5 minutos** até ficar acessível novamente.

#### Dicas

É conveniente salvar comandos usados com frequência para reutilização.

[![bluetooth_3.jpg](https://github.com/pollen-robotics/reachy_mini/raw/main/docs/assets/bluetooth_3.jpg)
[![bluetooth_4.jpg](https://github.com/pollen-robotics/reachy_mini/raw/main/docs/assets/bluetooth_4.jpg)