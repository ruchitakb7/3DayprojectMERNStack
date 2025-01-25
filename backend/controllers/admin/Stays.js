const Stays= require('../../models/admin/stays')

exports.addhotelDetail = async (req, res, next) => {
  const {
    placename,
    pricePerNight,
    address,
    pincode,
    city,
    images,
    category,
  } = req.body;

  try {
    if (
      !placename ||
      !pricePerNight ||
      !address ||
      !pincode ||
      !city ||
      !images ||
      !Array.isArray(images) ||
      images.length === 0 ||
      !category
    ) {
      return res.status(400).json({ message: 'All fields are required and images must be an array.' });
    }

    const newStay = await Stays.create({
      placename,
      pricePerNight,
      address,
      pincode,
      city,
      images,
      category,
    });

    // Send success response
    res.status(201).json({
      message: 'Hotel details added successfully!',
      stay: newStay,
    });
  } catch (error) {
    // Handle errors
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error', error: error.message });
  }
};

exports.fetchdata=async(req,res,next)=>{

  try{
      const response=await Stays.find()
      res.status(201).json({data:response})
  }catch(e){
    console.log(e)
  }

}


exports.editData=async (req,res,next)=>{
  
  const {placename,pricePerNight,address,pincode,city,images,category,_id} = req.body;

  try{
    const updates = { placename, pricePerNight, address, pincode, city, images, category };

       const response= await Stays.findByIdAndUpdate(_id,updates,{ new: true, runValidators: true })
      
        res.status(200).json({message:"Data has been successfully updated"})

  }catch(e){
    console.log(e)
    res.status(500).json({ message: 'Internal Server Error' });
  }

}


exports.deleteData=async(req,res,next)=>{
  const id=req.params.id
  try{
      const response= await Stays.findByIdAndDelete(id)
    
      res.status(200).json({message:"Data has been deleted successfully"})
  }catch(e)
  {
    res.status(500).json({message:"Internal server Error"})
  }
}