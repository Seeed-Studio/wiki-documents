---
description: ODYSSEY - X86J41x5
title: Adicionando Acessórios
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ODYSSEY-X86J4105-Accessories
last_update:
  date: 01/03/2023
  author: w0x7ce
createdAt: '2023-01-05'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/ODYSSEY-X86J4105-Accessories/
---

# Adicionando Acessórios ao ODYSSEY - X86J41x5

Este wiki apresenta como adicionar diferentes acessórios ao ODYSSEY - X86J41x5 para aumentar o desempenho e atender às suas necessidades. Por exemplo, você pode estar usando o ODYSSEY-X86J41x5 para um cenário que exija mais recursos gráficos, daí a necessidade de **adicionar uma GPU externa para alto desempenho.** Ou, em alguns casos, como em um NAS, você pode preferir **dois discos rígidos HDD em vez de usar SSD por questões de estabilidade.**

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/driver-installed-2.png" /></div>

## 1. Adicionando Armazenamento Adicional via PCIe para SATA III (Discos Rígidos HDD)

No ODYSSEY-X86J41x5, há **1 SSD M.2 SATA, 1 SSD M.2 PCIe e 1 conector SATA III com 3 conectores de energia SATA III.** Para uso padrão, esses conectores são suficientes. No entanto, para um uso mais industrial, é preferível utilizar HDD em vez de SSD. Aqui é demonstrado como conectar mais de 1 HDD ao ODYSSEY-X86J41x5.

### Materiais Necessários

- **Adaptador M.2 PCIe para SATA**

- Discos Rígidos HDD (Máximo de 3 HDD suportados no ODYSSEY-X86J41x5)

Para conectar mais HDD ao ODYSSEY-X86J41x5, precisamos de um componente extra, um adaptador M.2 PCIe para SATA que pode converter o slot M.2 PCIe em um conector de dados SATA. Este adaptador pode ser comprado comumente no mercado de eletrônicos.

### Instruções de Hardware

- Conecte o adaptador M.2 PCIe para SATA ao slot PCIe do ODYSSEY-X86J41x5 e conecte o cabo de dados do HDD nele, como mostrado abaixo. Conecte o cabo de alimentação do HDD a um dos três conectores de energia SATA III.

<div>
  <div align="center"><img src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/HDD.jpg" /></div>
  <br />
</div>

- Você pode ter no máximo 3 discos rígidos HDD conectados ao ODYSSEY-X86J41x5. Inicialize os dispositivos e verifique se os discos rígidos aparecem no sistema operacional.

### Resultado

Depois que o sistema operacional for iniciado, você deverá ver os discos rígidos.
<div>
  <div align="center"><img width="{500}" src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/HDD-OS.png" /></div>
  <br />
</div>

Agora você não precisa mais se preocupar com o problema de armazenamento!

## 2. Adicionando uma GPU Externa ao ODYSSEY-X86J41x5

Para adicionar uma GPU externa ao ODYSSEY-X86J41x5 e aumentar o desempenho, você também vai precisar de um componente extra.

### Materiais Necessários

- **Adaptador M.2 PCIe x4 para PCIe x16**

- **Alimentação DC para a GPU**

Os componentes ainda não estão disponíveis para venda pela Seeed, então, por favor, seja paciente por enquanto ou adquira-os no mercado de eletrônicos. Certifique-se de que o adaptador é adequado para uso com GPU.

### Configuração Inicial da BIOS

Algumas configurações na BIOS são necessárias para habilitar a GPU:

1.Entre no menu da BIOS mantendo a tecla **DEL** pressionada ao iniciar.

2.Navegue até **Advanced** -> **CSM Support** e pressione Enter para habilitá-lo.

<div>
  <div align="center"><img width="{500}" src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/biosSetting.jpg" /></div>
  <br />
</div>

3.Navegue até **Chipset** -> **Primary Display** e selecione **PCIe** e pressione Enter.

