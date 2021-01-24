/**
 * LoginController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

const UTILServices = require("../../services/UTILServices");

module.exports = {
  
    login: async (req, res) => {

        let response = {};

        try {
            const {email, password} = req.body;

            const user = await User.findOne({email:email});

            response.error = true;
            response.message = 'Password not valid';
            response.data = [];

            if(!user) {
                response.error = true;
                response.message = 'User Not Found';
                response.data = [];
            }

            const matchPass = await UTILServices.comparePassword(password, user.password);

            if(matchPass) {
                response.error = false;
                response.message = 'Login Success';
                response.data = user

            }

        }catch(error) {
            response.error = true;
            response.message = 'Login Not valid';
            response.data = [];
             
        }

        if(response.error){
            return res.badRequest(response);
        }else {
            return res.json(response);
        }
        

    }

};

