import {
  artTypeSelection,
  materialSelection,
} from '../../configuration/potFilterFields';
import { artworkAuctionType } from '../../types';

export interface AddOrUpdateArtworkFormProps {
  artworkAuction: artworkAuctionType;
  titleChanged: (newVal: string) => void;
  descriptionChanged: (newVal: string) => void;
  categoryChanged: (newVal: string) => void;
  materialsChanged: (newVal: string) => void;
  sizeChanged: (newVal: string) => void;
  priceChanged: (newVal: number) => void;
  submitArtworkClicked: () => void;
}
// {
//     artistId: artistId,
//     artistUserId: userId,
//     buyerId: '',
//     timestamp: null,
//     // artwork info
//     title: '',
//     description: '',
//     artCategory: '',
//     artMaterials: [],
//     views: 0,
//     photosURL: [],
//     size: '',
//     // Artist info
//     artistName: '',
//     artistDescription: '',
//     // Charity info
//     charityName: '',
//     charityDescription: '',
//     charityURL: '',
//     // auction info
//     price: 0,
//     sold: false,
//     auctionType: BUYOUT_AUCTION_TYPE,
//   }

// Fields I need to be able to edit
/**
 * Title
 * Description
 * Category
 * Materials
 * photos
 * size
 * price
 *
 * Not sure about
 * artist info -- should this come from the artist's profile?
 * @returns
 */
const AddOrUpdateArtworkForm: React.SFC<AddOrUpdateArtworkFormProps> = ({
  artworkAuction,
  titleChanged,
  descriptionChanged,
  sizeChanged,
  materialsChanged,
  priceChanged,
  categoryChanged,
  submitArtworkClicked,
}) => {
  return (
    <div>
      <div className="hidden sm:block" aria-hidden="true">
        <div className="py-5">
          <div className="border-t border-gray-200"></div>
        </div>
      </div>

      <div className="mt-10 sm:mt-0 mb-5">
        <div className="md:grid md:grid-cols-5 md:gap-6 ">
          <div className="col-span-1"></div>
          <div className="mt-5 md:mt-0 md:col-span-3 col-start-1">
            <form action="#" method="POST">
              <div className="shadow overflow-hidden sm:rounded-md">
                <div className="px-4 py-5 bg-white sm:p-6">
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-6">
                      <label className="block text-sm font-medium text-gray-700">
                        Artwork Title<b>{` *`}</b>
                      </label>
                      <input
                        type="text"
                        name="artwork_title"
                        id="artwork_title"
                        value={artworkAuction.title}
                        onChange={(e) => titleChanged(e.target.value)} // TODO Add some max length validation
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-6">
                      <label className="block text-sm font-medium text-gray-700">
                        Artwork Description<b>{` *`}</b>
                      </label>
                      <input
                        type="text"
                        name="artwork_Description"
                        id="artwork_description"
                        value={artworkAuction.description}
                        onChange={(e) => descriptionChanged(e.target.value)} // TODO Add some max length validation
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-4">
                      <label className="block text-sm font-medium text-gray-700">
                        Price (£)<b>{` *`}</b>
                      </label>
                      <input
                        type="number"
                        name="email_address"
                        id="email_address"
                        value={artworkAuction.price}
                        onChange={(e) => priceChanged(e.target.valueAsNumber)}
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label className="block text-sm font-medium text-gray-700">
                        Art Category
                      </label>
                      <select
                        id="country"
                        name="country"
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        onChange={(e) => categoryChanged(e.target.value)}
                      >
                        {artTypeSelection.menuOptions.map((artType) => {
                          return (
                            <option value={artType.value} key={artType.id}>
                              {artType.label}
                            </option>
                          );
                        })}
                      </select>
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                      <label className="block text-sm font-medium text-gray-700">
                        Art Materials
                      </label>
                      <select
                        id="country"
                        name="country"
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        onChange={(e) => materialsChanged(e.target.value)}
                      >
                        {materialSelection.menuOptions.map((materialType) => {
                          return (
                            <option
                              value={materialType.value}
                              key={materialType.id}
                            >
                              {materialType.label}
                            </option>
                          );
                        })}
                      </select>
                    </div>

                    {/* <div className="col-span-6">
                      <label className="block text-sm font-medium text-gray-700">
                        Street address
                      </label>
                      <input
                        type="text"
                        name="street_address"
                        id="street_address"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div> */}

                    {/* <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                      <label className="block text-sm font-medium text-gray-700">
                        City
                      </label>
                      <input
                        type="text"
                        name="city"
                        id="city"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div> */}

                    {/* <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                      <label className="block text-sm font-medium text-gray-700">
                        State / Province
                      </label>
                      <input
                        type="text"
                        name="state"
                        id="state"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div> */}

                    {/* <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                      <label className="block text-sm font-medium text-gray-700">
                        ZIP / Postal
                      </label>
                      <input
                        type="text"
                        name="postal_code"
                        id="postal_code"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div> */}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mt-4">
                      Artwork picture(s) <b>{` *`}</b>
                    </label>
                    <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                      <div className="space-y-1 text-center">
                        <svg
                          className="mx-auto h-12 w-12 text-gray-400"
                          stroke="currentColor"
                          fill="none"
                          viewBox="0 0 48 48"
                          aria-hidden="true"
                        >
                          <path
                            d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <div className="flex text-sm text-gray-600">
                          <label className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                            <span>Upload a file</span>
                            <input
                              id="file-upload"
                              name="file-upload"
                              type="file"
                              className="sr-only"
                            />
                          </label>
                          <p className="pl-1">or drag and drop</p>
                        </div>
                        <p className="text-xs text-gray-500">
                          PNG, JPG, GIF up to 10MB
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="px-4 py-3 bg-gray-50 flex justify-center sm:px-6">
                  <button
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    onClick={(e) => {
                      e.preventDefault();
                      submitArtworkClicked();
                    }}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddOrUpdateArtworkForm;
