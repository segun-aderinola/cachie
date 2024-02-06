const errorHandler = require('../middleware/errorHandler');
const queryService = require('../services/query');

// Controller function for handling POST /search
module.exports = {
    search: async function (req, res, next) {
        try {
          const { search_query } = req.body;
          
          await queryService.addQueryString(search_query);

          return res.status(200).json({ status: 'ok' });
      
        } catch (error) {
        //   console.log(error)
          errorHandler(error, res)
        }
      },

    analyse: async function (req, res, next) {
    try {
        const queryString = req.query.analysis_token;
        
        const decodedString = Buffer.from(queryString, 'base64').toString('utf-8');
        
        const result = await queryService.searchString(decodedString);
        console.log(result)
        res.status(200).json(result);
    } catch (error) {
        errorHandler(error, res);
        // next(error);
    }
    }
}
