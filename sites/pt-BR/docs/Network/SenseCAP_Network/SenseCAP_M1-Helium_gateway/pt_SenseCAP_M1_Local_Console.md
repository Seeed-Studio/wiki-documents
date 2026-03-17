---
description: Console Local do SenseCAP M1
title: Console Local do SenseCAP M1
keywords:
  - SenseCAP Network
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Network/SenseCAP_Network/SenseCAP_M1-Helium_gateway/SenseCAP_M1_Local_Console
last_update:
  date: 02/14/2023
  author: Matthew
createdAt: '2023-02-24'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Network/SenseCAP_Network/SenseCAP_M1-Helium_gateway/SenseCAP_M1_Local_Console/
---


**Visão Geral**
============

**O recurso mais recente foi atualizado em 14 de janeiro de 2022:** Para aumentar o nível de segurança do Console Local SenseCAP, uma senha extra foi adicionada para fazer login no Console Local além do CPUID, a senha padrão é o número de série (Serial Number) do hotspot. É altamente recomendável alterar a senha após o primeiro login.

**Observação**: Seu computador e seu Hotspot devem estar conectados ao mesmo roteador/rede para usar o Console Local. Se o seu Hotspot estiver remoto, você atualmente NÃO conseguirá executar nenhum dos recursos no Console Local.

