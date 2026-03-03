---
description: このwikiは、ReSpeaker Mic Array v2.0とreComputer Jetson Miniを使用してLekiwi Robot Kitに音追従機能を装備するための包括的な実装フレームワークを提供し、ハードウェア統合、環境設定、ソフトウェア適応をカバーしながら、リアルタイム音源追跡機能を実演します。
title: Lekiwi 音追従機能付き
keywords:
- Lerobot
- Huggingface
- Car
- Robotics
- reSpeaker
- Lekiwi
- reComputer
image: https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/lekiwi_cad_v1.webp
slug: /ja/sound_follow_robot
last_update:
  date: 6/24/2025
  author: Youjiang
---

## はじめに

ReSpeaker Mic Array v2.0と統合されたLewiki Robot Kitは、音声インタラクションと音響ナビゲーション機能を獲得します。このガイドでは、ロボットで音追従機能を実現するためのハードウェアとソフトウェア環境の設定プロセスを段階的に詳しく説明します。

<div class="table-center">
  <table align="center">
    <tr>
        <th>Lekiwi Robot Kit</th>
        <th>ReSpeaker Mic Array v2.0</th>
        <th>reComputer Mini J4012</th>
    </tr>
    <tr>
        <td>
            <div style={{textAlign:'center'}}>
                <img src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/lekiwi_cad_v1.png" style={{width:250, height:'auto'}}/>
            </div>
        </td>
        <td>
            <div style={{textAlign:'center'}}>
                <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/0/2/02_7.png" style={{width:250, height:'auto'}}/>
            </div>
        </td>
        <td>
            <div style={{textAlign:'center'}}>
                <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/2/-/2-recomputer-mini-j30or40-45font_1.jpg" style={{width:250, height:'auto'}}/>
            </div>
        </td>
    </tr>
    <tr>
        <td>
            <div class="get_one_now_container" style={{textAlign: 'center'}}>
                <a class="get_one_now_item" href="https://www.seeedstudio.com/SO-ARM101-Low-Cost-AI-Arm-Kit-Pro-p-6427.html" target="_blank">
                    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入取 🖱️</font></span></strong>
                </a>
            </div>
        </td>
        <td>
            <div class="get_one_now_container" style={{textAlign: 'center'}}>
                <a class="get_one_now_item" href="https://www.seeedstudio.com/ReSpeaker-Mic-Array-v2-0.html?___store=retailer" target="_blank">
                    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入取 🖱️</font></span></strong>
                </a>
            </div>
        </td>
        <td>
            <div class="get_one_now_container" style={{textAlign: 'center'}}>
                <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Mini-J4012-with-Extension-p-6353.html" target="_blank">
                    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入取 🖱️</font></span></strong>
                </a>
            </div>
        </td>
    </tr>
  </table>
</div>

## 前提条件

- Lewiki Robot Kit
- ReSpeaker Mic Array v2.0

:::note
将来の機能拡張を考慮して、このwikiではロボットのメイン制御デバイスとして`reComputer Jetson Mini J4012`を使用しています。`Raspberry Pi 5`を使用してもこのwikiで説明されているすべての機能を実現できます。
:::

## ハードウェア接続

