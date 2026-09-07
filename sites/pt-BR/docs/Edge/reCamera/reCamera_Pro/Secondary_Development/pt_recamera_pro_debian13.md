---
description: Grave a imagem Debian 13 na reCamera Pro
title: Gravar a imagem Debian 13 na reCamera Pro
keywords:
  - reCamera
  - reCamera Pro
  - RV1126B
  - Debian 13
slug: /recamera_pro_debian
sku: 10003420
sidebar_position: 2
last_update:
  date: 09/04/2026
  author: yylin
createdAt: '2026-08-04'
updatedAt: '2026-08-04'
url: https://wiki.seeedstudio.com/pt-br/recamera_pro_debian/
---

## Introdução

A reCamera Pro é alimentada pelo chip RV1126B e está disponível com 2 GB ou 4 GB de memória. Ela vem com firmware Buildroot para um início rápido com inferência de IA. Esta página fornece uma imagem Debian 13 para usuários que precisam de mais flexibilidade para desenvolvimento e implantação.

Após gravar a imagem Debian 13, você pode compilar seus próprios aplicativos com CMake, instalar as dependências necessárias com `apt` e executar contêineres Docker. A imagem é compatível com os drivers de fábrica da Seeed e não requer alterações na device tree. A câmera, o microfone, o alto-falante e o Wi-Fi funcionam conforme o esperado; Bluetooth não é suportado.

:::warning
Este firmware é atualmente experimental. A Seeed não o mantém neste momento; ele é fornecido como uma opção adicional de desenvolvimento.
:::

## Downloads

### Baixar a imagem

