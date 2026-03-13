---
description: OpenWrt-FAQ
title: Como usar um CM4 sem eMMC na Dual Gigabit Ethernet Carrier Board
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /use_a_CM4_witout_eMMC
last_update:
  date: 6/21/2023
  author: Seraphina
createdAt: '2023-07-28'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/use_a_CM4_witout_eMMC/
---

<!-- Q2: What if I have the Dual Gigabit Ethernet Carrier Board non-CM4 version and attach a CM4 without emmC? -->

Se você quiser usar um Compute Module 4 sem eMMC na Dual Gigabit Ethernet Carrier Board, será necessário gravar o OpenWrt em um cartão micro-SD e inseri-lo na placa. Siga as etapas abaixo de acordo com o seu sistema operacional.

- **Etapa 1.** Insira um cartão micro-SD no computador usando um **leitor de cartão micro-SD** conectado ao computador ou utilizando um **leitor de cartão embutido** em um laptop

- **Etapa 2.** Baixe o software **balenaEtcher** acessando [este link](https://www.balena.io/etcher) de acordo com o seu sistema operacional

- **Etapa 3.** Execute o **balenaEtcher** como **administrador**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OpenWrt/balena-home.jpg" alt="pir" width="650" height="auto"/></p>

- **Etapa 4.** Clique em **Flash from file** e aponte para o arquivo de imagem OpenWrt que você baixou anteriormente

- **Etapa 5.** Clique em **Select target** e selecione o cartão micro-SD conectado

- **Etapa 6.** Por fim, clique em **Flash!**

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/OpenWrt/balena-finish.jpg" alt="pir" width="650" height="auto"/></p>

Aguarde alguns minutos até que o processo de gravação seja concluído.

- **Etapa 7.** Ejete o cartão micro-SD do computador e insira-o na Dual Gigabit Ethernet Carrier Board

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OpenWrt/micro-sd-install.png" alt="pir" width="400" height="auto"/></p>
