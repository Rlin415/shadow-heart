"use strict";

let MedFactory = function($http) {

  let medData = {};

  let getMeds = (user) => {
    return $http({
      method: 'GET',
      url: '/api/medications',
      data: user
    })
    .then(response =>  {
      return response.data;
    }, error => {
      return error;
    });
  };

  let deleteMed = (medId) => {
    return $http({
      method: 'DELETE',
      url: '/api/medications/' + medId
    })
    .then(response =>  {
      return response.data;
    }, error => {
      return error;
    });
  };

  let editMed = (user) => {
    return $http({
      method: 'PUT',
      url: '/api/medications/' + user,
      data: user
    })
    .then(response =>  {
      return response.data;
    }, error => {
      return error;
    });

  };

  return {
    medData,
    getMeds,
    deleteMed,
    editMed
  };

};

export default MedFactory;
