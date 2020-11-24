import { post } from 'jquery';

export default {
  getItems,
  createItem,
  updateItem,
  deleteItem
};

const BASE_URL = 'https://thinkful-list-api.herokuapp.com/[tyler-krzyzanowski]';

const listApiFetch = function (...args) {
  // setup var in scope outside of promise chain
  let error;
  return fetch(...args)
    .then(res => {
      if (!res.ok) {
        // if response is not 2xx, start building error object
        error = { code: res.status };
  
        // if response is not JSON type, place statusText in error object and
        // immediately reject promise
        if (!res.headers.get('content-type').includes('json')) {
          error.message = res.statusText;
          return Promise.reject(error);
        }
      }
    });
};

function getItems(){
  return fetch(`${BASE_URL}/items`);
}

function createItem(name){
  let newItem = {
    'name': name
  };
  let newItemJson = JSON.stringify(newItem);
  let result = fetch(`${BASE_URL}/items`, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: newItemJson
  });
  return result;
}

function updateItem(id, updateData){
  let updatedItem = fetch(`${BASE_URL}/items/${id}`, {
    method: 'PATCH',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(updateData)
  });
  return updatedItem;
}

function deleteItem(id){
  let deletedItem = fetch(`${BASE_URL}/items/${id}`, {
    method: 'DELETE',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(this)
  });
  return deletedItem;
}

