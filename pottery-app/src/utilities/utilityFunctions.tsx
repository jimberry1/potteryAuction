export const formatItemDescriptionForCard: (description: string) => string = (
  description
) => {
  if (description.length < 50) {
    return description;
  } else {
    return description.substring(0, 50).concat('...');
  }
};

export const formatItemTitleForCard: (title: string) => string = (title) => {
  if (title.length < 40) {
    return title;
  } else return title.substring(0, 40).concat('...');
};
