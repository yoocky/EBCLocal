// 角色权限管理选择框改成可输入查找类型
frappe.PermissionEngine = class MyPermissionEngine extends frappe.PermissionEngine {
	setup_page() {
		this.doctype_select
			= this.wrapper.page.add_auto_select(__("Document Type"), this.options.doctypes, 
				function(e) {
					if (e.target.value) {
						frappe.set_route("permission-manager", e.target.value);
					}
				});
		this.role_select
			= this.wrapper.page.add_auto_select(__("Roles"), this.options.roles,
				function() {
					this.refresh();
				});

		this.page.add_inner_button(__('Set User Permissions'), () => {
			return frappe.set_route('List', 'User Permission');
		});
		this.set_from_route();
    }
}