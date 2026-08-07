---
description: SenseCAP M4 FAQ
title: SenseCAP M4 FAQ
keywords:
  - SenseCAP Network
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Network/SenseCAP_Network/SenseCAPMX_Hotspot/Flux_Gateway/SenseCAP_M4_Square/SenseCAP_M4_FAQ
last_update:
  date: 02/14/2023
  author: Matthew
createdAt: '2023-02-24'
updatedAt: '2026-06-25'
url: https://wiki.seeedstudio.com/pt-br/Network/SenseCAP_Network/SenseCAPMX_Hotspot/Flux_Gateway/SenseCAP_M4_Square/SenseCAP_M4_FAQ/
---

FAQ
===

### **Qual é o tempo médio de sincronização da cadeia Flux para o node?**

Baixe e carregue um arquivo de snapshot de 20GB e sincronize a cadeia por cerca de uma hora para alcançar o bloco mais recente. O tempo correto de sincronização depende da rede do dispositivo, certifique-se de que o dispositivo tenha uma boa conexão de rede.

### **O SenseCAP M4 Square oferece suporte a NIMBUS e STRATUS?**

**Não**, o SenseCAP M4 Square oferece suporte apenas a CUMULUS. Se precisar de NIMBUS, clique [aqui](https://www.seeedstudio.com/flux?utm_source=discord&utm_campaign=sensecapm4)

### **Como verificar se minha porta está aberta?**

O SenseCAP M4 Square abre todas as portas exigidas pelo Flux. O aplicativo SenseCAP Hotspot fornece detecção UPNP. Se o status de UPNP estiver ON, as portas estão abertas. Se o status estiver OFF, verifique o UPNP do seu roteador. Para mais detalhes, visite [Flux Node Network Setup](https://support.runonflux.io/support/solutions/articles/151000021293-flux-node-network-setup)

### **O M4 precisa de IP estático e é possível executar vários SenseCAP M4 Squares no mesmo IP externo?**

Um IP externo é necessário.

No máximo 8 dispositivos por IP, e certifique-se de que o seu roteador oferece suporte a UPnP ou redirecionamento de portas.

### **Como testar a largura de banda da rede para atender aos requisitos?**

https://www.speedtest.net

### **Se eu for um usuário profissional, posso apagar o sistema original e instalar outro?**

Esta não é uma operação recomendada. No entanto, é um dispositivo baseado em x86 e você pode reinstalar qualquer sistema que quiser; antes disso, certifique-se de que você sabe o que está fazendo.

Mas tenha em mente que, se você apagar o sistema padrão, perderá a garantia, e será difícil voltar ao sistema original.

### **Preciso escolher o plugue de energia eu mesmo?**

O M4 Square inclui um adaptador de energia de ampla faixa de entrada e possui plugues US/AU/UK/EU.

### **Preciso de uma antena externa?**

A antena Wi-Fi está dentro do dispositivo. O SenseCAP M4 Square-Fluxnode não requer uma antena externa.

### **Preciso fazer o stake dos 1000 Flux?**

**Sim**, os 1000 Flux não estão incluídos no hardware, então você precisa fazer o stake por conta própria.

### **Meu M1 pode se transformar em FluxNode e é possível converter um Pi de 8GB em um FluxNode?**

No momento, o Raspi 8GB é suportado pelo Flux, mas requer um SSD externo, e a estabilidade não pode ser garantida, o que pode afetar a operação estável do equipamento.