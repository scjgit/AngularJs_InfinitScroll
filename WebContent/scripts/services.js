"use strict";
/**Creates a service called FetchData*/
infiniteScrollModule.service('FetchData',function($log){
	/**Creates a method called getMoreData()
	 * param ListDtat phoneList*/
	this.getMoreData = function(listData){
		/**Traverse through the listData*/
		for(var count in listData){
			/**Checks count < 6*/
			if(count < 6){
				/**Adds objects to the existing list */
				listData.push(listData[count]);
			}else{
				break;
			}
		}
	};
});