import { useState } from 'react';
import { artworkAuctionType, artworkType } from '../../types';
import { AnimatePresence, motion } from 'framer-motion';
import { artPageFadeInVariants } from '../../styles/animations';
import ArtCardSubHeader from './artCardSectionSubComponents/artCardSubHeader';
import {
  ARTIST,
  CHARITY,
  DESCRIPTION,
} from '../../configuration/staticVariableNames/artPageTabAndFieldNames';
import PointyArrowWithText from '../pointArrowWithText';
import BlueBanner from '../../UI/alerts/blueBanner';
export interface ArtWithSectionsAndPriceProps {
  artwork: artworkAuctionType;
  artistClicked: (artistId: string) => void;
  buyClicked: () => void;
  userId: string;
}

export interface ArtComponentSubSection {
  artwork: artworkAuctionType;
  clicked?: any;
}

type category = {
  label: string;
  id: string;
};

const subComponentVairants = {
  hidden: {
    y: 30,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      easing: 'easeInOut',
    },
  },
};

const ArtWithSectionsAndPrice: React.FunctionComponent<ArtWithSectionsAndPriceProps> = ({
  artwork,
  artistClicked,
  buyClicked,
  userId,
}) => {
  const categories: category[] = [
    { id: '98234894389j', label: 'Description' },
    { id: 'fkj32ofi23i3f', label: 'Artist' },
    { id: 'fklfipf3i390', label: 'Charity' },
  ];
  const [selectedCategory, setSelectedCategory] = useState('Description');
  return (
    <section className="text-gray-600 body-font overflow-hidden">
      {artwork.sold && (
        <BlueBanner messageText="This item has already been sold" />
      )}
      <div className="container px-5 py-2 md:py-24 mx-auto">
        <motion.div
          className="lg:w-4/5 mx-auto flex flex-wrap"
          variants={artPageFadeInVariants}
          initial="hidden"
          animate="visible"
        >
          <img
            alt="ecommerce"
            className={`lg:w-1/3 w-full lg:h-auto h-64 object-cover object-center rounded transition duration-500 ${
              artwork.sold ? 'opacity-50 hover:opacity-100' : ''
            }`}
            src={artwork.photosURL[0]}
          />

          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mb-6 lg:mb-0">
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">
              {artwork.title}
            </h1>
            <div className="flex mb-4">
              {categories.map((category) => {
                return (
                  <ArtCardSubHeader
                    subtitle={category.label}
                    key={category.id}
                    selected={category.label === selectedCategory}
                    clicked={() => setSelectedCategory(category.label)}
                  />
                );
              })}
            </div>

            <AnimatePresence exitBeforeEnter>
              {selectedCategory === DESCRIPTION && (
                <DescriptionSubSection artwork={artwork} key="234892jwdjw209" />
              )}
              {selectedCategory === ARTIST && (
                <ArtistSubSection
                  artwork={artwork}
                  key="234892jwdj2242w209"
                  clicked={() => {
                    artistClicked(artwork.artistId);
                  }}
                />
              )}
              {selectedCategory === CHARITY && (
                <CharitySubSection
                  artwork={artwork}
                  key="234892jw234221djw209"
                />
              )}
            </AnimatePresence>
            {!artwork.sold && (
              <AuctionSubSection price={artwork.price} clicked={buyClicked} />
            )}
            {artwork.sold && userId && artwork?.buyerId === userId && (
              <div style={{ color: 'red', textAlign: 'center' }}>
                <p>You have successfully purchased this item!</p>
              </div>
            )}
            {artwork.sold && (!userId || artwork?.buyerId !== userId) && (
              <div style={{ color: 'red', textAlign: 'center' }}>
                <p>This item has already been sold.</p>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ArtWithSectionsAndPrice;

const DescriptionSubSection: React.FunctionComponent<ArtComponentSubSection> = ({
  artwork,
}) => {
  return (
    <motion.div
      variants={subComponentVairants}
      initial="hidden"
      animate="visible"
      exit="hidden"
      style={{ minHeight: 200 }}
    >
      <p className="leading-relaxed mb-4">{artwork.description}</p>
      <div className="flex border-t border-gray-400 py-2">
        <span className="text-gray-500">Height</span>
        <span className="ml-auto text-gray-900">120 cm</span>
      </div>
      <div className="flex border-t border-gray-400 py-2">
        <span className="text-gray-500">Width</span>
        <span className="ml-auto text-gray-900">30 cm</span>
      </div>
      <div className="flex border-t border-b mb-6 border-gray-400 py-2">
        <span className="text-gray-500">Views</span>
        <span className="ml-auto text-gray-900">{artwork.views}</span>
      </div>
    </motion.div>
  );
};

const CharitySubSection: React.FunctionComponent<ArtComponentSubSection> = ({
  artwork,
}) => {
  return (
    <motion.div
      variants={subComponentVairants}
      initial="hidden"
      animate="visible"
      exit="hidden"
      style={{ minHeight: 200 }}
    >
      <h2 className="text-xl font-bold title-font text-gray-500 tracking-widest pb-1">
        {artwork.charityName}
      </h2>
      <p className="leading-relaxed mb-4">{artwork.charityDescription}</p>
      <PointyArrowWithText text={artwork.charityURL} clicked={() => {}} />
    </motion.div>
  );
};

const ArtistSubSection: React.FunctionComponent<ArtComponentSubSection> = ({
  artwork,
  clicked,
}) => {
  return (
    <motion.div
      variants={subComponentVairants}
      initial="hidden"
      animate="visible"
      exit="hidden"
      style={{ minHeight: 200 }}
    >
      <h2 className="text-xl font-bold title-font text-gray-500 tracking-widest pb-1">
        {artwork.artistName}
      </h2>
      <p className="leading-relaxed mb-4">
        This is the section where information about the artist will be displayed
      </p>
      <PointyArrowWithText text="See artist" clicked={clicked} />
    </motion.div>
  );
};

interface auctionComponentSubsectionProps {
  price: number;
  clicked: () => void;
}
const AuctionSubSection: React.FunctionComponent<auctionComponentSubsectionProps> = ({
  price,
  clicked,
}) => {
  return (
    <div className="flex mt-5">
      <span className="title-font font-medium text-2xl text-gray-900">
        £{price.toFixed(2)}
      </span>
      <button
        className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"
        onClick={clicked}
      >
        Buy
      </button>
      <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
        <svg
          fill="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          className="w-5 h-5"
          viewBox="0 0 24 24"
        >
          <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
        </svg>
      </button>
    </div>
  );
};
