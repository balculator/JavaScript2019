const { departmentStores } = require('./recursion-departmentStores-data');
const { tree } = require('./recursion-tree-data');

/**
 * Using recursion, find the object in the node tree that has a given id.
 * You will be looping through the data in *recursion-find-id-data.json*.
 *
 * @param {number} id
 * @returns {Object} the object that the id is in
 *
 * @example
 * findId(1234);
 * // This should return:
 * {
 *    id: 567897,
 *    name: 'Consultants, Reviewers, and National Geographic Exploration',
 *    activityId: 'ZNRAE749BSD0CTGHY888SSSZ',
 *    nodeType: 'activity',
 *    suppressed: false,
 *    hidden: false
 * }
 */
const findId = (data, id) => {

  for (var i in data) {

    if (data[i].id == id) {
      return data[i];
    }
    else if (data[i].children) {
      return findId(data[i].children, id);
    }
  }

};

/**
 * Using recursion, remove the object from the node tree that has a given id.
 * You will be looping through the data in *recursion-delete-store.json*
 *
 * @param {number} id
 * @returns {Object} the entire data source, except it won't have the
 * object with the matching id
 *
 * @example
 * //deleteStore(567897);
 * // This should return:
 * {
 *   id: 1234567,
 *   store: 'Walmart',
 *   // ...
 * },
 * {
 *   branches: [
 *     // This branch is removed because it has id 567897
 *     {
 *       id: 567890,
 *       store: 'Walmart',
 *       // ...
 *     }
 *   ]
 * }
 */

const deleteStore = (stores, id) => {


  for (var j in stores) {


    if (stores[j].id == id) {
      console.log('i am tryting to delete');
      console.log(stores[j]);
      delete stores[j];
      return stores;
    }
    else if (stores[j].branches) {
      console.log('inside else statement');
      console.log(stores[j]);
      return deleteStore(stores[j].branches, id);
    }




  }



};

module.exports = {
  findId,
  deleteStore
};