[Baixe a imagem Debian 13 do Google Drive](https://drive.google.com/file/d/1qLlbsgUB88qC2xBn4-Decl8XBZgr7EI/view?usp=drive_link).

### Baixar a ferramenta de gravação e o driver

Este guia usa o SocToolKit no Windows para gravar a imagem. Baixe os seguintes arquivos:

- [Driver (DriverAssistant_v5.12.zip)](https://drive.google.com/file/d/1_Efm8nJlQivU2F7BgVokVPfGUl12fI6E/view?usp=drive_link)
- [Ferramenta de gravação (SocToolKit-window.zip)](https://drive.google.com/file/d/1wFMHF_KSmbTPvuaAefqutDP-DPQ_NONp/view?usp=drive_link)

## Preparar para a gravação

### Instalar o driver

1. Extraia o arquivo `DriverAssistant_v5.12.zip` baixado.
2. Abra o diretório extraído e execute `DriverInstall.exe`.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/Secondary_Development/debian13/image.png" /></div>

3. Clique em **Driver Install**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/Secondary_Development/debian13/image-1.png" /></div>

A tela a seguir indica que o driver foi instalado com sucesso.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/Secondary_Development/debian13/image-2.png" /></div>

### Configurar o SocToolKit

1. Extraia `SocToolKit-window.zip`, abra o diretório extraído e execute `SocToolKit.exe`.
2. Selecione o chip **RV1126B** na ferramenta.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/Secondary_Development/debian13/image-3.png" /></div>

3. Extraia `recamera_pro_debian13_img.tar.gz`.
4. No SocToolKit, clique com o botão direito e selecione o último item no menu de contexto.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/Secondary_Development/debian13/image-5.png" /></div>

5. Selecione o arquivo `env.img` no diretório de firmware extraído.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/Secondary_Development/debian13/image-6.png" /></div>

6. Clique em **Yes** na caixa de diálogo de confirmação.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/Secondary_Development/debian13/image-7.png" /></div>

7. Selecione a entrada `rootfs` e clique na reticência (`...`) à sua direita. Substitua seu arquivo de imagem por `rootfs_debian_clean.img` do diretório de firmware extraído.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/Secondary_Development/debian13/image-11.png" /></div>

### Colocar a reCamera Pro em modo Loader

1. Conecte a porta USB 3.0 da reCamera Pro ao seu computador Windows usando um cabo USB e, em seguida, alimente o dispositivo pela porta DC.
2. Localize os orifícios dos pinos `BOOT` e `RESET` na lateral do dispositivo.
3. Pressione e segure `BOOT`, depois pressione rapidamente `RESET` para reiniciar o dispositivo.
4. Continue segurando `BOOT` por aproximadamente 5 segundos após pressionar `RESET` e depois solte. O dispositivo entra no modo Loader.

O SocToolKit agora deve indicar que o dispositivo foi detectado.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/Secondary_Development/debian13/image-8.png" /></div>

### Gravar o firmware

Depois que o SocToolKit detectar o dispositivo e carregar o firmware, selecione todas as partições, exceto `userdata`.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/Secondary_Development/debian13/image-12.png" /></div>

Clique em **Download** para iniciar a gravação do firmware.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/Secondary_Development/debian13/image-13.png" /></div>

Quando a gravação for concluída, a interface deve se parecer com a seguinte:

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/Secondary_Development/debian13/image-14.png" /></div>

## Sobre o novo firmware

Após a gravação, conecte o dispositivo à sua rede usando um cabo Ethernet. Esta imagem não oferece suporte ao adaptador de rede virtual USB-C original. Você pode encontrar o endereço IP do dispositivo no seu roteador ou na interface de gerenciamento de Wi-Fi. O SSH está habilitado na imagem, portanto você pode fazer login diretamente via SSH. Se uma conexão de rede não estiver disponível, use o console serial UART com baud rate de `1500000`.

O sistema fornece apenas o usuário `root`, com a senha padrão `123123`. Altere a senha imediatamente após o primeiro login:

```bash
passwd
```

Em seguida, conclua as seguintes etapas de configuração do sistema.

## Configurar temporariamente um proxy HTTP

Se você precisar de um proxy HTTP para acessar a rede, por exemplo ao usar `apt`, defina temporariamente as seguintes variáveis de ambiente. Pule esta etapa se você não usar um proxy. Substitua o endereço e a porta de exemplo pelos do seu servidor proxy.

```bash
export http_proxy="http://192.168.4.78:7890"
export https_proxy="http://192.168.4.78:7890"
# Optional: bypass the proxy for local addresses
export no_proxy="localhost,127.0.0.1,::1,192.168.0.0/16"
```

## Configurar a hora

Na primeira inicialização, a hora do sistema pode estar definida para 1970, o que faz com que a validação de certificados SSL falhe. Como o sistema não possui sincronização automática de horário configurada via systemd, defina manualmente a hora correta antes de atualizar o índice de pacotes:

```bash
date -s "2026-09-02 15:20:00"

apt update
```

### Configurar a orientação da câmera

Primeiro, encontre o nó do sensor que oferece suporte a controles de flip:

```bash
for dev in /dev/v4l-subdev*; do
    echo
    echo "========== $dev =========="
    v4l2-ctl -d "$dev" --list-ctrls 2>&1 | \
        grep -Ei 'flip|mirror|horizontal|vertical|rotate'
done
```

Normalmente, você verá uma saída semelhante à seguinte:

```bash
========== /dev/v4l-subdev2 ==========
                horizontal_flip 0x00980914 (bool)   : default=0 value=1
                  vertical_flip 0x00980915 (bool)   : default=0 value=1
              vertical_blanking 0x009e0901 (int)    : min=90 max=63375 step=1 default=90 value=90
            horizontal_blanking 0x009e0902 (int)    : min=4294965822 max=4294965822 step=1 default=4294965822 value=-1474 flags=read-only
```

Por padrão, tanto o flip horizontal quanto o vertical podem estar habilitados. Ajuste o comando de acordo com o nó de dispositivo mostrado na saída anterior; este exemplo usa `/dev/v4l-subdev2`:

```bash
v4l2-ctl -d /dev/v4l-subdev2 \
  --set-ctrl=horizontal_flip=0,vertical_flip=0
```

Verifique as configurações:

```bash
v4l2-ctl -d /dev/v4l-subdev2 \
  --get-ctrl=horizontal_flip,vertical_flip
```

Saída esperada:

```bash
horizontal_flip: 0
vertical_flip: 0
```

## Testar a câmera

Use V4L2 para capturar um quadro bruto NV12 e, em seguida, use o FFmpeg para convertê-lo em JPEG:

```bash
v4l2-ctl -d /dev/video12 \
  --set-fmt-video=width=3840,height=2160,pixelformat=NV12 \
  --stream-mmap=4 \
  --stream-count=1 \
  --stream-to=/tmp/frame.nv12

ffmpeg \
  -f rawvideo \
  -pixel_format nv12 \
  -video_size 3840x2160 \
  -i /tmp/frame.nv12 \
  -frames:v 1 \
  -q:v 2 \
  -y /tmp/camera.jpg
```

Quando o comando terminar, visualize a imagem JPEG, processada pelo ISP e com orientação correta, em `/tmp/camera.jpg`.

## Configurar o microfone e o alto-falante

Instale as dependências necessárias:

```bash
apt install ffmpeg alsa-utils
```

Veja os dispositivos de gravação e reprodução disponíveis:

```bash
arecord -l

aplay -l
```

## Configurar o Docker

Instale o Docker:

```bash
apt install docker-cli
```

Confirme se o Docker foi instalado corretamente:

```bash
command -v docker
docker --version
dockerd --version
```

A saída esperada é semelhante a:

```bash
/usr/bin/docker
Docker version 26.1.5+dfsg1, build a72d7cd
Docker version 26.1.5+dfsg1, build 411e817
```

### Configurar o Docker

Crie o arquivo de configuração do daemon do Docker para definir o diretório de dados e desabilitar a rede padrão:

```bash
cat >/etc/docker/daemon.json <<'EOF'
{
  "data-root": "/userdata/docker",
  "storage-driver": "overlay2",
  "iptables": false,
  "bridge": "none"
}
EOF
```

Pare o Docker e remova arquivos de runtime remanescentes:

```bash
service docker stop 2>/dev/null || true

rm -f /var/run/docker.pid
rm -f /var/run/docker.sock
rm -rf /var/run/docker/containerd
```

Reinicie o Docker:

```bash
service docker restart
```

### Testar o Docker

Confirme se o daemon do Docker está em execução:

```bash
ps aux | grep '[d]ockerd'
```

Execute um contêiner de teste:

```bash
docker run --rm hello-world
```

Se o Docker estiver configurado corretamente, a saída incluirá:

```bash
Hello from Docker!
This message shows that your installation appears to be working correctly.

To generate this message, Docker took the following steps:
 1. The Docker client contacted the Docker daemon.
 2. The Docker daemon pulled the "hello-world" image from the Docker Hub.
    (arm64v8)
 3. The Docker daemon created a new container from that image which runs the
    executable that produces the output you are currently reading.
 4. The Docker daemon streamed that output to the Docker client, which sent it
    to your terminal.

To try something more ambitious, you can run an Ubuntu container with:
 $ docker run -it ubuntu bash

Share images, automate workflows, and more with a free Docker ID:
 https://hub.docker.com/

For more examples and ideas, visit:
 https://docs.docker.com/get-started/
```

## Instalar ferramentas GStreamer e capturar dados da câmera

Instale as ferramentas necessárias:

```bash
apt update

apt install -y \
  gstreamer1.0-tools \
  gstreamer1.0-plugins-base \
  gstreamer1.0-plugins-good \
  gstreamer1.0-plugins-bad \
  gstreamer1.0-libav
```

Use o seguinte comando para capturar um quadro e salvá-lo como uma imagem JPEG:

```bash
gst-launch-1.0 -e \
  v4l2src device=/dev/video12 num-buffers=1 \
  ! video/x-raw,format=NV12,width=3840,height=2160,framerate=30/1 \
  ! videoconvert \
  ! jpegenc quality=95 \
  ! filesink location=/tmp/camera.jpg
```

Quando o comando terminar, visualize a imagem processada pelo ISP em `/tmp/camera.jpg`.

## Suporte Técnico e Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes níveis de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
