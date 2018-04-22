$(function(){



	// 列表交互
	$('dt').click(function(){
		var obj=$(this).next();
		if($(this).next().css('display')=='block'){
			obj.hide('fast');
			$(this).removeClass('on');
		}else{
			obj.show('fast');
			$(this).addClass('on');
		}
	});

	// 增加锚点交互
	$('#anchorbnt').on('click',function(){

		// 克隆第一个锚点输入框
		var html=$('.anchorbox:eq(0)').clone(true);

		// 添加到文章内容前面
		$('.contentbox').before(html[0]);

	});

    // 删除锚点
    $('.news_form').on('click','.del',function(){
        if($('.anchorbox').length!==1){
            $(this).closest('tr').remove()
        }
	});



	// 提交表单数据
	$("#btn").on('click',function () {

		// 定义数组存放锚点
		var arr=[];
		// 获取锚点输入框
		var anchor=$('.anchor');
		var anchortitle=$('.anchortitle');

		// 循环获取的所有锚点
		for(let i=0;i<anchor.length;i++){
			// 将锚点和锚点标题设置成对象push进数组
			arr.push(
				{
					anchor:anchor[i].value,
					anchortitle:anchortitle[i].value
				}
			)
		}
		// 将数组转成字符串
		var arrstr=JSON.stringify(arr);

		var id=_id;					 //获取id
		var title=$("#title").val(); //获取标题
		var classify=$("#classify").val(); //获取类型
		var anchor=arrstr; 					//获取锚点
		var content=getContent();			//获取内容

		$.post('edit.php',{
			"id":id,
			"title":title,
			"classify":classify,
			"anchor":anchor,
			'content':content
		},function (data) {
			if(data==1){
				alert('修改成功')
				location.href='list.html';
			}
			else{
				alert('修改失败')
			}

		})


	})


	//内容
		//实例化编辑器
		//建议使用工厂方法getEditor创建和引用编辑器实例，如果在某个闭包下引用该编辑器，直接调用UE.getEditor('editor')就能拿到相关的实例

	var ue = UE.getEditor('editor');
	function getContent() {
		var arr = [];
//      arr.push("使用editor.getContent()方法可以获得编辑器的内容");
//      arr.push("内容为：");
		arr.push(UE.getEditor('editor').getContent());
		return arr;
	}

    // function insertHtml() {
    //     // var value = prompt('插入html代码', '');
    //     console.log(UE.getEditor('editor').execCommand('insertHtml','aaa'))
    //     // UE.getEditor('editor').execCommand('insertHtml', value)
    // }

    function setContent(isAppendTo) {
        var arr = [];
        arr.push("使用editor.setContent('欢迎使用ueditor')方法可以设置编辑器的内容");
        UE.getEditor('editor').setContent('欢迎使用ueditor');
        alert(arr.join("\n"));
    }
    // 获取id
    var _id=location.href.split('=')[1];

    // 发送Ajax请求获取数据进行数据回显
    $.get('/admin/modify.php?id='+_id,function(ditedata){
        $("#title").val(ditedata.title); 		//回显标题
        $("#classify").val(ditedata.classify); //回显类型

		// 回显内容
        setTimeout(function(){
            UE.getEditor('editor').setContent(ditedata.content);
        },1000)

        //回显锚点
        // console.log(JSON.parse(ditedata.anchor[0]))
		var d=JSON.parse(ditedata.anchor[0]);

        // var html=template('anchormolde',{'list':d});
        // $('.anchorbox').html(html);
		var html='';
		for (let i=0;i<d.length;i++){
			html+='<tr class="anchorbox">\n' +
                '\t\t\t\t\t\t\t\t<td class="anchorhead">文章锚点</td>\n' +
                '\t\t\t\t\t\t\t\t<td>\n' +
                '\t\t\t\t\t\t\t\t\t锚点id:<input type="text" name="title" class="anchor" value="'+d[i].anchor+'"/>\n' +
                '\t\t\t\t\t\t\t\t\t锚点标题：<input type="text" name="title" class="anchortitle" value="'+d[i].anchortitle+'"/>\n' +
				'<input class="del" type="button" value="删除锚点">' +
                '\t\t\t\t\t\t\t\t</td>\n' +
                '\t\t\t\t\t\t\t</tr>'
		}

        // 添加到文章内容前面
        $('.contentbox').before(html);
    });


});