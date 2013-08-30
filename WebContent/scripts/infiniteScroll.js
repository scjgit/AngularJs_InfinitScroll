'use strict';

/**Creates a module named infiniteScrollModule and assigning it to a variable*/
var infiniteScrollModule = angular.module('infiniteScrollModule',[]);

/**Creates a directive called 'scrollnext' and injects FetchData service to it*/
infiniteScrollModule.directive('scrollnext', function($log, FetchData){
	return {
		restirct : 'A',
		link : function(scope, element, attr){
			/**Binding the scroll event to the element and defining what to do when scroll happens*/
			element.unbind('scroll').bind('scroll', function(event){
				/**Checking sum of element.scrollTop() & element.get(0).offsetHeight is greater than or equal to element.get(0).scrollHeight*/
				if((element.scrollTop() + element.get(0).offsetHeight) >= element.get(0).scrollHeight){
					/**Calling a service which will load the next set of data*/
					FetchData.getMoreData(scope.$apply(attr.scrollnext));
					/**Setting the scrollTop to element.scrollTop()-1*/
					element.scrollTop(element.scrollTop()-1);
				}
			});
		}
	};
	
});