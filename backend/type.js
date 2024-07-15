const z = require('zod');

const business = z.object({
  name: z.string(),
  experience: z.string(),
  interests: z.string()
});

module.exports = { business };
