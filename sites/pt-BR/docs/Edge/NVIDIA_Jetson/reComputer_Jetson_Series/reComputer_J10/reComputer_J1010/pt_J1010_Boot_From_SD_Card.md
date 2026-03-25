---
description: J1010 Inicialização pelo Cartão SD
title: J1010 Inicialização pelo Cartão SD
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /J1010_Boot_From_SD_Card
sku: 102991694
last_update:
  date: 01/05/2023
  author: w0x7ce
no_comments: false
createdAt: '2023-01-05'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/J1010_Boot_From_SD_Card/
---

# J1010 Inicialização pelo Cartão SD

## Primeiros Passos

Precisamos ler estes dois artigos antes de começar. Certifique-se de que o sistema J1010 foi gravado corretamente e que o driver do cartão SD foi instalado adequadamente.

- [J1010/J101 Flash Jetpack](https://wiki.seeedstudio.com/pt-br/reComputer_J1010_J101_Flash_Jetpack/)
- [J101_Enable_SD_Card](https://wiki.seeedstudio.com/pt-br/J101_Enable_SD_Card/)

## Gravando o Sistema do J101 para o Cartão SD

Primeiro, precisamos clonar o script que inclui as ferramentas de que precisamos.

```bash
git clone https://github.com/limengdu/bootFromUSB
```

Em segundo lugar, precisamos ter certeza de que o cartão SD está no formato ext4, o que pode ser visto visualmente na ferramenta "disk"; se não for ext4, precisamos formatá-lo e alterá-lo para o formato ext4.

Clique na área azul e depois clique na área verde para selecionar "Format Partiton"

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Boot_NVIDIA_System_from_SD_card_for_Jetson101/disk_fix_1.jpg" /></div>


Clique na área verde para selecionar "Internal disk for use with Linux systems only (Ext4)"
Preencha o nome que você deseja em "Volume Name" na área amarela.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Boot_NVIDIA_System_from_SD_card_for_Jetson101/disk_fix_2.jpg" /></div>

Assim, podemos ver que o formato do cartão SD foi alterado para ext4.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Boot_NVIDIA_System_from_SD_card_for_Jetson101/disk_view_1.png" /></div>


Em seguida, vá para o diretório do script e execute o seguinte comando assim

```bash
cd bootFromUSB
./copyRootToUSB.sh -p /dev/mmcblk1p1
```

Aguarde um pouco, apenas até que termine automaticamente; se nenhum erro for reportado, a gravação estará concluída.

## Configuração de Inicialização

Depois que o driver tiver sido instalado e configurado com sucesso, podemos simplesmente visualizá-lo por meio do comando como "lsblk" ou visualizar o dispositivo em "/dev".

### Alterar dispositivo de inicialização

Devemos alterar a configuração em "/boot/extlinux/extlinux.conf".

- Inicializar a partir do cartão SD

    Depois de inicializarmos a partir da eMMC na placa carrier, queremos modificá-la para inicializar a partir do cartão SD. Precisamos ter certeza de que o processo anterior, incluindo a gravação do sistema no cartão SD, e os drivers do cartão SD foram instalados corretamente. Modifique os parâmetros após `root` para o endereço do dispositivo a partir do qual estamos inicializando. Quando tivermos concluído nossas alterações, reinicie o sistema.

    **Antes de reiniciar Modificar "/boot/extlinux/extlinux.conf" Depois de reiniciar ver "/media/seeed/\{xxx-xxx\}/boot/extlinux/extlinux.conf"**

    <div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Boot_NVIDIA_System_from_SD_card_for_Jetson101/config_3.png" /></div>

    :::note
    Nosso arquivo de configuração após inicializar o sistema a partir do cartão SD é "/media/seeed/\{xxx-xxx\}/boot/extlinux/extlinux.conf" e o arquivo de configuração após inicializar o sistema a partir da eMMC onboard está em "/boot/extlinux/extlinux.conf". Eles são o mesmo arquivo do qual o dispositivo lê a configuração e escolhe de onde inicializar o sistema após energizar, e os caminhos relativos mudam quando o sistema termina a inicialização.
    :::

- Inicializar a partir da eMMC da placa

    Queremos voltar a inicializar a partir da eMMC depois de inicializar a partir de um cartão SD ou precisamos trocar o cartão SD para algum propósito. Então precisamos primeiro alterar o dispositivo de volta para inicializar a partir da eMMC. Devemos fazer as seguintes alterações.

    **Antes de reiniciar Modificar "/media/seeed/\{xxx-xxx\}/boot/extlinux/extlinux.conf" Depois de reiniciar ver "/boot/extlinux/extlinux.conf"**

    <div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Boot_NVIDIA_System_from_SD_card_for_Jetson101/config_4.png" /></div>


Por fim, verificamos que realmente funciona bem.

- Inicializar a partir da eMMC

    <div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Boot_NVIDIA_System_from_SD_card_for_Jetson101/lsblk_emmc.png" /></div>

- Inicializar a partir do cartão SD

    <div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Boot_NVIDIA_System_from_SD_card_for_Jetson101/lsblk_sd.png" /></div>


## Suporte Técnico & Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
