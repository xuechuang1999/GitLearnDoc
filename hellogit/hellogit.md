# Log in of user
- `git config --global user.name "Your Name"`
    This command is used to set the global user name of the user. The user name is the name of the user who is using the git.
- `git config --global user.email "Your Email"`
    This command is used to set the global email of the user. The email is the email of the user who is using the git.
- `git config --global user.name`
    This command is used to check the global user name of the user.
- `git config --global user.email`
    This command is used to check the global email of the user.

## init a repository
- `git init`
    This command is used to create a new repository. It will create a new directory named .git in the current directory. This directory contains all the necessary files for the repository.

## add files to the repository
Firstly, you should create a file in the directory of the repository. e.g. you have a file named `readme.txt` in the directory of the repository.And in the `readme.txt`, you have written something, sucha as `hello git`. Then you can use the following command to add the file to the repository.
- `git add readme.txt`
    This command is used to add the file `readme.txt` to the repository. After you have added the file to the repository, you can use the following command to check the status of the repository.
- `git status`
    This command is used to check the status of the repository. It will show you the files that have been modified and the files that have been added to the repository.
- `git commit -m "hello git"`
    This command is used to commit the file to the repository. After you have committed the file to the repository, you can use the following command to check the status of the repository.