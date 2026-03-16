---
description: BeagleBone® Green HDMI Cape
title: BeagleBone® Green HDMI Cape
keywords:
  - Beagle_Bone
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /BeagleBone_Green_HDMI_Cape
sku: 103030034
last_update:
  date: 1/10/2022
  author: jianjing Huang
createdAt: '2023-01-10'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/BeagleBone_Green_HDMI_Cape/
---

![](https://files.seeedstudio.com/wiki/BeagleBone_Green_HDMI_Cape/img/BeagleBone_Green_HDMI_Cape.jpg)

**BeagleBone® Green HDMI Cape** é um conector HDMI integrado geral para expandir seu BeagleBone® para uma grande variedade de periféricos, como monitor de computador, projetor de vídeo, televisão digital ou dispositivo de áudio digital. Esta placa possui um conector HDMI padrão que pode ser ligado a um monitor com um cabo HDMI‑para‑HDMI padrão. Todos os sinais HD são suportados e a resolução de saída é 1280×720. Ela também pode ser usada para transmitir informações de áudio. Este produto tornará suas aplicações baseadas na placa BeagleBone® mais versáteis para diferentes situações.

[![](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://www.seeedstudio.com/depot/BeagleBone-Green-HDMI-Cape-p-2570.html)

Recursos
--------

- Plug and play.
- Adaptador para diferentes sinais de entrada.
- Resolução de saída 720P(1280×720).

Especificações
-------------

| Parâmetro                | Valor                                                                                                  |
|--------------------------|--------------------------------------------------------------------------------------------------------|
| Tensão de entrada        | 5V/3.3V                                                                                                |
| Corrente máxima de operação | 80 mA                                                                                                  |
| Versão HDMI              | Versão 1.2                                                                                             |
| Resolução máxima de saída | 1280x720 @60Hz                                                                                         |
| Transmissão de áudio     | Disponível                                                                                             |
| Chip                     | IT66121 HDMI Framer([Datasheet](https://files.seeedstudio.com/wiki/BeagleBone_Green_HDMI_Cape/res/IT66121FN_Datasheet_v1.02.pdf)) |

Plataformas suportadas
-------------------

Ideias de aplicação
-----------------

Você pode expandir seu BeagleBone® para mais periféricos multimídia, como monitor de computador, projetor de vídeo, televisão digital ou dispositivo de áudio digital.

Visão geral de hardware
-----------------

![](https://files.seeedstudio.com/wiki/BeagleBone_Green_HDMI_Cape/img/BeagleBone_Green_HDMI_Cape_Componentss.jpg)

**IT66121 HDMI Framer**

- Transmissor HDMI

**Chave de endereço I2C da Cape**

- Para alternar entre diferentes identificadores de endereço da cape.

**EEPROM da Cape**

- Memória EEPROM para esta cape.

**Conector HDMI**

### Lista de peças

|                            |          |
|----------------------------|----------|
| **Nome da peça**           | Quantidade |
| BeagleBone® Green HDMI Cape | 1        |

Primeiros passos
-----------

***Esta parte mostrará como começar a usar este produto em poucos passos.***

### Preparação

- Placa BeagleBone® Green × 1.
- Cabo USB (tipo A para micro tipo B) × 1.
- Cabo HDMI padrão(tipo A para tipo A) × 1.

### Conexão de hardware

- Passo 1. Siga a imagem abaixo para conectar o hardware.
![](https://files.seeedstudio.com/wiki/BeagleBone_Green_HDMI_Cape/img/BeagleBone_Green_HDMI_Cape_Connection_1200_s.jpg)

- Passo 2. Conecte a extremidade tipo C do cabo USB ao seu PC.

### Software

- Passo 1. Baixe a imagem [Debian 8.10 2018-02-01 4GB SD SeeedStudio IoT](https://debian.beagleboard.org/images/bone-debian-8.10-seeed-iot-armhf-2018-02-01-4gb.img.xz) a partir de beaglebone.org.
- Passo 2. Use o [Etcher](https://etcher.io/) para gravar as imagens nos cartões SD.
- Passo 3. Podemos ver a linha de comando do Linux na tela.
- Passo 4. Se quisermos usar a interface gráfica. Siga as instruções abaixo para instalar o lxde.

```
sudo apt-get update 
sudo apt-get install lxde lxde-core lxde-icon-theme
```

#### Solução de problemas

1. O sistema operacional de desktop do BeagleBone® não é exibido no monitor do computador? Tente um dos seguintes passos.

    - Desligue o monitor e reinicie-o.
    - Pressione o botão RESET na placa BeagleBone® Green.
    - Pressione o botão POWER na placa BeagleBone® Green e depois pressione-o novamente.

    ![](https://files.seeedstudio.com/wiki/BeagleBone_Green_HDMI_Cape/img/Beaglebone-Green_s.jpg)

2. O mouse do computador não funciona (sem alimentação)?
    - Pressione o botão RESET na placa BeagleBone® Green e aguarde ela iniciar.

3. Como desmontar a BeagleBone® Green HDMI Cape rapidamente?
    - Puxe (com a mão) primeiro a extremidade com o conector HDMI para fora, depois puxe a outra extremidade para fora. Repita os dois passos anteriores novamente, se necessário.

4. Se a interface gráfica lxde continuar pedindo a senha do wicd, siga as instruções abaixo.

    - Passo 1. Ignore isso.
    - Passo 2. Abra o terminal e execute os comandos abaixo.

    ```
    rm /etc/resolv.conf
    ln -s /run/resolvconf/resolv.conf
    rm /var/lib/wicd/resolv.conf.orig
    ln -s /run/resolvconf/resolv.conf /var/lib/wicd/resolv.conf.orig
    sudo service wicd start
    sudo reboot
    ```

    - Passo 3. Use a ferramenta gráfica wicd para conectar ao Wi‑Fi.
    - Passo 4. Podemos usar Wi‑Fi, ferramentas SSH.

Demo
----

Este [vídeo](https://www.youtube.com/watch?v=-xvbXSd_9TY&feature=youtu.be) mostra como usar a BeagleBone® Green HDMI Cape para navegar na Internet e reproduzir áudio.

## Visualizador de esquemático online

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/BeagleBone_Green_HDMI_Cape/res/Schematic_Files.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

Recursos
---------

- [Arquivos de esquemático](https://files.seeedstudio.com/wiki/BeagleBone_Green_HDMI_Cape/res/Schematic_Files.zip)
- [Imagem Beaglebone HDMI Cape](https://drive.google.com/open?id=15wXOtG4pZMifNoldoSvdOX9sBrev733L)

<!-- This Markdown file was created from https://www.seeedstudio.com/wiki/BeagleBone_Green_HDMI_Cape -->

## Suporte técnico e discussão de produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

