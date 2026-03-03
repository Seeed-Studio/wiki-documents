---
description: Basic linux command for reCamera
title: Linux Fundamentals
keywords:
  - Edge
  - reCamera
  - recamera
  - linux command
  - linux
image: https://files.seeedstudio.com/wiki/reCamera/OS_upgrade/image-4.png
slug: /recamera_linux_fundamentals
sidebar_position: 4
last_update:
  date: 2/14/2025
  author: Parker Hu & Dawn Yao
---
# Linux Fundamentals

## **1. Introduction to Linux System**

Linux is an open-source, Unix-like operating system that has gained widespread adoption due to its reliability, flexibility, and performance. It’s widely used in servers, desktops, mobile devices, and embedded systems.

### Key Features of Linux:

- **Free and Open Source**: Linux’s source code is available for free, and users can modify it as per their requirements.
- **Multitasking**: Linux supports running multiple applications simultaneously.
- **Security**: It is known for its robust security features, such as file permissions, user management, and SELinux.
- **Portability**: Linux can run on a variety of hardware architectures.

## **2. Introduction to Linux File System**

Linux organizes its files and directories in a hierarchical structure. At the top of this structure is the root directory `/`, and from there, other directories branch out.

### Key Directories in the Linux File System:

- `/`: Root directory. It is the starting point of the Linux file system.
- `/home`: User home directories. Every user has a subdirectory here (e.g., `/home/user`).
- `/etc`: Configuration files for the system.
- `/bin`: Essential binary files and commands.
- `/var`: Variable data, such as logs and databases.
- `/tmp`: Temporary files.
- `/dev`: Device files that represent hardware components.

## **3. Using the Terminal and Command Line**

The terminal is a powerful tool for interacting with the Linux operating system. It allows users to issue commands to perform various tasks.

**Opening the Terminal:**

- Address of access：http://192.168.42.1/#/terminal（Default username and password：`recamera`）
- Log in remotely via the ssh [tool](https://mobaxterm.mobatek.net/).
You can visit the reCamera remotely, by using the following command:
```
ssh recamera@recamera.local
```

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/ssh_connection.png" /></div>

Then hit ```Enter```, you should be able to now remotely control the reCamera.

### Basic Command Line Structure:

Commands in Linux follow a general structure:

```bash
command [options] [arguments]
```

For example, `ls -l /home/recamera` will list all files in the `/home/recamera` directory in long format.

## **4.User recamera && root**

The first time you use the recamera, you reset the default recamera password, which is also the password used to log in to the terminal.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/linux_fundamentals/image-1.png" /></div>

:::note

When the password is entered in the terminal, the content will not be displayed. Press `Enter` to execute after the password is entered.

:::

The problem of insufficient permissions occurs in some special operations. To execute the command, you need to add sudo before executing the command. Or switch to the `root` user to execute all commands in the system.

The root user does not have a password set by default; use this command to set a password.

- `sudo passwd root`:Changing a user's password
- `su root`:Switch to the root user.

:::note

The root user can modify system-related files, which may lead to system failure. Please operate with caution.

:::

## **5. Basic Linux Commands**

Here are some basic commands and their usage:

### File and Directory Management:

- `pwd`: Prints the current working directory.
- `ls`: Lists the files and directories in the current directory.
- `cd [directory]`: Changes the current directory.
- `mkdir [directory]`: Creates a new directory.
- `rm [file]`: Removes a file.
- `rmdir [directory]`: Removes an empty directory.

### File Permissions and Ownership:

- `chmod [permissions] [file]`: Changes the permissions of a file.
- `chown [owner] [file]`: Changes the owner of a file.

### File Operations:

- `cp [source] [destination]`: Copies files or directories.
- `mv [source] [destination]`: Moves or renames files or directories.
- `cat [file]`: Displays the contents of a file.
- `nano [file]`: Opens a file in a text editor (Nano).

### System Information:

- `top`: Displays real-time system processes and resource usage.
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/linux_fundamentals/image-2.png" /></div>
- `df`: Displays disk space usage.
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/linux_fundamentals/image-3.png" /></div>
- `free`: Shows memory usage.
- `uname -r`: Displays the kernel version.

## 6.Transferring files

Linux offers several methods to transfer files between systems, whether it's over a local network or the internet. Below are the common tools and protocols used for file transfer in Linux.

### **Using SCP (Secure Copy Protocol)**

SCP allows you to copy files securely between a local and a remote host or between two remote hosts.

#### Basic SCP Commands:

- Copy a file from local to remote:

  ```bash
  scp [file] username@remote_host:/path/to/destination
  ```

- Copy a file from remote to local:

  ```bash
  scp username@remote_host:/path/to/file /local/destination
  ```

- Copy a directory (use the `-r` flag for recursive copy):

  ```bash
  scp -r [directory] username@remote_host:/path/to/destination
  ```

#### Example:

To copy a file from your local machine to a remote server:

```bash
scp myfile.txt recamera@192.168.1.100:/home/recamera/
```

### **Using SFTP (Secure File Transfer Protocol)**

SFTP is another secure method of transferring files, and it operates over SSH. It allows you to interactively manage files on a remote server.

#### Basic SFTP Commands:

1. Start an SFTP session:

   ```bash
   sftp username@remote_host
   ```

2. Once connected, use the following commands:

   - `ls`: List files in the remote directory.
   - `cd [directory]`: Change remote directory.
   - `get [file]`: Download a file from the remote server to the local machine.
   - `put [file]`: Upload a file from the local machine to the remote server.
   - `exit`: Close the SFTP session.

#### Example:

To upload a file to a remote server:

```bash
sftp recamera@192.168.42.1
sftp> put myfile.txt /home/user/Documents/
```

## **7.Hardware Command**

You can refer to this [documentation](https://wiki.seeedstudio.com/recamera_hardware_and_specs/#hardware-interface) to control the hardware on the recamera device.

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