---
description: Este tutorial mostrará como compilar, configurar e gravar o balenaOS para o recomputer AI Box.
title: Construir balenaOS para reComputer AI R2140
keywords:
  - Borda
  - reComputer R2140
  - balena
image: https://files.seeedstudio.com/wiki/00_AI_Sensing/Application/balena/recomputer_ai_box/recomputer_ai_r2140.webp
slug: /recomputer_ai_r2140_balena
sku: 114993560,114993627
last_update:
  date: 11/4/2025
  author: JiahaoLi
createdAt: '2025-11-04'
updatedAt: '2026-03-20'
url: https://wiki.seeedstudio.com/pt-br/recomputer_ai_r2140_balena/
---

[balena](https://www.balena.io/) é uma plataforma de Internet das Coisas (IoT) projetada para ajudar desenvolvedores a criar, implantar e gerenciar aplicações de IoT em uma frota de dispositivos. Ela suporta uma ampla gama de arquiteturas de dispositivos e inclui recursos para implantação de aplicações conteinerizadas, tornando possível atualizar facilmente seu software de IoT e o HostOS, corrigir bugs e introduzir novos recursos em suas aplicações de IoT. O balena fornece uma maneira unificada de enviar atualizações de código, gerenciar configurações de dispositivos e garantir que os dispositivos funcionem de forma confiável e segura em campo, independentemente de sua localização ou das condições de rede.


<div align="center"><img src="https://files.seeedstudio.com/wiki/Edge_Box/balena/balena.png" alt="pir" width="700" height="auto" /></div>

## Primeiros Passos

Antes de iniciar este projeto, talvez você precise preparar seu hardware e software com antecedência, conforme descrito aqui.

### Preparação de Hardware


<div class="table-center">
 <table align="center">
 <tr>
  <th>reComputer AI R2140</th>
 </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/q/q/qq_1.jpg" style={{width:600, height:'auto'}}/></div></td>
    </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-AI-R2140-12-p-6431.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

>Nota: Prepare um cartão SD e um leitor de cartões para gravar a imagem.

### Software

- Uma conta no [balenaCloud](https://balena.io) (cadastre-se aqui) e obtenha os primeiros 10 dispositivos gratuitamente.

<div align="center"><img src="https://files.seeedstudio.com/wiki/00_AI_Sensing/Application/balena/recomputer_ai_box/balena.png" alt="pir" width="800" height="auto" /></div>

- [balenaEtcher](https://etcher.balena.io/) para gravar a memória do reComputer R2140.

<div align="center"><img src="https://files.seeedstudio.com/wiki/00_AI_Sensing/Application/balena/recomputer_ai_box/balenaEtcher.png" alt="pir" width="800" height="auto" /></div>

### Criar frota no balena cloud

Consulte o processo na imagem abaixo para criar a frota：

<div align="center"><img src="https://files.seeedstudio.com/wiki/00_AI_Sensing/Application/balena/recomputer_ai_box/creat_fleet.png" alt="pir" width="800" height="auto" /></div>

### Adicionar dispositivo

Consulte o processo na imagem abaixo para adicionar um novo reComputer AI R2140：

<div align="center"><img src="https://files.seeedstudio.com/wiki/00_AI_Sensing/Application/balena/recomputer_ai_box/add_device.png" alt="pir" width="800" height="auto" /></div>

### Instalar balena OS

Consulte o processo na imagem abaixo para instalar o balena OS：
<div align="center"><img src="https://files.seeedstudio.com/wiki/00_AI_Sensing/Application/balena/recomputer_ai_box/install_image.png" alt="pir" width="800" height="auto" /></div>


### Gravar balena OS

Consulte o processo na imagem abaixo para gravar o balena OS no cartão SD：

<div align="center"><img src="https://files.seeedstudio.com/wiki/00_AI_Sensing/Application/balena/recomputer_ai_box/flash_image.png" alt="pir" width="800" height="auto" /></div>


A imagem abaixo mostra como fica depois que a gravação é concluída：

<div align="center"><img src="https://files.seeedstudio.com/wiki/00_AI_Sensing/Application/balena/recomputer_ai_box/finish_image.png" alt="pir" width="800" height="auto" /></div>


### Testar dispositivo

Insira o cartão SD gravado na reComputer AI Box, depois ligue-o e conecte o cabo Ethernet. Após 2 minutos, você deverá conseguir ver o novo dispositivo no Balena Cloud.

<div align="center"><img src="https://files.seeedstudio.com/wiki/00_AI_Sensing/Application/balena/recomputer_ai_box/test_device.png" alt="pir" width="800" height="auto" /></div>


Quando você clicar no dispositivo, entrará na tela mostrada na imagem abaixo, o que significa que você pode controlar o dispositivo remotamente.

<div align="center"><img src="https://files.seeedstudio.com/wiki/00_AI_Sensing/Application/balena/recomputer_ai_box/resul.png" alt="pir" width="800" height="auto" /></div>


## Suporte Técnico & Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
