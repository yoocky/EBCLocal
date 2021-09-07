
frappe.provide('frappe.views');

frappe.ui.GroupBy = class MyGroupBy extends frappe.ui.GroupBy {
	get_group_by_docfield() {
		// called from build_column
		let docfield = {};
		if (this.aggregate_function === 'count') {
			docfield = {
				fieldtype: 'Int',
				label: __('Count'),
				parent: this.doctype,
				width: 200,
			};
		} else {
			// get properties of "aggregate_on", for example Net Total
			docfield = Object.assign(
				{},
				frappe.meta.docfield_map[this.aggregate_on_doctype][
					this.aggregate_on_field
				]
			);
            let label = __(docfield.label);
			if (this.aggregate_function === 'sum') {
				docfield.label = __('Sum of {0}', [label]);
			} else {
				docfield.label = __('Average of {0}', [label]);
			}
		}

		docfield.fieldname = '_aggregate_column';
		return docfield;
    }
    
    get_group_by_field_label() {
		return __(this.group_by_fields[this.group_by_doctype].find(
			field => field.fieldname == this.group_by_field
		).label);
	}
}