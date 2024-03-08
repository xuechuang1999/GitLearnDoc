# Version control
Firstly, edit the `readme.md` file, and add the following content to the file.
```markdown  
Git is adistribuded version control system.
Git is free software.
```
- `git status`
    This command is used to check the status of the repository. It will show you the files that have been modified and the files that have been added to the repository.
- `git diff readme.md`
    This command is used to check the difference between the file `readme.md` and the file in the repository. It will show you the difference between the two files.
- `git add readme.md`
    This command is used to add the file `readme.md` to the repository. After you have added the file to the repository, you can use the following command to check the status of the repository.
- `git commit -m "add two lines to readme.md"`
    This command is used to commit the file to the repository. After you have committed the file to the repository, you can use the following command to check the status of the repository.

### Tips
- `git status`
    control the status of the working area and the repository.
- `git diff`
    check the difference between the working area and the repository.

## 2.1version rollback
Edit the `readme.md` file, and resubmit the file to the version repo, and now has a few different versions were submitted to the git repo.
- `git log`
    This command is used to check the log of the repository. It will show you the commit id, the author, the date and the message of the commit.
- `git log --pretty=oneline`
    This command is used to check the log of the repository. It will show you the commit id and the message of the commit.
> The `commit id` is a unique id of the commit. It is used to identify the commit. You can use the `commit id` to check the difference between the different versions of the file.

- `git reset --hard HEAD^`
    This command is used to reset the file to the previous version. After you have reset the file to the previous version, you can use the following command to check the status of the repository.
- `git reset --hard commit_id`
    This command is used to reset the file to the specified version. After you have reset the file to the specified version, you can use the following command to check the status of the repository.
:heavy_exclamation_mark: Attention:
    1. When use `git reset --hard HEAD^` to rollback the version, the version will be rollback to the previous version. And now, even use the command `git log` to check the log of the repository, the latest version will not be shown in the log. But, if your bash window is still open, you can use the command `git reflog` to check the log of the repository. It will show you the commit id, the author, the date and the message of the commit. And you can use the `commit id` to reset the file to the latest version.
    2. When use `git reset --hard commit_id` to rollback the version, you can only input the first few characters of the `commit id`.
- `git reflog`
    This command is used to check the log of the repository. It will show you the commit id, the author, the date and the message of the commit.

## 2.2working directory and repository
`working directory`
    The directory where you are working. You can edit the files in the working directory.
`repository`
    The directory where the files are stored. You can use the command `git add` to add the files to the repository, and use the command `git commit` to commit the files to the repository. It is the hidden directory in the working directory--`.git`.
In the git version repo, includes a lots of files and directories. And the important files is: `stage` or `index`--which is named `temporary storage area`, `master`--which is the first branch was created by git, `HEAD`--which is the pointer of the current version.
- In the previous section, when we put the file to the git version repo, it is executed in the following steps:
  1. `git add readme.md`: put the file to the `stage` or `index`.
  2. `git commit -m "add two lines to readme.md"`: put the file to the current branch--`master`. And the `HEAD` will point to the latest version.
> In conclusion, all the need commit files will be put to the `temporary storage area` first, and the commit all revised files in the `temporary storage area` to the current branch--`master`. 
<font color="#00b0f0">work area</font>>`git add readme.md`><font color="#ffc000">temporary storage area</font>>`git commit -m "xxx"`><font color="#92d050">repo</font>
`git diff`--check the difference between the working area and the `temporary storage area`.
`git diff --cached`--check the difference between the `temporary storage area` and the `repo`.
`git checkout`--discard the changes in the working area.
`git reset HEAD`--discard the changes in the `temporary storage area`.
`git status`--check the status of the working area and the `repo`.
## 2.3 git manage the modification
:heavy_exclamation_mark: git manage the modification, is not the files.