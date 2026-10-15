---
description: Liste as possíveis causas de problemas de tempo limite durante o processo de gravação do Jetson.
title: Resolver o Problema de Erro de UUID
keywords:
  - reComputer
  - jetpack
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /deal_the_issue_of_UUID
sku: 100001302,E2025021103
last_update:
  date: 01/08/2026
  author: Dayu
createdAt: '2026-01-08'
updatedAt: '2026-03-16'
url: https://wiki.seeedstudio.com/pt-br/deal_the_issue_of_UUID/
---

# 🚨 Descrição do Problema

Mesmo sem modificar nenhum conteúdo relacionado ao kernel do Jetson, o dispositivo Jetson encontra um erro relacionado ao UUID durante a inicialização e entra no terminal de recuperação. Esse problema impede a inicialização normal do sistema e requer intervenção manual para ser resolvido.

## 🔍 Sintomas

**Não é possível acessar a partição do usuário (Erro de UUID)**

Inicialmente, o sistema misteriosamente falha ao montar a partição do usuário, resultando em falhas contínuas de inicialização, como mostrado na imagem abaixo:

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/other/UUID-error.jpg"/></div>

**Sistema entra em modo de recuperação**

Em seguida, o sistema entra de forma anormal no modo de Recuperação (terminal de resgate):

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/other/rc-terminal.png"/></div>

Esse problema normalmente ocorre quando o processo de inicialização encontra arquivos de sistema corrompidos ou flags de partição incorretas, fazendo com que o sistema não consiga inicializar normalmente e caia em um ambiente de shell de recuperação. O erro de UUID indica que o sistema não consegue identificar ou montar corretamente o sistema de arquivos raiz, o que é essencial para a operação normal.




# 🛠️ Soluções




## Método 1: Limpar Flags de OTA e Substituir o Arquivo initrd

**Possível causa:** O arquivo de imagem `/boot/initrd` está corrompido, causando a interrupção do processo de inicialização.

**Sintomas:** O sistema não consegue entrar no SO normal durante a inicialização e entra repetidamente no modo de Recuperação, caindo no shell `bash-5.1#`.

### Etapa 1: Montar Variáveis EFI no Terminal de Recuperação

Primeiro, monte o sistema de arquivos de variáveis EFI no terminal de recuperação:

```bash
mount -t efivarfs efivarfs /sys/firmware/efi/efivars
```

### Etapa 2: Limpar Variáveis de Flag de OTA

No ambiente de shell `bash-5.1#`, remova e exclua os bits de flag de OTA:
**1. Remover e limpar a flag de modo de boot padrão do L4T:**

```bash
chattr -i /sys/firmware/efi/efivars/L4TDefaultBootMode-781e084c-a330-417c-b678-38e696380cb9
rm /sys/firmware/efi/efivars/L4TDefaultBootMode-781e084c-a330-417c-b678-38e696380cb9
```



**2. Remover e limpar a flag de status da partição A:**

```bash
chattr -i /sys/firmware/efi/efivars/RootfsStatusSlotA-781e084c-a330-417c-b678-38e696380cb9
rm /sys/firmware/efi/efivars/RootfsStatusSlotA-781e084c-a330-417c-b678-38e696380cb9
```



**3. Remover e limpar a flag de status da partição B:**

```bash
chattr -i /sys/firmware/efi/efivars/RootfsStatusSlotB-781e084c-a330-417c-b678-38e696380cb9
rm /sys/firmware/efi/efivars/RootfsStatusSlotB-781e084c-a330-417c-b678-38e696380cb9
```

### Etapa 3: Desligar o Sistema

Após limpar os bits de flag incorretos, desligue e corte a alimentação do dispositivo Jetson.

### Etapa 4: Substituir o Arquivo /boot/initrd

Substitua o arquivo `/boot/initrd` usando um case para SSD para conectar o SSD do Jetson a um PC. **Recomenda-se fazer backup do antigo arquivo initrd antes da substituição.**

**Etapas detalhadas:**
- **Remover a unidade:** Retire o SSD da placa de desenvolvimento e conecte-o a um PC (ambiente Linux) usando um case para SSD.
- **Montar a partição:** Monte a partição raiz do sistema (RootFS) a partir do SSD.
- **Substituir o arquivo:**
  - a. Localize o arquivo `/boot/initrd` no ponto de montagem.
  - b. Substitua-o por uma nova imagem initrd funcional verificada (ou uma imagem recém-compilada).
- **Teste de recuperação:** Reinstale o SSD de volta na placa de desenvolvimento e ligue-a.


**Links de download para arquivos initrd:**

**🔗 L4T 36.4.0 (JetPack 6.1):**
[Click to download](https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQD15MxbJs_tTqEKA0ouhCygAR7LuRFU5wZzczSziLYUX2s?e=kM4KjT)

**🔗 L4T 36.4.3 (JetPack 6.2):**
[Click to download](https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQCpm0jqIgDxRIvM3kk_40P6AX8bfvYF6AbEJ8fRWCNMS8c?e=4nMyMM)

**🔗 L4T 36.4.4 (JetPack 6.2.1):**
[Click to download](https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQBFn84LQJqlQ7BgIzvCPp6gAcD9I80K2RBW0v88Uvjh8zs?e=IyaREq)



### Etapa 5: Reiniciar o Jetson

Após concluir a substituição do arquivo, reinicie o dispositivo Jetson.

## 🔄 Método 2: Abordagem de Instalação Limpa

Prepare um <div>SSD em branco</div> e substitua-o no dispositivo Jetson. Após gravar o sistema (certifique-se de que a versão do JetPack corresponda à do SSD antigo), troque novamente para o SSD antigo.   

O conteúdo do SSD antigo permanecerá intacto e agora deverá inicializar corretamente.




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
