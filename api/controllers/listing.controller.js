export const createListing = async (req, res, next) => {
  try {
    const listing = await Listing.craete(req.body);
  } catch (error) {
    next(error);
  }
};
