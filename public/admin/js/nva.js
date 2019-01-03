var texts='<header>'+
'<h1>网站后台管理系统</h1>'+
'<p>'+
	'<a href="#"><span class="icon home"></span>系统首页</a>'+
'<a class="loginout" href="loginout.php"><span class="icon quit"></span>安全退出</a>'+
	'</p>'+
'</header>'+
'<section>'+
	'<nav>'+
		'<h3>欢迎您来到管理后台</h3>'+
		'<p>登陆名：<strong>Admin</strong><br/>身　份：<strong>超级管理员</strong></p>'+
		'<dl>'+
			'<dt><span class="icon board"></span>单页管理</dt>'+
			'<dd>'+
				'<a href="#">-&emsp;新增单页</a>'+
				'<a href="#">-&emsp;单页列表</a>'+
			'</dd>'+
			'<dt><span class="icon news"></span>文章管理</dt>'+
			'<dd style="display: block">'+
				'<a href="release.html">-&emsp;发布文章</a>'+
				'<a href="list.html">-&emsp;文章列表</a>'+
				'<a href="class.html">-&emsp;文章分类</a>'+
			'</dd>'+
			'<dt><span class="icon book"></span>留言管理</dt>'+
			'<dd>'+
				'<a href="#">-&emsp;留言列表</a>'+
			'</dd>'+
			'<dt><span class="icon flink"></span>友情连接管理</dt>'+
			'<dd>'+
				'<a href="#">-&emsp;新增连接</a>'+
				'<a href="#">-&emsp;连接列表</a>'+
			'</dd>'+
			'<dt><span class="icon admin"></span>管理员管理</dt>'+
			'<dd>'+
				'<a href="#">-&emsp;新增管理员</a>'+
				'<a href="#">-&emsp;管理员列表</a>'+
			'</dd>'+
'</dl>'+
'</nav>';

	document.write(texts)
