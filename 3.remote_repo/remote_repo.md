# Remote repository
git with github
1. create ssh key
   - check whether the ssh key exists in the user's home directory, if not, create the ssh key. `ssh-keygen -t rsa -C "youremail@xx.com"`. And press `enter` again and again, until the key is created. The `id_rsa` is the private key, it can't be leaked. The `id_rsa.pub` is the public key, it can be leaked.
2. login github, and add the public key to the github account.
   - click the `settings` in the right top corner, and click the `SSH and GPG keys` in the left side, and click the `New SSH key` in the right side. And paste the public key to the `key` area, and click the `Add SSH key` button.
3. test the connection
> You can add more than one ssh key to the github account.
## 3.1 remote repository
- Create a new repository on github, and named `GitLearn`.
- In the local `GitLearn` directory, use the command `git remote add origin git@github.com:yourname/GitLearn.git` to connect the local repository to the remote repository.
- Use the command `git push -u origin master` to push the local repository to the remote repository. The `-u` option is used to set the default remote repository and the default branch. After you have used the `-u` option, you can use the command `git push` to push the local repository to the remote repository.

### SSH warning
when you first use Git's `clone` or `push` command, you will get a warning message:
```bash
The authenticity of host 'github.com (xx.xx.xx.xx)' can't be established.
RSA key fingerprint is xx.xx.xx.xx.xx.
Are you sure you want to continue connecting (yes/no)?
```
### delete the remote repository
If when you want to delete the remote repository, you can use the following steps:
- `git remote -v`: check the remote repository.
- `git remote rm origin`: and then delete origin according to the name.
:warning: the delete operation is not a true delte, it just debind the local repository and the remote repository. If you want to delete the remote repository, you can login the github and delete the repository.

## 3.2 clone from the remote repository
Firstly, create a new repository on github, and named `GitLearn`, at the same time, create a new file `README.md` in the repository.

- Then use the command `git clone git@github.com:yourname/GitLearn.git`, you will get the `GitLearn` directory in the local. 
   Of course, you can use the command `git clone https://github.com/yourname/GitLearn.git` to clone the remote repository. But the https way need to input the username and password, and the speed is slower than the ssh way.
