
# Tomcat Plugin

Tomcat Plugin is designed to be able to deploy J2EE application WAR files in Tomcat webservers

## Installing

To install the plugin place the cla-tomcat-plugin folder inside `CLARIVE_BASE/plugins`
directory in Clarive's instance.

## How to use

Once the plugin is placed in its folder, you can start using it going to your Clarive's
instance.

After restarting your Clarive's instance, you will have a new CI:

### TomcatServer:

This CI is to save your Tomcat Server parameters:

- **URL -** This is the Tomcat url.
- **Port -** The Tomcat server port.
- **User -** User for Tomcat Server.
- **Password -** Password for Tomcat connection.

Example:

		URL: http://mytomcatserver
		Port: 8080
		User: clarive
		Password: mySecr3tpassw0rd


## Palette Services:

### Deploy WAR to Tomcat

This service will deploy a WAR file on a Tomcat Server CI

Parameters:

- **Tomcat server -** The server you want to deploy the WAR file to
- **WAR file path -** The path on the remote server where the WAR file to deploy is located
- **Application path -** The application path in the Tomcat server where the application will be deployed
- **Force update? -** Check this if you want the application to be overwritten if already exists
 

This service will return the deployment message and will fail if the deployment is not correct