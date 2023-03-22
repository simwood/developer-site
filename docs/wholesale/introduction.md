---
id: introduction
title: Introduction
---
## Customer API documentation
This documentation is available as pdf and you can grab it from below.

- [v3](https://cdn.simwood.com/docs/simwood_apiv3.pdf) (PDF)

#### setting enviromental variables for running API's

1. You can set the endironmental varibales as below depending on what environment you are using. You can get your API username and password from simwood. Please keep this information secure becuase it can be used to make changes to your account and eventually cost you. Make sure you are setting these variables on a machine you can trust or you own.

For linux environment, please run the commands below.

```bash
export CARRIER_API_USERNAME='username_from_simwood'
export CARRIER_API_PASSWORD='password_from_simwood'
```

You can consider adding the above to .bashrc if you want them saved permanently, so that they are still available after you logout or restart your computer.

verify that the variables are set.
```bash
echo $CARRIER_API_PASSWORD
echo $CARRIER_API_USERNAME
```
this command should display the `username_from_simwood` as assigned in the script above.



<br />
<br />
<br />
