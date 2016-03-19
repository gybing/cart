### 毕业设计开题报告
#### 展览馆预约管理系统
1. 本课题的研究意义，国内外研究现状、水平和发展趋势
> 随着计算机科学技术的日益发展及网络的迅速发展，互联网也已经成为人们生活中不可缺少的一部分，使用计算机技术来处理日常事务管理事务已经变得十分普遍，在这样的趋势下开发相应的预约管理系统对我们生活工作十分便捷。展览馆可以用来展示所有者拥有的产品和技术以及成果，可以让参观者对这种产品及技术更为深入的了解认识，在无形中促进了参观者与展览馆所有者的文化交流。但是一个展览馆场地有限，通常进入展馆的参观者很多，高峰时经常出现人等场地的情况，但有时却又出现空场的情况。所以为了提高展览馆的有效利用率、避免等场地或者空场现象，开发一套展览馆预约管理系统是非常有必要的。
  目前来说，类似的医院挂号预约系统、实验室预约系统以及餐厅预约系统等已经广泛应用，而且给人们带来非常多的便捷，使用者能通过这个系统快速准确的查询出相关信息并且进行预约，避免了场地的时间浪费及空间浪费问题。根据目前的情况，我通过研究当前展览馆的参观现状、存在问题以及现实需求，设计一个针对展览馆预约管理系统。该系统能够提供较为完备的功能，对于提高展览馆有效利用率有较为重要的意义。
  
2. 本课题的基本内容，预计可能遇到的困难，提出解决问题的方法和措施
    ###### 展览馆预约管理系统服务端，主要是管理员对信息进行管理，其中包括：
         管理员登录模块
         管理员添加展览馆信息模块
         管理员查询修改展览馆信息模块
         管理员处理预约订单模块
         管理员查看用户信息
         管理员退出管理模块
         
    ###### 展览馆预约管理系统客户端，主要是普通用户通过系统界面进行查询和预约，其中包括：
        用户注册模块
        用户登录和注销模块
        用户找回密码模块
        展览馆列表展示及检索模块
        展览馆详细信息模块
        预约展览馆填写信息模块
        查看修改及确认预约模块
        用户个人信息面板模块
    ###### 本课题拟采用的研究手段（途径）和可行性分析
         展览馆预约管理系统是基于B/S结构下形成的数据驱动的Web应用程序，
         采用nodejs的express框架作为创建应用程序的方式。用webstorm作为开发工具，
         前端使用html,css,JavaScript,后台使用nodejs，采用mongodb数据库作为后台数据库，
         数据库中包括展览馆Collection，用户Collection，预约订单Collection。
           环境：
           1.硬件环境： PC一台
           2.软件环境：
                 开发语言:nodejs
                 数据库:mongodb
                 开发IDE:webstorm
                 版本控制: git
                 浏览器:chrome
                 其他工具：mongodb可视化工具(mongovue)
                           代码托管平台Github
    