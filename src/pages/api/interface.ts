type Availability = 'Starter' | 'Unlockable' | 'Downloadable' | 'Custom';

interface ICharacter {
  availability: Availability;
  images: {
    icon: string;
    portrait: string;
  },
  name: string;
  order: string;
  series: {
    icon: string;
    name: string;
  };
};

export default ICharacter