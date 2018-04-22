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
$('.del').on('click',function(){
	if($('.anchorbox').length!==1){
        $(this).closest('tr').remove()
	}

});

// 测试按钮
$('#testbnt').on('click',function(){

	// 定义数组存放锚点
	var arr=[];
	// 获取锚点输入框
   var anchor=$('.anchor');
   var anchortitle=$('.anchortitle');
	for(let i=0;i<anchor.length;i++){

        arr.push(
			{
				anchor:anchor[i].value,
				anchortitle:anchortitle[i].value
			}
		)
	}
    console.log(arr);

});

// 提交表单数据
$("#btn").on('click',function () {

    // 定义数组存放锚点
    var arr=[];
    // 获取锚点输入框
    var anchor=$('.anchor');
    var anchortitle=$('.anchortitle');
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

	var title=$("#title").val(); //获取标题
	var classify=$("#classify").val(); //获取类型
	var anchor=arrstr; 					//获取锚点
	var content=getContent();			//获取内容
	
	$.post('release.php',{
	    "title":title,
		"classify":classify,
		"anchor":anchor,
		'content':content
	},function (data) {
		if(data==1){
			alert('发布成功')
			location.href='list.html';
		}
		else{
			alert('发布失败')
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
//      alert(arr.join("\n"));
    }
//			var data=getContent();
//	    	$.post('/save_content.html',{'con':data},function(data){
//	    		if(data){
//	    			alert('保存成功');
//	    		}
//	    	})
});