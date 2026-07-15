---
description: Como instalar e iniciar o Seeed Jetson DevelopTool no Ubuntu ou Windows usando pip ou a partir do código-fonte.
title: Instalação
keywords:
  - reComputer
  - Jetson
  - DevelopTool
  - instalação
  - pip
image: https://files.seeedstudio.com/wiki/Seeed-Jetson-DevelopTool/Reference-UI.png
slug: /jetson_developtool_installation
last_update:
  date: 05/26/2026
  author: Lorraine
createdAt: '2026-05-26'
updatedAt: '2026-05-26'
url: https://wiki.seeedstudio.com/pt-br/jetson_developtool_installation/
---

## Requisitos

| Item | Requisito |
|------|-------------|
| Sistema operacional host | Ubuntu 20.04 / 22.04 / 24.04 ou Windows 10/11 |
| Python | 3.8 ou mais recente |

## Opção 1 — Instalar via pip (Recomendado)

```bash
pip install seeed-jetson-developer
```

Em seguida, inicie a interface gráfica (GUI):

```bash
seeed-jetson-developer
```

## Opção 2 — Instalar a partir do código-fonte

```bash
git clone https://github.com/Seeed-Projects/Seeed-Jetson-DevelopTool.git
cd Seeed-Jetson-DevelopTool
pip install .
```

Inicie após a instalação:

```bash
seeed-jetson-developer
```

## Opção 3 — Executar diretamente (sem instalação)

Se você preferir executar sem instalar:

```bash
git clone https://github.com/Seeed-Projects/Seeed-Jetson-DevelopTool.git
cd Seeed-Jetson-DevelopTool
pip install PyQt5 paramiko requests
python3 run_v2.py
```

## Verificar a instalação

Após iniciar, a janela principal deve aparecer com todas as oito abas de módulos visíveis. Se a janela não abrir, verifique se o PyQt5 está instalado:

```bash
pip show PyQt5
```

:::tip
No Ubuntu, se você receber um erro de exibição como `cannot connect to X server`, certifique-se de que está executando em uma sessão de desktop gráfica, e não em um terminal SSH sem redirecionamento X.
:::

## Próximas etapas

- [Conecte seu dispositivo →](/pt-br/jetson_developtool_connect_device)
- [Grave o firmware →](/pt-br/jetson_developtool_flash_firmware)

## Suporte técnico e discussão sobre o produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
