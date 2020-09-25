export const actions = {
  SET_ON_LOGIN: 'set_on_login',
  SET_USER: 'set_user',
  SET_WEATHER_RECORD: 'set_weather_record',
  SET_CORONA_RECORD: 'set_corona_record',
  SET_NAVBAR_ITEMS: 'set_navbar_items',
  SET_SELECTED_STORY: 'set_selected_story',
  SET_STORIES: 'set_stories',
  SET_INTERNATIONAL_STORIES: 'set_international_stories',
  SET_NATIONAL_STORIES: 'set_national_stories',
  SET_BIOGRAPHICAL_STORIES: 'set_biograpical_stories',
  SET_SHOWBIZ_STORIES: 'set_showbiz_stories',
  SET_SPORTS_STORIES: 'set_sports_stories',
  SET_ENGLISH_STORIES: 'set_english_stories',
  SET_NEWS: 'set_news',
};

export const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case actions.SET_ON_LOGIN:
      return {
        ...state,
        onlogin: action.payload
      };
    case actions.SET_USER:
      return {
        ...state,
        user: action.payload
      };
    case actions.SET_WEATHER_RECORD:
      return {
        ...state,
        weatherRecord: action.payload
      };
    case actions.SET_CORONA_RECORD:
      return {
        ...state,
        coronaRecord: action.payload
      };
    case actions.SET_NAVBAR_ITEMS:
      return {
        ...state,
        navbarItems: action.payload
      };
    case actions.SET_SELECTED_STORY:
      return {
        ...state,
        selectedStory: action.payload
      };
    case actions.SET_NEWS:
      return {
        ...state,
        news: action.payload
      };
    case actions.SET_STORIES:
      return {
        ...state,
        stories: action.payload
      };
    case actions.SET_INTERNATIONAL_STORIES:
      return {
        ...state,
        internationalStories: action.payload
      };
    case actions.SET_NATIONAL_STORIES:
      return {
        ...state,
        nationalStories: action.payload
      };
    case actions.SET_BIOGRAPHICAL_STORIES:
      return {
        ...state,
        biographicalStories: action.payload
      };
    case actions.SET_SHOWBIZ_STORIES:
      return {
        ...state,
        showbizStories: action.payload
      };
    case actions.SET_SPORTS_STORIES:
      return {
        ...state,
        sportsStories: action.payload
      };
    case actions.SET_ENGLISH_STORIES:
      return {
        ...state,
        englishStories: action.payload
      };
    default:
      return state;
  }
};
