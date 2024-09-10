const jwt = require('jsonwebtoken');
const jwt_decode = require("jwt-decode"); //npmpackage


module.exports = {
  async completeTrack(ctx, next) {
    try {

      console.log(ctx.request.body);

      // Get the JWT token from the request headers or cookies
      const token = ctx.headers.authorization?.split(' ')[1]; // Extract token from header

      // Verify and decode the JWT token
      const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
      console.log(decodedToken);

      // @ts-ignore
      const entry = await strapi.db.query('plugin::users-permissions.user').findOne({ where: { id: decodedToken.id }, populate: true,  });

      
      const newTracks = entry.tracks.map(track => {
        if (track.id === parseInt(ctx.request.body.id)) {
          track.completed = true;
        }
        return track;
      });

      console.log({newTracks});
      
      
      
      const updateResponse = await strapi.entityService.update('plugin::users-permissions.user', entry.id, {data: {tracks: newTracks}});
      console.log({updateResponse});

      // Extract the user ID from the decoded token
      // const userId = decodedToken.userId;

      // Find the user in the database using the user ID
      // const user = await User.findById(userId);

      // Use the user object as needed
      

      // const data = await strapi.entityService.update({}

      ctx.body = {};
      // ctx.body = data;
    } catch (err) {
      console.log(err);
      
      ctx.badRequest("Post report controller error", { moreDetails: err });
    }
  },
};