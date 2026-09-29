---
description: Acesse a linha de comando do reCamera Pro pelo terminal da WebUI, por SSH ou pelo console serial DEBUG UART, e saiba quando usar cada um.
title: Terminal, SSH e Debug UART
keywords:
  - reCamera
  - reCamera Pro
  - terminal
  - SSH
  - UART
  - debugging
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_terminal
sku: 10003420
sidebar_position: 3
last_update:
  date: 09/21/2026
  author: MOSS
url: https://wiki.seeedstudio.com/pt-br/recamera_pro_terminal/
---

# Terminal, SSH e Debug UART

O reCamera Pro oferece três maneiras de acessar uma linha de comando, cada uma útil em situações diferentes:

| Método | Requer rede | Use quando |
| --- | --- | --- |
| Console de terminal da WebUI | Sim | Verificações rápidas a partir de um navegador, sem ferramentas extras |
| SSH | Sim | Scripting, transferência de arquivos, longas sessões de desenvolvimento |
| Console serial DEBUG UART | Não | O dispositivo não inicializa, a rede está mal configurada ou você precisa de logs de boot |

## Console de Terminal da WebUI

O console de terminal permite que você faça login diretamente no terminal do sistema do reCamera Pro pela Web UI, sem uma ferramenta SSH adicional.

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_2dvKqObUbo.png" />

Faça login com a seguinte conta padrão:

```bash
Username: root
Password: recamera
```

A mesma página da Web UI também fornece uma visualização de log do sistema para inspeção de logs em tempo real, filtragem e download — consulte [Coletar logs](/pt-br/recamera_pro_collect_logs/).

## SSH

Quando o dispositivo está acessível na rede, SSH é o método de acesso mais conveniente para desenvolvimento: ele oferece suporte a transferência de arquivos (`scp`), redirecionamento de portas e sessões de longa duração. A partir de um computador na mesma rede (endereço padrão da Ethernet virtual USB `192.168.42.1`):

```bash
ssh root@192.168.42.1
```

{/* TODO(verify): confirm the SSH default credentials on stock Buildroot firmware (whether root login uses the same password as the WebUI terminal console) and whether SSH is enabled out of the box */}

## Console Serial DEBUG UART

A DEBUG UART é dedicada à depuração. Ela funciona sem qualquer configuração de rede e mostra a saída durante a inicialização, tornando-se o caminho de recuperação quando o dispositivo não inicializa ou o endereço IP é desconhecido.

A taxa de baud da porta serial de depuração é **1500000**, e a especificação da interface de hardware é MX1.25. A sequência dos pinos é mostrada abaixo.

![DEBUG_UART_PIN](https://files.seeedstudio.com/wiki/reCamera-Pro/Hardware_Usage/DEBUG_UART_PIN.jpg)

### Conectar a DEBUG UART

1. Prepare um conversor USB-para-serial. Conecte o TX do conversor ao pino RX do dispositivo e conecte o RX do conversor ao pino TX do dispositivo. Lembre-se também de conectar o GND.
2. Ligue o dispositivo e você verá as informações de depuração do dispositivo no conversor.

![DEBUG_UART_SHOW](https://files.seeedstudio.com/wiki/reCamera-Pro/Hardware_Usage/DEBUG_UART_SHOW.png)

:::note
Defina sua ferramenta serial para uma taxa de baud de 1500000. Uma taxa de baud incompatível produz saída ilegível.
:::

{/* TODO(verify): confirm the DEBUG UART console login account on stock firmware and whether it accepts the same root credentials as the WebUI terminal */}

## Páginas Relacionadas

- [Uso de UART](/pt-br/recamera_pro_uart_usage/) — a segunda porta serial na interface de expansão, usada para disparo pela WebUI e saída de inferência de IA
- [Coletar logs](/pt-br/recamera_pro_collect_logs/) — reúna logs para solução de problemas e suporte

## Suporte Técnico e Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para oferecer vários tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos múltiplos canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
