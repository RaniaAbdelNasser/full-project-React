import _ from 'lodash';

export function paginate(items , pageSize ,pageNumber){

const startIndex =  (pageNumber - 1 ) * pageSize ;
// to make items new array
return _(items).slice(startIndex).take(pageSize).value();
}