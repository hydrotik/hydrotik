import Papa from 'papaparse';


type Props = {
  path: string;
};




export default class DataController {

  /**
   * Main DataController constructor
   */

  constructor(opts:Props) {
    if (this instanceof DataController) {
      opts = opts || {};
      return this;
    }

    return new DataController(opts);
  }
};
