// autoInsertSpaceInButton	设置为 false 时，移除按钮中 2 个汉字之间的空格	boolean	true	
// componentSize	设置 antd 组件大小	small | middle | large	-	3.0
// csp	设置 Content Security Policy 配置	{ nonce: string }	-	
// direction	设置文本展示方向。 示例	ltr | rtl	ltr	3.0
// dropdownMatchSelectWidth	下拉菜单和选择器同宽。默认将设置 min-width，当值小于选择框宽度时会被忽略。false 时会关闭虚拟滚动	boolean | number	-	
// form	设置 Form 组件的通用属性	{ validateMessages?: ValidateMessages, requiredMark?: boolean | optional, colon?: boolean}	-	3.0
// getPopupContainer	弹出框（Select, Tooltip, Menu 等等）渲染父节点，默认渲染到 body 上。	Function(triggerNode, dialogContext)	() => document.body	
// getTargetContainer	配置 Affix、Anchor 滚动监听容器。	() => HTMLElement	() => window	3.0
// input	设置 Input 组件的通用属性	{ autocomplete?: string }	-	3.0
// locale	语言包配置，语言包可到 ant-design-vue/es/locale 目录下寻找	object	-	1.5.0
// pageHeader	统一设置 pageHeader 的 ghost，参考 pageHeader	{ ghost: boolean }	'true'	1.5.0
// prefixCls	设置统一样式前缀。注意：需要配合 less 变量 @ant-prefix 使用	string	ant	
// renderEmpty	自定义组件空状态。参考 空状态	slot | Function(componentName: string): VNode	-	
// space	设置 Space 的 size，参考 Space	{ size: small | middle | large | number }	-	3.0
// transformCellText	Table 数据渲染前可以再次改变，一般用户空数据的默认配置	Function({ text, column, record, index }) => any	-	1.5.4
// virtual	设置 false 时关闭虚拟滚动	boolean	-	3.0


export function useAppConfigProvider() {
  return {
    state:{
      size: "middle",
      autoInsertSpaceInButton: true,
      csp:{},
      direction:"ltr",
      dropdownMatchSelectWidth:"",
      form:{}
    },
    mutations:{

    },
    actions:{

    }
  }
}