---
id: introduction
title: Introduction
---

#### setting enviromental variables for running API's

1. write the script below. please get your API username and password from simwood. 
`vi set_creds.sh`

```bash
echo "export CARRIER_API_USERNAME='username_from_simwood'" >> ~/.bashrc
echo "export CARRIER_API_PASSWORD='password_from_simwood'" >> ~/.bashrc
```

2. run script using command below
```bash
sh set_creds.sh
```

3. Make changes permanent
```bash
. ~/.bashrc
```

simple explanation is; we have created a script set_cred.sh inside the current directory,and we have run it. when you run it, its going to create a file(if non existent) .bashrc inside your home directory. and add the two environmental variables for username and password 

verify that the variables are set.
`echo $CARRIER_API_PASSWORD`
this command should display the `username_from_simwood` as assigned in the script above.


This is a work in progress.... will be updated soon. 
