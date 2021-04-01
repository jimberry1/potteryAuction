import { artistType } from '../types';

export interface TestArtistDisplayProps {
  artist: artistType;
}

const TestArtistDisplay: React.SFC<TestArtistDisplayProps> = () => {
  return (
    <div>
      <img
        className="inline object-cover w-16 h-16 mr-2 rounded-full"
        src="https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
        alt="Profile image"
      />
    </div>
  );
};

export default TestArtistDisplay;
