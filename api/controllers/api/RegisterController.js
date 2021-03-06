/**
 * RegisterController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

const UTILServices = require("../../services/UTILServices");

module.exports = {
    register: async (req, res) => {
        const {name, email, mobile, password, confirm_password} = req.body;
        let response = {};
        try{
            const hachedPass = await UTILServices.hashPassword(password);

            if(password != confirm_password) {
                response.error = true;
                response.message = 'Password not matched with confirm password';
                response.data = [];

                return res.badRequest(response);
            }

            const user = await User.create({name:name,email:email,mobile:mobile,password:hachedPass}).fetch();
            response.error = false;
            response.message = 'User Created',
            response.data = user;
            
        }catch(error) {
            response.error = true;
            response.message = 'Data not valid';
            response.data = error
        }
        
        if(response.error) {
            return res.badRequest(response);
        }else {
            return res.json(response);
        }
    }

};

