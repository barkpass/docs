---
title: Changelog
---

# Changelog

This changelog represents updates made to both the administrative side of Barkpass as well as the customer-facing side of Barkpass.

### June 15, 2020

- Added the ability to mark pets inactive.

### May 13, 2020

- We now always fetch the most current data from the city (including whether day passes are on sale) to ensure the user cannot see it as an option.
- We now display a notice to the user if they do happen to end up on the Day Pass page via a direct link which replaces the form that would normally be there.
- Added validation on the checkout process on the server to make sure a user isn't able to purchase a day pass, even if the first two stop-gaps were to fail.

### May 4, 2020

- Added a Notes section to admin interface for Users and Applications.
- Added new dashboard metrics, including day passes per day and lifetime transaction total.

### April 21, 2020

- Improved document upload handling, sending new uploads straight to the cloud, to prevent file size errors.

### April 13, 2020

- Improved offline application processing.
- Added link to **View Application** from application detail screen.
- Changed all references of "in-person" to "offline" to properly cover telephone transactions in addition to in-person transactions.
- Added a "Send Receipt" option to the offline application processing form to allow email receipts to be sent to users paying over the phone.

### March 30, 2020

- Introduced **Invoices** to support customers who an outstanding balance.
- Added the ability to mark an application as **Inactive** to prevent them from receiving additional messages.

### March 17, 2020

- Updated Messages to be archived rather than deleted for historical reference purposes.
- Added a new **Duplicate Message** action to be able to use an existing message as a starting point.

### March 6, 2020

- Allow users to pay an outstanding balance on a pending application.

### February 27, 2020

- Add a [Support](https://www.barkpass.com/support) page to encourage users to contact their local city instead of Barkpass for support or application questions.
