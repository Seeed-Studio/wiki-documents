---
description: Falha intermitente de cold boot do Weston com EGL_NOT_INITIALIZED em Seeed Jetson (confirmado em reComputer Super J401 com R36.4.4). Descreve os sintomas de dupla placa DRM com ordem variável, uma recomendação de uso do GNOME e links para acompanhamento.
title: Cold Boot do Weston Falha com EGL_NOT_INITIALIZED
tags:
  - JetPack
  - Display
  - Weston
  - reComputer Super
keywords:
  - jetson
  - weston
  - EGL_NOT_INITIALIZED
  - tegra_drm
  - nvidia-drm
  - GNOME
  - JetPack 6
  - L4T R36
  - reComputer Super
image: https://files.seeedstudio.com/wiki/reComputer-Jetson/J401/jetpack6_configuration.png
slug: /weston_egl_not_initialized_jetson_cold_boot
last_update:
  date: 08/17/2026
  author: haochen
createdAt: '2026-08-13'
updatedAt: '2026-08-18'
url: https://wiki.seeedstudio.com/pt-br/weston_egl_not_initialized_jetson_cold_boot/
---

# Cold Boot do Weston Falha com EGL_NOT_INITIALIZED

## Introdução

Se você substituir a área de trabalho padrão pelo **Weston**, poderá ver uma falha **intermitente** após um **cold boot**:

```text
failed to initialize display
EGL error state: EGL_NOT_INITIALIZED (0x3001)
```

Um **warm reboot** às vezes funciona.

Esta página registra um **caso confirmado** e um diagnóstico funcional para que outras pessoas que encontrem os mesmos logs possam comparar os sintomas e dar continuidade. **Não** é uma afirmação de que toda imagem Seeed Jetson ou toda inicialização do JetPack 6 seja afetada.

:::info Caso confirmado
**reComputer Super J401** (Jetson Orin Nano Super) gravado com a imagem Seeed **R36.4.4** (JetPack 6.2), usando Weston como compositor.

Problemas semelhantes de ordenação `card0` / `card1` com Weston também foram discutidos no [NVIDIA Developer Forums](https://forums.developer.nvidia.com/) para outras configurações de **Jetson Orin + JetPack 6**. Se você vir os mesmos logs em outro produto Orin da Seeed ou em uma imagem L4T R36.x, este FAQ ainda se aplica como ponto de partida — adicione detalhes na issue do GitHub vinculada abaixo.
:::

## Área de trabalho recomendada

Se você **não** precisar do Weston, permaneça na área de trabalho **GNOME** que vem com a imagem Seeed Jetson.

Os relatos até agora são sobre o **Weston** como compositor (frequentemente após desativar o GDM ou usar um modo quiosque/inicialização via serviço). O GNOME padrão é a solução prática usada no caso confirmado.

## Sintomas

Nos logs confirmados:

- Ligamento a frio (cold power-on): Weston falha com `EGL_NOT_INITIALIZED`.
- Reinicialização suave/morna (soft/warm reboot): Weston pode iniciar.
- Inicializações com falha frequentemente mostram o Weston usando `/dev/dri/card0` vinculado a `nvidia-drm` / `nv_platform`, às vezes com `Cannot find any crtc or sizes`.
- Inicializações bem-sucedidas frequentemente mostram o Weston usando `/dev/dri/card1`, com `tegra_drm` mantendo o outro nó.

Exemplo de trecho de falha:

```text
using /dev/dri/card0
Loading module '.../gl-renderer.so'
failed to initialize display
EGL error state: EGL_NOT_INITIALIZED (0x3001)
```

## O que os logs sugerem

A análise do BSP da Seeed em [Linux_for_Tegra #50](https://github.com/Seeed-Studio/Linux_for_Tegra/issues/50) aponta para uma **interação de ordem de carregamento** entre `tegra_drm` e `nvidia-drm` no Orin (ambos podem registrar minors de DRM). Não há garantia documentada de qual driver recebe o **minor 0** (`/dev/dri/card0`).

| Observado quando o Weston falha | Observado quando o Weston inicia |
| --- | --- |
| Weston abre `/dev/dri/card0`; esse nó costuma ser `nvidia-drm` / `nv_platform` | Weston abre `/dev/dri/card1`; `tegra_drm` / host1x frequentemente mantém a outra placa |

Cold boot vs warm boot pode alterar o tempo de detecção (probe), o que condiz com o comportamento intermitente. Isso pertence à pilha **Weston-on-Tegra** da NVIDIA, e não a um erro de gravação da placa-carregadora. A NVIDIA não publicou um aviso de correção dedicado para esse sintoma.

## Se você realmente precisar usar Weston

1. Prefira o **GNOME** a menos que o produto realmente exija Weston.
2. Trate os problemas restantes de EGL/DRM com Weston como **NVIDIA / upstream** — publique no [NVIDIA Developer Forums](https://forums.developer.nvidia.com/) com os logs do Weston e a saída de `dmesg | grep -i drm`.
3. Para comparar uma inicialização com falha e uma inicialização bem-sucedida:

```bash
# Which driver owns card0?
readlink -f /sys/class/drm/card0/device/driver
sudo udevadm info /dev/dri/card0
ls -l /dev/dri /dev/dri/by-path
sudo dmesg | grep -i drm
```

A Seeed não fornece um patch de BSP suportado que force a ordem de detecção do DRM. Soluções alternativas da comunidade (renomear nós em `/dev/dri`, temporização personalizada de `modprobe`) estão **fora do escopo** deste FAQ.

Se você reproduzir isso em outro SKU ou versão do L4T, comente em [Linux_for_Tegra #50](https://github.com/Seeed-Studio/Linux_for_Tegra/issues/50) com o hardware, a versão do L4T/JetPack e os comandos acima.

## Recursos

- [Seeed Linux_for_Tegra #50 — Cold boot do Weston sem display / EGL_NOT_INITIALIZED](https://github.com/Seeed-Studio/Linux_for_Tegra/issues/50)
- [Can't enable modeset on boot for Wayland (AGX Orin, JP 6.0)](https://forums.developer.nvidia.com/t/cant-enable-modeset-on-boot-for-wayland/303843)
- [Weston kiosk / nvidia_drm load order (Orin Nano Super)](https://forums.developer.nvidia.com/t/some-issues-i-found-trying-to-start-weston-automatically-in-a-kiosk-mode-using-systemd/348933)
- [NVIDIA Jetson Linux — Weston (Wayland) (R36.4)](https://docs.nvidia.com/jetson/archives/r36.4/DeveloperGuide/SD/WindowingSystems/WestonWayland.html)
- [Introdução ao reComputer Super](https://wiki.seeedstudio.com/pt-br/recomputer_jetson_super_getting_started/)

## Suporte Técnico e Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
