---
description: reComputer-FAQ
title: Solução de Problemas de Instalação
image: https://files.seeedstudio.com/wiki/wiki-platform/S.png
slug: /Troubleshooting_Installation
last_update:
  date: 2023/6/30
  author: Seraphina
createdAt: '2023-07-03'
updatedAt: '2026-03-13'
url: https://wiki.seeedstudio.com/pt-br/Troubleshooting_Installation/
---


### Solução de problemas de instalação com NVIDIA SDK Manager

Existem muitas causas para vários erros de instalação. Abaixo está uma lista de verificação de problemas comuns de instalação, que pode ajudar você a recuperar uma instalação com falha.

1. Revise a tabela de resumo para identificar qual componente falhou.

    a. Expanda o grupo com o status "Error".

    b. Quando você encontrar o componente com falha, clique no ícone de detalhes à direita de Install Error para ser redirecionado para a aba Terminal, que exibirá o erro exato.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/31.png" /></div>

2. Se o erro estiver relacionado a um problema de ambiente, como um repositório `apt` com erro ou pré-requisito ausente, tente corrigi-lo manualmente e, em seguida, clique no botão Retry Failed Items.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/32.png" /></div>

3. Tentar novamente a instalação também está disponível de outras duas maneiras:

    a. Em **Flashing to eMMC with SDK Manager -- Step 3**, use o botão Repair/Uninstall para ir para a página Manage NVIDIA SDKs. Se necessário, expanda o SDK que está com status "Broken" e clique em Repair para a parte relevante (Host ou Target).

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/33.png" /></div>

4. Em **Flashing to eMMC with SDK Manager -- Step 3**, selecione o SDK necessário e execute novamente a instalação.

5. Por fim, tente desinstalar e reinstalar o SDK relevante.

### Solução de problemas de instalação usando a linha de comando

O método de instalação via linha de comando é relativamente simples, e muitas vezes está sujeito a erros em cenários em que o modo de recuperação forçada é usado.

Se você encontrar o erro mostrado abaixo em **Flashing to eMMC with command-line -- Step 2**, provavelmente você não conseguiu colocar a Jetson-101 Carrier Board em modo de recuperação forçada. Por favor, preste atenção especial: não entre em modo de recuperação forçada com a Jetson-101 Carrier Board ligada, pois isso não é válido.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/34.jpg" /></div>

Se você não conseguir entrar no sistema em **Flashing to eMMC with command-line -- Step 3** e ficar preso na linha de comando exibida na inicialização, provavelmente você não saiu do modo de recuperação forçada. Da mesma forma, não é válido desconectar o jumper para sair do modo de recuperação forçada enquanto a Jetson-101 Carrier Board estiver ligada; tudo isso precisa ser feito enquanto ela estiver desligada.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/35.jpg" /></div>

:::note
Se for necessário mais espaço de armazenamento, podemos usar um cartão SD para expandir a capacidade ou gravar o sistema no cartão SD. Você pode consultar nossa solução recomendada [Flash System on SD card](https://wiki.seeedstudio.com/pt-br/J1010_Boot_From_SD_Card/)
:::
