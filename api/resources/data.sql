
INSERT INTO User (userId, firstName, surName, email, type)
VALUES (1, 'John', 'Doe', 'john.doe@live.ca', 'Customer');

INSERT INTO User (userId, firstName, surName, email, type)
VALUES (2, 'David', 'Marksman', 'david.marksman@live.ca', 'Customer');

INSERT INTO User (userId, firstName, surName, email, type)
VALUES (3, 'Lia', 'Marcus', 'lia.marcus@live.ca', 'Vendor');

INSERT INTO User (userId, firstName, surName, email, type)
VALUES (4, 'Mary', 'Adams', 'mary.adams@live.ca', 'Vendor');

Insert INTO Vendor (vendorId, vendorName, email, phoneNumber, userId, type)
VALUES (1, 'Empty Canvas Inc.', 'empty.canvas@live.ca', '4169482929', 3, 'makeupArtist');

Insert INTO Vendor (vendorId, vendorName, email, phoneNumber, userId, type)
VALUES (2, 'Vogue Hair Styles', 'vogue.hair.styles@live.ca', '4169482929', 3, 'hairStylist');

Insert INTO Vendor (vendorId, vendorName, email, phoneNumber, userId, type)
VALUES (3, 'Mary Decorates Inc.', 'mary.decorates@live.ca', '4163332323', 4, 'decorator');