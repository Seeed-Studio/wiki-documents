import os

def normalize_names(root_dir="docs"):
    for dirpath, dirnames, filenames in os.walk(root_dir, topdown=False):
        # 先处理文件
        for filename in filenames:
            if " " in filename:
                old_path = os.path.join(dirpath, filename)
                new_name = filename.replace(" ", "_")
                new_path = os.path.join(dirpath, new_name)
                print(f"Renaming file: {old_path} -> {new_path}")
                os.rename(old_path, new_path)

        # 再处理目录
        for dirname in dirnames:
            if " " in dirname:
                old_path = os.path.join(dirpath, dirname)
                new_name = dirname.replace(" ", "_")
                new_path = os.path.join(dirpath, new_name)
                print(f"Renaming dir: {old_path} -> {new_path}")
                os.rename(old_path, new_path)

if __name__ == "__main__":
    normalize_names("docs")
