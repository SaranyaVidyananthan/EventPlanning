# EventPlanning

The API backend is written in node.js and exposes various endpoints relating to the user and vendors details.

/user: will return the first and last name of the user and the email address and whether they are vendor or customer.

/vendors: will return a list of all the vendors: the vendorID, vendor name, the service offered and contact information.

/vendor/{vendorId}: will return the vendor name, the service offered and contact info given a vendorID.

/vendor/{vendorId}/portfolio: will return the images and videos for a vendorID.
- there could be a second query param to identify that you only want 3 pictures for a preview.

/vendor/{vendorId}/reviews: returns a list of all the reviews for a vendorID.
