import ReactGA from 'react-ga4'

export const Event = (category, action, label) => {
    ReactGA.event({
      category: category,
      action: action,
      label: label
    });
  };