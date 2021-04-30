## Get Started with Nvidia Jetson Nano Series

<div align=center><img src="https://files.seeedstudio.com/wiki/ReSpeaker_2_Mics_Pi_HAT/JetsonNano-2MICS.png"/></div>

The wm8960/Respeaker-2-Mic-Hat driver now works on the Jetson Nano platform, here follows the testing steps:

### Install WM8960 from seeed-linux-dtoverlays

!!!Note
        This is tested for Jetson source R32.4.2 or JetPack Image 4.4.

**STEP 1.** Clone the repo

```sh
cd ~
git clone https://github.com/Seeed-Studio/seeed-linux-dtoverlays
cd ~/seeed-linux-dtoverlays
```

**STEP 2.** Build dtbo & driver

```sh
export CUSTOM_MOD_FILTER_OUT="lis3lv02d mcp25xxfd gt9xx seeed-voicecard"
KBUILD=/usr/src/linux-headers-4.9.140-tegra-ubuntu18.04_aarch64/kernel-4.9 make all_jetsonnano
```

**STEP 3.** Install the Driver

```sh
sudo -E KBUILD=/usr/src/linux-headers-4.9.140-tegra-ubuntu18.04_aarch64/kernel-4.9 make install_jetsonnano
```

**STEP 4.** Install dtbo

```sh
sudo cp overlays/jetsonnano/jetson-seeed-2mic-wm8960.dtbo /boot
sudo /opt/nvidia/jetson-io/config-by-hardware.py -n "Seeed Voice Card 2MIC"
```

**STEP 5.** Reboot

```sh
sudo reboot
```

**STEP 6.** Restore Alsa widgets settings

!!!Note
        Must wait a moment the time sound card busy after login.

```sh
cd ~/seeed-linux-dtoverlays
alsactl -f extras/wm8960_asound.state-jetson-nano restore 1
```

**STEP 7.** Capture & Playback

```sh
arecord -D hw:1,0 -f S32_LE -r 48000 -c 2 | aplay -D hw:1,0 -f S32_LE -r 48000 -c 2
```