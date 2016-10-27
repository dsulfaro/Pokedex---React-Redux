export const fetchAllPokemon = (success, error) => {
  $.ajax({
    type: 'GET',
    url: '/api/pokemon',
    dataType: 'json',
    success,
    error
  });
};


export const fetchAPokemon = (pokemon, success, error) => {
  $.ajax({
    type: 'GET',
    url: `/api/pokemon/${pokemon}`,
    dataType: 'json',
    success,
    error
  });
};

export const createPokemon = (pokemon, success, error) => {
  debugger
  $.ajax({
    type: 'POST',
    url: '/api/pokemon',
    data: { pokemon },
    success,
    error
  });
};