<div>
  <div align="center"><img width="{500}" src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/chipset.png" /></div>
  <br />
</div>

Salve as configurações da BIOS e desligue o dispositivo.

### Instruções de Hardware

- Insira sua GPU na extremidade PCIe x16 do adaptador.

- Insira o adaptador no slot M.2 PCIe do ODYSSEY-X86J41x5,

- A GPU também precisa de uma alimentação externa; aqui eu usei um conector DIY de 4 pinos para jack DC para fornecer a alimentação de 12 V **(Apenas faça isso se você souber o que está fazendo)**. Também existem no mercado conectores de 4 pinos para jack DC que você pode comprar.

<div>
  <div align="center"><img width="{500}" src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/GPU-connect.jpg" /></div>
  <br />
</div>

- Conecte o HDMI à GPU em vez do ODYSSEY-X86J41x5.

:::note
Por favor, tenha cuidado durante a conexão de hardware. Certifique-se de que tudo está conectado corretamente antes de ligar a alimentação ou você poderá correr o risco de danificar os componentes.
:::

### Instalando o Driver da GPU

Se tudo correr bem, o dispositivo deverá inicializar corretamente e entrar no sistema operacional. Mas também é necessário instalar os drivers da GPU no sistema. Se você for usuário de Windows isso será muito fácil. Aqui demonstrarei a instalação de drivers de GPU (Nvidia) no Ubuntu (Linux) como referência.

1.Abra o terminal e digite o seguinte comando para verificar a GPU:

```bash
lspci | grep -i vga
```

<div>
  <div align="center"><img width="{500}" src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/lspci.png" /></div>
  <br />
</div>

Aqui podemos ver duas GPUs, uma é a GPU onboard e a outra é a GPU externa (GTX 750).

2.Primeiro, precisamos desabilitar os serviços **nouveau** no Ubuntu. No Terminal, use `nano` ou `vim` para abrir o `/etc/modprobe.d/blacklist.conf`.

```bash
sudo nano /etc/modprobe.d/blacklist.conf
```

<div>
  <div align="center"><img width="{500}" src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/block-1.png" /></div>
  <br />
</div>

3.Adicione o seguinte código ao final e salve as alterações.

```bash
blacklist nouveau
options nouveau modeset=0
```

<div>
  <div align="center"><img width="{500}" src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/block-2.png" /></div>
  <br />
</div>

4.Execute o seguinte comando para atualizar:

```bash
sudo update-initramfs -u
```

<div>
  <div align="center"><img width="{500}" src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/block-3.png" /></div>
  <br />
</div>

5.Reinicie o dispositivo para aplicar as alterações e execute o comando a seguir; se nada aparecer, então o serviço está desabilitado.

```bash
lsmod | grep nouveau
```

6.Agora podemos usar o comando embutido do Ubuntu para verificar os drivers necessários para a GPU externa:

```bash
ubuntu-drivers devices
```

<div>
  <div align="center"><img width="{500}" src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/drivers.png" /></div>
  <br />
</div>

Isso determinará o modelo da GPU e recomendará os drivers para ela. Aqui foi recomendado o nvidia-driver-435 para a GPU externa.

7.Instale automaticamente o driver usando o seguinte comando e reinicie o dispositivo para que tenha efeito.

```bash
sudo ubuntu-drivers autoinstall
```

Agora, o driver deve estar instalado no ODYSSEY-X86J4105! Você pode verificar o status da GPU executando o seguinte comando no Terminal.

```bash
nvidia-smi
```

<div>
  <div align="center"><img width="{500}" src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/driver-installed-1.png" /></div>
  <br />
</div>

Ou simplesmente vá para as configurações:

<div>
  <div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/driver-installed-2.png" /></div>
  <br />
</div>

Agora aproveite o ODYSSEY-X86J41x5 turbinado e pronto para mergulhar no campo de IA, onde é necessária muita potência de GPU!

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
