
const initState = {
    photographers: [
      {id: "0R08WvsQvKXPOaIcqmYpLV2nmWw2", firstName: 'Simon', lastName: 'Walker', avatar:"img1"},
      {id: '2', firstName: 'Cory', lastName: 'Boche',avatar:"img2"},
      {id: '3', firstName: 'Ani', lastName: 'Dinger',avatar:"img3"}
    ]
  }
  
  const photographerReducer = (state = initState, action) => {
    switch (action.type) {
      case 'CREATE_PHOTOGRAPHER':
        console.log('create photographer', action.photographer);
        return state;
      case 'CREATE_PHOTOGRAPHER_ERROR':
        console.log("create photographer error", action.err);
        return state;
      default:
        return state;
    }
  };
  
  export default photographerReducer;