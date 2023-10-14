export type BuyerData = {
    id?: string;
    /** Each version of their offer that a Buyer has sent. */
    offerBundles?: string[];
    name: string;
    /** This is how we determine if a bundle is from a new buyer, or a new version of a bundle that has already been uploaded from the same buyer. */
    listingKey: string;
};
