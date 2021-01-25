/**
 * ContactController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */


module.exports = {
    
    index: async (req, res) => {
        let response = {};
        try{
            const data = await Contact.find();

            response.error = false;
            response.message = 'Contact list';
            response.data = data;
        }catch(error) {
            response.error = true;
            response.message = 'Error';
            response.data = error;
        }

        if(response.error) {
            res.badRequest(response);
        }else {
            res.json(response);
        }
    },

    store: async (req, res) => {
        const {name, email, mobile, message} = req.body;

        let response = {};

        try{    
            const contact = await Contact.create({name:name,email:email,mobile:mobile,message:message}).fetch();

            response.error = false;
            response.message = 'Data saved!';
            response.data = contact;
        }catch(error) {
            response.error = true;
            response.message = 'Error';
            response.data = error;
        }

        if(response.error) {
            res.badRequest(response);
        }else {
            res.json(response);
        }
    }

};

