/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` your home page.            *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  // admin routes begain 
  'POST /admin/blog': 'admin/BlogController.store',
  // admin routes end here 



 'POST /api/auth/login' : 'api/LoginController.login',
 'POST /api/auth/register': 'api/RegisterController.register',
 'POST /api/user/blog': 'api/BlogController.index',
 'POST /api/user/blog/slid': 'api/BlogController.slid',
 'POST /api/user/blog/:slug': 'api/BlogController.show',
 'POST /api/user/contact':'api/ContactController.store',
 'GET /api/user/contact':'api/ContactController.index',


  /***************************************************************************
  *                                                                          *
  * More custom routes here...                                               *
  * (See https://sailsjs.com/config/routes for examples.)                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the routes in this file, it   *
  * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
  * not match any of those, it is matched against static assets.             *
  *                                                                          *
  ***************************************************************************/


};