![Local Console](https://www.sensecapmx.com/wp-content/uploads/2022/07/local-console.png)

**Login**
=========

**1. Obtenha o CPU ID e o S/N do seu Hotspot**

- Se você não tiver uma conta no SenseCAP M1 Dashboard ou não tiver adicionado seu Hotspot ao Dashboard, localize a etiqueta do dispositivo do seu SenseCAP M1 e obtenha o S/N e o CPU ID

![Local Console Login Details](https://www.sensecapmx.com/wp-content/uploads/2022/07/image-16.png)

- Se você já registrou uma conta no SenseCAP M1 Dashboard e adicionou seu Hotspot, você pode copiar o CPU ID e o S/N do seu Hotspot a partir do dashboard.

![Local Console Login Details 2](https://www.sensecapmx.com/wp-content/uploads/2022/07/image-1-1.png)

**2. Obtenha o Endereço IP do seu hotspot**

- Se você não tiver uma conta no SenseCAP M1 Dashboard ou não tiver adicionado seu Hotspot ao Dashboard, localize o Endereço IP do seu hotspot na página de administração do seu roteador ou execute o diagnóstico no seu Helium APP para obter o Endereço IP. Em seguida, digite o Endereço IP em um navegador para acessar a página do Console Local.
- Se você já registrou uma conta no SenseCAP M1 Dashboard e adicionou seu Hotspot, você pode encontrar o Endereço IP do seu Hotspot no dashboard:
  - Clique no link "**Wi-Fi IP Address**" ou "**LAN IP Address**", que direciona para a página do Turbo Sync Local Console.
  - Se você estiver conectado via Wi-Fi, verá o endereço IP Wi-Fi do Hotspot para clicar.
  - Se você estiver conectado via cabo Ethernet ou LAN local, verá o endereço LAN do Hotspot para clicar.

![Local Console Login Details 3](https://www.sensecapmx.com/wp-content/uploads/2022/07/wifi-name-ts-1.png)

**3. Use o CPU ID do hotspot e a senha padrão (número de série, também conhecido como S/N) para fazer login**

![Local Console Login Details 4](https://www.sensecapmx.com/wp-content/uploads/2022/07/login-1.png)

![Local Console Login Details 5](https://www.sensecapmx.com/wp-content/uploads/2022/07/image-2-1.png)

**4. Altere a senha padrão**

![Local Console Change Password](https://www.sensecapmx.com/wp-content/uploads/2022/07/change-password-1.png)

Após o primeiro login, clique no botão "**Change Password**" para modificar sua senha padrão. A nova senha deve conter de 8 a 32 dígitos com pelo menos duas combinações de números, letras e símbolos. A senha será criptografada e armazenada apenas localmente no seu SenseCAP M1.

Por motivos de segurança, ainda não fornecemos a função “**Forget Password**”, portanto, lembre-se bem da sua senha e você precisará regravar o cartão MicroSD para restaurar a senha padrão se a perder.

Para os usuários de CLI, note que toda vez que a senha for alterada, o device token do Console Local será atualizado automaticamente também. Atualize a página da Web do Console Local e você verá o novo device token. Mantenha seu device token em segurança e não o compartilhe com terceiros em nenhuma circunstância.

**5. Obtenha a bind-key e adicione seu Hotspot ao SenseCAP Dashboard**

![Local Console Bind Key](https://www.sensecapmx.com/wp-content/uploads/2022/07/image-3-2.png)

Obtenha o CPU ID do dispositivo, o ETH MAC do dispositivo e a bind key do dispositivo na página do Console Local acima.

* * *

**Informações Importantes**

**Observação**: O Turbo Sync pode levar a apagamentos e gravações frequentes no cartão micro SD e só é recomendado quando for necessário.

Se a altura de bloco sincronizada do seu dispositivo estiver muito próxima da blockchain (menos de 200 blocos), o Turbo Sync não é necessário para o seu dispositivo e você não poderá executá-lo.

![Turbo Sync](https://www.sensecapmx.com/wp-content/uploads/2022/07/TS-console.png)

O processo de Turbo Sync pode levar algum tempo para ser concluído e depende da velocidade da rede. Mantenha uma conexão de Internet estável e seja paciente com o processo de sincronização.

**IMPORTANTE**: Não desligue o dispositivo durante o processo de Turbo Sync, caso contrário, o seu dispositivo terá um ledger corrompido na próxima inicialização e começará a sincronizar novamente a partir do último snapshot abençoado. Nesse caso, você terá que repetir o processo de Turbo Sync.

* * *

**Reiniciar**
==========

**Observação**: Você precisará fazer login no Console Local.

Clique no botão laranja "Reboot" para iniciar o processo de reinicialização.

- Quando você vir \[reboot\] request sent + \[reboot going\], o processo foi iniciado.
- Quando você vir "----log stream disconnected from the host----" e "----log stream connected to the host----", você terá concluído o processo de reinicialização.

![Reboot SenseCAP Hotspot](https://www.sensecapmx.com/wp-content/uploads/2022/07/image-4-2.png)

**Observação**: O ledger da Helium Blockchain às vezes é danificado por erros inesperados no cartão micro SD, fazendo com que o processo de sincronização da blockchain pare em um bloco e falhe na sincronização.

Reiniciar o hotspot no Console Local pode ajudar a resolver possíveis erros no cartão micro SD.

**IMPORTANTE**: Não reinicie o hotspot com frequência, apenas o faça quando necessário.

Quando a altura de bloco ficar travada e não aumentar, ou a altura permanecer em -1 ou 1, faça um reset de bloco. Depois de seguir estas etapas, o hotspot estará totalmente sincronizado novamente.

* * *

**Desligar**
=============

Recomenda-se usar o recurso de desligamento antes de desconectar o dispositivo da tomada, a fim de evitar que o dispositivo seja danificado por um desligamento repentino.

**Como Usar o Recurso de Desligamento**

Clique no botão "**Shutdown**" e aceite o prompt.

- O desligamento levará alguns minutos.
- Você verá que o LED azul e os LEDs da porta Ethernet estarão apagados quando o desligamento for concluído.

![SenseCAP Shutdown Feature](https://www.sensecapmx.com/wp-content/uploads/2022/07/image-5-2.png)

**ATENÇÃO**: Confirme que você está ao lado do SenseCAP M1 quando o desligar, pois será necessário reconectar o adaptador se quiser ligar o dispositivo novamente.

* * *

**Resetar Bloco**
===============

**Observação**: Você precisará fazer login no Console Local.

Clique no botão vermelho "**Reset Blocks**" para iniciar o processo de reset de blocos.

![Reset Blocks SenseCAP](https://www.sensecapmx.com/wp-content/uploads/2022/07/reset-blocks.png)

**Observação**: O SenseCAP M1 começará a carregar o último snapshot abençoado. O status no dashboard pode ter atraso e é normal ver temporariamente o status de sincronização "**Unknown**".

Se você precisar executar o Turbo Sync, aguarde até que o último snapshot abençoado seja carregado (cerca de 30 minutos).
