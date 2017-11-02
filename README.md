
# Tomcat Plugin

<img src="https://cdn.rawgit.com/clarive/cla-tomcat-plugin/master/public/icon/tomcat.svg?sanitize=true" alt="Tomcat Plugin" title="Tomcat Plugin" width="120" height="120">

Tomcat Plugin is designed to be able to deploy J2EE application WAR files in Tomcat webservers.

## What is Tomcat?

The Apache Tomcat software is an open source implementation of the Java Servlet, JavaServer Pages, Java Expression Language and Java WebSocket technologies.

## Installing

To install the plugin place the cla-tomcat-plugin folder inside `$CLARIVE_BASE/plugins`
directory in Clarive's instance.

Once the plugin is placed in its folder, you can start using it going to your Clarive's instance.

## Tomcat Instance

To configurate the Tomcat Instance Resource open:

In **Clarive SE**: Resources -> ClariveSE.

In **Clarive EE**: Resources -> Tomcat.

This Resource is to save your Tomcat Server parameters:

- **URL -** This is the Tomcat url.
- **Port -** The Tomcat server port.
- **User -** User for Tomcat Server.
- **Password -** Password for Tomcat connection.

Example:

		URL: http://mytomcatserver
		Port: 8080
		User: clarive
		Password: mySecr3tpassw0rd


## Service configuration

### Parameters

This service will deploy a WAR file on a Tomcat Server Resource.

- **Tomcat server (variable name: instance)** - The server you want to deploy the WAR file to.
- **WAR file path (war_path)** - The path on the remote server where the WAR file to deploy is located.
- **Application path (app_path)** - The application path in the Tomcat server where the application will be deployed.
- **Force update? (update)** - Check this if you want the application to be overwritten if already exists.

## How to use

### In Clarive EE

You can find this service in the Rule Designer palette.

Op Name: **Deploy WAR to Tomcat**

```yaml
    Tomcat server: Tomcat_server
    WAR file path: /deploys/tomcat.war
    Application path: /path/apps/
    Force update?: 0
``` 

### In Clarive SE

#### Rulebook

If you want to use the plugin through the Rulebook, in any `do` block, use this ops as examples to configure the different parameters:

Configuration example:

```yaml
rule: Tomcat demo
do:
   - tomcat_deploy:
       instance: tomcat_instance         # Required. Use the mid set to the resource you created
       war_path: '/deploys/tomcat.war'   # Required.
       app_path: ${destination_folder} 	 # Required.
       update: "0"
```

##### Outputs

###### Success

This service will return the deployment message.

###### Possible configuration failures

**Task failed**

You will get an error returned by the Tomcat plugin.

**Variable required**

```yaml
Error in rulebook (compile): Required argument(s) missing for op "tomcat_deploy": "war_path"
```

Make sure you have all required variables defined.

**Not allowed variable**

```yaml
Error in rulebook (compile): Argument `webs` not available for op "tomcat_deploy"
```

Make sure you are using the correct paramaters (make sure you are writing the variable names correctly).

## More questions?

Feel free to join **[Clarive Community](https://community.clarive.com/)** to resolve any of your doubts.