---
description: Descreve as diferenças no L4T entre a Seeed e a NVIDIA
title: Diferenças no L4T entre a Seeed e a NVIDIA
keywords:
  - jetson
  - BSP
  - L4T
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /differences_of_l4t_between_seeed_and_nvidia
last_update:
  date: 04/05/2025
  author: Dayu
createdAt: '2025-04-07'
updatedAt: '2026-03-16'
url: https://wiki.seeedstudio.com/pt-br/differences_of_l4t_between_seeed_and_nvidia/
---

Os Pacotes de Suporte de Placa (BSPs) Jetson da Seeed são baseados nas versões 35.3.1, 35.5, 36.3, 36.4 e 36.4.3 do Linux for Tegra (L4T) da NVIDIA, com modificações para suportar os produtos da própria linha Jetson da Seeed. Abaixo estão as diferenças entre o BSP da Seeed e o BSP oficial da NVIDIA para cada uma dessas versões do L4T.

## L4T 36.4.3

O Jetson Linux 36.4.3 faz parte do JetPack 6.2. Para esta versão, o BSP da Seeed inclui vários drivers e recursos adicionais que não estão presentes no BSP padrão da NVIDIA, incluindo:

- Suporte adicionado para controladores de barramento CAN da série MCP251X.
- Suporte adicionado para controladores CAN-FD MCP251XFD.
- Algoritmo de soma de verificação CRC-CCITT ativado (usado por PPP e protocolos semelhantes).
- Suporte adicionado para o driver genérico de Wi‑Fi da Intel.
- Suporte de rastreamento de dispositivos Wi‑Fi Intel ativado.
- Modo de operação modular para Wi‑Fi Intel ativado.
- Suporte adicionado para controladores Ethernet Gigabit Microchip LAN743x.
- Suporte ao PPP (Protocolo Ponto‑a‑Ponto) ativado.
- Suporte ao PPP sobre links seriais assíncronos ativado.
- Suporte adicionado para drivers de Wi‑Fi da série Realtek 88.
- Suporte adicionado para o chip Wi‑Fi Realtek 8723D.
- Suporte adicionado para o chip Wi‑Fi Realtek 8723DU.
- Suporte adicionado para chips Wi‑Fi da série Realtek 8723X.
- Suporte adicionado para dispositivos Wi‑Fi Realtek via USB.
- Suporte adicionado para drivers de codec de áudio da série TLV320AIC3X da TI.
- Suporte à interface I²C para o codec TLV320AIC3X adicionado.
- Interface avançada de depuração para dispositivos de vídeo ativada.
- Suporte adicionado para o desserializador GMSL MAX9296A.
- Suporte adicionado para o desserializador GMSL MAX96717.
- Suporte adicionado para o desserializador GMSL MAX96724.
- Suporte adicionado para um agregador GMSL da Maxim.

## L4T 36.4

O Jetson Linux 36.4 faz parte do JetPack 6.1. Para esta versão, o BSP da Seeed adiciona drivers e recursos adicionais em comparação com o BSP da NVIDIA, incluindo:

- Suporte adicionado para controladores de barramento CAN da série MCP251X.
- Suporte adicionado para controladores CAN-FD MCP251XFD.
- Algoritmo de soma de verificação CRC-CCITT ativado (usado por PPP e outros protocolos).
- Suporte adicionado para o módulo de driver Wi‑Fi Intel MVM.
- Suporte adicionado para o driver genérico de placa sem fio Intel.
- Funcionalidade de rastreamento de depuração para Wi‑Fi Intel ativada.
- Controle de indicador LED para dispositivos Wi‑Fi Intel ativado.
- Driver do controlador Ethernet Gigabit Microchip LAN743x ativado.
- Suporte ao protocolo PPP ativado.
- Conexões PPP sobre portas seriais assíncronas ativadas.
- Suporte ativado para drivers centrais de placas sem fio da série Realtek 88.
- Suporte adicionado para o chip Wi‑Fi Realtek 8723D.
- Suporte adicionado para o chip Wi‑Fi Realtek 8723DU.
- Suporte adicionado para chips Wi‑Fi da série Realtek 8723X.
- Suporte adicionado para o módulo central do driver Wi‑Fi Realtek RTW88.
- Suporte adicionado para uso de adaptadores Wi‑Fi da série RTW88 via USB.
- Suporte adicionado para bibliotecas de compactação exigidas pelo PPP.
- Suporte adicionado para o chip conversor USB‑para‑serial CH341.

