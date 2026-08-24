---
description: executar a placa carrier Jetson A603 totalmente sem cabeça via USB, compartilhar a internet do host com ela e recuperar de configurações de boot com falha sem um teclado
title: Configuração Headless, Compartilhamento de Internet e Recuperação de Boot para a A603
keywords:
  - reComputer
  - A603
  - headless
  - USB gadget
  - recovery
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /headless_setup_and_recovery_for_a603
last_update:
  date: 08/07/2026
  author: Jonathan van der Maas
createdAt: '2026-08-11'
url: https://wiki.seeedstudio.com/pt-br/headless_setup_and_recovery_for_a603/
updatedAt: '2026-08-11'
---

A A603 pode ser provisionada e operada inteiramente através de sua porta W6 Micro-USB: nenhum monitor, teclado, cabo Ethernet ou módulo WiFi é necessário em nenhum momento após o flash. Esta página documenta o fluxo de trabalho completo sem cabeça no JetPack 6.2 (L4T R36.4.3): acesso SSH pela rede USB gadget, fornecendo internet para a placa através do computador host e recuperação de uma configuração de boot com falha em uma placa cujo menu de boot não aceita entrada de teclado.

## SSH pela rede USB gadget

Após o flash, a placa ativa uma rede USB gadget na porta W6 Micro-USB em cada boot, sem necessidade de configuração:

```
Jetson   l4tbr0   192.168.55.1
Host     (USB)    192.168.55.100
```

Conecte W6 ao host e faça SSH para a placa:

```bash
ssh <username>@192.168.55.1
```

Observações práticas:

- O cabo deve ser um cabo Micro-USB de dados. Cabos somente de alimentação são eletricamente indistinguíveis de nada acontecendo: a placa liga, mas nenhuma interface de rede aparece no host. Se a interface não aparecer, teste o cabo com outro dispositivo antes de depurar qualquer outra coisa.
- Hubs USB são transparentes para o link gadget e funcionam bem.
- No macOS a interface aparece como uma porta de hardware "Linux for Tegra"; no Linux é uma interface `usb0`/`enx...` com endereço 192.168.55.100.
- O desaparecimento da interface gadget do host é uma confirmação confiável de que a placa realmente foi desligada, o que é útil porque a A603 não tem LED de alimentação visível em um gabinete. Antes de cortar a alimentação, desligue corretamente (`sudo poweroff`), espere cerca de 15 segundos e confirme que a interface sumiu.

## Internet para a placa através do host

A rota padrão da placa já aponta para o host (192.168.55.100), então o host só precisa encaminhar pacotes e fazer NAT deles para sua própria conexão de uplink.

Em um host Linux:

```bash
sudo sysctl -w net.ipv4.ip_forward=1
sudo iptables -t nat -A POSTROUTING -o <uplink, e.g. wlan0> -j MASQUERADE
```

Em um host macOS, o pf é exigente em duas coisas: ordenação das regras (uma regra `nat` colocada após os anchors da Apple falha com "Rules must be in order"; ela deve ficar na seção de translation) e os anchors embutidos da Apple (eles devem ser declarados novamente no conjunto de regras carregado ou as próprias regras de firewall do macOS serão sobrescritas). Um conjunto de regras funcional:

```bash
sudo sysctl -w net.inet.ip.forwarding=1
cat > /tmp/pf-jetson.conf <<'EOF'
scrub-anchor "com.apple/*"
nat-anchor "com.apple/*"
nat on en0 inet from 192.168.55.0/24 to any -> (en0)
rdr-anchor "com.apple/*"
dummynet-anchor "com.apple/*"
anchor "com.apple/*"
load anchor "com.apple" from "/etc/pf.anchors/com.apple"
EOF
sudo pfctl -f /tmp/pf-jetson.conf
sudo pfctl -E
```

Substitua `en0` pela interface de uplink do host. Nem o sysctl nem o conjunto de regras do pf sobrevivem a uma reinicialização do host, então execute novamente após cada reinício.

:::note
Se o `apt` na placa travar depois que o NAT estiver ativo: o NAT é apenas IPv4, mas o DNS retorna endereços IPv6 primeiro para os espelhos do Ubuntu, e o apt tenta esses antes de recorrer ao IPv4. Fixe o apt em IPv4:

```bash
echo 'Acquire::ForceIPv4 "true";' | sudo tee /etc/apt/apt.conf.d/99force-ipv4
```
:::

## Experimentos de boot sem teclado

O menu de boot UEFI/extlinux da A603 não aceita entrada de teclado, com fio ou sem fio, em nenhuma porta, durante todo o tempo limite. O que quer que `DEFAULT` aponte em `/boot/extlinux/extlinux.conf` é o que inicia, sempre.

:::caution
Nunca deixe `DEFAULT` apontando para uma entrada de boot não testada. Se essa entrada quebrar a rede USB gadget (kernels e device trees personalizados podem fazer isso), a placa se torna inacessível sem fallback de teclado, e a recuperação exige o procedimento de RCM abaixo.
:::

Uma rede de segurança que torna os experimentos de boot suportáveis: um timer systemd que redefine `DEFAULT` para uma entrada conhecida como boa cerca de 180 segundos após cada boot, a menos que exista um arquivo de flag de manutenção.

```bash
# /usr/local/sbin/a603-boot-revert.sh
#!/bin/sh
[ -e /etc/a603-keep-boot-default ] && exit 0
sed -i 's/^DEFAULT .*/DEFAULT <known-good-label>/' /boot/extlinux/extlinux.conf
```

Com um serviço oneshot e um timer (`OnBootSec=180`), o fluxo de trabalho para qualquer experimento se torna:

1. `sudo rm /etc/a603-keep-boot-default` (arme a rede de segurança)
2. Aponte `DEFAULT` para a entrada experimental, reinicie
3. Se funcionar: `sudo touch /etc/a603-keep-boot-default`, defina `DEFAULT` de volta para a entrada experimental (o timer pode já tê-la revertido antes de você fazer SSH, então verifique)
4. Se a placa se tornar inacessível: desligue e ligue a alimentação, e ela inicializa a entrada conhecida como boa por conta própria

Antes de qualquer experimento com kernel ou device tree, faça backup do kernel e DTB originais e registre seus checksums md5, para que você sempre possa provar quais arquivos são quais.

## Recuperação de último recurso sem USB ou teclado

Se a placa inicializar algo que não tenha USB funcional, ainda é possível recuperá-la sem cabeça através de RCM (modo de recuperação):

1. A A603 não tem botão de recuperação. Faça um curto entre o pino 3 (FORCE_RECOVERY) e o pino 4 (GND) do conector W7 enquanto aplica energia, mantenha por cerca de 2 segundos e solte. Verifique a partir do host: `lsusb` mostra `0955:7523`.
2. A partir de um host Linux com o BSP L4T correspondente (`Linux_for_Tegra`), inicialize o initrd de flash sem realmente gravar:

```bash
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --initrd --showlogs \
     jetson-orin-nano-devkit-super internal
```

3. O initrd ativa sua própria rede USB. Faça SSH (root/root pelo endereço link-local), monte o NVMe e corrija a configuração de boot:

```bash
mount /dev/nvme0n1p1 /mnt
sed -i 's/^DEFAULT .*/DEFAULT <known-good-label>/' /mnt/boot/extlinux/extlinux.conf
```

:::caution
Não passe `--flash-only` ou `--network usb0` quando você só quiser o initrd. Com `--network usb0` o script prossegue para realmente fazer o flash, e um flash interrompido pode apagar a QSPI e quebrar completamente a cadeia de boot.
:::

## Suporte Técnico e Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
