/**
 * BlogController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    store: async (req, res) => {
        const {title, slug, body} = req.body;

        let response = {};

        var image;        

        try {

            req.file('image').upload({
                dirname: require('path').resolve(sails.config.appPath, 'assets/images')
            }, async (err, uploadedFiles) => {
                if (err) return res.serverError(err);
    
                image = uploadedFiles[0].fd.replace(/^.[\\\/]/, '');
                image = image.split('/').pop();
                image = 'assets/image/'+image;
                const blog = await Blog.create({title:title,slug:slug,body:body,image:image}).fetch();         
                
            }); 
            
            response.error = false;
            response.message = 'Blog Created';
            // response.data = blog;
            
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