1. [このwiki](https://wiki.seeedstudio.com/ja/lerobot_lekiwi/)を参照して、機械構造の組み立てとモーターの設定を含むLekiwiロボットを準備してください。
2. 3Dプリントされたコネクタを使用してreSpeakerをLekiwiに取り付けます。
3. USBケーブルを使用してreSpeakerとサーボコントローラーをreComputerに接続します。

<div align="center">
    <img width={1000}
    src="https://files.seeedstudio.com/wiki/reComputer-Jetson/sound_follow/robot.jpg" />
</div>

## ソフトウェア環境の準備

### Lerobot仮想環境

Lekiwiの組み立てプロセス中にreComputerでLerobot仮想環境をすでに設定している場合は、次のセクションにスキップできます。
そうでない場合は、以下のコマンドを使用してLerobot仮想環境を設定できます：

**ステップ1.** Minicondaのインストール

```bash
mkdir -p ~/miniconda3
wget https://repo.anaconda.com/miniconda/Miniconda3-latest-Linux-aarch64.sh -O ~/miniconda3/miniconda.sh
bash ~/miniconda3/miniconda.sh -b -u -p ~/miniconda3
rm ~/miniconda3/miniconda.sh
source ~/.bashrc
```

**ステップ2.** lerobot用のconda環境の作成

```bash
conda create -y -n lerobot python=3.10
conda activate lerobot
git clone https://github.com/huggingface/lerobot.git ~/lerobot
conda install ffmpeg -c conda-forge
cd ~/lerobot && pip install -e ".[feetech]"
```

### reSpeaker依存関係

lerobot仮想環境にreSpeaker依存関係をインストールします。

**ステップ1.** `pyusb`のインストール

```bash
pip install pyusb==1.0.2
```

**ステップ2.** USBデバイスアクセス権限の設定

```bash
echo 'SUBSYSTEM=="usb", ATTRS{idVendor}=="2886", MODE="0666"' | sudo tee /etc/udev/rules.d/51-mic-usb.rules
sudo chmod +x /etc/udev/rules.d/51-mic-usb.rules
sudo udevadm control --reload-rules && sudo udevadm trigger
```

## アプリケーションソフトウェアのインストール

`lerobot/lerobot/common/robots/lekiwi/`ディレクトリに移動し、この場所に`sound_follow.py`という名前の新しいPythonスクリプトを作成します。
次に、以下の内容をsound_follow.pyにコピーします。

<details>

<summary> sound_follow.py </summary>

```python

#!/usr/bin/env python3


import logging
import time
import sys
import struct
import usb.core
import usb.util

from .config_lekiwi import LeKiwiConfig
from .lekiwi import LeKiwi

class Tuning:
    TIMEOUT = 100000

    def __init__(self, dev):
        self.dev = dev
        self.PARAMETERS = {
            'AECFREEZEONOFF': (18, 7, 'int', 1, 0, 'rw', 'Adaptive Echo Canceler updates inhibit.', '0 = Adaptation enabled', '1 = Freeze adaptation, filter only'),
            'AECNORM': (18, 19, 'float', 16, 0.25, 'rw', 'Limit on norm of AEC filter coefficients'),
            'AECPATHCHANGE': (18, 25, 'int', 1, 0, 'ro', 'AEC Path Change Detection.', '0 = false (no path change detected)', '1 = true (path change detected)'),
            'RT60': (18, 26, 'float', 0.9, 0.25, 'ro', 'Current RT60 estimate in seconds'),
            'HPFONOFF': (18, 27, 'int', 3, 0, 'rw', 'High-pass Filter on microphone signals.', '0 = OFF', '1 = ON - 70 Hz cut-off', '2 = ON - 125 Hz cut-off', '3 = ON - 180 Hz cut-off'),
            'RT60ONOFF': (18, 28, 'int', 1, 0, 'rw', 'RT60 Estimation for AES. 0 = OFF 1 = ON'),
            'AECSILENCELEVEL': (18, 30, 'float', 1, 1e-09, 'rw', 'Threshold for signal detection in AEC [-inf .. 0] dBov (Default: -80dBov = 10log10(1x10-8))'),
            'AECSILENCEMODE': (18, 31, 'int', 1, 0, 'ro', 'AEC far-end silence detection status. ', '0 = false (signal detected) ', '1 = true (silence detected)'),
            'AGCONOFF': (19, 0, 'int', 1, 0, 'rw', 'Automatic Gain Control. ', '0 = OFF ', '1 = ON'),
            'AGCMAXGAIN': (19, 1, 'float', 1000, 1, 'rw', 'Maximum AGC gain factor. ', '[0 .. 60] dB (default 30dB = 20log10(31.6))'),
            'AGCDESIREDLEVEL': (19, 2, 'float', 0.99, 1e-08, 'rw', 'Target power level of the output signal. ', '[-inf .. 0] dBov (default: -23dBov = 10log10(0.005))'),
            'AGCGAIN': (19, 3, 'float', 1000, 1, 'rw', 'Current AGC gain factor. ', '[0 .. 60] dB (default: 0.0dB = 20log10(1.0))'),
            'AGCTIME': (19, 4, 'float', 1, 0.1, 'rw', 'Ramps-up / down time-constant in seconds.'),
            'CNIONOFF': (19, 5, 'int', 1, 0, 'rw', 'Comfort Noise Insertion.', '0 = OFF', '1 = ON'),
            'FREEZEONOFF': (19, 6, 'int', 1, 0, 'rw', 'Adaptive beamformer updates.', '0 = Adaptation enabled', '1 = Freeze adaptation, filter only'),
            'STATNOISEONOFF': (19, 8, 'int', 1, 0, 'rw', 'Stationary noise suppression.', '0 = OFF', '1 = ON'),
            'GAMMA_NS': (19, 9, 'float', 3, 0, 'rw', 'Over-subtraction factor of stationary noise. min .. max attenuation'),
            'MIN_NS': (19, 10, 'float', 1, 0, 'rw', 'Gain-floor for stationary noise suppression.', '[-inf .. 0] dB (default: -16dB = 20log10(0.15))'),
            'NONSTATNOISEONOFF': (19, 11, 'int', 1, 0, 'rw', 'Non-stationary noise suppression.', '0 = OFF', '1 = ON'),
            'GAMMA_NN': (19, 12, 'float', 3, 0, 'rw', 'Over-subtraction factor of non- stationary noise. min .. max attenuation'),
            'MIN_NN': (19, 13, 'float', 1, 0, 'rw', 'Gain-floor for non-stationary noise suppression.', '[-inf .. 0] dB (default: -10dB = 20log10(0.3))'),
            'ECHOONOFF': (19, 14, 'int', 1, 0, 'rw', 'Echo suppression.', '0 = OFF', '1 = ON'),
            'GAMMA_E': (19, 15, 'float', 3, 0, 'rw', 'Over-subtraction factor of echo (direct and early components). min .. max attenuation'),
            'GAMMA_ETAIL': (19, 16, 'float', 3, 0, 'rw', 'Over-subtraction factor of echo (tail components). min .. max attenuation'),
            'GAMMA_ENL': (19, 17, 'float', 5, 0, 'rw', 'Over-subtraction factor of non-linear echo. min .. max attenuation'),
            'NLATTENONOFF': (19, 18, 'int', 1, 0, 'rw', 'Non-Linear echo attenuation.', '0 = OFF', '1 = ON'),
            'NLAEC_MODE': (19, 20, 'int', 2, 0, 'rw', 'Non-Linear AEC training mode.', '0 = OFF', '1 = ON - phase 1', '2 = ON - phase 2'),
            'SPEECHDETECTED': (19, 22, 'int', 1, 0, 'ro', 'Speech detection status.', '0 = false (no speech detected)', '1 = true (speech detected)'),
            'FSBUPDATED': (19, 23, 'int', 1, 0, 'ro', 'FSB Update Decision.', '0 = false (FSB was not updated)', '1 = true (FSB was updated)'),
            'FSBPATHCHANGE': (19, 24, 'int', 1, 0, 'ro', 'FSB Path Change Detection.', '0 = false (no path change detected)', '1 = true (path change detected)'),
            'TRANSIENTONOFF': (19, 29, 'int', 1, 0, 'rw', 'Transient echo suppression.', '0 = OFF', '1 = ON'),
            'VOICEACTIVITY': (19, 32, 'int', 1, 0, 'ro', 'VAD voice activity status.', '0 = false (no voice activity)', '1 = true (voice activity)'),
            'STATNOISEONOFF_SR': (19, 33, 'int', 1, 0, 'rw', 'Stationary noise suppression for ASR.', '0 = OFF', '1 = ON'),
            'NONSTATNOISEONOFF_SR': (19, 34, 'int', 1, 0, 'rw', 'Non-stationary noise suppression for ASR.', '0 = OFF', '1 = ON'),
            'GAMMA_NS_SR': (19, 35, 'float', 3, 0, 'rw', 'Over-subtraction factor of stationary noise for ASR. ', '[0.0 .. 3.0] (default: 1.0)'),
            'GAMMA_NN_SR': (19, 36, 'float', 3, 0, 'rw', 'Over-subtraction factor of non-stationary noise for ASR. ', '[0.0 .. 3.0] (default: 1.1)'),
            'MIN_NS_SR': (19, 37, 'float', 1, 0, 'rw', 'Gain-floor for stationary noise suppression for ASR.', '[-inf .. 0] dB (default: -16dB = 20log10(0.15))'),
            'MIN_NN_SR': (19, 38, 'float', 1, 0, 'rw', 'Gain-floor for non-stationary noise suppression for ASR.', '[-inf .. 0] dB (default: -10dB = 20log10(0.3))'),
            'GAMMAVAD_SR': (19, 39, 'float', 1000, 0, 'rw', 'Set the threshold for voice activity detection.', '[-inf .. 60] dB (default: 3.5dB 20log10(1.5))'),
            # 'KEYWORDDETECT': (20, 0, 'int', 1, 0, 'ro', 'Keyword detected. Current value so needs polling.'),
            'DOAANGLE': (21, 0, 'int', 359, 0, 'ro', 'DOA angle. Current value. Orientation depends on build configuration.')
        }

    def write(self, name, value):
        try:
            data = self.PARAMETERS[name]
        except KeyError:
            return

        if data[5] == 'ro':
            raise ValueError('{} is read-only'.format(name))

        id = data[0]

        # 4 bytes offset, 4 bytes value, 4 bytes type
        if data[2] == 'int':
            payload = struct.pack(b'iii', data[1], int(value), 1)
        else:
            payload = struct.pack(b'ifi', data[1], float(value), 0)

        self.dev.ctrl_transfer(
            usb.util.CTRL_OUT | usb.util.CTRL_TYPE_VENDOR | usb.util.CTRL_RECIPIENT_DEVICE,
            0, 0, id, payload, self.TIMEOUT)

    def read(self, name):
        try:
            data = self.PARAMETERS[name]
        except KeyError:
            return

        id = data[0]

        cmd = 0x80 | data[1]
        if data[2] == 'int':
            cmd |= 0x40

        length = 8

        response = self.dev.ctrl_transfer(
            usb.util.CTRL_IN | usb.util.CTRL_TYPE_VENDOR | usb.util.CTRL_RECIPIENT_DEVICE,
            0, cmd, id, length, self.TIMEOUT)

        # response = struct.unpack(b'ii', response.tostring())
        response = struct.unpack(b'ii', response.tobytes() if sys.version_info[1]>=2 else response.tostring())

        if data[2] == 'int':
            result = response[0]
        else:
            result = response[0] * (2.**response[1])

        return result

    def set_vad_threshold(self, db):
        self.write('GAMMAVAD_SR', db)

    def is_voice(self):
        return self.read('VOICEACTIVITY')

    @property
    def direction(self):
        return self.read('DOAANGLE')

    @property
    def version(self):
        return self.dev.ctrl_transfer(
            usb.util.CTRL_IN | usb.util.CTRL_TYPE_VENDOR | usb.util.CTRL_RECIPIENT_DEVICE,
            0, 0x80, 0, 1, self.TIMEOUT)[0]

    def close(self):
        """
        close the interface
        """
        usb.util.dispose_resources(self.dev)


class SoundFollowingRobot:
    def __init__(self):
        logging.info("Configuring LeKiwi")
        self.robot = LeKiwi(LeKiwiConfig())
        logging.info("Connecting LeKiwi")
        self.robot.connect(False)

        # scale factor
        self.scale_factor = 2
        self.angle_threshold = 5.0

        self.mic = self.find()

    def find(self, vid=0x2886, pid=0x0018):
        dev = usb.core.find(idVendor=vid, idProduct=pid)
        if not dev:
            return

        return Tuning(dev)

    def get_sound_direction(self):
        return self.mic.read("DOAANGLE")

    def robot_turn(self, speed):
        data = {'x.vel': 0.0, 'y.vel': 0.0, 'theta.vel': int(speed/self.scale_factor)}
        _action_sent = self.robot.send_action(data)

    def run(self):
        try:
            self.mic.set_vad_threshold(5)
            while True:
                if robot.mic.is_voice():
                    sound_angle = self.get_sound_direction()
                    angle_diff = sound_angle - 90
                    if angle_diff > 180:
                        angle_diff -= 360
                    elif angle_diff < -180:
                        angle_diff += 360
                    if abs(angle_diff) < self.angle_threshold:
                        self.robot_turn(0)
                    else:
                        self.robot_turn(angle_diff)
                    print(f"voice angle: {sound_angle}")
                else:
                    print('No voice detected!')
                time.sleep(0.2)
        except KeyboardInterrupt:
            print("Finish")
        except Exception as e:
            print(f"Exception occurred: {e}")
        finally:
            self.close()

    def close(self):
        self.robot_turn(0)
        self.robot.disconnect()
        self.mic.close()


if __name__ == "__main__":
    robot = SoundFollowingRobot()
    robot.run()
```

</details>

私たちのハードウェア設定ではカメラやSOArm101ロボットアームを使用しないため、関連する設定をコメントアウトする必要があります。

`lerobot/lerobot/common/robots/lekiwi/config_lekiwi.py`

```python
...
def lekiwi_cameras_config() -> dict[str, CameraConfig]:
    return {
        # "front": OpenCVCameraConfig(
        #     index_or_path="/dev/video0", fps=30, width=640, height=480, rotation=Cv2Rotation.ROTATE_180
        # ),
        # "wrist": OpenCVCameraConfig(
        #     index_or_path="/dev/video2", fps=30, width=480, height=640, rotation=Cv2Rotation.ROTATE_90
        # ),
    }
...
```

`lerobot/lerobot/common/robots/lekiwi/lekiwi.py`

```python
motors={
    # # arm
    # "arm_shoulder_pan": Motor(1, "sts3215", norm_mode_body),
    # "arm_shoulder_lift": Motor(2, "sts3215", norm_mode_body),
    # "arm_elbow_flex": Motor(3, "sts3215", norm_mode_body),
    # "arm_wrist_flex": Motor(4, "sts3215", norm_mode_body),
    # "arm_wrist_roll": Motor(5, "sts3215", norm_mode_body),
    # "arm_gripper": Motor(6, "sts3215", MotorNormMode.RANGE_0_100),
    # base
    "base_left_wheel": Motor(7, "sts3215", MotorNormMode.RANGE_M100_100),
    "base_back_wheel": Motor(8, "sts3215", MotorNormMode.RANGE_M100_100),
    "base_right_wheel": Motor(9, "sts3215", MotorNormMode.RANGE_M100_100),
},
```

send_action関数を修正して、ロボットアーム関連のコードセクションを無効化/削除します。

`lerobot/lerobot/common/robots/lekiwi/lekiwi.py`

```python
def send_action(self, action: dict[str, Any]) -> dict[str, Any]:
    if not self.is_connected:
        raise DeviceNotConnectedError(f"{self} is not connected.")

    base_goal_vel = {k: v for k, v in action.items() if k.endswith(".vel")}
    base_wheel_goal_vel = self._body_to_wheel_raw(base_goal_vel["x.vel"], base_goal_vel["y.vel"], base_goal_vel["theta.vel"])

    # Send goal position to the actuators
    self.bus.sync_write("Goal_Velocity", base_wheel_goal_vel)

    return {**base_goal_vel}
```

## アプリケーションの起動

以下のコマンドを実行してロボットを起動します：

```bash
conda activate lerobot
sudo chmod 666 /dev/ttyACM*
python -m lerobot.common.robots.lekiwi.sound_follow
```

## 効果のデモンストレーション

プログラムを起動すると、ロボットは音源の方向に回転し、継続的に「頭」を入力音声の方向に合わせます。

<div class="video-container">
<iframe width="800" height="450" src="https://www.youtube.com/embed/uI_leYm_m-w" title="A Sound Follow Robot Powered by reSpeaker and Lekiwi" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## 参考資料

- https://wiki.seeedstudio.com/ja/ReSpeaker_Mic_Array_v2.0/#version
- https://github.com/respeaker/usb_4_mic_array

## 技術サポート & 製品ディスカッション

私たちの製品をお選びいただき、ありがとうございます！私たちは、お客様の製品体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャンネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
