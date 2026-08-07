---
description: use Arducam Jetvariety cameras (OV9281) with the A603 Jetson carrier board on JetPack 6.2
title: Use Arducam OV9281 (Jetvariety) Camera with A603 Jetson Carrier Board
keywords:
  - reComputer
  - Arducam
  - OV9281
  - Jetvariety
  - A603
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Use_Arducam_OV9281_Camera_with_A603_Jetson_Carrier_Board
last_update:
  date: 08/07/2026
  author: Jonathan van der Maas
---

Arducam Jetvariety cameras officially support the NVIDIA developer kit carrier board, not the A603, and Arducam's installer overlay cannot work on the A603. The camera itself works well once you build a small custom device tree. This page documents the working configuration for the Arducam OV9281 (B0223) on JetPack 6.2 (L4T R36.4.3), the reasons the stock overlay fails, and one trap that can disable all USB on the board.

Result: OV9281 on `/dev/video0`, GREY / Y10 / Y16 formats at 1280x800, 1280x720 and 640x400, up to 80 fps, with external trigger available.

## Why Arducam's own overlay cannot work on the A603

1. The A603's single CSI connector is `serial_a` on i2c-2 (`i2c@3180000`). Arducam's developer-kit overlay wires its sensor nodes to `serial_b`/`serial_c` under a `cam_i2cmux` node, a mux that never instantiates on this board, so the sensor nodes never probe. There is no error message; the camera simply never appears.
2. The Jetvariety controller answers at i2c address `0x0c`. Verify with `i2cdetect -y -r 2`.
3. The A603 BSP ships its own rebuilt kernel and reuses NVIDIA's device tree file names, so the tree that must be modified is the A603 one, not a developer-kit one.

## Boot safety first

:::caution
Arducam's installer adds a boot entry (commonly labelled `JetsonIO`) pairing their kernel with their developer-kit device tree. Booting that entry on the A603 disables every USB port, including the USB gadget network and any keyboard. The A603's UEFI/extlinux boot menu accepts no keyboard input, so whatever `DEFAULT` points at in `/boot/extlinux/extlinux.conf` is what boots, always. Never leave `DEFAULT` pointing at an untested entry. Recovery from this state requires RCM-booting the flashing initrd from another machine (recovery jumper on W7 pins 3 and 4).
:::

Before experimenting, back up the original kernel and DTB, and consider installing a systemd timer that resets `DEFAULT` to a known-good entry about 180 seconds after every boot unless a keep-flag file exists:

```bash
# /usr/local/sbin/a603-boot-revert.sh
#!/bin/sh
[ -e /etc/a603-keep-boot-default ] && exit 0
sed -i 's/^DEFAULT .*/DEFAULT seeed/' /boot/extlinux/extlinux.conf
```

Workflow for any boot experiment: remove the keep-flag, point `DEFAULT` at the experimental entry and reboot. If it works, create the keep-flag again. If the board becomes unreachable, power cycle and it reverts to the known-good entry on its own.

## The working configuration

Boot entry in `/boot/extlinux/extlinux.conf`:

```
LABEL arducam
      MENU LABEL Arducam kernel + A603 sensor-swapped DTB
      LINUX /boot/arducam/Image
      FDT /boot/kernel_a603-arducam.dtb
      APPEND ${cbootargs} root=/dev/nvme0n1p1 rw rootwait rootfstype=ext4 ...
```

- Kernel: Arducam's, from their `arducam-nvidia-l4t-kernel` package (their installer fetches it). It carries the `arducam-csi2` Jetvariety driver.
- DTB: custom, built as described below. Note that the `FDT` line in extlinux does override the partition DTB on this board.

### Device tree strategy: swap the sensor, keep everything else

Grafting Arducam's camera graph into the A603 tree fails on phandle and wiring mismatches. What works is the opposite: keep the A603's complete, board-correct camera graph (CSI channel, VI wiring, ports and endpoints, phandles, all built for the IMX219 the board supports out of the box) and swap only the sensor node identity:

1. Decompile the stock A603 DTB: `dtc -I dtb -O dts -o seeed.dts <stock DTB>`
2. Decompile any DTB that contains Arducam's sensor block (for example from their overlay) to obtain its `mode0` node
3. In `seeed.dts`, inside `i2c@3180000`, replace the `rbpcv2_imx219_a@10` node with an `arducam_a@0c` node:
   - `compatible = "arducam,arducam-csi2"`, `reg = <0x0c>`, `sensor_model = "arducam-csi2"`, `use_sensor_mode_id = "true"`
   - keep the original `devnode`, `reset-gpios`, `phandle` and the entire `ports` block verbatim; this keeps every phandle valid
   - insert Arducam's `mode0` block with `tegra_sinterface` changed to `"serial_a"`
4. Flip the `cam0-rst` GPIO hog from `output-low` to `output-high` (the stock tree holds the camera in reset)
5. Update the `tegra-camera-platform` path strings and `__symbols__` from `.../rbpcv2_imx219_a@10` to `.../arducam_a@0c`
6. Recompile and install: `dtc -I dts -O dtb -o /boot/kernel_a603-arducam.dtb a603-arducam.dts`

A Python script that performs this transformation automatically is available in [this repository](https://github.com/vdmaas98/a603-arducam).

Success signature in dmesg:

```
arducam-csi2 2-000c: firmware version: 0x10003
arducam-csi2 2-000c: Sensor ID: 0x9281
arducam-csi2 2-000c: sensor arducam-csi2 2-000c registered
```

## Check the ribbon cable before debugging software

If the sensor does not answer on i2c, check the physical layer first:

- At the camera end, the ribbon's gold contacts must face away from the camera PCB, and both latches must be fully and evenly closed.
- A decisive diagnostic is the free-end power test: seat the ribbon in the A603 only, leave the camera end loose, power the board, and measure the loose end's outermost contacts with a multimeter. Reading 3.3 V proves the board, the cable and the board-end orientation are all good, isolating any remaining fault to the camera end.
- Cable: 22-pin, type A (gold on the same face at both ends), straight-through.

## Capture

:::note
The driver's default exposure and gain produce black frames, which looks exactly like a broken camera. Set controls in the same `v4l2-ctl` invocation as the capture, because values reset every time a new stream opens.
:::

```bash
v4l2-ctl -d /dev/video0 --set-fmt-video=width=1280,height=800,pixelformat=GREY \
  --set-ctrl exposure=10000 --set-ctrl analogue_gain=400 \
  --stream-mmap --stream-count=10 --stream-to=/tmp/frames.raw
```

Ranges: `exposure` 1 to 65523, `analogue_gain` 100 to 1500. Also available: `trigger_mode` (external trigger), `frame_rate` 5 to 80, horizontal and vertical flip.

While the approach was tested with the OV9281 B0223, it should apply to other Jetvariety modules on the A603, since the Jetvariety design puts the mode logic in the camera's onboard controller rather than the device tree.

## Tech Support & Product Discussion

Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
