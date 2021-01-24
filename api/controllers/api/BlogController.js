/**
 * BlogController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  
    index: async (req, res) => {

        let response = {};
        try {
            const data = await Blog.find();

            response.error = false;
            response.message = 'Blog Data';
            response.data = data;
        }catch(error) {
            response.error = true;
            response.message = 'Error';
            response.data = error
        }

        if(response.error) {
            res.badRequest(response)
        }else {
            res.json(response)
        }      
    },

    show: async (req,res) => {
        let response = {};

        const {slug} = req.params;

        try {
            const data = await Blog.findOne({slug:slug});

            response.error = false;
            response.message = 'Blog Data';
            response.data = data;

        }catch(error) {
            response.error = true;
            response.message = 'Error';
            response.data = error
        }

        if(response.error) {
            res.badRequest(response)
        }else {
            res.json(response)
        }
    },

    store: async (req, res) => {
        const {title, slug, body, image} = req.body;

        let response = {};

        try {
            const blog = await Blog.create({title:title,slug:slug,body:body,image:image}).fetch();

            response.error = false;
            response.message = 'Blog Created';
            response.data = blog;
            
        }catch(error) {
            response.error = true;
            response.message = 'Error';
            response.data = error
        }

        if(response.error) {
            res.badRequest(response);
        }else {
            res.json(response)
        }
    }

};

