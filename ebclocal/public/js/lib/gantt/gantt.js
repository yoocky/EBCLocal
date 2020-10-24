let MyGanttView = class MyGanttView extends frappe.views.GanttView {
    get required_libs() {
		return [
			"assets/ebclocal/js/lib/gantt/frappe-gantt.css",
			"assets/ebclocal/js/lib/gantt/frappe-gantt.min.js"
		];
	}
}

frappe.views.GanttView = MyGanttView