## L4T 36.3

O Jetson Linux 36.3 faz parte do JetPack 6.0. Para esta versão, o BSP da Seeed fornece drivers e recursos adicionais além dos da NVIDIA, incluindo:

- Suporte adicionado para controladores de barramento CAN da série MCP251X.
- Suporte adicionado para controladores CAN-FD MCP251XFD.
- Algoritmo de soma de verificação CRC-CCITT ativado (usado por PPP e protocolos semelhantes).
- Suporte ao protocolo I²C ATR (Address Translator) ativado.
- Suporte adicionado para o driver genérico de placa sem fio Intel.
- Suporte de rastreamento de depuração de dispositivos para Wi‑Fi Intel ativado.
- Suporte adicionado para o controlador Ethernet Gigabit Microchip LAN743x.
- Suporte adicionado para o módulo central do driver Wi‑Fi da série Realtek 88.
- Suporte adicionado para o chip Wi‑Fi Realtek 8723D.
- Suporte adicionado para o chip Wi‑Fi Realtek 8723DU.
- Suporte adicionado para chips Wi‑Fi da série Realtek 8723X.
- Suporte adicionado para o driver de codec de áudio TLV320AIC3X da TI.
- Suporte adicionado para a interface de controle I²C para o TLV320AIC3X.
- Suporte adicionado para o desserializador GMSL MAX96717.
- Suporte adicionado para o desserializador GMSL MAX96724.
- Suporte adicionado para o desserializador de vídeo GMSL MAX9296A.
- Suporte adicionado para um agregador GMSL da Maxim.
- Suporte principal a TPM ativado.
- Suporte adicionado para drivers TPM via interface SPI.
- Suporte para TPM Infineon via interface I²C ativado.
- Módulo de segurança SELinux ativado.

## L4T 35.5

O Jetson Linux 35.5 faz parte do JetPack 5.1.3. Para esta versão, o BSP da Seeed adiciona vários drivers e recursos e inclui algumas alterações de configuração, incluindo:

- **Driver de câmera IMX219:** a Seeed compila esse driver no kernel, enquanto a NVIDIA o fornece como um módulo carregável.
- **Driver de câmera IMX390:** a Seeed atualmente desativa esse driver, enquanto a NVIDIA o compila no kernel.
- **Driver do controlador Ethernet Gigabit LAN743x:** a Seeed o compila no kernel, enquanto a NVIDIA o fornece como um módulo carregável.
- Suporte ativado para o chip PHY (camada física) Ethernet TI DP83867.
- Suporte adicionado para o driver do chip controlador USB Type‑C NXP PTN5150.
- Suporte adicionado para drivers de chips Ethernet Gigabit da série Microchip LAN743x.
- Framework nvmem (memória não volátil) ativado, permitindo que drivers acessem armazenamento on‑board como EEPROM/NVRAM.
- Suporte adicionado para o chip de gerenciamento de energia STPMIC1.
- Suporte adicionado para o chip de gerenciamento de energia TI TPS65090.
- Driver do sensor de temperatura LM90 ativado.
- Suporte adicionado para sensores termistores NTC.
- Suporte adicionado para drivers de codec de áudio da série TLV320AIC3X da TI (interface I²S).
- Suporte adicionado para a interface de controle I²C do TLV320AIC3X.
- Suporte ativado para a interface padronizada de Controlador de Porta USB Type‑C (TCPCI).
- Suporte adicionado para o driver do controlador Type‑C MediaTek MT6370.
- Suporte a dispositivo de console USB ativado (para depuração serial via OTG).
- Driver do adaptador USB‑para‑serial CH341 ativado.

## L4T 35.3.1

O Jetson Linux 35.3.1 faz parte do JetPack 5.1.1. Para esta versão, o BSP da Seeed adiciona drivers e recursos adicionais e faz algumas modificações, incluindo:

- Gerador de números aleatórios de hardware TPM ativado como uma das fontes de entropia do sistema.
- Ponto de montagem `/sys/kernel/security` ativado para uso pelo SELinux, AppArmor, etc.
- Suporte à interface principal de TPM ativado (necessário para TPMs SPI/I²C).
- Suporte adicionado para acesso a chips TPM via barramento SPI.
- Suporte TPM ativado para recursos como boot seguro e armazenamento de chaves.

## Recursos

- [Código-fonte do L4T da Seeed](https://github.com/Seeed-Studio/Linux_for_Tegra)

## Suporte Técnico & Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes formas de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
