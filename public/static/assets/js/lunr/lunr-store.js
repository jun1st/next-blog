var store = [{
        "title": "从Wordpress迁移到Jekyll",
        "excerpt":"时间真的过得很快，Amazon一年的AWS Free Tier马上就要到期了，再用就要付费了；如果我现在还在上班的话，我很乐意付费，毕竟免费的用了这么久。而且，Amazon在东京的EC2最便宜的也要60$一个月，比Linode贵多了，Linode现在最便宜的只要20$一个月，在现在只有出，没有入的时段，40$也是需要精打细算的。   在使用Wordpress时，一直久觉得这个东西太笨重，虽然功能很全，但是对于本身就是开发人员的使用者来说，太过复杂了，写一片博文，最快的无疑就是使用Markdown了，如果你不会Markdown，那么我建议你好好的学一下，它对于文字工作者也是一把利器。   使用了一年的EC2， 对于在Linode上建立一个服务器这个事情，已经是驾轻就熟了，几分钟久搞定。   搬迁的整个过程还是挺复杂的，把文章从Wordpress转成Jekyll格式的，这个很简单，网上一搜一大把，复杂的是如何把图片搬到新的地方，同时更新文章中的连接   如果你是程序员，你就不会手动的来做，而一定是写一个程序来完成这个时间。如果你的文章不多，或者图片更少，也许手动更新更快，但是程序员是又懒又坦言重复劳动的人，   下面的这个Gist, 首先从旧的博文里提取出来图片链接，然后保存到本地，按日期分组，再把旧的链接更新为新的地址。   ","categories": ["blog"],
        "tags": ["wordpress","Jekyll"],
        "url": "http://localhost:4000/blog/2012/11/17/move-from-wordpress-to-jekyll/",
        "teaser":"http://localhost:4000/assets/default-header.jpg"},{
        "title": "把MySQL的默认encoding设置为UTF8",
        "excerpt":"有中文的地方，就有utf8，不论什么软件。所以我觉得所有的软件，尤其是数据库应该把默认的encoding方式都改成utf8。   昨天在写的Rails程序中，输入了“曼联”两个字，显示出来的确实“??”，就知道又是utf8的问题。因为在用rails的migration创建表的时候，没有制定encoding, 使用的是默认的设置，创建的表就不是utf8的了。所以为了以后的方便，我想把mysql的默认设置改成utf8.   首先，在mysql的命令行里输入   show variables like '%char%';   看看有哪些设置不是utf8, 通常情况下，默认的下面两项不是utf8的（下面是我改过的结果）   character_set_client     | utf8 character_set_database   | utf8   这些默认设置可以通过mysql的my.cnf文件来修改。但是最新的mac os已经不用这个default了，所以需要把   /usr/local/mysql/support-files/my-small.cnf   (update:这个文件在最新的Mountain Lion下安装的mysql也可能没有，所以我上传了一个到dropbox，备份) 这个文件copy到/etc/目录下，并且改名为my.cnf.   修改此文件，   ... [client] default-character-set=utf8 ...  [mysqld] default-character-set=utf8 character-set-server=utf8 default-collation=utf8_unicode_ci   重启mysql使修改生效。   如果使用的是Rails， 还需要修改database.yaml文件，在数据库连接重加入encoding设置   development: adapter: mysql encoding: utf8   This is it!   ","categories": ["database"],
        "tags": ["mysql","utf8"],
        "url": "http://localhost:4000/database/2012/11/18/mysqlencodingutf8/",
        "teaser":"http://localhost:4000/assets/default-header.jpg"},{
        "title": "Ubuntu中的Apache设置二级域名",
        "excerpt":"在之前的从wordpress搬迁到jekyll的文章中提到，搬迁最大的问题就是图片的存放和图片的连接。为此我在自己的VPS上建立了一个叫做images的二级域名来专门存放文件。   建立二级域名A记录  建立二级域名最重要的一步是在你的域名解析服务器上添加一条”*“的A记录，把*.domainname.com都mapping到你的服务器IP地址上   建立site文件  Ubuntu上的Apache设置和别的Linux有不同的地方，在/etc/apache2/sites-available目录下建一个新的site文件，建议文件名跟你的二级域名一样， 比如:images.fengqijun.me   &lt;VirtualHost *:80&gt;     ServerAdmin aaa.bbb@gmail.com     ServerName images.fengqijun.me     DocumentRoot /path-to/blog-images/ &lt;/VirtualHost&gt;   激活site文件  激活site文件，可以用命令   a2ensite images.fengqijun.me   成功之后，/etc/apache2/sites-enabled/目录下就会出现这个文件。如果想disable某个site，可以用&lt;pre&gt;a2dissite&lt;/pre&gt;命令   修改hosts  在hosts中，把images.fengqijun.me mapping到 127.0.0.1   然后重启Apache，就完成了  ","categories": ["ubuntu"],
        "tags": ["sub-domain","apache","ubuntu"],
        "url": "http://localhost:4000/ubuntu/2012/11/24/setup-subdomain-for-apache-on-ubuntu/",
        "teaser":"http://localhost:4000/assets/default-header.jpg"},{
        "title": "第一个 iOS App 已经上App Store了",
        "excerpt":"买了Mac笔记本两年多了，这台笔记本都已经快进入淘汰的队列了，总算是有一个App上线了，虽然是一个很傻很简单的App。   期间断断续续的也写了不少Objective-C的代码，很多都是做到一半就放弃了，貌似半途而废是我的特长之一，hoho   不过这次总算是有始有终了，而且还是一个游戏App；而我一直对于游戏没有兴趣，玩都不是很有兴趣，更别说写了。只是由于这是上的一个Course的一个Assignment，不得不写（第一个Assignment还是Android的）。当Assignment写得差不多的时候，想到要不索性整整完整，把它提交到App Store算了，于是就有了这个了。   游戏使用了cocos2d这个引擎，由于之前已经完了objective-c挺久了，所以入门算是很快，两天一个雏形就出来了。这里要特别感谢一下 Andreas Loew,     Thanks to Andreas for sharing his awesome software TexturePack, which helps reduce memory usage and improve game’s performance by package messy sprite images into one. And It’s very easy to use.    此外，也算是知道了App的Distribution流程，绝对痛苦。毫不夸张的说，It’s a pain in the ass!   Finally, 希望有人来玩玩这个App   下载   ","categories": ["development"],
        "tags": ["ios","app","killspiders"],
        "url": "http://localhost:4000/development/2012/12/14/my-first-app-has-just-been-released/",
        "teaser":"http://localhost:4000/assets/default-header.jpg"},{
        "title": "MySQL UTF8 Setting Update",
        "excerpt":"I wrote a post about setting default character and encoding of MySQL to utf8 on OS X, here. But there is a better way to do this instead of modifying the default my.cnf file directly on Ubuntu. the last line of my.cnf file /etc/mysql/ is !includedir /etc/mysql/conf.d/ which indicate it...","categories": ["database"],
        "tags": ["mysql","utf8"],
        "url": "http://localhost:4000/database/2012/12/17/mysql-utf8-setting-update/",
        "teaser":"http://localhost:4000/assets/default-header.jpg"},{
        "title": "Customer Section Header of UITableview",
        "excerpt":"UITableView is one of the most used control is iOS Apps, probably the most one. It’s well designed, and easy to use, especially when coded together with NSFetchedResultController. But People always want more, and want to create something different, especially geeks. need for a custom header what I want is...","categories": ["ios"],
        "tags": ["uitableview","section","header","ios"],
        "url": "http://localhost:4000/ios/2012/12/20/customer-section-header-of-uitableview/",
        "teaser":"http://localhost:4000/assets/default-header.jpg"},{
        "title": "Videos for Linux Newbies",
        "excerpt":"These three videos give a brief introduction to Linux, more specifically ubuntu, and how to setup Linux as your Rails server. After the three videos, totally around 50 minutes, you’ll be able to play around with an Amazon EC2 instance. These videos are published on Vimeo, but the site is...","categories": ["linux"],
        "tags": ["linux","rails","apache","passenger"],
        "url": "http://localhost:4000/linux/2012/12/23/videos-for-linux-newbies/",
        "teaser":"http://localhost:4000/assets/default-header.jpg"},{
        "title": "2012,又一年",
        "excerpt":"2012, 又是一年结束了。   回首这2012，变化有点大，很多事情还真是计划赶不上变化，写那个2012年度计划的时候还是上班族，现在已经又变成一个学生了，老学生。其实，出去重新去上学未必是最最好的选择，但是逃出那个舒适的生活，肯定是正确的选择。新的一年可以做的，就是最大化这一年的时间和机会吧。   2012年初时定的好多事情都没有实现，基本算可以算是一个失败的计划了。有的事情反倒是歪打正着，比如为了写个assignment，确发布了第一个App。   这一年，从职业选择上来说，也算是离开.net，离开微软了。越来越觉得这个技术对我缺少吸引力，C#诚然是一门优秀的语言，但是在编程领域，微软是一个世界，剩下的是一个世界。在微软的世界里待了那么多年，总想跳到另外一个世界里去闯闯，总觉得那个世界会更精彩，所以，我再次拿起了Rails，这个我在学会asp.net mvc之前曾经学过的东西，只是当时只是随便玩玩而已，而且一碰到Linux服务器那种命令行式就打退堂鼓了。但是在amazon aws上那免费的一年的vps，让我算是对Linux入了门，扫清了一个障碍，要重新学的东西不少，希望会有个好结果吧。   2013年，希望能做好几件事，      毕业   改改脾气   结婚？   最后，希望我的家人和朋友在2013年身体健康，工作顺心。   ","categories": ["生活"],
        "tags": [2012],
        "url": "http://localhost:4000/%E7%94%9F%E6%B4%BB/2012/12/31/2012/",
        "teaser":"http://localhost:4000/assets/default-header.jpg"},{
        "title": "size, length and count of array in ruby/rails",
        "excerpt":"Ruby/Rails 的 Array 有好几种获取元素个数的方法有好几个，Length, Size和Count。大多数时候这几个方法结果都一样，但是他们之间的区别其实是很大的，如果不搞清楚，到时很可能搞得你很头疼。   size 和 length 是完全一样的，都返回 Array 或者 Hash 中元素的个数，而 count 可以接受一个block作为参数。   但是在 ActiveRecord 中，区别就来了。size 考虑缓存，而count不会，他每次都会执行一个 sql count 语句。比如你的 Rails 代码中   @subjects = Subject.includes(:users).all   在你的view中，你要获取每个subject下user的数目   &lt;%= subject.users.count %&gt; &lt;%= subject.users.size %&gt;   这里区别就大了，如果你用的是count，那么你就制造了N+1查询问题了，查看你的log你就会看到很多条sql count记录。而如果你用size，或者length，你就不会有这个问题。原因就是因为count不考虑任何缓存，每次都执行一个count .如果不清楚这个区别，那么就会疑惑明明已经做了eager loading了，为什么不起作用呢？而其实是用错了方法。   ","categories": ["ruby"],
        "tags": ["ruby","rails"],
        "url": "http://localhost:4000/ruby/2013/01/17/sizelength-and-count-of-array-in-rubyrails/",
        "teaser":"http://localhost:4000/assets/default-header.jpg"},{
        "title": "在ubuntu 上安装 Tomcat",
        "excerpt":"Assignment需要，多年后又要开始折腾Java和Tom猫了。到不了的地方叫远方，逃不脱的语言叫java啊。   首先当然是从官网下载tomcat了，不管6.x还是7.x都没有问题，我下载的是6.x，然后解压   unzip apache-tomcat-6.x.x.zip   然后把这猫搬到系统目录下，   sudo mv /home/ubuntu/apache-tomcat-6.x.x /usr/local   接着需要改tomcat文件夹的ownership   sudo chown -R YourName /usr/local/apache-tomcat-6.x.x   然后还需要给shell脚本执行的权限，不然就瞎了   sudo chmod +x /usr/local/apache-tomcat-6.x.x/bin/*.sh   “+x”表示添加execute的权限   然后运行   /usr/local/apache-tomcat-6.x.x/bin/startup.sh   再通过浏览器访问:8080, 就可以看到那只猫了   如果启动失败，很可能是你的JAVA_HOME或者JRE_HOME没有设置，或者设置有问题  ","categories": ["linux"],
        "tags": ["tomcat","linux"],
        "url": "http://localhost:4000/linux/2013/02/05/ubuntutomcat/",
        "teaser":"http://localhost:4000/assets/default-header.jpg"},{
        "title": "在ubuntu 和 apache上 安装 passenger 来运行 rails",
        "excerpt":"最近装了好几次 Rails 系统了，不论是在 Ubuntu 上还是在 OSX 上，发现都是用 RVM 比较方便，安装过程还是有点繁琐的，所以纪录一下，下次用的时候自己做个参考。 首先是升级一下Ubuntu系统， sudo apt-get update # sudo apt-get dist-update 安装的快慢当然取决于你的网速，如果用的是美国的虚拟机，那速度就是soso的，如果用的是GFW内的网络，那就等会吧。 接着再安装Apache， sudo apt-get install apache2 至于数据库，那就看你自己需要了，用什么就装什么，不管mysql还是postgrel都是一句命令的事情。 接下来要装的东西就比较重要了，安装编译需要的各个组建，如果是OSX上，就会要求安装XCode Command Tools， sudo apt-get install build-essential 这是最重要的一步。不然下面就进行不下去了。 我喜欢用RVM来管理Ruby和Rails，所以就来安装RVM，不管是在OSX上还是在Ubuntu上，基本一样。 curl -L https://get.rvm.io | bash -s stable source ~/.profile #for ubuntu rvm requirement rvm requirement这个命令会告诉你你的系统运行Ruby，或者JRuby还缺什么，按照你的需要根据它的提示运行相应的命令就行。然后就是安装Ruby和Rails了， rvm install...","categories": ["rails"],
        "tags": ["ubuntu","apache","passenger","rails"],
        "url": "http://localhost:4000/rails/2013/02/25/install-passenger-run-rails-on-apache-ubuntu/",
        "teaser":"http://localhost:4000/assets/default-header.jpg"},{
        "title": "Apache 下网站文件夹的权限设置",
        "excerpt":"权限设置永远是让人头疼的事情，昨天想在Apache下直接见一个vhost，把它mapping到非Apache DocumentRoot下的一个文件夹，结果一直给这个错误 client denied by server configuration 搞的稍微有点郁闷，Google到的东西也很多不靠谱，直到在Apache官网上看到 The default Apache config includes Deny from all in the &lt;Directory&gt; block the DocumentRoot - this must be changed to allow access! If you change the DocumentRoot, you will need to change the &lt;Directory&gt; block referring the old root, to the refer...","categories": ["apache"],
        "tags": ["apache","folder","security"],
        "url": "http://localhost:4000/apache/2013/03/10/client-denied-by-server-configuration-apache/",
        "teaser":"http://localhost:4000/assets/default-header.jpg"},{
        "title": "7 Google Search Operators You Should Know",
        "excerpt":"filetype: This search operators restricts the results to items of a specific type. Entering puppies filetype:jpg will get you lots of puppy pictures intext/allintext: Finds pages containing a specific string of text. For example, Beatles breakup intext:Paul McCartney finds pages containing Paul’s name and the words Beatles, breakup, or both....","categories": ["web"],
        "tags": ["web","google"],
        "url": "http://localhost:4000/web/2013/03/21/7-google-search-operators-you-should-know/",
        "teaser":"http://localhost:4000/assets/default-header.jpg"},{
        "title": "清理重复的 Open With 选项",
        "excerpt":"Mac用得越久，第一感觉是越用越顺手，各种快捷键，命令行，啪啪啪，事情就搞定了。但是同时不可避免的也会产生很多垃圾，比如你的Open With, 下面是我用了没多久的新rmbp的选项：      目前只有一个重复的”Evernote”，但是慢慢的就会越来越多，多到你会想办法来解决这个问题为止。   通过Command来搞定  Mac上几乎所有系统问题都可以用shell command来搞定。要清除重复的command, 可以执行下面的命令    每次都要copy上面的命令到Terminal麻烦吗？麻烦，那就创建一个alias吧。 把下面这段script添加到你的.bash_profile里     以后只要在terminal里执行clearow就搞定了。   通过Alfred workflow  你用Alfred吗？大多数mac用户应该都用，不过有没有买powerpack来激活workflow就另说了。如果你买了powerpack，那就恭喜你，下载这个,把它倒入Alfred，就可以通过Alfred来执行了，执行完了还会有系统Notification   用Alfred调出Command,      “Enter”执行，执行完系统通知，      ","categories": ["mac"],
        "tags": ["terminal","open with","alfred","workflow"],
        "url": "http://localhost:4000/mac/2013/03/30/clean-duplicates-open-with-commands/",
        "teaser":"http://localhost:4000/assets/default-header.jpg"},{
        "title": "Hadoop Sample WordCount's Issue",
        "excerpt":"Hadoop提供的例子WordCount.java很简单，但是在hadoop版本为1.0.4上跑确有问题，在运行时会提示：      No job jar file set.  User classes may not be found. See JobConf(Class) or  JobConf#setJar(String).    提示貌似明确，实则需要Google。其实只要加一句代码就行   job.setJarByClass(WordCount.class);   再试试！   ","categories": ["hadoop"],
        "tags": ["cloud","hadoop","wordcount"],
        "url": "http://localhost:4000/hadoop/2013/04/24/hadoop-sample-wordcounts-issue/",
        "teaser":"http://localhost:4000/assets/default-header.jpg"},{
        "title": "basic and common hadoop commands",
        "excerpt":"Copy Files to DFS hadoop dfs -copyFromLocal &lt;local-folder-path&gt; &lt;path-under-hadoop-folder&gt; Remove Files from DFS hadoop dfs -rmr &lt;folder-path-under-hadoop-dfs-dir&gt; Retrieve Files from DFS hadoop dfs -getmerge /var/hadoop/hadoop-output2 /tmp/hadoop-output4 Start a new Job hadoop jar YourJarFile.jar YourMainClass &lt;input-folder-path&gt; &lt;output-folder-path&gt; List all Hadoop Jobs hadoop job -list Kill a Running Job hadoop job -kill...","categories": ["hadoop"],
        "tags": ["hadoop","mapreduce"],
        "url": "http://localhost:4000/hadoop/2013/04/30/basic-and-common-hadoop-commands/",
        "teaser":"http://localhost:4000/assets/default-header.jpg"},{
        "title": "subtitles-Mac上最好用的字幕搜索App",
        "excerpt":"前两天发现了一款很好用的搜索字幕的App，叫做subtitles,免费，好用。作者刚刚更新了程序，目前版本是2.0.   使用非常简单，只要把视频文件拖进app的界面里，它就会开始搜索      右边的“勾”表示字幕搜索成功了，字幕文件会存放到视频文件所在的目录，并且跟视频文件同名。非常方便。   此外，还可以在Preference中设置你的首选语言，      如果Primary Language搜索不到，就会搜索Secondary Language。因为字幕是从Open Subtitles上搜索下来的，所以，基本上找不到中文的， Sigh.   PS:如果字幕文件下载成功了，但是加载字幕失败，很可能是字幕文件选用的字体系统不支持，需要换一个字幕文件。  ","categories": ["mac"],
        "tags": ["subtitles","mac","app"],
        "url": "http://localhost:4000/mac/2013/05/18/best-subtitles-search-app/",
        "teaser":"http://localhost:4000/assets/default-header.jpg"},{
        "title": "RubyMine:Rails 3.x launcher script was found instead of Rails 4.x",
        "excerpt":"前两天把一个Rails项目从3.2升级到了4.0 rc1, 然后又看到消息说Rubymine更新了，开始支持Rails4了，于是就更新到了最新版，5.4.2, 不过没看到有什么明显的变化，但是确发现不能启动Server，总是碰到这个错误   Rails 3.x launcher script was found instead of Rails 4.x one. You need '/Users/fengqijun/Documents/workspace/yourproject/bin/rails' script to launch Rails server. Please update server launcher according to Rails 4.x documentation.   有问题，找Google，但是没找到什么有用的信息，只在Stackoverflow上找到一条说是因为项目中有Rails Gem用的是旧的，比如3.x的和2.x的共存，就会出现这种问题。但是我这机器上只有一个4.0rc的，所以应该就不是这个问题了。   前两天也懒得弄，今天又试了一把，发现还是这样。开始觉得可能是RubyMine生成的Project的设置的问题，所以就建了一个全新的项目，运行，成功，但是看到运行的是那个项目下/bin/rails这个，新建的项目有一个bin文件夹，文件夹里有Rails，Rake，Bundle，   rails rake bundle   把这个bin文件夹复制到原先那个项目中，Bingo，就能在rubymine中开启server了。   但是，这也太傻了点吧，发现旧项目中没有就不会生成一个吗？还好意思卖那个价，虽然我是用2折的价钱买的。   Silly RubyMine!  ","categories": ["rails"],
        "tags": ["rails","rubymine","rails4","rails3"],
        "url": "http://localhost:4000/rails/2013/05/19/rubymine-rails3x-launcher-script-was-found-instead-of-rails4x/",
        "teaser":"http://localhost:4000/assets/default-header.jpg"},{
        "title": "Strong Parameters and Routes in Rails4",
        "excerpt":"###Strong Parameters    ###Routes and ThreadSafty    ","categories": ["rails"],
        "tags": ["rails","params"],
        "url": "http://localhost:4000/rails/2013/05/26/strong-parameters-and-routes-in-rails4/",
        "teaser":"http://localhost:4000/assets/default-header.jpg"},{
        "title": "ruby bang methods in rails seed",
        "excerpt":"Ruby中的有所谓的Bang Method,就是方法名称后有!的，比如capitalize!      Methods that include an exclamation point, such as capitalize are known as dangerous methods. In Ruby speak, that means they will modify the object it’s called on    但是在Rails ActiveRecord中，Bang方法还会抛出异常，而不是返回true/false, 比如save!   但是今天要说的是另外一种情况，就是在Rails的seed文件中，在production环境下，我执行rake db:seed 始终出现第一条纪录，   City.create(name: 'Chicago') City.create(name: 'Copenhagen')   没有任何提示，也没有任何异常。直到我使用对应的bang方法，才正确执行，   City.create!(name: 'Chicago') City.create!(name: 'Copenhagen')   不清楚为什么，也许是因为production环境？  ","categories": ["ruby"],
        "tags": ["ruby","method"],
        "url": "http://localhost:4000/ruby/2013/06/05/ruby-bang-methods/",
        "teaser":"http://localhost:4000/assets/default-header.jpg"},{
        "title": "set up postgresql on ubuntu 12.04 for rail",
        "excerpt":"在Rails开发中，Postgresql现在是最热门的数据库了，我也把我的项目从mysql转到了postgresql, 刚开始在ubuntu上配置碰到了好些个问题，Google了好些资料，这里总结一下，算是备份。 sudo apt-get install postgresql 切换到用户postgre sudo su postgres 创建就可以创建数据库用户，修改密码 createuser railsUser; alter user railsUser with password 'password' 创建数据库 createdb -p 5432 -O railsUser -U railsUser -E UTF8 MyRailsProject 备份还原数据库 pg_dump -p 5432 -h localhost -Fc -U railsUser --no-owner MyRailsProject &gt; ~/myrails.pgdump pg_restore -p 5432 -h localhost -Fc -d...","categories": ["database"],
        "tags": ["postgresql","ubuntu"],
        "url": "http://localhost:4000/database/2013/06/06/set-up-postgresql-on-ubuntu-1204-for-rails/",
        "teaser":"http://localhost:4000/assets/default-header.jpg"},{
        "title": "Generate a New Secret Token for Rails Apps",
        "excerpt":"在把我的Rails程序升级到4.0rc1之后，需要设置一个secret_key_base。这个key的是用来加密你的cookie的，     Rails 4.0 introduces ActiveSupport::KeyGenerator and uses this as a base from which to generate and verify signed cookies (among other things).    具体的解释，看官方文档   生成一个key非常简单，   ``` ruby secret token uisng ruby irb #进入irb require ‘securerandom’ SecureRandom.hex(64)   还有更简单的，在Rail程序的目录里  ``` ruby generate a secret token using rake rake secret  ","categories": ["rails"],
        "tags": [],
        "url": "http://localhost:4000/rails/2013/06/22/generate-a-new-secret-token-for-rails-apps/",
        "teaser":"http://localhost:4000/assets/default-header.jpg"},{
        "title": "Password Hash and Salt in Your Users Fixtures File",
        "excerpt":"在Rails中进行测试时，可以使用fixtures来构建测试数据，Fixtures会把对应的Yaml文件加在到测试数据库中方便测试。   昨天在测试password验证时碰到个问题，因为数据库中存的是Hash和Salt，那我要如何在对应的users.yml文件中来生成这些hash和salt呢？其实yml文件支持erb表达式的。   ruby generate hash and salt in yaml files &lt;% require 'digest/md5' %&gt; &lt;% SALT = BCrypt::Engine.generate_salt unless defined? SALT %&gt; one:   name: user1   email: jun1st@live.com   password_salt: &lt;%= SALT %&gt;   password_hash: &lt;%= BCrypt::Engine.hash_secret('ABCD1234a', SALT) %&gt;    ","categories": ["rails","testing"],
        "tags": [],
        "url": "http://localhost:4000/rails/testing/2013/07/03/password-hash-and-salt-in-your-users-fixtures-file/",
        "teaser":"http://localhost:4000/assets/default-header.jpg"},{
        "title": "Deploy Rails 4 to Ubuntu With Capistrano Part1",
        "excerpt":"程序的发布是Web Application的最后一步，虽然是最后一步，但是十分重要的一步，不然你的程序跑不起来就白瞎了。 Capistrano是Rails Community中比较流行的部署工具，本文就记录一下如何用Capistrano来部署到Ubuntu 12.04 Server。 篇幅较长，第一部分先写如何建立好Server环境。 专用于部署的用户 用Root用户来部署虽然能成功，但是权限太高，危险系数就高。所以应该用一个专用的用户来执行部署，这个用户的权限仅够用户部署。 useradd -d /home/deployer -m deployer 再设置个密码 passwd deployer 再赋予sudoer的权限，基本不需要用到sudo，但是以防万一 visudo #deployer ALL=(ALL) ALL 把这个加入sudoer 文件中 再新建一个Group，并把deployer加到这个Group里 sudo groupadd deployers sudo usermod -a -G deployers deployer 然后把部署目录的权限赋给这个用户， sudo chown -R deployer:deployers /deploy/to/path sudo chmod -R g+w /deploy/to/path 添加RSA Key到Server中 在部署时，把部署用到的用户的密码写在Deploy文件中是比较不安全的事情。因此可以用信任rsa key来登录。 首先在server中建立.ssh文件夹...","categories": ["rails"],
        "tags": [],
        "url": "http://localhost:4000/rails/2013/07/23/deploy-rails-4-to-ubuntu-with-capistrano-1/",
        "teaser":"http://localhost:4000/assets/default-header.jpg"},{
        "title": "iOS App中自定义字体",
        "excerpt":"iOS中提供的字体有限，不少新近出来的好看的字体都没有。但其实要使用这些新字体不仅可能，而且挺简单。   把字体文件拖进iOS项目中，这个字体文件需要是.otf的，就是open type font, 然后在info.plist文件中添加一项：   Fonts provided by application \tItem 0\t\t\t\t\t\t\"Signika-regular.otf\"   这里填写的是字体文件的全名。   然后给UITextView或者UITextEdit设置字体   [self.textEdit setFont:[UIFont fontWithName:@\"Signika\" size:20.0f]];   需要Clean Build一下项目，如果在真机上调试，可能还需要把App删了再装才能看到效果。  ","categories": ["iOS"],
        "tags": [],
        "url": "http://localhost:4000/ios/2013/07/29/custom-font-in-ios-app/",
        "teaser":"http://localhost:4000/assets/default-header.jpg"},{
        "title": "deploy-rails-4-to-ubuntu-with-capistrano-2",
        "excerpt":"上篇说了Server的设置，本篇说一下程序的设置。 首先是安装Capistrano这个Gem，在Gemfile文件中添加 ```ruby gemfile group :development do gem ‘capistrano’ end 只有Development环境需要这个Gem，&lt;code&gt;bundle install&lt;/code&gt; 然后在你项目的Root目录里执行 ```ruby bundle install 在/Config目录下就会有deploy.rb文件进行Capistrano的配置 首先设置App的名字和Repository的地址 set :application, \"Your application's name\" set :repository, \"git@github.com:your-username/your-repository-name.git\" 设置Server上的部署路径 set :deploy_to, \"/path/to/your/app\" 设置代码管理的类型和分之 set :scm, :git set :branch, \"master\" 设置部署用户和权限 set :user, \"deployer\" set :use_sudo, false 和其它一些基本的设置 set :rails_env, \"production\" set :deploy_via,...","categories": ["rails"],
        "tags": [],
        "url": "http://localhost:4000/rails/2013/08/08/2013-07-23-deploy-rails-4-to-ubuntu-with-capistrano-2/",
        "teaser":"http://localhost:4000/assets/default-header.jpg"},{
        "title": "Core Data:Delete All Entries of An Entity",
        "excerpt":"Core Data还是有很多地方不够便利，比如删除有个Entity所有的记录，还是需要一条一条删除 NSFetchRequest * allPhoneNumbers = [[NSFetchRequest alloc] init]; [allPhoneNumbers setEntity:[NSEntityDescription entityForName:@\"PhoneNumber\" inManagedObjectContext:self.objectContext]]; [allPhoneNumbers setIncludesPropertyValues:NO]; //only fetch the managedObjectID NSError * error = nil; NSArray * phoneNumbers = [self.objectContext executeFetchRequest:allPhoneNumbers error:&amp;error]; //error handling goes here for (NSManagedObject * phoneNumber in phoneNumbers) { [self.objectContext deleteObject:phoneNumber]; } NSError *saveError = nil; [self.objectContext...","categories": ["ios"],
        "tags": [],
        "url": "http://localhost:4000/ios/2013/08/22/core-data-delete-all-entries-of-an-entity/",
        "teaser":"http://localhost:4000/assets/default-header.jpg"},{
        "title": "move from rvm to rbenv",
        "excerpt":"一直都在用RVM，虽然网上一直抱怨说RVM太Invasive了，太繁重;但是我一直用得挺顺手，也挺方便，就没有换它的冲动。直到最近因为项目的需要，别人都用rbenv，为了避免造成什么配置问题，就准备换rbenv了。   ###删除RVM###   清除所有RVM的安装记录  rvm implode  然后根据提示删除.rvm文件夹和.bash_profile或者.zshrc文件中关于rvm的配置   ###安装rbenv### 通过Homebrew安装rbenv   ```ruby install through homebrew brew update brew install rbenv brew install ruby-build   __添加rbenv到Path中__   echo ‘export PATH=”$HOME/.rbenv/bin:$PATH”’ » ~/.zshrc   __添加init到shell中__   echo ‘eval “$(rbenv init -)”’ » ~/.bash_profile   __通过ruby-build安装ruby__  ```ruby rbenv install 2.0.0-p247 rbenv rehash   设置Global（默认）Ruby版本   rbenv global 2.0.0-p247   使用specific版本的ruby   rbenv local 1.9.3-p327   这一命令会在当前目录下生成一个.ruby-version文件，里面会有使用的ruby的版本号。   ","categories": ["ruby"],
        "tags": [],
        "url": "http://localhost:4000/ruby/2013/08/29/move-from-rvm-to-rbenv/",
        "teaser":"http://localhost:4000/assets/default-header.jpg"},{
        "title": "Notice For Ajax Request In Rails",
        "excerpt":"当一个Rails的Form以Remote的方式提交时，自带的Flash Notice通知方式就不在有效了。现在的Web开发越来越重视客户端，Ajax请求越来越多，因此需要有一个统一的方式来显示异步操作的通知。 把通知消息用JSON返回? 可以，但是不可行；有的更新操作不需要返回任何数据。在正常返回json数据的时候，如何把这个通知消息插入到结果中，怎么插入等等，变数太多，不同意。 利用ResponseHeader 利用Rails的after_filter把通知消息放到ResponseHeader中. ```ruby Insert Notice Message to Response Header after_filter :flash_to_headers def flash_to_headers return unless request.xhr? if !flash[:notice].blank? or !flash[:error].blank? response.headers[‘X-Flash-Message’] = flash[:notice] || flash[:error] end response.headers[‘X-Flash-Type’] = flash[:type] unless flash[:type].blank? # repeat for other flash types… flash.discard # don't want the flash to appear when...","categories": ["rails"],
        "tags": [],
        "url": "http://localhost:4000/rails/2013/09/05/flash-with-ajax-request-in-rails/",
        "teaser":"http://localhost:4000/assets/default-header.jpg"},{
        "title": "用CSS禁用Link",
        "excerpt":"最简单的禁用页面上某个Link的方法？   JavaScript   $('a.current-page').click(function() { return false; });   CSS, better?   &lt;a href=\"link.html\" class=\"active\"&gt;Link&lt;/a&gt; .active {    pointer-events: none;    cursor: default; }  ","categories": ["web"],
        "tags": [],
        "url": "http://localhost:4000/web/2013/09/22/disable-links-with-css/",
        "teaser":"http://localhost:4000/assets/default-header.jpg"},{
        "title": "Rails的fragment cache和content_for",
        "excerpt":"对于任何一个网站来说，做好Cache都是一件非常重要的事情。作为以高生产力为口号的Ruby on Rails自然是提供了很方便的Cache机制。比如fragment cache, 可以用来cache一段页面代码，结合content_for, 那就更是顺手拈来了。但是前提是你真的了解content_for的机制。 看这段代码 ruby cache and content for #wrong &lt;% cache 'store_sidebar', :expire_in =&gt; 1.hour do %&gt; &lt;% content_for :sidebar do %&gt; &lt;div id=\"store_sidebar\"&gt; &lt;%= render partial: 'tags', locals: { tags: @ebook_tags } %&gt; &lt;/div&gt; &lt;% end %&gt; &lt;% end %&gt; 在development环境中运行的好好的，发到production就发现cache的内容都是空。 why? 一个原因是development环境中cache机制默认是关闭的，And you are...","categories": ["rails"],
        "tags": [],
        "url": "http://localhost:4000/rails/2013/10/12/railsde-fragment-cachehe-content-for/",
        "teaser":"http://localhost:4000/assets/default-header.jpg"},{
        "title": "在Ubuntu 12.04上建立L2TP/IPSec VPN",
        "excerpt":"前两天把VPS重新刷了，尼玛的vpn就没有了。建vpn这种事情是偶尔干一次的，然后你就忘了，直到你下一次需要重新安装的时候，你猜会想起来，想不起来就Google；这次我自己就google了半天，因此在这里记录一下，以备自己以后需要，也方便一下需要的人。 ```sh install openswan xl2tpd apt-get install openswan xl2tpd 我是用root账户安装的，如果不是root账户，需要添加&lt;code&gt;sudo&lt;/code&gt;。 安装过程中会询问你是否需要是否用X.509证书来验证IPSec的连接，选择__No__; 编辑/etc/ipsec.conf文件 ```sh version 2.0 config setup nat_traversal=yes virtual_private=%v4:10.0.0.0/8,%v4:192.168.0.0/16,%v4:172.16.0.0/12 oe=off protostack=netkey conn L2TP-PSK-NAT dpddelay=40 dpdtimeout=130 dpdaction=clear rightsubnet=vhost:%priv also=L2TP-PSK-noNAT conn L2TP-PSK-noNAT authby=secret pfs=no auto=add keyingtries=3 rekey=no ikelifetime=8h keylife=1h type=transport left=You server IP address leftprotoport=17/1701 right=%any rightprotoport=17/%any 修改/etc/ipsec.secrets 设置IPSec握手时的Machine Authentication – Shared...","categories": ["vpn"],
        "tags": [],
        "url": "http://localhost:4000/vpn/2013/10/21/create-a-l2tp-slash-ipsec-vpn-on-ubuntu-12-dot-04/",
        "teaser":"http://localhost:4000/assets/default-header.jpg"},{
        "title": "用ActiveRecord.Import插入批量数据",
        "excerpt":"Rails的ActiveRecord很方便，但是没有提供批量插入的方法，虽可以把.save和.create放在一个loop里循环调用，但是性能可不怎么样； 调用Save n = 5000 res = Benchmark.measure do n.times do City.create(:name =&gt; 'shanghai', :description =&gt; 'shanghai is good', :index_url =&gt; 'http://www.yahoo.com') end end puts res 3.110000 0.400000 3.510000 (5.405846) 调用Create n = 5000 cities = Array.new n.times do cities &lt;&lt; { :name =&gt; 'shanghai', :description =&gt; 'shanghai is good',...","categories": ["rails"],
        "tags": [],
        "url": "http://localhost:4000/rails/2013/10/27/using-activerecord-import-to-insert-batch-records/",
        "teaser":"http://localhost:4000/assets/default-header.jpg"},{
        "title": "Use Pow to Rackup Your Rails in Development",
        "excerpt":"Pow是37Signals出品的来启动Rails的App。不用不知道，用过的都说好！   在习惯了用rails s来启动WEBrick之后，开始时觉得方便，但是慢慢的就觉得这个好麻烦，每次开Server都要跑到Terminal去执行；我想37Signals的人肯定也是觉得这个步骤太繁琐了，所以就写了个Pow。   安装Pow   可以用Homebrew安装   brew install pow   也可以用Pow提供的脚本   curl get.pow.cx | sh   要让Pow来启动你的App，只要在Pow下面建立一个symbolic link就可以了。 我用脚本安装的，在~目录下有一个.pow的文件夹，   cd ~/.pow ln -s /path/to/myapp   只有在浏览器中http://myapp.dev就能访问你的site了。   如果site能打开了，那么恭喜你了。如果你打开不了，查看一下这个TroubleShootingwiki，基本上都能找到你的问题。   当中一个常见的问题就是Pow用的是系统的ruby，而不是rbenv/rvm管理的ruby，因此需要给pow指定ruby。在~目录下建一个.powconfig,修改PATH(以rbenv为例)   export PATH=\"$HOME/.rbenv/shims:$HOME/.rbenv/bin:$PATH\"   ps: 遇到一个比较诡异的问题，我要把我项目下的.ruby-version文件删掉Pow才起得来   更方便的是，还有mac app可以来管理pow，Anvil这个精致小巧的app管理起来十分方便。      ","categories": ["rails"],
        "tags": [],
        "url": "http://localhost:4000/rails/2013/11/04/serve-rails-from-pow-in-development-on-osx/",
        "teaser":"http://localhost:4000/assets/default-header.jpg"},{
        "title": "Ruby的object_id和小整数",
        "excerpt":"在做Koan的Learn Ruby的时候，碰到一个挺有意思的练习， def test_small_integers_have_fixed_ids assert_equal 1, 0.object_id assert_equal 3, 1.object_id assert_equal 5, 2.object_id assert_equal 201, 100.object_id # THINK ABOUT IT: # What pattern do the object IDs for small integers follow? end 根据这增长的逻辑，可以猜测出来这个object_id = value * 2 + 1, 但是猜测是不可靠的，还是了解其为什么是这样的才行。 显示在stackoverflow上看到这个这篇文章, in MRI the object_id of an object is the...","categories": ["ruby"],
        "tags": [],
        "url": "http://localhost:4000/ruby/2013/11/14/rubys-object-id-and-small-integer/",
        "teaser":"http://localhost:4000/assets/default-header.jpg"},{
        "title": "Install SimpleCaptcha for Rails",
        "excerpt":"在Rails中用SimpleCaptcha，安装有什么好说的，不就是在Gemfile中添加   gem \"galetahub-simple_captcha\", :require =&gt; \"simple_captcha\"   是的！   但是这样装完用不了。   如果你碰到这样的错误信息      Error while running convert: sh: convert: command not found    说明你缺少ImageMagick   如果你看到这个错误信息      Error while running convert: convert: unable to read font `/usr/local/share/ghostscript/fonts…    你缺少ghostscript   安装这两个最简单的就是Brew   brew install imagemagick brew install ghostscript   ","categories": ["rails"],
        "tags": [],
        "url": "http://localhost:4000/rails/2013/12/06/install-simplecaptcha-for-rails/",
        "teaser":"http://localhost:4000/assets/default-header.jpg"},{
        "title": "2013 OSX Apps推荐",
        "excerpt":"2013年最火的依然是Apple，iPhone还是最炙手可热的手机，顺带也带动了Mac的火热。我用Mac笔记本2年多了，积累了不少好的应用，分享一下 系统辅助 Alfred: 必备神器，基于Spotlight的检索应用。如果购买Powerpack, 添加各种插件，提高你不知多少倍的生产力。 百度输入法：最好用的中文输入法 The Unarchiver: 最好用的解压缩工具，可以直接从Mac App Store下载 Diff Merge: Mac上没有Beyond Compare(开发中），这个也不错，凑活用 JumpCut: 粘贴板辅助工具，记录10个条目 PCKeyboardHack和KeyRemap4MacBook: 配合一起用，可以修改键盘的功能，比如把Caps键改成一个超级功能键 XtraFinder: Finder增强工具，比如剪切功能 GoAgent: 你懂的，不懂就Google吧 开发工具 Brew: 最方便的包管理力气 iTerms: 替换系统的Terminal zsh配合oh-my-zsh: 比bash更好的交互和提示 SublimeText 2/3: 如果你不会用Vim，又想要vim的功能，那就用这个吧 Sequel Pro: MySQL管理工具，最好的 Mou: Markdown编辑工具 Dash: 查看文档的利器，节省时间 Github: Github官方客户端，简洁易用。备选：SourceTree VirtualBox: 虚拟机软件 Pow和Anvil: Rails开发必备，告别:rails s XCode: 不说了 图片编辑...","categories": ["osx"],
        "tags": [],
        "url": "http://localhost:4000/osx/2013/12/27/2013-osx-appstui-jian/",
        "teaser":"http://localhost:4000/assets/default-header.jpg"},{
        "title": "kind_of? is_a? and instance_of?",
        "excerpt":"kind_of? and is_a? Ruby中判断一个Class是否是某一Class或者某一Class的子类，可以用kind_of?, is_a?。两个方法都可以用，那这两个方法有什么不同吗？ 两个方法其实是同一个方法，只是名字不同而已。 Returns true if class is the class of obj, or if class is one of the superclasses of obj or modules included in obj. instance_of? instance_of?用来判断某个对象是不是某一个类的实例，必须是直接类，父类或者继承链上的module都会返回false class A; end class B &lt; A; end class C &lt; B; end b = B.new b.instance_of? A...","categories": ["ruby"],
        "tags": [],
        "url": "http://localhost:4000/ruby/2014/01/03/kind-of-is-a-and-instance-of/",
        "teaser":"http://localhost:4000/assets/default-header.jpg"},{
        "title": "从Sublime Text 2 升级到Sublime Text 3",
        "excerpt":"Sublime Text 3 Beta推出已经有半年多了，基本上所有的插件都支持3了，是时候升级了。   为什么摇升级？一个理由就够了，3的打开速度比2快。   那么多插件怎么升级呢？   把~/Library/Application Support/Sublime Text 2/Packages下面所有的包都复制到Sublime Text 3对应的Packages目录下，除了_Default_和_Package Control_这两个文件夹   当然，先要给Sublime Text 3装上Package Control，安装  ","categories": ["tools"],
        "tags": [],
        "url": "http://localhost:4000/tools/2014/01/04/export-sublime-text-2-to-3/",
        "teaser":"http://localhost:4000/assets/default-header.jpg"},{
        "title": "升级到Capistrano 3",
        "excerpt":"最近开始把Rails项目中用到的Capistrano升级到3，发现这个变化有点大，第一次尝试的时候发现一堆的错误，因为急于发布，只要退回到版本2了。之后开始慢慢搜集网上关于新版本的变化和设置，做升级准备。 更新Gemfile 读一下官方的升级文档，也许没有兴趣全部读完（比如我），但是扫一遍还是很有必要的。 group :development do gem 'capistrano' gem 'capistrano-rbenv', github: \"capistrano/rbenv\" gem 'capistrano-rails', '~&gt; 1.1.0' end 然后bundle install 修改Capfile 这个文件的变化是比较大的，如果升级了Gem没有改这个文件，那执行时第一句可能出错了。 # Load DSL and Setup Up Stages require 'capistrano/setup' # Includes default deployment tasks require 'capistrano/deploy' require 'capistrano/bundler' require 'capistrano/rails/assets' require 'capistrano/rails/migrations' # Loads custom tasks from `lib/capistrano/tasks' if...","categories": ["rails"],
        "tags": [],
        "url": "http://localhost:4000/rails/2014/01/13/upgrade-to-capistrano-3/",
        "teaser":"http://localhost:4000/assets/default-header.jpg"},{
        "title": "Capistrano 3中配置unicorn和whenever 的Task",
        "excerpt":"升级到Capistrano 3之后，之前配置的重启Unicorn等的脚本都不行了，StackOverflow上一堆解决方案就是不要升级，继续用2.x版本。顺便吐槽下SO的问题和答案的质量越来越低了   配置Unicorn的Task    配置Whenever的Task    在deploy.rb中配置用到的参数，调用Task   ruby deploy.rb set :whenever_identifier, -&gt;{ \"#{fetch(:application)}_#{fetch(:stage)}\"} namespace :deploy do   desc 'Restart application'   task :restart do     invoke 'unicorn:restart'     invoke 'update_crontab'   end   after :finishing, 'deploy:cleanup' end   ","categories": ["rails"],
        "tags": [],
        "url": "http://localhost:4000/rails/2014/01/22/setup-capistrano-3-for-rails-deployment/",
        "teaser":"http://localhost:4000/assets/default-header.jpg"},{
        "title": "在多台电脑上保持Octopress博客的同步",
        "excerpt":"使用Octopress在Github Pages上建博客，根据Octopress官网的介绍建立好博客后，想在另一台电脑上写文章时，如何设置？   按照官网的介绍再来一遍会把已经发不到Pages上的全部删掉。当然可以把已经有的文章copy下来，再发遍就是了。但是这么个搞法，起初的那台机器就又不行了！肯定会有更好的解决方法   Octopress项目结构  其实整个Octopress项目无非是一个git文件夹，只是他借用了git的branch功能。   整个project的源文件在source的分支上，编译后的_deploy在master分支上，而Pages会读取master分支上的，因此打开username.github.io看到的是和本地预览时看到的一样的，而不是一堆源文件。   完全复制项目  既然是一个git项目，那就可以整个克隆下来，只不过是要克隆两次。首先克隆source分支。   git clone -b source git@github.com:jun1st/jun1st.github.io.git   再克隆master分支，master分支默认的文件夹路径是_deploy   git clone git@github.com:jun1st/jun1st.github.io.git _deploy   就这么简单 PS: 这里的路劲是我的项目的地址，别一起复制了:)   之前解决这个问题的时候，就想写这篇的，又觉得太简单就算了。今天不知道怎么搞的，pro上的项目又乱了，又弄了一次，也就写了，做个记录。  ","categories": ["blog,","web"],
        "tags": [],
        "url": "http://localhost:4000/blog,/web/2014/02/05/keep-octopress-in-sync-on-multiple-devices/",
        "teaser":"http://localhost:4000/assets/default-header.jpg"},{
        "title": "uses of modules in ruby part 1",
        "excerpt":"Module在Ruby中扮演着至关重要的角色，如果你从是Java或者C#背景转到Ruby来的，一开始你通常会忽视掉Module的重要性。直到你深入学习Ruby，你才会发现Module有多么重要 作为命名空间 作为命名空间这个功能十分好理解，模块嘛！ 比如你创建一个Document的类，由于Document这个字非常常见，因此别人也使用它作为类名的概率不低。 如果碰到这种情况，那就苦逼了。由于Ruby对于Class的定义方式，Ruby检测到两处定义同一个Class并不认为有问题，而是把两个类的定义合并（Monkey Patch就是这么实现的）。如果遇到同样的方法或字段，后定义的会覆盖前面的。 用作MixIn Module可以被用来代替Monkey Patch, 以mixin的方式给类定义增加方法 ```ruby include module class Computation include Comparable end 通过Include Comparable这个module，Computation类定义就有了Comparable的各个比较方法，&lt;code&gt;&lt;, &lt;=, &gt;, &gt;=, ==&lt;/code&gt;等。 Computation类的实例也就有了这些比较方法。 当把include一个module到一个类定义中时，ruby会把这个module加入到这个类的class chain上，比如 ```ruby include module: added to class chain module A end class AClass include A end AClass.ancestors =&gt; [AClass, A, Object, Kernel, BasicObject] 所以，所有AClass的实例都会有Module...","categories": ["ruby"],
        "tags": [],
        "url": "http://localhost:4000/ruby/2014/02/12/uses-of-modules-in-ruby-part-1/",
        "teaser":"http://localhost:4000/assets/default-header.jpg"},{
        "title": "用dropbox同步sublime text的packages的正确方法",
        "excerpt":"Sublime Text之所以那么强大，是因为她支持各种各样的插件包，几乎你能想到的她都有。因此把Sublime Text配置到让你觉得舒服的情景是一件比较繁琐的事情，你绝对不会想要配置第二遍。 当然作为一个程序员，想尽一切办法也不干Repeat的事情。   怎么办？同步嘛，用各种同步软件在各个机器上保持同步，比如Dropbox。   在主机上   cd ~/Library/Application\\ Support/Sublime\\ Text\\ 3/Packages/ mkdir ~/Dropbox/Sublime mv User ~/Dropbox/Sublime/ ln -s ~/Dropbox/Sublime/User   在其它机器上   cd ~/Library/Application\\ Support/Sublime\\ Text\\ 3/Packages/ rm -r User ln -s ~/Dropbox/Sublime/User   这里同步是只有Packages/User/文件夹，而不是整个Packages文件夹。这个文件夹包含了Package Control.sublime-settings文件，这个文件包含了安装的包和配置信息，当在另一个Sublime Text开启时，他会根据这个文件自动检测，安装包含的包，还解决兼容性问题。  ","categories": ["tools"],
        "tags": [],
        "url": "http://localhost:4000/tools/2014/03/12/sync-sublime-text-packages-with-dropbox/",
        "teaser":"http://localhost:4000/assets/default-header.jpg"},{
        "title": "能用mbp和rMbp的充电器给air充电吗？",
        "excerpt":"能用Macbook Pro或者Retina Macbook Pro的充电器给Macbook Air充电吗？一个功率是45w，一个是85w(13’的是60w)，可以还是不可以？ 能用给iPad充电的插座给iPhone充电吗？两者输出的电流不一样。可以吗？ 今天给一个官方正式的答复，可以！ 来自苹果官方的回复： Power adapters for Intel-based Apple notebooks are available in 45W, 60W, and 85W varieties. Although you should always use the proper wattage adapter for your Apple notebook, you can use an adapter of a higher wattage without issue. For instance If you...","categories": ["mac"],
        "tags": [],
        "url": "http://localhost:4000/mac/2014/03/25/charge-macbook-air-with-adapter-for-pro/",
        "teaser":"http://localhost:4000/assets/default-header.jpg"},{
        "title": "try(), 让你的Rails代码更简洁",
        "excerpt":"看看这样的代码？  &lt;% if current_user &amp;&amp; current_user.is_admin? %&gt; \t&lt;%= do something %&gt; &lt;% end%&gt;   而事实上可以写成这样    &lt;% if current_user.try(:is_admin?) %&gt;  \t&lt;%= do something %&gt;  &lt;% end%&gt;   当current_user为nil的时候，try不会抛出异常，而是返回nil   多个try还可以链接调用   current_user.try(:is_admin?).try(:home_address)   传参数和block     current_user.try(:is_old_than?, 21)   current_user.orders.try(:collect) { |p| p.order_id }  ","categories": ["rails"],
        "tags": [],
        "url": "http://localhost:4000/rails/2014/04/19/try-the-essential-rails-method/",
        "teaser":"http://localhost:4000/assets/default-header.jpg"},{
        "title": "如何更新升级Octopress",
        "excerpt":"为什么要更新？用着好好的。新版本可能会修正bug，提高性能；其实最重要的是，作为一个Geek，就是想要用最新版的而已。 How 找到官方文档，Updating Octopress, 按照指示 ```ruby updating octopress git pull octopress master # Get the latest Octopress bundle install # Keep gems updated rake update_source # update the template’s source rake update_style # update the template’s style 才执行第一句，就出错了 ```bash error fatal: 'octopress' does not appear to be a git repository...","categories": ["blog"],
        "tags": [],
        "url": "http://localhost:4000/blog/2014/04/26/how-to-upgrade-octopress/",
        "teaser":"http://localhost:4000/assets/default-header.jpg"},{
        "title": "用Mantle转JSON数据到ManagedObject",
        "excerpt":"Mantle, 来自github的一个十分便利的model层框架，它能把数据从JSON转成Objective-c对象，也可能把一个MTLModel对象转成JSON数据。 Mantle的官方说明中, 在基本的情况下，只需要实现一个mapping方法，就能轻松的实现数据的转换 + (NSDictionary *)JSONKeyPathsByPropertyKey { return @{ @\"URL\": @\"url\", @\"HTMLURL\": @\"html_url\", @\"reporterLogin\": @\"user.login\", @\"assignee\": @\"assignee\", @\"updatedAt\": @\"updated_at\" }; } //转换为NSURL类型 + (NSValueTransformer *)URLJSONTransformer { return [NSValueTransformer valueTransformerForName:MTLURLValueTransformerName]; } + (NSValueTransformer *)HTMLURLJSONTransformer { return [NSValueTransformer valueTransformerForName:MTLURLValueTransformerName]; } 然后用+[MTLJSONAdapter modelOfClass:fromJSONDictionary:error:]就能解析JSON数据，得到Objective-C对象了。 不过这不是写这篇文章的目的，这篇文章的重点是如何再把这个对象存到Core Data中。 对于持久化，Mantle的官方文档紧紧提到： Mantle doesn’t automatically persist your objects...","categories": ["iOS"],
        "tags": [],
        "url": "http://localhost:4000/ios/2014/05/12/using-mantle-convert-json-to-model-and-save-to-coredata/",
        "teaser":"http://localhost:4000/assets/default-header.jpg"},{
        "title": "Core Data中如何取得聚合值",
        "excerpt":"Core Data是现在iOS中主流的数据存储选择。虽然Core Data的学习对于Mac/iOS开发新手来说，算是学习曲线比较陡的，但是一旦熬过了，使用还是很便利的。 各种介绍文章都会介绍如何设置NSPredicate, 如何设置NSSortDescriptor, 返回NSManagedObject对象。那么如何获得某个属性的最小值，最大值？ 对于刚学习Core Data的人想到的第一方法很可能就是设置fetchLimit为1， 然后根据要获取的那个属性进行排序。这也是一种方法，也能完成任务；但是如果要获取这个属性的Sum值呢？ NSExpression Core Data中有NSExpression来完成Aggregate操作。 首选需要设置你的目标属性, 比如salary NSExpression *keyPathExpression = [NSExpression expressionForKeyPath:@\"salary”]; 然后设置想要的聚合操作 NSExpression *maxSalaryExpression = [NSExpression expressionForFunction:@\"max:\" arguments:@[keyPathExpression]]; 再设置NSExpressionDescription NSExpressionDescription *expressionDescription = [[NSExpressionDescription alloc] init]; [expressionDescription setName:@\"maxSalary\"]; [expressionDescription setExpression:maxSalaryExpression]; [expressionDescription setExpressionResultType:NSDecimalAttributeType]; Objective-c就是以他的verbose闻名的。 [request setResultType:NSDictionaryResultType]; [request setPropertiesToFetch:[NSArray arrayWithObject:expressionDescription]]; 设置request的返回类型是一个Dictionary，这个Dictionary的key就是这个expressionDescription的name， value就是expression的执行结果。 最后再调用executeFetchRequest NSArray *results...","categories": ["iOS"],
        "tags": [],
        "url": "http://localhost:4000/ios/2014/05/29/how-to-get-aggretate-values-in-core-data/",
        "teaser":"http://localhost:4000/assets/default-header.jpg"},{
        "title": "你不知道的Rails Console Tips",
        "excerpt":"__ 清理Console 当输出满屏时，想清理一下，在bash里可以用clear，在rails console里，可以用command+k __ 重新加载rails环境 console环境不会自动加载修改后的文件，怎么办？退出重启？不需要！执行 reload! __ 搜索历史纪录 执行的command太多，往上可以用 uparrow, 往下可以用downarrow。但是当执行的命令太多时，上下翻历史记录耗费的时间，比直接输入来的更多。其实console有搜索功能，Ctrl+R [1] pry(main)&gt; reload! Reloading... =&gt; true (reverse-i-search)`r': reload! 输入r出来 reload! . 第一个匹配的记录 __ Tab补全 tab补全，属性bash的应该对这个都不陌生。 __ 上一个命名的结果 执行完一条命令 &gt;&gt;Article.first 但其实你还想对这个返回的 article 对象继续操作。在执行一遍？ &gt;&gt;article = Article.first NO！ 你可以用_, article = _; _保存着上一条命令返回的结果 __ 发起HttpRequest &gt;&gt;app.get “/“ =&gt; 200...","categories": ["rails"],
        "tags": [],
        "url": "http://localhost:4000/rails/2014/06/06/rails-console-tips-you-dont-now/",
        "teaser":"http://localhost:4000/assets/default-header.jpg"},{
        "title": "Common Missing Packages for Installing Ruby Gems on Ubuntu",
        "excerpt":"Gem Install Curb   sudo apt-get install libcurl4-openssl-dev or sudo apt-get install libcurl4-gnutls-dev   Gem Install RMagick   sudo apt-get install imagemagick libmagickwand-dev   Gem Install Mysql2   sudo apt-get install libmysql-ruby libmysqlclient-dev  ","categories": ["rails"],
        "tags": [],
        "url": "http://localhost:4000/rails/2014/06/23/common-missing-packages-for-install-ruby-gems-in-ubuntu/",
        "teaser":"http://localhost:4000/assets/default-header.jpg"},{
        "title": "Render No Layout Template for Non-Html Request",
        "excerpt":"在 Rails 应用中，action 的返回的render对象都会套用 layout。这对于普通的 html 请求和 json数据请求都没有问题。html请求需要layout，而 json 数据请求直接 render 数据，不会套用 layout，那么对于普通的 ajax 请求呢？   destroy.js.erb?   对于普通的RJS请求，通常都不需要走layout，那么需要在每一个respond中设置吗？   format.js { layout: false }   想要设置所有的rjs请求没有layout，可以把layout设置为一个 Proc。 设置基类的layout   layout proc { |c| c.request.xhr? ? false : ‘application’ }   ","categories": ["rails"],
        "tags": [],
        "url": "http://localhost:4000/rails/2014/07/20/rails-3-no-layout-for-non-html-request/",
        "teaser":"http://localhost:4000/assets/default-header.jpg"},{
        "title": "reinstall mysql on mac with homebrew",
        "excerpt":"测底删除MySQL ```bash remove all related files #kill all processes ps aux | grep mysql brew remove mysql brew cleanup sudo rm /usr/local/mysql sudo rm -rf /usr/local/var/mysql sudo rm -rf /usr/local/mysql* sudo rm ~/Library/LaunchAgents/homebrew.mxcl.mysql.plist sudo rm -rf /Library/StartupItems/MySQLCOM sudo rm -rf /Library/PreferencePanes/My* launchctl unload -w ~/Library/LaunchAgents/homebrew.mxcl.mysql.plist edit /etc/hostconfig and remove the...","categories": ["mysql"],
        "tags": [],
        "url": "http://localhost:4000/mysql/2014/07/25/reinstall-mysql-on-mac-with-homebrew/",
        "teaser":"http://localhost:4000/assets/default-header.jpg"},{
        "title": "Compile Nginx with Page Speed Module",
        "excerpt":"要安装的几个模块 SPDY: Nginx实验性的支持SPDY, 但是默认是不开启的，只要开启就好 Google Page Speed: 主要目的，Page Speed模块自动提供各种’压缩和优化，提高网站的性能 Headers More: 自定义Server信息 Naxsi: 提供防火墙功能。 开始前安装几个会用到的工具包 sudo apt-get install gcc-c++ pcre-dev pcre-devel zlib-devel make 安装 安装PageSpeed可以参考 Google 的 Page Speed 安装指南, nginx的版本是1.6.0， cd nginx-1.6.0, 下载headers more和naxsi 在nginx目录里，下载解压，然后configure 有一点要注意，Naxsi的Wiki页面里提到，由于NGINX会根据module申明的顺序来排序，所以Naxsi需要排在第一位，不然可能会出现不可预知的错误 NGINX will decide the order of modules according the order of the module’s...","categories": ["server"],
        "tags": [],
        "url": "http://localhost:4000/server/2014/08/04/compile-nginx-from-source-with-page-speed-module/",
        "teaser":"http://localhost:4000/assets/default-header.jpg"},{
        "title": "如何最优化Nginx配置",
        "excerpt":"Nginx 安装完了，那么如何配置？ 多少个 Worker Processes? 多少个 Worker Connections? 多少个 Worker Processes Worker Process数决定了Web Server跑多少个Nginx工作进程，因此CPU是几核的就配置几个，是合适的做法 grep processor /proc/cupinfo | wc -l 假设结果是 4， 那就设置4个 Worker Processes. 多少个Worker Connections Worker Connections决定一个Process能同时server多少个用户， 默认值是768， 由于现在一个用户开启一个Session时，都会有好几个请求，因此这个值可以选择除以 2 或者 3. 我们可以通过检查cpu的limit， ulimit -n 如果 返回结果 1024， 那么 worker connections的数数就是 1024 * 4 = 4096 Buffers client_body_buffer_size:...","categories": ["server"],
        "tags": [],
        "url": "http://localhost:4000/server/2014/08/08/how-to-optimize-nginx-configuration/",
        "teaser":"http://localhost:4000/assets/default-header.jpg"},{
        "title": "Vagrant和Chef建Rails开发环境",
        "excerpt":"Host环境: Yosemite, 使用的虚拟机VirtualBox 3.1.16 ###SetUp Vagrant Vagrant会跑一个完整的虚拟机，所以你的机器最好有1，2G的空闲内存。 安装Vagrant和VirtualBox Install Vagrant Install VirtualBox 再给Vagrant安装两个插件 vagrant-vbguest: 把host机器上的VirtualBox Guest Additions自动安装到虚拟机上 vagrant-librarian-chef: 自动跑Chef vagrant plugin install vagrant-vbguest vagrant plugin install vagrant-librarian-chef ###添加镜像 由于国内的网速比较慢，所以还是先把ubuntu镜像单独下载下来，再安装！ vagrantbox下载，假设下载到~/downloads/ubuntu-14.box, 在Terminal里输入 vagrant box add ubuntu14 ~/downloads/ubuntu14.box ‘ubuntu14’是给这个box去的名字，后面的是文件的路径 ###初始化开发环境 创建一个项目目录，比如~/documents/workspace/rails-vagrant, 进入目录，使用’ubuntu14’这个box vagrant init ubuntu14 vagrant up 等待启动完成后， vagrant ssh 登录虚拟机了！ Vagrant建立的只是一台空白的虚拟机，离开发环境还远着。这时就需要Chef了...","categories": ["rails"],
        "tags": [],
        "url": "http://localhost:4000/rails/2014/10/21/rails-development-box-with-vagrant-and-chef/",
        "teaser":"http://localhost:4000/assets/default-header.jpg"},{
        "title": "把Mac上的CapsLock键改成Hyper键",
        "excerpt":"Capslock键，一个在实际生活中使用频率相当低的键，却占了一个很重要的位置，实在是浪费！尤其是在Mac为各个快捷键设置按键的时候，如果能多一个功能键，那可能提神一大截的效率。   ###替换锁定功能   先安装Seil这个软件, 通过修改键值（80），可以把Capslock键的功能替换为一个新的键，不存在的键。      再到[System Preferences] -&gt; [Keyboard] -&gt; [Modify Keys] 下 把Capslock原来的功能取消了, 设置为”No Action”   .   这下再按[Capslock]键指示灯就不会亮了   ###映射为新的键   [Capslock]键已经没有锁定大小写功能了，现在需要给个新的功能。这需要用到另一个软件Karabiner。如何添加新的映射呢，在[Misc &amp; Uninstall]下，选[Open private.xml],      编辑这个xml文件，添加功能。可以下载lucifr的版本。   重新打开之后，把下面的功能都选中      好了，现在[Capslock]键有了新的功能了， 然后设置Alfred的热键，设置Alfred Hotkey中按[Capslock], 设置为F19, ,   开启了Alfred，就等于开启了领一扇门，怎么配置alfred的hotkey, 那就看自己发挥了。  ","categories": ["Mac"],
        "tags": [],
        "url": "http://localhost:4000/mac/2014/12/23/change-capslock-to-hyper-key-with-alfred/",
        "teaser":"http://localhost:4000/assets/default-header.jpg"},{
        "title": "jQuery检测网页元素是否在当前视窗内",
        "excerpt":"检测的关键是getBoundingClientRect这个方法，这个方法jQuery之父John Resig在2008年就用在jQuery的代码中了 ###检查元素是否全部在视窗内 $.fn.isInsideViewport = () -&gt; # special bonus for those using jQuery el = this if this == undefined return if (typeof jQuery == \"function\" &amp;&amp; el instanceof jQuery) el = el[0]; rect = el.getBoundingClientRect(); rect.top &gt;= 0 &amp;&amp; rect.left &gt;= 0 &amp;&amp; rect.bottom &lt;= (window.innerHeight || document.documentElement.clientHeight)...","categories": ["javascript"],
        "tags": [],
        "url": "http://localhost:4000/javascript/2015/03/05/jquery-plugin-detect-is-element-in-viewport/",
        "teaser":"http://localhost:4000/assets/default-header.jpg"},{
        "title": "在Ubuntu 14.04上建立L2TP/IPSec VPN",
        "excerpt":"之前写过在ubuntu 12上建VPN，由于opwnswan和xl2tpd这些软件的升级，配置会有改动，因此在ubuntu 14上，之前的方法行不通了，这些写下最新的配置方法 apt-get install openswan xl2tpd ppp lsof 我是用root账户安装的，如果不是root账户，需要添加sudo。 安装过程中会询问你是否需要是否用X.509证书来验证IPSec的连接，选择__No__; ###配置防火墙 iptables -t nat -A POSTROUTING -j SNAT --to-source %你的ip地址% -o eth+ PS: 注意替换包括”%” echo \"net.ipv4.ip_forward = 1\" | tee -a /etc/sysctl.conf echo \"net.ipv4.conf.all.accept_redirects = 0\" | tee -a /etc/sysctl.conf echo \"net.ipv4.conf.all.send_redirects = 0\" | tee -a /etc/sysctl.conf echo...","categories": ["vpn"],
        "tags": [],
        "url": "http://localhost:4000/vpn/2015/03/08/l2tp-ipsec-vpn-on-ubuntu-14/",
        "teaser":"http://localhost:4000/assets/default-header.jpg"},{
        "title": "Mac上在Rails Console中输入中文",
        "excerpt":"Rails的Console中默认是不支持输入中文的, 原因是OS X默认使用editline, 而不是redline, 因此ruby在编译的时候时使用了editline. 因此在使用rbenv安装ruby时，如果你的rails console不支持输入中文，就是这个原因。   ____如果你使用rbenv, 装个rbenv的插件就可以   git clone git://github.com/tpope/rbenv-readline.git ~/.rbenv/plugins/rbenv-readline   重新编译，安装Ruby，就OK了.  ","categories": ["rails"],
        "tags": [],
        "url": "http://localhost:4000/rails/2015/04/29/input-chinese-character-in-rails-console-on-mac/",
        "teaser":"http://localhost:4000/assets/default-header.jpg"},{
        "title": "用Logrotate来归档Rails Log",
        "excerpt":"Log文件对于程序查找错误和性能问题很有用，Rails会产生大量的log，当时如果你没有做适当的设置，那么就会产生一个巨大的log文件，然后用什么工具都打不开，只能叹息。 其实Linux自带的Logrotate是个很好的工具，而且使用极其方便，不需要对Rails做任何的修改。   ###添加Logrotate   在 /etc/logrotate.d/ 这个文件夹下，新建一个文件，比如叫做 rails-app-prod     /path/to/your/production/shared/log/*.log {     size=20M     missingok     rotate52     compress     delaycompress     notifempty     copytruncate   }   注意一下最后的copytruncate, 意思是先copy一个log文件，然后把当前的log文件清空，供Rails继续写入。 另一个选择是 create, 这个意思是先重命名当前的文件，然后重新创建一个log文件供Rails写入。原因是在重命名之后，Rails可能还指向已经被重命名了的log文件，因此可能需要重启Rails才能使新的生效.  ","categories": ["rails"],
        "tags": [],
        "url": "http://localhost:4000/rails/2015/05/22/rotate-rails-logs-with-logroteate/",
        "teaser":"http://localhost:4000/assets/default-header.jpg"},{
        "title": "Sublime Text 不可或缺的技巧",
        "excerpt":"选中 Command + D: 选中一个单词 Command + L: 选中一行 Ctrl + Command + M: 选中所有大括号内的文字 CMD + R Command + R 可以搜索定义的函数或者属性。 比如在ruby文件中， cmd+r 可以搜索定义的函数，在css文件中，可以搜索css选择器 CSS 排序 选中你想要排序的CSS，然后按 F5, css属性就会按照字母排序了。 Tab 间切换 Command + Shift + ], 去到下一个tab Command + Shift + [, 去到上一个tab Sidebar Enhancement 这个就是装个插件， SidebarEnhancement, 装了插件之后会有 Open...","categories": ["tools"],
        "tags": [],
        "url": "http://localhost:4000/tools/2015/06/22/12-most-wanted-sublime-texts-tips-and-tricks-copy/",
        "teaser":"http://localhost:4000/assets/default-header.jpg"},{
        "title": "Sandi Metz's 的 Ruby 规则",
        "excerpt":"谁是Sandi Metz？ 她是 Pratical Object-Oriented Design in Ruby 的作者， 她的个人主页 四条规则 一个类的总代码行数不能超过100行 方法的代码行数不能超过5行 方法的参数不多于四个 控制器只能实例化一个类。因此，视图只能知道一个实例变量，而且只能调用这个实例的实例变量和方法 何时可以打破这些规则呢 当你有足够的理由时！（废话了） 100行的类 关注，关注，关注 单一职责 原则。 5行的方法 if, else, end 都算在内 这个五行的规则限制了我们不能同时使用else, elseif. 同时要求我们写出命名良好的私有方法。 命名良好的私有方法还是非常好的文档。 最多四个参数 这一规则对于很多View helpers中的方法是不适用的，比如link_to, form_for, 这些方法都需要好多个参数才正确。因此，在这个时候，做到尽可能烧的参数吧 控制器中只实例化一个类 这个规则听起来不现实，例如一个Dashboard页面，怎么可能只实例化一个类呢？ 其实可以用 Facade Pattern, 例如 class Dashboard def initialize(user) @user = user end def...","categories": ["ruby"],
        "tags": [],
        "url": "http://localhost:4000/ruby/2015/08/14/sandi-metz-4-ruby-rules/",
        "teaser":"http://localhost:4000/assets/default-header.jpg"},{
        "title": "常用有用的Git Tips",
        "excerpt":"用好Git Log 你应该用过 git log, 但是 log 支持很多有用的参数也许你不知道，下面列出一些比较有用的 –author=”jack” : 只显示jack提交的commit –name-only : 只显示改动了的文件名 –oneline : 在一行内显示信息 –grath : 显示一些分支信息 –reverse : 倒序显示commits –after : 显示这个时间之后的commits –before : 显示这个时间之前的commits 这些参数组合起来挺有用的，比如 git log --author=\"jack\" --after=\"1 week ago\" -- oneline 查看还没有合并到Master/父分之中的改动 git log --no-merges masters.. 从另一个分支中获取文件 先看另一个分支的某个文件，其实可以不用切换到那个分支，执行下面的命令就可以直接查看 git show some-branch:somefile.js 如果你想和某个分支上的版本进行对比 git...","categories": ["productivity"],
        "tags": [],
        "url": "http://localhost:4000/productivity/2015/10/02/Top-Userful-tips-for-everyday-git-use/",
        "teaser":"http://localhost:4000/assets/default-header.jpg"},{
        "title": "Ruby新手常犯的错误",
        "excerpt":"###不用字符串插值 拼字符串 puts \"error description\" + e.cause.to_s + \"happend on: \" + Time.now.to_s 不用字符串插值 puts \"error description #{e.cause} happened on: #{Time.now}\" 后者不仅更加易读，而且可以避免因为忘记调用to_s而导致的TypeError true and false 在Ruby中，只有false 和 nil在条件语句中被判定为false. if an_instance != nil &amp;&amp; an_instance.method? == true #do something end 应该被改写为 if an_instance &amp;&amp; an_instance.method? #do something end And Not Or...","categories": ["ruby"],
        "tags": [],
        "url": "http://localhost:4000/ruby/2015/10/05/top-mistakes-ruby-rookies-make/",
        "teaser":"http://localhost:4000/assets/default-header.jpg"},{
        "title": "理解Ruby中得Self",
        "excerpt":"什么是Self？ 所有关于Ruby的书中都说，在Ruby中一切都是对象。 那么，写的每一段代码，都必须属于某一个对象，这个对象就是self self 是一个特殊的变量，他指向当前执行的代码的所有者。 下列情况都会用到 self, 对象变量: @myvar 方法和常亮查找的时候 定义方法，类和moudule的时候 来看看几个例子 实例方法内的self 一个instance method内的self， class Demo def print self end end d = Demo.new g.print == g #=&gt; true 在一个实例方法内，self 指向这个实例。 一个类或者Module方法内的self class Demo def self.print self end end Demo.print == Demo #=&gt; true 类方法内的self 指向定义的类。 module DemoModule def...","categories": ["ruby"],
        "tags": [],
        "url": "http://localhost:4000/ruby/2015/10/05/understanding-self-in-ruby/",
        "teaser":"http://localhost:4000/assets/default-header.jpg"},{
        "title": "给Rails配置LiveReload",
        "excerpt":"安装相关Gems 在Gem文件中添加 rack-livereload 和 guard-livereload' group :development do gem 'rack-livereload' gem 'guard-livereload', require: false end 执行bundle install安装，并且执行bundle binstub guard. 配置Rails 把rack-livereload加到rails的middileware中。 # config/environments/development.rb Rails.application.configure do config.middleware.use(Rack::LiveReload, source: :vendored) end 重启Rails， 前端应该能看到有加载livereload.js。 在console中你会看到livereload会尝试连接websocket, 端口35729, 但是出错。 这就来fix 配置Guard 配置Guard来监视views，assets文件的改动。 执行 bundle exec guard init 来生成配置文件， 会在主目录下生成一个名为Guardfile的文件， 默认生成的配置文件已经基本够用，如果有别的需求，直接修改这个配置文件就好了。 之前在第一部分中执行了bundle binstub guard, 在bin目录下安装了guard， 这时执行bin/guard,...","categories": ["rails"],
        "tags": [],
        "url": "http://localhost:4000/rails/2015/12/18/setup-live-reload-for-rails/",
        "teaser":"http://localhost:4000/assets/default-header.jpg"},{
        "title": "Sublime Text不可或缺的技巧2",
        "excerpt":"之前写过一篇sublime text的文章，介绍快捷键和使用技巧，现在又学到一些新的，来介绍下 选中当前单词: ⌘ + D 在光标所在位置，按下 ⌘ + D, 可以选中当前单词，跟双击效果一样 选中下一个匹配单词: ⌘ + D 选中当前单词的时候，按住 ⌘ 键，再按下 D， 就可以选中下一个匹配的单词，再按下，就匹配再下一个。 当前光标最近的Tag: ⌘ + ⇧ + K 在编辑html时，有时想把一个标签从 p 改到 div, 当然可以先改完开头，再来改关闭，但其实可以更快，就是用 ⌘ + ⇧ + K， 选中括号之间的内容: ⌘ + ⇧ + Space 选中所处的内容块之间的所有内容 整行上下移: CTRL + ⌘ + ↑ /...","categories": ["tools"],
        "tags": [],
        "url": "http://localhost:4000/tools/2016/01/05/more-sublime-texts-shortcuts/",
        "teaser":"http://localhost:4000/assets/default-header.jpg"},{
        "title": "Rails4 ActiveRecord 不同的赋值方法",
        "excerpt":"Rails 提供了多种设置Model属性的方法，方法之间又各有异同，有的会出发回调，有的不会，有的会对所属对象其它属性也产生影响。 因此理解方法之间的区别就显得很重要。 Cheat Sheet 最方便的先来，cheetsheet表，方便查询： Method Uses Default Accessor Saved to Database Validations Callbacks Touches updated_at Readonly check attribute= Yes No n/a n/a n/a n/a write_attribute No No n/a n/a n/a n/a update_attribute Yes Yes No Yes Yes Yes attributes= Yes No n/a n/a n/a n/a update Yes Yes...","categories": ["rails"],
        "tags": [],
        "url": "http://localhost:4000/rails/2016/02/17/different-ways-to-set-attributes-in-activerecord/",
        "teaser":"http://localhost:4000/assets/default-header.jpg"},{
        "title": "Rails Basic: Use of Acceptance",
        "excerpt":"一个非常基本的功能是在用户注册的是时候，要求用户同意某个协议，实现也非常简单，一个checkbox就可以搞定，但是正因为很简单，有好多网站却做得不好。   常犯的错误有以下两个:      只在前端验证   没有设置相应的label   前者的问题显而易见的，后者的问题是必须点击checkbox才能选中，这个在手机上用起来使用性就很差。   看看Rails是怎么玩的？   在Model中，加入   validates_acceptance_of :terms_of_service   在View中，使用(假定你使用form helper method)   f.text_field :terms_of_service   That’s it!   生成的html代码是标准的，验证实在服务器端完成的，All Good！ 而且不需要在数据里加入额外的列。   如果你model中，已经有column来存储这个值了，只需要使用 accept参数，   validates_acceptance_of :terms_of_service, accept: true, message: '必须接受'   越是简单的事情，越是要做正确！  ","categories": ["rails"],
        "tags": ["rails","web-basic"],
        "url": "http://localhost:4000/rails/2016/02/28/rails-basic-use-of-acceptance/",
        "teaser":"http://localhost:4000/assets/default-header.jpg"},{
        "title": "Upload Image or File Ajaxly with Pure Javascript",
        "excerpt":"随着Web技术的不断发展，XMLHttpRequest的进度和浏览器的支持，现在已经可以用用Ajax的方式实现图片/文件的上传，不需要任何插件或者库了。   用FormData来实现上传FormData   $input = $('input[type=file]')[0] if $input.files.length &gt; 0 \tformData = new FormData() \tformData.append('image[url]', $input.files[0]) \t$.ajax( \t    url: 'URL', \t    data: formData, \t    cache: false, \t    contentType: false, \t    processData: false, \t    type: 'POST', \t    beforeSend: -&gt; \t    success: -&gt; \t  )   例子还是用jQuery来实现ajax请求，其中的设置很重要，   contentType: false processData: false   这两个设置，不能忘掉   兼容性？   这个API的兼容性怎么样？ 已经很好了，除了IE8，9，10，其它基本都支持， 可以看这里: http://caniuse.com/#search=FormData   试试？  ","categories": ["javascript"],
        "tags": ["web ajax javascript"],
        "url": "http://localhost:4000/javascript/2016/03/06/upload-image-file-ajax-with-pure-javascript/",
        "teaser":"http://localhost:4000/assets/default-header.jpg"},{
        "title": "Turbolinks-iOS 上路实用手册",
        "excerpt":"前提 要用 turbolinks-iOS 来写一个 Hybrid 的 App 的前提是你的网站使用了 turbolinks， 如何使用 turbolinks, 请看这里 安装 通过 Cocoapods 或者 Carthage 安装，都是直接引用了 github 上的地址。 github \"turbolinks/turbolinks-ios\" \"3.0\" 或者 pod 'Turbolinks', :git =&gt; 'https://github.com/turbolinks/turbolinks-ios.git', branch: 'swift-3.0' turbolinks-iOS 是使用纯 swift 写的，支持 iOS 8.0 以上的版本。如果项目已经使用了 swift 3.0， 需要使用 3.0 的分支。虽然官方官方说 3.0的分支他们没有在生产环境下用过，但是我们用下来没有什么问题。 使用 首先建议把 turbolinks-iOS 的代码都下载下来，先跑一下他的demo，demo 虽然很简单，但是基本上把能碰到的情况都写上去了，比如网页请求失败，遇到需要登录的情况等。 创建Session...","categories": [],
        "tags": ["iOS turbolinks"],
        "url": "http://localhost:4000/2016/11/16/turbolinks-ios/",
        "teaser":"http://localhost:4000/assets/default-header.jpg"},{
        "title": "Ruby on Rails 中的 alias, alias_method 和 alias_attribute",
        "excerpt":"alias 和 alias_method 先来看看怎么用的 alias new_name old_name alias :new_name :old_name alias_method :new_name, :old_name alias 是 ruby 中的关键字，后面跟的可以是 symbol 或者 bareword, 而 alias_method 是一个方法，后面是两个参数，所以中间需要由逗号分隔。 除了使用上的不同，还有什么区别呢？ alias 是个关键字，作用域是词法级别的(lexical scoped)。 举个例子： class User def full_name puts \"Johnnie Walker\" end def self.add_rename alias :name :full_name end end class Developer &lt; User def full_name puts...","categories": [],
        "tags": ["ruby","rails","alias"],
        "url": "http://localhost:4000/2017/02/06/rails-alias/",
        "teaser":"http://localhost:4000/assets/default-header.jpg"},{
        "title": "在 Sublime Text 里运行 Javascript",
        "excerpt":"想要在 Sublime Text 直接运行 Javascript 代码吗？ 那就来对地方了。 Sublime Text 3 可以自定义 Build 系统， `Tools -&gt; Build System -&gt; New Build System’, 新建一个文件，命名为 Javascript.sublime-build, 输入如下内容: { \"cmd\": [\"/usr/local/bin/node\", \"$file\"], \"selector\": \"source.js\" } 这里的 cmd 是 nodejs 的路径，如果没有安装，就需要安装一下，如果不确定路径，在 mac OS 上可以通过 which node 来查找，windows 上通过 where node 查找 保存这个文件即可。 来试验下，新建一个 js 文件，保存，然后按下...","categories": [],
        "tags": ["sublime-text","javascript","console"],
        "url": "http://localhost:4000/2017/03/06/run-javascript-inside-sublime-text/",
        "teaser":"http://localhost:4000/assets/default-header.jpg"},{
        "title": "使用 Spring Cloud 构建微服务之一 Eureka Server",
        "excerpt":"微服务这事，说起来比做起来容易多了。感谢 Pivotal, 有了 Spring Boot， 有了 Spring Cloud， 当然也要感谢 Netflix，为Spring Cloud贡献了那么多优秀的项目。 服务的注册和发现 — Eureka 作为一个服务的提供者，需要想一个中枢注册自己这个服务。 作为服务的使用者，需要有一个统一的地方，可以查找都有那些服务可以用。比如以前的中国黄页，甚至现在的Google，都形式上类似。 Eureka 就是 Netflix 开源贡献的一个优秀的服务注册和发现项目。 构建 Eureka Server 使用 Eureka Server 构建服务注册和发现应用。我使用 IntelliJ 作为开发工具，在项目新建的 Wizard 中，添加 Eureka Server 服务： 只需要在 SpringApplication 上添加一个 EnableEurekaServer 的注解， @SpringBootApplication @EnableEurekaServer public class EurekaServerApplication { public static void main(String[] args)...","categories": [],
        "tags": ["spring","spring-cloud","eureka"],
        "url": "http://localhost:4000/2018/04/11/Spring-Cloud-%E5%BE%AE%E6%9C%8D%E5%8A%A1%E4%B9%8BEureka-Server/",
        "teaser":"http://localhost:4000/assets/default-header.jpg"},{
        "title": "使用 Spring Cloud 构建微服务之二 Eureka Client",
        "excerpt":"上一片构建了一个Eureka Server，服务注册发现服务， 现在就来注册一个服务，作为服务的提供者。 添加 Eureka 依赖 还是建一个Spring Boot应用，需要添加的依赖有 &lt;dependency&gt; &lt;groupId&gt;org.springframework.cloud&lt;/groupId&gt; &lt;artifactId&gt;spring-cloud-starter-eureka&lt;/artifactId&gt; &lt;/dependency&gt; 配置 Eureka 属性 需要给应用起个名字，作为自己的唯一 ID 在 Eureka Server上注册自己，并且需要声明 Eureka Server 的地址： spring.application.name=service-provider eureka.client.serviceUrl.defaultZone=http://localhost:8000/eureka eureka.instance.prefer-ip-address=true prefer-ip-address 看自己偏好选择。 同时给 Spring Boot 应用添加 EnableEurekaClient 注解，Spring Boot 应用就会想指定的 server 注册自己。 @EnableEurekaClient @SpringBootApplication public class ServiceProviderApplication { public static void main(String[] args) {...","categories": [],
        "tags": ["spring","spring-cloud","eureka"],
        "url": "http://localhost:4000/2018/04/14/Spring-Cloud-%E5%BE%AE%E6%9C%8D%E5%8A%A1%E4%B9%8BEureka-Client/",
        "teaser":"http://localhost:4000/assets/default-header.jpg"},{
        "title": "使用 Spring Cloud 构建微服务之调用 Eureka Client",
        "excerpt":"上一篇 注册了一个简单的Servcie，这一篇讲一下使用 RestTemplate 来调用注册在 Eureka 上的服务。 Service Provider 先给 Service Provider 写一个简单的返回一个 Json 对象的Api，Greeting import lombok.Data; import lombok.experimental.Accessors; @Data @Accessors(chain = true) public class Greeting { private String name, message; } Root Api直接返回一个 Greeting 对象 import org.springframework.web.bind.annotation.GetMapping; import org.springframework.web.bind.annotation.RestController; @RestController public class HomeController { @GetMapping(\"\") public Greeting index() { Greeting...","categories": [],
        "tags": ["spring","spring-cloud","eureka"],
        "url": "http://localhost:4000/2018/04/16/Spring-Cloud-%E5%BE%AE%E6%9C%8D%E5%8A%A1%E4%B9%8B%E8%B0%83%E7%94%A8Eureka-Client/",
        "teaser":"http://localhost:4000/assets/default-header.jpg"},{
        "title": "使用 Spring Cloud 构建微服务之Gateway",
        "excerpt":"系统已经微服务化了，并且使用 Eureka 来做了服务的发现与治理。那么接下去的问题就是如何把服务暴露给外部终端使用了。 把所有的 Api Endpoint 都暴露出去吗？如何做请求验证呢？ 如果把所有的 Api Endpoint 都暴露出去，在每个Api Endpoint 都做一次 AccessToken 验证码？并且终端请求Api的粒度和微服务提供的粒度是不一致的。比如：请求一个用户的 Profile 数据， 终端需要的可能是个人信息，账户信息，近期订单信息等。 而在三个信息分别有三个微服务提供，让客户端请求三次吗？ Api Gateway 实现一个 Api Gateway 作为一个统一的入口，并且能够把请求转发到背后相应的微服务端。 用 Zuul 实现 Api Gateway 用 zuul 能非常快速的实现一个 Api Gateway，同时能和 Eureka很好的集成。 建立一个 Spring Boot Application，添加 Eureka Client 和 Zuul 相关的依赖 &lt;dependency&gt; &lt;groupId&gt;org.springframework.cloud&lt;/groupId&gt; &lt;artifactId&gt;spring-cloud-starter-netflix-eureka-client&lt;/artifactId&gt; &lt;/dependency&gt; &lt;dependency&gt;...","categories": [],
        "tags": ["spring","spring-cloud","zuul","gateway"],
        "url": "http://localhost:4000/2018/04/16/Spring-Cloud-%E5%BE%AE%E6%9C%8D%E5%8A%A1%E4%B9%8BGateway/",
        "teaser":"http://localhost:4000/assets/default-header.jpg"},{
        "title": "AWS S4 Signing With Authorization Header",
        "excerpt":"计算 S4 签名 想要直接在客户端上传文件到AWS S3，需要通过计算基于S4的签名 AWS 的签名计算已经更新到第四版了，标准的步骤还是跟之前的版本差不多，分为4步： 发起一个请求 根据请求和相关的信息，计算出一个需要进行签名的字符串 根据 aws 提供的 access key 推导出一个签名用的key，然后用这个签名的key 给第二步中计算的字符串进行签名，计算出一个签名 把签名返回给客户端，客户端带着这个签名进行操作 AWS 官方的参考文档在这里 创建请求 客户端需要提交给计算签名Api 的数据有3个 需要上传的内容的hash值 需要上传内容的长度 上传内容的类型 其它自定义数据 签名 API 根据客户端提供的数据，计算出一个唯一的 endpoint url， 稍后需要返回给客户端用，同时这个endpoint url还需要用在签名里。 计算签名 计算 Canonicalized Header Names 计算 Canonicalized Headers 计算 Canonical Request 计算待签名字符串 计算 Signing Key 这里 SCHEME...","categories": [],
        "tags": ["AWS","S4Request","Signing","Authorization"],
        "url": "http://localhost:4000/2018/07/07/AWS-S4-Signing-With-Authorization-Header/",
        "teaser":"http://localhost:4000/assets/default-header.jpg"},{
        "title": "发布你的第一个 Maven Jar 库到 Maven 中央仓库",
        "excerpt":"发布你的第一个 Jar 到 Maven 中央仓库 如果你写Java，那么肯定离不开Maven。使用了那么多别人开源共享的代码，有没有想自己也贡献一个呢？把代码开源到 Github 是第一步，打包成 Jar 文件发布到 Maven 中央仓库，才是最关键的一步。而这一步并不简单，我花了不少时间才成功发布自己的第一个库。 注册账号 首先在网站 https://issues.sonatype.org/ 上注册个账号。登录成功之后，点击导航栏中间大大的那个 Create Project 记得选 Community Support — Open Source Project Repository Hosting 红色星标的都需要填写。 注意 GroupId可以直接用 com.github.userId。如果想用自己的域名，比如 me.fengqijun.xxx, 是完全没有问题的，只是在你的 issue 提交之后会要求你从相应的域名邮箱发个邮件到一个指定的地址，以确认域名所有权。 Project URL 和 SCM URL 填 Github 地址就好了 申请被批准 当你创建的 Issue 状态变成 Resolved 之后，就可以准备发布代码了。通常Issue 处理得还是蛮及时的，一般一天时间就会被处理（别人的工作时间是我们的晚上）。...","categories": [],
        "tags": ["jar","maven","central"],
        "url": "http://localhost:4000/2018/11/01/publish-your-jar-to-maven-central/",
        "teaser":"http://localhost:4000/assets/default-header.jpg"},{
        "title": "排序算法之合并排序",
        "excerpt":"排序算法之合并排序 假如你有一堆卡片，每张卡片上都有个数字。你要按照数字从小到大给卡片顺序。 合并排序的思想如下： 如果总共只有一张卡片，那就他就是排好的 将所有卡片分成数量相等的两部分。把这两部分，继续按照 1，2 步的思想进行操作 等所有拆分的部分都排好序之后，从头到尾遍历这两部分卡片，并按照“拉链闭合”的原理将这两部分合并为完全排好序的一碟卡片 Java 代码实现 public static void merge(int[] arrayOne, int aLeft, int aRight, int[] arrayTwo, int bLeft, int bRight, int[] result) { int i = aLeft, j = bLeft; for(int k = 0; k &lt;= aRight - aLeft + bRight - bLeft + 1;...","categories": [],
        "tags": ["sorting","merge","algorithm"],
        "url": "http://localhost:4000/2019/01/31/sorting-algorithm-merge-sort/",
        "teaser":"http://localhost:4000/assets/default-header.jpg"},{
        "title": "搭建 Zookeeper Cluster",
        "excerpt":"下载 Zookeeper 目前的版本是 3.4.13， 下载最新稳定版, 在本地配置一个为集群。 配置实例 把 zookeeper 解压到你的用户根目录下，创建三个实例配置文件 cp zoo_sample.cfg zoo-slave1.cfg cp zoo_sample.cfg zoo-slave2.cfg cp zoo_sample.cfg zoo-slave3.cfg 修改配置文件： # sub zoo-slave1.cfg # The number of milliseconds of each tick tickTime=2000 # The number of ticks that the initial # synchronization phase can take initLimit=10 # The number of...","categories": [],
        "tags": ["zookeeper","cluster"],
        "url": "http://localhost:4000/2019/03/18/zookeeper-cluster-on-local/",
        "teaser":"http://localhost:4000/assets/default-header.jpg"},{
        "title": "2019 JavaScript 的新特性",
        "excerpt":"async / await 如果你依然深陷回调地狱，那么你依然写着2014年的古董代码。除非你别无选择，否则就不要使用回调了。Promise 还可以，但是 async / await 才是你的正确选择。 async function getDate() { const result = await axios.get('https://dube.io/service/ping') const data = result.data console.log('data', data) return data } getData() 解构赋值和默认值（Destructuring &amp; default values） const result = await axios.get('https://your-api-url') const data = result.data 有一种更简便的做法，那就是解构赋值 const { data } = await.get('https://your-api-url') 还可以把变量重命名和给出默认值 const...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/2019/05/05/new-features-of-javascript-tips-in-2019/",
        "teaser":"http://localhost:4000/assets/default-header.jpg"},{
        "title": "OS X Catalina Beta 3 修复 Karabiner",
        "excerpt":"为了尝试下 SwiftUI，升到了 Catalina Beta 3， 基本都没什么问题，只是 Karabiner 这个软件不正常了。 Karabiner 是用来修改键位的，我把 Capslock 键键值修改为 F19， 再把 F19 设置为启动 Alfred 的热键，等于连用习惯的 Alfred 也废了～   由于 Catalina 改了安全策略，变得更加严格，因此猜测是权限隐私问题，赋予 Karabiner 相应的权限，应该就能解决问题。   把 Karabiner-Elements 路径下的 grabber 和 observer 加到   /Library/Application Support/org.pqrs/Karabiner-Elements/bin   隐私和安全下面的 Input Monitering      再重启 Karabiner，就恢复功能了。       sudo kill karabiner_grabber karabiner_observer      Karabiner Elements   Catalina   Beta  ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/2019/05/05/karabina-elements-on-catalina-beta/",
        "teaser":"http://localhost:4000/assets/default-header.jpg"},{
        "title": "Spring Boot 集成 Quartz 任务处理",
        "excerpt":"Spring 框架自带定时任务功能，虽然看上去挺简单的，但是也能处理大部分日常的任务了。 如果想要对任务处理有更多的控制，更多的自定义的东西，那么可以考虑使用Quartz， 如果想要有分布式处理的能力，可以使用elastic job。 本文介绍如何集成 Spring Boot 和 Quartz 安装 maven 依赖 &lt;dependency&gt; &lt;groupId&gt;org.quartz-scheduler&lt;/groupId&gt; &lt;artifactId&gt;quartz&lt;/artifactId&gt; &lt;version&gt;2.3.0&lt;/version&gt; &lt;/dependency&gt; &lt;dependency&gt; &lt;groupId&gt;org.quartz-scheduler&lt;/groupId&gt; &lt;artifactId&gt;quartz-jobs&lt;/artifactId&gt; &lt;version&gt;2.3.0&lt;/version&gt; &lt;/dependency&gt; 集成 Spring 依赖注入 首先，接入 Spring 当然需要让定义的 Job 能支持 Autowire，不然接入有什么意义。 这里通过实现 ApplicationContextAware 接口，拿到 AutowireCapableBeanFactory, 再通过这个 Factory 去 Autowire Job实例 /** * Adds auto-wiring support to quartz jobs. *...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/2019/05/15/spring-boot-integrate-quartz/",
        "teaser":"http://localhost:4000/assets/default-header.jpg"},{
        "title": "IntelliJ Idea Cannot Open Project on Catalina Beta 5",
        "excerpt":"Just upgrade my IntelliJ Idea to the latest version, 2019.02, then everything breaks. You cannot open any recent projects or folders, nothing happens. First thing first, here is the workaround: -Dide.mac.file.chooser.native=false in Help | Edit Custom VM Options and restart the IDE, which disable using native file chooser. It’s a...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/2019/08/15/intellij-idea-problems-on-os-x-catalina/",
        "teaser":"http://localhost:4000/assets/default-header.jpg"},{
        "title": "Clickhouse 系列1之入门",
        "excerpt":"什么是ClickHouse？ ClickHouse是一个用于联机分析(OLAP)的列式数据库管理系统(DBMS)。 在传统的行式数据库系统中,处于同一行中的数据总是被物理的存储在一起。在列式数据库中，数据库总是将同一列的数据存储在一起，不同列的数据也总是分开存储。 不同的存储方式适合不同的场景，这里的查询场景包括： 进行了哪些查询，多久查询一次以及各类查询的比例； 每种查询读取多少数据————行、列和字节；读取数据和写入数据之间的关系；使用的数据集大小以及如何使用本地的数据集；是否使用事务,以及它们是如何进行隔离的；数据的复制机制与数据的完整性要求；每种类型的查询要求的延迟与吞吐量等等。 系统负载越高，根据使用场景进行定制化就越重要，并且定制将会变的越精细。没有一个系统同样适用于明显不同的场景。如果系统适用于广泛的场景，在负载高的情况下，所有的场景可以会被公平但低效处理，或者高效处理一小部分场景。 OLAP场景的关键特征 大多数是读请求 数据总是以相当大的批(&gt; 1000 rows)进行写入 不修改已添加的数据 每次查询都从数据库中读取大量的行，但是同时又仅需要少量的列 宽表，即每个表包含着大量的列 较少的查询(通常每台服务器每秒数百个查询或更少) 对于简单查询，允许延迟大约50毫秒 列中的数据相对较小： 数字和短字符串(例如，每个URL 60个字节) 处理单个查询时需要高吞吐量（每个服务器每秒高达数十亿行） 事务不是必须的 对数据一致性要求低 每一个查询除了一个大表外都很小 查询结果明显小于源数据，换句话说，数据被过滤或聚合后能够被盛放在单台服务器的内存中 很容易可以看出，OLAP场景与其他流行场景(例如,OLTP或K/V)有很大的不同， 因此想要使用OLTP或Key-Value数据库去高效的处理分析查询是没有意义的，例如，使用OLAP数据库去处理分析请求通常要优于使用MongoDB或Redis去处理分析请求。 第一次安装测试 clickhouse 首次安装测试，用 docker 来得最方便了，yandex 提供了官方的 docker 镜像 mkdir $HOME/some_clickhouse_database docker run -d --name some-clickhouse-server --ulimit nofile=262144:262144 --volume=$HOME/some_clickhouse_database:/var/lib/clickhouse yandex/clickhouse-server 这里指定了本地的一个目录，加载到 docker 容器环境里来存储数据。因为 clickhouse...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/2019/08/23/clickhouse-serials-one-introduction/",
        "teaser":"http://localhost:4000/assets/default-header.jpg"},{
        "title": "Configure TypeScript, ESLint, Prettier on VSCode to Develop React Native",
        "excerpt":"I used TypeScript to develop my latest React Native project. And it’s been a joyful journey. Type system brings more benefits than expected. It took me sometime to configure VS Code to lint and format TypeScript codes properly. So I’d like to share my configuration, and hope it can be...","categories": [],
        "tags": ["typescript","eslint","prettier","vscode","react native"],
        "url": "http://localhost:4000/2019/11/01/configure-typescript-eslint-prettier-on-vscode-to-develop-react-native/",
        "teaser":"http://localhost:4000/assets/default-header.jpg"}]
