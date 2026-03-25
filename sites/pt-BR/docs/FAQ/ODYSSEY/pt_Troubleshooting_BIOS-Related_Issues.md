---
description: ODYSSEY-FAQ
title: Solução de Problemas Relacionados à BIOS (WiFi/Bluetooth/Ventoinha/Ligamento Automático/Boot Guard/GPIO)
slug: /Troubleshooting_BIOS-Related_Issues
image: https://files.seeedstudio.com/wiki/wiki-platform/S.png
last_update:
  date: 6/26/2023
  author: Seraphina
createdAt: '2023-06-26'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Troubleshooting_BIOS-Related_Issues/
---

# Solução de Problemas Relacionados à BIOS

Alguns problemas com o Odyssey podem ser resolvidos configurando as definições da BIOS. Abaixo estão alguns problemas que podem ser solucionados usando configurações de BIOS. Primeiro, será descrito como acessar a configuração da BIOS.

### Como acessar a configuração da BIOS

Pressione o botão de energia e mantenha pressionada a tecla `DEL` até ver a tela de configuração da BIOS.

### Como resolver o problema de não conseguir se conectar ao Wi‑Fi e ao Bluetooth

Verifique as configurações da BIOS e ative o Wi‑Fi e o Bluetooth na BIOS.

### A ventoinha interna é controlável

Atualmente a ventoinha é controlada pela BIOS e não pelo usuário. A velocidade da ventoinha é ajustada de acordo com a temperatura da CPU. Verifique `Chipset` -> `FAN Contorl` na tela de configuração da BIOS para mais informações.

### Como configurar o ODYSSEY - X86J41x5 para ligar automaticamente quando a alimentação for conectada

Isso também precisa ser configurado na BIOS. Entre nas configurações da BIOS pressionando a tecla `DEL`. Navegue até `Chipset` -> `Restore on AC Power Loss` e altere a configuração para `Last State`.

  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/Auto-power.png" alt="pir" width={600} height="auto" /></p>

### A placa ODYSSEY possui Boot Guard para Secure Boot

Sim, é possível ativar a opção `Security Boot` na BIOS. Quando isso está ativado, a BIOS desativará a inicialização a partir de dispositivos não autenticados.

### Por que o GPIO ainda funciona após o Odyssey ser desligado

Para configurar isso, é necessário atualizar para a versão mais recente da BIOS que fornecemos. Na versão mais recente da BIOS, é possível alterar de habilitar para desabilitar aqui para desligar tanto o GPIO quanto o ODYSSEY.

  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105/OdysseyFAQ1.png" alt="pir" width={600} height="auto" /></p>
