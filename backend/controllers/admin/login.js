const Admin=require('../../models/admin/admin.js')
const bcrypt= require('bcrypt')
const jwt=require('jsonwebtoken')


function isStringvalid(string)
{
    if(string.trim()!='')
        return true
    else
    return false
}


function generateToken(id)
{
    return jwt.sign({id},'secretkey')
}


exports.adminLogin= async (req,res,next)=>{

    const email=req.body.email;
    const password=req.body.password;

try{
    const admin= await Admin.findOne({email:email})
 
        if (!admin) {
            return res.status(404).json({ success: false, message: 'User does not exist' });
        }
        
        bcrypt.compare(password,Admin.password,(err,result)=>{
            if (err) {
                throw new Error('An error occurred while comparing passwords');
            }
            if (result) {
                return res.status(200).json({
                    success: true,
                    message: 'User has been logged in successfully',
                    token: generateToken(admin._id),
                    adminId:admin._id
                });
            } else {
                return res.status(400).json({ success: false, message: 'Password is incorrect' });
            }
        })
    
}
catch(e){
    res.status(500).json({ message: 'An unknown error occurred', error: err });
}
    
}