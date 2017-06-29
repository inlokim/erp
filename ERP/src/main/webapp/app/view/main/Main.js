
Ext.define('ErpApp.view.main.Main', {
    extend: 'Ext.container.Viewport',
    xtype: 'main',
    layout: 'border',
    items:[{
    	xtype: 'panel',
    	region: 'north',
    	title: '',
    	header: false,
    	items:[{
    		xtype:'toolbar',
    		items:[{
    			xtype:'label',
    			html:'<h2>ERP</h2>'
    		},'->', {
    			xtype: 'button',
    			text: 'xxx님',
    			menu : [{
    				text: '비밀번호변'
    			}, {
    				text: '로그아웃'
    			}]
    		}
    		]
    	}]
    },{
    	xtype:'panel',
    	split: true,
    	border:true,
    	width:200,
    	region:'west',
    	layout:'fit',
    	items: [{
    		xtype: 'treelist',
    		listeners: {
    			selectionchange : function(obj, record) {
    				console.log(record.get("page"));
    			}
    		},
    		store: {
    			root: {
    				expanded: true,
    				children:[{
    					text: '상품관리',
    					iconCls: 'x-fa fa fa-gift',
    					expanded: true,
    					selectable: false,
    					children:[{
    						text: '상품목록',
    						page: 'productList',
    						leaf:true
    					}]
    				},{
    					text: '주문관리',
    					iconCls: 'x-fa fa fa-calendar-minus-o',
    					expanded: true, 
    					selectable: false,
    					children:[{
    						text: '주문목록',
    						page: 'orderList',
    						leaf:true
    					}]	
    				},{
    					text: '회원관리',
    					iconCls: 'x-fa fa fa-users',
    					expanded: true,
    					selectable: false,
    					children:[{
    						text: '회원목록',
    						page: 'memberList',
    						leaf:true
    					}]	   					
    				}]
    			}
    		}
    	}]
    },{
    	xtype:'panel',
    	flex:1,
    	region:'center',
    	layout : 'fit',
    	items:{
    		xtype:'panel',
    		html : "<h2>Main DashBoard</h2>"
    	}
    		
    }]
});
