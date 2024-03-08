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

## version rollback
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