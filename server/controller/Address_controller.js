const Address = require('../modals/Address'); // Import the Address model

// Create a new user
exports.createAddress = async (req, res) => {
  try {
    // Create a new user instance based on the schema
    const newAddress = new Address({
      city: req.body.city,
      email: req.body.email,
      name: req.body.name,
      phone: req.body.phone,
      pincode: req.body.pincode,
      state: req.body.state,
      street: req.body.street,
    });

    // Save the user to the database
    const savedAddress = await newAddress.save();

    res.status(201).json({
      message: 'Address created successfully',
      user: savedAddress,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Failed to create user',
      error,
    });
  }
};


exports.fetchAddressByUsername = async (req, res) => {
    try {
      // Assuming the username is passed in the request parameters
      const { username } = req.params;
  
      // Query the Address model to find the address associated with the provided username
      const address = await Address.findOne({ username });
  
      if (!address) {
        return res.status(404).json({
          message: 'Address not found for the given username',
        });
      }
  
      res.status(200).json({
        message: 'Address retrieved successfully',
        address,
      });
    } catch (error) {
      res.status(500).json({
        message: 'Failed to fetch address by username',
        error,
      });
    }
  };