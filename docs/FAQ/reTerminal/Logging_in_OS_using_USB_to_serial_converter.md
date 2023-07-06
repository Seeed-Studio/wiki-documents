---
description: reTerminal-FAQ
title: How to log in to Raspberry Pi OS/ Ubuntu OS or other OS using a USB to serial converter
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Logging_in_OS_using_USB_to_serial_converter
last_update:
  date: 6/21/2023
  author: Seraphina
---

<!-- ## Q5: How can I log in to Raspberry Pi OS/ Ubuntu OS or other OS using a USB to serial converter -->

If you have a **USB to Serial Converter**, you can use the following steps to log in to Raspberry Pi OS

Connect jumper wires from a USB to Serial Converter to the **UART pins** on the 40-pin GPIO header of the reTerminal as follows

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/FAQ/USB-UART.png" alt="pir" width={1000} height="auto" /></p>

Now let's configure the software on the computer. Please follow according to your operating system

### For Windows

- **Step 1.** Connect the USB to Serial Converter to the PC

- **Step 2.** Open **Device Manager** by typing **Device Manager** in the windows search box

- **Step 3.** Click on the drop-down arrow from **Ports (COM & LPT)** and find the name of the connected serial port (ex: **COM7**)

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/COM7-dev-show.jpg" alt="pir" width={320} height="auto" /></p>

- **Step 4.** Download and install **Putty** by visiting [this link](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html)

**Note:** Putty is an SSH and telnet client where you can use it to connect to the reTerminal via SSH. You can skip this step if you already have Putty installed

- **Step 5.** Open Putty to connect the PC to the reTerminal

- **Step 6.** Select **Serial** under the **Connection Type**

- **Step 7.** Configure the settings as follows:

  - Serial line: COM7 (choose your COM port)
  - Speed: 9600

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/COM7-Putty-connect.jpg" alt="pir" width={450} height="auto" /></p>

- **Step 8.** Click **Open**

- **Step 9.** On the Putty window, enter the login details as follows

```sh
- Username: pi
- Password: raspberry
```

- **Step 10.** If you have sucessfully logged into the Raspberry Pi OS, you will see the following output

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/SSH_WiFi.png" alt="pir" width={900} height="auto" /></p>

### For Mac/Linux

- **Step 1.** Connect the USB to Serial Converter to the PC

- **Step 2.** Open a **terminal window** on Mac/Linux

- **Step 3.** Type the following to update the **packages list**

```sh
sudo apt-get update
```

- **Step 4.** Type the following to install **minicom**

```sh
sudo apt-get install minicom
```

- **Step 5.** Type the following in the terminal to view the connected serial devices

```sh
dmesg | grep tty
```

> <p style={{fontSize: 16}}>Ex: <br/>
    [ 1562.048241] cdc_acm 1-3:1.0: ttyACM0: USB ACM device</p>

- **Step 6.** Connect to the serial device by typing the following

```sh
minicom -D /dev/ttyACM0 -b 9600
```

**Note:** The baud rate is set to 9600

- **Step 7.** After the hardware connections mentioned above, turn on the power from the wall power socket to power on the reTerminal

Now you have successfully logged into Raspberry Pi OS!
