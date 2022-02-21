# System Requirements

WebApps is able to be used on most web servers, below is a list of basic requirements, which are fairly standard for a modern Web Server. WebApps can be installed onto most shared hosting providers, but may need some customisation to work.

#### General System Requirements

| Requirement                            | Notes                                                                                                                                                     |
| -------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| PHP >= 7.4                             |                                                                                                                                                           |
| PHP Extensions:                        | <p>- JSON<br>- OpenSSL<br>- PDO<br>- MBString<br>- Tokenizer<br>- cURL<br>- MySQL<br>- PHPZIP<br>- Fileinfo<br>- PHP BCMath<br>- PHP XML<br>(ALL TBC)</p> |
| MySQL, MariaDB or Microsoft SQL Server |                                                                                                                                                           |

#### Requirements specific to Linux/macOS/Windows (Apache)

| Requirement |
| ----------- |
| Mod Rewrite |

#### Requirements specific to Windows Server (IIS)

| Requirement               | Notes                                           |
| ------------------------- | ----------------------------------------------- |
| IIS                       |                                                 |
| IIS URL Rewrite           |                                                 |
| PHP SQLServ PDO Extension | Required if using Microsoft SQL Server database |
| PHP Manager for IIS       | Not required, but highly recommended            |

{% hint style="info" %}
The system requirements will be tested as part of the web based installation wizard. You must have already created the database and website.
{% endhint %}

