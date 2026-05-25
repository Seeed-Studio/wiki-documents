---
description: balena é uma plataforma IoT versátil que permite aos desenvolvedores criar, implantar e gerenciar aplicações IoT em diversas arquiteturas de dispositivos com facilidade, aproveitando a implantação em contêineres para atualizações contínuas e gerenciamento robusto de dispositivos. O controlador IoT de borda reComputer R1000, alimentado pelo Raspberry Pi CM4, oferece capacidades de alto desempenho para tarefas exigentes de computação de borda. Juntos, balena e reComputer R1000 fornecem uma solução poderosa e escalável para implantação e gerenciamento eficientes e seguros de aplicações IoT em diversos ambientes.
title: reComputer R1000 com balena
keywords:
  - Edge
  - reComputer R1000
  - balena
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /reComputer_r1000_balena
last_update:
  date: 06/17/2024
  author: ShuishengPeng and Kasun Thushara
createdAt: '2024-06-14'
updatedAt: '2026-03-16'
url: https://wiki.seeedstudio.com/pt-br/reComputer_r1000_balena/
---

## O que é balena?

[balena](https://www.balena.io/) é uma plataforma de Internet das Coisas (IoT) projetada para ajudar desenvolvedores a criar, implantar e gerenciar aplicações IoT em uma frota de dispositivos. Ela suporta uma ampla gama de arquiteturas de dispositivos e inclui recursos para implantação de aplicações em contêineres, tornando possível atualizar facilmente seu software IoT e o HostOS, corrigir bugs e introduzir novas funcionalidades em suas aplicações IoT. balena oferece uma forma unificada de enviar atualizações de código, gerenciar configurações de dispositivos e garantir que os dispositivos funcionem de forma confiável e segura em campo, independentemente de sua localização ou das condições de rede.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Edge_Box/balena/balena.png" alt="pir" width="700" height="auto" /></div>

## Primeiros Passos

Antes de iniciar este projeto, você pode precisar preparar seu hardware e software com antecedência, conforme descrito aqui.

### Preparação de Hardware

<div class="table-center">
 <table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg">reComputer R1000</th>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png" style={{width:300, height:'auto'}}/></div></td>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-R1025-10-p-5895.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
          </a></div></td>
        </tr>
    </table>
</div>

### Software

- Uma conta [balenaCloud](https://balena.io) (cadastre-se aqui) e obtenha os 10 primeiros dispositivos gratuitamente.
- [balenaEtcher](https://etcher.balena.io/) para gravar a memória do CM4.

### Configuração de Hardware

**Passo 1**: Você precisa ajustar o interruptor na lateral do R1000 para o modo de boot e então ligar o dispositivo

<div class="table-center">

| Posição do Interruptor                                      | Modo        | Descrição      | nRPI-BOOT |
| ------------------------------------------------------------ | ----------- | -------------- | --------- |
| <img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig141.png" alt="image" width="80"/> | Modo normal | Inicializar do eMMC | Low       |
| <img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig14.png" alt="image" width="80"/>  | Modo de gravação | Inicializar via USB | High      |

</div>

**Passo 2**: Use um cabo USB Tipo-C para conectar o reComputer R1000 ao seu computador.

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/balena/type-cport.png" alt="pir" width="250" height="auto" /></div>

### Obtenção do Arquivo de Imagem

**Passo 1**: Vá para o balenaCloud, crie uma conta gratuita e depois crie uma frota. Para o tipo de dispositivo padrão, escolha `Raspberry Pi CM4 IO Board`

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/balena/create_fleet.gif" alt="pir" width="700" height="auto" /></div>

**Passo 2**: Clique em "Add device", selecione as informações de versão e de configuração que deseja e, em seguida, baixe o arquivo de imagem do balenaOS no canto inferior direito.

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/balena/dowload_img.gif" alt="pir" width="700" height="auto" /></div>

:::note
Recomenda-se baixar primeiro o arquivo de imagem do balenaOS e depois gravá-lo. Se você clicar diretamente em "Flash" no canto inferior direito da janela para gravar, a gravação pode falhar.
:::

### Etapas para Gravar o balena OS

**Passo 1**: Abra o software [**rpiboot**](https://github.com/raspberrypi/usbboot/raw/master/win32/rpiboot_setup.exe) e então o sistema exibirá o novo disco

**Passo 2**: Abra a ferramenta de gravação [balenaEtcher](https://etcher.balena.io/), selecione o arquivo de imagem do balena baixado anteriormente, depois selecione o disco de destino e, por fim, clique em Burn.

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/balena/burn_image.gif" alt="pir" width="700" height="auto" /></div>

### Alterar Configuração

**Passo 1**:Copie o arquivo [reComputer-R100x.dtbo](https://files.seeedstudio.com/wiki/reComputer-R1000/balena/reComputer-R100x.dtbo) para a pasta `resin-boot => overlays`

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/balena/dtbo_file.png" alt="pir" width="700" height="auto" /></div>

**Passo 2**:Adicione o seguinte conteúdo ao arquivo `config.txt`:

```shell
dtparam=i2c_arm=on
dtoverlay=i2c1,pins_44_45
dtoverlay=i2c3,pins_2_3
dtoverlay=i2c6,pins_22_23
dtoverlay=audremap,pins_18_19
dtoverlay=reComputer-R100x,uart2
```

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/balena/change_config.png" alt="pir" width="700" height="auto" /></div>

**Passo 3**:Defina o DIP switch do reComputer R1000 para o modo normal e depois ligue novamente. Após algum tempo, você poderá ver que o novo dispositivo foi adicionado com sucesso no balenaCloud.

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/balena/device_online.png" alt="pir" width="700" height="auto" /></div>

Se o dispositivo estiver `Online (Heartbeat only)`. Isso se deve às restrições de firewall na minha região. Se você tiver o mesmo problema, pode conectar um VPN ao dispositivo para que ele possa ser exibido normalmente como `Online`.

### Teste de Implantação

**Passo 1**:Digite o seguinte comando para baixar os recursos e implantá-los:

```shell
balena login
git clone https://github.com/mpous/seeed-recomputer-r100x.git
cd seeed-recomputer-r100x
balena push recomputerR1000
```

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/balena/push_program.png" alt="pir" width="700" height="auto" /></div>

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/balena/updating_two.png" alt="pir" width="700" height="auto" /></div>

**Passo 2**:Após a conclusão da implantação, um unicórnio aparecerá no terminal e o status de todos os serviços mudará para `Running`.

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/balena/unicorn.png" alt="pir" width="700" height="auto" /></div>

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/balena/Deployment_Complete.png" alt="pir" width="700" height="auto" /></div>

## Suporte Técnico & Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
