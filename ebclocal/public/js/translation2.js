let fixed_trans2 = [
    __(`For multiple addresses, enter the address on different line. e.g. test@test.com
test1@test.com`),
__(`# Account Settings

This is a crucial piece of configuration. There are various account settings in ERPNext to restrict and configure actions in the Accounting module.

The following settings are avaialble for you to configure

1. Account Freezing 
2. Credit and Overbilling
3. Invoicing and Tax Automations
4. Balance Sheet configurations

There's much more, you can check it all out in this step`),
__(`# Chart Of Accounts

The Chart of Accounts is the blueprint of the accounts in your organization.
It is a tree view of the names of the Accounts (Ledgers and Groups) that a Company requires to manage its books of accounts. ERPNext sets up a simple chart of accounts for each Company you create, but you can modify it according to your needs and legal requirements.

For each company, Chart of Accounts signifies the way to classify the accounting entries, mostly
based on statutory (tax, compliance to government regulations) requirements.

There's a brief video tutorial about chart of accounts in the next step.`),
__(`# All about sales invoice

A Sales Invoice is a bill that you send to your Customers against which the Customer makes the payment. Sales Invoice is an accounting transaction. On submission of Sales Invoice, the system updates the receivable and books income against a Customer Account.

Here's the flow of how a sales invoice is generally created


![Sales Flow](https://docs.erpnext.com/docs/assets/img/accounts/so-flow.png)`),
__(`# What's a Purchase Invoice?

A Purchase Invoice is a bill you receive from your Suppliers against which you need to make the payment.
Purchase Invoice is the exact opposite of your Sales Invoice. Here you accrue expenses to your Supplier. 

The following is what a typical purchase cycle looks like, however you can create a purchase invoice directly as well.

![Purchase Flow](https://docs.erpnext.com/docs/assets/img/accounts/pi-flow.png)

`),
__(`# Setting up Taxes

Any sophisticated accounting system, including ERPNext will have automatic tax calculations for your transactions. These calculations are based on user defined rules in compliance to local rules and regulations.

ERPNext allows this via *Tax Templates*. These templates can be used in Sales Orders and Sales Invoices. Other types of charges that may apply to your invoices (like shipping, insurance etc.) can also be configured as taxes.

For Tax Accounts that you want to use in the tax templates, go to:

'> Accounting > Taxes > Sales Taxes and Charges Template'

You can read more about these templates in our documentation [here](https://docs.erpnext.com/docs/user/manual/en/selling/sales-taxes-and-charges-template)
`),
__(`e.g. "Build tools for builders"`),
]