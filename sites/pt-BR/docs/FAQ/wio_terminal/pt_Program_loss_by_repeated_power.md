---
description: Wio Terminal - Perguntas Frequentes
title: Como evitar a perda do programa após reiniciar o Wio Terminal várias vezes
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Program_loss_by_repeated_power
date: 1/31/2024
author: Seraphina
createdAt: '2024-01-31'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Program_loss_by_repeated_power/
---


Se você encontrar uma situação em que o **Wio Terminal não inicializa corretamente após várias reinicializações**, consulte o seguinte Wiki para uma solução:

Durante o processo de ligar/desligar, se o programa do bootloader tentar acessar a memória flash antes que o chip tenha se estabilizado, isso pode resultar em perda de dados inesperada. Essa situação pode impedir o programa de aplicação de iniciar porque o bootloader não consegue ler corretamente o código da aplicação ou os dados armazenados na memória flash.

Para resolver esse problema, recomendamos atualizar o bootloader para a seguinte versão para garantir que ele só acesse a memória flash depois que o chip estiver estabilizado. Siga as etapas abaixo para obter orientação:

**Passo 1:** Baixe o Bootloader mais recente [aqui](https://files.seeedstudio.com/wiki/Wio-Terminal/res/update-bootloader-wio_terminal-v3.15.0-4-gaa4429b.uf2)

**Passo 2:** Conecte o Seeeduino Wio Terminal ao seu PC via USB Type-C.

**Passo 3:** Entre no modo bootloader deslizando o botão liga/desliga duas vezes rapidamente. Para mais referências, consulte também [aqui](https://wiki.seeedstudio.com/pt-br/Wio-Terminal-Getting-Started/#enter-bootloader)

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Wio-Terminal-Bootloader.png" /></div>

**Passo 4:** Uma unidade externa chamada `Arduino` deve aparecer no seu PC. Arraste o arquivo baixado [`update-bootloader-wio_terminal-v3.15.0-4-gaa4429b.uf2`](https://files.seeedstudio.com/wiki/Wio-Terminal/res/update-bootloader-wio_terminal-v3.15.0-4-gaa4429b.uf2) para a unidade `Arduino`.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/update-bootloader-version.png" /></div>


Agora que você atualizou com sucesso o seu Bootloader, sinta-se à vontade para aproveitar o uso do seu Wio Terminal!