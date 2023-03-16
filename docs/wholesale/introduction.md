---
id: introduction
title: Introduction
---
## Customer API documentation
This documentation is available as pdf and you can grab it from below.

- [v3.19.1 ](https://cdn.simwood.com/docs/simwood_apiv3.pdf) (PDF)
- [v3.2.0](coming soon)

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
```bash
echo $CARRIER_API_PASSWORD
echo $CARRIER_API_USERNAME
```
this command should display the `username_from_simwood` as assigned in the script above.



<br />
<br />
<br />

This is a work in progress.... will be updated soon. 
